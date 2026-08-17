# NextFinds Daily

A static, dependency-free website for NextFinds Daily — a curated product
discovery site. No build step, no framework: plain HTML, CSS, and a small
vanilla JS file for a scroll-reveal effect.

## Structure

```
index.html      Home page
journal.html    Journal index (list of all articles)
what-makes-something-worth-logging.html   Journal article — Field Notes
desk-tech-worth-keeping.html              Journal article — Shelf A (Tech)
slowing-down-in-the-kitchen.html          Journal article — Shelf B (Home)
packing-light-without-getting-caught-out.html  Journal article — Shelf C (Outdoor)
the-art-of-the-small-gift.html            Journal article — Shelf D (Gifts)
privacy.html    Privacy Policy
terms.html      Terms of Use
styles.css      Shared stylesheet for all pages
script.js       Small progressive-enhancement script (scroll reveal)
favicon.svg     Site icon
robots.txt      Search engine crawl rules
sitemap.xml     Sitemap for search engines
```

## Deploying to GitHub Pages

1. Push all files in this folder to the root of your repository (or to
   `/docs` if you'd rather serve from that folder — just be consistent with
   step 2).
2. In the repo, go to **Settings → Pages**, and under **Build and
   deployment → Source** choose **Deploy from a branch**. Pick your branch
   (usually `main`) and the folder these files live in (`/root` or `/docs`).
3. Save. GitHub will publish the site, usually within a minute, at:
   - `https://<your-username>.github.io/<repo-name>/` for a normal
     project repo, or
   - `https://<your-username>.github.io/` if the repo is literally named
     `<your-username>.github.io`.
4. Optional — custom domain: add a `CNAME` file (just the domain name, no
   `https://`) to the same folder, then point your domain's DNS at GitHub
   Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

All internal links in this site use **relative paths** (`privacy.html`,
`styles.css`, etc.) on purpose, so it works correctly whether it's served
from the domain root or from a `/<repo-name>/` subpath. Don't change these
to absolute paths (`/privacy.html`) unless you're on a custom domain or a
`<username>.github.io` root repo — otherwise navigation will break on a
project-page URL.

## Before you publish — customization checklist

- [ ] Replace the contact email (`contact@nextfindsdaily.com`) in
      `index.html`, `privacy.html`, and `terms.html` — search for
      `CHANGE EMAIL HERE`.
- [ ] Replace the six sample "finds" in `index.html` (`#finds` section)
      with real products and real affiliate links — search for
      `SAMPLE ENTRIES`.
- [ ] Update `canonical`, `og:url`, and the URLs in `robots.txt` /
      `sitemap.xml` to your real domain once you have one.
- [ ] Add a real `og:image` (1200×630px works well) for social link
      previews.
- [ ] Fill in the governing-law placeholder in `terms.html`
      (`[your jurisdiction]`).
- [ ] Have a lawyer review `privacy.html` and `terms.html` before relying
      on them — they're solid general templates, not legal advice, and
      affiliate-disclosure / privacy rules vary by where your visitors and
      business are located (GDPR, CCPA, FTC, etc.).
- [ ] If you add analytics or an ad network later, update the
      "Cookies & Analytics" section in `privacy.html` to name it.

## Applying to Amazon Associates

This site now includes Amazon's required site-wide disclosure ("As an
Amazon Associate, I earn from qualifying purchases") in the Affiliate
Disclosure section, plus the standard participant statement in
`privacy.html` and `terms.html`. Each sample "View find" link also has a
small "Paid link" tag next to it.

It also now has five original Journal articles (linked from the nav and
from `journal.html`) covering each shelf plus a general "field notes"
piece — this is the part most Amazon applications get rejected on
("insufficient original content" / "site under construction"), so it's
worth keeping the Journal active rather than treating it as done:

- The five articles are dated Jul 6 – Aug 15, 2026. If you don't publish
  around those actual dates, update the dates in each article's
  `post-meta` block (and in `journal.html` / the homepage teaser cards)
  so they reflect when the content really went live — don't leave dates
  in the future relative to your actual publish date.
- Plan to add a new article every couple of weeks after launch. A site
  that stops publishing right after the Amazon application tends to read
  as "built for the application," which is the opposite of what you want
  reviewers to see.
- The 6 sample "finds" on the homepage (`SAMPLE ENTRIES` in `index.html`)
  still need real products and real affiliate links before you apply —
  see the checklist above.
- A live, reachable URL at the time you apply (GitHub Pages enabled,
  `https://muhamedryad.github.io/nextfinds/` returning the real site, not
  a 404).

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
