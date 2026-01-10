# Site Documentation

## Content Management Guide

### Adding New Writings

1. Create a new `.mdx` file in `content/writings/`
2. Use this frontmatter template:

```mdx
---
title: "Your Writing Title"
slug: "your-writing-slug"
excerpt: "A compelling short introduction (2-3 sentences)"
language: "en"
writingType: "life"
isPublished: true
publishedAt: "2026-01-04"
createdAt: "2026-01-04"
featured: false
---

# Your Content Here

Write your story...

---

_If this resonated, you're welcome to write to me._
```

**Writing Types:**

- `life` - Life & Moments
- `spiritual` - Spiritual Reflections
- `transition` - Life Transitions
- `animals` - Animals & Humanity
- `love` - Love & Relationships
- `notes` - Notes from the Heart

**Languages:**

- `en` - English
- `hi` - Hindi (हिन्दी)

**Featured Writings:**
Set `featured: true` to display on the home page (limit: 3 most recent)

### Adding New Projects

1. Create a new `.mdx` file in `content/projects/`
2. Use this frontmatter template:

```mdx
---
title: "Project Name"
slug: "project-slug"
description: "One-line project description"
problemStatement: "What problem did it solve?"
solutionOverview: "How did you approach it?"
techStack: ["React", "Node.js", "PostgreSQL"]
role: "Lead Developer"
impact: "Measurable results and outcomes"
liveUrl: "https://example.com"
githubUrl: "https://github.com/username/repo"
isFeatured: true
createdAt: "2026-01-04"
---

# Project Details

Detailed content about the project...
```

**Featured Projects:**
Set `isFeatured: true` to display on the home page (limit: 3 most recent)

## Email Configuration

### Setting Up EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Copy your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Create `.env.local` from `.env.example` and add your credentials

Example template:

```
New message from {{from_name}}

Email: {{from_email}}

Message:
{{message}}
```

## WhatsApp Integration

Add your WhatsApp number in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

Format: Country code + phone number (no spaces, no special characters)

## Customization Guide

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#FAFAF8",
  foreground: "#1F2937",
  accent: {
    olive: "#8B8961",
    sage: "#9CAF88",
  },
}
```

### Fonts

Edit `app/layout.tsx` to change fonts:

```typescript
import { YourSerifFont, YourSansFont } from "next/font/google";
```

Update `tailwind.config.ts` accordingly.

### Navigation

Edit `components/Navigation.tsx` to add/remove menu items:

```typescript
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Add your links here
];
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js configuration
4. Add environment variables in project settings:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Deploy!

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Add environment variables in site settings
5. Deploy!

## Content Guidelines

### Writing Philosophy

- Write only when something is felt
- No forced frequency
- Depth over engagement
- Long-form allowed and encouraged
- Bilingual content welcome

### Writing Structure

1. **Opening Hook**: Start with something specific and relatable
2. **Context**: Set the scene
3. **Story/Reflection**: The heart of the writing
4. **Insight**: What you learned or observed
5. **Closing**: Let it breathe, don't over-explain

### Ending Template

Always end writings with:

```markdown
---

_If this resonated, you're welcome to write to me._
```

### Project Guidelines

Focus on:

- Problem you solved
- Your thinking process
- Technical decisions and trade-offs
- Real impact (metrics if possible)
- What you learned

Avoid:

- Buzzwords without substance
- Exaggeration
- Purely technical jargon without context

## Maintenance

### Regular Updates

- Add new writings when inspired (no fixed schedule)
- Update projects as you complete them
- Keep About page current with your journey
- Review and update sample content

### Content Checklist

Before publishing a writing:

- [ ] Frontmatter complete and accurate
- [ ] Featured image added (if applicable)
- [ ] Spell check completed
- [ ] Links working
- [ ] Ending line included
- [ ] Published date set
- [ ] `isPublished: true`

Before publishing a project:

- [ ] Frontmatter complete
- [ ] Tech stack accurate
- [ ] Impact metrics included
- [ ] Code snippets tested (if any)
- [ ] Links verified

## Troubleshooting

### Build Fails

Check:

- MDX frontmatter syntax (proper YAML format)
- Required fields present in frontmatter
- No syntax errors in MDX files
- Image paths correct

### Content Not Showing

Check:

- `isPublished: true` in frontmatter
- Published date not in future
- Slug is unique
- File saved in correct directory

### EmailJS Not Working

Check:

- Environment variables set correctly
- EmailJS service is active
- Template configured properly
- Public key matches your EmailJS account

## Philosophy Reminder

> _"Build with clarity. Write with honesty. Let silence do its work."_

This site is:

- An archive, not a broadcast
- Quality over quantity
- Timeless over trendy
- Human first, metrics second

Maintain it with intention.
