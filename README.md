# Personal Website

A modern, performant personal website built with Astro and Tailwind CSS.

## 🚀 Features

- ⚡ Fast static site generation with Astro
- 🎨 Styled with Tailwind CSS v4
- 🌙 Dark mode support (class-based)
- 📱 Fully responsive design
- ♿ SEO-friendly with meta tags and Open Graph support
- 📝 Blog-ready with content collections (future-proof)
- 🚢 Ready for GitHub Pages deployment

## 📁 Project Structure

```text
/
├── public/                  # Static assets
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BaseHead.astro  # SEO meta tags
│   │   ├── Header.astro    # Site navigation
│   │   └── Footer.astro    # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout wrapper
│   ├── pages/               # File-based routing
│   │   ├── index.astro     # Homepage
│   │   └── about.astro     # About page
│   ├── content/             # Content collections
│   │   └── config.ts       # Schema definitions
│   └── styles/
│       └── global.css      # Global styles with Tailwind
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Customization

Before deploying, make sure to update:

1. **Site configuration** in `astro.config.mjs`:
   - Update `site` URL to your GitHub Pages URL
   - Add `base` if using a project repository

2. **Personal information**:
   - Update "Your Name" in `src/components/Header.astro`
   - Update "Your Name" in `src/components/Footer.astro`
   - Update homepage content in `src/pages/index.astro`
   - Update about page content in `src/pages/about.astro`
   - Update email addresses in both pages

3. **Social links** in `src/components/Footer.astro`:
   - Update GitHub, LinkedIn, and Twitter URLs

4. **Profile image**:
   - Add your profile photo to `public/images/`
   - Update the placeholder in `src/pages/about.astro`

## 📝 Adding a Blog (Future)

The site is already configured for blog functionality. To add a blog:

1. Create `src/content/blog/` directory
2. Add markdown files with frontmatter (title, description, pubDate, etc.)
3. Create `src/pages/blog/index.astro` for blog listing
4. Create `src/pages/blog/[...slug].astro` for individual posts

See `src/content/config.ts` for the blog schema.

## 🚀 Deployment to GitHub Pages

1. Update `site` in `astro.config.mjs` with your GitHub Pages URL
2. Push your code to a GitHub repository
3. Enable GitHub Pages in repository settings
4. Set up GitHub Actions workflow (optional, for automatic deployment)

## 🌙 Dark Mode

Dark mode is configured using Tailwind's class-based strategy. To implement a theme toggle:

1. Create a theme switcher component
2. Add JavaScript to toggle the `dark` class on the `<html>` element
3. Persist the preference in `localStorage`

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Astro Discord](https://astro.build/chat)
