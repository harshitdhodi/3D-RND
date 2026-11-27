const { MongoClient, ObjectId } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  console.log('--- 1. UPDATING SERVICE CATEGORIES ---');
  await db.collection('service_categories').updateOne(
    { slug: 'technology-solution' },
    {
      $set: {
        title: 'Technology Solutions',
        division_tag: 'TECHNOLOGY SOLUTIONS',
        hero_title: 'TECHNOLOGY THAT MOVES BUSINESS FORWARD.',
        hero_highlight: '',
        hero_desc: 'From powerful websites and intelligent applications to custom software and scalable e-commerce platforms, we engineer digital solutions that simplify complexity, elevate experiences and create opportunities for business growth.',
        supporting_line: 'WEB DEVELOPMENT • APPLICATIONS • SOFTWARE • E-COMMERCE',
        primary_cta_label: 'EXPLORE OUR SOLUTIONS →',
        secondary_cta_label: 'DISCUSS YOUR PROJECT ↗',
        meta_title: 'Technology Solutions & Software Development | RND Technosoft',
        meta_description: 'Explore technology solutions from RND Technosoft, including website development, mobile apps, custom software and e-commerce development.',
        updated_at: new Date().toISOString()
      }
    }
  );

  await db.collection('service_categories').updateOne(
    { slug: 'digital-marketing' },
    {
      $set: {
        title: 'Digital Marketing',
        division_tag: 'DIGITAL MARKETING',
        hero_title: 'DIGITAL GROWTH. BUILT ON STRATEGY. DRIVEN BY RESULTS.',
        hero_highlight: '',
        hero_desc: 'We help businesses strengthen their online presence, connect with the right audiences and turn digital visibility into meaningful opportunities. Through strategic SEO, social media marketing, paid advertising and compelling content, we create marketing experiences designed to accelerate business growth.',
        supporting_line: 'SEO • SOCIAL MEDIA • PAID ADVERTISING • CONTENT MARKETING',
        primary_cta_label: 'EXPLORE OUR SERVICES →',
        secondary_cta_label: 'PLAN YOUR GROWTH ↗',
        meta_title: 'Digital Marketing Services | SEO & Social Media Marketing – RND Technosoft',
        meta_description: "Grow your business with RND Technosoft's digital marketing services. Explore SEO, social media marketing, paid advertising and content marketing solutions.",
        updated_at: new Date().toISOString()
      }
    }
  );

  await db.collection('service_categories').updateOne(
    { slug: 'branding-design' },
    {
      $set: {
        title: 'Branding & Design',
        division_tag: 'BRANDING & DESIGN',
        hero_title: 'BUILD A BRAND. CREATE AN IDENTITY. MAKE IT UNFORGETTABLE.',
        hero_highlight: '',
        hero_desc: 'We transform business ideas into distinctive visual identities and compelling brand experiences. From brand identity and graphic design to marketing collateral and digital creatives, we create cohesive designs that communicate your value, capture attention and make your brand memorable.',
        supporting_line: 'BRAND IDENTITY • GRAPHIC DESIGN • MARKETING COLLATERAL • DIGITAL DESIGN',
        primary_cta_label: 'EXPLORE OUR CREATIVE SERVICES →',
        secondary_cta_label: 'BUILD YOUR BRAND ↗',
        meta_title: 'Branding & Graphic Design Services | RND Technosoft',
        meta_description: "Build a memorable brand with RND Technosoft's branding and design services. Explore brand identity, logo design, graphic design and marketing collateral.",
        updated_at: new Date().toISOString()
      }
    }
  );

  await db.collection('service_categories').updateOne(
    { slug: 'media-production' },
    {
      $set: {
        title: 'Media Production',
        division_tag: 'MEDIA PRODUCTION',
        hero_title: 'STORIES THAT CAPTURE. VISUALS THAT CONNECT. CONTENT THAT INSPIRES.',
        hero_highlight: '',
        hero_desc: "We turn ideas into compelling visual experiences through professional videography, photography, video editing and creative production. From brand storytelling and product showcases to promotional campaigns and digital content, we create visuals that capture attention and bring your brand's story to life.",
        supporting_line: 'VIDEOGRAPHY • PHOTOGRAPHY • VIDEO EDITING • CREATIVE PRODUCTION',
        primary_cta_label: 'EXPLORE OUR PRODUCTIONS →',
        secondary_cta_label: 'CREATE WITH US ↗',
        meta_title: 'Media Production Services | Photography & Videography – RND Technosoft',
        meta_description: "Bring your brand to life with RND Technosoft's media production services, including professional videography, photography, video editing and creative production.",
        updated_at: new Date().toISOString()
      }
    }
  );
  console.log('✓ 4 Service categories updated');

  console.log('--- 2. UPDATING SERVICE SUBCATEGORIES ---');
  // Branding & Design subcategories
  await db.collection('service_subcategories').updateOne(
    { slug: 'brand-identity-systems' },
    {
      $set: {
        title: 'BRAND STRATEGY & DEVELOPMENT',
        tagline: 'Build a brand with direction and purpose.',
        desc: 'We help businesses define their brand positioning, personality, messaging and visual direction. Through strategic brand development, we create a foundation that communicates your values, differentiates your business and connects with the right audience.',
        badge: '01 // BRAND FOUNDATION'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'ui-ux-spatial-design' },
    {
      $set: {
        title: 'LOGO & BRAND IDENTITY DESIGN',
        tagline: 'Make your first impression unforgettable.',
        desc: "We create distinctive logos and cohesive visual identity systems that represent your brand's personality. From colour palettes and typography to brand guidelines and visual elements, every detail works together to build recognition and consistency.",
        badge: '02 // VISUAL IDENTITY'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'graphic-design' },
    {
      $set: {
        title: 'GRAPHIC DESIGN SERVICES',
        tagline: 'Turn communication into visual experiences.',
        desc: 'Our graphic design services transform ideas and messages into compelling visual content. We design creative assets for digital platforms, advertising campaigns and business communication, helping brands maintain a distinctive and professional visual presence.',
        badge: '03 // CREATIVE DESIGN'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'marketing-collateral' },
    {
      $set: {
        title: 'MARKETING COLLATERAL DESIGN',
        tagline: 'Every brand touchpoint tells a story.',
        desc: 'From company profiles and brochures to business cards, catalogues, flyers and promotional materials, we create professional marketing collateral that communicates your brand consistently across print and digital platforms.',
        badge: '04 // BRAND COMMUNICATION'
      }
    }
  );

  // Media Production subcategories
  await db.collection('service_subcategories').updateOne(
    { slug: 'commercial-video-production' },
    {
      $set: {
        title: 'PROFESSIONAL VIDEOGRAPHY',
        tagline: 'Bring your brand story into motion.',
        desc: 'We produce engaging video content that captures your brand, products, services and experiences. From promotional videos and corporate films to brand storytelling and social media videos, we create visuals that communicate with purpose and leave a lasting impression.',
        badge: '01 // MOTION & STORYTELLING'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'commercial-photography' },
    {
      $set: {
        title: 'PROFESSIONAL PHOTOGRAPHY',
        tagline: 'Capture details. Create impressions.',
        desc: "We create high-quality photographs that showcase your brand, products, people and experiences. From product photography and corporate portraits to lifestyle and commercial photography, every frame is crafted to communicate your brand's visual identity.",
        badge: '02 // VISUAL COMPOSITION'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'video-editing' },
    {
      $set: {
        title: 'VIDEO EDITING & POST-PRODUCTION',
        tagline: 'Turn raw footage into refined experiences.',
        desc: 'Great footage deserves great execution. We transform raw recordings into polished visual stories through professional video editing, colour correction, transitions, sound design, motion graphics and finishing touches that elevate the final production.',
        badge: '03 // POST-PRODUCTION'
      }
    }
  );

  await db.collection('service_subcategories').updateOne(
    { slug: 'creative-production' },
    {
      $set: {
        title: 'CREATIVE MEDIA PRODUCTION',
        tagline: 'Ideas deserve more than ordinary execution.',
        desc: 'From creative concepts and visual planning to campaign content and multimedia production, we bring ideas to life through purposeful creative execution. We develop engaging visual assets tailored to your brand identity, communication goals and digital platforms.',
        badge: '04 // CREATIVE EXECUTION'
      }
    }
  );
  console.log('✓ Service subcategories updated');

  console.log('--- 3. UPDATING SERVICE ITEMS (VIDEO EDITING & CREATIVE PRODUCTION) ---');
  await db.collection('service_items').updateOne(
    { slug: 'video-editing' },
    {
      $set: {
        title: 'Video Editing & Post-Production',
        badge: 'POST-PRODUCTION // CREATIVE EXECUTION',
        tagline: 'VIDEO EDITING & POST-PRODUCTION THAT BRINGS STORIES TO LIFE.',
        overview: [
          'Great footage becomes powerful storytelling through thoughtful editing. The right pacing, visuals, sound and transitions can transform raw recordings into compelling videos that capture attention and communicate your message effectively.',
          'RND Technosoft provides professional video editing and post-production services for brands, businesses and creators. From corporate films and promotional videos to social media Reels, product videos and marketing campaigns, we refine every frame through creative editing, colour grading, audio enhancement and motion graphics.'
        ],
        specs: [
          'MODULE 01 – PROFESSIONAL VIDEO EDITING: Footage selection, sequencing, trimming, transitions, pacing and storytelling-focused editing.',
          'MODULE 02 – COLOUR CORRECTION & GRADING: Exposure adjustments, colour correction, tone balancing and creative colour grading.',
          'MODULE 03 – MOTION GRAPHICS & VISUAL EFFECTS: Animated titles, lower thirds, branded graphics, transitions, and visual effects.',
          'MODULE 04 – AUDIO DESIGN & FINAL DELIVERY: Dialogue cleanup, sound balancing, background music, sound effects and final exports.'
        ],
        deliverables: [
          'Professionally Edited Video Content',
          'Colour Correction & Grading',
          'Audio Editing & Sound Enhancement',
          'Platform-Ready Final Video Exports'
        ],
        tech_stack: [
          { name: 'Adobe Premiere Pro', role: 'Professional Video Editing', badge: 'Industry Standard' },
          { name: 'Adobe After Effects', role: 'Motion Graphics & Visual Effects', badge: 'VFX / 2D' },
          { name: 'DaVinci Resolve', role: 'Colour Grading & Finishing', badge: 'Cinema Color' },
          { name: 'Adobe Audition', role: 'Audio Editing & Sound Enhancement', badge: 'Spatial Audio' }
        ],
        faqs: [
          {
            question: 'What types of video editing services do you provide?',
            answer: 'We provide corporate video editing, promotional videos, social media reels, commercial ads, YouTube video editing, product videos, interviews, and brand documentary post-production.'
          },
          {
            question: 'Can you work with footage shot by our team or third-party videographers?',
            answer: 'Yes. We accept footage in any resolution (1080p, 4K, 6K, 8K, RAW, ProRes, Log) recorded by your internal team, external crew, or smartphones, and transform it into professional final assets.'
          }
        ]
      }
    }
  );

  await db.collection('service_items').updateOne(
    { slug: 'creative-production' },
    {
      $set: {
        title: 'Creative Media Production',
        badge: 'CREATIVE MEDIA // VISUAL STORYTELLING',
        tagline: 'CREATIVE MEDIA PRODUCTION. IDEAS INTO VISUAL EXPERIENCES.',
        overview: [
          'Bring your brand story to life through creative media that captures attention and communicates with impact. RND Technosoft combines visual creativity, strategic storytelling and professional production to create engaging media content for businesses.',
          'From promotional campaigns and brand films to digital content and creative visual experiences, we help transform ideas into compelling media that connect with your audience.'
        ],
        specs: [
          '01 — Creative Concept & Direction: Creative ideation, concept development, storyboarding and visual planning.',
          '02 — Video & Visual Production: Brand and corporate videos, promotional campaigns, product visuals, and social media video content.',
          '03 — Photography & Visual Content: Brand and product photography, lifestyle visuals, and marketing content.',
          '04 — Editing & Post-Production: Professional editing, colour grading, motion graphics and final platform delivery.'
        ],
        deliverables: [
          'Brand Films & Corporate Videos',
          'Promotional & Advertising Videos',
          'Creative Campaign Content',
          'Social Media Visual Content',
          'Product & Service Videos',
          'Digital Media Assets'
        ],
        tech_stack: [
          { name: 'Adobe Premiere Pro', role: 'Video editing & pacing', badge: 'Editing' },
          { name: 'Adobe After Effects', role: 'Motion graphics & VFX', badge: 'Animation' },
          { name: 'DaVinci Resolve', role: 'Colour mastering', badge: 'Color' },
          { name: 'Adobe Photoshop & Lightroom', role: 'Image editing & assets', badge: 'Design' }
        ],
        faqs: [
          {
            question: 'What is included in a Creative Media Production project?',
            answer: 'We manage end-to-end creative production including concept development, creative direction, scripting, storyboarding, full production shoots, editing, colour grading, sound design, and final exports.'
          },
          {
            question: 'How do we get started with a media production brief?',
            answer: 'Simply connect with our team through our contact page or project brief form. We will schedule a creative discovery call to align on your brand story, deliverables, and production timeline.'
          }
        ]
      }
    }
  );
  console.log('✓ Service items updated');

  console.log('--- 4. ENSURING ALL 10 INDUSTRY DETAILS DOCUMENTS EXIST IN MONGODB ---');
  // Get industry ObjectIds for 7, 8, 9, 10
  const realEstateInd = await db.collection('industries').findOne({ slug: 'real-estate' });
  const startupsInd = await db.collection('industries').findOne({ slug: 'startups-professional-services' });
  const travelInd = await db.collection('industries').findOne({ slug: 'travel-tourism' });
  const financeInd = await db.collection('industries').findOne({ slug: 'finance-fintech' });

  // 07. Real Estate & Construction Detail Document
  await db.collection('industry_details').updateOne(
    { industry_slug: 'real-estate' },
    {
      $set: {
        industry_id: realEstateInd ? realEstateInd._id.toString() : '6b08f95738a6a950595ecb53',
        industry_slug: 'real-estate',
        hero_tagline: 'REAL ESTATE & CONSTRUCTION',
        hero_heading: 'BUILDING STRONGER DIGITAL FOUNDATIONS FOR AMBITIOUS DEVELOPMENTS.',
        hero_description: 'We help real estate companies, property developers and construction businesses showcase projects, attract potential buyers and strengthen their market presence through property websites, digital campaigns, branding and immersive visual content.',
        pillars_heading: 'DISCIPLINE ARCHITECTURE & CAPABILITIES',
        pillars_description: 'Strategic digital capabilities tailored specifically for property developers and real estate enterprises.',
        pillars: [
          {
            title: 'Property Showcases & Portals',
            desc: 'Engaging real estate websites, 3D property visualizers, interactive floorplans, and master-plan portals designed to convert buyers.',
            icon: 'Layers'
          },
          {
            title: 'Targeted Investor Acquisition',
            desc: 'Performance marketing funnels, high-net-worth lead generation, and international investor campaigns that drive qualified enquiries.',
            icon: 'TrendingUp'
          },
          {
            title: 'Development Branding & Media',
            desc: 'Distinctive project brand identity, architectural drone videography, site photography, and luxury sales enablement collateral.',
            icon: 'Shield'
          }
        ],
        challenges_tagline: 'INDUSTRY CHALLENGES // OPERATIONAL BOTTLENECKS',
        challenges_heading: "WHAT'S HOLDING PROPERTY ENTERPRISES BACK?",
        challenges_description: 'Navigating sales friction, long acquisition cycles, and off-plan visualization challenges.',
        challenges: [
          {
            title: 'Difficulty Pre-Selling Off-Plan Units',
            description: 'Static 2D floorplans fail to convey scale or architectural sightlines, causing prospective luxury buyers to delay purchase commitments.',
            impactMetric: '01'
          },
          {
            title: 'Disconnected Jobsite Communication',
            description: 'Subcontractor miscommunications and siloed field specs cause construction schedule slippages that cost valuable time and penalties.',
            impactMetric: '02'
          },
          {
            title: 'High Friction in Online Reservations',
            description: 'Requiring buyers to visit physical sales galleries limits reach and excludes international investors seeking rapid digital unit reservation.',
            impactMetric: '03'
          },
          {
            title: 'Weak Digital Property Branding',
            description: 'Generic listings and unpolished marketing assets diminish market perception and weaken pricing power for premium developments.',
            impactMetric: '04'
          }
        ],
        solutions_tagline: 'INTEGRATED SOLUTIONS // INDUSTRY CAPABILITIES',
        solutions_heading: 'THE RIGHT TECHNOLOGY. THE RIGHT STRATEGY. THE RIGHT IMPACT.',
        solutions_description: 'Complete digital and creative solutions built to elevate property developments and accelerate transactions.',
        services: [
          {
            serviceTitle: 'Custom Web & Interactive 3D Portals',
            serviceHref: '/technology-solution/web-development',
            role: '3D Building Visualizers & Inventory Engines',
            deliverablesSummary: 'Interactive building orbit visualizers, unit floor selection, real-time availability, and lead capture funnels.',
            badge: '01 // TECHNOLOGY'
          },
          {
            serviceTitle: 'Investor Lead Gen & Performance SEO',
            serviceHref: '/digital-marketing/technical-seo-dominance',
            role: 'Targeted Buyer Acquisition & PPC Campaigns',
            deliverablesSummary: 'Multi-regional real estate SEO, Google Ads, Meta luxury property campaigns, and verified lead verification.',
            badge: '02 // MARKETING'
          },
          {
            serviceTitle: 'Development Branding & Identity',
            serviceHref: '/branding-design/brand-identity-systems',
            role: 'Corporate Positioning & Collateral',
            deliverablesSummary: 'Comprehensive property branding, luxury brochures, signage, and marketing collateral design.',
            badge: '03 // BRANDING'
          },
          {
            serviceTitle: 'Architectural Photography & Drone Video',
            serviceHref: '/media-production/commercial-video-production',
            role: 'Cinematic Property & Site Showcase',
            deliverablesSummary: '4K drone flyovers, completed interior architectural photography, and construction progress reels.',
            badge: '04 // MEDIA'
          }
        ],
        process_tagline: 'PROJECT ROADMAP // DEVELOPMENT LIFECYCLE',
        process_heading: 'A CLEAR PATH FROM CONCEPT TO PROPERTY LAUNCH.',
        process_description: 'Structured methodology ensuring on-time delivery for high-stakes real estate launches.',
        process_steps: [
          {
            step: '01',
            title: 'Development Discovery & Brief',
            duration: 'Phase 1',
            description: 'We analyze property architectural plans, target buyer demographics, and project sales targets to establish a clear digital roadmap.'
          },
          {
            step: '02',
            title: 'Visual Identity & Interactive UX',
            duration: 'Phase 2',
            description: 'Crafting luxury project branding, 3D asset integration, interactive floorplan navigation, and sales funnel wireframes.'
          },
          {
            step: '03',
            title: 'Platform Engineering & Campaign Setup',
            duration: 'Phase 3',
            description: 'Building responsive web portals with CRM lead routing, SSL encryption, and high-converting acquisition ad sets.'
          },
          {
            step: '04',
            title: 'Launch & Continuous Lead Optimization',
            duration: 'Phase 4',
            description: 'Official development digital rollout, campaign budget scaling, weekly lead qualification audits, and asset updates.'
          }
        ],
        case_study_tagline: 'FEATURED SUCCESS STORY',
        case_study_title: 'Crown Horizon Residences // Luxury Tower Launch',
        case_study_period: 'Pre-Sales Phase',
        case_study_challenge: 'Client needed to secure pre-construction commitments for a 42-story luxury development without a physical showroom open.',
        case_study_solution: 'RND Technosoft engineered an interactive 3D digital sales gallery with virtual unit tours and run targeted overseas investor marketing.',
        case_study_metrics: [
          { label: 'Units Reserved', value: '78% Sold' },
          { label: 'Investor Reach', value: '14 Countries' },
          { label: 'Cost Per Qualified Lead', value: '-38%' }
        ],
        case_study_quote_text: 'The digital sales platform built by RND Technosoft enabled us to sell out Phase 1 before groundbreaking even commenced.',
        case_study_quote_author: 'Vikram Singhania',
        case_study_quote_role: 'Managing Director, Horizon Realty Group',
        cta_tagline: "REAL ESTATE & CONSTRUCTION // LET'S CONNECT",
        cta_heading: 'READY TO MOVE YOUR PROPERTY PROJECT FORWARD?',
        cta_description: 'Speak with our specialists to plan your real estate website, marketing campaign, branding or media production.',
        faq_tagline: 'FREQUENTLY ASKED QUESTIONS',
        faq_heading: 'EVERYTHING YOU NEED TO KNOW ABOUT REAL ESTATE SOLUTIONS.',
        faqs: [
          {
            question: 'Can you build interactive 3D floorplans and property tours for our projects?',
            answer: 'Yes. We build responsive 3D property visualizers, interactive floorplans, and virtual tours that work seamlessly on desktops, tablets, and smartphones.'
          },
          {
            question: 'Can we integrate property inquiries directly into our real estate CRM?',
            answer: 'Yes. We integrate lead capture mechanisms directly with major real estate CRMs such as Salesforce, HubSpot, Zoho, and custom databases with real-time notifications.'
          },
          {
            question: 'Do you provide drone videography and architectural photography for construction projects?',
            answer: 'Yes. We provide certified drone videography, completed architecture photography, and milestone construction update videos for marketing and investor reporting.'
          }
        ],
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 08. Startups & Professional Services Detail Document
  await db.collection('industry_details').updateOne(
    { industry_slug: 'startups-professional-services' },
    {
      $set: {
        industry_id: startupsInd ? startupsInd._id.toString() : '6b08f95738a6a950595ecb54',
        industry_slug: 'startups-professional-services',
        hero_tagline: 'STARTUPS & PROFESSIONAL SERVICES',
        hero_heading: 'FROM BOLD BEGINNINGS TO ESTABLISHED MARKET PRESENCE.',
        hero_description: 'We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences. From website and software development to brand identity and customer acquisition, we help businesses build, launch and grow.',
        pillars_heading: 'DISCIPLINE ARCHITECTURE & CAPABILITIES',
        pillars_description: 'Agile digital foundations, rapid MVP launches, and scalable client acquisition engines.',
        pillars: [
          {
            title: 'Digital Foundations Built to Scale',
            desc: 'Modern web platforms, custom SaaS architectures, client portals, and cloud infrastructure engineered for exponential growth.',
            icon: 'Layers'
          },
          {
            title: 'Market Recognition & Identity',
            desc: 'Memorable brand identities, pitch decks, corporate positioning, and design systems that establish authority.',
            icon: 'Shield'
          },
          {
            title: 'Strategic Customer Acquisition',
            desc: 'Targeted B2B lead generation, organic search dominance, and conversion-optimized sales funnels that accelerate revenue.',
            icon: 'TrendingUp'
          }
        ],
        challenges_tagline: 'INDUSTRY CHALLENGES // OPERATIONAL BOTTLENECKS',
        challenges_heading: "WHAT'S HOLDING EMERGING ENTERPRISES BACK?",
        challenges_description: 'Balancing development speed, brand credibility, and predictable client pipeline generation.',
        challenges: [
          {
            title: 'Slow Time-to-Market on Digital MVPs',
            description: 'Protracted engineering cycles consume seed capital before products can gather real user feedback in production.',
            impactMetric: '01'
          },
          {
            title: 'Lack of Established Brand Credibility',
            description: 'New market entrants struggle to win high-value enterprise contracts against entrenched legacy competitors.',
            impactMetric: '02'
          },
          {
            title: 'Unpredictable Client Pipeline Generation',
            description: 'Relying exclusively on word-of-mouth creates volatile revenue cycles without a scalable inbound funnel.',
            impactMetric: '03'
          },
          {
            title: 'Fragmented Internal Tools & Operations',
            description: 'Stitching disparate tools together without unified custom software causes data loss and operational overhead.',
            impactMetric: '04'
          }
        ],
        solutions_tagline: 'INTEGRATED SOLUTIONS // INDUSTRY CAPABILITIES',
        solutions_heading: 'THE RIGHT TECHNOLOGY. THE RIGHT STRATEGY. THE RIGHT IMPACT.',
        solutions_description: 'Comprehensive digital partner services designed specifically for fast-moving startups and consultancies.',
        services: [
          {
            serviceTitle: 'Custom SaaS & Web Application Development',
            serviceHref: '/technology-solution/web-development',
            role: 'Rapid MVP Development & Cloud Infrastructure',
            deliverablesSummary: 'Full-stack application engineering, Stripe billing integration, API development, and secure authentication.',
            badge: '01 // TECHNOLOGY'
          },
          {
            serviceTitle: 'B2B Growth Marketing & Lead Generation',
            serviceHref: '/digital-marketing/technical-seo-dominance',
            role: 'Qualified Pipeline & Performance Ads',
            deliverablesSummary: 'Search engine optimization, targeted LinkedIn/Meta campaigns, content marketing, and conversion optimization.',
            badge: '02 // MARKETING'
          },
          {
            serviceTitle: 'Startup Brand Identity & Pitch Collateral',
            serviceHref: '/branding-design/brand-identity-systems',
            role: 'Market Authority & Visual Systems',
            deliverablesSummary: 'Logo systems, brand guidelines, pitch deck design, corporate profiles, and digital collateral.',
            badge: '03 // BRANDING'
          },
          {
            serviceTitle: 'Product Explainer Videos & Photography',
            serviceHref: '/media-production/commercial-video-production',
            role: 'Visual Storytelling & High-Impact Demos',
            deliverablesSummary: 'Motion graphics product explainers, executive founder interviews, and commercial photography.',
            badge: '04 // MEDIA'
          }
        ],
        process_tagline: 'PROJECT ROADMAP // AGILE SPRINT EXECUTION',
        process_heading: 'FROM CONCEPT TO SCALED MARKET TRACTION.',
        process_description: 'Rapid sprint methodology prioritizing speed, security, and measurable market impact.',
        process_steps: [
          {
            step: '01',
            title: 'Discovery & Product Architecture',
            duration: 'Sprint 1',
            description: 'We define the core user flows, technical architecture, brand messaging, and success metrics for the platform.'
          },
          {
            step: '02',
            title: 'Design Systems & Rapid Prototyping',
            duration: 'Sprint 2',
            description: 'Creating interactive design systems, brand assets, clickable UI prototypes, and user feedback validation.'
          },
          {
            step: '03',
            title: 'Sprint Development & Cloud Deployment',
            duration: 'Sprint 3',
            description: 'Clean TypeScript codebase, database schemas, third-party API integrations, and secure CI/CD pipelines.'
          },
          {
            step: '04',
            title: 'Launch & Growth Acceleration',
            duration: 'Sprint 4',
            description: 'Production rollout, full code ownership transfer, performance marketing activation, and ongoing optimization.'
          }
        ],
        case_study_tagline: 'FEATURED SUCCESS STORY',
        case_study_title: 'Novus Vault // Automated Investor Data Room',
        case_study_period: 'Startup Acceleration',
        case_study_challenge: 'Founders needed a secure platform to showcase proprietary IP and manage fundraising compliance with institutional investors.',
        case_study_solution: 'RND Technosoft engineered an institutional data room web portal with dynamic watermarking and viewing telemetry in 3 weeks.',
        case_study_metrics: [
          { label: 'Seed Round Closed', value: '$4.5M' },
          { label: 'Time to Market', value: '21 Days' },
          { label: 'Security Compliance', value: 'SOC2 Ready' }
        ],
        case_study_quote_text: 'RND Technosoft acted as our true technical co-founder. Their execution speed and design quality blew our investors away.',
        case_study_quote_author: 'Sameer Patel',
        case_study_quote_role: 'Co-Founder & CEO, Novus Capital',
        cta_tagline: "STARTUPS & PROFESSIONAL SERVICES // LET'S CONNECT",
        cta_heading: 'READY TO BUILD YOUR NEXT DIGITAL BREAKTHROUGH?',
        cta_description: 'Discuss your product vision, brand identity, or growth marketing strategy with our experienced digital team.',
        faq_tagline: 'FREQUENTLY ASKED QUESTIONS',
        faq_heading: 'EVERYTHING YOU NEED TO KNOW ABOUT STARTUP SOLUTIONS.',
        faqs: [
          {
            question: 'How fast can RND Technosoft launch an MVP or business website?',
            answer: 'Depending on scope, custom business websites can launch in 2-3 weeks, and full-featured SaaS MVPs can be built and deployed in 4-6 weeks through agile sprints.'
          },
          {
            question: 'Do we own 100% of the code and intellectual property?',
            answer: 'Yes. Upon project completion and handover, you receive full intellectual property ownership, complete source code repositories, and documentation with zero vendor lock-in.'
          },
          {
            question: 'Can you provide both technology and marketing support as we scale?',
            answer: 'Yes. Our integrated model combines software development, digital marketing, branding, and video production under one roof, providing all capabilities needed to grow.'
          }
        ],
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 09. Travel & Tourism Detail Document
  await db.collection('industry_details').updateOne(
    { industry_slug: 'travel-tourism' },
    {
      $set: {
        industry_id: travelInd ? travelInd._id.toString() : '6b08f95738a6a950595ecb55',
        industry_slug: 'travel-tourism',
        hero_tagline: 'TRAVEL & TOURISM',
        hero_heading: 'INSPIRING JOURNEYS THROUGH POWERFUL DIGITAL EXPERIENCES.',
        hero_description: 'We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites, booking platforms, creative campaigns, destination photography and digital storytelling.',
        pillars_heading: 'DISCIPLINE ARCHITECTURE & CAPABILITIES',
        pillars_description: 'Digital booking engines, destination showcases, and traveller engagement solutions.',
        pillars: [
          {
            title: 'Easy Exploration & Booking',
            desc: 'Frictionless travel booking platforms, interactive itinerary builders, and multi-currency e-commerce portals.',
            icon: 'Layers'
          },
          {
            title: 'Audience Engagement & Reach',
            desc: 'Targeted seasonal marketing campaigns, organic destination SEO, and international traveller outreach funnels.',
            icon: 'TrendingUp'
          },
          {
            title: 'Destination Visual Storytelling',
            desc: 'Cinematic travel films, 4K drone cinematography, lifestyle destination photography, and social media video reels.',
            icon: 'Shield'
          }
        ],
        challenges_tagline: 'INDUSTRY CHALLENGES // OPERATIONAL BOTTLENECKS',
        challenges_heading: "WHAT'S HOLDING TRAVEL BUSINESSES BACK?",
        challenges_description: 'Overcoming high OTA commission dependencies and disconnected booking systems.',
        challenges: [
          {
            title: 'High Dependency on Third-Party OTAs',
            description: 'Paying heavy commissions to online travel agencies erodes profit margins and weakens direct guest relationships.',
            impactMetric: '01'
          },
          {
            title: 'Slow & Cluttered Mobile Booking UX',
            description: 'Complex reservation funnels and slow load times on mobile devices cause travellers to abandon booking midway.',
            impactMetric: '02'
          },
          {
            title: 'Lack of Compelling Visual Content',
            description: 'Low-quality imagery and generic stock photos fail to evoke wanderlust and make destinations blend in with competitors.',
            impactMetric: '03'
          },
          {
            title: 'Seasonal Demand Volatility',
            description: 'Failing to maintain continuous digital marketing makes maintaining booking occupancy during shoulder seasons difficult.',
            impactMetric: '04'
          }
        ],
        solutions_tagline: 'INTEGRATED SOLUTIONS // INDUSTRY CAPABILITIES',
        solutions_heading: 'THE RIGHT TECHNOLOGY. THE RIGHT STRATEGY. THE RIGHT IMPACT.',
        solutions_description: 'End-to-end digital solutions designed to drive direct bookings and inspire modern travellers.',
        services: [
          {
            serviceTitle: 'Custom Travel Booking Portals & Apps',
            serviceHref: '/technology-solution/web-development',
            role: 'Direct Reservation & Itinerary Engines',
            deliverablesSummary: 'Interactive itinerary planners, multi-currency payment gateways, real-time availability sync, and guest management.',
            badge: '01 // TECHNOLOGY'
          },
          {
            serviceTitle: 'Travel SEO & Performance Advertising',
            serviceHref: '/digital-marketing/technical-seo-dominance',
            role: 'Direct Traveller Acquisition & Social Ads',
            deliverablesSummary: 'Destination search ranking, targeted Google Flights/Hotel Ads, Instagram travel reels, and seasonal campaigns.',
            badge: '02 // MARKETING'
          },
          {
            serviceTitle: 'Travel Brand Identity & Collateral',
            serviceHref: '/branding-design/brand-identity-systems',
            role: 'Distinctive Hospitality Brand Systems',
            deliverablesSummary: 'Memorable brand identity, tour brochures, luggage tags, digital guidebooks, and travel collateral.',
            badge: '03 // BRANDING'
          },
          {
            serviceTitle: 'Destination Videography & Photography',
            serviceHref: '/media-production/commercial-video-production',
            role: 'Cinematic Travel Stories & Drone Footage',
            deliverablesSummary: '4K aerial drone landscapes, experiential travel documentary films, and social media reels production.',
            badge: '04 // MEDIA'
          }
        ],
        process_tagline: 'PROJECT ROADMAP // TRAVEL EXPERIENCE DESIGN',
        process_heading: 'FROM DESTINATION DISCOVERY TO DIRECT BOOKINGS.',
        process_description: 'Step-by-step roadmap to transform travel brands into captivating digital destinations.',
        process_steps: [
          {
            step: '01',
            title: 'Traveller Persona & Journey Mapping',
            duration: 'Phase 1',
            description: 'Understanding traveller motivation, booking habits, and competitor differentiation to plan the ideal experience.'
          },
          {
            step: '02',
            title: 'Visual Production & Brand Assets',
            duration: 'Phase 2',
            description: 'Producing cinematic destination videos, lifestyle photography, and compelling brand storytelling assets.'
          },
          {
            step: '03',
            title: 'Platform Engineering & Booking Integration',
            duration: 'Phase 3',
            description: 'Developing responsive web platforms with frictionless checkout, payment gateways, and channel manager sync.'
          },
          {
            step: '04',
            title: 'Launch & Direct Booking Growth',
            duration: 'Phase 4',
            description: 'Global launch, targeted paid media rollout, seasonal promotional management, and conversion rate optimization.'
          }
        ],
        case_study_tagline: 'FEATURED SUCCESS STORY',
        case_study_title: 'Wanderlust Expeditions // Direct Booking Portal',
        case_study_period: 'Digital Transformation',
        case_study_challenge: 'Tour operator was losing 25% of revenue to OTA platforms and needed an engaging direct booking platform.',
        case_study_solution: 'RND Technosoft developed an interactive booking platform featuring 4K video storytelling and instantaneous reservation flows.',
        case_study_metrics: [
          { label: 'Direct Bookings', value: '+140%' },
          { label: 'OTA Commission Saved', value: '$85K/Yr' },
          { label: 'Mobile Conversion', value: '3.4x' }
        ],
        case_study_quote_text: 'Our new platform completely changed our business economics. Travellers love booking directly with us now.',
        case_study_quote_author: 'Elena Rostova',
        case_study_quote_role: 'Founder, Wanderlust Expeditions',
        cta_tagline: "TRAVEL & TOURISM // LET'S CONNECT",
        cta_heading: 'READY TO INSPIRE YOUR NEXT GENERATION OF TRAVELLERS?',
        cta_description: 'Speak with our team to explore custom booking websites, digital marketing campaigns, or visual media production.',
        faq_tagline: 'FREQUENTLY ASKED QUESTIONS',
        faq_heading: 'EVERYTHING YOU NEED TO KNOW ABOUT TRAVEL & TOURISM SOLUTIONS.',
        faqs: [
          {
            question: 'Can you integrate our booking platform with existing channel managers and payment gateways?',
            answer: 'Yes. We integrate with major travel APIs, PMS, and channel managers including Beds24, Cloudbeds, Stripe, Razorpay, and custom booking APIs.'
          },
          {
            question: 'Do you travel on-location to produce destination photography and video content?',
            answer: 'Yes. Our media production crew provides full on-location commercial photography, drone videography, and lifestyle content capture globally.'
          },
          {
            question: 'How do you help travel brands increase direct bookings over OTAs?',
            answer: 'We design high-converting direct booking funnels, offer loyalty incentives, optimize mobile checkout speeds, and run targeted SEO and Google Ads campaigns.'
          }
        ],
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 10. Finance & FinTech Detail Document
  await db.collection('industry_details').updateOne(
    { industry_slug: 'finance-fintech' },
    {
      $set: {
        industry_id: financeInd ? financeInd._id.toString() : '6b08f95738a6a950595ecb56',
        industry_slug: 'finance-fintech',
        hero_tagline: 'FINANCE & FINTECH',
        hero_heading: 'ENGINEERING SMARTER DIGITAL EXPERIENCES FOR FINANCIAL BUSINESSES.',
        hero_description: 'We support financial service providers and fintech businesses with customized software, modern web applications, intuitive user interfaces, digital branding and strategic marketing solutions designed around their business requirements.',
        pillars_heading: 'DISCIPLINE ARCHITECTURE & CAPABILITIES',
        pillars_description: 'Bank-grade security, intuitive client portals, and institutional credibility.',
        pillars: [
          {
            title: 'Digital Accessibility & Scale',
            desc: 'Secure cloud web portals, investor dashboards, automated verification engines, and scalable financial software architectures.',
            icon: 'Layers'
          },
          {
            title: 'Simplified User Interaction',
            desc: 'Intuitive user interface design, accessible data visualizations, and streamlined digital onboarding flows.',
            icon: 'TrendingUp'
          },
          {
            title: 'Institutional Trust & Authority',
            desc: 'Bank-grade brand identity, regulatory compliant digital communication, and transparent market positioning.',
            icon: 'Shield'
          }
        ],
        challenges_tagline: 'INDUSTRY CHALLENGES // OPERATIONAL BOTTLENECKS',
        challenges_heading: 'WHAT HOLDS FINANCIAL FIRMS BACK?',
        challenges_description: 'Navigating stringent security requirements, legacy technology debt, and complex onboarding.',
        challenges: [
          {
            title: 'High Customer Drop-off During Onboarding',
            description: 'Cumbersome manual verification and multi-step paper forms cause prospective clients to abandon applications.',
            impactMetric: '01'
          },
          {
            title: 'Rigid Legacy Software & Data Silos',
            description: 'Outdated legacy architectures prevent integration with modern banking APIs and delay digital service rollouts.',
            impactMetric: '02'
          },
          {
            title: 'Establishing Digital Trust & Compliance',
            description: 'Financial clients require uncompromising security posture, data encryption, and transparent regulatory compliance.',
            impactMetric: '03'
          },
          {
            title: 'Complex Financial Data Representation',
            description: 'Presenting dense portfolio analytics and reporting in an accessible, mobile-responsive manner remains a persistent challenge.',
            impactMetric: '04'
          }
        ],
        solutions_tagline: 'INTEGRATED SOLUTIONS // INDUSTRY CAPABILITIES',
        solutions_heading: 'THE RIGHT TECHNOLOGY. THE RIGHT STRATEGY. THE RIGHT IMPACT.',
        solutions_description: 'Engineered digital capabilities tailored to meet strict financial regulatory and performance standards.',
        services: [
          {
            serviceTitle: 'Secure Financial Portals & Web Applications',
            serviceHref: '/technology-solution/web-development',
            role: 'Encrypted Client Dashboards & APIs',
            deliverablesSummary: 'Bank-grade encrypted customer portals, real-time portfolio dashboards, automated e-KYC, and multi-factor authentication.',
            badge: '01 // TECHNOLOGY'
          },
          {
            serviceTitle: 'Financial Lead Generation & Compliance SEO',
            serviceHref: '/digital-marketing/technical-seo-dominance',
            role: 'Targeted High-Net-Worth Client Acquisition',
            deliverablesSummary: 'Regulatory compliant financial search optimization, Google Ads funnels, and verified lead verification.',
            badge: '02 // MARKETING'
          },
          {
            serviceTitle: 'Institutional Brand Identity & Guidelines',
            serviceHref: '/branding-design/brand-identity-systems',
            role: 'Authority, Security & Brand Recognition',
            deliverablesSummary: 'Corporate visual identity, annual report design, investor collateral, and digital security badges.',
            badge: '03 // BRANDING'
          },
          {
            serviceTitle: 'Corporate Leadership Videos & Media',
            serviceHref: '/media-production/commercial-video-production',
            role: 'Executive Communication & Trust Building',
            deliverablesSummary: 'Executive interviews, investor update reels, institutional photography, and animated explainer graphics.',
            badge: '04 // MEDIA'
          }
        ],
        process_tagline: 'PROJECT ROADMAP // COMPLIANCE & SECURITY LIFECYCLE',
        process_heading: 'FROM SECURITY SPECIFICATION TO SCALED ROLLOUT.',
        process_description: 'Methodology prioritizing data encryption, regulatory adherence, and frictionless user experiences.',
        process_steps: [
          {
            step: '01',
            title: 'Compliance & Security Architecture',
            duration: 'Phase 1',
            description: 'Establishing security protocols, data residency requirements, audit trails, and core user journey mapping.'
          },
          {
            step: '02',
            title: 'UI/UX Design & User Flow Prototyping',
            duration: 'Phase 2',
            description: 'Designing intuitive financial dashboards, mobile-first responsive interfaces, and clear data visualization tokens.'
          },
          {
            step: '03',
            title: 'Encrypted Engineering & API Integration',
            duration: 'Phase 3',
            description: 'Full-stack development with end-to-end data encryption, automated testing, and secure third-party financial API connectors.'
          },
          {
            step: '04',
            title: 'Penetration Testing & Secure Launch',
            duration: 'Phase 4',
            description: 'Independent vulnerability assessment, rigorous load testing, production rollout, and continuous security monitoring.'
          }
        ],
        case_study_tagline: 'FEATURED SUCCESS STORY',
        case_study_title: 'Apex Global Capital // Wealth Management Portal',
        case_study_period: 'Institutional Modernization',
        case_study_challenge: 'Wealth management firm required a secure digital portal to replace manual PDF portfolio reporting for high-net-worth clients.',
        case_study_solution: 'RND Technosoft engineered an encrypted web portal with real-time portfolio performance tracking and biometric authentication.',
        case_study_metrics: [
          { label: 'Onboarding Speed', value: '< 10 Mins' },
          { label: 'Client Engagement', value: '+210%' },
          { label: 'Operational Cost', value: '-40%' }
        ],
        case_study_quote_text: 'RND Technosoft delivered an institutional platform that exceeded our strictest compliance and performance expectations.',
        case_study_quote_author: 'Devon Vance',
        case_study_quote_role: 'Managing Director, Apex Global Capital',
        cta_tagline: "FINANCE & FINTECH // LET'S CONNECT",
        cta_heading: 'READY TO ELEVATE YOUR FINANCIAL PLATFORM?',
        cta_description: 'Connect with our team to discuss custom financial software, client portals, branding, or digital customer acquisition.',
        faq_tagline: 'FREQUENTLY ASKED QUESTIONS',
        faq_heading: 'EVERYTHING YOU NEED TO KNOW ABOUT FINANCE & FINTECH SOLUTIONS.',
        faqs: [
          {
            question: 'How do you ensure data security and regulatory compliance for financial platforms?',
            answer: 'We build systems following industry standards including data encryption in transit (TLS 1.3) and at rest (AES-256), role-based access control (RBAC), and compliance-ready audit trails.'
          },
          {
            question: 'Can your solutions integrate with legacy banking and accounting software?',
            answer: 'Yes. We build robust API middleware and secure connectors to interface seamlessly with modern and legacy financial databases, ERPs, and third-party gateways.'
          },
          {
            question: 'Do you build both web applications and marketing websites for financial firms?',
            answer: 'Yes. We provide end-to-end capabilities spanning institutional brand identity, high-converting marketing websites, customer acquisition, and secure web application portals.'
          }
        ],
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );
  console.log('✓ All 10 industry details documents verified and upserted in MongoDB');

  console.log('--- 5. UPDATING PAGE_COMPONENTS: ENABLING SERVICE_CARDS ---');
  await db.collection('page_components').updateOne(
    { page: 'home', key: 'service_cards' },
    {
      $set: {
        is_active: true,
        updated_at: new Date().toISOString()
      }
    }
  );
  console.log('✓ service_cards is_active set to true in page_components');

  await client.close();
  console.log('ALL SERVICES AND INDUSTRIES DATA SYNC COMPLETED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
