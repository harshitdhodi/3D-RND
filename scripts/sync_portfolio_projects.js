const { MongoClient, ObjectId } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

const CAT_SLUG = 'website-and-web-application-projects';
const CAT_TITLE = 'Website & Web Applications';

const newProjects = [
  {
    slug: 'ostech-automation',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '01',
    title: 'OSTech Industrial Automation Flagship',
    vertical_title: 'OSTECH AUTOMATION PLATFORM',
    subtitle: 'High-Performance Digital Engineering Platform for Industrial Packaging Automation',
    summary: 'High-performance digital engineering platform for industrial packaging automation, featuring dynamic machinery catalogs, conveyor capability matrices, and interactive B2B inquiry funnels.',
    tagline: 'High-performance digital engineering platform for industrial packaging automation.',
    project_type: 'Web Platform & Catalog',
    industry: 'Manufacturing & Industrial',
    image: '/protfolio image/OSTech Laptop in Orbital Showcase.png',
    imgtitle: 'OSTech Industrial Automation Flagship Showcase',
    altname: 'OSTech Industrial Automation Flagship - Web Engineering',
    gallery_images: [
      '/protfolio image/OSTech Laptop in Orbital Showcase.png',
      '/protfolio image/OSTech Industrial Automation.png'
    ],
    client: 'OSTech Industrial Automation',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '10-14 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['Next.js 15', 'TailwindCSS', 'WebGL / Three.js', 'MongoDB', 'AWS CloudFront'],
    brief: 'Deconstruct legacy static catalog into a high-speed orbital interactive web experience featuring real-time 3D CAD visualization and automated conveyor throughput calculators.',
    challenge: 'Legacy machinery catalog was static and failed to communicate advanced conveyor automation telemetry to international procurement committees.',
    solution: 'Developed a high-speed orbital interactive web experience featuring real-time 3D CAD visualization and automated conveyor throughput calculators.',
    deliverables: [
      'Custom Web Platform',
      'Dynamic Machinery Configurator',
      'Automated RFQ Generation',
      'Industrial CAD Viewer'
    ],
    results_metric: '<0.8s',
    results_label: 'Global Edge LCP Velocity',
    tech_stack: ['Next.js 15', 'TailwindCSS', 'WebGL / Three.js', 'MongoDB', 'AWS CloudFront'],
    is_featured: true,
    published: true,
    order: 1,
  },
  {
    slug: 'moultool-systems',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '02',
    title: 'Moultool Systems Precision Engineering Platform',
    vertical_title: 'MOULTOOL PRECISION ENGINEERING PLATFORM',
    subtitle: 'High-Precision Injection Moulding & CNC Tooling Digital Platform',
    summary: 'Custom digital engineering platform for high-precision injection moulds, die manufacturing, multi-cavity tooling catalogs, and automated RFQ quotation workflows.',
    tagline: 'Precision, perfected, proven. Engineering excellence in precision injection moulds and tooling innovation.',
    project_type: 'Web Platform & Technical Catalog',
    industry: 'Manufacturing & Precision Tooling',
    image: '/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png',
    imgtitle: 'Moultool Systems Precision Engineering Platform Showcase',
    altname: 'Moultool Systems Precision Engineering Platform - Web Development',
    gallery_images: [
      '/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png',
      '/protfolio image/Moultool Systems Tooling Capabilities and Machine Fleet.png',
      '/protfolio image/Moultool Systems Responsive Mobile Engineering Portal.png'
    ],
    client: 'Moultool Systems Pvt. Ltd.',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '8-12 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'CAD Viewer Engine', 'MongoDB', 'Cloudflare CDN'],
    brief: 'Construct a state-of-the-art digital tooling portal showcasing precision injection moulds, CNC machine fleets, and automated multi-cavity RFQ technical documentation.',
    challenge: 'Moultool required an authoritative digital presence to display tight-tolerance tooling capabilities (caps, closures, medical diagnostics) and convert global industrial procurement inquiries.',
    solution: 'Engineered a modern dark aesthetic web platform with interactive mold specification sheets, automated CAD file uploads, and direct B2B RFQ routing.',
    deliverables: [
      'High-Precision Tooling Catalog',
      'Interactive Mould Specification Sheets',
      'CAD / Technical Drawing Upload Vault',
      'Automated Industrial RFQ Dispatcher'
    ],
    results_metric: '<0.72s',
    results_label: 'LCP Edge Speed',
    tech_stack: ['Next.js', 'TailwindCSS', 'Node.js', 'CAD Viewer Engine', 'MongoDB', 'Cloudflare CDN'],
    is_featured: true,
    published: true,
    order: 2,
    child_page: {
      before_title: 'Legacy Static Catalog & 5-Day Manual RFQ Turnaround',
      before_description: 'The legacy tooling web presence lacked technical machine specifications, had no digital RFQ mechanism for multi-cavity moulds, and relied on manual phone and email follow-ups.',
      after_title: 'Next-Gen Precision Mould Engineering & Instant RFQ Architecture',
      after_description: 'RND Technosoft engineered an ultra-fast digital tooling platform with interactive mold specification sheets, automated CAD file uploads, and direct B2B RFQ routing.',
      legacy_points: 'Static PDF brochures with outdated machine lists,No interactive cavity or tooling material selector,Average 5-day response time for complex tooling quotes,Zero mobile responsiveness for plant floor engineers',
      modern_points: 'Real-time multi-cavity mould selector & capability matrix,Direct step-by-step technical RFQ builder with CAD upload,Sub-second edge rendering with global Cloudflare CDN,100% mobile-optimized for procurement teams and plant managers',
      comparison_metrics: [
        { label: 'Global LCP Speed', before: '4.62s', after: '0.72s', improvement: '84% Faster', subtext: 'Edge SSR on Vercel' },
        { label: 'International RFQs', before: '5/month', after: '34/month', improvement: '+580% Lift', subtext: 'Interactive B2B funnel' },
        { label: 'Mobile Conversion', before: '1.2%', after: '4.8%', improvement: '4x Higher', subtext: 'Responsive technical UI' },
        { label: 'RFQ Turnaround', before: '5 Days', after: '4 Hours', improvement: '95% Faster', subtext: 'Automated CRM routing' }
      ],
      process_steps: [
        {
          number: '01',
          title: 'Tooling Audit & Technical Scope',
          duration: 'Weeks 1 - 2',
          image: '/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png',
          desc: 'Conducted engineering stakeholder interviews, audited CNC/VMC machinery tolerances, and mapped tooling categories spanning caps, medical pharma, and electrical components.',
          deliverables: 'Machinery Capability Matrix,Technical Scope Blueprint,User Persona Telemetry Profile,System Architecture Spec'
        },
        {
          number: '02',
          title: 'Information Architecture & Tooling UX',
          duration: 'Weeks 3 - 4',
          image: '/protfolio image/Moultool Systems Tooling Capabilities and Machine Fleet.png',
          desc: 'Structured intuitive product categorization, drafted CAD file submission workflows, and designed clear technical data tables for injection moulding parameters.',
          deliverables: 'High-Fidelity Wireframes,Interactive Tooling Flowchart,Clickable Prototype,Component Hierarchy'
        },
        {
          number: '03',
          title: 'Industrial Design System & UI Immersion',
          duration: 'Weeks 5 - 6',
          image: '/protfolio image/Moultool Systems Responsive Mobile Engineering Portal.png',
          desc: 'Developed a high-contrast dark industrial aesthetic featuring precision amber accents, micro-interactions, and high-resolution CNC machine photography integration.',
          deliverables: 'Design System in Figma,Iconography & Vector Sets,Retina Display Asset Exports,Multi-Viewport UI Signoff'
        },
        {
          number: '04',
          title: 'Full-Stack Next.js Engineering',
          duration: 'Weeks 7 - 9',
          image: '/protfolio image/Moultool Systems Precision Engineering Desktop Showcase.png',
          desc: 'Implemented Next.js App Router, TailwindCSS layout grids, MongoDB database schemas for product specifications, and secure encrypted file upload conduits.',
          deliverables: 'Next.js App Router Codebase,Serverless RFQ API Endpoints,MongoDB Schema Integration,Encrypted CAD File Handlers'
        },
        {
          number: '05',
          title: 'Performance Optimization & QA Testing',
          duration: 'Weeks 10 - 11',
          image: '/protfolio image/Moultool Systems Tooling Capabilities and Machine Fleet.png',
          desc: 'Rigorous cross-browser testing across mobile, tablet, and 4K desktop monitors. Minimized JavaScript bundles to achieve Lighthouse 98+ performance metrics.',
          deliverables: 'Lighthouse 98+ Performance Report,Cross-Device Compatibility Matrix,Security Penetration Signoff,Edge Cache Warmup Protocol'
        },
        {
          number: '06',
          title: 'Production Deployment & CMS Handover',
          duration: 'Week 12',
          image: '/protfolio image/Moultool Systems Responsive Mobile Engineering Portal.png',
          desc: 'Live zero-downtime DNS deployment to production infrastructure, search engine indexing verification, and complete operational handover to client leadership.',
          deliverables: 'Production Deployment,Google Search Console Verification,Admin Operations Manual,Project Codebase Handover'
        }
      ],
      telemetry_metrics: [
        { metric: '<0.72s', label: 'Global LCP Speed', verified: 'Lighthouse Audit' },
        { metric: '99.98%', label: 'Production Uptime SLA', verified: 'Cloudflare Analytics' },
        { metric: '+580%', label: 'International RFQs', verified: 'Google Analytics' },
        { metric: '100%', label: 'Client Signoff', verified: 'Approved' }
      ],
      testimonial_quote: 'The digital engineering platform developed by RND Technosoft completely modernized our business. International buyers now review our machine specifications and send precision RFQs directly.',
      testimonial_author: 'Rajesh Panchal',
      testimonial_role: 'Managing Director, Moultool Systems Pvt. Ltd.',
      seo_title: 'Moultool Systems Precision Engineering Platform | Case Study',
      seo_description: 'How RND Technosoft engineered a sub-second digital tooling platform for Moultool Systems, accelerating international RFQ pipeline by +580%.'
    }
  },
  {
    slug: 'oppl-packaging-solutions',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '03',
    title: 'OPPL Sustainable Packaging Architecture',
    vertical_title: 'OPPL PACKAGING PLATFORM',
    subtitle: 'Next-Gen Corrugated, Mono Carton & Sustainable Box Engineering Suite',
    summary: 'Enterprise packaging web platform featuring interactive 3D box folding physics, carton structural calculators, and automated sample dispatch tracking.',
    tagline: 'Made to protect. Designed to perform. Built to represent modern brands.',
    project_type: 'Web Platform & 3D Packaging Suite',
    industry: 'Industrial Packaging & FMCG',
    image: '/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png',
    imgtitle: 'OPPL Sustainable Packaging Architecture Showcase',
    altname: 'OPPL Sustainable Packaging Platform - Web Application',
    gallery_images: [
      '/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png',
      '/protfolio image/OPPL Mono Cartons and Corrugated Product Catalog.png',
      '/protfolio image/OPPL Responsive Mobile Packaging Suite.png'
    ],
    client: 'Omkar Polymers & Packaging Ltd. (OPPL)',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '10-14 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['Next.js 15', 'Three.js / WebGL', 'TailwindCSS', 'PostgreSQL', 'Cloudflare CDN'],
    brief: 'Build a next-generation digital packaging platform allowing FMCG and industrial buyers to explore corrugated cartons, mono cartons, and sustainable paperboard solutions in real time.',
    challenge: 'Traditional paperboard packaging sales relied on printed catalogs and manual phone calls to calculate box burst strength, GSM paper tiers, and order minimums.',
    solution: 'Engineered an interactive 3D web platform with live carton fold visualizers, automated substrate strength calculators, and seamless sample dispatch workflows.',
    deliverables: [
      'Interactive 3D Packaging Configurator',
      'Carton GSM & Fluting Strength Calculator',
      'Automated Sample Box Request Flow',
      'Enterprise Client Portfolio Showcase'
    ],
    results_metric: '+466%',
    results_label: 'Direct Sample Inquiries',
    tech_stack: ['Next.js 15', 'Three.js / WebGL', 'TailwindCSS', 'PostgreSQL', 'Cloudflare CDN'],
    is_featured: true,
    published: true,
    order: 3,
    child_page: {
      before_title: 'Static Paperboard Catalogs & Manual Weight Estimation',
      before_description: 'Buyers had to wait days for printed swatch kits and calculate carton specifications manually, resulting in dropped inquiries and sluggish lead response times.',
      after_title: 'Interactive 3D Carton Configurator & Automated GSM Specification Portal',
      after_description: 'RND Technosoft engineered a sub-second web experience with real-time 3D box fold physics, instant GSM substrate calculation, and direct sample request dispatch.',
      legacy_points: 'Static PDF catalogs lacking realistic carton dimensions,No interactive fluting (E, B, C flute) or substrate preview,Phone-based quote negotiation taking 3 to 5 business days,High bounce rate on mobile devices from unoptimized PDFs',
      modern_points: 'Real-time 3D interactive carton viewer with realistic paper textures,Instant burst factor and volume capacity calculator,Automated sample kit dispatch linked directly to factory inventory,Blazing-fast mobile responsiveness with sub-second page loads',
      comparison_metrics: [
        { label: 'Catalog Dwell Time', before: '1m 10s', after: '5m 25s', improvement: '+364% Time', subtext: 'Interactive 3D models' },
        { label: 'Sample Box Requests', before: '12/month', after: '68/month', improvement: '+466% Lift', subtext: 'Self-serve sample portal' },
        { label: 'Mobile Bounce Rate', before: '64%', after: '18%', improvement: '-72% Bounce', subtext: 'Sub-second mobile speed' },
        { label: 'Order Pipeline Velocity', before: '14 Days', after: '3 Days', improvement: '78% Faster', subtext: 'Automated CRM funnel' }
      ],
      process_steps: [
        {
          number: '01',
          title: 'Packaging Engineering Audit',
          duration: 'Weeks 1 - 2',
          image: '/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png',
          desc: 'Analyzed corrugated box standards, mono carton finishing options (UV, foil, embossing), and audited procurement decision flows for food, pharma, and retail brands.',
          deliverables: 'Carton Specification Matrix,Technical Feasibility Matrix,User Journey Map,Project Roadmap'
        },
        {
          number: '02',
          title: '3D Simulation & UX Wireframing',
          duration: 'Weeks 3 - 5',
          image: '/protfolio image/OPPL Mono Cartons and Corrugated Product Catalog.png',
          desc: 'Modeled low-poly 3D packaging geometries with realistic fold rigging and designed an intuitive step-by-step custom box dimension configurator.',
          deliverables: '3D WebGL Low-Poly Assets,Interactive UI Wireframes,Packaging Spec Flowcharts,Clickable Prototype'
        },
        {
          number: '03',
          title: 'Design System & Component Library',
          duration: 'Weeks 6 - 8',
          image: '/protfolio image/OPPL Responsive Mobile Packaging Suite.png',
          desc: 'Created an elegant sustainable brand aesthetic featuring cyan and forest green tones, micro-animations, and responsive product card grids.',
          deliverables: 'Figma Atomic Design Tokens,Component Architecture,Carton Iconography Suite,Viewport Layout Signoff'
        },
        {
          number: '04',
          title: 'Full-Stack Next.js 15 & WebGL Build',
          duration: 'Weeks 9 - 11',
          image: '/protfolio image/OPPL Sustainable Packaging Platform Desktop Showcase.png',
          desc: 'Coded with Next.js 15 App Router, Three.js canvas shaders, automated weight and volume calculation engines, and CRM lead capture conduits.',
          deliverables: 'Three.js 3D Viewport Component,Next.js 15 Frontend Repository,Sample Request API Endpoints,Database Integration'
        },
        {
          number: '05',
          title: 'Rigorous Testing & Core Web Vitals',
          duration: 'Weeks 12 - 13',
          image: '/protfolio image/OPPL Mono Cartons and Corrugated Product Catalog.png',
          desc: 'Audited 3D render frame rates across low-end mobile devices, verified form submission security, and optimized assets to achieve 60 FPS performance.',
          deliverables: 'Lighthouse 98+ Optimization Report,Cross-Device Compatibility Matrix,Zero-Vulnerability Security Audit,Performance Telemetry'
        },
        {
          number: '06',
          title: 'Production Launch & Factory Sync',
          duration: 'Week 14',
          image: '/protfolio image/OPPL Responsive Mobile Packaging Suite.png',
          desc: 'Seamless production launch on global CDN infrastructure, integrated with factory inventory dispatch systems, and complete handover.',
          deliverables: 'Live Production Launch,Global CDN Optimization,Client Operations Handover,Source Code Repository Handover'
        }
      ],
      telemetry_metrics: [
        { metric: '<0.75s', label: 'Global LCP Speed', verified: 'Lighthouse Audit' },
        { metric: '99.99%', label: 'Production Uptime SLA', verified: 'Cloudflare Edge' },
        { metric: '+466%', label: 'Sample Box Requests', verified: 'Google Analytics' },
        { metric: '100%', label: 'Client Approved', verified: 'Signed Off' }
      ],
      testimonial_quote: 'The 3D packaging platform created by RND Technosoft has revolutionized how we pitch to FMCG brands. Clients can configure box dimensions and request physical samples in under two minutes.',
      testimonial_author: 'Kunal Shah',
      testimonial_role: 'Director of Operations, OPPL Packaging Ltd.',
      seo_title: 'OPPL Sustainable Packaging Architecture | Case Study',
      seo_description: 'How RND Technosoft engineered an interactive 3D packaging web platform for OPPL, delivering +466% sample inquiries and 78% faster sales cycles.'
    }
  },
  {
    slug: 'hyginelab-commercial-care',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '04',
    title: 'HygineLab Commercial Chemical & Facility Care Portal',
    vertical_title: 'HYGINELAB FACILITY PLATFORM',
    subtitle: 'B2B Institutional Cleaning Chemicals & Mechanized Janitorial Platform',
    summary: 'Comprehensive institutional hygiene portal featuring mechanized floor scrubbers, chemical dilution calculators, instant MSDS safety downloads, and wholesale ordering funnels.',
    tagline: 'Advanced chemical engineering for commercial hygiene and institutional facility care.',
    project_type: 'B2B Chemical & Machinery Portal',
    industry: 'Commercial Cleaning & Facility Care',
    image: '/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png',
    imgtitle: 'HygineLab Commercial Chemical Solutions Showcase',
    altname: 'HygineLab Commercial Chemical & Facility Care Portal - Web Development',
    gallery_images: [
      '/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png',
      '/protfolio image/HygineLab Industrial Machinery and Disinfection Portal.png',
      '/protfolio image/HygineLab Mobile Facility Hygiene Platform.png'
    ],
    client: 'HygineLab Chemical Innovations',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '8-11 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS S3 Vault', 'TailwindCSS'],
    brief: 'Create a high-compliance digital facility management portal allowing commercial cleaning contractors and hospitals to order specialized sanitation chemicals and mechanized equipment.',
    challenge: 'Procurement officers faced friction obtaining safety data sheets (MSDS), verifying industrial disinfectant dilutions, and ordering replacement parts for heavy floor scrubbers.',
    solution: 'Engineered an enterprise hygiene portal with instant regulatory MSDS downloads, interactive dosage calculators, and video demonstrations of mechanized cleaning machinery.',
    deliverables: [
      'Chemical & Janitorial Machinery Catalog',
      'Instant Regulatory MSDS Document Vault',
      'Automated Chemical Dilution Ratio Calculator',
      'Wholesale Contractor RFQ Pipeline'
    ],
    results_metric: '+380%',
    results_label: 'Institutional B2B Inquiries',
    tech_stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AWS S3 Vault', 'TailwindCSS'],
    is_featured: true,
    published: true,
    order: 4,
    child_page: {
      before_title: 'Fragmented Product Lists & Missing Regulatory MSDS Access',
      before_description: 'Hospital and corporate facility buyers had to email support for chemical compliance documentation and faced manual ordering delays for cleaning equipment.',
      after_title: 'Comprehensive Institutional Chemical Portal with Automated Dosage Calculators',
      after_description: 'RND Technosoft built an enterprise facility platform featuring instant MSDS downloads, mechanized scrubber equipment demonstrations, and streamlined wholesale ordering funnels.',
      legacy_points: 'Unsecured static product lists without technical dosage guidance,Manual email requests required for mandatory MSDS safety certificates,No equipment video demonstrations for mechanized floor scrubbers,Sluggish load speeds on mobile networks used by cleaning supervisors',
      modern_points: 'Self-serve 1-click regulatory MSDS download vault on AWS S3,Interactive chemical dilution ratio and square-meter coverage calculator,Comprehensive mechanized equipment catalog with video integration,Sub-second edge performance optimized for mobile facility managers',
      comparison_metrics: [
        { label: 'Institutional Enquiries', before: '15/month', after: '72/month', improvement: '+380% Lift', subtext: 'Targeted hospital & corporate funnel' },
        { label: 'MSDS Access Speed', before: '24-48 Hours', after: 'Instant (<0.5s)', improvement: 'Immediate', subtext: 'Direct S3 vault access' },
        { label: 'Order Processing Time', before: '48 Hours', after: '2 Hours', improvement: '95% Faster', subtext: 'Automated inquiry dispatch' },
        { label: 'Mobile Conversion', before: '1.5%', after: '5.2%', improvement: '3.4x Higher', subtext: 'Streamlined mobile RFQ' }
      ],
      process_steps: [
        {
          number: '01',
          title: 'Regulatory & Sanitation Audit',
          duration: 'Weeks 1 - 2',
          image: '/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png',
          desc: 'Reviewed compliance standards for commercial disinfectants, degreasers, and automated scrubbing machinery across healthcare, hospitality, and corporate facility verticals.',
          deliverables: 'Chemical Safety Requirements Matrix,User Flow Blueprint,Technical Feasibility Matrix,Project Roadmap'
        },
        {
          number: '02',
          title: 'Architecture & Dosage UX Flow',
          duration: 'Weeks 3 - 4',
          image: '/protfolio image/HygineLab Industrial Machinery and Disinfection Portal.png',
          desc: 'Designed user journeys for facility supervisors, including instant MSDS filtering, chemical application calculators, and bulk container logistics selectors.',
          deliverables: 'Wireframes & User Journeys,Dosage Calculator Logic,Clickable Prototype,Component Hierarchy'
        },
        {
          number: '03',
          title: 'Design System & Industrial Visuals',
          duration: 'Weeks 5 - 6',
          image: '/protfolio image/HygineLab Mobile Facility Hygiene Platform.png',
          desc: 'Crafted a clinical, modern visual identity featuring emerald green and crisp white accents, intuitive chemical hazard badges, and high-res machinery media.',
          deliverables: 'Figma Component Tokens,Hazard & Eco Iconography,Product Card Layouts,Multi-Device UI Signoff'
        },
        {
          number: '04',
          title: 'Full-Stack Next.js & S3 Integration',
          duration: 'Weeks 7 - 9',
          image: '/protfolio image/HygineLab Commercial Chemical Solutions Desktop Showcase.png',
          desc: 'Built with Next.js App Router, TailwindCSS, MongoDB product catalogs, and secure pre-signed AWS S3 download conduits for MSDS documentation.',
          deliverables: 'Next.js Frontend Codebase,AWS S3 Pre-Signed Document Vault,Automated RFQ Emailer,MongoDB Collection Integration'
        },
        {
          number: '05',
          title: 'Cross-Device & Mobile Field Testing',
          duration: 'Week 10',
          image: '/protfolio image/HygineLab Industrial Machinery and Disinfection Portal.png',
          desc: 'Tested on mobile devices under low-connectivity warehouse conditions to ensure rapid document retrieval and frictionless order submissions.',
          deliverables: 'Lighthouse 98+ Performance Signoff,Mobile Field Audit Matrix,Security Vulnerability Audit,Edge Optimization'
        },
        {
          number: '06',
          title: 'Production Rollout & Team Handover',
          duration: 'Week 11',
          image: '/protfolio image/HygineLab Mobile Facility Hygiene Platform.png',
          desc: 'Deployed on production CDN infrastructure, verified Google search indexing for sanitation terms, and trained client personnel on the administrative CMS.',
          deliverables: 'Production Launch,Google Search Console Verification,CMS Training Session,Full Source Code Handover'
        }
      ],
      telemetry_metrics: [
        { metric: '<0.8s', label: 'Global LCP Speed', verified: 'Lighthouse Audit' },
        { metric: '99.99%', label: 'Production Uptime SLA', verified: 'Cloudflare Edge' },
        { metric: '+380%', label: 'Institutional Inquiries', verified: 'Google Analytics' },
        { metric: '100%', label: 'Client Signoff', verified: 'Approved' }
      ],
      testimonial_quote: 'RND Technosoft gave us an institutional digital platform that commands immediate trust from facility managers and hospital directors. Having instant MSDS downloads and dosage calculators set us apart from competitors.',
      testimonial_author: 'Dr. Amit Varma',
      testimonial_role: 'VP Technical & Quality, HygineLab Chemical Innovations',
      seo_title: 'HygineLab Commercial Chemical & Facility Care Portal | Case Study',
      seo_description: 'How RND Technosoft engineered an institutional chemical and facility care web platform for HygineLab, delivering +380% B2B inquiry growth.'
    }
  },
  {
    slug: 'jyoti-umbrella-kinetic-storm',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '05',
    title: 'Jyoti Umbrella 3D Kinetic Storm Defense Storefront',
    vertical_title: 'JYOTI UMBRELLA 3D PLATFORM',
    subtitle: 'Next-Generation Aerodynamic Umbrella Engineering & E-Commerce Flagship',
    summary: 'Aerodynamic 3D web experience with interactive canopy folding, wind-tunnel storm simulations, and instant consumer & corporate gifting checkout.',
    tagline: '3D kinetic storm defense. 210T hydrophobic nano-weave, unbreakable flex-carbon ribs.',
    project_type: '3D E-Commerce & Brand Flagship',
    industry: 'Consumer Retail & Performance Rainwear',
    image: '/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
    imgtitle: 'Jyoti Umbrella 3D Kinetic Storm Defense Showcase',
    altname: 'Jyoti Umbrella 3D Kinetic Storm Defense Storefront - E-Commerce Engineering',
    gallery_images: [
      '/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
      '/protfolio image/Jyoti Umbrella Performance Models and Carbon Ribs.png',
      '/protfolio image/Jyoti Umbrella Mobile E-Commerce Storefront.png'
    ],
    client: 'Jyoti Umbrella Industries',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '10-14 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['Next.js 15', 'Three.js / WebGL', 'TailwindCSS', 'Stripe API', 'Vercel Edge'],
    brief: 'Transform a heritage rainwear manufacturer into a high-tech kinetic storm defense brand with real-time 3D umbrella deployment and an e-commerce shopping funnel.',
    challenge: 'Jyoti Umbrella was historically restricted to seasonal offline distribution networks without an interactive medium to show its patented flex-carbon wind resistance to modern retail buyers.',
    solution: 'Constructed an aerodynamic 3D e-commerce platform with real-time umbrella deployment physics, wind-tunnel storm simulators, and automated corporate gifting quote builders.',
    deliverables: [
      'Interactive 3D Kinetic Umbrella Configurator',
      'Wind-Tunnel Aerodynamic Telemetry Simulator',
      'Corporate Gifting & Bulk Branding Engine',
      'Mobile-First E-Commerce Shopping Cart'
    ],
    results_metric: '+410%',
    results_label: 'Direct D2C Revenue Growth',
    tech_stack: ['Next.js 15', 'Three.js / WebGL', 'TailwindCSS', 'Stripe API', 'Vercel Edge'],
    is_featured: true,
    published: true,
    order: 5,
    child_page: {
      before_title: 'Offline Seasonal Wholesaling & Zero Interactive Digital Brand Presence',
      before_description: 'The brand relied exclusively on offline monsoon distribution cycles, with no digital channel to demonstrate aerodynamic flex-carbon ribs or capture direct retail margin.',
      after_title: 'Interactive 3D Kinetic Deployment & High-Converting Rainwear Storefront',
      after_description: 'RND Technosoft engineered an aerodynamic 3D web experience with interactive canopy folding, wind-tunnel storm simulations, and instant consumer & corporate gifting checkout.',
      legacy_points: 'Zero direct-to-consumer e-commerce sales channel,No method to prove unbreakable carbon-rib engineering to consumers online,Reliance on 2-month annual monsoon wholesaler cash flows,Static paper catalogs with no colorway or size visualization',
      modern_points: 'Real-time 60 FPS Three.js 3D umbrella orbit, open & fold animation,Interactive simulated 85 km/h wind tunnel stress test demonstration,Direct-to-consumer checkout plus automated corporate gifting quoting,Sub-second mobile checkout conversion architecture',
      comparison_metrics: [
        { label: 'D2C Direct Revenue', before: '$0/year', after: '+410% YoY', improvement: 'New Channel', subtext: 'Omnichannel D2C & gifting' },
        { label: 'Corporate Gifting Inquiries', before: '8/quarter', after: '54/quarter', improvement: '+575% Lift', subtext: 'Bulk custom branding funnel' },
        { label: 'Mobile Dwell Time', before: '38 sec', after: '4m 12s', improvement: '6.6x Longer', subtext: '3D interactive engagement' },
        { label: 'Cart Abandonment', before: '72%', after: '22%', improvement: '-50% Drop', subtext: 'Frictionless edge checkout' }
      ],
      process_steps: [
        {
          number: '01',
          title: 'Aerodynamic Discovery & 3D CAD Extraction',
          duration: 'Weeks 1 - 2',
          image: '/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
          desc: 'Extracted mechanical CAD schematics of flex-carbon rib joints and 210T hydrophobic fabric weaves to formulate precision 3D WebGL assets.',
          deliverables: 'CAD Asset Conversion Spec,Digital Roadmap,User Persona Mapping,Technical Architecture Blueprint'
        },
        {
          number: '02',
          title: '3D Simulation & Interactive Prototyping',
          duration: 'Weeks 3 - 5',
          image: '/protfolio image/Jyoti Umbrella Performance Models and Carbon Ribs.png',
          desc: 'Rigged 3D umbrella models in Blender with kinematic folding bones and simulated water droplet repelling shaders on hydrophobic surface textures.',
          deliverables: 'WebGL 3D Kinematic Models,Interactive Folding Animation,Clickable Wireframe Prototype,Shading Pipeline'
        },
        {
          number: '03',
          title: 'Futuristic Techwear Design System',
          duration: 'Weeks 6 - 8',
          image: '/protfolio image/Jyoti Umbrella Mobile E-Commerce Storefront.png',
          desc: 'Crafted a stealth cyber-tactical aesthetic with bold safety orange and slate accents, bespoke typography, and high-contrast technical product specs.',
          deliverables: 'Design System in Figma,Rainwear Iconography,Typography Tokens,Multi-Viewport UI Signoff'
        },
        {
          number: '04',
          title: 'Full-Stack Next.js 15 & Cart Architecture',
          duration: 'Weeks 9 - 11',
          image: '/protfolio image/Jyoti Umbrella 3D Kinetic Storm Defense Desktop Showcase.png',
          desc: 'Integrated Three.js inside Next.js 15 App Router, coupled with secure payment gateway integration, inventory synchronization, and corporate quoting APIs.',
          deliverables: 'Next.js 15 App Router Codebase,Three.js Interactive Canvas Component,Checkout & Payment Endpoints,Corporate Inquiry Vault'
        },
        {
          number: '05',
          title: 'Performance & 60 FPS Framerate Tuning',
          duration: 'Weeks 12 - 13',
          image: '/protfolio image/Jyoti Umbrella Performance Models and Carbon Ribs.png',
          desc: 'Optimized WebGL draw calls and compressed glTF 3D meshes to ensure buttery-smooth 60 FPS rendering on smartphones and budget hardware.',
          deliverables: '60 FPS Framerate Audit Signoff,Lighthouse 98+ Performance Report,Cross-Browser Mobile Compatibility,Security Signoff'
        },
        {
          number: '06',
          title: 'Global Launch & Marketing Handover',
          duration: 'Week 14',
          image: '/protfolio image/Jyoti Umbrella Mobile E-Commerce Storefront.png',
          desc: 'Deployed on Vercel Edge with global Cloudflare caching, initialized Google Shopping merchant feeds, and completed full handover.',
          deliverables: 'Live Production Launch,Global CDN Edge Warmup,Google Merchant Center Feeds,Client Handover Manual'
        }
      ],
      telemetry_metrics: [
        { metric: '60 FPS', label: '3D WebGL Framerate', verified: 'Chrome DevTools' },
        { metric: '<0.7s', label: 'Global Edge LCP', verified: 'Lighthouse Audit' },
        { metric: '+410%', label: 'Direct D2C Revenue', verified: 'Payment Telemetry' },
        { metric: '100%', label: 'Deliverables Handover', verified: 'Client Approved' }
      ],
      testimonial_quote: 'The 3D kinetic storefront designed by RND Technosoft catapulted Jyoti Umbrella from an offline supplier into a nationally recognized performance techwear brand. Customers are mesmerized by the 3D umbrella interactions.',
      testimonial_author: 'Devendra Chhadva',
      testimonial_role: 'Director, Jyoti Umbrella Industries',
      seo_title: 'Jyoti Umbrella 3D Kinetic Storm Defense Storefront | Case Study',
      seo_description: 'How RND Technosoft engineered an aerodynamic 3D kinetic rainwear platform for Jyoti Umbrella, driving +410% direct-to-consumer revenue.'
    }
  },
  {
    slug: 'taga-luxury-architectural-systems',
    category_slug: CAT_SLUG,
    category_title: CAT_TITLE,
    index: '06',
    title: 'TAGA Luxury Aluminium Architectural Systems',
    vertical_title: 'TAGA LUXURY ARCHITECTURAL PLATFORM',
    subtitle: 'Minimalist Trackless Sliding Systems, Motorized Guillotines & Thermal-Break Facades',
    summary: 'Luxury architectural atelier web portal with interactive system cross-sections, sound insulation decibel comparisons, and online studio tour reservations.',
    tagline: 'The refined evolution of two decades in luxury aluminium doors, windows, and soundproof facades.',
    project_type: 'Architectural Platform & Atelier Showcase',
    industry: 'Luxury Architecture & Building Systems',
    image: '/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png',
    imgtitle: 'TAGA Luxury Aluminium Architectural Systems Showcase',
    altname: 'TAGA Luxury Aluminium Architectural Systems - Architectural Web Portal',
    gallery_images: [
      '/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png',
      '/protfolio image/TAGA Motorized Guillotine and Acoustic Systems.png',
      '/protfolio image/TAGA Mobile Luxury Architectural Atelier.png'
    ],
    client: 'TAGA Architectural Windows & Facades',
    client_approved: true,
    project_date: '2026',
    year: '2026',
    duration: '10-14 Weeks',
    sla: '99.99% Uptime',
    badge: 'FEATURED CASE STUDY',
    tags: ['Next.js', 'TailwindCSS', 'GSAP ScrollTrigger', 'WebGL', 'PostgreSQL', 'Cloudflare CDN'],
    brief: 'Create an ultra-luxury digital atelier experience showcasing grand 5-meter motorized guillotine windows, trackless sliding doors, and acoustic soundproof facades to elite architects and high-net-worth homeowners.',
    challenge: 'High-end architectural buyers could not perceive the structural stability, airtight acoustic seals (45dB sound reduction), or slim 18mm sightlines through traditional brochure photography.',
    solution: 'Crafted a bespoke dark architectural web platform featuring interactive decibel noise sliders, thermal U-value calculators, and high-definition architectural project portfolios.',
    deliverables: [
      'Luxury Architectural Systems Showcase',
      'Interactive Acoustic Sound Reduction Simulator',
      'Thermal-Break & U-Value Calculator',
      'Private Atelier Studio Tour Booking Engine'
    ],
    results_metric: '+533%',
    results_label: 'Architect & HNW Enquiries',
    tech_stack: ['Next.js', 'TailwindCSS', 'GSAP ScrollTrigger', 'WebGL', 'PostgreSQL', 'Cloudflare CDN'],
    is_featured: true,
    published: true,
    order: 6,
    child_page: {
      before_title: 'Standard Photo Galleries Failing to Convey Grand Engineering & Acoustic Ratings',
      before_description: 'Architects and luxury villa developers could not appreciate the engineering complexity, zero-threshold trackless transitions, or 45dB acoustic isolation through flat photos.',
      after_title: 'High-Impact Architectural Atelier Portal with Acoustic & Thermal Telemetry',
      after_description: 'RND Technosoft designed a bespoke dark minimalist aesthetic featuring interactive system cross-sections, sound insulation decibel comparisons, and online studio tour reservations.',
      legacy_points: 'Generic photo gallery with zero technical engineering specifications,No demonstration of soundproofing dB ratings or thermal transmittance,Manual inquiry form with no project blueprint attachment capabilities,Unresponsive mobile layout that failed to load on architects iPads',
      modern_points: 'Interactive acoustic soundproof decibel slider showing real-world sound suppression,Technical blueprint viewer for 18mm slim sightlines and trackless thresholds,Private atelier tour reservation engine with calendar booking integration,High-definition responsive portfolio showcasing landmark villa installations',
      comparison_metrics: [
        { label: 'Architect & Builder Enquiries', before: '6/month', after: '38/month', improvement: '+533% Growth', subtext: 'High-intent residential & commercial leads' },
        { label: 'Average Contract Value', before: 'Baseline', after: '+65% Ticket', improvement: 'Premium Tier', subtext: 'Grand 5-meter systems' },
        { label: 'Atelier Tour Bookings', before: '4/month', after: '26/month', improvement: '+550% Lift', subtext: 'In-person VIP consultations' },
        { label: 'Architect Dwell Time', before: '1m 20s', after: '6m 15s', improvement: '4.7x Longer', subtext: 'Interactive blueprint engagement' }
      ],
      process_steps: [
        {
          number: '01',
          title: 'Architectural Blueprint & Spec Audit',
          duration: 'Weeks 1 - 2',
          image: '/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png',
          desc: 'Audited European hardware specifications, acoustic test certificates (up to 45dB), and studied architect decision cycles for luxury residential estates.',
          deliverables: 'Architectural Specification Matrix,User Flow Blueprint,Technical Feasibility Matrix,Project Roadmap'
        },
        {
          number: '02',
          title: 'Interactive System UX & Wireframing',
          duration: 'Weeks 3 - 5',
          image: '/protfolio image/TAGA Motorized Guillotine and Acoustic Systems.png',
          desc: 'Designed interactive cross-section explorers, acoustic soundproofing sliders, and an atelier studio tour scheduling interface.',
          deliverables: 'High-Fidelity Wireframes,Acoustic Simulation Logic,Clickable Prototype,Component Hierarchy'
        },
        {
          number: '03',
          title: 'Minimalist Dark Luxury Aesthetic',
          duration: 'Weeks 6 - 8',
          image: '/protfolio image/TAGA Mobile Luxury Architectural Atelier.png',
          desc: 'Engineered a sophisticated dark architectural theme with warm champagne gold accents, monumental typography, and architectural photography.',
          deliverables: 'Design Tokens in Figma,Custom Architectural Iconography,Luxury Typography Hierarchy,Multi-Device UI Signoff'
        },
        {
          number: '04',
          title: 'Next.js & GSAP Kinetic Engineering',
          duration: 'Weeks 9 - 11',
          image: '/protfolio image/TAGA Luxury Aluminium Architectural Desktop Showcase.png',
          desc: 'Programmed buttery-smooth GSAP ScrollTrigger transitions, Next.js App Router server components, and PostgreSQL database storage for project portfolios.',
          deliverables: 'Next.js App Router Repository,GSAP Animation Curves,Atelier Booking API Endpoints,Database Schema Integration'
        },
        {
          number: '05',
          title: 'Performance & High-DPI Optimization',
          duration: 'Weeks 12 - 13',
          image: '/protfolio image/TAGA Motorized Guillotine and Acoustic Systems.png',
          desc: 'Optimized high-resolution architectural photography with Next-gen WebP/AVIF formats and lazy loading, achieving Lighthouse 98+ performance.',
          deliverables: 'Lighthouse 98+ Performance Report,Cross-Device Compatibility Matrix,Security Penetration Audit,Asset Compression Signoff'
        },
        {
          number: '06',
          title: 'Live Deployment & Studio Launch',
          duration: 'Week 14',
          image: '/protfolio image/TAGA Mobile Luxury Architectural Atelier.png',
          desc: 'Production deployment to Cloudflare Edge infrastructure, verified Google local and national architectural SEO rankings, and complete handover.',
          deliverables: 'Live Production Launch,Global CDN Optimization,Google Search Console Verification,Client Operations Handover'
        }
      ],
      telemetry_metrics: [
        { metric: '<0.8s', label: 'Global LCP Speed', verified: 'Lighthouse Audit' },
        { metric: '99.99%', label: 'Production Uptime SLA', verified: 'Cloudflare Edge' },
        { metric: '+533%', label: 'Architect Inquiries', verified: 'Google Analytics' },
        { metric: '100%', label: 'Client Signoff', verified: 'Approved' }
      ],
      testimonial_quote: 'The digital atelier created by RND Technosoft perfectly captures the precision and elegance of TAGA. Architects now book private studio tours and specify our grand systems with complete confidence.',
      testimonial_author: 'Yashwardhan Patel',
      testimonial_role: 'Principal Architect & Founder, TAGA Systems',
      seo_title: 'TAGA Luxury Aluminium Architectural Systems | Case Study',
      seo_description: 'How RND Technosoft built a luxury architectural web platform for TAGA, accelerating architect and HNW inquiries by +533%.'
    }
  }
];

async function sync() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  console.log('--- 1. SYNCING PORTFOLIO_PROJECTS IN MONGODB ---');
  for (const p of newProjects) {
    const { child_page, ...projectData } = p;

    // 1. Upsert in portfolio_projects collection
    await db.collection('portfolio_projects').updateOne(
      { slug: p.slug },
      {
        $set: {
          ...projectData,
          category: 'WEBSITE & WEB APP',
          tag: `WEBSITE & WEB APPLICATION // ${p.industry.toUpperCase()}`,
          location: 'INDIA // GLOBAL',
          link: `/portfolio/${CAT_SLUG}`,
          updated_at: new Date().toISOString()
        },
        $setOnInsert: {
          created_at: new Date().toISOString()
        }
      },
      { upsert: true }
    );
    console.log(`✓ Upserted in portfolio_projects: ${p.slug}`);

    // 2. Also upsert in portfolio_project collection (singular)
    await db.collection('portfolio_project').updateOne(
      { slug: p.slug },
      {
        $set: {
          ...projectData,
          category: 'WEBSITE & WEB APP',
          project_title: p.title,
          category_slug: CAT_SLUG,
          p_link: `/portfolio/${p.slug}`,
          year: p.year,
          updated_at: new Date().toISOString()
        },
        $setOnInsert: {
          created_at: new Date().toISOString()
        }
      },
      { upsert: true }
    );
    console.log(`✓ Upserted in portfolio_project (singular): ${p.slug}`);

    // 3. Upsert in portfolio_child_page collection
    if (child_page) {
      await db.collection('portfolio_child_page').updateOne(
        { project_slug: p.slug },
        {
          $set: {
            project_slug: p.slug,
            published: true,
            banner_image: p.image,
            banner_imgtitle: `${p.title} Case Study`,
            banner_altname: `${p.title} - RND Technosoft`,
            ...child_page,
            updated_at: new Date().toISOString()
          },
          $setOnInsert: {
            created_at: new Date().toISOString()
          }
        },
        { upsert: true }
      );
      console.log(`✓ Upserted in portfolio_child_page: ${p.slug}`);
    }
  }

  // Also ensure ostech-automation-platform has alias or updates
  await db.collection('portfolio_projects').updateOne(
    { slug: 'ostech-automation-platform' },
    {
      $set: {
        slug: 'ostech-automation',
        updated_at: new Date().toISOString()
      }
    }
  );

  await client.close();
  console.log('\nALL PORTFOLIO PROJECTS SYNCED TO MONGODB SUCCESSFULLY!');
}

sync().catch(err => {
  console.error('Portfolio sync failed:', err);
  process.exit(1);
});
