export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}