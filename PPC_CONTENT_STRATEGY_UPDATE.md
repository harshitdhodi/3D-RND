# PPC & Content Strategy Services Update

## Summary
Added two new Digital Marketing service pages with business-friendly content focused on practical paid advertising and content marketing approaches.

---

## 1. PPC & Paid Advertising Service
**Page URL:** `/digital-marketing/performance-ppc-advertising`
**Service ID:** `ppc-advertising`

### Badge & Titles
- **Badge:** `PAID MEDIA // PERFORMANCE MARKETING`
- **Title:** `PERFORMANCE PPC & PAID ADVERTISING`
- **Tagline:** `BUILT FOR GROWTH`

### Overview (2 Paragraphs)
- Focus on data-driven campaigns with clear objectives
- Complete advertising journey management from strategy to optimization
- Emphasis on reaching right audience and converting clicks to opportunities

### Hero Stats (Campaign Deliverables)
1. Paid Campaign Strategy & Setup
2. Audience Targeting & Segmentation
3. Ad Creatives & Copy Development
4. Conversion Tracking & Performance Reports

### CTA Button
`REQUEST A PPC STRATEGY`

### Four PPC Service Modules

**MODULE 01: STRATEGIC CAMPAIGN ARCHITECTURE**
- Campaign structure around business objectives and customer intent
- Tech: Google Ads, Meta Ads Manager, Campaign Planning, Strategy

**MODULE 02: PRECISION AUDIENCE TARGETING**
- Demographic, geographic, interest-based and behavioural targeting
- Tech: Audience Insights, Custom Audiences, Remarketing, Segmentation

**MODULE 03: HIGH-CONVERTING AD CREATIVES**
- Compelling ad copy, graphics, video concepts and CTAs
- Tech: Canva, Adobe, Copywriting, Video Production

**MODULE 04: CONVERSION TRACKING & ROAS OPTIMIZATION**
- Performance monitoring and data-driven optimization
- Tech: Google Analytics 4, Conversion Tracking, Performance Analysis

### Technology Stack
- **Google Ads:** Search, Display & YouTube Advertising
- **Meta Ads Manager:** Facebook & Instagram Campaigns
- **Google Analytics 4:** Website Traffic & Conversion Analysis
- **Google Tag Manager:** Conversion & Event Tracking
- **Google Looker Studio:** Campaign Performance Dashboards
- **Canva / Adobe:** Advertising Creative Development

### Process Steps
- **Phase 01:** Campaign Strategy & Planning (Weeks 1-2)
- **Phase 02:** Campaign Setup & Creative Development (Weeks 3-4)
- **Phase 03:** Campaign Launch & Monitoring (Ongoing)
- **Phase 04:** Performance Review & Optimization (Monthly)

### FAQs (8 Questions)
1. Which advertising platforms do you manage?
2. How much should I budget for paid advertising?
3. Do you create ad copy and creative assets?
4. How do you measure campaign success?
5. Can you manage advertising for e-commerce businesses?
6. Do advertising costs include the ad spend budget?
7. How long does it take to see results from paid advertising?
8. Can you help with landing page optimization?

### Quality Statement
"Every campaign is built around measurable objectives, continuous performance monitoring and data-led optimization — helping businesses make informed advertising decisions."

### Contact
**Campaign Consultation:**
- Heading: SPEAK WITH OUR DIGITAL MARKETING TEAM
- Phone: +91- 730 4945 823

### Meta Information
- **Meta Title:** PPC & Paid Advertising Services | RND Technosoft
- **Meta Description:** Grow your business with PPC and paid advertising services from RND Technosoft. We manage Google Ads, Meta campaigns, audience targeting and conversion optimization.
- **URL Slug:** `/digital-marketing/performance-ppc-advertising`

---

## 2. Content Strategy & Production Service
**Page URL:** `/digital-marketing/content-strategy-production`
**Service ID:** `content-strategy`

### Badge & Titles
- **Badge:** `CONTENT STRATEGY // BRAND STORYTELLING`
- **Title:** `CONTENT MARKETING & STRATEGIC STORYTELLING`
- **Tagline:** `THAT BUILDS BRAND AUTHORITY`

### Overview (2 Paragraphs)
- Great content communicates expertise and builds connections
- Strategic, SEO-focused content for digital presence
- Website copy, blogs, articles, landing pages and brand storytelling

### Hero Stats (Content Deliverables)
1. Content Strategy & Editorial Planning
2. SEO Website Copy & Blog Writing
3. Brand Messaging & Storytelling
4. Content Performance & Optimization

### CTA Button
`REQUEST A CONTENT STRATEGY`

### Four Content Service Modules

**MODULE 01: STRATEGIC CONTENT PLANNING**
- Content strategies based on business objectives and audience interests
- Tech: Content Strategy, Editorial Planning, Audience Research, SEO

**MODULE 02: SEO CONTENT & WEBSITE COPYWRITING**
- Search-focused website pages, blogs, articles and landing pages
- Tech: SEO Writing, Blog Content, Website Copy, Landing Pages

**MODULE 03: BRAND STORYTELLING & CREATIVE CONTENT**
- Consistent brand voice through narratives and marketing content
- Tech: Brand Storytelling, Creative Writing, Marketing Content, Messaging

**MODULE 04: CONTENT OPTIMIZATION & PERFORMANCE**
- Quality review, readability and search relevance refinement
- Tech: Content Optimization, Performance Analysis, Quality Review, Refinement

### Technology Stack
- **Google Trends:** Search interest & topic discovery
- **Semrush:** Keyword & competitor research
- **Google Search Console:** Organic search performance
- **Grammarly:** Writing clarity & proofreading
- **Google Docs:** Content collaboration
- **WordPress:** Content publishing & management
- **Canva:** Visual content development

### Process Steps
- **Phase 01:** Content Discovery & Strategy (Weeks 1-2)
- **Phase 02:** Content Creation & Development (Weeks 3-6)
- **Phase 03:** Content Publishing & Promotion (Ongoing)
- **Phase 04:** Content Review & Optimization (Monthly)

### FAQs (8 Questions)
1. What types of content do you create?
2. Do you write SEO-optimized content?
3. Can you help with content for an existing website?
4. How do you ensure content matches our brand voice?
5. Do you provide content for social media?
6. Can you help with content strategy and planning?
7. How long does content creation take?
8. Do you publish content directly to our website?

### Quality Statement
"Every piece of content starts with a clear purpose — to inform, engage and move your audience closer to your brand. We combine audience research, brand positioning and SEO best practices to create content that works beyond the first click."

### Contact
**Content Consultation:**
- Heading: SPEAK WITH OUR DIGITAL MARKETING TEAM
- Supporting text: Let's discuss your content goals, brand voice and digital communication strategy.

### Meta Information
- **Meta Title:** Content Marketing Services & Strategy | RND Technosoft
- **Meta Description:** Build brand authority with content marketing services from RND Technosoft. We create SEO content, website copy, blogs, articles and strategic brand storytelling.
- **URL Slug:** `/digital-marketing/content-strategy-production`

---

## Technical Implementation

### New Service Entries Added
1. **PPC Advertising** - ID: `ppc-advertising` (Index [07])
2. **Content Strategy** - ID: `content-strategy` (Index [08])
3. **Commercial Media** - Re-indexed to [09]

### Subcategory Config Updates
- Updated `performance-ppc-advertising` to use `baseId: "ppc-advertising"`
- Updated `content-strategy-production` to use `baseId: "content-strategy"`
- Added new service IDs to static params generation

### Files Modified
1. `src/data/servicesData.ts` - Added 2 new complete service entries
2. `src/app/[category]/[subcategory]/page.tsx` - Updated subcategory configs
3. `PPC_CONTENT_STRATEGY_UPDATE.md` - Documentation

---

## Key Features

### PPC Service
✅ Business-friendly language for paid advertising
✅ Clear explanation of campaign management process
✅ Realistic expectations about budgets and timelines
✅ Practical FAQs about ad spend and platform management
✅ Focus on measurable objectives and data-driven decisions

### Content Strategy Service
✅ Emphasis on purpose-driven content creation
✅ Balance between SEO and natural communication
✅ Clear explanation of content types and process
✅ Brand voice consistency and quality focus
✅ Practical timelines and collaboration approach

---

## Page URLs (Active)
- PPC: `http://localhost:3000/digital-marketing/performance-ppc-advertising`
- Content: `http://localhost:3000/digital-marketing/content-strategy-production`

---

## Status
✅ **Complete** - Both PPC and Content Strategy pages created with business-friendly content
