export interface PolicyGridCard {
  title: string;
  description: string;
  icon?: string;
}

export interface PolicyBullet {
  label?: string;
  text: string;
}

export interface PolicyHighlightBox {
  title?: string;
  text: string;
  type?: "note" | "guarantee" | "warning";
}

export interface PolicyTableColumn {
  key: string;
  label: string;
}

export interface PolicyTable {
  columns: PolicyTableColumn[];
  rows: Record<string, string>[];
}

export interface PolicyContactInfo {
  entity: string;
  attention: string;
  email: string;
  address: string;
}

export interface PolicySection {
  id: string;
  navLabel: string;
  sectionNumber: string;
  title: string;
  paragraphs?: string[];
  cards?: PolicyGridCard[];
  bullets?: (string | PolicyBullet)[];
  highlightBox?: PolicyHighlightBox;
  table?: PolicyTable;
  contactInfo?: PolicyContactInfo;
}

export interface PolicyData {
  slug: string;
  title: string;
  breadcrumb: string;
  badge: string;
  badgeIcon?: string;
  effectiveDate: string;
  version: string;
  intro: string;
  bannerImage?: string;
  tocTitle?: string;
  sidebarCallout?: {
    title: string;
    linkText: string;
    linkHref: string;
  };
  content?: string;
  sections?: PolicySection[];
}

export const POLICIES_DATA: Record<string, PolicyData> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "PRIVACY POLICY",
    breadcrumb: "PRIVACY POLICY",
    badge: "DATA PROTECTION STANDARDS // SOC-2 & GDPR COMPLIANT",
    badgeIcon: "ShieldCheck",
    effectiveDate: "JANUARY 1, 2026",
    version: "VERSION 3.2",
    bannerImage: "/banner/legal.png",
    tocTitle: "Document Contents",
    sidebarCallout: {
      title: "Need a signed DPA?",
      linkText: "Request Data Processing Addendum",
      linkHref: "/contact-us",
    },
    intro:
      "At RnD Technosoft Pvt. Ltd., we prioritize the protection, confidentiality, and integrity of your digital footprint. This comprehensive Privacy Policy articulates how we process, protect, and utilize your personal and enterprise data across our web properties, software solutions, APIs, and client portals.",
    sections: [
      {
        id: "overview",
        navLabel: "01. Overview & Scope",
        sectionNumber: "// SECTION 01",
        title: "1. Overview & Scope",
        paragraphs: [
          "This Privacy Policy applies to all services, websites (rndtechnosoft.com), applications, and client portals provided by RnD Technosoft Pvt. Ltd. (“RnD”, “we”, “our”, or “us”).",
          "Whether you are an individual browsing our agency portfolio, a prospective client inquiring about our engineering capabilities, or an enterprise customer engaging in custom software development, this document describes your statutory rights and our commitments under worldwide data protection laws, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and the Digital Personal Data Protection Act (DPDPA).",
        ],
      },
      {
        id: "data-collection",
        navLabel: "02. Information We Collect",
        sectionNumber: "// SECTION 02",
        title: "2. Information We Collect",
        paragraphs: [
          "We classify collected information into three primary streams:",
        ],
        cards: [
          {
            title: "Direct Inquiries & Customer Information",
            description:
              "When you submit a project inquiry, apply for a career role, or execute a master services agreement, we collect your full name, business email address, phone number, corporate entity details, and project specifications.",
            icon: "UserCheck",
          },
          {
            title: "Telemetry & Machine Log Data",
            description:
              "Our servers automatically log access timestamps, IP addresses (anonymized at entry), browser fingerprint headers, referring domains, device operating systems, and page latency metrics to detect DDoS threats and optimize system throughput.",
            icon: "Server",
          },
          {
            title: "Client Project Data & Repositories",
            description:
              "Under formal Service Level Agreements (SLAs), client codebases, test payloads, and proprietary documentation transferred to RnD are processed in air-gapped or dedicated encrypted staging environments strictly for engineering execution.",
            icon: "Database",
          },
        ],
      },
      {
        id: "data-usage",
        navLabel: "03. How We Use Information",
        sectionNumber: "// SECTION 03",
        title: "3. How We Use Information",
        paragraphs: [
          "We deploy gathered data strictly for lawful, explicitly defined objectives:",
        ],
        bullets: [
          {
            label: "Fulfillment of Contracts",
            text: "Delivering architectural designs, custom software codebases, mobile builds, cloud provisioning, and digital marketing campaigns.",
          },
          {
            label: "Customer Support & Technical Communications",
            text: "Sending deployment notices, security advisories, invoice breakdowns, and engineering standup updates.",
          },
          {
            label: "Infrastructure Integrity & Threat Detection",
            text: "Monitoring real-time traffic to mitigate bot intrusion, unauthorized brute-force attempts, and API rate-limit abuse.",
          },
          {
            label: "Compliance & Statutory Auditing",
            text: "Meeting international financial, taxation, intellectual property filing, and corporate governance standards.",
          },
        ],
        highlightBox: {
          title: "STRICT PRIVACY POLICY NOTE",
          text: "RnD Technosoft does NOT sell, rent, or trade your personal data or client intellectual property to third-party data brokers or advertisers.",
          type: "note",
        },
      },
      {
        id: "legal-basis",
        navLabel: "04. Legal Bases (GDPR / CCPA)",
        sectionNumber: "// SECTION 04",
        title: "4. Legal Bases for Processing (GDPR Article 6)",
        paragraphs: [
          "If you reside within the European Economic Area (EEA) or the United Kingdom, our processing is predicated upon:",
        ],
        cards: [
          {
            title: "Contractual Necessity",
            description:
              "Processing mandatory to fulfill project agreements and client deliverables.",
          },
          {
            title: "Legitimate Interests",
            description:
              "Ensuring network cybersecurity, preventing fraud, and enhancing web experience.",
          },
          {
            title: "Explicit Consent",
            description:
              "When you opt into newsletters, marketing communications, or analytic cookies.",
          },
          {
            title: "Statutory Compliance",
            description:
              "Adhering to tax laws, commercial codes, and regulatory court subpoenas.",
          },
        ],
      },
      {
        id: "data-sharing",
        navLabel: "05. Third-Party Sharing",
        sectionNumber: "// SECTION 05",
        title: "5. Third-Party Sharing & Sub-Processors",
        paragraphs: [
          "We engage rigorously vetted third-party vendors (sub-processors) to maintain high availability and security across our digital ecosystem. All vendors operate under legally binding DPAs:",
        ],
        bullets: [
          {
            label: "Cloud Hosting & Compute",
            text: "AWS (Amazon Web Services), Vercel, Google Cloud Platform (SOC-2 Type II & ISO 27001 verified).",
          },
          {
            label: "CDN & DDoS Mitigation",
            text: "Cloudflare Inc. for edge caching, SSL/TLS termination, and web application firewalling.",
          },
          {
            label: "Transactional Communications",
            text: "Resend, SendGrid, or AWS SES for transactional alerts and status updates.",
          },
          {
            label: "Payment Gateways",
            text: "Stripe, Razorpay, or Wire Transfers adhering to PCI-DSS Level 1 compliance.",
          },
        ],
      },
      {
        id: "security",
        navLabel: "06. Security & Encryption",
        sectionNumber: "// SECTION 06",
        title: "6. Security Architecture & Encryption",
        paragraphs: [
          "We treat data defense with military-grade rigor. Our technical countermeasures encompass:",
        ],
        cards: [
          {
            title: "TLS 1.3 & AES-256",
            description:
              "All transit communications enforce TLS 1.3 encryption. Stored databases utilize AES-256 bit block ciphers.",
            icon: "Key",
          },
          {
            title: "Zero-Trust & RBAC",
            description:
              "Role-based access control with hardware-token MFA mandatory across all internal developer endpoints.",
            icon: "Lock",
          },
        ],
      },
      {
        id: "retention",
        navLabel: "07. Data Retention",
        sectionNumber: "// SECTION 07",
        title: "7. Data Retention & Disposal",
        paragraphs: [
          "We retain personal data only as long as necessary to achieve the specific purposes set forth in this document or pursuant to contractual retention agreements:",
        ],
        bullets: [
          {
            label: "Active Client Contracts",
            text: "Retained for the contract duration plus statutory limitation periods (typically 5 to 7 years for tax and commercial verification).",
          },
          {
            label: "Prospective Inquiries",
            text: "Retained for 24 months before automated purge unless a formal engagement commences.",
          },
          {
            label: "Server Logs",
            text: "Cycled and purged on an automated 90-day rolling window.",
          },
        ],
      },
      {
        id: "user-rights",
        navLabel: "08. Your Legal Rights",
        sectionNumber: "// SECTION 08",
        title: "8. Your Legal Rights (GDPR & CCPA/CPRA)",
        paragraphs: [
          "Depending on your geographic jurisdiction, you hold enforceable privacy rights:",
        ],
        cards: [
          {
            title: "Right to Access",
            description:
              "Obtain confirmation and copies of personal data held about you.",
          },
          {
            title: "Right to Rectification",
            description:
              "Correct inaccurate or outdated information without undue delay.",
          },
          {
            title: "Right to Erasure (“Be Forgotten”)",
            description:
              "Request permanent deletion where data is no longer necessary.",
          },
          {
            title: "Right to Data Portability",
            description:
              "Receive your data in a structured, machine-readable JSON format.",
          },
        ],
        highlightBox: {
          title: "EXERCISING YOUR RIGHTS",
          text: "To exercise any of these statutory rights, please submit an official request to our Data Protection Officer at privacy@rndtechnosoft.com. We reply within 30 calendar days.",
          type: "note",
        },
      },
      {
        id: "international",
        navLabel: "09. International Transfers",
        sectionNumber: "// SECTION 09",
        title: "9. Cross-Border International Data Transfers",
        paragraphs: [
          "As a global digital engineering partner with headquarters in Vapi, Gujarat, India, and clients spanning North America, Europe, Australia, and the Middle East, data may be transferred to and maintained on compute clusters located outside your home jurisdiction.",
          "Where cross-border transfers occur from the EEA or UK, RnD implements European Commission Standard Contractual Clauses (SCCs) alongside supplementary cryptographic safeguards to guarantee an adequate level of data protection equivalent to GDPR standards.",
        ],
      },
      {
        id: "contact",
        navLabel: "10. Contact Privacy Officer",
        sectionNumber: "// SECTION 10",
        title: "10. Contact Our Privacy & Compliance Team",
        paragraphs: [
          "For inquiries, regulatory verifications, or to execute a tailored Data Protection Addendum (DPA), please reach out directly:",
        ],
        contactInfo: {
          entity: "RnD Technosoft Pvt. Ltd.",
          attention: "Data Protection Officer / Legal Operations",
          email: "privacy@rndtechnosoft.com / info@rndtechnosoft.com",
          address: "Vapi, Gujarat, India (Global Technology Operations Center)",
        },
      },
    ],
  },

  "terms-of-service": {
    slug: "terms-of-service",
    title: "TERMS OF SERVICE",
    breadcrumb: "TERMS OF SERVICE",
    badge: "MASTER SERVICE AGREEMENT // B2B ENGAGEMENT TERMS",
    badgeIcon: "Scale",
    effectiveDate: "JANUARY 1, 2026",
    version: "REVISION 2.8",
    bannerImage: "/banner/legal.png",
    tocTitle: "Agreement Sections",
    sidebarCallout: {
      title: "Executing a bespoke contract?",
      linkText: "Request Custom Enterprise MSA",
      linkHref: "/contact-us",
    },
    intro:
      "These Terms of Service (“Terms”) constitute a legally binding contractual agreement between RnD Technosoft Pvt. Ltd. (“RnD”, “Company”, “we”, “us”) and the entity or individual (“Client”, “you”) commissioning our digital engineering, software architecture, design, and growth consulting services.",
    sections: [
      {
        id: "acceptance",
        navLabel: "01. Acceptance of Terms",
        sectionNumber: "// SECTION 01",
        title: "1. Acceptance & Structure of Terms",
        paragraphs: [
          "By approving a Statement of Work (SOW), issuing a purchase order, accessing our staging servers, or transferring milestone funds to RnD Technosoft Pvt. Ltd., you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.",
          "In the event of an explicit conflict between these general Terms and an executed Statement of Work signed by authorized signatories of both parties, the terms of the specific Statement of Work shall prevail.",
        ],
      },
      {
        id: "scope",
        navLabel: "02. Scope of Services",
        sectionNumber: "// SECTION 02",
        title: "2. Scope of Services",
        paragraphs: [
          "RnD delivers high-performance digital solutions across four core capability domains:",
        ],
        cards: [
          {
            title: "Technology Solutions",
            description:
              "Bespoke SaaS architectures, high-load backends, mobile apps, and headless e-commerce.",
            icon: "Code2",
          },
          {
            title: "Branding & Creative Design",
            description:
              "Visual identity systems, interactive 3D WebGL interfaces, design systems, and product packaging.",
            icon: "FileCheck",
          },
          {
            title: "Digital Marketing & SEO",
            description:
              "Performance ad scaling, programmatic SEO, conversion rate optimization, and telemetry.",
            icon: "Briefcase",
          },
          {
            title: "Media & CGI Production",
            description:
              "Photorealistic 3D product renders, video post-production, VFX, and multi-channel commercials.",
            icon: "ShieldCheck",
          },
        ],
      },
      {
        id: "ip-ownership",
        navLabel: "03. Intellectual Property",
        sectionNumber: "// SECTION 03",
        title: "3. Intellectual Property Rights & Code Ownership",
        paragraphs: [
          "Pre-Existing Frameworks & Toolkits: RnD retains ownership of its proprietary base libraries, boilerplates, and developer utilities developed independently prior to or outside of the engagement. The Client receives an irrevocable, perpetual, royalty-free, worldwide license to utilize such embedded components within the finished software.",
          "Open Source Compliance: We document and license third-party open-source libraries under permissive licenses (e.g., MIT, Apache 2.0, BSD) ensuring full freedom for commercial deployment.",
        ],
        highlightBox: {
          title: "100% Client Ownership Guarantee",
          text: "Upon full, verified payment of all milestone invoices designated in the relevant SOW, RnD irrevocably assigns, transfers, and conveys all right, title, and intellectual property interest in the customized deliverables, source code, designs, and brand assets to the Client.",
          type: "guarantee",
        },
      },
      {
        id: "client-obligations",
        navLabel: "04. Client Obligations",
        sectionNumber: "// SECTION 04",
        title: "4. Client Obligations & Approvals",
        paragraphs: ["To enable rapid engineering execution, Client agrees to:"],
        bullets: [
          {
            label: "Authorized SPOC",
            text: "Designate an authorized Single Point of Contact (SPOC) empowered to approve designs, specifications, and sprint milestones.",
          },
          {
            label: "Asset Provision",
            text: "Provide required API credentials, brand style guides, content assets, and technical access tokens in a timely manner.",
          },
          {
            label: "Milestone Sign-off",
            text: "Review and issue feedback or formal sign-off on delivered sprint milestones within five (5) business days of receipt.",
          },
        ],
      },
      {
        id: "payments",
        navLabel: "05. Invoicing & Payments",
        sectionNumber: "// SECTION 05",
        title: "5. Invoicing, Milestones & Payment Terms",
        paragraphs: [
          "Projects are billed on a fixed-milestone, monthly dedicated sprint, or time-and-materials basis as specified in the applicable SOW.",
        ],
        bullets: [
          {
            label: "Net Payment Terms",
            text: "Invoices are payable within seven (7) to fourteen (14) calendar days from the date of issue.",
          },
          {
            label: "Taxes",
            text: "All quoted professional rates are exclusive of applicable GST, VAT, or withholding taxes unless stated otherwise.",
          },
          {
            label: "Late Payments",
            text: "Accounts overdue past thirty (30) days may incur a 1.5% monthly financing charge or temporary suspension of staging deployments until balances are cleared.",
          },
        ],
      },
      {
        id: "confidentiality",
        navLabel: "06. Mutual Confidentiality",
        sectionNumber: "// SECTION 06",
        title: "6. Confidentiality & Mutual Non-Disclosure",
        paragraphs: [
          "Both RnD and Client covenant to maintain strict confidentiality regarding all proprietary information disclosed during negotiations and project execution.",
          "Confidential information encompasses technical architectures, source code repositories, API secrets, business logic, customer registries, and commercial terms. Neither party shall disclose such data to third parties without prior written consent, except to employees, legal counsel, and contracted sub-processors with a legitimate need-to-know.",
        ],
      },
      {
        id: "warranties",
        navLabel: "07. Warranties & SLA",
        sectionNumber: "// SECTION 07",
        title: "7. Warranties & Warranty Period",
        paragraphs: [
          "RnD warrants that all custom code delivered will perform substantially in conformance with the functional specifications defined in the SOW.",
        ],
        highlightBox: {
          title: "30-DAY POST-LAUNCH BUG FIX GUARANTEE",
          text: "Every custom software build deployed by RnD includes a thirty (30) calendar-day complimentary warranty period. Any reproducible defects or regressions identified within the original scope are resolved at zero additional expense.",
          type: "guarantee",
        },
      },
      {
        id: "liability",
        navLabel: "08. Limitation of Liability",
        sectionNumber: "// SECTION 08",
        title: "8. Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted under applicable law, neither party shall be liable for incidental, indirect, consequential, or punitive damages, including lost revenue, profits, or data interruption.",
          "The aggregate cumulative liability of either party arising out of or related to this agreement shall not exceed the total fees actually paid by the Client to RnD under the applicable Statement of Work within the six (6) months preceding the claim.",
        ],
      },
      {
        id: "termination",
        navLabel: "09. Term & Termination",
        sectionNumber: "// SECTION 09",
        title: "9. Term & Termination",
        paragraphs: [
          "Either party may terminate an ongoing engagement for cause if the other party breaches a material obligation and fails to cure such breach within fourteen (14) days of formal written notice.",
          "Upon termination, Client shall pay for all verifiable milestones completed and documented engineering hours incurred up to the date of termination, whereupon all work product completed to date will be transferred to Client.",
        ],
      },
      {
        id: "governing-law",
        navLabel: "10. Governing Law & Arbitration",
        sectionNumber: "// SECTION 10",
        title: "10. Governing Law & Jurisdiction",
        paragraphs: [
          "These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of the Republic of India.",
          "Any controversy or claim arising out of this agreement shall be settled through binding arbitration administered in accordance with the Arbitration and Conciliation Act, 1996, with proceedings seated in Gujarat, India.",
        ],
        contactInfo: {
          entity: "RnD Technosoft Pvt. Ltd.",
          attention: "Corporate Legal Affairs & Contract Management",
          email: "legal@rndtechnosoft.com / info@rndtechnosoft.com",
          address: "Vapi, Gujarat, India (Corporate Technology Office)",
        },
      },
    ],
  },

  "cookies-policy": {
    slug: "cookies-policy",
    title: "COOKIES POLICY",
    breadcrumb: "COOKIES POLICY",
    badge: "TRACKING TRANSPARENCY // GDPR & E-PRIVACY DIRECTIVE",
    badgeIcon: "Cookie",
    effectiveDate: "JANUARY 1, 2026",
    version: "REVISION 3.0",
    bannerImage: "/banner/legal.png",
    tocTitle: "Policy Index",
    sidebarCallout: {
      title: "Custom cookie preferences?",
      linkText: "Contact Privacy Team",
      linkHref: "/contact-us",
    },
    intro:
      "This Cookies Policy articulates how RnD Technosoft Pvt. Ltd. (“RnD”, “we”, “our”) utilizes cookies, local storage, pixel beacons, and web telemetry technologies across our digital experiences to guarantee infrastructure security, measure performance, and deliver personalized user journeys.",
    sections: [
      {
        id: "overview",
        navLabel: "01. What Are Cookies",
        sectionNumber: "// SECTION 01",
        title: "1. What Are Cookies & Web Telemetry",
        paragraphs: [
          "Cookies are small alpha-numeric text files stored on your computer, tablet, or smartphone by web servers when you navigate across digital interfaces.",
          "They enable websites to recall your session state (such as dark/light mode preferences or submitted contact inquiries), authenticate authorized users, and deliver streamlined navigation without requesting recurring credential inputs.",
        ],
      },
      {
        id: "how-we-use",
        navLabel: "02. Why We Deploy Cookies",
        sectionNumber: "// SECTION 02",
        title: "2. Why We Deploy Cookies",
        paragraphs: [
          "We deploy cookies to accomplish four operational objectives:",
        ],
        bullets: [
          {
            label: "Security & DDoS Shielding",
            text: "Identifying authorized traffic and isolating brute-force attacks via Cloudflare edge networks.",
          },
          {
            label: "Fluid Navigation",
            text: "Preserving form state when requesting service proposals so you don't lose typed text.",
          },
          {
            label: "Performance Telemetry",
            text: "Evaluating asset load latency, WebGL canvas render rates, and mobile responsiveness.",
          },
          {
            label: "Campaign Attribution",
            text: "Verifying which organic and search advertising initiatives direct high-intent traffic to our agency.",
          },
        ],
      },
      {
        id: "categories",
        navLabel: "03. Cookie Classifications",
        sectionNumber: "// SECTION 03",
        title: "3. Cookie Classifications We Implement",
        cards: [
          {
            title: "Strictly Necessary",
            description:
              "Essential for system operation, CSRF security, and DNS load-balancing. These cannot be disabled through normal cookie toggles without breaking website operation.",
            icon: "ShieldCheck",
          },
          {
            title: "Performance & Analytics",
            description:
              "Collects anonymous telemetry regarding page bounce rates and visitor journeys (e.g. Google Analytics 4) without pinpointing individual personal identities.",
            icon: "Layers",
          },
          {
            title: "Functional & Experience",
            description:
              "Remembers your preference configurations such as sound effects, high-contrast mode, and preferred currency for international quotes.",
            icon: "Settings",
          },
          {
            title: "Marketing & Retargeting",
            description:
              "Permits our team to deliver relevant digital growth case studies and showcase advertisements to individuals who previously expressed interest.",
            icon: "Eye",
          },
        ],
      },
      {
        id: "inventory",
        navLabel: "04. Specific Cookies Inventory",
        sectionNumber: "// SECTION 04",
        title: "4. Specific Cookies Inventory",
        paragraphs: [
          "The table below details the most common first and third-party cookies utilized on our site:",
        ],
        table: {
          columns: [
            { key: "name", label: "Cookie Name" },
            { key: "provider", label: "Provider" },
            { key: "purpose", label: "Purpose" },
            { key: "duration", label: "Duration" },
            { key: "type", label: "Category" },
          ],
          rows: [
            {
              name: "__cf_bm",
              provider: "Cloudflare",
              purpose:
                "Distinguishes between humans and malicious bot traffic to safeguard website performance.",
              duration: "30 minutes",
              type: "Strictly Necessary",
            },
            {
              name: "rnd_session",
              provider: "RnD Technosoft",
              purpose:
                "Maintains encrypted session state and CSRF prevention across navigation.",
              duration: "Session",
              type: "Strictly Necessary",
            },
            {
              name: "_ga, _ga_*",
              provider: "Google Analytics 4",
              purpose:
                "Gathers aggregated telemetry, page views, and click rates to improve page load metrics.",
              duration: "2 years",
              type: "Performance & Analytics",
            },
            {
              name: "rnd_theme_pref",
              provider: "RnD Technosoft",
              purpose:
                "Stores user UI visual preferences, motion accessibility settings, and sound toggles.",
              duration: "1 year",
              type: "Functional",
            },
            {
              name: "_fbp",
              provider: "Meta / Facebook",
              purpose:
                "Measures ad conversion efficiency and attribution across digital growth campaigns.",
              duration: "90 days",
              type: "Marketing & Targeting",
            },
          ],
        },
      },
      {
        id: "third-party",
        navLabel: "05. Third-Party Trackers",
        sectionNumber: "// SECTION 05",
        title: "5. Third-Party Trackers & External Beacons",
        paragraphs: [
          "Certain external services integrated into our site may place independent cookies on your terminal:",
        ],
        bullets: [
          {
            label: "Google Tag Manager / GA4",
            text: "Analyzes aggregate visitor paths across pages under strict IP-anonymization.",
          },
          {
            label: "YouTube / Vimeo Embeds",
            text: "Maintains video bandwidth optimization when playing 3D case study reels.",
          },
          {
            label: "Cloudflare Web Analytics",
            text: "Privacy-first DNS performance evaluation that collects zero personal fingerprints.",
          },
        ],
      },
      {
        id: "controls",
        navLabel: "06. Managing Preferences",
        sectionNumber: "// SECTION 06",
        title: "6. Managing Your Cookie Preferences",
        paragraphs: [
          "You preserve absolute sovereignty over cookie deployment on our website.",
          "Upon your initial visit, our cookie banner affords you the granular choice to accept all cookies, reject optional analytics/marketing scripts, or customize category-level preferences.",
        ],
        highlightBox: {
          title: "BROWSER SETTINGS NOTE",
          text: "You can alter or revoke your cookie consent at any moment by clearing your browser cache or modifying your browser privacy settings.",
          type: "note",
        },
      },
      {
        id: "browser-settings",
        navLabel: "07. Browser Controls",
        sectionNumber: "// SECTION 07",
        title: "7. How to Disable Cookies in Major Browsers",
        paragraphs: [
          "Most desktop and mobile browsers permit you to reject or erase stored cookies via their respective preferences menus:",
        ],
        cards: [
          {
            title: "Google Chrome",
            description: "Settings > Privacy and security > Third-party cookies.",
          },
          {
            title: "Mozilla Firefox",
            description: "Settings > Privacy & Security > Enhanced Tracking Protection.",
          },
          {
            title: "Apple Safari",
            description: "Settings > Safari > Advanced > Block All Cookies.",
          },
          {
            title: "Microsoft Edge",
            description: "Settings > Cookies and site permissions > Manage cookies.",
          },
        ],
      },
      {
        id: "updates-contact",
        navLabel: "08. Policy Updates & Contact",
        sectionNumber: "// SECTION 08",
        title: "8. Modifications & Privacy Inquiries",
        paragraphs: [
          "We reserve the prerogative to revise this Cookies Policy periodically to mirror statutory changes or modifications in our engineering tracking tools.",
          "For further information or data privacy inquiries, contact our Data Protection Officer:",
        ],
        contactInfo: {
          entity: "RnD Technosoft Pvt. Ltd.",
          attention: "Information Security & Compliance Division",
          email: "privacy@rndtechnosoft.com / info@rndtechnosoft.com",
          address: "Vapi, Gujarat, India",
        },
      },
    ],
  },
};

