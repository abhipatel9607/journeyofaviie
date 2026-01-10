import { getProjectBySlug, getProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

// Custom components for MDX to open all links in new tab
const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.frontmatter.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-6 bg-gray-900/60 backdrop-blur-sm">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">
            {project.frontmatter.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            {project.frontmatter.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {(project.frontmatter.tags || project.frontmatter.techStack)?.map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-normal prose-a:text-blue-400 prose-a:hover:underline prose-strong:text-white prose-em:text-gray-300 prose-li:text-gray-300 [&_ul]:list-disc  [&_ol]:list-decimal  [&_li]:ml-0">
          <MDXRemote source={project.content} components={components} />
        </div>

        {(project.frontmatter.liveUrl || project.frontmatter.githubUrl) && (
          <footer className="mt-12 pt-8 border-t border-gray-700 flex gap-4">
            {project.frontmatter.liveUrl && (
              <a
                href={project.frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Live
              </a>
            )}
            {project.frontmatter.githubUrl && (
              <a
                href={project.frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 text-white transition-colors"
              >
                View Code
              </a>
            )}
          </footer>
        )}
      </article>
    </main>
  );
}
