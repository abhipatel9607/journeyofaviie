import { getProjects } from "@/lib/content";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-gray-300 mb-12">
          A showcase of professional work and technical craft.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <p className="text-gray-400">No projects yet. Check back soon.</p>
          ) : (
            projects.map((project) => (
              <Link
                key={project.frontmatter.slug}
                href={`/projects/${project.frontmatter.slug}`}
                className="group"
              >
                <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                    {project.frontmatter.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed flex-grow mb-4">
                    {project.frontmatter.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.frontmatter.tags?.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.frontmatter.tags &&
                      project.frontmatter.tags.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
                          +{project.frontmatter.tags.length - 3}
                        </span>
                      )}
                  </div>
                  <span className="text-white group-hover:text-blue-400 group-hover:underline transition-all inline-flex items-center gap-1">
                    Read
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
