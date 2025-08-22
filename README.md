# trvue — Astro + Tailwind (minimal, forms-ready)

A simple, fast site for **trvue: empowering global trade**. Two working forms (request + contact) using **Formspree** by default, or **Netlify Forms** if you deploy to Netlify.

## Quick start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev
# open http://localhost:4321
```

## Configure forms (choose ONE)

### Option A — Formspree (works anywhere)
1. Create a form at https://formspree.io
2. Copy your endpoint (looks like `https://formspree.io/f/abcd1234`)
3. Update the two files:
   - `src/pages/request.astro` (replace `your-endpoint`)
   - `src/pages/contact.astro` (replace `your-endpoint`)

### Option B — Netlify Forms (if deploying to Netlify)
1. Set `netlify={true}` and remove `formspree` prop on the `<Form />` component in the pages.
2. Deploy to Netlify; submissions appear in the Netlify dashboard.

## Deploy

### Vercel
- Import the repo in Vercel and deploy (zero config).

### Netlify
- Push to GitHub, then "New site from Git" in Netlify.

## Customize
- Colors live in `src/styles/global.css` (`--brand`, `--brand2`).
- Favicon: `public/favicon.svg`. OG image: `public/og-image.png`.
- Pages in `src/pages/`: `index.astro`, `request.astro`, `contact.astro`, `thanks.astro`, `privacy.astro`.

## Domain (GoDaddy → Vercel/Netlify)
- Add a CNAME for `www` to your host (Vercel/Netlify).
- Add A/ALIAS for apex to your host if needed.
- In your repo, set a `CNAME` file or configure the domain in the dashboard of your host.

---

Built with ❤️ using Astro + Tailwind.
