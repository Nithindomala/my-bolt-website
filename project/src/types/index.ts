export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  link: string;
  image: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  id: number;
  name: string;
  category: 'data' | 'other' | 'language';
  level: number; // 1-5
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}