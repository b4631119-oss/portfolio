export type ProjectTier = "secondary" | "experiment";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem?: string;
  scope?: string;
  features?: string[];
  architecture?: string;
  decisions?: string[];
  limitations?: string[];
}

export interface ProjectCustomCaseStudy {
  metadataTitle: string;
  back: string;
  role: string;
  badge: string;
  intro: string;
  overview: string;
  overviewOne: string;
  overviewTwo: string;
  roleTitle: string;
  roleText: string;
  architecture: string;
  architectureFlow: string;
  features: string;
  featureItems: string[];
  stack: string;
  techGroups: { label: string; items: string[] }[];
  notes: string;
  notesText: string;
  live: string;
  code: string;
}

export interface ProjectLocalization {
  title?: string;
  description?: string;
  role?: string;
  image?: ProjectImage;
  caseStudy?: ProjectCaseStudy;
  customCaseStudy?: ProjectCustomCaseStudy;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  role?: string;
  tier: ProjectTier;
  image?: ProjectImage;
  caseStudy?: ProjectCaseStudy;
  customCaseStudy?: ProjectCustomCaseStudy;
  localized?: { en: ProjectLocalization };
}
