# Raj Kumar Timalsina - Personal Portfolio Website

Production-grade developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**, configured for static export to **GitHub Pages** under custom domain [`rajkumartimalsina.me`](https://rajkumartimalsina.me).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Static HTML Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with CSS variables & dark/light theme switching via `next-themes`)
- **Icons**: Lucide React + custom pixel-perfect SVG brand icons
- **Hosting / Deployment**: GitHub Pages + GitHub Actions CI/CD workflow
- **SEO**: Dynamic Open Graph metadata, semantic HTML, robots.txt, and sitemap.xml

---

## 📁 Project Structure

```
irajkumarr.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── CNAME                    # Custom domain (rajkumartimalsina.me)
│   ├── resume.pdf               # Downloadable & previewable ATS resume PDF
│   ├── favicon.svg              # RT monogram favicon
│   ├── robots.txt               # SEO indexing directives
│   └── sitemap.xml              # Search engine sitemap
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata, fonts, ThemeProvider
│   │   ├── page.tsx             # Single-page assembled portfolio
│   │   └── globals.css          # Theme tokens, dark/light styles, custom scrollbars
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navbar with blur, active scroll spy & mobile drawer
│   │   │   ├── Footer.tsx       # Developer footer with socials and quick links
│   │   │   └── SectionContainer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero with availability badge, CTAs, and pillar highlights
│   │   │   ├── About.tsx        # Background, education focus, technical strengths
│   │   │   ├── Experience.tsx   # Interactive experience timeline (Supreme IT Solutions)
│   │   │   ├── Projects.tsx     # Rich project cards (E-Learning, Job Portal, Food Delivery)
│   │   │   ├── Skills.tsx       # Categorized skills (Languages, Frameworks, DBs, Tools, Arch)
│   │   │   ├── Education.tsx    # B.Sc. CSIT at Birendra Multiple Campus / TU
│   │   │   ├── ResumeSection.tsx# Interactive resume overview with download triggers
│   │   │   └── Contact.tsx      # Direct contact channels, copy email, mailto form
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Reusable button with variants & micro-interactions
│   │   │   ├── Badge.tsx        # Monospace tech badges
│   │   │   ├── Card.tsx         # Surface container with hover effects
│   │   │   ├── Icons.tsx        # Vector SVGs (GitHub, LinkedIn)
│   │   │   ├── CopyButton.tsx   # Copy-to-clipboard button with visual feedback
│   │   │   ├── SectionHeading.tsx
│   │   │   └── ThemeToggle.tsx  # Smooth Dark/Light theme switcher
│   │   └── theme/
│   │       └── ThemeProvider.tsx# next-themes client provider
│   ├── data/
│   │   └── portfolio-data.ts    # Single source of truth for all data & resume content
│   └── lib/
│       └── utils.ts             # Styling utility (clsx + twMerge)
├── scripts/
│   └── generate-resume-pdf.js   # Script to generate fresh resume.pdf from source
├── next.config.ts               # Static export configuration (`output: 'export'`)
├── tailwind.config.ts           # Extended design tokens & animations
├── tsconfig.json                # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm (or pnpm / yarn)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

To create a static export bundle in the `out/` directory:
```bash
npm run build
```
This generates static HTML, CSS, JS, and copies all assets (including `CNAME` and `resume.pdf`) into `out/`.

---

## 🌐 Deploying to GitHub Pages

This repository is already configured with an automated GitHub Actions deployment workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step 1: Enable GitHub Pages in your Repository Settings
1. Go to your repository on GitHub: `https://github.com/irajkumarr/irajkumarr.github.io`
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Step 2: Push your code to GitHub
```bash
git add .
git commit -m "feat: build production portfolio with Next.js static export"
git push origin main
```
The GitHub Actions workflow will automatically run, build the static export, and deploy it to `https://rajkumartimalsina.me`.

---

## 📝 How to Update Information

All portfolio content is decoupled from UI components and stored in a single source of truth: [`src/data/portfolio-data.ts`](src/data/portfolio-data.ts).

### 1. Update Projects
Open `src/data/portfolio-data.ts` and locate `PORTFOLIO_DATA.projects`:
```typescript
{
  id: "project-slug",
  title: "New Project Title",
  tagline: "Short one-liner summary",
  description: "Detailed description",
  problemSolved: "The core challenge and your solution",
  highlights: [
    "Key engineering achievement 1",
    "Key engineering achievement 2"
  ],
  technologies: ["Flutter", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/irajkumarr/repo-name",
  liveUrl: "https://demo-link.com",
  featured: true,
  badge: "Featured Project"
}
```

### 2. Update Experience
In `src/data/portfolio-data.ts`, update `PORTFOLIO_DATA.experience`.

### 3. Update Skills
In `src/data/portfolio-data.ts`, update `PORTFOLIO_DATA.skillCategories`.

### 4. Update Resume
- Place your new PDF file directly at `public/resume.pdf`, **OR**
- Edit `scripts/generate-resume-pdf.js` and run:
```bash
node scripts/generate-resume-pdf.js
```

### 5. Change Social Links / Contact Information
In `src/data/portfolio-data.ts`, modify `PORTFOLIO_DATA.personal` and `PORTFOLIO_DATA.socialLinks`.