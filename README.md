# Abhishek Patel – Personal Portfolio & Writings Website

A minimal editorial portfolio combining professional projects with personal long-form writings.

## Philosophy

> _"Build with clarity. Write with honesty. Let silence do its work."_

This website is:

- A personal digital space for professional work and human reflection
- Not a social platform or content factory
- An archive of work, thought, and lived experience
- Writing-first, with respect for depth over engagement

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Content:** MDX for writings and projects
- **Styling:** Tailwind CSS with custom minimal design
- **Typography:** Playfair Display (serif) + Inter (sans-serif)
- **Language:** TypeScript
- **Deployment:** Vercel/Netlify (static)

## Project Structure

```
journeyofabhi/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact form
│   ├── projects/            # Projects listing & detail pages
│   ├── writings/            # Writings listing & detail pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   └── Navigation.tsx       # Site navigation
├── content/                 # MDX content files
│   ├── projects/           # Project MDX files
│   └── writings/           # Writing MDX files
├── lib/                     # Utility functions
│   ├── content.ts          # Content management utilities
│   └── types.ts            # TypeScript type definitions
├── public/                  # Static assets
│   └── images/             # Image files
└── .github/                # GitHub configuration
    └── copilot-instructions.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd journeyofabhi
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build for production:

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Linting

Run ESLint:

```bash
npm run lint
```

## Content Management

### Adding a New Writing

Create a new MDX file in `content/writings/`:

```mdx
---
title: "Your Writing Title"
slug: "your-writing-slug"
excerpt: "A short introduction to your writing"
language: "en"
writingType: "life"
isPublished: true
publishedAt: "2026-01-04"
createdAt: "2026-01-04"
featured: false
---

# Your Content Here

Write your long-form content using Markdown and MDX.

You can include:

- **Headings** and formatting
- Images between paragraphs
- Instagram embeds
- Quotes
- Code blocks

---

_If this resonated, you're welcome to write to me._
```

### Adding a New Project

Create a new MDX file in `content/projects/`:

```mdx
---
title: "Project Name"
slug: "project-slug"
description: "Brief project description"
problemStatement: "What problem did it solve?"
solutionOverview: "How did you approach it?"
techStack: ["React", "Node.js", "PostgreSQL"]
role: "Lead Developer"
impact: "Measurable impact or outcome"
liveUrl: "https://example.com"
githubUrl: "https://github.com/username/repo"
isFeatured: true
createdAt: "2026-01-04"
---

# Project Details

Detailed content about the project...
```

## Design System

### Colors

- **Background:** `#FAFAF8`
- **Primary Text:** `#1F2937`
- **Accent Olive:** `#8B8961`
- **Accent Sage:** `#9CAF88`

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Principles

- Minimal, calm, editorial
- No heavy animations
- Subtle transitions only
- Respect for long-form reading

## Bilingual Support

The site supports both English and Hindi content:

- Write in the language that feels natural
- No forced translations
- Language indicator in writing frontmatter

## Contact Form Integration

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to `.env.local`
4. Update the contact form implementation if needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js and builds
4. Add environment variables in Vercel dashboard

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add environment variables in Netlify settings

## Future Enhancements (Optional)

- Email subscription system (Buttondown)
- Analytics (privacy-focused)
- RSS feed for writings
- Reading time estimates
- Search functionality
- Dark mode toggle

## License

MIT License - feel free to use this as inspiration for your own portfolio.

## Author

**Abhishek Patel**

- Full Stack Engineer
- Based in Bengaluru, India
- Building reliable systems and writing about life

---

_This website is an archive of work, thought, and lived experience. If maintained with honesty, it will outlive trends._
