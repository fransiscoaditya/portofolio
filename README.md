# ADITYA — Personal Portfolio

A premium editorial portfolio for Aditya, a Vibe Coder and Digital Builder from Indonesia.

Built with: **Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion for React · Lenis**

Visual identity: **Latin typography + Javanese Script (Aksara Jawa)**

---

## Setup

### Requirements
- Node.js 20.9+
- npm

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Start Production
```bash
npm start
```

### Lint
```bash
npm run lint
```

---

## Content Management

All editable content lives in the `content/` directory. **Never hardcode content in components.**

### Personal Information
**File:** `content/site.ts`

Edit your name, email, social links, bio, and tagline here.

### Projects
**File:** `content/projects.ts`

To add a new project, append to the `projects` array:

```typescript
{
  slug: "my-new-project",          // URL slug: /work/my-new-project
  title: "MY PROJECT NAME",
  shortTitle: "Project",           // Short version for navigation
  year: "2026",
  category: "WEB APPLICATION",
  role: ["FULL-STACK DEVELOPER"],
  description: "What the project is and why it matters.",
  challenge: "What was hard about it.",
  approach: "How you solved it.",
  result: "What the outcome was.",
  technologies: ["NEXT.JS", "TYPESCRIPT"],
  image: "/projects/my-project/cover.webp",
  thumbnail: "/projects/my-project/cover.webp",
  gallery: [
    "/projects/my-project/01.webp",
    "/projects/my-project/02.webp",
  ],
  featured: true,                  // Show on homepage?
}
```

### Javanese Text
**File:** `content/javanese.ts`

> ⚠️ All Javanese strings are placeholders. Verify with a Javanese language speaker before publishing.

Edit this file to change any Javanese text. Do not edit component files.

### Skills & Technologies
**File:** `content/skills.ts`

Edit the `technologies` array to change the tech list, and `expertise` for the marquee.

---

## Replacing Images

1. Place your images in `portfolio-assets/projects/[project-name]/`
2. Copy them to `public/projects/[project-name]/`
3. Use `.webp` format for best performance (convert from `.jpg`/`.png` first)

### Profile photo
Place at: `public/images/profile.jpg`

### OG Image (Social sharing)
Place at: `public/social/og-image.webp` (1200×630px)

### Logo / Signature
Place at: `public/images/logo.svg` and `public/images/signature.svg`

---

## Changing Social Links

Edit `content/site.ts`:

```typescript
export const siteConfig = {
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
}
```

---

## Environment Variables

Create `.env.local` in the project root:

```env
# Google Analytics 4 — leave empty to disable analytics
NEXT_PUBLIC_GA_ID=

# Site URL (used for OG images and sitemap)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Portfolio Assets Structure

```
portfolio-assets/
├── identity/
│   ├── profile.jpg          ← Your photo
│   ├── logo.svg             ← Logo (if any)
│   └── signature.svg        ← Handwritten signature (optional)
│
├── projects/
│   ├── ud-djaya/
│   │   ├── cover.webp       ← Main project image
│   │   ├── 01.webp          ← Gallery image 1
│   │   ├── 02.webp          ← Gallery image 2
│   │   └── 03.webp          ← Gallery image 3
│   │
│   └── colabz/
│       ├── cover.webp
│       ├── 01.webp
│       └── 02.webp
│
├── social/
│   └── og-image.webp        ← 1200×630px for Open Graph
│
└── fonts/                   ← Self-hosted fonts (optional)
```

After adding assets to `portfolio-assets/`, copy them to the matching path in `public/`.

---

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Self-hosted
```bash
npm run build
npm start
```

---

## Project Structure

```
app/
  layout.tsx          ← Root layout + SEO metadata
  page.tsx            ← Homepage
  work/
    page.tsx          ← All projects
    [slug]/page.tsx   ← Project detail
  info/page.tsx       ← About page
  sitemap.ts          ← XML sitemap
  robots.ts           ← robots.txt

components/
  navigation/         ← Nav + mobile menu
  hero/               ← Hero + glyph animation
  work/               ← Work section + project items
  info/               ← About + tech stack + marquee
  footer/             ← Footer
  motion/             ← Animation primitives + Lenis
  cursor/             ← Custom cursor

content/
  site.ts             ← Personal info ← EDIT THIS
  projects.ts         ← Project data  ← EDIT THIS
  javanese.ts         ← Javanese text ← EDIT THIS (verify with expert)
  skills.ts           ← Tech & skills ← EDIT THIS

lib/
  motion.ts           ← Animation config
  utils.ts            ← Utility functions

public/
  projects/           ← Project images
  social/             ← OG image
  images/             ← Profile, logo
```

---

## Notes

- **Javanese text**: The `ꦄꦢꦶꦠꦾ` placeholder in `content/javanese.ts` MUST be verified before going live
- **Performance**: Images should be converted to `.webp` format before deployment
- **Analytics**: Set `NEXT_PUBLIC_GA_ID` in `.env.local` to enable Google Analytics 4
- **Fonts**: Loaded from Google Fonts — ensure internet access during development
