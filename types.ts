
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  image?: string;
}

export interface Service {
  id: string;
  iconName: IconName;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  whoIsItFor: string;
  link?: string; // Optional: for "Learn More" or "See Example" on ServicesPage
}

export interface CaseStudy {
  id: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  visuals: {
    screenshot?: string; // URL or placeholder text
    flowchart?: string;  // URL or placeholder text
    demoVideo?: string; // URL or placeholder text
  };
}

export interface NavLink {
  label: string;
  path: string;
}

// Add more IconName values as needed
export type IconName = 
  'chatbot' | 'automation' | 'analytics' | 'custom' | 
  'check' | 'chevronRight' | 'menu' | 'close' | 
  'briefcase' | 'code' | 'lightbulb' | 'rocket' | 
  'target' | 'userGroup' | 'buildingOffice' |
  'sun' | 'moon' | 'chatBubbleOutline' | 'paperAirplane'; // Added paperAirplane

export interface HowItWorksStepContent {
  id: string;
  title: string;
  description: string;
}

export type Theme = 'light' | 'dark';
