export interface WritingFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  language: "en" | "hi";
  writingType:
    | "life"
    | "spiritual"
    | "transition"
    | "animals"
    | "love"
    | "notes";
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
  featured?: boolean;
  coverImage?: string;
  order?: number;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  problemStatement: string;
  solutionOverview: string;
  techStack: string[];
  tags?: string[];
  role: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  createdAt: string;
}

export interface Writing {
  frontmatter: WritingFrontmatter;
  content: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
}
