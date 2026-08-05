export interface Teammate {
  name: string;
  role: string;
  initials: string;
  isUser?: boolean;
}

export interface LearningItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineItem {
  step: string;
  title: string;
  timeframe: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  badgeColor?: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  iconName: string;
  bannerGradient?: string;
  year: string;
  location?: string;
  problem?: string;
  outcome?: string;
  role?: string;
  responsibilities?: string[];
  teammates?: Teammate[];
  timeline?: TimelineItem[];
  learnings?: LearningItem[];
  prototypeUrl?: string;
  githubUrl?: string;
}
