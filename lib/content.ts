import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Writing,
  Project,
  WritingFrontmatter,
  ProjectFrontmatter,
} from "./types";

const contentDirectory = path.join(process.cwd(), "content");

export function getWritings(): Writing[] {
  const writingsDirectory = path.join(contentDirectory, "writings");

  if (!fs.existsSync(writingsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(writingsDirectory);
  const writings = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(writingsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        frontmatter: data as WritingFrontmatter,
        content,
      };
    })
    .filter((writing) => writing.frontmatter.isPublished)
    .sort((a, b) => {
      // Sort by order field if both have it
      if (
        a.frontmatter.order !== undefined &&
        b.frontmatter.order !== undefined
      ) {
        return a.frontmatter.order - b.frontmatter.order;
      }
      // If only one has order, prioritize it
      if (a.frontmatter.order !== undefined) return -1;
      if (b.frontmatter.order !== undefined) return 1;
      // Otherwise sort by publishedAt date (newest first)
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      );
    });

  return writings;
}

export function getWritingBySlug(slug: string): Writing | null {
  const writings = getWritings();
  return writings.find((writing) => writing.frontmatter.slug === slug) || null;
}

export function getFeaturedWritings(limit = 6): Writing[] {
  const writings = getWritings();
  return writings
    .filter((writing) => writing.frontmatter.featured)
    .slice(0, limit);
}

export function getProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, "projects");

  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(projectsDirectory);
  const projects = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Generate slug from filename
      const slug = filename.replace(/\.mdx$/, "");

      return {
        frontmatter: { ...data, slug } as ProjectFrontmatter,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.createdAt || 0).getTime() -
        new Date(a.frontmatter.createdAt || 0).getTime()
    );

  return projects;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((project) => project.frontmatter.slug === slug) || null;
}

export function getFeaturedProjects(limit = 3): Project[] {
  const projects = getProjects();
  return projects
    .filter((project) => project.frontmatter.isFeatured)
    .slice(0, limit);
}
