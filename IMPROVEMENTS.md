# Portfolio Improvements — Maryam Mueen

A prioritized design & UX review of the current portfolio. Priorities:
- **P0** = ship this week; blocks credibility or job outcomes
- **P1** = ship this month; meaningful lift in quality
- **P2** = nice-to-have; do after P0/P1 are done

---

## Top 5 Wins to Ship This Week

1. **Fill in real social links & polish contact data.** `linkedin` and `github` in `src/lib/data.ts` are literally `"#"`, and every project `repo`/`live` is `"#"`. Recruiters click these first — dead links kill trust instantly.
2. **Add a real photo (or a well-designed monogram).** The "Photo coming soon" placeholder in `src/components/Hero.tsx` is the single loudest signal that the site is unfinished.
3. **Rewrite the project descriptions with outcomes, metrics, and one "problem → approach → result" line each.** Right now every project reads like a coursework blurb; recruiters want impact.
4. **Add SEO essentials: OG image, favicon, canonical URL, sitemap/robots.** None exist today (see `src/app/layout.tsx` and `public/`). This is a 30-minute job with outsized reward.
5. **Ship at least 2 live demos.** Even one deployed project (a Django app on Vercel or Railway) with a working link separates you from ~80% of junior applicants.

---

## 1. Content & Storytelling

### 1.1 Replace placeholder social/repo links — P0
The `profile.linkedin`, `profile.github`, and every `project.repo` / `project.live` in `src/lib/data.ts` are `"#"`. Fix immediately; a broken LinkedIn link on a portfolio is a red flag.
*File:* `src/lib/data.ts`

### 1.2 Rewrite the hero tagline to be role-specific — P0
"Building AI-powered web experiences, one commit at a time" is generic. Try something like: "Final-year CS student building production Django + LLM apps. Looking for a junior developer role starting Summer 2026."
*File:* `src/lib/data.ts` (`profile.tagline`), `src/components/Hero.tsx`

### 1.3 Add a "problem / approach / result" block per project — P0
Each `Project` object should carry three short fields (or reshape `highlights` into a labeled trio). Recruiters skim; giving them a 3-line story per project raises comprehension massively.
*File:* `src/lib/data.ts`, `src/components/Projects.tsx`

### 1.4 Quantify everything you can — P0
Add numbers to `highlights`: dataset size, response latency, users served, LOC, test coverage, encryption bit-length, number of students tutored. "Fine-tuned an LLM on 12k tweets" beats "Fine-tuned an LLM on Twitter data."
*File:* `src/lib/data.ts`

### 1.5 Fix the availability copy — P1
"Open to On-Site · Remote · Hybrid" is fine, but pair it with a start date ("Available from June 2026") so recruiters know timing at a glance.
*File:* `src/lib/data.ts` (`profile.availability`)

### 1.6 Add a "role I'm looking for" sentence in About — P1
Explicitly say: "Looking for junior Python/Django or full-stack roles." Removes guesswork.
*File:* `src/lib/data.ts` (`about.bio2`)

### 1.7 Rename "Computer Scientist" to a hireable title — P1
"Computer Scientist" is unusual as a job-hunt label. Use "Software Developer", "Full-Stack Developer", or "Django + AI Developer" — words recruiters search for.
*File:* `src/lib/data.ts` (`profile.title`)

### 1.8 Turn the featured chess project into a real headline — P1
"Every DS implemented from scratch" is genuinely impressive but buried. Pull it up: "Custom hash tables, trees, and stacks — no library shortcuts." Lead with the differentiator.
*File:* `src/lib/data.ts` (chess project description)

### 1.9 Add tech-stack rationale per project — P2
One line: "Chose Django over Flask because of built-in auth for the school system." Shows you make engineering decisions, not just follow tutorials.
*File:* `src/lib/data.ts`

### 1.10 Add a "What I learned" note per project — P2
Junior recruiters love this — it signals reflection and growth mindset.
*File:* `src/lib/data.ts`, `src/components/Projects.tsx`

---

## 2. Visual Design

### 2.1 Add a subtle typographic scale — P1
Headings currently jump 4xl → 6xl → 7xl. Add a display font (e.g., "Sora" or "Space Grotesk") for headings while keeping Inter for body — a two-family pairing feels modern without gradients.
*Files:* `src/app/layout.tsx` (font link), `tailwind.config.ts` (fontFamily)

### 2.2 Tighten section vertical rhythm on mobile — P1
`Section` uses `py-20 md:py-28`. On small screens that's ~160px of dead space per section. Try `py-14 md:py-24`.
*File:* `src/components/Section.tsx`

### 2.3 Use a proper "eyebrow" divider — P2
Add a short accent line before the eyebrow text ("— About Me") for a designer-y touch that still respects the "no gradient headings" rule.
*File:* `src/components/Section.tsx`

### 2.4 Increase text contrast on pure-black background — P0
On `#000` the current `--fg-muted: 156 163 175` is fine but body copy `text-muted leading-relaxed` at `text-base` can look grey-on-black. WCAG-check every muted paragraph; consider lifting `--fg-muted` to `170 178 189` in dark mode.
*File:* `src/app/globals.css`

### 2.5 Replace the pink/blue Hero halo blur — P1
The `bg-gradient-to-tr from-brand-500/40 via-pink-500/30 to-blue-500/30` glow behind the photo clashes with the "solid, professional" direction. Swap for a single-hue accent glow (`from-brand-500/25`) or a soft radial noise texture.
*File:* `src/components/Hero.tsx`

### 2.6 Remove the PhotoPlaceholder gradient — P0
Same reason: the `from-brand-500/20 to-pink-500/20` gradient inside the avatar circle undermines the "solid professional" tone.
*File:* `src/components/Hero.tsx`

### 2.7 Card hover: consider a smaller lift — P2
`translateY(-4px)` + big `40px 0 -20px` shadow is a lot on stacked project cards. Try `-2px` + subtler shadow so hover feels considered, not bouncy.
*File:* `src/app/globals.css` (`.card:hover`)

### 2.8 Add a monochrome fallback favicon set — P0
No `favicon.ico`, no `apple-touch-icon`, no `site.webmanifest` in `public/`. A monogram "M" on a black square is enough and takes 10 minutes.
*Files:* `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png` (Next.js 16 file-based icons)

### 2.9 Skills categories: add proficiency signal — P2
Six equal categories flatten importance. Add a tiny "Primary / Comfortable / Familiar" tag per category, or bold the top 2 items per group.
*Files:* `src/lib/data.ts`, `src/components/Skills.tsx`

### 2.10 Skills — replace generic "Soft Skills" chips — P1
"Problem-solving, Debugging" is filler that hurts more than it helps. Delete this category or replace with concrete things like "Code review, Technical writing, Mentoring".
*File:* `src/lib/data.ts`

### 2.11 Use a single, restrained accent — P2
Purple works, but on pure black the accent looks slightly neon. Consider `#8b5cf6` → a slightly desaturated indigo like `#7c6cf0` for a more editorial feel in dark mode.
*File:* `src/app/globals.css` (`.dark { --accent }`)

### 2.12 Give project cards visual variance — P2
Every project uses the same left-image-right-text card. For a "featured" project consider a full-bleed hero card at the top of the Projects list.
*File:* `src/components/Projects.tsx`

---

## 3. UX & Interaction

### 3.1 Add prefers-reduced-motion handling — P0
`animate-fade-up`, `animate-float`, and Framer-style transitions run unconditionally. Wrap animations in `@media (prefers-reduced-motion: no-preference)` in `globals.css` for accessibility compliance.
*File:* `src/app/globals.css`, `tailwind.config.ts`

### 3.2 Add scroll-margin-top for anchor links — P0
The fixed navbar (`h-16` = 64px) overlaps section headings when jumping to `#about` etc. Add `scroll-margin-top: 5rem` to every section (either in `Section.tsx` or globally).
*File:* `src/components/Section.tsx` (or `src/app/globals.css`)

### 3.3 Keyboard-navigable project carousel — P1
The thumbnail buttons work but don't support arrow keys or wrap-around. Add `onKeyDown` for ArrowLeft/ArrowRight for a11y.
*File:* `src/components/Projects.tsx`

### 3.4 Add visible focus rings — P0
Buttons and links use `hover:` states but no explicit `focus-visible:` styles. Keyboard users see nothing. Add `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2` on all interactive elements.
*Files:* `src/components/Navbar.tsx`, `src/components/Hero.tsx`, `src/components/Projects.tsx`, `src/components/Contact.tsx`

### 3.5 Announce active section change to screen readers — P2
`IntersectionObserver` updates `active` visually but screen readers get nothing. Add `aria-current="page"` on the active nav link.
*File:* `src/components/Navbar.tsx`

### 3.6 Mobile menu should trap focus & close on Esc — P1
Currently the open menu doesn't trap focus or close on Escape. Small addition, big a11y win.
*File:* `src/components/Navbar.tsx`

### 3.7 Add a "back to top" button — P2
After scrolling past Projects, a floating "↑" pill in the corner (fade in after 400px scroll) is standard and useful.
*File:* new `src/components/BackToTop.tsx`, mount in `src/app/layout.tsx`

### 3.8 Auto-advance project carousel is missing — P2
Consider a slow 6s auto-advance with pause-on-hover for the featured project only. Signals polish.
*File:* `src/components/Projects.tsx`

### 3.9 Image alt text is generic — P1
`alt={\`${project.title} screenshot ${active + 1}\`}` is technically compliant but uninformative. Store per-image captions in `data.ts` and use them as alt.
*Files:* `src/lib/data.ts`, `src/components/Projects.tsx`

### 3.10 Copy-to-clipboard for email — P2
Add a small "copy" icon next to the email in Contact and Footer. Recruiters on desktop appreciate this over a mailto: link that opens Outlook.
*File:* `src/components/Contact.tsx`

### 3.11 Fix the "Open menu" aria-label when open — P2
Button always says `aria-label="Open menu"`, even when it shows a close icon. Toggle to `"Close menu"` when `open`.
*File:* `src/components/Navbar.tsx`

### 3.12 Add hover state to Nav underline for non-active items — P2
Currently only the active item gets a visual line. A very thin `hover:` underline on the others provides better affordance.
*File:* `src/components/Navbar.tsx`

### 3.13 Confirm dark-mode toggle persists correctly — P1
Verify `next-themes` config in `ThemeProvider.tsx` uses `attribute="class"` and `defaultTheme="dark"` (or whichever you prefer). Also add `disableTransitionOnChange` to prevent the 300ms body transition flashing on first paint.
*File:* `src/components/ThemeProvider.tsx`

---

## 4. SEO / Performance

### 4.1 Add an OG image — P0
No `openGraph.images` is set in `layout.tsx`. When shared on LinkedIn/WhatsApp/Slack, the preview will be blank. Generate a 1200×630 image with your name, tagline, and photo. Save as `public/og.png` and reference in metadata.
*File:* `src/app/layout.tsx`

### 4.2 Add favicon set — P0
See 2.8. Next.js 16 auto-detects `src/app/icon.png` and `src/app/apple-icon.png`.
*Files:* `src/app/icon.png`, `src/app/apple-icon.png`

### 4.3 Add `metadataBase` and canonical URL — P0
Without `metadataBase: new URL('https://your-domain.com')` in `layout.tsx`, OG image URLs won't resolve.
*File:* `src/app/layout.tsx`

### 4.4 Add Twitter card metadata — P1
`twitter: { card: 'summary_large_image', ... }` in `Metadata`. Free extra reach.
*File:* `src/app/layout.tsx`

### 4.5 Add JSON-LD Person schema — P1
Structured data helps you show up in Google's rich results. Add a `<script type="application/ld+json">` with schema.org/Person.
*File:* `src/app/layout.tsx`

### 4.6 Generate sitemap.xml and robots.txt — P1
Next.js supports `src/app/sitemap.ts` and `src/app/robots.ts` natively. 10-line files.
*Files:* new `src/app/sitemap.ts`, new `src/app/robots.ts`

### 4.7 Use `next/font` instead of `<link>` tags — P1
`layout.tsx` loads Inter via `<link href="fonts.googleapis.com">`. Switch to `next/font/google` for automatic subsetting, zero layout shift, and no third-party request.
*File:* `src/app/layout.tsx`

### 4.8 Convert project screenshots to WebP/AVIF — P1
`.jpeg` files under `public/projects/` are shipped as-is. Convert to `.webp` (or let Next.js Image do it, but pre-convert saves build time).
*Files:* everything under `public/projects/`

### 4.9 Add `priority` to Hero photo — P1
When you add the real hero photo `<Image>`, mark it `priority` so it's a LCP candidate.
*File:* `src/components/Hero.tsx`

### 4.10 Add `sizes` attribute to all `<Image>` — P2
Already done on project images. Double-check any future images.
*File:* `src/components/Projects.tsx` (audit only)

### 4.11 Cache-bust the resume PDF version — P2
Rename to `Resume_Maryam_2026.pdf` and update `resumeUrl` on every revision so recruiters never see stale downloads.
*File:* `public/`, `src/lib/data.ts`

### 4.12 Add a `theme-color` meta tag — P2
`themeColor: '#000000'` (dark) or split by media query. Affects mobile browser chrome.
*File:* `src/app/layout.tsx`

### 4.13 Preload the hero image — P2
`<link rel="preload" as="image" href="/maryam.jpg">` shaves LCP.
*File:* `src/app/layout.tsx`

### 4.14 Compress the resume PDF — P2
Junior-hire recruiters often download resumes on mobile — a ≤400 KB PDF opens instantly.
*File:* `public/Resume_Maryam.pdf`

---

## 5. Trust Signals

### 5.1 Add GPA / CGPA if strong — P0
Nowhere on the site does UET-Lahore's GPA appear. If it's above 3.3/4.0, put it in Education. UET is well-known; a strong GPA is a fast credibility win.
*File:* `src/lib/data.ts` (`education`)

### 5.2 Add honors / awards — P1
Dean's list, merit scholarships, hackathon placings, coursework awards — even one line matters.
*File:* `src/lib/data.ts`, `src/components/Experience.tsx`

### 5.3 Add certifications — P1
Any Coursera, DeepLearning.AI, Google, AWS, or Kaggle certificates. Show badges or a linked list.
*Files:* `src/lib/data.ts` (new `certifications` array), new sub-section in `src/components/Experience.tsx`

### 5.4 Add a TA testimonial from a professor — P1
Two sentences from Mr. Laiq or Ms. Ayesha ("Maryam mentored 40+ students…") on the About or Experience section is gold for a junior applicant.
*Files:* `src/lib/data.ts`, `src/components/About.tsx` or new `Testimonials.tsx`

### 5.5 Show open-source or Kaggle contributions — P1
Even a small "Public GitHub activity" heatmap or a link to your Kaggle profile signals continuous learning.
*Files:* `src/lib/data.ts`, `src/components/About.tsx`

### 5.6 Show LeetCode / HackerRank rank (if any) — P2
A LeetCode badge (200+ problems solved) is a strong junior-dev signal. Skip if numbers are low.
*File:* `src/components/About.tsx`

### 5.7 Add a "recommended by" mini-section — P2
Even a LinkedIn recommendation blockquote next to Experience adds warmth.
*File:* new `src/components/Testimonials.tsx`

### 5.8 Show tech-stack logos, not just text chips — P2
Small monochrome tech logos (Simple Icons) render trust faster than text. Keep them subtle and grey to match "solid professional".
*File:* `src/components/Skills.tsx`

### 5.9 Add "Featured in" or hackathon logos — P2
If any project or team you worked with had press, competition, or org affiliation, show the logo.
*Files:* `src/lib/data.ts`, new component

---

## 6. Missing Sections Worth Adding

### 6.1 "Currently learning / building" strip — P1
A single-line marquee or list under Hero: "Currently: React, TypeScript, System Design." Signals momentum — recruiters love active learners.
*Files:* `src/lib/data.ts`, new `src/components/NowLearning.tsx`

### 6.2 Case-study page for the FYP (Dark Prompt) — P0
The Final Year Project deserves its own `/projects/dark-prompt` page with architecture diagram, screenshots, tradeoffs, and lessons. Even one deep case study transforms a portfolio.
*Files:* new `src/app/projects/[slug]/page.tsx`, plus content in `src/lib/data.ts`

### 6.3 Blog / Writing section (even 1 post) — P1
One well-written technical post ("How I fine-tuned a small LLM on 12k tweets") shows communication ability. Use Next.js MDX or a `/blog` route.
*Files:* new `src/app/blog/`

### 6.4 Achievements / Timeline section — P1
A vertical "milestones" list: won X, published Y, spoke at Z. Distinct from Experience.
*Files:* `src/lib/data.ts`, new `src/components/Achievements.tsx`

### 6.5 "How I work" or values snippet — P2
3 short bullets: "I write tests", "I read the source", "I document as I go". Shows engineering maturity.
*File:* `src/components/About.tsx`

### 6.6 Uses / stack page — P2
`/uses` (VSCode setup, favorite libs, hardware). Popular in dev portfolios, easy signal of authenticity.
*File:* new `src/app/uses/page.tsx`

### 6.7 Reading / bookshelf snippet — P2
Skip if space-constrained, but "Currently reading: Designing Data-Intensive Applications" tells a story.

### 6.8 "Talks / teaching" section — P1
You have TA experience — pull it into its own card near the top of Experience, not buried mid-list.
*File:* `src/components/Experience.tsx`

---

## 7. Deploy & Polish

### 7.1 Buy a domain — P0
`maryammueen.dev` or `.com`. `.vercel.app` on a resume looks like a school project.
*File:* n/a (registrar)

### 7.2 Add a working contact form — P0
Contact section is only mailto/tel links. Add a form (Formspree, Resend, or a Next.js API route + Resend/SendGrid) so mobile users without a mail client can reach you.
*Files:* `src/components/Contact.tsx`, new `src/app/api/contact/route.ts`

### 7.3 Add basic analytics — P0
Plausible, Umami, or Vercel Web Analytics. Track which projects get clicked, which section people bounce on. Data-driven iteration.
*File:* `src/app/layout.tsx`

### 7.4 Inline resume viewer — P1
Instead of forcing a download, embed the PDF (`<object>` or PDF.js) in a modal or on a `/resume` page. Recruiters read in-browser more than they download.
*Files:* new `src/app/resume/page.tsx` or a modal in `src/components/Hero.tsx`

### 7.5 Add a 404 page — P1
Custom `not-found.tsx` with your voice and a link home. Small polish that says "the site is finished".
*File:* new `src/app/not-found.tsx`

### 7.6 Add loading skeletons for images — P2
`blurDataURL` on `<Image>` for project screenshots — prevents pop-in.
*File:* `src/components/Projects.tsx`

### 7.7 Lighthouse pass — P1
Target 95+ across the board. Common wins: font display swap, `sizes` on all images, remove render-blocking CSS.
*Files:* multiple

### 7.8 Add error boundary + logging — P2
`error.tsx` in `src/app/` for graceful failure + Sentry (free tier) so you find out when it breaks in prod.
*File:* new `src/app/error.tsx`

### 7.9 Test on real Android + iPhone — P0
Don't ship without testing an actual phone. The hero photo section, mobile menu, and carousel are the highest-risk areas.
*File:* n/a (device test)

### 7.10 Add print stylesheet — P2
Some recruiters print portfolios. `@media print` rules that hide the nav and force serif text look impressively considered.
*File:* `src/app/globals.css`

### 7.11 Deploy previews per PR — P2
If using Vercel: enable preview deployments and share the URL when applying — shows deploy discipline.

### 7.12 Set up a small "hire me" mailto pre-fill — P2
`mailto:you@x.com?subject=Junior%20role%20at%20[Company]&body=Hi%20Maryam,` — reduces friction.
*File:* `src/components/Contact.tsx`

### 7.13 Add `noindex` on any WIP pages — P2
Once you add /blog, keep drafts out of Google via `robots` metadata per-page.

### 7.14 Add a security.txt — P2
`public/.well-known/security.txt` with contact info. Nerd points; some recruiters notice.

### 7.15 Rate-limit the contact form endpoint — P1
If you add an API route (7.2), add a simple in-memory or Upstash rate limit to prevent spam.
*File:* `src/app/api/contact/route.ts`

---

## Quick reference: files most likely to change

| File | Suggestions touching it |
|---|---|
| `src/lib/data.ts` | 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 2.10, 3.9, 5.1, 5.2, 5.3, 5.5, 6.1, 6.4 |
| `src/app/layout.tsx` | 4.1, 4.3, 4.4, 4.5, 4.7, 4.12, 4.13, 7.3 |
| `src/components/Hero.tsx` | 1.2, 2.5, 2.6, 3.4, 4.9, 7.4 |
| `src/components/Projects.tsx` | 1.3, 2.12, 3.3, 3.4, 3.8, 3.9, 7.6 |
| `src/components/Navbar.tsx` | 3.4, 3.5, 3.6, 3.11, 3.12 |
| `src/app/globals.css` | 2.4, 2.7, 2.11, 3.1, 3.2, 7.10 |
| `src/components/Section.tsx` | 2.2, 2.3, 3.2 |
| `src/components/Contact.tsx` | 3.4, 3.10, 7.2, 7.12 |
| `src/components/Experience.tsx` | 5.2, 5.3, 6.8 |

---

## Suggested order of attack

**Week 1 (P0 sprint):** 1.1, 1.2, 1.3, 1.4, 2.4, 2.6, 2.8, 3.1, 3.2, 3.4, 4.1, 4.2, 4.3, 5.1, 6.2, 7.1, 7.2, 7.3, 7.9

**Week 2–3 (P1 sprint):** 1.5–1.8, 2.1, 2.2, 2.5, 2.10, 3.3, 3.6, 3.9, 3.13, 4.4–4.9, 5.2–5.5, 6.1, 6.3, 6.4, 6.8, 7.4, 7.5, 7.7, 7.15

**Later (P2 backlog):** everything else — pick opportunistically.
