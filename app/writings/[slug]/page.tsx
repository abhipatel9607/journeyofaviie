import { getWritingBySlug, getWritings } from "@/lib/content";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Script from "next/script";

// Custom components for MDX to open all external links in new tab
const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    // Check if it's an external link
    const isExternal =
      props.href &&
      (props.href.startsWith("http") || props.href.startsWith("//"));

    if (isExternal) {
      return <a {...props} target="_blank" rel="noopener noreferrer" />;
    }
    return <a {...props} />;
  },
};

export async function generateStaticParams() {
  const writings = getWritings();
  return writings.map((writing) => ({
    slug: writing.frontmatter.slug,
  }));
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  return (
    <>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <main className="min-h-screen p-6 bg-gray-900/60 backdrop-blur-sm">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">
              {writing.frontmatter.title}
            </h1>
            <p className="text-gray-400">
              {new Date(writing.frontmatter.publishedAt).toLocaleDateString(
                "en-IN",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:hover:underline prose-strong:text-white prose-em:text-gray-300 prose-li:text-gray-300 [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-0">
            <MDXRemote source={writing.content} components={components} />
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-300 italic">
              More features like Like, Comment, or attach a thought will come
              soon. For now, if you have any thoughts on this, I would love to
              hear them. Please{" "}
              <a href="/contact" className="text-blue-400 hover:underline">
                write to me
              </a>
              .
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}
