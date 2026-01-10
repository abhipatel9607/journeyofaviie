import { getFeaturedProjects, getFeaturedWritings } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import SocialSidebar from "@/components/SocialSidebar";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function Home() {
  const featuredProjects = getFeaturedProjects(3);
  const featuredWritings = getFeaturedWritings(6);

  const skills = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description:
        "Building scalable web applications with React, Next.js, Node.js, Django and modern frameworks. Focus on clean code and user experience.",
    },
    {
      icon: "🏥",
      title: "Healthcare Tech",
      description:
        "Specialized in pharma-tech platforms, prescription management, and billing & inventory systems that improve retailers outcomes.",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on AWS, Docker, and CI/CD pipelines for reliable, scalable infrastructure.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Creating responsive mobile-first applications and progressive web apps for seamless cross-platform experiences.",
    },
    {
      icon: "💪",
      title: "Fitness & Coaching",
      description:
        "National Level Badminton Player (2015-2022) and professional coach. Discipline from sports fuels my approach to life, code, and continuous growth.",
    },
    {
      icon: "✍️",
      title: "Thoughtful Writing",
      description:
        "I write about the things I build, the lessons I learn, and the moments that shape me.. from software and systems to values, emotions, spirituality, and everyday life.",
    },
  ];

  const stats = [
    { number: "4+", label: "Years in Tech" },
    { number: "35+", label: "Projects Delivered" },
    { number: "10", label: "Years as Athlete" },
    { number: "100K+", label: "Prescriptions Processed" },
  ];

  return (
    <main className="min-h-screen">
      {/* Social Media Sidebar */}
      <SocialSidebar />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 py-10">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-widest text-blue-400 mb-4 flex items-center justify-center lg:justify-start gap-2">
                AS A <TypewriterEffect />
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Abhishek Patel
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                I'm a Software Engineer who builds scalable systems and writes
                code that powers digital experiences. I'm also a writer, and a
                former National Level Badminton Player who competed
                professionally for 10 years (2012-2022). Discipline from sports
                shaped how I approach both code and life.
              </p>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Now, I craft software solutions, write about life and
                spirituality, and stay rooted in fitness. Grounded in
                mathematics and driven by curiosity, I explore the beautiful
                world God has created.. guided by discipline and intention in
                both code and words. Welcome to the Journey of Abhi.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/writings"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105 font-medium inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  See My Writings
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all hover:scale-105 font-medium inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact
                </Link>
                {/* <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all font-medium inline-flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Download
                </a> */}
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl">
                <Image
                  src="/images/abhi_hero2.jpg"
                  alt="Abhishek Patel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-700/30 hover:border-blue-500/30 transition-all"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3">
              <span className="text-blue-400 text-5xl">🛠️</span>
              What I Do?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3">
              <span className="text-blue-400 text-5xl">💼</span>
              Work Experience
            </h2>
            <p className="text-xl text-gray-300">
              Building products, solving problems, and growing through code
            </p>
          </div>

          <div className="space-y-8">
            {/* MidiHealth */}
            <div className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Full Stack Engineer
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-2">
                      MidiHealth
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      United States · Remote
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 bg-blue-600/10 px-4 py-2 rounded-lg border border-blue-500/20">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">Sep 2025 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Developed and maintained full-stack Django applications,
                      ensuring scalable and efficient backend architecture
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Led Prefect workflow migration, improving task
                      orchestration, reliability, and automation
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Managed DataDog migration for application monitoring,
                      performance insights, and improved observability
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 1Pharmacy Network */}
            <div className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Front-End Heavy Full Stack Developer
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-2">
                      1Pharmacy Network
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Bangalore · On-site
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 bg-blue-600/10 px-4 py-2 rounded-lg border border-blue-500/20">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">Jan 2024 - Sep 2025</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Developed and maintained core platform features using
                      ReactJS, TypeScript, ReduxJS, Material UI, and backend
                      services with Python, AWS (Lambda, S3)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Built a reusable React Global Hook for server-side
                      pagination, implemented across 7+ modules, improving code
                      consistency and reducing duplication by 40%
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Optimized Redux state management on high-traffic pages,
                      reducing unnecessary re-renders by 60% and improving load
                      time by 1.8×
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Engineered a custom QR Label and Bill Print service,
                      combining Python backend and ExpressJS API, enabling
                      seamless PDF generation with dynamic content, used across
                      3000+ Pharmacy stores
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Integrated ESC-POS encoder for precise Dot Matrix
                      printing, solving legacy printing bugs and improving print
                      alignment accuracy by 90%
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MountBlue Technologies */}
            <div className="group relative bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Software Engineer Trainee
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-2">
                      MountBlue Technologies
                    </p>
                    <p className="text-gray-400 flex items-center gap-2">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Bangalore · On-site
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 bg-blue-600/10 px-4 py-2 rounded-lg border border-blue-500/20">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">Sep 2023 - Jan 2024</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Worked with ReactJS, TypeScript, NodeJS, ExpressJS,
                      AngularJS, HTML, CSS, CLI, and SQL
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Contributed to more than 12 projects, including an
                      issue-syncing system (Node.js, MongoDB) and a note-taking
                      app (React, Firebase, Chakra UI)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Adapted to fast-paced projects, developing strong teamwork
                      and learning skills
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-400 mt-1 text-lg">▸</span>
                    <span>
                      Gained hands-on experience with Node.js, Express.js,
                      React, Redux, TypeScript, Angular and databases
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3">
                <span className="text-blue-400 text-5xl">🚀</span>
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300">
                Systems built with clarity and care
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Link
                  key={project.frontmatter.slug}
                  href={`/projects/${project.frontmatter.slug}`}
                  className="group"
                >
                  <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {project.frontmatter.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                      {project.frontmatter.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(
                        project.frontmatter.tags ||
                        project.frontmatter.techStack ||
                        []
                      )
                        .slice(0, 3)
                        .map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      {(
                        project.frontmatter.tags ||
                        project.frontmatter.techStack ||
                        []
                      ).length > 3 && (
                        <span className="text-xs px-3 py-1 bg-blue-600/20 rounded-full text-blue-300 border border-blue-500/30">
                          +
                          {(
                            project.frontmatter.tags ||
                            project.frontmatter.techStack ||
                            []
                          ).length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium"
              >
                View All Projects
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Writings/Stories Section */}
      {featuredWritings.length > 0 && (
        <section id="writings" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3">
                <span className="text-blue-400 text-5xl">✍️</span>
                Stories & Reflections
              </h2>
              <p className="text-xl text-gray-300">
                Thoughts on life, spirituality, and lived experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredWritings.map((writing) => (
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
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
                        {writing.frontmatter.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {new Date(
                          writing.frontmatter.publishedAt
                        ).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-gray-300 leading-relaxed flex-grow line-clamp-3">
                        {writing.frontmatter.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/writings"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-lg font-medium"
              >
                Read All Writings
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            If you'd like to discuss a project, share your thoughts on something
            I've written, or just say hello.. I'd be glad to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105 text-lg font-medium"
            >
              Send a Message
            </Link>
            <a
              href={`https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all hover:scale-105 flex items-center gap-2 text-lg font-medium"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-700">
            <blockquote className="text-lg md:text-xl text-gray-400 italic">
              "Build with clarity. Write with honesty. Let silence do its work."
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
