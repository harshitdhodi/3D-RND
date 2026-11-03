"use client";

import React, { useMemo, useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import {
  Sparkles,
  Move,
  Eye,
  Sliders,
  RotateCcw,
  Compass,
  Activity,
  Layers,
  Zap,
} from "lucide-react";

export interface TestAstronautViewerProps {
  modelPath?: string;
  enableOrbit?: boolean;
}

interface RiggedAstronautModelProps {
  modelPath: string;
  sensitivity: number;
  enableTracking: boolean;
  onTelemetryUpdate?: (yawDeg: number, pitchDeg: number, pointerX: number, pointerY: number) => void;
}

function RiggedAstronautModel({
  modelPath,
  sensitivity,
  enableTracking,
  onTelemetryUpdate,
}: RiggedAstronautModelProps) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  // Auto-Rig Neck & Head bone onto test.glb meshes if not rigged in the file
  const { skinnedScene, neckBone } = useMemo(() => {
    const cloned = scene.clone(true);

    // 1. Check if bones already exist in the model
    let existingNeck: THREE.Object3D | null = null;
    cloned.traverse((obj) => {
      const n = obj.name.toLowerCase();
      if ((obj as THREE.Bone).isBone || obj.type === "Bone") {
        if (n.includes("neck") || n.includes("head")) {
          existingNeck = obj;
        }
      }
    });

    if (existingNeck) {
      return { skinnedScene: cloned, neckBone: existingNeck };
    }

    // 2. test.glb has static Meshy_AI meshes under Mesh_0 parent
    let meshParent: THREE.Object3D | null = null;
    const meshes: THREE.Mesh[] = [];

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const m = child as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
        meshes.push(m);
        meshParent = m.parent;
      }
    });

    if (!meshParent || meshes.length === 0) {
      return { skinnedScene: cloned, neckBone: null };
    }

    // Create 2-joint skeleton: Body (Stationary) + Neck (Articulated Gaze)
    const rootBone = new THREE.Bone();
    rootBone.name = "Body_Stationary_Root";
    rootBone.position.set(0, 0, 0);

    const neck = new THREE.Bone();
    neck.name = "Neck_Articulated_Joint";
    neck.position.set(0, 0, 0.48); // Local height axis (Z=0.48) in test.glb
    rootBone.add(neck);

    meshParent.add(rootBone);

    const skeleton = new THREE.Skeleton([rootBone, neck]);

    meshes.forEach((mesh) => {
      const geo = mesh.geometry.clone();
      const pos = geo.attributes.position;
      const count = pos.count;
      const skinIndices = new Uint16Array(count * 4);
      const skinWeights = new Float32Array(count * 4);

      for (let i = 0; i < count; i++) {
        const z = pos.getZ(i);
        let weightNeck = 0;

        // Neck inflection & smooth transition:
        // z < 0.40 -> Body (100% stationary, zero neck motion)
        // 0.40 <= z <= 0.52 -> Neck Collar transition zone (smooth hermite blend)
        // z > 0.52 -> Helmet & Visor (100% head motion following cursor)
        if (z > 0.52) {
          weightNeck = 1.0;
        } else if (z > 0.40) {
          const t = (z - 0.40) / (0.52 - 0.40);
          weightNeck = t * t * (3 - 2 * t);
        }

        const weightBody = 1.0 - weightNeck;

        skinIndices[i * 4] = 0; // Bone 0 = Body
        skinIndices[i * 4 + 1] = 1; // Bone 1 = Neck
        skinIndices[i * 4 + 2] = 0;
        skinIndices[i * 4 + 3] = 0;

        skinWeights[i * 4] = weightBody;
        skinWeights[i * 4 + 1] = weightNeck;
        skinWeights[i * 4 + 2] = 0;
        skinWeights[i * 4 + 3] = 0;
      }

      geo.setAttribute("skinIndex", new THREE.Uint16BufferAttribute(skinIndices, 4));
      geo.setAttribute("skinWeight", new THREE.Float32BufferAttribute(skinWeights, 4));

      // Build hardware-accelerated SkinnedMesh
      const skinnedMesh = new THREE.SkinnedMesh(geo, mesh.material);
      skinnedMesh.name = mesh.name;
      skinnedMesh.castShadow = true;
      skinnedMesh.receiveShadow = true;
      skinnedMesh.bind(skeleton);

      meshParent!.remove(mesh);
      meshParent!.add(skinnedMesh);
    });

    return { skinnedScene: cloned, neckBone: neck };
  }, [scene]);

  // Frame Loop: Smooth neck interpolation towards cursor
  // IMPORTANT: Whole body does NOT move! Only neckBone is rotated!
  useFrame((state, delta) => {
    if (!neckBone) return;

    const pointerX = state.pointer.x; // -1 (left) to +1 (right)
    const pointerY = state.pointer.y; // -1 (down) to +1 (up)

    // Smooth exponential damping
    const smoothFactor = 1 - Math.exp(-8 * delta);

    if (enableTracking) {
      // Rotate ONLY the neck joint:
      // Local Z rotation controls Yaw (Left/Right look)
      const targetYaw = -pointerX * 0.75 * sensitivity;
      // Local X rotation controls Pitch (Up/Down look)
      const targetPitch = pointerY * 0.45 * sensitivity;
      // Local Y rotation controls subtle organic roll
      const targetRoll = pointerX * 0.12 * sensitivity;

      neckBone.rotation.z = THREE.MathUtils.lerp(neckBone.rotation.z, targetYaw, smoothFactor);
      neckBone.rotation.x = THREE.MathUtils.lerp(neckBone.rotation.x, targetPitch, smoothFactor);
      neckBone.rotation.y = THREE.MathUtils.lerp(neckBone.rotation.y, targetRoll, smoothFactor);

      if (onTelemetryUpdate) {
        const yawDeg = Math.round((neckBone.rotation.z * 180) / Math.PI);
        const pitchDeg = Math.round((neckBone.rotation.x * 180) / Math.PI);
        onTelemetryUpdate(yawDeg, pitchDeg, pointerX, pointerY);
      }
    } else {
      // Smoothly return neck to neutral center
      neckBone.rotation.z = THREE.MathUtils.lerp(neckBone.rotation.z, 0, smoothFactor);
      neckBone.rotation.x = THREE.MathUtils.lerp(neckBone.rotation.x, 0, smoothFactor);
      neckBone.rotation.y = THREE.MathUtils.lerp(neckBone.rotation.y, 0, smoothFactor);
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={2.4}>
      <Center top position={[0, -1.0, 0]}>
        <primitive object={skinnedScene} />
      </Center>
    </group>
  );
}

export default function TestAstronautViewer({
  modelPath = "/test.glb",
  enableOrbit = false,
}: TestAstronautViewerProps) {
  const [sensitivity, setSensitivity] = useState(1.0);
  const [enableTracking, setEnableTracking] = useState(true);
  const [orbitMode, setOrbitMode] = useState(enableOrbit);
  const [lightingPreset, setLightingPreset] = useState<"cyber" | "studio" | "deep-space">("cyber");
  const [telemetry, setTelemetry] = useState({
    yaw: 0,
    pitch: 0,
    px: 0,
    py: 0,
  });

  const handleTelemetry = (yaw: number, pitch: number, px: number, py: number) => {
    setTelemetry({
      yaw,
      pitch,
      px: Number(px.toFixed(2)),
      py: Number(py.toFixed(2)),
    });
  };

  return (
    <div className="relative w-full h-[88vh] min-h-[640px] bg-[#050608] overflow-hidden select-none">
      {/* Ambient background glow and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,212,0,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* 3D WebGL Canvas Covering Full Width */}
      <Canvas
        shadows
        camera={{ position: [0, 0.4, 3.6], fov: 42 }}
        className="w-full h-full cursor-crosshair"
      >
        {/* Lights */}
        <ambientLight intensity={lightingPreset === "deep-space" ? 0.35 : 0.85} />

        {/* Key Golden Rim Light */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={lightingPreset === "studio" ? 2.2 : 3.0}
          color="#FFD400"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Cool Blue Secondary Fill Light */}
        <directionalLight
          position={[-4, 3, 2]}
          intensity={lightingPreset === "cyber" ? 2.5 : 1.2}
          color="#00D2FF"
        />

        {/* Front Soft Face Light */}
        <directionalLight position={[0, 1.5, 4]} intensity={1.1} color="#FFFFFF" />

        {/* Ground Rim Light */}
        <pointLight position={[0, -1.5, 1.5]} intensity={1.2} color="#FFD400" />

        {/* 3D Model with Neck Tracking */}
        <Suspense fallback={null}>
          <RiggedAstronautModel
            modelPath={modelPath}
            sensitivity={sensitivity}
            enableTracking={enableTracking}
            onTelemetryUpdate={handleTelemetry}
          />
        </Suspense>

        {/* Floor Contact Shadows */}
        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.65}
          scale={7}
          blur={1.8}
          far={3}
          color="#000000"
        />

        {/* Optional Orbit Controls when enabled */}
        {orbitMode && (
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={2.0}
            maxDistance={6.0}
            maxPolarAngle={Math.PI / 2 + 0.1}
          />
        )}
      </Canvas>

      {/* ========================================================
          TOP TELEMETRY & STATUS BAR
      ======================================================== */}
      <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
        {/* Left: Active Mode Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0c0e14]/90 border border-white/15 backdrop-blur-xl shadow-2xl pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-ping" />
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#FFD400] font-bold">
              3D Neck Kinematics Active
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">
              Body Ground-Locked • Gaze Follows Cursor
            </span>
          </div>
        </div>

        {/* Right: Realtime Telemetry Data */}
        <div className="hidden sm:flex items-center gap-4 px-4 py-2 rounded-2xl bg-[#0c0e14]/90 border border-white/15 backdrop-blur-xl text-xs font-mono text-neutral-300 pointer-events-auto shadow-2xl">
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">CURSOR:</span>
            <span className="text-[#FFD400] font-bold">
              [{telemetry.px}, {telemetry.py}]
            </span>
          </div>
          <div className="w-[1px] h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">NECK YAW:</span>
            <span className="text-emerald-400 font-bold">{telemetry.yaw}°</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-500">NECK PITCH:</span>
            <span className="text-sky-400 font-bold">{telemetry.pitch}°</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM FLOATING INTERACTIVE CONTROLS HUD
      ======================================================== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-2xl px-6 py-4 rounded-3xl bg-[#0c0e14]/95 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-wrap items-center justify-between gap-4">
        {/* Toggle Tracking */}
        <button
          type="button"
          onClick={() => setEnableTracking(!enableTracking)}
          className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border ${
            enableTracking
              ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.35)]"
              : "bg-white/[0.05] text-neutral-400 border-white/15 hover:text-white"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{enableTracking ? "Neck Tracking: ON" : "Neck Tracking: PAUSED"}</span>
        </button>

        {/* Orbit Mode Toggle */}
        <button
          type="button"
          onClick={() => setOrbitMode(!orbitMode)}
          className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border ${
            orbitMode
              ? "bg-sky-500 text-black font-bold border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.35)]"
              : "bg-white/[0.05] text-neutral-400 border-white/15 hover:text-white"
          }`}
        >
          <Move className="w-3.5 h-3.5" />
          <span>{orbitMode ? "Orbit Camera: ON" : "Orbit Camera: OFF"}</span>
        </button>

        {/* Sensitivity Slider */}
        <div className="flex items-center gap-3">
          <Sliders className="w-3.5 h-3.5 text-[#FFD400]" />
          <span className="text-[11px] font-mono uppercase text-neutral-400">Sensitivity:</span>
          <input
            type="range"
            min="0.4"
            max="2.0"
            step="0.1"
            value={sensitivity}
            onChange={(e) => setSensitivity(parseFloat(e.target.value))}
            className="w-24 accent-[#FFD400] cursor-pointer"
          />
          <span className="text-xs font-mono text-[#FFD400] font-bold w-7">
            {sensitivity.toFixed(1)}x
          </span>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/test.glb");

