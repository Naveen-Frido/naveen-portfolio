// Types for the entire portfolio

export interface Project {
  slug: string;
  title: string;
  category: string;
  timeline: string;
  role: string;
  overview: string;
  coverImage: string;
  tags: string[];
  // Case study sections
  problem: string;
  businessContext: string;
  research: string[];
  competitiveAnalysis?: string;
  insights: string[];
  goals: string[];
  constraints: string[];
  userPersonas?: UserPersona[];
  journeyMap?: string;
  informationArchitecture?: string;
  userFlow?: string;
  wireframes?: string;
  iterations?: string;
  designSystem?: string;
  highFidelity?: string[];
  prototype?: string;
  aiIntegration?: string;
  challenges: string[];
  outcome: string;
  businessImpact: Metric[];
  reflection: string;
  keyLearnings: string[];
  nextProject: string; // slug of next project
  images?: string[];
  comingSoon?: boolean;
}

export interface UserPersona {
  name: string;
  role: string;
  goals: string[];
  painPoints: string[];
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  impact: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  navigation: NavItem[];
  socialLinks: SocialLink[];
  email: string;
  location: string;
  yearsExperience: string;
  resumeUrl: string;
}

export interface AboutContent {
  headline: string;
  intro?: string;
  journey: string;
  designPhilosophy: string;
  workingStyle: string;
  whyAI: string;
  pullQuote: string;
}
