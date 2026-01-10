# Copilot Instructions

## Project Overview

Personal Portfolio & Writings Website for Abhishek Patel - A minimal editorial portfolio combining professional projects with personal long-form writings.

## ✅ Setup Complete

- [x] Verify that the copilot-instructions.md file in the .github directory is created
- [x] Clarify Project Requirements - Requirements documented in ERD and specifications
- [x] Scaffold the Project - Next.js 16 with App Router, TypeScript, Tailwind CSS
- [x] Customize the Project - All pages, components, and content management configured
- [x] Install Required Extensions - No additional extensions required
- [x] Compile the Project - Build completed successfully with static export
- [x] Create and Run Task - Development server running on http://localhost:3000
- [x] Launch the Project - Development server active
- [x] Ensure Documentation is Complete - README and SITE_DOCUMENTATION created

## 🎉 Full Site Development Complete

### Pages Implemented

- **Home** - Hero section with featured projects and writings
- **About** - Personal story with background, current work, values, and philosophy
- **Projects** - Professional portfolio with 3 sample projects
- **Writings** - Long-form writings with 5 diverse samples (spiritual, life, animals, love, transitions)
- **Contact** - EmailJS integrated contact form with WhatsApp link
- **Dynamic routes** - Individual project and writing detail pages

### Content Created

**Projects:**

1. Pharma-Tech Platform (featured)
2. Healthcare Inventory System (featured)
3. Prescription Management Platform

**Writings:**

1. Ujjain: Where Shiva Taught Me Surrender (spiritual, featured)
2. Jimmy: Street Dog Loyalty (animals, featured)
3. Sample Writing: A Moment of Reflection (life, featured)
4. Leaving 1Pharmacy Network (transition)
5. Silence as a Love Language (love)

### Features

- ✅ Minimal editorial design with calm aesthetics
- ✅ Bilingual content support (EN/HI)
- ✅ MDX-based content management
- ✅ Featured content on home page
- ✅ EmailJS contact form integration
- ✅ WhatsApp deep-link integration
- ✅ SEO optimized metadata
- ✅ Static export ready for deployment
- ✅ Responsive design
- ✅ Accessibility features

## Project Structure

```
app/                    - Next.js pages
  ├── page.tsx         - Home with featured content
  ├── about/           - Personal story and philosophy
  ├── projects/        - Portfolio listing and details
  ├── writings/        - Long-form content and details
  └── contact/         - Contact form
components/             - Navigation component
content/                - MDX content files
  ├── projects/        - 3 sample projects
  └── writings/        - 5 sample writings
lib/                    - Content management utilities
public/images/          - Static image assets
```

## Tech Stack

- Next.js 16 (App Router, Static Export)
- TypeScript
- Tailwind CSS with @tailwindcss/postcss
- MDX (next-mdx-remote) for content
- Gray-matter for frontmatter
- EmailJS for contact form
- Playfair Display (serif) + Inter (sans-serif)

## Development Commands

- `npm run dev` - Start development server (currently running)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Next Steps for Production

1. **Content Personalization:**

   - Add your profile picture to `public/images/profile.jpg`
   - Update About page with your actual story
   - Replace sample projects with real ones
   - Write authentic personal writings

2. **Configuration:**

   - Copy `.env.example` to `.env.local`
   - Add EmailJS credentials (get from emailjs.com)
   - Update WhatsApp number
   - Set production SITE_URL

3. **Deployment:**

   - Push to GitHub
   - Deploy to Vercel (recommended) or Netlify
   - Add environment variables in deployment settings
   - Configure custom domain (optional)

4. **Content Strategy:**
   - Write when inspired, not on a schedule
   - Keep the philosophy: depth over engagement
   - Maintain the calm, minimal aesthetic
   - End writings with: _"If this resonated, you're welcome to write to me."_

## Philosophy

> _"Build with clarity. Write with honesty. Let silence do its work."_

This website is:

- An archive of work, thought, and lived experience
- Not a social platform or content factory
- Writing-first with respect for depth
- Timeless over trendy
- Human first, metrics second

## Documentation

- **README.md** - Project overview, installation, deployment
- **SITE_DOCUMENTATION.md** - Detailed content management guide
- **public/images/README.md** - Image guidelines
- **.env.example** - Environment variables template

## Current Status

✅ **Ready for deployment** - All core features implemented
🎨 **Design complete** - Minimal editorial aesthetic
📝 **Sample content added** - Demonstrates all content types
📚 **Fully documented** - Setup and maintenance guides ready

The site is fully functional and ready for personalization!
