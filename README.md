# smalltoolworks-site

Static website for **SmallToolWorks**. Pure HTML + CSS + a small amount of
vanilla JavaScript. No build step, no npm, no framework, no backend.

## Deploying to Cloudflare Pages

This folder maps 1:1 onto the repository root. Upload its contents so that
`index.html` sits at the top level of the repo.

In Cloudflare Pages the project should be:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `.` |
| Production branch | `main` |

Then:

```
git commit -am "Update site" && git push
```

Cloudflare Pages redeploys automatically. Nothing to run manually afterwards.

## Paths

All internal links are root-relative (`/products/omnipdf/`), and the CSS/JS are
loaded from `/assets/`. This means the site works unchanged when deployed from
the repository root at the apex domain. It will **not** work if you preview it
from a subdirectory on a local file server — use a local static server rooted at
this folder instead:

```bash
cd smalltoolworks-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
index.html                Home
products/index.html       All apps
products/omnipdf/         OmniPDF
products/seeclear/        SeeClear
products/sizefixer/       SizeFixer
products/nativeid/        NativeID
support/index.html        Support
privacy/index.html        Privacy policy index
privacy/omnipdf/          OmniPDF privacy policy
privacy/seeclear/         SeeClear privacy policy
privacy/sizefixer/        SizeFixer privacy policy
privacy/nativeid/         NativeID privacy policy
about/index.html          About
404.html                  Not found page
assets/css/styles.css     All styling (single file, design tokens at the top)
assets/js/site.js         Mobile nav toggle only
assets/images/favicon.svg Favicon
robots.txt
sitemap.xml
```

Static files only; app icons are optimized local assets. Zero dependencies.

## Verification — 6 October 2026

- Parsed all 86 HTML files: structure and internal links/assets/anchors passed.
- All 85 public content pages have canonical, SEO and Open Graph metadata,
  reciprocal language alternatives and sitemap entries.
- Checked 24 localized pages at 375 px across Simplified Chinese, Traditional
  Chinese, Japanese and Spanish: no visible text/control horizontal overflow
  or failed images in the inspected pages.
- Checked Spanish product index at 820 px and Chinese home at desktop size.
- Clicked language switch on NativeID: Chinese to Japanese preserves the route.
- Japanese mobile menu opens and closes with Escape.

These are static and local browser checks, not a deployed Cloudflare audit or
independent native-speaker review. App Store storefront routing remains
controlled by Apple.

## Before you publish — three things to fix

These are marked with `TODO` / `PLACEHOLDER` comments in the HTML. They are
deliberate; the site is complete and usable, but these items should be settled
before launch.

1. **OmniPDF release model.** Product pages follow the requested free-tools /
   export-ad positioning. The local app and current GitHub policy instead have
   in-app purchases and no advertising SDK. The OmniPDF policy here describes
   that verified current implementation. Align the product pages and shipped
   release before publishing; do not invent an advertising provider.

Support and privacy contact is `rtx3070757@gmail.com`, verified against app
configuration and all four published GitHub policies on 6 October 2026.
See `PRIVACY-REVIEW.md` for source references and remaining policy differences.

## Consistency check

Because each app has its own privacy policy, the same facts must be stated the
same way in six places: the shipped app, the App Store listing, the ASC privacy
answers, `PrivacyInfo.xcprivacy`, the app's own privacy policy page here, and
what this site claims.

Specific claims made across the site, to keep aligned:

- **SeeClear** — red-green and blue-yellow color naming is always free; not a
  medical device; on-device processing.
- **SizeFixer** — redaction uses on-device detection; no image or face data
  uploaded; on-device processing.
- **NativeID** — prepares photos to size and layout requirements only; does not
  create, issue, reproduce or modify identity documents.
- **OmniPDF** — all tools free; a short ad may be shown when exporting; no
  subscription; local processing where possible.

## Adding a page

1. Create the folder and `index.html` (using `/products/xyz/` style paths so
   there is always an `index.html` — that is what makes trailing-slash URLs work
   on Cloudflare Pages).
2. Copy the `<head>` block from a similar page: `<title>`, meta description,
   canonical, Open Graph, favicon link, stylesheet.
3. Add the entry to `sitemap.xml`.
4. Link it from the footer of every page, which currently lists all products,
   About, Support and Privacy.

## Design tokens

All colours, spacing, radii, shadows and the font stack live as CSS custom
properties at the top of `assets/css/styles.css`. To restyle the site, change
those variables — you should not need to touch individual components.

Dark mode is intentionally not shipped. The brief calls for a light, neutral,
Apple-platform feel; adding a dark theme is a separate job and would need its own
pass over contrast in both themes.
## Expandable catalogue

Products are grouped by task, without a fixed public app count. RentLog,
LumaChoice, StillTap and CareerShot have product pages and direct links to their
published GitHub policies. All listed apps use verified Apple listing IDs.
The catalogue excludes JobPacket, MerchPic, FileReady and the Beijing residency
app as requested. Planned ad-supported photo utility and ID-photo variants are
not presented as released apps; add their final names, policies and listings
when ready.

## App Store link regions

On 6 October 2026, seven China mainland listing URLs were verified to resolve
to their matching app IDs. Regionless and US links redirected to China Today
from the current network. The site uses explicit CN listing URLs for those apps.
RentLog returns 404 in CN; its US link is labelled and its regional limitation
is disclosed. Storefront routing and installation depend on Apple and account region.

## Languages

English stays at `/`; Simplified Chinese at `/zh-cn/`, Traditional Chinese at
`/zh-tw/`, Japanese at `/ja/`, and Spanish at `/es/`. Each language has all
public content routes, with translated static HTML, shared local assets,
same-page language links, canonical URLs and reciprocal hreflang metadata.
Sitemap includes every localized page and its language alternatives. No
translation script, external service or build step is required in production.

Localized privacy detail pages are explicitly labelled summaries and link to
the existing full published GitHub policies. Original English full policies
remain in place. Storefront choices are explicit and independent of language;
US and China mainland links are labelled on localized product pages.

When adding an app, add its product page to every supported language, update
the cards, support and privacy links, and add reciprocal language links and
sitemap entries. Never advertise a fixed total number of apps.
