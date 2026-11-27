const { MongoClient } = require('d:/Harshit/RND/3D-RND-Admin/node_modules/mongodb');
const uri = 'mongodb://3d-RND:Qwaszx%4012345@127.0.0.1:27017/3d-RND?authSource=3d-RND';

async function updateData() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('3d-RND');

  // 1. Update Headings for Services and Industries
  console.log('Updating Headings in MongoDB...');
  await db.collection('heading').updateOne(
    { section_name: 'services' },
    {
      $set: {
        badge: 'THE RND ECOSYSTEM // OUR EXPERTISE',
        title: 'IDEAS INTO IMPACT. STRATEGY INTO SOLUTIONS.',
        subtitle: 'FOUR PILLARS. ONE DIGITAL PARTNER.',
        tagline: 'From building powerful digital platforms to creating brands that stand out, RND Technosoft brings technology, marketing, design and media together to help businesses move forward.',
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  await db.collection('heading').updateOne(
    { section_name: 'industries' },
    {
      $set: {
        badge: '✧ INDUSTRIES WE EMPOWER // SOLUTIONS WITHOUT BOUNDARIES',
        title: 'INDUSTRIES WE SERVE. SOLUTIONS BUILT AROUND YOUR WORLD.',
        subtitle: "BUILT FOR EVERY INDUSTRY. ENGINEERED FOR WHAT'S NEXT.",
        tagline: 'Every industry has a different challenge. Every business has a different ambition. At RND Technosoft, we bring technology, digital marketing, branding and creative production together to build solutions that help businesses adapt, compete and grow.',
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 2. Update Industry Hero
  console.log('Updating Industry Hero in MongoDB...');
  await db.collection('industry_hero').updateOne(
    {},
    {
      $set: {
        tagline: '✧ INDUSTRIES WE EMPOWER // SOLUTIONS WITHOUT BOUNDARIES',
        heading: "BUILT FOR EVERY INDUSTRY. ENGINEERED FOR WHAT'S NEXT.",
        description: 'Every industry has a different challenge. Every business has a different ambition. At RND Technosoft, we bring technology, digital marketing, branding and creative production together to build solutions that help businesses adapt, compete and grow. From emerging startups to established enterprises, we turn industry-specific challenges into opportunities through innovation, strategic thinking and purposeful execution.',
        counter: [
          { counter_info: '2018\nEstablished\nBuilding digital solutions since 2018' },
          { counter_info: '04\nCore Divisions\nTechnology, Marketing, Design & Media' },
          { counter_info: '360°\nDigital Capabilities\nIntegrated services under one roof' },
          { counter_info: 'B2B\nBusiness Focus\nSolutions designed around business needs' }
        ],
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 3. Update Industry Consultation
  console.log('Updating Industry Consultation in MongoDB...');
  await db.collection('industry_consultation').updateOne(
    {},
    {
      $set: {
        tagline: "✧ LET'S BUILD SOMETHING MEANINGFUL",
        heading: 'YOUR INDUSTRY.\nOUR EXPERTISE.\nONE SHARED VISION.',
        description: 'Every business has a different challenge and a bigger ambition. Tell us where you want to go, and our team will help you identify the right digital, creative and technology solutions to get there.',
        benefits_title: 'WHY CONNECT WITH RND?',
        benefits: [
          { title: 'Solutions tailored to your business goals' },
          { title: 'Integrated technology and creative expertise' },
          { title: 'A collaborative approach from concept to execution' }
        ],
        form_title: 'Initiate Your Project Brief',
        form_description: 'Share a few details about your business and requirements. Our team will connect with you to discuss the next steps.',
        updated_at: new Date().toISOString()
      }
    },
    { upsert: true }
  );

  // 4. Update Services (4 pillars)
  console.log('Updating Services Collection...');
  const servicesData = [
    {
      number: '01',
      title: 'Technology Solutions',
      slug: 'technology-solutions',
      tagline: 'Websites • Applications • Software • E-commerce',
      badge: 'Build smarter. Scale without limits.',
      description: 'We engineer powerful digital experiences and intelligent software built around the way your business works. From responsive website development and custom web applications to mobile apps, enterprise software and eCommerce platforms, we turn complex requirements into seamless digital solutions.',
      scope_items: [
        'Website Development Services',
        'Web App Development Services',
        'Mobile App Development',
        'Custom Software Development',
        'Ecommerce Website Development'
      ],
      order: 1,
      is_featured_home: true
    },
    {
      number: '02',
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      tagline: 'SEO • Social Media • Paid Advertising • Content',
      badge: 'Get noticed. Get chosen. Grow faster.',
      description: 'We turn digital visibility into meaningful business opportunities. Through strategic SEO, social media marketing, performance-driven paid advertising and compelling content, we help brands reach the right audience, strengthen engagement and generate measurable growth.',
      scope_items: [
        'Digital Marketing Services',
        'SEO Services',
        'Social Media Marketing Services',
        'Performance Marketing Services',
        'Google Ads Services'
      ],
      order: 2,
      is_featured_home: true
    },
    {
      number: '03',
      title: 'Branding & Design',
      slug: 'branding-design',
      tagline: 'Brand Identity • Graphic Design • Marketing Collateral',
      badge: 'Make your brand impossible to overlook.',
      description: 'We transform business identities into memorable brand experiences. From distinctive brand identity design and creative graphic design to impactful marketing collateral, we create visual systems that communicate your value, build recognition and leave a lasting impression.',
      scope_items: [
        'Branding Services',
        'Brand Identity Design',
        'Graphic Design Services',
        'Logo Design Services'
      ],
      order: 3,
      is_featured_home: true
    },
    {
      number: '04',
      title: 'Media Production',
      slug: 'media-production',
      tagline: 'Videography • Photography • Editing • Creative Production',
      badge: 'Capture attention. Create experiences. Tell stories.',
      description: 'We bring ideas to life through compelling visual storytelling. From professional photography and cinematic videography to video editing and creative media production, we create engaging visual content that connects brands with audiences and makes every story count.',
      scope_items: [
        'Video Production Services',
        'Photography Services',
        'Media Production',
        'Product Photography Services'
      ],
      order: 4,
      is_featured_home: true
    }
  ];

  for (const s of servicesData) {
    await db.collection('services').updateOne(
      { slug: s.slug },
      { $set: { ...s, updated_at: new Date().toISOString() } },
      { upsert: true }
    );
  }

  // 5. Update Industries Collection (all 10 verticals from Google Doc)
  console.log('Updating Industries Collection (all 10 verticals)...');
  const industriesData = [
    {
      number: '01',
      title: 'Manufacturing & Industrial',
      slug: 'manufacturing',
      category: 'Smart Manufacturing & Digital Transformation',
      badge: 'VERTICAL 01 // INDUSTRIAL INNOVATION',
      tagline: 'FROM TRADITIONAL PRODUCTION FLOORS TO INTELLIGENT INDUSTRIAL ECOSYSTEMS.',
      short_info: 'We help manufacturing businesses modernize operations through custom software, enterprise applications, digital platforms and strategic brand communication.',
      description: 'We help manufacturing businesses modernize operations through custom software, enterprise applications, digital platforms and strategic brand communication. Our solutions support operational visibility, streamlined workflows and stronger digital positioning.',
      points: [
        { points: 'Production Efficiency: Smarter Workflows' },
        { points: 'Process Automation: Reduced Manual Effort' },
        { points: 'Digital Visibility: Connected Operations' }
      ],
      hero_metrics: [
        { label: 'Production Efficiency', value: 'Smarter Workflows' },
        { label: 'Process Automation', value: 'Reduced Manual Effort' },
        { label: 'Digital Visibility', value: 'Connected Operations' }
      ],
      image: '/Industries/manufacturing_mockup.png',
      order: 1,
      status: true
    },
    {
      number: '02',
      title: 'Healthcare & Dental',
      slug: 'healthcare',
      category: 'Healthcare Technology & Patient Engagement',
      badge: 'VERTICAL 02 // HEALTHCARE TECHNOLOGY',
      tagline: 'BUILDING BETTER DIGITAL EXPERIENCES FOR MODERN HEALTHCARE.',
      short_info: 'We help healthcare providers, clinics and dental practices strengthen their digital presence through professional websites, customized applications, branding and targeted marketing.',
      description: 'We help healthcare providers, clinics and dental practices strengthen their digital presence through professional websites, customized applications, branding and targeted marketing. Our focus is on accessible digital experiences that improve patient engagement and business visibility.',
      points: [
        { points: 'Patient Experience: Simplified Access' },
        { points: 'Digital Presence: Stronger Visibility' },
        { points: 'Practice Growth: Better Engagement' }
      ],
      hero_metrics: [
        { label: 'Patient Experience', value: 'Simplified Access' },
        { label: 'Digital Presence', value: 'Stronger Visibility' },
        { label: 'Practice Growth', value: 'Better Engagement' }
      ],
      image: '/Industries/healthcare_mockup.png',
      order: 2,
      status: true
    },
    {
      number: '03',
      title: 'Food & FMCG',
      slug: 'food-fmcg',
      category: 'Consumer & Brand Growth',
      badge: 'VERTICAL 03 // CONSUMER & BRAND GROWTH',
      tagline: 'TURNING EVERYDAY PRODUCTS INTO MEMORABLE BRANDS.',
      short_info: 'From emerging food brands to established FMCG businesses, we create digital experiences that connect products with consumers.',
      description: 'From emerging food brands to established FMCG businesses, we create digital experiences that connect products with consumers. Through e-commerce development, creative branding, product photography and performance marketing, we help brands stand out in competitive markets.',
      points: [
        { points: 'Brand Identity: Stronger Recognition' },
        { points: 'E-Commerce: Seamless Shopping' },
        { points: 'Marketing: Wider Consumer Reach' }
      ],
      hero_metrics: [
        { label: 'Brand Identity', value: 'Stronger Recognition' },
        { label: 'E-Commerce', value: 'Seamless Shopping' },
        { label: 'Marketing', value: 'Wider Consumer Reach' }
      ],
      image: '/Industries/food_mockup.png',
      order: 3,
      status: true
    },
    {
      number: '04',
      title: 'Retail & E-Commerce',
      slug: 'retail-ecommerce',
      category: 'Digital Commerce & Omnichannel Retail',
      badge: 'VERTICAL 04 // DIGITAL COMMERCE',
      tagline: 'CREATING CONNECTED SHOPPING EXPERIENCES THAT CONVERT.',
      short_info: 'We empower retail businesses with modern e-commerce websites, custom software, digital marketing and compelling brand experiences.',
      description: 'We empower retail businesses with modern e-commerce websites, custom software, digital marketing and compelling brand experiences. From online storefronts to customer acquisition campaigns, we build digital ecosystems designed to support sustainable business growth.',
      points: [
        { points: 'Online Stores: Seamless Experiences' },
        { points: 'Customer Acquisition: Targeted Growth' },
        { points: 'Digital Commerce: Better Conversions' }
      ],
      hero_metrics: [
        { label: 'Online Stores', value: 'Seamless Experiences' },
        { label: 'Customer Acquisition', value: 'Targeted Growth' },
        { label: 'Digital Commerce', value: 'Better Conversions' }
      ],
      image: '/Industries/retail_mockup.png',
      order: 4,
      status: true
    },
    {
      number: '05',
      title: 'Hospitality & Resorts',
      slug: 'hospitality',
      category: 'Hospitality Experiences & Destination Branding',
      badge: 'VERTICAL 05 // HOSPITALITY EXPERIENCES',
      tagline: 'TURNING EXCEPTIONAL STAYS INTO UNFORGETTABLE DIGITAL EXPERIENCES.',
      short_info: 'We help hotels, resorts and hospitality brands attract guests through engaging websites, intuitive booking experiences, distinctive branding, professional photography and strategic digital marketing.',
      description: 'We help hotels, resorts and hospitality brands attract guests through engaging websites, intuitive booking experiences, distinctive branding, professional photography and strategic digital marketing.',
      points: [
        { points: 'Guest Experience: Seamless Interaction' },
        { points: 'Direct Bookings: Greater Accessibility' },
        { points: 'Brand Presence: Stronger Recall' }
      ],
      hero_metrics: [
        { label: 'Guest Experience', value: 'Seamless Interaction' },
        { label: 'Direct Bookings', value: 'Greater Accessibility' },
        { label: 'Brand Presence', value: 'Stronger Recall' }
      ],
      image: '/Industries/hospitality_mockup.png',
      order: 5,
      status: true
    },
    {
      number: '06',
      title: 'Education & Training',
      slug: 'education',
      category: 'Education Technology & Digital Learning',
      badge: 'VERTICAL 06 // EDUCATION & LEARNING',
      tagline: 'BUILDING DIGITAL FOUNDATIONS FOR THE FUTURE OF LEARNING.',
      short_info: 'We support educational institutions, training providers and learning businesses with websites, learning platforms, custom applications, brand identity and digital campaigns that connect educators with learners.',
      description: 'We support educational institutions, training providers and learning businesses with websites, learning platforms, custom applications, brand identity and digital campaigns that connect educators with learners.',
      points: [
        { points: 'Learning Platforms: Digital Accessibility' },
        { points: 'Student Acquisition: Targeted Outreach' },
        { points: 'Brand Positioning: Institutional Growth' }
      ],
      hero_metrics: [
        { label: 'Learning Platforms', value: 'Digital Accessibility' },
        { label: 'Student Acquisition', value: 'Targeted Outreach' },
        { label: 'Brand Positioning', value: 'Institutional Growth' }
      ],
      image: '/Industries/education_mockup.png',
      order: 6,
      status: true
    },
    {
      number: '07',
      title: 'Real Estate & Construction',
      slug: 'real-estate',
      category: 'Property & Infrastructure Marketing',
      badge: 'VERTICAL 07 // PROPERTY & INFRASTRUCTURE',
      tagline: 'BUILDING STRONGER DIGITAL FOUNDATIONS FOR AMBITIOUS DEVELOPMENTS.',
      short_info: 'We help real estate companies, property developers and construction businesses showcase projects, attract potential buyers and strengthen their market presence through property websites, digital campaigns, branding and immersive visual content.',
      description: 'We help real estate companies, property developers and construction businesses showcase projects, attract potential buyers and strengthen their market presence through property websites, digital campaigns, branding and immersive visual content.',
      points: [
        { points: 'Property Showcases: Engaging Experiences' },
        { points: 'Lead Generation: Qualified Enquiries' },
        { points: 'Project Branding: Stronger Positioning' }
      ],
      hero_metrics: [
        { label: 'Property Showcases', value: 'Engaging Experiences' },
        { label: 'Lead Generation', value: 'Qualified Enquiries' },
        { label: 'Project Branding', value: 'Stronger Positioning' }
      ],
      image: '/images/industries/work_realestate_1.jpg',
      order: 7,
      status: true
    },
    {
      number: '08',
      title: 'Startups & Professional Services',
      slug: 'startups-professional-services',
      category: 'Business Innovation & Venture Scale',
      badge: 'VERTICAL 08 // BUSINESS INNOVATION',
      tagline: 'FROM BOLD BEGINNINGS TO ESTABLISHED MARKET PRESENCE.',
      short_info: 'We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences.',
      description: 'We partner with startups, consultants and professional service providers to transform business ideas into impactful digital experiences. From website and software development to brand identity and customer acquisition, we help businesses build, launch and grow.',
      points: [
        { points: 'Digital Foundations: Built to Scale' },
        { points: 'Brand Identity: Market Recognition' },
        { points: 'Business Growth: Strategic Visibility' }
      ],
      hero_metrics: [
        { label: 'Digital Foundations', value: 'Built to Scale' },
        { label: 'Brand Identity', value: 'Market Recognition' },
        { label: 'Business Growth', value: 'Strategic Visibility' }
      ],
      image: '/images/industries/work_startups_1.jpg',
      order: 8,
      status: true
    },
    {
      number: '09',
      title: 'Travel & Tourism',
      slug: 'travel-tourism',
      category: 'Travel & Discovery',
      badge: 'VERTICAL 09 // TRAVEL & DISCOVERY',
      tagline: 'INSPIRING JOURNEYS THROUGH POWERFUL DIGITAL EXPERIENCES.',
      short_info: 'We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites, booking platforms, creative campaigns, destination photography and digital storytelling.',
      description: 'We help travel companies, tour operators and tourism businesses connect with modern travellers through engaging websites, booking platforms, creative campaigns, destination photography and digital storytelling.',
      points: [
        { points: 'Travel Platforms: Easy Exploration' },
        { points: 'Digital Campaigns: Audience Engagement' },
        { points: 'Visual Storytelling: Destination Appeal' }
      ],
      hero_metrics: [
        { label: 'Travel Platforms', value: 'Easy Exploration' },
        { label: 'Digital Campaigns', value: 'Audience Engagement' },
        { label: 'Visual Storytelling', value: 'Destination Appeal' }
      ],
      image: '/images/industries/work_travel_1.jpg',
      order: 9,
      status: true
    },
    {
      number: '10',
      title: 'Finance & FinTech',
      slug: 'finance-fintech',
      category: 'Financial Innovation & Security',
      badge: 'VERTICAL 10 // FINANCIAL INNOVATION',
      tagline: 'ENGINEERING SMARTER DIGITAL EXPERIENCES FOR FINANCIAL BUSINESSES.',
      short_info: 'We support financial service providers and fintech businesses with customized software, modern web applications, intuitive user interfaces, digital branding and strategic marketing solutions designed around their business requirements.',
      description: 'We support financial service providers and fintech businesses with customized software, modern web applications, intuitive user interfaces, digital branding and strategic marketing solutions designed around their business requirements.',
      points: [
        { points: 'Financial Platforms: Digital Accessibility' },
        { points: 'User Experience: Simplified Interaction' },
        { points: 'Brand Trust: Stronger Positioning' }
      ],
      hero_metrics: [
        { label: 'Financial Platforms', value: 'Digital Accessibility' },
        { label: 'User Experience', value: 'Simplified Interaction' },
        { label: 'Brand Trust', value: 'Stronger Positioning' }
      ],
      image: '/images/project_fintech.jpg',
      order: 10,
      status: true
    }
  ];

  for (const ind of industriesData) {
    await db.collection('industries').updateOne(
      { slug: ind.slug },
      { $set: { ...ind, updated_at: new Date().toISOString() } },
      { upsert: true }
    );
  }

  console.log('SUCCESS: All Services and Industries collections synced to MongoDB!');
  await client.close();
}

updateData().catch(console.error);
