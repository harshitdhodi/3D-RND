export interface CategorySubItem {
  index: string;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  sla: string;
  badge?: string;
  href: string;
  image: string;
  featured?: boolean;
}

export interface CategoryStat {
  val: string;
  label: string;
  sub: string;
}

export interface CategoryFaq {
  q: string;
  a: string;
}

export interface CategoryPageData {
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  breadcrumb: string;
  divisionLabel: string;
  divisionNumber: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  supportingLine?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats: CategoryStat[];
  subcategories: CategorySubItem[];
  disciplineHeading: string;
  disciplineDesc: string;
  faqs: CategoryFaq[];
  iconName: "Code" | "TrendingUp" | "Palette" | "Video";
}

export const categoryPagesData: Record<string, CategoryPageData> = {
  "technology-solution": {
    slug: "technology-solution",
    metaTitle: "Technology Solutions & Software Development Company | RND Technosoft",
    metaDescription:
      "Looking for technology solutions for your business? RND Technosoft offers website development, web applications, custom software and e-commerce development.",
    bannerTitle: "TECHNOLOGY",
    bannerSubtitle: "DIVISION",
    bannerImage: "/banner/technology.png",
    breadcrumb: "Technology Solutions",
    divisionLabel: "TECHNOLOGY DIVISION // SERVICE ARCHITECTURE",
    divisionNumber: "01",
    iconName: "Code",
    heroTitle: "TECHNOLOGY THAT BUILDS",
    heroHighlight: "WHAT'S NEXT.",
    heroDesc:
      "From high-performance websites and intelligent applications to enterprise software and scalable e-commerce platforms, we transform business requirements into powerful digital solutions. Explore the technologies we use to build, connect and accelerate your digital ecosystem.",
    supportingLine: "WEBSITE DEVELOPMENT • WEB APPLICATIONS • CUSTOM SOFTWARE • E-COMMERCE",
    primaryCtaLabel: "EXPLORE OUR SOLUTIONS ↗",
    primaryCtaHref: "#disciplines",
    secondaryCtaLabel: "LET'S DISCUSS YOUR PROJECT ↗",
    secondaryCtaHref: "/contact-us?intent=technology",
    stats: [
      { val: "99.99%", label: "Production SLA", sub: "Multi-region edge failover" },
      { val: "<380ms", label: "Global Edge TTFB", sub: "Sub-second render speeds" },
      { val: "150+", label: "Enterprise Deployments", sub: "Across 18 global industries" },
      { val: "100%", label: "Source IP Ownership", sub: "Full code repository ownership" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "We combine thoughtful engineering, modern technologies and business-focused strategy to build digital platforms that work seamlessly today and adapt to tomorrow.",
    subcategories: [
      {
        index: "01 // WEB DEVELOPMENT",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        tagline: "Your digital presence. Engineered for performance.",
        desc: "We create professional, responsive and SEO-friendly websites tailored to your business goals. From corporate websites and business portals to custom website design and development, we build digital experiences that engage visitors and turn opportunities into growth.",
        sla: "01 // WEB",
        badge: "RESPONSIVE WEB",
        tags: ["#WebsiteDevelopment", "#ResponsiveWebsites", "#BusinessWebsites", "#SEOFriendlyWebsites"],
        href: "/technology-solution/web-development",
        image: "/images/service_webdev.jpg",
        featured: true,
      },
      {
        index: "03 // MOBILE APPLICATIONS",
        title: "MOBILE APP DEVELOPMENT",
        tagline: "Your business. Built for every screen.",
        desc: "We build feature-rich Android, iOS and cross-platform mobile applications that bring your ideas closer to your customers. From startup applications to enterprise mobility solutions, we create intuitive mobile experiences designed for real-world use.",
        sla: "03 // MOBILE",
        badge: "CROSS-PLATFORM",
        tags: ["#MobileAppDevelopment", "#AndroidAppDevelopment", "#iOSAppDevelopment", "#FlutterDevelopment"],
        href: "/technology-solution/mobile-applications",
        image: "/images/service_webdev.jpg",
      },
      {
        index: "04 // SOFTWARE ENGINEERING",
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        tagline: "Beyond off-the-shelf. Built around your business.",
        desc: "We engineer custom software solutions that address your unique operational challenges. From specialised business applications to complex enterprise software, we build flexible systems that streamline processes and support long-term business growth.",
        sla: "04 // SOFTWARE",
        badge: "ENTERPRISE SAAS",
        tags: ["#CustomSoftwareDevelopment", "#EnterpriseSoftware", "#BusinessSoftware", "#SoftwareSolutions"],
        href: "/technology-solution/enterprise-software-solutions",
        image: "/images/nebula_cloud_os_3d.jpg",
      },
      {
        index: "07 // ONLINE COMMERCE",
        title: "E-COMMERCE WEBSITE DEVELOPMENT",
        tagline: "Turn digital storefronts into growth engines.",
        desc: "We create e-commerce websites that make online shopping simple, engaging and secure. From product catalogues and shopping cart integration to payment gateways and order management, we build online stores designed to deliver seamless shopping experiences.",
        sla: "07 // E-COMMERCE",
        badge: "GROWTH ENGINES",
        tags: ["#EcommerceWebsiteDevelopment", "#OnlineStoreDevelopment", "#EcommerceWebDesign", "#PaymentIntegration"],
        href: "/technology-solution/ecommerce-platform-engineering",
        image: "/images/service_ecommerce_color.jpg",
      },
    ],
    faqs: [
      {
        q: "What technology solutions does RND Technosoft offer?",
        a: "RND Technosoft offers comprehensive technology solutions, including custom website development, web and mobile application development, custom software development, ERP and CRM systems, SaaS platforms, e-commerce development and website maintenance. We create scalable digital solutions tailored to your business requirements.",
      },
      {
        q: "Do you provide custom website design and development services?",
        a: "Yes. We develop responsive, SEO-friendly and user-focused websites, including corporate websites, business portals, custom websites and e-commerce platforms. Our websites are designed to deliver seamless user experiences, strong performance and long-term scalability.",
      },
      {
        q: "Can you develop custom web and mobile applications for businesses?",
        a: "Yes. We build custom web applications and mobile apps for Android and iOS platforms. From customer-facing applications to internal business management systems, we develop solutions that simplify processes, improve accessibility and support business growth.",
      },
      {
        q: "What is custom software development, and how can it benefit my business?",
        a: "Custom software development involves creating applications specifically designed around your business operations and requirements. It helps automate workflows, improve operational efficiency, reduce manual processes and provide greater control over your business systems.",
      },
      {
        q: "Do you offer ERP and CRM software development?",
        a: "Yes. We provide customised ERP and CRM development solutions to help businesses manage operations, customer relationships, sales activities, business data and internal workflows through integrated digital systems.",
      },
      {
        q: "Can RND Technosoft develop SaaS and cloud-based applications?",
        a: "Yes. We develop SaaS products and cloud-based applications designed for accessibility, flexibility and scalability. Whether you are building a subscription-based platform or a cloud-powered business application, we help turn your concept into a functional digital product.",
      },
      {
        q: "Do you develop e-commerce websites with payment gateway integration?",
        a: "Yes. We develop customised e-commerce websites with product catalogues, shopping carts, secure payment gateway integration, order management and responsive shopping experiences to help businesses establish and grow their online presence.",
      },
      {
        q: "Which technologies and frameworks do you use for development?",
        a: "Our technology ecosystem includes React.js, Next.js, Node.js, PHP, Laravel, Python, Flutter, TypeScript, MongoDB, PostgreSQL and Docker. We select the appropriate technologies based on project requirements, performance objectives and scalability needs.",
      },
      {
        q: "Can you upgrade, maintain or improve an existing website or software application?",
        a: "Yes. We provide website maintenance, software upgrades, performance optimisation, security updates, troubleshooting and ongoing technical support. We also help businesses modernise existing digital platforms to meet changing operational requirements.",
      },
      {
        q: "How do I get started with a technology development project at RND Technosoft?",
        a: "Getting started is simple. Contact our team and share your project requirements, business objectives and expected timelines. We will assess your needs, recommend an appropriate technology approach and provide a project proposal with the suggested scope and next steps.",
      },
    ],
  },

  "digital-marketing": {
    slug: "digital-marketing",
    metaTitle: "Digital Marketing Agency in Vapi | SEO, Social Media & PPC – RND Technosoft",
    metaDescription:
      "Looking for digital marketing services in Vapi? RND Technosoft offers SEO, social media marketing, Google Ads, PPC and content marketing to help businesses grow online.",
    bannerTitle: "DIGITAL",
    bannerSubtitle: "MARKETING",
    bannerImage: "/banner/digital-marketing.png",
    breadcrumb: "Digital Marketing",
    divisionLabel: "↗ // ACTIVE DIVISION // DIGITAL MARKETING",
    divisionNumber: "02",
    iconName: "TrendingUp",
    heroTitle: "VISIBILITY THAT MATTERS.",
    heroHighlight: "GROWTH THAT COUNTS.",
    heroDesc:
      "We help businesses build a stronger digital presence, attract the right audiences and turn online visibility into meaningful business opportunities. As a digital marketing agency in Vapi, RND Technosoft combines data-driven strategies, creative storytelling and performance-focused campaigns to help brands grow, connect and compete in the digital world.",
    supportingLine: "SEO • SOCIAL MEDIA • PAID ADVERTISING • CONTENT MARKETING",
    primaryCtaLabel: "EXPLORE OUR SERVICES →",
    primaryCtaHref: "#disciplines",
    secondaryCtaLabel: "PLAN YOUR GROWTH ↗",
    secondaryCtaHref: "/contact-us?intent=marketing",
    stats: [
      { val: "+180%", label: "Avg Traffic Surge", sub: "90-day programmatic SEO" },
      { val: "8.4x", label: "Avg ROAS", sub: "Across all paid channels" },
      { val: "94%+", label: "Attribution Accuracy", sub: "Server-side CAPI tracking" },
      { val: "60 Days", label: "First Results", sub: "Measurable SERP movement" },
    ],
    disciplineHeading: "SELECT A SPECIALIZED DISCIPLINE",
    disciplineDesc:
      "We bring strategy, creativity and data together to build stronger digital brands, reaching the right people at the right time.",
    subcategories: [
      {
        index: "01 // ORGANIC VISIBILITY",
        title: "SEARCH ENGINE OPTIMISATION (SEO)",
        tagline: "Get discovered. Earn attention. Build authority.",
        desc: "Our SEO services help businesses improve their search engine visibility and attract relevant organic traffic. Through keyword research, technical SEO, on-page optimisation, content strategy and link-building initiatives, we help your website become easier to discover by potential customers.",
        tags: ["#SEOServices", "#TechnicalSEO", "#OnPageSEO", "#OrganicGrowth", "#AISearchOptimisation"],
        sla: "01 // ORGANIC",
        badge: "ORGANIC GROWTH",
        href: "/digital-marketing/technical-seo-dominance",
        image: "/images/service_seo_color.jpg",
        featured: true,
      },
      {
        index: "02 // SOCIAL ENGAGEMENT",
        title: "SOCIAL MEDIA MARKETING",
        tagline: "Turn followers into a community.",
        desc: "We build social media strategies that help brands connect, communicate and grow. From content planning and creative design to platform management, audience engagement and performance tracking, our social media marketing services help your brand stay relevant and recognisable.",
        tags: ["#SocialMediaMarketing", "#SocialMediaManagement", "#InstagramMarketing", "#LinkedInMarketing", "#BrandEngagement"],
        sla: "02 // SOCIAL",
        badge: "COMMUNITY ENGAGEMENT",
        href: "/digital-marketing/social-media-management",
        image: "/images/service_marketing.jpg",
      },
      {
        index: "03 // PERFORMANCE MARKETING",
        title: "PAID ADVERTISING & PPC",
        tagline: "Put your brand in front of the right audience.",
        desc: "Make every advertising opportunity count with strategically planned paid campaigns. We help businesses reach potential customers through Google Ads, Meta advertising and PPC campaign management, with a focus on audience targeting, campaign optimisation and measurable performance.",
        tags: ["#PPCServices", "#GoogleAds", "#MetaAds", "#PaidAdvertising", "#PerformanceMarketing"],
        sla: "03 // PAID",
        badge: "PERFORMANCE ADS",
        href: "/digital-marketing/performance-ppc-advertising",
        image: "/images/service_social.jpg",
      },
      {
        index: "04 // CREATIVE COMMUNICATION",
        title: "CONTENT MARKETING",
        tagline: "Create stories that make people stop and connect.",
        desc: "Great marketing starts with meaningful content. We develop creative content strategies, compelling copy, branded visuals and engaging digital campaigns that communicate your brand's value, strengthen audience relationships and support your marketing objectives.",
        tags: ["#ContentMarketing", "#CreativeContent", "#BrandStorytelling", "#DigitalContent", "#ContentStrategy"],
        sla: "04 // CONTENT",
        badge: "CONTENT & STRATEGY",
        href: "/digital-marketing/content-strategy-production",
        image: "/images/contet.png",
      },
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term growth strategy, and results depend on your website's current condition, competition, industry and keyword difficulty. Initial improvements may become visible within a few months, while stronger organic rankings and consistent traffic growth generally require sustained optimisation. At RND Technosoft, we focus on building long-term search visibility through technical SEO, keyword optimisation, quality content and strategic improvements.",
      },
      {
        q: "What results can I expect from Google Ads and PPC campaigns?",
        a: "Results from paid advertising depend on your industry, target audience, campaign budget, competition, landing page experience and conversion strategy. We focus on reaching relevant audiences, optimising ad campaigns and improving conversion opportunities. Our approach is driven by campaign data, continuous testing and performance analysis rather than unrealistic guarantees.",
      },
      {
        q: "Which social media platforms can you manage for my business?",
        a: "We help businesses build their social media presence across relevant platforms such as Instagram, Facebook, LinkedIn and other suitable channels. The right platform mix depends on your target audience, industry and marketing objectives. Our services can include content planning, creative development, account management, audience engagement and paid social campaigns.",
      },
      {
        q: "How do you measure digital marketing performance and conversions?",
        a: "We use analytics and tracking tools such as Google Analytics 4, Google Tag Manager and Google Search Console, along with advertising platform insights, wherever applicable. We monitor relevant metrics such as website traffic, engagement, leads, conversions and campaign performance to understand what's working and identify opportunities for improvement.",
      },
      {
        q: "Can I start with one digital marketing service and expand later?",
        a: "Absolutely! You can begin with an individual service such as SEO, social media marketing, paid advertising or content marketing. As your business grows, we can explore additional services and build an integrated digital marketing strategy around your evolving goals and requirements.",
      },
    ],
  },

  "branding-design": {
    slug: "branding-design",
    metaTitle: "Branding & Design Services | Brand Identity & Graphic Design – RND Technosoft",
    metaDescription:
      "Build a memorable brand with RND Technosoft. Explore brand identity design, logo design, graphic design, brand strategy and marketing collateral services.",
    bannerTitle: "BRANDING",
    bannerSubtitle: "& DESIGN",
    bannerImage: "/banner/branding-design.png",
    breadcrumb: "Branding & Design",
    divisionLabel: "✧ DIVISION 03 // BRAND IDENTITY & CREATIVE DESIGN",
    divisionNumber: "03",
    iconName: "Palette",
    heroTitle: "BUILT TO BE RECOGNISED.",
    heroHighlight: "DESIGNED TO BE REMEMBERED.",
    heroDesc:
      "We create distinctive brand identities and compelling visual experiences that help businesses stand out. From brand strategy and logo design to graphic design and marketing collateral, RND Technosoft transforms ideas into consistent, memorable brand experiences that connect with your audience and strengthen your market presence.",
    supportingLine: "BRAND STRATEGY • LOGO DESIGN • GRAPHIC DESIGN • MARKETING COLLATERAL",
    primaryCtaLabel: "EXPLORE OUR CREATIVE SERVICES →",
    primaryCtaHref: "#disciplines",
    stats: [
      { val: "100%", label: "IP Ownership", sub: "Full source file transfer" },
      { val: "5.8x", label: "Brand Recall Lift", sub: "vs generic templated design" },
      { val: "30%", label: "Faster Shipping", sub: "With mature design systems" },
      { val: "4–6 Wks", label: "Brand Identity", sub: "From brief to final files" },
    ],
    disciplineHeading: "SELECT A DESIGN DISCIPLINE",
    disciplineDesc:
      "From brand strategy and logo design to graphic design and marketing collateral, every creative service is built to make your brand consistent, recognisable and memorable.",
    subcategories: [
      {
        index: "01 // BRAND FOUNDATION",
        title: "BRAND STRATEGY & DEVELOPMENT",
        tagline: "Build a brand with direction and purpose.",
        desc: "We help businesses define their brand positioning, personality, messaging and visual direction. Through strategic brand development, we create a foundation that communicates your values, differentiates your business and connects with the right audience.",
        tags: ["#BrandStrategy", "#BrandPositioning", "#BrandDevelopment", "#BrandBuilding"],
        sla: "01 // BRAND",
        badge: "BRAND STRATEGY",
        href: "/branding-design/brand-identity-systems",
        image: "/images/service_branding.jpg",
        featured: true,
      },
      {
        index: "02 // VISUAL IDENTITY",
        title: "LOGO & BRAND IDENTITY DESIGN",
        tagline: "Make your first impression unforgettable.",
        desc: "We create distinctive logos and cohesive visual identity systems that represent your brand's personality. From colour palettes and typography to brand guidelines and visual elements, every detail works together to build recognition and consistency.",
        tags: ["#LogoDesign", "#BrandIdentityDesign", "#VisualIdentity", "#CorporateBranding"],
        sla: "02 // IDENTITY",
        badge: "VISUAL IDENTITY",
        href: "/branding-design/brand-identity-systems",
        image: "/images/project_lumen_sal.jpg",
      },
      {
        index: "03 // CREATIVE DESIGN",
        title: "GRAPHIC DESIGN SERVICES",
        tagline: "Turn communication into visual experiences.",
        desc: "Our graphic design services transform ideas and messages into compelling visual content. We design creative assets for digital platforms, advertising campaigns and business communication, helping brands maintain a distinctive and professional visual presence.",
        tags: ["#GraphicDesign", "#CreativeDesign", "#DigitalDesign", "#MarketingDesign"],
        sla: "03 // DESIGN",
        badge: "GRAPHIC DESIGN",
        href: "/branding-design/ui-ux-spatial-design",
        image: "/images/service_spatial_color.jpg",
      },
      {
        index: "04 // BRAND COMMUNICATION",
        title: "MARKETING COLLATERAL DESIGN",
        tagline: "Every brand touchpoint tells a story.",
        desc: "From company profiles and brochures to business cards, catalogues, flyers and promotional materials, we create professional marketing collateral that communicates your brand consistently across print and digital platforms.",
        tags: ["#MarketingCollateral", "#BrochureDesign", "#BusinessCardDesign", "#CompanyProfileDesign"],
        sla: "04 // COLLATERAL",
        badge: "COLLATERAL",
        href: "/branding-design/brand-identity-systems",
        image: "/images/service_branding.jpg",
      },
    ],
    faqs: [
      {
        q: "How long does a complete brand identity project take?",
        a: "The timeline depends on the scope and complexity of your project. A logo design may take less time than a complete brand identity involving strategy, visual guidelines and marketing assets. We follow a structured creative process involving discovery, concept development, design refinement and final delivery to ensure every element reflects your brand's vision.",
      },
      {
        q: "Will I receive ownership of my logo and all final design files?",
        a: "Yes. Upon completion of the agreed project and payment terms, we provide the final approved design assets and applicable source files as outlined in your project agreement. This allows you to use your brand identity across digital platforms, print materials and other business communications.",
      },
      {
        q: "Can you redesign our existing logo or refresh our current brand identity?",
        a: "Absolutely! Whether you need a complete rebranding or a refined update to your existing visual identity, we can help. We evaluate your current brand elements, understand your business positioning and create a refreshed visual direction that maintains brand recognition while giving your business a more contemporary identity.",
      },
      {
        q: "What is included in your branding and graphic design services?",
        a: "Our branding and design services can include brand strategy, logo design, visual identity development, colour palettes, typography, brand guidelines, graphic design and marketing collateral such as brochures, business cards, company profiles and promotional materials. The exact deliverables depend on your selected requirements and project scope.",
      },
      {
        q: "Do you provide ongoing graphic design and brand management support?",
        a: "Yes. We can support your ongoing creative requirements through design updates, marketing collateral, campaign creatives and other visual communication needs. Our goal is to help maintain consistency across your brand's digital and offline touchpoints as your business evolves.",
      },
    ],
  },

  "media-production": {
    slug: "media-production",
    metaTitle: "Media Production Services | Videography, Photography & Video Editing – RND Technosoft",
    metaDescription:
      "Professional media production services by RND Technosoft. Explore videography, photography, video editing, post-production and creative media production.",
    bannerTitle: "MEDIA",
    bannerSubtitle: "PRODUCTION",
    bannerImage: "/banner/media-production.png",
    breadcrumb: "Media Production",
    divisionLabel: "✧ DIVISION 04 // VISUAL STORYTELLING & PRODUCTION",
    divisionNumber: "04",
    iconName: "Video",
    heroTitle: "EVERY FRAME TELLS A STORY.",
    heroHighlight: "EVERY STORY MAKES AN IMPACT.",
    heroDesc:
      "We turn ideas into powerful visual experiences that capture attention and bring brands to life. From professional photography and cinematic videography to creative editing and complete media production, RND Technosoft creates compelling content that communicates your message, connects with audiences and makes your brand memorable.",
    supportingLine: "VIDEOGRAPHY • PHOTOGRAPHY • VIDEO EDITING • CREATIVE PRODUCTION",
    primaryCtaLabel: "EXPLORE OUR PRODUCTIONS →",
    primaryCtaHref: "#disciplines",
    stats: [
      { val: "4K/8K", label: "Production Quality", sub: "Cinema-grade video output" },
      { val: "5.8x", label: "Brand Recall Lift", sub: "vs generic video content" },
      { val: "6–8 Wks", label: "Production Timeline", sub: "Brief to final delivery" },
      { val: "100%", label: "IP Transfer", sub: "All source files included" },
    ],
    disciplineHeading: "SELECT A PRODUCTION DISCIPLINE",
    disciplineDesc:
      "From cinematic videography and professional photography to video editing and creative media production, every service is built to make your brand visible, compelling and unforgettable.",
    subcategories: [
      {
        index: "01 // MOTION & STORYTELLING",
        title: "PROFESSIONAL VIDEOGRAPHY",
        tagline: "Bring your brand story into motion.",
        desc: "We produce engaging video content that captures your brand, products, services and experiences. From promotional videos and corporate films to brand storytelling and social media videos, we create visuals that communicate with purpose and leave a lasting impression.",
        tags: ["#Videography", "#CorporateVideo", "#PromotionalVideos", "#BrandFilms"],
        sla: "01 // VIDEO",
        badge: "BRAND FILMS",
        href: "/media-production/commercial-video-production",
        image: "/images/project_forest_film.jpg",
        featured: true,
      },
      {
        index: "02 // VISUAL COMPOSITION",
        title: "PROFESSIONAL PHOTOGRAPHY",
        tagline: "Capture details. Create impressions.",
        desc: "We create high-quality photographs that showcase your brand, products, people and experiences. From product photography and corporate portraits to lifestyle and commercial photography, every frame is crafted to communicate your brand's visual identity.",
        tags: ["#ProfessionalPhotography", "#ProductPhotography", "#CommercialPhotography", "#CorporatePhotography"],
        sla: "02 // PHOTO",
        badge: "COMMERCIAL PHOTO",
        href: "/media-production/commercial-video-production",
        image: "/images/showreel_thumb.jpg",
      },
      {
        index: "03 // POST-PRODUCTION",
        title: "VIDEO EDITING & POST-PRODUCTION",
        tagline: "Turn raw footage into refined experiences.",
        desc: "Great footage deserves great execution. We transform raw recordings into polished visual stories through professional video editing, colour correction, transitions, sound design, motion graphics and finishing touches that elevate the final production.",
        tags: ["#VideoEditing", "#PostProduction", "#ColorGrading", "#MotionGraphics"],
        sla: "03 // POST",
        badge: "POST-PRODUCTION",
        href: "/media-production/motion-graphics-3d-cgi",
        image: "/images/service_media.jpg",
      },
      {
        index: "04 // CREATIVE EXECUTION",
        title: "CREATIVE MEDIA PRODUCTION",
        tagline: "Ideas deserve more than ordinary execution.",
        desc: "From creative concepts and visual planning to campaign content and multimedia production, we bring ideas to life through purposeful creative execution. We develop engaging visual assets tailored to your brand identity, communication goals and digital platforms.",
        tags: ["#CreativeProduction", "#ContentProduction", "#BrandContent", "#VisualStorytelling"],
        sla: "04 // CREATIVE",
        badge: "CREATIVE MEDIA",
        href: "/media-production/dedicated-squads",
        image: "/images/agency_team_studio.jpg",
      },
    ],
    faqs: [
      {
        q: "What types of video content does RND Technosoft produce?",
        a: "We produce a wide range of video content including promotional videos, corporate films, brand storytelling videos, product showcase videos, social media reels and creative campaign content. Each production is planned and executed to reflect your brand identity and communication objectives.",
      },
      {
        q: "Do you handle the complete production process from concept to final delivery?",
        a: "Yes. We manage the complete production workflow including concept development, pre-production planning, filming or photography, post-production editing, colour correction, sound design and final delivery in the required formats. Our goal is to make the process straightforward and results-focused for every client.",
      },
      {
        q: "What is included in your video editing and post-production services?",
        a: "Our post-production services include professional video editing, colour grading, transitions, motion graphics, sound design, music integration and final export in formats suitable for digital platforms, social media and broadcast. We work with your raw footage to deliver a polished, audience-ready final product.",
      },
      {
        q: "Can you create content for social media platforms and digital campaigns?",
        a: "Absolutely. We create visual content specifically optimised for social media platforms including Instagram, Facebook, LinkedIn and YouTube, as well as digital advertising campaigns. Content is developed with your brand identity and communication goals in mind.",
      },
      {
        q: "How do I get started with a media production project?",
        a: "Getting started is simple. Share your project brief, communication goals and any reference material with our team. We will review your requirements, discuss the creative direction and provide a clear production plan. Contact us to begin the conversation.",
      },
    ],
  },
};

export const CATEGORY_SLUGS = Object.keys(categoryPagesData);
