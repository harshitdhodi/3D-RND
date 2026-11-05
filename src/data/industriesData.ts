export interface IndustryChallenge {
  title: string;
  description: string;
  impactMetric: string;
}

export interface IndustryServiceCombination {
  serviceTitle: string;
  serviceHref: string;
  role: string;
  deliverablesSummary: string;
  badge: string;
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyOutputs: string[];
}

export interface IndustryProjectWork {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  highlightMetric: string;
  desc: string;
  techStack: string[];
  deliverables: string[];
  year: string;
}

export interface IndustryCaseStudy {
  title: string;
  client: string;
  period: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string; change: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  shortInfo: string;
  image?: string;
  heroMetrics: { label: string; value: string }[];
  challenges: IndustryChallenge[];
  serviceCombinations: IndustryServiceCombination[];
  process: IndustryProcessStep[];
  pillars: { title: string; desc: string; icon: string }[];
  works: IndustryProjectWork[];
  caseStudy: IndustryCaseStudy;
  faqs: IndustryFAQ[];
}

export const industriesList: IndustryData[] = [
  {
    slug: "manufacturing",
    number: "01",
    title: "Manufacturing & Industrial",
    image: "/Industries/manufacturing_mockup.png",
    category: "Smart Manufacturing & Digital Transformation",
    badge: "MANUFACTURING & INDUSTRIAL",
    tagline: "FROM THE FACTORY FLOOR TO THE FUTURE OF INDUSTRY.",
    shortInfo: "We help manufacturing businesses modernize operations through custom software, enterprise applications, digital platforms and strategic brand communication. Our solutions support operational visibility, streamlined workflows and stronger digital positioning.",
    heroMetrics: [
      { label: "Operational Efficiency", value: "Smarter Workflows" },
      { label: "Business Visibility", value: "Connected Operations" },
      { label: "Digital Growth", value: "Stronger Market Presence" },
    ],
    challenges: [
      {
        title: "Disconnected Business Operations",
        description: "Managing production, inventory, procurement and accounts across disconnected systems can create delays, data inconsistencies and unnecessary complexity.",
        impactMetric: "01",
      },
      {
        title: "Manual & Time-Consuming Processes",
        description: "Repetitive administrative tasks and manual workflows consume valuable time and make it harder to maintain operational efficiency.",
        impactMetric: "02",
      },
      {
        title: "Limited Digital Visibility",
        description: "Without a strong website, search presence and digital communication strategy, manufacturers can struggle to reach new buyers and business opportunities.",
        impactMetric: "03",
      },
      {
        title: "Inconsistent Brand Positioning",
        description: "Outdated branding, poor product presentation and limited marketing communication can make it difficult to differentiate your business in a competitive industrial market.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Technology Solutions",
        serviceHref: "/technology-solution/web-development",
        role: "CUSTOM SOFTWARE & BUSINESS APPLICATIONS",
        deliverablesSummary: "Build technology around the way your business works. We develop customized software, web applications, business management platforms and e-commerce solutions that support your operational and commercial requirements. Core capabilities: Custom software, web development, mobile applications, ERP-related business systems and e-commerce.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "INDUSTRIAL DIGITAL GROWTH",
        deliverablesSummary: "Make your manufacturing business easier to discover and connect with potential buyers. We combine SEO, social media management, paid advertising and content strategies to strengthen your digital presence and generate business opportunities. Core capabilities: SEO, B2B digital marketing, social media, paid campaigns and content marketing.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "CORPORATE IDENTITY & VISUAL COMMUNICATION",
        deliverablesSummary: "Build a professional and consistent brand that reflects your manufacturing expertise. From brand identity and graphic design to corporate presentations, catalogues and marketing collateral, we help communicate your value effectively. Core capabilities: Brand identity, graphic design, corporate profiles, product catalogues and marketing collateral.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "INDUSTRIAL PHOTOGRAPHY & VIDEOGRAPHY",
        deliverablesSummary: "Showcase your manufacturing capabilities through professional visual storytelling. Present your products, facilities, processes and people through engaging photography, corporate videos and creative production. Core capabilities: Industrial photography, factory videography, product videos, editing and promotional films.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "DISCOVERY",
        duration: "UNDERSTAND THE BUSINESS",
        description: "We begin by understanding your manufacturing operations, business objectives, existing systems, target audience and challenges.",
        keyOutputs: ["Business requirement analysis", "Operational assessment", "Project scope definition", "Goal identification"],
      },
      {
        step: "02",
        title: "STRATEGY & PLANNING",
        duration: "DESIGN THE RIGHT APPROACH",
        description: "We develop a tailored project strategy combining the right technology, creative direction and marketing approach to meet your requirements.",
        keyOutputs: ["Solution planning", "Technology and creative strategy", "Project roadmap", "Design direction"],
      },
      {
        step: "03",
        title: "CREATION & DEVELOPMENT",
        duration: "TURN STRATEGY INTO ACTION",
        description: "Our team brings the approved plan to life through development, design, content creation and implementation.",
        keyOutputs: ["Website and software development", "Branding and design execution", "Marketing asset creation", "Testing and refinements"],
      },
      {
        step: "04",
        title: "LAUNCH & GROWTH",
        duration: "LAUNCH, MEASURE & EVOLVE",
        description: "We support the rollout of your solution, review its performance and identify opportunities for ongoing improvement.",
        keyOutputs: ["Deployment and launch", "Performance monitoring", "Project handover", "Ongoing optimization"],
      },
    ],
    pillars: [
      {
        title: "Connected Business Operations",
        desc: "Bring production, inventory, procurement and business management together through customized software solutions designed around your operational needs.",
        icon: "Layers",
      },
      {
        title: "Smarter Processes & Workflows",
        desc: "Simplify repetitive tasks, improve information flow and make business processes more efficient with intelligent applications and digital tools.",
        icon: "Zap",
      },
      {
        title: "Stronger Industrial Presence",
        desc: "Strengthen your market position through professional websites, SEO, digital marketing, corporate branding and compelling visual content.",
        icon: "TrendingUp",
      },
    ],
    works: [
      {
        id: "manufacturing-ops-platform",
        title: "Manufacturing Operations Management Platform",
        client: "Illustrative Solution 01",
        category: "Business Platform Concept",
        image: "/Industries/manufacturing_mockup.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "A centralized business platform concept designed to connect production planning, inventory, procurement and operational reporting.",
        techStack: ["Web Applications", "Database Integration", "Business Analytics"],
        deliverables: [
          "Production and order management",
          "Inventory and material tracking",
          "Procurement workflows",
          "Business performance dashboards",
        ],
        year: "2026",
      },
      {
        id: "industrial-bi-dashboard",
        title: "Industrial Business Intelligence Dashboard",
        client: "Illustrative Solution 02",
        category: "Digital Dashboard Concept",
        image: "/images/industries/work_manufacturing_2.jpg",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A digital dashboard concept that helps manufacturing teams organize operational information, monitor performance and make informed business decisions.",
        techStack: ["Data Visualization", "Web Applications", "Analytics"],
        deliverables: [
          "Operational performance dashboards",
          "Production reporting",
          "Data visualization",
          "Business insights",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Turning Complex Operations Into Connected Possibilities",
      client: "Business Transformation",
      period: "Industry Spotlight",
      overview: "Modernizing Manufacturing Operations Through Digital Solutions",
      challenge: "Manufacturing businesses often manage multiple functions across different tools and communication channels. This can make it difficult to maintain consistent information, coordinate teams and get a clear picture of business performance.",
      solution: "RND Technosoft can bring together the right combination of software development, digital platforms, business applications and creative solutions to address these challenges.",
      metrics: [
        { label: "Digital Presence", value: "Connected", change: "More Connected" },
        { label: "Business Workflows", value: "Streamlined", change: "Better Access" },
        { label: "Information Tools", value: "Improved", change: "Support Growth" },
      ],
      quote: {
        text: "A more connected digital presence, streamlined business workflows and better access to the information and tools needed to support business growth.",
        author: "Industry Transformation",
        role: "Manufacturing & Industrial Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for manufacturing businesses?",
        answer: "RND Technosoft offers website development, custom software, mobile applications, e-commerce platforms, digital marketing, branding and media production services for manufacturing and industrial businesses. Solutions are planned around your business requirements and objectives.",
      },
      {
        question: "Can you develop custom software for manufacturing companies?",
        answer: "Yes. We can help plan and develop customized software and business applications based on your operational requirements, workflows and integration needs.",
      },
      {
        question: "Can you create a professional website for our manufacturing company?",
        answer: "Yes. We develop business websites that showcase your products, manufacturing capabilities, company profile and services while helping potential customers and business partners connect with you.",
      },
      {
        question: "Do you provide digital marketing services for industrial businesses?",
        answer: "Yes. Our digital marketing services include SEO, social media management, paid advertising and content marketing to improve online visibility and support business growth.",
      },
      {
        question: "Can you help with industrial branding and product catalogues?",
        answer: "Yes. We provide brand identity, graphic design, corporate profiles, product catalogues and marketing collateral to help manufacturing businesses maintain a professional and consistent brand presence.",
      },
      {
        question: "Do you offer photography and videography for factories and manufacturing products?",
        answer: "Yes. Our media production services include professional photography, videography, product visuals, promotional videos and video editing to showcase your products, facilities and capabilities.",
      },
      {
        question: "Can we combine multiple services under one project?",
        answer: "Absolutely. You can combine technology, digital marketing, branding and media production depending on your business goals and project requirements.",
      },
      {
        question: "How do we get started with RND Technosoft?",
        answer: "Simply submit your project enquiry through our website. Share your business details, requirements and objectives, and our team will connect with you to discuss the next steps.",
      },
    ],
  },
  {
    slug: "healthcare",
    number: "02",
    title: "Healthcare & Dental",
    image: "/Industries/healthcare_mockup.png",
    category: "Healthcare Technology & Digital Transformation",
    badge: "HEALTHCARE & DENTAL",
    tagline: "FROM BETTER PATIENT EXPERIENCES TO A MORE CONNECTED HEALTHCARE FUTURE.",
    shortInfo: "Healthcare is evolving, and so are patient expectations. RND Technosoft helps hospitals, clinics, dental practices and healthcare businesses strengthen their digital presence, streamline business processes and connect with their audiences through tailored technology, digital marketing, branding and media solutions.",
    heroMetrics: [
      { label: "Patient Experience", value: "Make every digital interaction simpler" },
      { label: "Connected Operations", value: "Build more organised business workflows" },
      { label: "Digital Visibility", value: "Help patients discover your services" },
    ],
    challenges: [
      {
        title: "Fragmented Digital Experiences",
        description: "Outdated websites and disconnected digital touchpoints can make it difficult for patients to find information and access services.",
        impactMetric: "01",
      },
      {
        title: "Time-Consuming Administrative Workflows",
        description: "Repetitive manual processes can create operational friction and take valuable time away from core business activities.",
        impactMetric: "02",
      },
      {
        title: "Limited Online Visibility",
        description: "Without a focused digital strategy, clinics and healthcare providers may struggle to reach the right audience and communicate their services.",
        impactMetric: "03",
      },
      {
        title: "Inconsistent Brand Communication",
        description: "Unclear messaging and inconsistent visual identity can make it harder to establish recognition and patient confidence.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Healthcare Technology Solutions",
        serviceHref: "/technology-solution/web-development",
        role: "DIGITAL PATIENT EXPERIENCES",
        deliverablesSummary: "Custom website development, patient-facing applications, business software and digital platforms designed around your organisation's requirements. Create professional websites and digital platforms that make it easier for patients to explore services, find information and connect with healthcare providers.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Healthcare Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "SMARTER BUSINESS OPERATIONS",
        deliverablesSummary: "SEO, social media management, content strategy and paid campaigns to improve online visibility and connect healthcare brands with relevant audiences. Use tailored software and digital solutions to organise workflows, simplify everyday processes and improve business visibility.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Healthcare Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "STRONGER HEALTHCARE BRANDS",
        deliverablesSummary: "Brand identity, graphic design, marketing materials and visual communication that create a consistent and professional brand experience. Build trust and recognition through strategic branding, engaging content and digital marketing designed for healthcare audiences.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Healthcare Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "HEALTHCARE VISUAL STORYTELLING",
        deliverablesSummary: "Professional clinic photography, doctor profiles, facility videos, promotional films and creative content that bring your healthcare brand to life.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "UNDERSTAND YOUR ORGANISATION",
        duration: "Discovery Phase",
        description: "We explore your services, audience, challenges and business objectives.",
        keyOutputs: ["Service analysis", "Audience research", "Challenge identification", "Business objectives"],
      },
      {
        step: "02",
        title: "PLAN THE RIGHT STRATEGY",
        duration: "Strategy Development",
        description: "We define the project direction, creative approach, technology requirements and deliverables.",
        keyOutputs: ["Project direction", "Creative approach", "Technology requirements", "Deliverables planning"],
      },
      {
        step: "03",
        title: "CREATE & DEVELOP",
        duration: "Implementation",
        description: "Our team brings the strategy to life through design, development, marketing or media production.",
        keyOutputs: ["Design execution", "Development", "Marketing implementation", "Media production"],
      },
      {
        step: "04",
        title: "LAUNCH & IMPROVE",
        duration: "Deployment & Growth",
        description: "We deliver the final solution and identify opportunities for ongoing improvements and growth.",
        keyOutputs: ["Solution delivery", "Performance review", "Improvement opportunities", "Growth planning"],
      },
    ],
    pillars: [
      {
        title: "Digital Patient Experiences",
        desc: "Create professional websites and digital platforms that make it easier for patients to explore services, find information and connect with healthcare providers.",
        icon: "Layers",
      },
      {
        title: "Smarter Business Operations",
        desc: "Use tailored software and digital solutions to organise workflows, simplify everyday processes and improve business visibility.",
        icon: "Zap",
      },
      {
        title: "Stronger Healthcare Brands",
        desc: "Build trust and recognition through strategic branding, engaging content and digital marketing designed for healthcare audiences.",
        icon: "TrendingUp",
      },
    ],
    works: [
      {
        id: "healthcare-patient-platform",
        title: "Healthcare Website & Patient Engagement Platform",
        client: "Illustrative Solution 01",
        category: "Healthcare Digital Platform",
        image: "/Industries/healthcare_mockup.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "A modern digital experience designed to present healthcare services, introduce medical professionals and make essential information easier for patients to access.",
        techStack: ["Website Development", "Patient Portal", "Digital Communication"],
        deliverables: [
          "Service presentation",
          "Medical professional profiles",
          "Patient information access",
          "Digital communication tools",
        ],
        year: "2026",
      },
      {
        id: "dental-clinic-digital-growth",
        title: "Dental Clinic Digital Growth & Brand Identity",
        client: "Illustrative Solution 02",
        category: "Dental Practice Branding",
        image: "/Industries/Hospital.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A cohesive digital presence combining clinic branding, website design, search visibility and engaging social media communication.",
        techStack: ["Brand Identity", "Web Design", "SEO", "Social Media"],
        deliverables: [
          "Clinic branding",
          "Website design",
          "Search visibility",
          "Social media strategy",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Transforming Healthcare Experiences Through Digital Innovation",
      client: "Healthcare Organisation",
      period: "Industry Spotlight",
      overview: "Discover how the right combination of technology, design and digital strategy can help healthcare organisations improve their online presence, communicate more effectively and create smoother business experiences.",
      challenge: "An outdated digital presence and disconnected communication touchpoints made it difficult for patients to access information and connect with the healthcare provider.",
      solution: "RND Technosoft developed a unified digital experience combining website development, brand communication and digital marketing strategy tailored to the organisation's goals.",
      metrics: [
        { label: "Digital Experience", value: "Unified", change: "More Connected" },
        { label: "Communication", value: "Improved", change: "Better Clarity" },
        { label: "Patient Access", value: "Simplified", change: "Easier Navigation" },
      ],
      quote: {
        text: "A unified digital experience tailored to the organisation's goals, improving online presence and communication with patients.",
        author: "Healthcare Transformation",
        role: "Healthcare & Dental Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for healthcare businesses?",
        answer: "We provide website and application development, custom software solutions, digital marketing, branding, graphic design, photography and videography for healthcare organisations.",
      },
      {
        question: "Can you develop websites for hospitals and dental clinics?",
        answer: "Yes. We develop professional, responsive websites that showcase services, introduce medical professionals, communicate important information and make it easier for patients to connect with your organisation.",
      },
      {
        question: "Do you develop custom software for healthcare organisations?",
        answer: "We offer custom software development based on business requirements. The scope, integrations and technical requirements are assessed before defining the solution.",
      },
      {
        question: "Can you help our clinic attract more patients online?",
        answer: "Our digital marketing services include SEO, social media management, content creation and paid advertising strategies designed to improve online visibility and reach relevant audiences.",
      },
      {
        question: "Do you provide branding services for doctors and clinics?",
        answer: "Yes. We help healthcare businesses build a consistent identity through logo design, brand guidelines, graphic design and marketing collateral.",
      },
      {
        question: "Can you create promotional videos and photographs for healthcare businesses?",
        answer: "Yes. We offer professional photography, videography and post-production for clinics, hospitals, doctors, dental practices and healthcare brands.",
      },
      {
        question: "Can we combine website development, branding and digital marketing?",
        answer: "Absolutely. You can choose individual services or combine multiple capabilities into a coordinated project based on your business goals.",
      },
      {
        question: "How do we get started with RND Technosoft?",
        answer: "Share your requirements through our project enquiry form. Our team can review your objectives and discuss the appropriate services and next steps.",
      },
    ],
  },
  {
    slug: "food-fmcg",
    number: "03",
    title: "Food & FMCG",
    image: "/Industries/food_mockup.png",
    category: "Food Commerce & Digital Transformation",
    badge: "FOOD & FMCG",
    tagline: "FROM PRODUCT DISCOVERY TO PURCHASE. BUILDING THE FUTURE OF FOOD & FMCG.",
    shortInfo: "In a fast-moving consumer market, your digital experience matters as much as your product. RND Technosoft helps food manufacturers, FMCG brands, beverage businesses and emerging food ventures build stronger digital platforms, streamline business processes and connect with customers through technology, marketing, branding and creative media.",
    heroMetrics: [
      { label: "Digital Commerce", value: "Create smoother online buying experiences" },
      { label: "Operational Visibility", value: "Improve business and inventory workflows" },
      { label: "Brand Engagement", value: "Build stronger customer connections" },
    ],
    challenges: [
      {
        title: "Disconnected Sales & Business Channels",
        description: "Managing online stores, product information, orders and customer interactions across separate platforms can create unnecessary complexity.",
        impactMetric: "01",
      },
      {
        title: "Inventory & Order Management Gaps",
        description: "Limited visibility across stock, orders and fulfilment workflows can make it harder to manage demand and maintain a smooth customer experience.",
        impactMetric: "02",
      },
      {
        title: "High Competition & Low Digital Visibility",
        description: "With consumers discovering products across search engines and social platforms, brands need a consistent strategy to stand out.",
        impactMetric: "03",
      },
      {
        title: "Difficulty Building Product Appeal",
        description: "Inconsistent packaging, product photography and brand communication can make it harder to communicate product value and earn consumer attention.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Food Commerce & Technology Solutions",
        serviceHref: "/technology-solution/ecommerce-platform-engineering",
        role: "CONNECTED DIGITAL COMMERCE",
        deliverablesSummary: "E-commerce website development, mobile applications, custom software and digital platforms that support product discovery, online sales and business workflows. Build online storefronts and e-commerce experiences that make product discovery, ordering and repeat purchases easier.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Food & FMCG Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "SMARTER BUSINESS WORKFLOWS",
        deliverablesSummary: "SEO, social media management, content strategy and paid advertising to increase brand visibility, promote products and reach relevant audiences. Bring greater structure to product information, order management and everyday business processes through tailored digital solutions.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Food Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "STRONGER CONSUMER BRANDS",
        deliverablesSummary: "Brand identity, packaging design, product creatives, catalogues and marketing collateral that give your products a recognisable and consistent visual identity. Make your products stand out with compelling branding, strategic marketing and high-quality visual storytelling.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Food & Beverage Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "VISUAL PRODUCT STORYTELLING",
        deliverablesSummary: "Commercial product photography, food videography, promotional films, social media reels and creative visual content that makes your products stand out.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "UNDERSTAND THE BRAND & BUSINESS",
        duration: "Discovery",
        description: "We explore your products, target customers, sales channels, challenges and growth objectives.",
        keyOutputs: ["Business and audience understanding", "Project requirements", "Scope and objectives"],
      },
      {
        step: "02",
        title: "DEFINE THE DIGITAL STRATEGY",
        duration: "Strategy",
        description: "We plan the right combination of technology, design, marketing and media based on your needs.",
        keyOutputs: ["Solution strategy", "User journey and creative direction", "Project roadmap"],
      },
      {
        step: "03",
        title: "DESIGN, DEVELOP & CREATE",
        duration: "Implementation",
        description: "Our team executes the agreed scope, whether it involves an e-commerce platform, brand identity, marketing campaign or media production.",
        keyOutputs: ["Website, software or digital assets", "Brand and campaign creatives", "Content and media deliverables"],
      },
      {
        step: "04",
        title: "LAUNCH, REVIEW & IMPROVE",
        duration: "Deployment",
        description: "We support the delivery process and identify opportunities to improve the digital experience and support future business growth.",
        keyOutputs: ["Project launch and handover", "Performance review, where applicable", "Future improvement recommendations"],
      },
    ],
    pillars: [
      {
        title: "Connected Digital Commerce",
        desc: "Build online storefronts and e-commerce experiences that make product discovery, ordering and repeat purchases easier.",
        icon: "ShoppingBag",
      },
      {
        title: "Smarter Business Workflows",
        desc: "Bring greater structure to product information, order management and everyday business processes through tailored digital solutions.",
        icon: "Zap",
      },
      {
        title: "Stronger Consumer Brands",
        desc: "Make your products stand out with compelling branding, strategic marketing and high-quality visual storytelling.",
        icon: "TrendingUp",
      },
    ],
    works: [
      {
        id: "d2c-food-ecommerce",
        title: "D2C Food & Beverage E-commerce Experience",
        client: "Illustrative Solution 01",
        category: "Food E-commerce Platform",
        image: "/Industries/food_mockup.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "A consumer-focused online storefront concept designed to showcase products, simplify product discovery and create a convenient online ordering journey.",
        techStack: ["E-commerce Platform", "Product Catalog", "Checkout System"],
        deliverables: [
          "Responsive e-commerce website",
          "Product categories and detailed product pages",
          "Shopping cart and checkout experience",
        ],
        year: "2026",
      },
      {
        id: "fmcg-brand-campaign",
        title: "FMCG Brand Identity & Product Campaign",
        client: "Illustrative Solution 02",
        category: "Brand & Marketing Campaign",
        image: "/images/industries/work_food_2.jpg",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A cohesive brand and media concept designed to strengthen product presentation and create consistent communication across digital and marketing channels.",
        techStack: ["Brand Identity", "Product Photography", "Social Media"],
        deliverables: [
          "Brand identity and visual direction",
          "Product photography and promotional creatives",
          "Social media campaign assets",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Helping a Food Brand Grow Beyond Its Shelves",
      client: "Food & Beverage Brand",
      period: "Success Story",
      overview: "Discover how a connected digital strategy can help food and FMCG businesses strengthen their online presence, improve product presentation and create more convenient buying experiences.",
      challenge: "Limited online product visibility and an inconsistent digital customer journey made it difficult for customers to discover and purchase products online.",
      solution: "RND Technosoft developed a cohesive digital experience combining e-commerce development, brand communication and digital marketing designed around the brand's products and customers.",
      metrics: [
        { label: "Online Presence", value: "Stronger", change: "Better Visibility" },
        { label: "Product Presentation", value: "Improved", change: "More Consistent" },
        { label: "Customer Experience", value: "Enhanced", change: "More Convenient" },
      ],
      quote: {
        text: "A cohesive digital experience designed around the brand's products and customers, improving online visibility and creating more convenient buying experiences.",
        author: "Food Brand Growth",
        role: "Food & FMCG Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for Food & FMCG businesses?",
        answer: "We offer e-commerce website development, custom software, mobile applications, digital marketing, branding, packaging design, product photography and videography.",
      },
      {
        question: "Can you develop an e-commerce website for a food or FMCG brand?",
        answer: "Yes. We create responsive e-commerce platforms that showcase products, organise product categories and provide convenient shopping and checkout experiences.",
      },
      {
        question: "Can you help our food brand sell directly to consumers online?",
        answer: "We can develop D2C e-commerce experiences with product catalogues, shopping carts and suitable payment and ordering integrations based on your business requirements.",
      },
      {
        question: "Do you provide digital marketing for food and beverage brands?",
        answer: "Yes. Our services include SEO, social media management, content strategy and paid advertising to help brands improve online visibility and reach relevant consumers.",
      },
      {
        question: "Can you design product packaging and branding?",
        answer: "Yes. We offer brand identity, packaging design, product creatives, catalogues and marketing collateral to create a consistent visual identity for your products.",
      },
      {
        question: "Do you provide professional food and product photography?",
        answer: "Yes. We provide commercial product photography, food photography, videography and promotional media production for food, beverage and FMCG brands.",
      },
      {
        question: "Can you develop custom software for food businesses?",
        answer: "Yes. We can explore custom software and business applications based on your requirements, workflows and operational objectives.",
      },
      {
        question: "Can we combine multiple services for a product launch?",
        answer: "Absolutely. You can combine website development, branding, digital marketing and media production to create a coordinated launch experience.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    number: "04",
    title: "Retail & E-Commerce",
    image: "/Industries/retail_mockup.png",
    category: "Digital Commerce & Omnichannel Experiences",
    badge: "RETAIL & E-COMMERCE",
    tagline: "BEYOND THE STOREFRONT. CREATING THE NEXT GENERATION OF RETAIL EXPERIENCES.",
    shortInfo: "Today's customers expect more than an online store. They expect seamless shopping journeys, engaging product experiences and consistent brand interactions across every channel. RND Technosoft helps retail businesses and e-commerce brands build powerful digital platforms, strengthen customer engagement and create memorable shopping experiences through technology, marketing, design and media.",
    heroMetrics: [
      { label: "Seamless Shopping", value: "Create smoother digital buying journeys" },
      { label: "Connected Commerce", value: "Bring digital touchpoints together" },
      { label: "Customer Engagement", value: "Build stronger retail relationships" },
    ],
    challenges: [
      {
        title: "High Cart Abandonment & Purchase Friction",
        description: "Complicated navigation, slow-loading pages and lengthy checkout processes can interrupt the customer journey and lead to lost sales.",
        impactMetric: "01",
      },
      {
        title: "Disconnected Online & Offline Channels",
        description: "Managing products, orders and inventory across multiple sales channels can become challenging when systems do not work together.",
        impactMetric: "02",
      },
      {
        title: "Limited Product Interaction",
        description: "Static product images may not always communicate details such as dimensions, textures, finishes or customisation options clearly.",
        impactMetric: "03",
      },
      {
        title: "Increasing Competition & Customer Acquisition Costs",
        description: "Retail brands need a consistent digital marketing strategy and distinctive brand identity to attract attention and build customer loyalty.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "E-commerce & Technology Solutions",
        serviceHref: "/technology-solution/ecommerce-platform-engineering",
        role: "NEXT-GENERATION E-COMMERCE",
        deliverablesSummary: "Custom website development, e-commerce platforms, mobile applications and business software designed to support online sales and connected retail workflows. Create responsive online storefronts with intuitive navigation, engaging product displays and convenient shopping experiences.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Retail Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "CONNECTED RETAIL OPERATIONS",
        deliverablesSummary: "Search engine optimisation, paid advertising, social media management and content strategies that improve brand visibility and help attract relevant customers. Bring greater visibility to products, orders and business workflows through tailored digital platforms and integrations.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Retail Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "IMMERSIVE BRAND EXPERIENCES",
        deliverablesSummary: "Brand strategy, visual identity, UI/UX design, product creatives and marketing collateral that create a consistent and recognisable retail brand. Combine strong visual identity, creative content and interactive experiences to make your brand memorable.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Retail Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "PRODUCT VISUAL STORYTELLING",
        deliverablesSummary: "Professional product photography, commercial videos, promotional films, 3D motion graphics and creative content that bring products and campaigns to life.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "RETAIL EXPERIENCE DISCOVERY",
        duration: "Discovery",
        description: "We understand your products, audience, existing sales channels and current digital ecosystem.",
        keyOutputs: ["Business and customer journey assessment", "Product and platform requirements", "Project scope and objectives"],
      },
      {
        step: "02",
        title: "EXPERIENCE & SOLUTION ARCHITECTURE",
        duration: "Strategy",
        description: "We define the right platform, user experience, creative direction and integrations for your project.",
        keyOutputs: ["Digital commerce strategy", "UI/UX wireframes and design direction", "Technical and integration plan"],
      },
      {
        step: "03",
        title: "DESIGN, DEVELOPMENT & INTEGRATION",
        duration: "Implementation",
        description: "Our team brings the approved solution to life through website development, e-commerce implementation, visual design and relevant integrations.",
        keyOutputs: ["E-commerce platform or digital experience", "Responsive design and product presentation", "Agreed integrations and functionality"],
      },
      {
        step: "04",
        title: "LAUNCH & CONTINUOUS IMPROVEMENT",
        duration: "Deployment",
        description: "We prepare the solution for launch, review its performance and identify opportunities to improve the customer experience.",
        keyOutputs: ["Testing and deployment", "Performance review", "Improvement recommendations"],
      },
    ],
    pillars: [
      {
        title: "Next-Generation E-commerce",
        desc: "Create responsive online storefronts with intuitive navigation, engaging product displays and convenient shopping experiences.",
        icon: "ShoppingBag",
      },
      {
        title: "Connected Retail Operations",
        desc: "Bring greater visibility to products, orders and business workflows through tailored digital platforms and integrations.",
        icon: "Layers",
      },
      {
        title: "Immersive Brand Experiences",
        desc: "Combine strong visual identity, creative content and interactive experiences to make your brand memorable.",
        icon: "Sparkles",
      },
    ],
    works: [
      {
        id: "immersive-3d-showroom",
        title: "Immersive 3D Retail Showroom",
        client: "Illustrative Solution 01",
        category: "Interactive Digital Experience",
        image: "/Industries/retail_mockup.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "An interactive digital showroom concept that allows customers to explore products, view details and experience different styles or configurations through an engaging online interface.",
        techStack: ["3D Visualisation", "Interactive Experience", "Web Platform"],
        deliverables: [
          "Interactive 3D product visualisation",
          "Product customisation experience",
          "Responsive digital showroom",
        ],
        year: "2026",
      },
      {
        id: "omnichannel-ecommerce",
        title: "Omnichannel E-commerce Experience",
        client: "Illustrative Solution 02",
        category: "Connected Shopping Platform",
        image: "/RND our expertise/Digital marketing.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A connected online shopping concept designed to create a consistent customer journey across digital storefronts and retail touchpoints.",
        techStack: ["E-commerce Platform", "Omnichannel Integration", "Digital Commerce"],
        deliverables: [
          "E-commerce website development",
          "Product catalogue and shopping experience",
          "Suitable third-party integrations",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Turning Digital Shopping Into a More Engaging Experience",
      client: "Retail Brand",
      period: "Success Story",
      overview: "Discover how the right combination of e-commerce technology, interactive product experiences and thoughtful design can help retail businesses improve how customers explore, understand and purchase products.",
      challenge: "A conventional online shopping experience with limited product interaction and friction across the customer journey made it difficult for customers to fully understand products before purchase.",
      solution: "RND Technosoft developed a modern digital storefront combining e-commerce experience design, website development and improved product presentation to create a more engaging product discovery and shopping experience.",
      metrics: [
        { label: "Shopping Experience", value: "Enhanced", change: "More Engaging" },
        { label: "Product Discovery", value: "Improved", change: "Better Understanding" },
        { label: "Customer Journey", value: "Streamlined", change: "Less Friction" },
      ],
      quote: {
        text: "A modern digital storefront with a more engaging product discovery and shopping experience, helping customers better understand and connect with products.",
        author: "Retail Transformation",
        role: "Retail & E-commerce Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for retail businesses?",
        answer: "We provide e-commerce website development, mobile applications, custom software, digital marketing, branding, UI/UX design, 3D experiences and commercial media production.",
      },
      {
        question: "Can you develop a customised e-commerce website for my business?",
        answer: "Yes. We develop responsive e-commerce websites tailored to your products, customers and business requirements, including product catalogues, shopping carts and checkout functionality.",
      },
      {
        question: "Can you integrate my online store with existing business systems?",
        answer: "We can assess your existing platforms and integration requirements and develop suitable connections with supported third-party systems, based on project scope and technical feasibility.",
      },
      {
        question: "Do you provide 3D product visualisation and interactive shopping experiences?",
        answer: "We offer 3D and interactive design capabilities. The feasibility of product configurators, immersive showrooms and browser-based 3D experiences depends on the product assets, technical requirements and project scope.",
      },
      {
        question: "Can you help improve my e-commerce website's speed and user experience?",
        answer: "Yes. Our website development services include responsive design, performance-focused development and user experience improvements to support smoother browsing and shopping journeys.",
      },
      {
        question: "Do you offer digital marketing for retail and e-commerce brands?",
        answer: "Yes. We provide SEO, social media management, content strategy and paid advertising to help retail businesses improve visibility and reach relevant audiences.",
      },
      {
        question: "Can you help create branding and product visuals for my retail business?",
        answer: "Yes. Our services include brand identity, graphic design, UI/UX, product photography, promotional videos and other creative assets.",
      },
      {
        question: "Can RND Technosoft support both online and offline retail businesses?",
        answer: "Yes. We work with different retail business models and can discuss digital platforms, brand development and marketing solutions suited to your sales channels and requirements.",
      },
    ],
  },
  {
    slug: "hospitality",
    number: "05",
    title: "Hospitality & Resorts",
    image: "/Industries/Hospital.png",
    category: "Hospitality Technology & Guest Experience",
    badge: "HOSPITALITY & RESORTS",
    tagline: "BEYOND THE STAY. CREATING EXPERIENCES THAT GUESTS REMEMBER.",
    shortInfo: "In hospitality, every interaction shapes the guest experience. From discovering a destination to making a reservation and sharing a memorable stay, every touchpoint matters. RND Technosoft helps hotels, resorts, restaurants and hospitality brands build engaging digital experiences, simplify business workflows and strengthen their market presence through technology, marketing, branding and creative media.",
    heroMetrics: [
      { label: "Guest Experience", value: "Create seamless digital interactions" },
      { label: "Booking Experiences", value: "Make reservations more convenient" },
      { label: "Brand Visibility", value: "Inspire guests to discover your property" },
    ],
    challenges: [
      {
        title: "Dependence on Third-Party Booking Platforms",
        description: "Heavy reliance on external booking platforms can limit direct customer relationships and make it difficult to build a stronger independent digital presence.",
        impactMetric: "01",
      },
      {
        title: "Fragmented Guest Experiences",
        description: "Outdated websites, disconnected communication channels and difficult navigation can create friction throughout the guest journey.",
        impactMetric: "02",
      },
      {
        title: "Limited Digital Visibility",
        description: "Hotels and resorts compete with countless destinations and accommodation options. Without a consistent digital strategy, reaching potential guests becomes challenging.",
        impactMetric: "03",
      },
      {
        title: "Difficulty Showcasing the Experience",
        description: "Static visuals and inconsistent content may not fully communicate the atmosphere, facilities and unique experiences that make a property special.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Hospitality Technology Solutions",
        serviceHref: "/technology-solution/web-development",
        role: "SEAMLESS GUEST EXPERIENCES",
        deliverablesSummary: "Hotel and resort website development, booking platform development, mobile applications, custom software and digital solutions designed around hospitality business requirements. Create modern digital platforms that help guests explore your property, discover facilities and access important information.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Hospitality Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "SMARTER HOSPITALITY OPERATIONS",
        deliverablesSummary: "SEO, social media management, content strategy and paid advertising to improve online visibility, promote properties and reach travellers looking for memorable stays. Use tailored digital solutions to organise business workflows, simplify communication and support smoother operations.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Hospitality Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "MEMORABLE HOSPITALITY BRANDS",
        deliverablesSummary: "Brand identity, graphic design, menus, brochures, promotional materials and digital creatives that communicate your property's personality and positioning. Showcase your property through strategic branding, compelling marketing and professional visual storytelling.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Hospitality Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "PROPERTY VISUAL STORYTELLING",
        deliverablesSummary: "Professional hotel photography, resort videography, property walkthroughs, promotional films, destination videos and social media reels that bring your guest experience to life.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "UNDERSTAND YOUR HOSPITALITY BUSINESS",
        duration: "Discovery",
        description: "We explore your property, guest profiles, services, facilities, booking journey and business objectives.",
        keyOutputs: ["Business and audience understanding", "Digital presence assessment", "Project requirements and objectives"],
      },
      {
        step: "02",
        title: "PLAN THE GUEST EXPERIENCE",
        duration: "Strategy",
        description: "We define the appropriate technology, user experience, brand direction and marketing approach for your project.",
        keyOutputs: ["Digital experience strategy", "Website and user journey planning", "Creative and technical direction"],
      },
      {
        step: "03",
        title: "DESIGN, DEVELOP & CREATE",
        duration: "Implementation",
        description: "Our team brings the approved direction to life through website development, digital platforms, branding, marketing and media production.",
        keyOutputs: ["Website or digital platform", "Brand and marketing assets", "Photography and video deliverables"],
      },
      {
        step: "04",
        title: "LAUNCH, REVIEW & IMPROVE",
        duration: "Deployment",
        description: "We prepare the solution for launch and identify opportunities to strengthen the digital experience and support ongoing business growth.",
        keyOutputs: ["Testing and deployment", "Digital performance review, where applicable", "Future improvement recommendations"],
      },
    ],
    pillars: [
      {
        title: "Seamless Guest Experiences",
        desc: "Create modern digital platforms that help guests explore your property, discover facilities and access important information.",
        icon: "Compass",
      },
      {
        title: "Smarter Hospitality Operations",
        desc: "Use tailored digital solutions to organise business workflows, simplify communication and support smoother operations.",
        icon: "Layers",
      },
      {
        title: "Memorable Hospitality Brands",
        desc: "Showcase your property through strategic branding, compelling marketing and professional visual storytelling.",
        icon: "Sparkles",
      },
    ],
    works: [
      {
        id: "luxury-resort-digital",
        title: "Luxury Resort Digital Experience",
        client: "Illustrative Solution 01",
        category: "Premium Hospitality Website",
        image: "/Industries/Hospital.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "A premium website concept designed to showcase resort facilities, accommodation options, dining experiences and destination highlights through an engaging digital journey.",
        techStack: ["Website Development", "User Experience Design", "Digital Platform"],
        deliverables: [
          "Premium hospitality website",
          "Room and facility showcases",
          "Enquiry and booking journey",
          "Responsive user experience",
        ],
        year: "2026",
      },
      {
        id: "hotel-brand-storytelling",
        title: "Hotel Brand & Digital Storytelling",
        client: "Illustrative Solution 02",
        category: "Hospitality Brand & Media",
        image: "/RND our expertise/Media producttion.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A cohesive brand and media concept designed to communicate a property's unique identity through visual content and digital marketing.",
        techStack: ["Brand Identity", "Photography", "Video Production", "Digital Marketing"],
        deliverables: [
          "Brand identity and visual direction",
          "Professional property photography",
          "Promotional videos and social media content",
          "Digital marketing creatives",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Turning Hospitality Brands Into Destinations Guests Discover",
      client: "Hospitality Brand",
      period: "Success Story",
      overview: "Explore how a thoughtful digital strategy can help hospitality businesses showcase their unique offerings, improve online discovery and create a more convenient guest journey.",
      challenge: "An inconsistent online presence and limited digital presentation of the property's experiences.",
      solution: "RND Technosoft developed a cohesive digital experience combining website development, brand communication and digital marketing to highlight accommodation, facilities and guest offerings.",
      metrics: [
        { label: "Digital Presence", value: "Enhanced", change: "More Consistent" },
        { label: "Guest Discovery", value: "Improved", change: "Better Visibility" },
        { label: "Booking Journey", value: "Streamlined", change: "More Convenient" },
      ],
      quote: {
        text: "A cohesive digital experience highlighting accommodation, facilities and guest offerings, making the property more discoverable and the booking journey more convenient.",
        author: "Hospitality Transformation",
        role: "Hospitality & Resorts Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for hotels and resorts?",
        answer: "We offer website development, booking platform development, mobile applications, custom software, digital marketing, branding, photography and videography for hospitality businesses.",
      },
      {
        question: "Can you develop a website for my hotel or resort?",
        answer: "Yes. We develop responsive hospitality websites that showcase accommodation, facilities, dining options, amenities and experiences while helping visitors explore and enquire about bookings.",
      },
      {
        question: "Can you develop an online hotel booking platform?",
        answer: "We can develop booking-related digital platforms based on your business requirements. Features and integrations, such as availability, reservations and payment processing, are assessed according to project scope and technical feasibility.",
      },
      {
        question: "Can you help my hotel attract more direct bookings?",
        answer: "We can help strengthen your independent digital presence through website development, SEO, digital marketing and improved online enquiry or booking journeys.",
      },
      {
        question: "Do you provide digital marketing for resorts and hotels?",
        answer: "Yes. Our services include SEO, social media management, content strategy and paid advertising to improve visibility and connect hospitality brands with relevant audiences.",
      },
      {
        question: "Can you create professional photographs and videos of our property?",
        answer: "Yes. We offer property photography, interior and exterior photography, resort videography, promotional films and social media content to showcase your hospitality experience.",
      },
      {
        question: "Can you help create a premium brand identity for our hotel?",
        answer: "Yes. We provide brand identity, graphic design, menus, brochures, promotional materials and digital creatives that communicate your property's positioning and personality.",
      },
      {
        question: "Can we combine website development, marketing and media production?",
        answer: "Absolutely. You can combine multiple services to create a consistent digital experience, from your website and branding to marketing campaigns and property visuals.",
      },
    ],
  },
  {
    slug: "education",
    number: "06",
    title: "Education & Training",
    image: "/Industries/education.png",
    category: "Education Technology & Digital Learning",
    badge: "EDUCATION & TRAINING",
    tagline: "BEYOND THE CLASSROOM. BUILDING THE FUTURE OF DIGITAL LEARNING.",
    shortInfo: "Education is evolving beyond traditional classrooms. Students expect accessible learning experiences, educators need effective digital tools, and institutions must build stronger connections with their communities. RND Technosoft helps educational institutions, training providers and EdTech businesses embrace digital transformation through technology, marketing, branding and creative media.",
    heroMetrics: [
      { label: "Digital Learning", value: "Create accessible learning experiences" },
      { label: "Connected Education", value: "Simplify digital communication and workflows" },
      { label: "Institutional Visibility", value: "Build stronger educational brands" },
    ],
    challenges: [
      {
        title: "Limited Digital Learning Experiences",
        description: "Traditional learning approaches may not fully meet the expectations of students looking for flexible and accessible digital learning options.",
        impactMetric: "01",
      },
      {
        title: "Disconnected Administrative Processes",
        description: "Managing student enquiries, course information, registrations and communication across separate systems can create unnecessary complexity.",
        impactMetric: "02",
      },
      {
        title: "Low Online Visibility",
        description: "Educational institutions need a strong digital presence to reach prospective students, communicate their offerings and stand out in a competitive education market.",
        impactMetric: "03",
      },
      {
        title: "Inconsistent Brand Communication",
        description: "Outdated websites, unclear messaging and inconsistent visual identity can make it difficult for institutions to communicate their value and build recognition.",
        impactMetric: "04",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Education Technology Solutions",
        serviceHref: "/technology-solution/web-development",
        role: "ENGAGING DIGITAL LEARNING",
        deliverablesSummary: "Educational website development, learning management platforms, mobile applications, custom software and digital solutions designed around institutional and training requirements. Create modern websites, learning platforms and digital experiences that make educational content more accessible and engaging.",
        badge: "01 // TECHNOLOGY SOLUTIONS",
      },
      {
        serviceTitle: "Education Digital Marketing",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "SMARTER EDUCATIONAL OPERATIONS",
        deliverablesSummary: "SEO, social media management, content strategy and paid advertising to increase institutional visibility, promote courses and connect with prospective students. Support administrative workflows, student interactions and institutional processes through tailored digital solutions.",
        badge: "02 // DIGITAL MARKETING",
      },
      {
        serviceTitle: "Education Branding & Design",
        serviceHref: "/branding-design/corporate-identity",
        role: "STRONGER INSTITUTIONAL PRESENCE",
        deliverablesSummary: "Brand identity, graphic design, prospectuses, brochures, course creatives and marketing collateral that establish a professional and consistent institutional identity. Build recognition and trust through strategic branding, digital marketing and compelling educational content.",
        badge: "03 // BRANDING & DESIGN",
      },
      {
        serviceTitle: "Education Media Production",
        serviceHref: "/media-production/commercial-video-production",
        role: "EDUCATIONAL VISUAL STORYTELLING",
        deliverablesSummary: "Campus photography, educational videos, course promotional films, faculty introductions, student experience videos and social media content that bring your institution's story to life.",
        badge: "04 // MEDIA PRODUCTION",
      },
    ],
    process: [
      {
        step: "01",
        title: "UNDERSTAND YOUR INSTITUTION",
        duration: "Discovery",
        description: "We explore your institution, student audience, courses, existing systems and digital requirements.",
        keyOutputs: ["Institutional and audience understanding", "Business and learning requirements", "Project scope and objectives"],
      },
      {
        step: "02",
        title: "PLAN THE LEARNING EXPERIENCE",
        duration: "Strategy",
        description: "We define the right technology, platform structure, user experience and creative direction for your project.",
        keyOutputs: ["Digital strategy", "User journey and platform planning", "Design and technical direction"],
      },
      {
        step: "03",
        title: "DESIGN, DEVELOP & CREATE",
        duration: "Implementation",
        description: "Our team brings the approved solution to life through website development, software, digital platforms, branding and media production.",
        keyOutputs: ["Website or digital learning platform", "Brand and marketing assets", "Educational content and media deliverables"],
      },
      {
        step: "04",
        title: "LAUNCH, REVIEW & IMPROVE",
        duration: "Deployment",
        description: "We prepare the solution for launch and identify opportunities to improve the digital experience and support your institution's future growth.",
        keyOutputs: ["Testing and deployment", "Performance review, where applicable", "Future improvement recommendations"],
      },
    ],
    pillars: [
      {
        title: "Engaging Digital Learning",
        desc: "Create modern websites, learning platforms and digital experiences that make educational content more accessible and engaging.",
        icon: "Cpu",
      },
      {
        title: "Smarter Educational Operations",
        desc: "Support administrative workflows, student interactions and institutional processes through tailored digital solutions.",
        icon: "Layers",
      },
      {
        title: "Stronger Institutional Presence",
        desc: "Build recognition and trust through strategic branding, digital marketing and compelling educational content.",
        icon: "Sparkles",
      },
    ],
    works: [
      {
        id: "learning-platform",
        title: "Digital Learning Management Platform",
        client: "Illustrative Solution 01",
        category: "Learning Platform",
        image: "/Industries/education.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 01",
        desc: "A learning platform concept designed to organise educational content and create a more accessible online learning experience for students and educators.",
        techStack: ["Learning Platform", "Content Management", "User Experience"],
        deliverables: [
          "Learning platform website",
          "Course and content management",
          "Student and educator interfaces",
          "Responsive learning experience",
        ],
        year: "2026",
      },
      {
        id: "education-digital-presence",
        title: "Education Institution Digital Presence",
        client: "Illustrative Solution 02",
        category: "Educational Website",
        image: "/RND our expertise/Digital marketing.png",
        highlightMetric: "ILLUSTRATIVE SOLUTION 02",
        desc: "A comprehensive digital experience designed to showcase an institution's courses, faculty, facilities and achievements while making it easier for prospective students to explore its offerings.",
        techStack: ["Website Development", "Branding", "Digital Marketing"],
        deliverables: [
          "Institutional website development",
          "Course and programme showcases",
          "Branding and visual communication",
          "Digital marketing creatives",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Transforming the Way Education Connects With Learners",
      client: "Educational Institution",
      period: "Success Story",
      overview: "Discover how the right combination of technology, design and digital strategy can help educational organisations improve their online presence, simplify digital interactions and create engaging learning experiences.",
      challenge: "An outdated digital presence and limited access to structured online learning experiences.",
      solution: "RND Technosoft developed a modern digital experience combining website development, digital platform planning and brand communication designed around the institution's courses, learners and objectives.",
      metrics: [
        { label: "Digital Presence", value: "Modernized", change: "More Accessible" },
        { label: "Learning Experience", value: "Enhanced", change: "Better Structure" },
        { label: "Student Engagement", value: "Improved", change: "Stronger Connection" },
      ],
      quote: {
        text: "A modern digital experience designed around the institution's courses, learners and objectives, improving online presence and creating more accessible learning experiences.",
        author: "Education Transformation",
        role: "Education & Training Solutions",
      },
    },
    faqs: [
      {
        question: "What digital solutions does RND Technosoft offer for educational institutions?",
        answer: "We offer educational website development, learning platforms, mobile applications, custom software, digital marketing, branding, graphic design and media production.",
      },
      {
        question: "Can you develop a website for schools, colleges and coaching institutes?",
        answer: "Yes. We develop responsive educational websites that showcase courses, programmes, faculty, facilities, admissions information and institutional achievements.",
      },
      {
        question: "Can you develop a Learning Management System (LMS)?",
        answer: "We can develop learning management platforms based on your requirements, including course organisation, learning content and suitable student and educator interfaces. Features are finalised according to project scope.",
      },
      {
        question: "Can you create an online course platform?",
        answer: "Yes. We can develop digital platforms for educators and training providers to present courses and organise online learning experiences. Specific features depend on your requirements.",
      },
      {
        question: "Can you help educational institutions attract more students?",
        answer: "Our digital marketing services include SEO, social media management, content strategy and paid advertising to improve online visibility and reach prospective students.",
      },
      {
        question: "Do you provide branding and design services for educational institutions?",
        answer: "Yes. We offer brand identity, graphic design, prospectuses, brochures, course creatives and other marketing materials.",
      },
      {
        question: "Can you create educational videos and promotional content?",
        answer: "Yes. We provide professional photography, videography, course promotional videos, faculty introductions, campus visuals and social media content.",
      },
      {
        question: "Can we combine website development, digital marketing and branding?",
        answer: "Absolutely. You can combine multiple services to create a coordinated digital presence, from your website and institutional identity to marketing campaigns and media production.",
      },
    ],
  },
  // {
  //   slug: "real-estate",
  //   number: "07",
  //   title: "Real Estate & Construction",
  //   category: "Real Estate & Construction",
  //   badge: "VERTICAL 07 // PROPERTY & INFRASTRUCTURE",
  //   tagline: "Building stronger digital foundations for ambitious developments.",
  //   shortInfo: "We help real estate companies, property developers and construction businesses showcase projects, attract potential buyers and strengthen their market presence through property websites, digital campaigns, branding and immersive visual content.",
  //   heroMetrics: [
  //     { label: "Property Showcases", value: "Engaging Experiences" },
  //     { label: "Lead Generation", value: "Qualified Enquiries" },
  //     { label: "Project Branding", value: "Stronger Positioning" },
  //   ],
  //   challenges: [
  //     {
  //       title: "Difficulty Pre-Selling Off-Plan Units Sight Unseen",
  //       description: "Static architectural 2D floorplans fail to convey scale, balcony sightlines, or sunlight angles, causing prospective luxury buyers to delay high-value purchase commitments.",
  //       impactMetric: "-55% Longer Sales Cycle",
  //     },
  //     {
  //       title: "Construction Jobsite Delay & Rework Costs",
  //       description: "Subcontractor miscommunications, misaligned CAD specs, and late delivery tracking cause construction schedule slippages that cost millions in penalties.",
  //       impactMetric: "-35% Delays Avoided",
  //     },
  //     {
  //       title: "High Friction in Online Unit Reservation & Escrow",
  //       description: "Requiring buyers to visit sales galleries physically to place deposits limits sales reach and excludes international investors seeking rapid digital reservations.",
  //       impactMetric: "48% International Loss",
  //     },
  //   ],
  //   serviceCombinations: [
  //     {
  //       serviceTitle: "Web & Enterprise Cloud",
  //       serviceHref: "/technology-solution/web-development",
  //       role: "In-Browser 3D Building Digital Twin & Inventory Engine",
  //       deliverablesSummary: "Three.js and WebGL2 building orbit visualizer with real-time apartment availability, floor selection, and live lighting simulation.",
  //       badge: "3D PropTech",
  //     },
  //     {
  //       serviceTitle: "Search Dominance & Technical SEO",
  //       serviceHref: "/digital-marketing/technical-seo-dominance",
  //       role: "High-Net-Worth Investor Acquisition & International SEO",
  //       deliverablesSummary: "Multi-regional real estate search indexing, schema markup for luxury developments, and targeted lead funnels.",
  //       badge: "Investor Lead Gen",
  //     },
  //     {
  //       serviceTitle: "Mobile App Development",
  //       serviceHref: "/technology-solution/mobile-applications",
  //       role: "Jobsite Drone Telemetry & Field Inspection Portal",
  //       deliverablesSummary: "Offline tablet app syncing BIM IFC models, drone photogrammetry overlays, and automated safety milestone verification.",
  //       badge: "BIM Field App",
  //     },
  //   ],
  //   process: [
  //     {
  //       step: "01",
  //       title: "Revit / BIM Architectural Model Ingestion & Optimization",
  //       duration: "Weeks 1 - 2",
  //       description: "We ingest your complex architectural CAD, Revit, or ArchiCAD models and convert them into lightweight WebGL Draco meshes with optimized draw calls.",
  //       keyOutputs: ["Quantized 3D Building Geometry", "Inventory Data Schema", "PropTech UX Wireframes"],
  //     },
  //     {
  //       step: "02",
  //       title: "In-Browser Building Orbit & Balcony Sightline Engine",
  //       duration: "Weeks 3 - 5",
  //       description: "We engineer realistic sky daylight cycles, apartment filter controls, and interactive 2D-to-3D floorplan transitions in browser.",
  //       keyOutputs: ["3D Exterior Orbit Visualizer", "Interactive Unit Selector", "Balcony View Simulation"],
  //     },
  //     {
  //       step: "03",
  //       title: "Digital Reservation Escrow & CRM Pipeline Integration",
  //       duration: "Weeks 6 - 9",
  //       description: "Integration with Stripe, Plaid, DocuSign, and Salesforce CRM for instant token deposits, identity verification, and legal contract signing.",
  //       keyOutputs: ["Secure Escrow Deposit Portal", "DocuSign Contract Pipeline", "Real-Time CRM Sync"],
  //     },
  //     {
  //       step: "04",
  //       title: "International Sales Gallery Launch & Global CDN Edge",
  //       duration: "Weeks 10 - 12",
  //       description: "Testing across touchscreens, iPads, and mobile devices, edge caching deployment for sub-second international loading, and staff training.",
  //       keyOutputs: ["Touchscreen Kiosk Compatibility", "Global Edge CDN Deployment", "Final Source Handover"],
  //     },
  //   ],
  //   pillars: [
  //     {
  //       title: "3D Building Orbit & Floorplan Finder",
  //       desc: "Interactive 3D building exterior showing live unit availability, floor heights, and view angles.",
  //       icon: "Building2",
  //     },
  //     {
  //       title: "Virtual Penthouse Staging",
  //       desc: "Change interior finishes, hardwood floors, and marble countertops with realistic lighting in real time.",
  //       icon: "Cpu",
  //     },
  //     {
  //       title: "Automated Leasing & Escrow CRM",
  //       desc: "Digital reservation deposits, automated KYC buyer verification, and digital DocuSign contract triggers.",
  //       icon: "FileCheck",
  //     },
  //   ],
  //   works: [
  //     {
  //       id: "skyline-vr",
  //       title: "Skyline Tower // 3D Residential Building Twin",
  //       client: "Metropolis Development Group",
  //       category: "Luxury Residential PropTech",
  //       image: "/images/industries/work_realestate_1.jpg",
  //       highlightMetric: "$180M Units Pre-Sold",
  //       desc: "Full architectural 3D building visualizer where buyers orbit the 48-story luxury skyscraper, select individual apartments, and inspect panoramic sunset views from their balcony.",
  //       techStack: ["Three.js", "WebGL2", "React 19", "GLSL Shaders", "TailwindCSS"],
  //       deliverables: [
  //         "Interactive exterior 3D building twin with live inventory status",
  //         "Floorplan 2D-to-3D transition with daylight sun simulation",
  //         "Direct online token payment reservation via Stripe",
  //       ],
  //       year: "2026",
  //     },
  //     {
  //       id: "buildsync-os",
  //       title: "BuildSync BIM // Construction Telemetry Portal",
  //       client: "Apex General Contractors",
  //       category: "Construction Management ERP",
  //       image: "/images/industries/work_realestate_2.jpg",
  //       highlightMetric: "-35% Project Delays",
  //       desc: "Digital twin job-site telemetry portal syncing drone aerial photogrammetry, subcontractor task timelines, and material delivery schedules.",
  //       techStack: ["Next.js 15", "WebAssembly", "BIM IFC Engine", "PostgreSQL"],
  //       deliverables: [
  //         "Drone aerial 3D point-cloud overlay against architectural CAD",
  //         "Automated delay risk scoring with contractor dispatch alerts",
  //         "Mobile site superintendent inspection photo logging",
  //       ],
  //       year: "2026",
  //     },
  //   ],
  //   caseStudy: {
  //     title: "Pre-Selling 85% of Luxury Skyscraper Residences 9 Months Ahead of Schedule",
  //     client: "Metropolis Development Group",
  //     period: "10 Weeks Deployment",
  //     overview: "Metropolis Development needed to pre-sell $150M worth of luxury residential units in a competitive downtown market before commencing superstructure construction.",
  //     challenge: "Flat PDF architectural floorplans failed to convince international high-net-worth buyers who were purchasing sight unseen.",
  //     solution: "RnD Technosoft built a photorealistic 3D building visualizer where clients could view exact balcony sightlines, test furniture layouts, and secure deposits online.",
  //     metrics: [
  //       { label: "Pre-Sales Revenue", value: "$182 Million", change: "+121% Target" },
  //       { label: "Sales Cycle Duration", value: "18 Days", change: "-55% Faster" },
  //       { label: "International Buyers", value: "48%", change: "+340% Lift" },
  //     ],
  //     quote: {
  //       text: "The 3D building twin developed by RnD Technosoft allowed overseas investors to explore penthouses as if they were standing in them. It completely changed the speed of our sales.",
  //       author: "Victoria Sterling",
  //       role: "VP of Sales & Marketing, Metropolis Developments",
  //     },
  //   },
  //   faqs: [
  //     {
  //       question: "How do you convert existing architectural Revit or CAD models for web 3D?",
  //       answer: "Our automated pipeline converts complex Revit, Rhino, and ArchiCAD models into lightweight Draco-quantized meshes, optimizing draw calls while maintaining photorealistic textures.",
  //     },
  //     {
  //       question: "Can prospective buyers reserve a specific apartment unit online with a deposit?",
  //       answer: "Yes, our platforms integrate with secure escrow and payment gateways (Stripe, Plaid) to collect refundable deposits and generate digital reservation agreements instantly.",
  //     },
  //   ],
  // },
  // {
  //   slug: "startups-professional-services",
  //   number: "08",
  //   title: "Startups & Professional Services",
  //   category: "Startups & Professional Services",
  //   badge: "VERTICAL 08 // BUSINESS INNOVATION",
  //   tagline: "From bold beginnings to established market presence.",
  //   shortInfo: "We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences. From website and software development to brand identity and customer acquisition, we help businesses build, launch and grow.",
  //   heroMetrics: [
  //     { label: "Digital Foundations", value: "Built to Scale" },
  //     { label: "Brand Identity", value: "Market Recognition" },
  //     { label: "Business Growth", value: "Strategic Visibility" },
  //   ],
  //   challenges: [
  //     {
  //       title: "Slow Development Cycles Burning Pre-Seed Runway",
  //       description: "Early-stage founders burn scarce capital hiring fragmented freelance contractors or junior developers who take 9 months to ship buggy, unscalable products.",
  //       impactMetric: "14-Day MVP Solution",
  //     },
  //     {
  //       title: "Failing Institutional Investor Due Diligence Audits",
  //       description: "Venture capitalists reject startups during technical due diligence because of sloppy database architecture, security vulnerabilities, or missing SOC2 posture.",
  //       impactMetric: "$45M Capital at Stake",
  //     },
  //     {
  //       title: "Complex Enterprise Billing & Multi-Tenant Isolation",
  //       description: "Implementing seat-based pricing, Stripe usage metering, and multi-tenant database isolation delays product launch by several engineering quarters.",
  //       impactMetric: "68% Time Saved",
  //     },
  //   ],
  //   serviceCombinations: [
  //     {
  //       serviceTitle: "Web & Enterprise Cloud",
  //       serviceHref: "/technology-solution/web-development",
  //       role: "Investor-Grade SaaS Core & Multi-Tenant Database Mesh",
  //       deliverablesSummary: "Production Next.js 15 App Router architecture, PostgreSQL schemas with Row-Level Security (RLS), and sub-50ms global API routes.",
  //       badge: "Venture SaaS",
  //     },
  //     {
  //       serviceTitle: "Dedicated Agency Squads",
  //       serviceHref: "/technology-solution/enterprise-software-solutions",
  //       role: "Full-Stack Senior Engineering Squad on Demand",
  //       deliverablesSummary: "Autonomous squads consisting of a Principal Architect, Senior Frontend Lead, and Backend DevOps engineer moving at 2-week sprint speed.",
  //       badge: "Rapid Squads",
  //     },
  //     {
  //       serviceTitle: "Brand Strategy & Design Systems",
  //       serviceHref: "/branding-design/brand-identity-systems",
  //       role: "Pitch-Ready Brand Identity & High-Converting Landing Pages",
  //       deliverablesSummary: "Investor pitch decks, component-driven design systems in Figma, and high-converting marketing landing pages that secure early signups.",
  //       badge: "Investor Brand",
  //     },
  //   ],
  //   process: [
  //     {
  //       step: "01",
  //       title: "Product Scope & Enterprise Technical Scaffolding",
  //       duration: "Days 1 - 3",
  //       description: "We define your core user journey, strip unnecessary feature bloat, and deploy enterprise infrastructure (authentication, multi-tenancy, CI/CD pipeline).",
  //       keyOutputs: ["Scoped MVP Spec", "Database ERD & RLS Security Rules", "Live Staging Environment"],
  //     },
  //     {
  //       step: "02",
  //       title: "Rapid Sprint Execution & Core Feature Build",
  //       duration: "Days 4 - 9",
  //       description: "Daily automated builds, clean TypeScript code, Stripe billing integration, and interactive user onboarding flows developed with relentless focus.",
  //       keyOutputs: ["Core Product Features", "Stripe Billing & Subscriptions", "Daily Working Demos"],
  //     },
  //     {
  //       step: "03",
  //       title: "SOC2 Compliance Hardening & Analytics Telemetry",
  //       duration: "Days 10 - 12",
  //       description: "We implement immutable audit logging, role-based access control (RBAC), and product analytics tracking activation and cohort retention.",
  //       keyOutputs: ["SOC2 Compliance Ready Spec", "PostHog / Mixpanel Telemetry", "Automated E2E Test Suite"],
  //     },
  //     {
  //       step: "04",
  //       title: "Investor Demo Launch & Full IP Code Handover",
  //       duration: "Days 13 - 14",
  //       description: "Production launch on scalable cloud infrastructure, full source code handover, and repository transfer with zero vendor lock-in.",
  //       keyOutputs: ["Production Deployment", "Full Git Repository Ownership", "Investor Technical Briefing Packet"],
  //     },
  //   ],
  //   pillars: [
  //     {
  //       title: "Full-Stack SaaS Architecture",
  //       desc: "Production-ready Next.js 15, PostgreSQL, and multi-tenant authentication engines ready to scale from day one.",
  //       icon: "Layers",
  //     },
  //     {
  //       title: "Automated Workflows & Billing",
  //       desc: "Stripe billing tiers, usage-based metering, and automated onboarding sequences that convert free trials into MRR.",
  //       icon: "TrendingUp",
  //     },
  //     {
  //       title: "Investor-Grade Telemetry",
  //       desc: "Built-in cohort retention analytics, churn telemetry, and SOC2-compliant enterprise security posture.",
  //       icon: "Shield",
  //     },
  //   ],
  //   works: [
  //     {
  //       id: "novus-capital",
  //       title: "Novus Vault // Automated Investor Data Room",
  //       client: "Novus Ventures",
  //       category: "FinTech & Venture Capital",
  //       image: "/images/industries/work_startups_1.jpg",
  //       highlightMetric: "$45M Seed Round Closed",
  //       desc: "Secure document data room platform with dynamic watermark protection, investor viewing telemetry, and automated electronic NDA execution.",
  //       techStack: ["Next.js 15", "AWS S3 Vault", "PostgreSQL", "TailwindCSS"],
  //       deliverables: [
  //         "Dynamic document watermarking with granular access revocation",
  //         "Real-time page-by-page investor engagement telemetry heatmaps",
  //         "Automated cap table and convertible note modeling calculator",
  //       ],
  //       year: "2026",
  //     },
  //     {
  //       id: "flowstate-automation",
  //       title: "FlowState // Legal Practice Automation Engine",
  //       client: "Lexis Chambers International",
  //       category: "LegalTech & Enterprise Automation",
  //       image: "/images/industries/work_startups_2.jpg",
  //       highlightMetric: "68% Time Saved",
  //       desc: "AI-assisted contract lifecycle management platform automating NDA generation, clause risk analysis, and multi-party electronic signatures.",
  //       techStack: ["TypeScript", "LangChain AI", "PostgreSQL", "Prisma", "Docker"],
  //       deliverables: [
  //         "AI contract clause comparison and risk highlighting",
  //         "Automated billing time-tracker and retainer invoicing",
  //         "Encrypted client messaging and document storage portal",
  //       ],
  //       year: "2026",
  //     },
  //   ],
  //   caseStudy: {
  //     title: "Architecting and Launching B2B FinTech SaaS Platform in 14 Sprints",
  //     client: "Novus Capital Technologies",
  //     period: "14 Sprints Execution",
  //     overview: "The founders of Novus Capital needed an institutional-grade venture deal-flow platform to secure their Series A round, but had only 3 months before their investor demo day.",
  //     challenge: "Building a complex platform with bank-grade encryption, real-time analytics, and SOC2 compliance from scratch under tight deadlines.",
  //     solution: "RnD Technosoft deployed a dedicated engineering pod of 4 senior engineers, building a modular Next.js and Rust architecture that met every institutional security audit.",
  //     metrics: [
  //       { label: "Time-to-Production", value: "11 Weeks", change: "Ahead of Schedule" },
  //       { label: "Capital Raised", value: "$14.2M", change: "Oversubscribed Round" },
  //       { label: "SOC2 Compliance", value: "100%", change: "Zero Vulnerabilities" },
  //     ],
  //     quote: {
  //       text: "RnD Technosoft moved at startup speed with enterprise rigor. They didn't just write code; they helped us architect a platform that passed deep venture diligence with flying colors.",
  //       author: "Marcus Vance",
  //       role: "Co-Founder & CEO, Novus Capital",
  //     },
  //   },
  //   faqs: [
  //     {
  //       question: "How fast can you build and launch an MVP for a funded startup?",
  //       answer: "Using our pre-tested enterprise architectural foundations (authentication, billing, database mesh, CI/CD), we typically deliver production-ready MVPs in 4 to 8 weeks.",
  //     },
  //     {
  //       question: "Who owns the code and intellectual property created during the project?",
  //       answer: "You own 100% of all source code, architecture designs, and intellectual property. All repositories and cloud accounts are transferred to your organization upon project completion.",
  //     },
  //   ],
  // },
  // {
  //   slug: "travel-tourism",
  //   number: "09",
  //   title: "Travel & Tourism",
  //   category: "Travel & Tourism",
  //   badge: "VERTICAL 09 // TRAVEL & DISCOVERY",
  //   tagline: "Inspiring journeys through powerful digital experiences.",
  //   shortInfo: "We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites, booking platforms, creative campaigns, destination photography and digital storytelling.",
  //   heroMetrics: [
  //     { label: "Travel Platforms", value: "Easy Exploration" },
  //     { label: "Digital Campaigns", value: "Audience Engagement" },
  //     { label: "Visual Storytelling", value: "Destination Appeal" },
  //   ],
  //   challenges: [
  //     {
  //       title: "Extreme API Latency from Legacy GDS Systems",
  //       description: "Querying major Global Distribution Systems (Amadeus, Sabre) for flight and hotel availability takes 4+ seconds, driving impatient mobile travelers to competitor sites.",
  //       impactMetric: "-65% Search Latency",
  //     },
  //     {
  //       title: "Complex Multi-Currency FX & Tax Compliance",
  //       description: "Handling global payments across 40+ currencies with volatile exchange rates and regional value-added tax (VAT) creates margin leakage and reconciliation headaches.",
  //       impactMetric: "8.4% Forex Margin Leak",
  //     },
  //     {
  //       title: "Static Itinerary Formats That Fail to Convert",
  //       description: "Flat PDF travel schedules leave travelers confused about local transfer times, trail conditions, and weather changes, leading to customer support overload.",
  //       impactMetric: "4.8x Mobile Lift",
  //     },
  //   ],
  //   serviceCombinations: [
  //     {
  //       serviceTitle: "Web & Enterprise Cloud",
  //       serviceHref: "/technology-solution/web-development",
  //       role: "Distributed Edge Search Caching & GDS Connector Mesh",
  //       deliverablesSummary: "Redis edge caching layer caching hundreds of thousands of flight and hotel routes with sub-120ms response times and zero rate-limit drops.",
  //       badge: "Edge Travel Engine",
  //     },
  //     {
  //       serviceTitle: "Mobile App Development",
  //       serviceHref: "/technology-solution/mobile-applications",
  //       role: "Interactive 3D Destination Map & Offline Trail App",
  //       deliverablesSummary: "Progressive mobile app with Mapbox GL 3D topographic terrain elevation, offline GPS wayfinding, and digital RFID boarding passes.",
  //       badge: "Spatial Guide",
  //     },
  //     {
  //       serviceTitle: "Search Dominance & Technical SEO",
  //       serviceHref: "/digital-marketing/technical-seo-dominance",
  //       role: "Programmatic Destination & Route SEO Dominance",
  //       deliverablesSummary: "Automated generation of thousands of indexable, high-ranking travel route and city attraction pages with dynamic pricing schema.",
  //       badge: "Travel SEO",
  //     },
  //   ],
  //   process: [
  //     {
  //       step: "01",
  //       title: "GDS API Benchmark & Fare Cache Architecture Audit",
  //       duration: "Weeks 1 - 2",
  //       description: "We audit your third-party inventory feeds (Amadeus, Sabre, Hotelbeds), rate limitations, and booking transaction drop-off points.",
  //       keyOutputs: ["GDS API Architecture Map", "Distributed Cache Topology", "Travel UX Wireframes"],
  //     },
  //     {
  //       step: "02",
  //       title: "Sub-120ms Search Engine & AI Itinerary Prototype",
  //       duration: "Weeks 3 - 5",
  //       description: "We deploy Redis edge memory clusters to pre-warm fare searches, combined with generative itinerary planning algorithms balancing travel styles.",
  //       keyOutputs: ["Sub-120ms Fare Search Engine", "AI Trip Builder Prototype", "3D Topographic Terrain View"],
  //     },
  //     {
  //       step: "03",
  //       title: "Multi-Currency Checkout & Group Split-Payment Integration",
  //       duration: "Weeks 6 - 9",
  //       description: "Integration with Stripe, Klarna, and local Asian e-wallets (Alipay, WeChat Pay) with automated Forex hedging and split-payment checkout.",
  //       keyOutputs: ["Multi-Currency Checkout Funnel", "Split-Payment Group Booking", "Automated Booking Confirmation Email/SMS"],
  //     },
  //     {
  //       step: "04",
  //       title: "Global CDN Stress Testing & Airport/PWA Rollout",
  //       duration: "Weeks 10 - 12",
  //       description: "Simulating millions of monthly searches across multi-region CDNs, progressive offline app testing, and production launch.",
  //       keyOutputs: ["1.8M Monthly Search Load Audit", "Offline PWA Mobile App", "Full Repository Ownership Transfer"],
  //     },
  //   ],
  //   pillars: [
  //     {
  //       title: "Sub-Second Fare Search Engine",
  //       desc: "Optimized flight and hotel availability search caching hundreds of thousands of routes with sub-120ms response times.",
  //       icon: "Compass",
  //     },
  //     {
  //       title: "AI Itinerary Choreography",
  //       desc: "Personalized trip generator balancing budget, travel style, transit duration, and seasonal weather trends.",
  //       icon: "Sparkles",
  //     },
  //     {
  //       title: "Multi-Currency Dynamic Checkout",
  //       desc: "Local payment methods (Alipay, WeChat Pay, Klarna, Apple Pay) with automated currency conversion hedging.",
  //       icon: "Landmark",
  //     },
  //   ],
  //   works: [
  //     {
  //       id: "nomadiq-platform",
  //       title: "NomadIQ // AI Intelligent Travel Choreographer",
  //       client: "Nomad Global Expeditions",
  //       category: "AI Travel Marketplace",
  //       image: "/images/industries/work_travel_1.jpg",
  //       highlightMetric: "1.8M Monthly Queries",
  //       desc: "Next-generation travel planning platform combining generative AI destination recommendations with real-time flight and hotel GDS booking APIs.",
  //       techStack: ["Next.js 15", "Amadeus API", "PyTorch AI", "Redis Cache", "PostgreSQL"],
  //       deliverables: [
  //         "Sub-150ms GDS flight and hotel availability search cache",
  //         "Personalized multi-day trip builder with exportable calendar sync",
  //         "Instantaneous split-payment checkout for group travel",
  //       ],
  //       year: "2026",
  //     },
  //     {
  //       id: "wanderlust-360",
  //       title: "Wanderlust 360 // Spatial Destination Discovery",
  //       client: "Swiss Alps Tourism Board",
  //       category: "Destination Discovery & Booking",
  //       image: "/images/industries/work_travel_2.jpg",
  //       highlightMetric: "4.8x Mobile Bookings",
  //       desc: "Interactive 3D alpine topographic map enabling skiers and hikers to explore trail difficulty, preview mountain huts, and purchase lift passes online.",
  //       techStack: ["Three.js", "WebGL2", "React 19", "Mapbox GL", "TailwindCSS"],
  //       deliverables: [
  //         "Interactive 3D mountain elevation model with live weather overlays",
  //         "Automated RFID lift-pass digital wallet delivery",
  //         "Mobile-optimized progressive offline trail maps",
  //       ],
  //       year: "2026",
  //     },
  //   ],
  //   caseStudy: {
  //     title: "Modernizing Legacy Travel Portal to Reduce Search Latency by 65%",
  //     client: "Nomad Global Expeditions",
  //     period: "12 Weeks Deployment",
  //     overview: "Nomad Global suffered from slow 4-second search times on their legacy monolithic search engine, causing mobile travelers to bounce to major aggregators.",
  //     challenge: "Querying multiple Global Distribution Systems (GDS) created severe API latency and frequent rate-limiting errors.",
  //     solution: "We designed a distributed edge caching layer using Redis and Kafka, reducing search response times to under 120ms and tripling mobile conversions.",
  //     metrics: [
  //       { label: "Search Latency", value: "115ms", change: "-65% Faster" },
  //       { label: "Mobile Booking Rate", value: "6.4%", change: "+280% Lift" },
  //       { label: "Cart Abandonment", value: "18.2%", change: "-42% Drop" },
  //     ],
  //     quote: {
  //       text: "The new search engine engineered by RnD Technosoft feels instantaneous. Our mobile bookings increased threefold within our first month of launch.",
  //       author: "Julian Thorne",
  //       role: "Chief Technology Officer, Nomad Global",
  //     },
  //   },
  //   faqs: [
  //     {
  //       question: "Can your travel platform integrate with major GDS systems like Amadeus and Sabre?",
  //       answer: "Yes, we have deep integration experience with Amadeus, Sabre, Travelport, and direct hotel channel managers via modern REST and SOAP APIs.",
  //     },
  //     {
  //       question: "How do you handle currency fluctuations and international tax compliance?",
  //       answer: "Our checkout systems connect to real-time Forex feeds with automated margin buffers and automated VAT/GST compliance rules based on customer billing location.",
  //     },
  //   ],
  // },
  // {
  //   slug: "finance-fintech",
  //   number: "10",
  //   title: "Finance & FinTech",
  //   category: "Financial Innovation & Digital Trust",
  //   badge: "VERTICAL 10 // FINANCIAL INNOVATION",
  //   tagline: "Engineering smarter digital experiences for financial businesses.",
  //   shortInfo: "We support financial service providers and fintech businesses with customized software, modern web applications, intuitive user interfaces, digital branding and strategic marketing solutions designed around their business requirements.",
  //   heroMetrics: [
  //     { label: "Financial Platforms", value: "Digital Accessibility" },
  //     { label: "User Experience", value: "Simplified Interaction" },
  //     { label: "Brand Trust", value: "Stronger Positioning" },
  //   ],
  //   challenges: [
  //     {
  //       title: "Complex Regulatory Compliance & Data Security",
  //       description: "Financial services must navigate strict compliance standards (PCI-DSS, KYC/AML, GDPR) while delivering seamless user onboarding without drop-offs.",
  //       impactMetric: "Zero Compliance Vulnerability",
  //     },
  //     {
  //       title: "Legacy Infrastructure & High Friction Portals",
  //       description: "Outdated banking portals and disconnected back-office workflows create slow transaction speeds and frustrate mobile-first users.",
  //       impactMetric: "Instant Transaction Speed",
  //     },
  //     {
  //       title: "Building Digital Credibility & Investor Trust",
  //       description: "In an industry driven by financial security, generic web experiences fail to establish the institutional authority needed to win high-value accounts.",
  //       impactMetric: "Higher Conversion Trust",
  //     },
  //     {
  //       title: "High Customer Acquisition Costs (CAC)",
  //       description: "High competition across financial search terms makes paid acquisition costly without an authoritative organic presence and conversion-optimized funnels.",
  //       impactMetric: "Lower Customer CAC",
  //     },
  //   ],
  //   serviceCombinations: [
  //     {
  //       serviceTitle: "Technology Solutions",
  //       serviceHref: "/technology-solution/web-development",
  //       role: "FINANCIAL PLATFORMS & PORTALS",
  //       deliverablesSummary: "Custom web applications, secure client portals, automated KYC workflows, API integrations, and robust financial software architecture built to bank-grade security standards.",
  //       badge: "01 // TECHNOLOGY SOLUTIONS",
  //     },
  //     {
  //       serviceTitle: "Digital Marketing",
  //       serviceHref: "/digital-marketing/technical-seo-dominance",
  //       role: "FINANCIAL SEARCH AUTHORITY & LEAD GENERATION",
  //       deliverablesSummary: "Targeted B2B and consumer acquisition campaigns, technical financial SEO, institutional thought leadership, and compliance-ready paid advertising.",
  //       badge: "02 // DIGITAL MARKETING",
  //     },
  //     {
  //       serviceTitle: "Branding & Design",
  //       serviceHref: "/branding-design/corporate-identity",
  //       role: "INSTITUTIONAL BRAND IDENTITY & UI/UX",
  //       deliverablesSummary: "High-trust visual identities, data-dense financial dashboards, interactive design tokens, pitch decks, and intuitive customer interfaces.",
  //       badge: "03 // BRANDING & DESIGN",
  //     },
  //     {
  //       serviceTitle: "Media Production",
  //       serviceHref: "/media-production/commercial-video-production",
  //       role: "FINANCIAL EXPLAINER & COMMERCIAL MEDIA",
  //       deliverablesSummary: "Clear product demo walkthroughs, founder interview videos, fintech explainer animations, and high-production brand films that simplify complex financial offerings.",
  //       badge: "04 // MEDIA PRODUCTION",
  //     },
  //   ],
  //   process: [
  //     {
  //       step: "01",
  //       title: "COMPLIANCE & ARCHITECTURE DISCOVERY",
  //       duration: "WEEK 1 - 2",
  //       description: "We audit regulatory requirements, data security frameworks, target user personas, and technical architecture integration points.",
  //       keyOutputs: ["Compliance audit", "Architecture blueprint", "Security matrix", "Scope roadmap"],
  //     },
  //     {
  //       step: "02",
  //       title: "STRATEGY & SYSTEM PROTOTYPING",
  //       duration: "WEEK 3 - 5",
  //       description: "We design frictionless financial user journeys, interactive dashboards, and design systems optimized for trust and clarity.",
  //       keyOutputs: ["Figma design system", "Interactive prototypes", "Design tokens", "User testing validation"],
  //     },
  //     {
  //       step: "03",
  //       title: "SECURE ENGINEERING & API INTEGRATIONS",
  //       duration: "WEEK 6 - 10",
  //       description: "We build modern frontend applications with encrypted APIs, automated testing pipelines, and enterprise-grade performance.",
  //       keyOutputs: ["Type-safe codebase", "Bank-grade encryption", "API middleware", "Automated QA suite"],
  //     },
  //     {
  //       step: "04",
  //       title: "SECURITY AUDIT & PRODUCTION LAUNCH",
  //       duration: "WEEK 11 - 12",
  //       description: "Rigorous penetration testing, load testing under peak concurrency, compliance verification, and seamless deployment.",
  //       keyOutputs: ["Pen-test report", "Production release", "Disaster recovery plan", "Post-launch analytics"],
  //     },
  //   ],
  //   pillars: [
  //     {
  //       title: "Bank-Grade Security",
  //       desc: "End-to-end encrypted communication, multi-factor authentication, and strict compliance-ready data handling.",
  //       icon: "Shield",
  //     },
  //     {
  //       title: "Frictionless Onboarding",
  //       desc: "Streamlined registration, automated verification, and intuitive user experiences that maximize conversion.",
  //       icon: "Cpu",
  //     },
  //     {
  //       title: "Real-Time Telemetry & Reporting",
  //       desc: "Live portfolio analytics, transparent reporting dashboards, and instant transaction notifications.",
  //       icon: "FileCheck",
  //     },
  //   ],
  //   works: [
  //     {
  //       id: "fintech-portal-work",
  //       title: "Apex Finance // Enterprise Institutional Portal",
  //       client: "Apex Global Capital",
  //       category: "FinTech Platform & Portal",
  //       image: "/images/project_fintech.jpg",
  //       highlightMetric: "Sub-Second Latency",
  //       desc: "An enterprise financial management platform integrating live portfolio tracking, automated reporting, and secure multi-tier client portals.",
  //       techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Encrypted REST APIs"],
  //       deliverables: ["Web Application", "Client Portal", "Brand Identity", "Design System"],
  //       year: "2026",
  //     },
  //     {
  //       id: "fintech-app-work",
  //       title: "NovaPay // Modern Digital Payments Hub",
  //       client: "NovaPay Technologies",
  //       category: "Digital Payments",
  //       image: "/images/project_it_fintech.jpg",
  //       highlightMetric: "99.999% SLA Uptime",
  //       desc: "Scalable digital payment gateway with real-time analytics, instant payout settlement, and conversion-optimized checkout.",
  //       techStack: ["React", "Node.js", "PostgreSQL", "Cloudflare"],
  //       deliverables: ["Merchant Dashboard", "Checkout SDK", "Documentation Hub"],
  //       year: "2026",
  //     },
  //   ],
  //   caseStudy: {
  //     title: "How Apex Global Modernized Institutional Client Portals",
  //     client: "Apex Global Capital",
  //     period: "12-Week Transformation",
  //     overview: "Apex Global needed to modernize its legacy client onboarding and wealth management reporting tools to win modern institutional accounts.",
  //     challenge: "Legacy portal required manual paperwork, took days to process new accounts, and suffered from poor mobile compatibility.",
  //     solution: "RnD Technosoft engineered a modern responsive web portal with real-time portfolio dashboards, automated verification, and bank-grade encryption.",
  //     metrics: [
  //       { label: "Account Onboarding", value: "< 10 Mins", change: "85% Faster" },
  //       { label: "Client Engagement", value: "+ 210%", change: "3.1x Lift" },
  //       { label: "Operational Overhead", value: "- 40%", change: "Significant Savings" },
  //     ],
  //     quote: {
  //       text: "RnD Technosoft delivered an institutional platform that exceeded our strictest compliance and performance expectations. Our clients love the new portal.",
  //       author: "Devon Vance",
  //       role: "Managing Director, Apex Global Capital",
  //     },
  //   },
  //   faqs: [
  //     {
  //       question: "How do you ensure data security and regulatory compliance?",
  //       answer: "We build systems following industry standards including data encryption in transit and at rest, role-based access control (RBAC), and compliance-ready audit trails.",
  //     },
  //     {
  //       question: "Can your solutions integrate with legacy banking and accounting software?",
  //       answer: "Yes, we build robust API middleware and secure connectors to interface seamlessly with modern and legacy financial databases, ERPs, and third-party gateways.",
  //     },
  //     {
  //       question: "Do you build both web applications and marketing websites for financial firms?",
  //       answer: "Yes, we provide end-to-end capabilities spanning institutional brand identity, high-converting marketing websites, customer acquisition, and secure web application portals.",
  //     },
  //   ],
  // },
];

