import { getWritings } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";

export default function WritingsPage() {
  const writings = getWritings();

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Writings</h1>
        <p className="text-xl text-gray-300 mb-12">
          Thoughts on life, spirituality, and moments that matter.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {writings.length === 0 ? (
            <p className="text-gray-400">No writings yet. Check back soon.</p>
          ) : (
            <>
              {writings.map((writing) => (
                <Link
                  key={writing.frontmatter.slug}
                  href={`/writings/${writing.frontmatter.slug}`}
                  className="group"
                >
                  <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 h-full flex flex-col overflow-hidden">
                    {writing.frontmatter.coverImage && (
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={writing.frontmatter.coverImage}
                          alt={writing.frontmatter.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={75}
                          loading="lazy"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="text-xs uppercase tracking-wide text-blue-400 mb-3">
                        {writing.frontmatter.writingType}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {writing.frontmatter.title}
                      </h2>
                      <p className="text-sm text-gray-400 mb-4">
                        {new Date(
                          writing.frontmatter.publishedAt
                        ).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-gray-300 leading-relaxed flex-grow mb-4 line-clamp-3">
                        {writing.frontmatter.excerpt}
                      </p>
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
                  </div>
                </Link>
              ))}

              {/* Coming Soon Card */}
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl border-2 border-dashed border-gray-600/50 h-full flex flex-col items-center justify-center p-8 min-h-[400px]">
                <div className="text-center">
                  <div className="mb-6">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-3">
                    More Coming Soon
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                    More features like Like, Comment, or attach a thought will
                    come soon. For now, if you have any thoughts on this, I
                    would love to hear that. Please write to me.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
