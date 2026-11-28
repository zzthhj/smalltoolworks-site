# smalltoolworks-site

Static website for **SmallToolWorks**. Pure HTML + CSS + a small amount of
vanilla JavaScript. No build step and no npm. `/go/<app>` is a Cloudflare
Pages Function: it sends each visitor to the App Store product page for their
own country, so the link is not hard-coded to one storefront.

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

## Product content — updated 11 October 2026

OmniPDF is positioned as batch PDF processing and reusable multi-step workflows,
with a complete toolkit and optional inspection. Processing and previews are
available in the app; exporting or sharing processed results requires in-app
purchase. Plans in current code include export credits, monthly, yearly and
lifetime access. Do not advertise an all-free or ad-supported model.

Sources: OmniPDF README, HomeView/HomeIntent, SubscriptionStore and the
10 October 2026 App Store metadata under AppStoreMetadata. Prices are not
hard-coded on the website. All five language versions, related cards, support,
About and privacy copy follow this model.

Country-aware `/go/<app>` Cloudflare Pages Functions are intentional and
approved. The site has no database or user accounts. Availability still depends
on each app and the visitor's App Store account; do not promise worldwide access.
Website privacy copy describes the country-based redirect.

Support and privacy share `rtx3070757@gmail.com`. Real product screenshots will
be added when supplied; no invented screenshots or empty placeholders are used.

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
- **OmniPDF** — batch processing and reusable workflows; local document
  processing; exports/sharing unlocked by in-app purchase; no in-app ads.

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
ColorAlmanac has a product page and a hosted privacy policy and is marked
coming soon, with no App Store listing yet. The catalogue excludes
FileReady and the Beijing residency app as requested. Planned ad-supported photo utility and ID-photo variants are
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

All eight app policies are hosted in full under `/privacy/<app>/` and the
localized privacy routes. Existing published translations are preserved, with
current storage, analytics and purchase clarifications for the first four apps.
NativeID and RentLog have no published Japanese policy; those routes explicitly
show the complete English text. Original GitHub URLs remain reference links. Storefront choices are explicit and independent of language;
US and China mainland links are labelled on localized product pages.

When adding an app, add its product page to every supported language, update
the cards, support and privacy links, and add reciprocal language links and
sitemap entries. Never advertise a fixed total number of apps.

Privacy-source imports must match the complete language heading exactly. Do not
select Simplified Chinese with a substring such as `中文`, because that also
matches `繁體中文`. Check reader-facing text and metadata for script mixing,
while preserving the native labels in the language selector.

## PressPDFly — 12 October 2026

Product and full privacy pages exist in all five website languages. The product
uses current single-export and lifetime purchases, not the alternate free/ad
metadata. Source: PressPDFly Store.swift, Analytics and current metadata folder.
Public Apple lookup for App ID 6819921721 returned no listing; the local ASC
plan records PREPARE_FOR_SUBMISSION. Website cards therefore say coming soon
and link to product details, with no download button until availability is
confirmed. Add the App Store route and button after release.

## JoinSplit PDF — 14 October 2026

Added product, support and privacy entries in all five website languages. Uses the current merge/split/organize features and successful-export credit model, with on-device files and optional saved task copies. The app is marked Coming soon until released; no public download button is shown yet. Country-aware routing /go/joinsplitpdf is configured with verified ASC app ID 6821798461 for launch.

Approved iPhone and actual iPad screenshot artwork is provided as local optimized WebP assets. Privacy copy reflects JoinSplit PDF’s EU Aptabase usage analytics, without advertising attribution. The older .workbuddy rich-page generator predates these additions; do not run it across the current site without migrating current content.

## JoinSplit PDF — 16 October 2026

Updated all five languages from Coming soon to Available now on home, product list and product detail pages. Product pages now offer an App Store download button through the existing country-aware /go/joinsplitpdf route (App ID 6821798461).

## SeeClear — version 1.49 preparation, 17 October 2026

Updated the five localized product, support and privacy pages for the non-renewing
1-Day Pass. It grants all Pro features for 24 hours from the verified purchase time;
restore does not restart the period. Pricing is taken from the app, not hard-coded.
Version-scoped wording does not claim that 1.49 has already shipped.

Replaced the migrated policy plus supplements with one current policy per language.
Calibration types/results/settings are excluded from analytics. Disclosed SDK metadata,
seconds, technical friction events, Apple attribution, retention and local storage.
Version 1.49 contains no AdMob SDK or third-party ads; advertising is deferred to version 1.50.
Source of truth: Eyen/SeeClear-Privacy-Policy.md and Eyen/docs/analytics-policy.md.
The existing app-ads.txt and all other app pages were preserved. These are local
preparation changes, not proof of deployment or App Store release.

## PixDim — 18 October 2026

Added product and full privacy pages in all five site languages, iPhone/iPad screenshot galleries, home/catalogue cards, support entries and localized footer links. PixDim is marked Coming soon; no public download button is shown. ASC app ID: 6822711253.

Images are processed locally; limited Aptabase EU analytics are disclosed in the privacy policy. Editing and preview are free; export uses a consumable single-result purchase or a non-consumable lifetime purchase. Prices are displayed in the app. Privacy disclosures cover permissions, local purchase records and result fingerprints, retention, Apple payments and support email. The existing developer support address is reused: rtx3070757@gmail.com. Terms use Apple’s standard EULA.

Prepared locally only; deployment and live URL availability must be verified separately.

## PixDim analytics — 18 October 2026

PixDim now integrates Aptabase EU for fixed operation and purchase outcome events. Updated all five PixDim privacy policies, product summaries and privacy index entries to disclose the SDK metadata, daily pseudonymous region derivation, retention and absence of a dedicated opt-out switch. No images, names, paths, image settings or transaction IDs are sent. No advertising SDK or attribution is added. Existing compact galleries and unrelated app content are preserved.

## MerchPic — 23 October 2026

Added product, support and privacy entries in all five website languages. MerchPic prepares real product photos on the device for Amazon, Shopify, Etsy, eBay, TikTok Shop, and a general preset, then exports JPEG sets. Photos are not uploaded. The current app has no account, no ads, and no in-app purchase. It is marked Coming soon; no public download button is shown because there is no verified App Store listing yet. Presets are described as preparation checks, not marketplace approval. Support uses rtx3070757@gmail.com. No screenshot gallery is included.

## PixDim — available 23 October 2026

Public Apple lookup for App ID 6822711253 returned the US listing PixDim: Resize & Compress. Updated all five languages from Coming soon to available on the home cards, product list and product pages. Product pages link to the country-aware /go/pixdim route. The China mainland lookup returned no listing, so visitors reported in mainland China are sent to the US listing; installation still depends on the Apple Account region.

## JobPacket — added 25 October 2026

JobPacket is a field-service job record for iPhone and iPad: photos by stage,
work performed, parts, issues, customer sign-off, then a frozen packet version
and a client PDF. It is listed as coming soon; there is no App Store listing
yet, so the page has no store button.

Facts that must stay identical across the app, the App Store listing, the ASC
privacy answers, `PrivacyInfo.xcprivacy`, the privacy page here and Support:

- Records, photos, audio, signatures and PDFs are stored on the device. No
  account, no cloud photo storage, no advertising, no tracking.
- The first two finalized Job Packets are free; Pro is a monthly/yearly
  subscription or a lifetime purchase handled by the App Store.
- Limited analytics go to Aptabase in the EU region (the key starts with
  `A-EU-`): fixed event categories and small count buckets only. No customer
  names, addresses, photo content, captions, notes, signatures or free text.
- Speech recognition and the optional writing help run on the device.
- Location is optional and only reaches the PDF when "Include location in
  report" is enabled.

Pages: `products/jobpacket/` and `privacy/jobpacket/` exist in English plus the
four localized trees. Support section anchor: `/support/#jobpacket`.

## PressPDFly — available 26 October 2026

Public Apple lookup for App ID 6819921721 returned the US listing
PressPDFly: PDF Compressor, version 1.01, released 25 October 2026.
Updated all five languages from Coming soon to available on the home cards,
product list and product pages. Product pages link to the country-aware
/go/presspdfly route. The China mainland lookup returned no listing, so
visitors reported in mainland China are sent to the US listing; installation
still depends on the Apple Account region.

## Portuguese (Brazil) — partial, added 26 October 2026

`/pt-br/products/jobpacket/` and `/pt-br/privacy/jobpacket/` are translated so the
pt-BR App Store listing can point at a Portuguese privacy policy. The rest of the
site has no Portuguese pages yet, so the pt-BR pages link back to English
products, support and about pages, and other languages' pages do not show a
Portuguese link. Extend app by app when translations are ready: add the page, the
`hreflang="pt-BR"` alternate and the `Português` language-bar entry.

## ScanVela — added 18 November 2026

ScanVela turns photos, scans and long screenshots into tidy PDFs: camera scan with automatic edge detection, photo/PDF import, page organizing with 1/2/4-up layouts, on-device book page flattening (CoreML), export as PDF / per-page images / one long stitched image, and target-size compression. Free tier: scanning, arranging and 200 DPI export with no watermark and no page limits — PDF export is never charged per page. Pro adds 300 DPI print-grade export and password-protected PDFs, unlocked with a single Pro export (consumable credit) or a one-time lifetime purchase; no subscription. Prices are shown in the app.

Privacy facts: everything happens on device; no account, no advertising, no analytics, no tracking; PrivacyInfo.xcprivacy declares no collected data types. Purchases run through Apple (StoreKit 2); unused export credits are stored in the device Keychain and survive reinstall. Support: rtx3070757@gmail.com.

Marked Coming soon: ASC app ID 6835025776 exists with state MISSING_METADATA and no public App Store listing, so pages show no download button. The country-aware /go/scanvela route is configured with that ASC app ID for launch. Product and privacy pages exist in all five site languages plus pt-BR product/privacy pages. Home cards, catalogue cards, support entries, privacy index, footers on all pages, sitemap and reciprocal hreflang were updated. While adding the entries, the malformed jobpacket hreflang URLs in the sitemap (missing slash after the domain) were repaired. Facts source: ScanVela source code (PurchaseStore.swift, CreditWallet.swift, PrivacyInfo.xcprivacy, project.pbxproj) and ASC records.

## JobPacket — available 28 November 2026

Public Apple lookup for App ID 6811745343 returned the US listing
**JobPacket: Quotes & Invoices**, version 1.0, released 25 November 2026, free
with in-app purchase, category Utilities. The store name now covers quotes and
invoices, so all six site languages were rewritten rather than just flipped from
Coming soon: the product pages describe quoting on site, documenting the work,
invoices and part payments with a PDF receipt for each, the photo report with
frozen versions, search of earlier visits, and backup / job-file handover.

Free tier and Pro wording follows the listing, not the earlier placeholder:
recording work, completing jobs, previewing documents, recording payments and
sharing individual payment receipts are free; Pro unlocks exporting, sharing and
printing quote, work report and invoice PDFs, and previously exported PDFs remain
available after Pro expires. Weekly, monthly and yearly subscriptions plus a
one-time lifetime purchase exist; monthly and yearly offer a 7-day trial to
eligible customers. The old "first two finalized Job Packets are free" card copy
was removed everywhere because it no longer matches the app.

Store routing: only the US territory is available in ASC
(`appAvailabilityV2` reports `USA` available and `CANNOT_SELL` elsewhere, and the
iTunes lookup returns a result only for `country=us`). `/go/jobpacket` therefore
uses `usOnly: true` in `functions/go/store.js`, which sends every visitor to the
single US listing instead of a per-country path that would 404. Each product page
carries a one-line note that the launch listing is on the United States store.

Privacy pages needed no content change: `privacy/jobpacket/` was already updated
on 11 November 2026 for quotes, invoices, payment and refund records and the
diagnostics categories. Only the privacy-index summaries were widened to mention
quotes, invoices and receipts.

While updating, the sitemap's jobpacket entries were repaired: 40 `hreflang`
URLs were missing the slash after the locale (`/zh-cnproducts/…`) and 50 more in
the ScanVela block repeated the locale (`/zh-cn/zh-cn/…`). Lastmod for the twelve
JobPacket URLs is 2026-11-28.

## ColorAlmanac — added 28 November 2026

幸运色历 / ColorAlmanac is a new SmallToolWorks app for iPhone and iPad, in
development and not submitted. It is marked Coming soon with no download button;
product and privacy pages exist in all five site languages
(`products/coloralmanac/`, `privacy/coloralmanac/`), with home and catalogue
cards, a support entry (`/support/#coloralmanac`), a privacy-index entry, footer
links on every page, reciprocal hreflang and sitemap entries. There is no
`/go/coloralmanac` route and no ASC app ID yet — add both at launch.

Product facts come from `DESIGN.md` and the app source: one personal color method
active at a time (Five Elements from the birth date by default, sun sign,
birthstone, Thai weekday colors, or the double-hour color), a future-moment
lookup (three hours ahead, 08:00 tomorrow, or any date and clock time), a 2–7 day
comparison and a month view, and a camera/photo finder that reports one tier of
the user's own method. Editing the profile is always free; the continuous
almanac, month view and finder need a valid trial or Pro. `PremiumAccess.swift`
records a three-day trial from first launch in the Keychain, so reinstalling does
not restart it; Pro is monthly, yearly or lifetime via StoreKit 2.

Privacy facts, from `AlmanacAnalytics.swift`, `AlmanacStore.swift` and
`PurchaseStore.swift`: preferences (birth date, method, language) live in
UserDefaults and never leave the device; camera only while the finder is open;
photos arrive through the system picker; reminders are local notifications; no
location, microphone or contacts; Aptabase EU key `A-EU-…` receives thirteen
fixed events with enumerated properties and no birth date, colors, photos or
free text; analytics start with the app and there is no in-app analytics switch,
which the policy states plainly. The policy is dated 2026-11-28 and says it
describes the app as prepared for release.

Icon: `assets/images/coloralmanac.png` is the 1024 px AppIcon resized to 256 px,
matching the other product icons.
