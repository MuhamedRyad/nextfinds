# NextFinds Daily

A static, dependency-free website for NextFinds Daily — a curated product
discovery site. No build step, no framework: plain HTML, CSS, and a small
vanilla JS file for a scroll-reveal effect.

## Structure

```
index.html      Home page
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

That covers the *legal/disclosure* side. The part most applications get
rejected on is **content depth** — Amazon (and most guides on the 2026
program) look for real, original content, not a single landing page with
placeholder cards. In practice that usually means:

- Real product picks instead of the 6 sample entries (`SAMPLE ENTRIES` in
  `index.html`), each with a genuine paragraph explaining why it's worth
  buying — not just a one-line blurb.
- Ideally more written content than one page — a handful of short
  buying-guide or review posts (several sources suggest ~10 pieces) shows
  Amazon reviewers this is a real, active site and not "under
  construction."
- A live, reachable URL at the time you apply (GitHub Pages enabled,
  `https://muhamedryad.github.io/nextfinds/` returning the real site, not
  a 404).

None of this needs to happen before your GitHub push, but it should
happen before you submit the Amazon Associates application — "insufficient
original content" and "site under construction" are two of the most common
rejection reasons.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
