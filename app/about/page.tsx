import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">About</h1>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          {/* Introduction */}
          <p className="text-xl leading-relaxed">
            I'm Abhishek Patel.. a full-stack engineer who builds reliable,
            scalable systems, and a person who writes about life, spirituality,
            and the moments that shape us.
          </p>

          {/* Background */}
          <section>
            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">
              From Mathematics to Code
            </h2>
            <p className="leading-relaxed mb-4">
              My journey began with mathematics.. a world of logic, patterns,
              and elegant solutions. That foundation naturally led me to
              software engineering, where I found the same satisfaction in
              building systems that work reliably and scale gracefully.
            </p>
            <p className="leading-relaxed">
              But it wasn't just academics that shaped me. Years of playing
              badminton taught me discipline, focus, and the value of showing up
              consistently.. even when you don't feel like it. Those lessons
              transfer directly to how I approach both engineering and life.
            </p>
          </section>

          {/* Current Work */}
          <section>
            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">
              Building in Pharma-Tech
            </h2>
            <p className="leading-relaxed mb-4">
              I currently work in the pharma-tech space, building systems that
              connect healthcare providers, manage complex workflows, and
              ultimately improve patient outcomes. It's work that requires both
              technical precision and deep empathy for the people using these
              tools.
            </p>
            <p className="leading-relaxed">
              My focus is on creating solutions that are technically sound,
              genuinely helpful, and built to last. I care about code quality,
              system architecture, and the human experience of the people
              interacting with what I build.
            </p>
          </section>

          {/* Values & Philosophy */}
          <section>
            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">
              Values & Approach
            </h2>
            <p className="leading-relaxed mb-4">
              I believe in building with clarity, writing with honesty, and
              letting silence do its work. These aren't just professional
              principles.. they guide how I live.
            </p>
            <p className="leading-relaxed mb-4">
              Engineering teaches you to solve problems methodically. But life
              requires more than logic. That's where writing comes in. It's how
              I process experiences, honor transitions, and make sense of the
              quieter aspects of being human.
            </p>
          </section>

          {/* Why This Website Exists */}
          <section>
            <h2 className="text-2xl font-serif mt-12 mb-4 text-foreground">
              Why This Website Exists
            </h2>
            <p className="leading-relaxed mb-4">
              This site is an archive.. of work, of thought, of lived
              experience. It's not a social platform, not a content factory, not
              a personal brand. It's a quiet space where I can share what I
              build and what I observe.
            </p>
            <p className="leading-relaxed mb-4">
              The projects section shows my professional craft. The writings
              section is where I'm fully human.. reflecting on spiritual
              experiences, transitions, animals, love, and moments that felt
              worth remembering.
            </p>
            <p className="leading-relaxed">
              If this resonates with you, I'd be glad to hear from you.
            </p>
          </section>

          {/* Philosophy Quote */}
          <blockquote className="border-l-4 border-accent-olive pl-6 py-4 my-12 italic text-lg">
            "Build with clarity. Write with honesty. Let silence do its work."
          </blockquote>

          {/* CTA */}
          <div className="flex gap-4 pt-8">
            <Link
              href="/projects"
              className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/writings"
              className="px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              Read My Writings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
