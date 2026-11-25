"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  triggerHook?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  yOffset = 24,
  triggerHook = "top 88%",
}: ScrollRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: triggerHook,
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            gsap.set(el, { clearProps: "filter,transform" });
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset, triggerHook]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
