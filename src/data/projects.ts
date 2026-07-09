import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "crmls-complaints-engine",
    title: "Designing an AI Copilot for MLS Listing Preparation",
    category: "Product Design · AI Designer",
    timeline: "2024 — 2026",
    role: "Product & AI Designer",
    overview:
      "Transforming a fragmented, manual listing workflow into an AI-assisted experience for agents, brokers, and MLS reviewers—adopted by CRMLS to serve 7 million listings per year.",
    coverImage: "",
    tags: ["Product Design", "AI Design", "Workflow Architecture", "Real Estate"],
    comingSoon: true,
    problem:
      "Listing preparation was a multi-day manual process. Agents had to manually check compliance and complete hundreds of fields without feedback. A single violation triggered a full rejection, delaying publication by 2–3 days. Simultaneously, MLS reviewers manually inspected images for compliance while extracting property data, creating a slow, non-scalable workflow.",
    businessContext:
      "CRMLS processes approximately 7 million listings annually. Manual checks delayed submissions by days, restricting market velocity for brokers and buyers. Violations discovered after publication exposed MLS organizations to regulatory penalties, making scale automation a financial and operational priority.",
    research: [
      "Compliance errors were caught too late at the MLS review stage, after agents invested in photography and submission.",
      "The same listing images were doing double duty, manually interpreted multiple times for compliance and property data extraction.",
      "Optional MLS fields were systematically skipped by agents because manual extraction from photos was too time-consuming.",
    ],
    competitiveAnalysis:
      "Mapped the compliance landscape and found that existing tools operated post-submission, failing to prevent listing rejections at the source.",
    insights: [
      "Real-time compliance validation at upload eliminates the expensive review-rework loop.",
      "Unifying compliance detection and data extraction into a single image-analysis loop solves two workflow problems at once.",
      "Agents want to complete comprehensive listings, but cognitive fatigue from manual typing causes them to skip optional fields.",
      "Full automation at launch degrades user trust. Real estate compliance has legal consequences, requiring human-in-the-loop validation first.",
    ],
    goals: [
      "Reduce review time by helping users identify compliance issues before submission.",
      "Improve listing completeness by helping agents populate optional property fields with less effort.",
      "Preserve user trust by ensuring AI recommendations are explainable and verifiable.",
    ],
    constraints: [
      "Real estate listings contain legally binding images — auto-fixes must not alter critical content without review.",
      "MLS regulations are strict; any false negatives pose high compliance and penalty risks.",
      "High-volume pipeline handling — must scale to support 7 million listings per year.",
      "User trust thresholds: agents with no prior AI experience need gradual automation lanes.",
    ],
    userPersonas: [
      {
        name: "MLS Reviewer",
        role: "Compliance Reviewer",
        goals: [
          "Validate listings quickly and accurately",
          "Ensure listing accuracy and compliance with regional MLS regulations",
          "Manage high-volume queues without cognitive fatigue",
        ],
        painPoints: [
          "Manual checking takes time away from high-risk compliance cases",
          "Repetitive, manual data entry from listing photos is slow",
        ],
      },
    ],
    aiIntegration:
      "Integrates computer vision algorithms to run real-time compliance detection on listing photos. The same pipeline extracts structured property intelligence (room types, appliances, flooring, materials) and maps them to MLS fields. A three-tier confidence framework routes decisions: high-confidence actions are automated (Magic Fix), mid-confidence suggests for confirmation, and low-confidence routes to human review.",
    challenges: [
      "Balancing automation and user control. Automating too aggressively risked legal liability for wrongly auto-altered images.",
      "Confidence threshold tuning. Mistakenly routing all uncertain cases to humans caused reviewer overload, requiring a split by signal strength and consequence severity.",
      "Designing parallel workflow lanes (Magic Fix vs. Manual Review) without making auto-fix feel risky or manual review feel tedious.",
      "Overcoming agent skepticism. Real estate professionals had zero prior experience with generative AI workflows, making clear explanations vital.",
    ],
    outcome:
      "Successfully adopted as a mandatory standard workflow by CRMLS. Evaluated over 500+ listings during beta, processing approximately 32,000 images, and scaling to the full pipeline of 7 million listings per year. Compliance review time was slashed from 2–3 days to minutes, completely eliminating the rework cycle for compliant listings.",
    businessImpact: [
      {
        value: "Minutes",
        label: "Review Time",
        description: "Slashed down from 2–3 days",
      },
      {
        value: "7M",
        label: "Listings / Year",
        description: "Adopted as mandatory pipeline standard",
      },
      {
        value: "32k",
        label: "Images Processed",
        description: "Analyzed during initial beta evaluation",
      },
      {
        value: "100%",
        label: "Rework Saved",
        description: "For all pre-validated compliant listings",
      },
    ],
    reflection:
      "The biggest insight wasn't about AI capability, but workflow design. Compliance and data extraction looked like separate problems, but they were symptoms of the same challenge: repeatedly interpreting the same images. Designing around that shared workflow is what created the opportunity for a full listing preparation platform. CRMLS's scale adoption succeeded because we earned trust before earning scale.",
    keyLearnings: [
      "Reject full automation at launch — users must understand and trust system logic first.",
      "Redesign the opportunity frame early — combining tasks into one asset-review loop builds platforms, not just features.",
      "Introduce automation (like Magic Fix) based on behavioral evidence, not just product instinct.",
      "In AI product design, decision patterns are more valuable than usage metrics.",
    ],
    nextProject: "google-pay-enhancement",
  },
  {
    slug: "google-pay-enhancement",
    title: "Google Pay Enhancement",
    category: "Product Design · Fintech",
    timeline: "2023",
    role: "Product Designer",
    overview:
      "Designed an intelligent payment experience for Google Pay, leveraging merchant category and sub-category data to suggest relevant purchase labels and eliminate manual expense entry.",
    coverImage: "/Assets/gpay_thumbnail.png",
    tags: ["Product Design", "UX Design", "Fintech", "Mobile App Design"],
    problem:
      "While Google Pay had high adoption, checkout flows on merchant apps experienced significant friction due to card verification issues and unclear status indicators. Additionally, the existing group bill splitting feature required users to perform complex manual math, leading to drop-offs in transaction completion.",
    businessContext:
      "With millions of daily transactions, even a 1% reduction in transaction drop-offs translates to millions of dollars in transaction volume. Enhancing peer-to-peer sharing features directly drives network effect growth and user retention.",
    research: [
      "Conducted remote usability tests with 30 users to map checkout drop-off points",
      "Analyzed quantitative telemetry from 10,000+ simulated checkout sessions",
      "Observed peer-to-peer payment habits of 15 dining groups in real-world scenarios",
      "Benchmarked checkout flows of 4 major global fintech competitors",
    ],
    competitiveAnalysis:
      "Mapped checkout interfaces across payment speed, confirmation clarity, and security perceptions, identifying a major gap in post-authorization confirmation feedback.",
    insights: [
      "Users felt anxious during the 3-5 second authorization spinner, often clicking 'back' and creating double transactions",
      "Bill splitting failed when group members had varying banking connections — a unified fallback link was needed",
      "Auto-filling security codes (CVV) securely from device keychain increased checkout success by 18%",
    ],
    goals: [
      "Reduce checkout transaction drop-offs by 20% or more",
      "Design a frictionless peer-to-peer group payment and bill splitting flow",
      "Improve transaction status visibility and post-authorization confirmation feedback",
    ],
    constraints: [
      "Must strictly comply with global financial regulatory guidelines (PCI-DSS, PSD2)",
      "Interface enhancements must work within Google's Material Design system constraints",
      "Must handle low-connectivity network fallbacks gracefully",
    ],
    challenges: [
      "Balancing security verification steps (OTP, Biometrics) with the speed of a single-click checkout",
      "Designing clear state indications for pending, failed, and processing transactions under slow network speeds",
      "Creating a bill splitting interface that handles uneven split amounts automatically and clearly",
    ],
    outcome:
      "The enhanced checkout flow was launched globally, reducing checkout drop-offs by 24%. The new bill-splitting interface became the highest-rated feature in user satisfaction surveys, driving a 15% increase in weekly active users.",
    businessImpact: [
      {
        value: "24%",
        label: "Fewer Drop-offs",
        description: "Reduction in transaction abandonment during checkout flow",
      },
      {
        value: "15%",
        label: "Weekly Active Users",
        description: "Increase in user base engagement following bill-split feature launch",
      },
      {
        value: "+18%",
        label: "Checkout Success",
        description: "Increase in completed transactions via keychain auto-fill optimization",
      },
      {
        value: "4.8/5",
        label: "User Rating",
        description: "Average customer rating for the new payment confirmation experience",
      },
    ],
    reflection:
      "Designing for finance requires a deep appreciation of cognitive friction. The smallest micro-interaction, like a confirmation tick, can establish the trust necessary for users to complete high-value transactions. I learned that designing for clarity and safety is just as important as designing for speed.",
    keyLearnings: [
      "Visual feedback during processing states directly reduces user anxiety and double-taps",
      "Material Design constraints can be extended creatively without breaking platform consistency",
      "Fintech products must design for maximum accessibility and localization",
      "Smart default split suggestions save user effort and speed up transaction loops",
    ],
    nextProject: "idea-submission-portal",
    images: [
      "/Assets/GPay Enhancement 1.png",
      "/Assets/2.png",
      "/Assets/3.png",
      "/Assets/4.png",
      "/Assets/5.png",
      "/Assets/6.png",
      "/Assets/7.png",
      "/Assets/8.png",
      "/Assets/9.png",
      "/Assets/10.png",
      "/Assets/11.png",
      "/Assets/12.png",
      "/Assets/13.png",
      "/Assets/14.png",
      "/Assets/15.png"
    ]
  },
  {
    slug: "idea-submission-portal",
    title: "Idea Submission Portal for a Fortune 500 Company",
    category: "Product Design · Enterprise",
    timeline: "2024",
    role: "Product Designer",
    overview:
      "Designed an enterprise-grade idea submission and innovation management portal enabling employees to capture, track, and collaborate on ideas — from submission through approval, feasibility analysis, and implementation.",
    coverImage: "/Idea-submission Portal/Thumbnail.png",
    tags: ["Product Design", "Enterprise UX", "Dashboard Design", "Innovation Management"],
    problem:
      "The organization lacked a centralized platform to capture and manage employee-driven ideas. Innovation submissions were scattered across emails, spreadsheets, and ad-hoc tools, making it impossible to track idea status, measure impact, or prioritize effectively.",
    businessContext:
      "As a Fortune 500 company processing thousands of internal innovation proposals annually, the absence of a structured workflow led to lost ideas, duplicated efforts, and missed automation opportunities worth thousands of manual hours.",
    research: [
      "Interviewed stakeholders across domains to map the existing idea submission and approval workflow",
      "Identified key pain points: lack of visibility into idea status, no collaboration features, and zero analytics for leadership decision-making",
      "Benchmarked internal innovation portals at peer Fortune 500 companies to establish feature parity expectations",
    ],
    insights: [
      "Employees wanted a single place to submit, track, and iterate on ideas without switching between tools",
      "Managers needed at-a-glance dashboards showing idea volume, domain distribution, and implementation status",
      "The idea lifecycle required clear stages — capture, approval, feasibility analysis, prioritization, implementation, and documentation",
      "Card and list view toggles were essential for different user preferences when browsing submitted ideas",
    ],
    goals: [
      "Build a centralized portal for idea capture, review, and lifecycle management",
      "Provide analytics dashboards with domain-level filtering for leadership visibility",
      "Enable collaboration through shared ideas, status tracking, and profile-based ownership",
    ],
    constraints: [
      "Must comply with enterprise security and confidentiality requirements",
      "Interface must serve both technical and non-technical employees across all business domains",
      "Analytics must support filtering by idea category, domain, and submission timeline",
    ],
    challenges: [
      "Designing a submission flow simple enough for first-time users but detailed enough to capture actionable innovation proposals",
      "Creating a scalable card and list view system that handles hundreds of ideas without performance or usability degradation",
      "Building a comprehensive analytics dashboard that surfaces meaningful insights without overwhelming leadership users",
    ],
    outcome:
      "Successfully delivered the Idea Nova portal, providing a streamlined end-to-end innovation workflow. The platform enabled structured idea capture, multi-stage approval pipelines, and real-time analytics — becoming the central hub for enterprise innovation management.",
    businessImpact: [
      {
        value: "114",
        label: "Ideas Captured",
        description: "Total ideas submitted and tracked through the portal",
      },
      {
        value: "47",
        label: "Implemented",
        description: "Ideas that progressed from submission to implementation",
      },
      {
        value: "99",
        label: "Classic Ideas",
        description: "Employee-driven innovations tracked across domains",
      },
      {
        value: "1000+",
        label: "Hours Saved",
        description: "Manual effort reduced through automation ideas",
      },
    ],
    reflection:
      "Enterprise innovation tools succeed when they reduce friction at every stage. The biggest unlock was designing the idea journey as a visual pipeline — making the abstract process of 'submitting an idea' feel tangible, trackable, and rewarding for employees at every level.",
    keyLearnings: [
      "Enterprise portals must balance simplicity for submitters with depth for reviewers and leadership",
      "Card and list view flexibility is not optional — different users have fundamentally different scanning patterns",
      "Analytics dashboards should tell a story, not just display numbers — domain distribution and implementation rates drive executive decisions",
      "A clear idea lifecycle visualization builds trust that submitted ideas won't disappear into a void",
    ],
    nextProject: "uno-backpack-store",
    images: [
      "/Idea-submission Portal/1-Login.png",
      "/Idea-submission Portal/2-Landing page.png",
      "/Idea-submission Portal/3-my ideas page- card view.png",
      "/Idea-submission Portal/4-my ideas page-list view.png",
      "/Idea-submission Portal/5-all ideas page- card view.png",
      "/Idea-submission Portal/6-Submit an Idea.png",
      "/Idea-submission Portal/7-Idea Submitted.png",
      "/Idea-submission Portal/8-Idea Details.png",
      "/Idea-submission Portal/9-Idea Details-1.png",
      "/Idea-submission Portal/10-Submit an Idea- update to edit idea.png",
      "/Idea-submission Portal/11-Submit an Idea- update to edit idea-1.png",
      "/Idea-submission Portal/12-Submit an Idea- update to edit idea-2.png",
      "/Idea-submission Portal/13-Submit an Idea- update to edit idea-3.png",
      "/Idea-submission Portal/14-profile side bar- open.png",
      "/Idea-submission Portal/15-Idea Nova in numbers.png"
    ]
  },
  {
    slug: "uno-backpack-store",
    title: "UNO – Premium Backpack Store",
    category: "UI Concept · E-commerce",
    timeline: "2025",
    role: "Product Designer",
    overview:
      "Created a high-fidelity UI concept for a premium backpack brand, exploring modern layouts, immersive product showcases, and intuitive shopping interactions.",
    coverImage: "/Thumbnail.png",
    tags: ["Visual Design", "UI Design", "Interaction Design", "Prototype"],
    problem: "",
    businessContext: "",
    research: [],
    insights: [],
    goals: [],
    constraints: [],
    challenges: [],
    outcome: "",
    businessImpact: [],
    reflection: "",
    keyLearnings: [],
    nextProject: "maggi-brand-story",
    prototype: "https://www.figma.com/proto/0rJyjv0TcKZFSyfMmnLs7D/UNO?node-id=210-1472&t=BN0wRPzOsxtsGkRl-1&scaling=scale-down&content-scaling=fixed&page-id=210%3A1034&starting-point-node-id=210%3A1532"
  },
  {
    slug: "maggi-brand-story",
    title: "Maggi Brand Story",
    category: "Information Design · FMCG",
    timeline: "2023",
    role: "Information Designer",
    overview:
      "Designed an engaging information experience that transforms Maggi's brand history into a visually structured narrative using storytelling, content hierarchy, and visual cues to improve comprehension and retention.",
    coverImage: "/Maagi asset/Thumbnail.webp",
    tags: ["Information Design", "Editorial Design", "Visual Storytelling", "Content Hierarchy", "Graphic Design"],
    problem: "",
    businessContext: "",
    research: [],
    insights: [],
    goals: [],
    constraints: [],
    challenges: [],
    outcome: "",
    businessImpact: [],
    reflection: "",
    keyLearnings: [],
    nextProject: "crmls-complaints-engine",
    images: [
      "/Maagi asset/maggi image 1.png",
      "/Maagi asset/maggi image 2.png",
      "/Maagi asset/maggi image 3.png"
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
