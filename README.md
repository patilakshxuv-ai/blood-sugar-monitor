# GlucosePulse — 100-page AdSense-ready static website

This is a static, responsive, Vercel/GitHub-ready website containing **99 public HTML pages**, shared CSS/JS, a site search, legal/policy pages, robots.txt, sitemap.xml, ads.txt, and Vercel headers.

## Important: AdSense approval is not guaranteed
"AdSense-ready" means the technical/site structure is prepared for review. Google decides approval based on its current policies, site quality, content originality, traffic/quality signals, consent requirements, and account status. Do not click your own ads or encourage others to click ads.

## Before production
1. Replace every `https://YOUR-DOMAIN.example` in `*.html`, `robots.txt`, and `sitemap.xml` with your real production domain.
2. Confirm that the Google Search Console verification token in the HTML head belongs to this property. If it does not, replace/remove it.
3. The included AdSense publisher ID is `pub-1968815211562572`. Confirm it is yours before deploying.
4. `ads.txt` is prefilled with the publisher line supplied for this project. Verify it in AdSense before launch.
5. Ad units are intentionally represented by labeled containers. The AdSense Auto Ads script is included, but Google may not serve ads until the site/account is eligible and approved. If you use manual ad units, replace the containers with your approved unit code.
6. For visitors in jurisdictions requiring consent, configure an appropriate consent solution before enabling personalized advertising. A simple custom banner is included for preference UX; it is **not represented as a Google-certified CMP**.
7. Review every page yourself for factual accuracy, originality, brand information, contact details, and current legal requirements before submitting to AdSense.
8. Add your real business/contact details and any required jurisdiction-specific legal notices.
9. Submit `sitemap.xml` in Google Search Console after deployment.

## Local preview
No build step is required. Open `index.html` directly for basic viewing, or run any static server.

## Vercel + GitHub
- Put all files at the repository root.
- Push to GitHub.
- Import the repository into Vercel.
- Framework preset: **Other** (or leave auto-detected).
- Build command: **leave empty**.
- Output directory: **.**
- Deploy.

## Site structure
- 100 HTML files total (99 public pages + 404.html) (including the homepage, app/about/help/legal pages, tools, and health-education guides).
- `search.html` searches `search-index.json`.
- `sitemap.html` is a human-readable sitemap.
- `sitemap.xml` is the XML sitemap for crawlers.
- `robots.txt` points crawlers to the XML sitemap.
- `ads.txt` declares the AdSense seller relationship.
- `vercel.json` adds basic security/privacy response headers.
- `404.html` provides a custom not-found experience.

## Health-content note
The educational pages intentionally avoid diagnosis, treatment instructions, or promises of medical outcomes. They direct readers to qualified healthcare professionals for individualized decisions and urgent care for emergencies.

## Source reference
The website branding/content was prepared around the uploaded GlucosePulse app source. The app source itself is not included in this website package.
