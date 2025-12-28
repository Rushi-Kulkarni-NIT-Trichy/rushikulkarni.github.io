
import { WorkExperience, ImpactProject, Award, Education } from './types';

export const PROFILE = {
  name: "Rushikesh Kulkarni",
  role: "Associate Product Manager",
  location: "Mumbai, India",
  email: "nittrichy.rushi@gmail.com",
  phone: "9488177320",
  bio: "Building Data Driven Products for the Browse Pod @ Purplle.com (NIT Trichy alum) driving growth and monetization through data, experimentation, and AI agents and also building a 0→1 habit-formation app.",
};

export const PROJECTS: ImpactProject[] = [
  {
    title: "Homepage & Discovery Revamp",
    description: "Shifted app discovery from generic listings to use-case led journeys (Concern, Ingredient, Regimen based). Led the cross-functional effort from UX research to large-scale A/B testing.",
    metrics: ["9.1% lift in Revenue/MAU", "25% drop in exit rate", "Deeper category penetration"],
    tags: ["Product Strategy", "A/B Testing", "UX"]
  },
  {
    title: "Agentic AI Workflows",
    description: "Architected GenAI n8n workflows to automate PDP image and marketing banner generation. Integrated with internal systems for real-time app updates and merchandising.",
    metrics: ["~90% reduction in manual effort", "13% increase in ATCs per slot"],
    tags: ["GenAI", "n8n", "Automation"]
  },
  {
    title: "AdTech Monetization (PDA)",
    description: "Developed the Purplle Display Ads (PDA) infrastructure and a selective placement control panel, empowering brand partners to bid for premium in-app real estate.",
    metrics: ["₹2 Cr/month revenue potential", "Native Ad Integration"],
    tags: ["Monetization", "AdTech", "Scalability"]
  },
  {
    title: "AI Trust & Discovery Filters",
    description: "Launched AI Visual Filters and GenAI-led review quality improvements to build relevance and trust on product pages for millions of users.",
    metrics: ["+5% ATCs per visitor", "Relevance score improvement"],
    tags: ["AI Filters", "Discovery"]
  }
];

export const EXPERIENCE: WorkExperience[] = [
  {
    company: "Purplle",
    role: "Associate Product Manager",
    period: "Aug 2024 - Present",
    highlights: [
      "Led Homepage First Fold revamp leading to a 9.1% lift in Revenue/MAU and 25% exit rate reduction.",
      "Automated merchandising creative workflows using Agentic AI (n8n), saving ~90% manual effort.",
      "Engineered 'Purplle Display Ads' (PDA) control panel unlocking ₹2 Cr/month revenue potential.",
      "Improved PDP conversion by 15% through high-intent widgets and Flash ETA launches.",
      "Pioneered AI Visual Filters and GenAI review summaries to enhance trust and relevance."
    ]
  },
  {
    company: "Purplle",
    role: "Revenue Analytics Manager",
    period: "Jan 2023 - Aug 2024",
    highlights: [
      "Built a robust RFID model for 2,000+ SKUs to improve distribution efficiency.",
      "Led analytics and merchandising strategy driving 38% YoY revenue growth.",
      "Developed a merchandise scorecard that reduced impression wastage by 7%."
    ]
  },
  {
    company: "ZS Associates",
    role: "Decision Analytics Associate",
    period: "Feb 2022 - Jan 2023",
    highlights: [
      "Influenced key decisions for a $2B US pharma portfolio via market and competitor analysis.",
      "Achieved a 15% performance improvement through data-driven strategic planning.",
      "Automated monthly performance reporting, reducing turnaround time by 40%."
    ]
  },
  {
    company: "Collins Aerospace",
    role: "Associate Engineer",
    period: "Oct 2020 - Feb 2022",
    highlights: [
      "Developed Python automation tools and VBA dashboards for aerospace systems.",
      "Reduced engineering reporting time by 60% through custom automation solutions."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "NIT Trichy",
    degree: "B. Tech: Mechanical Engineering",
    period: "2016 - 2020",
    grade: "8.63 CGPA"
  }
];

export const AWARDS: Award[] = [
  {
    title: "Mountain Mover Award",
    description: "Recognized for delivering 38% YoY revenue growth at Purplle.",
    year: "2024"
  },
  {
    title: "Shining Star Award",
    description: "Awarded for the development and impact of the RFID user model.",
    year: "2024"
  },
  {
    title: "Winner, Avithon Hackathon",
    description: "Secured 1st place in the company-wide innovation challenge.",
    year: "2021"
  }
];

export const SKILLS = [
  "Product Strategy", "Growth", "A/B Testing", "SQL", "Python", "GenAI", "n8n", "Tableau", "Stakeholder Management"
];
