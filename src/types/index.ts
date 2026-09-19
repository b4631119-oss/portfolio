export type ProjectTier = "flagship" | "secondary" | "experiment";

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
  screenshots?: ProjectImage[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  role?: string;
  tier?: ProjectTier;
  image?: ProjectImage;
  caseStudy?: ProjectCaseStudy;
}
