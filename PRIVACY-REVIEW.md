# Privacy review — 6 October 2026

Website edits only. No app source, GitHub policy repository or deployed site was changed.

## Contact

All four published policies and app support configuration use
`rtx3070757@gmail.com`. Website support and privacy mail links now use that address.

## Sources checked

Public GitHub Pages policies were fetched directly over HTTPS:

- OmniPDF: https://zzthhj.github.io/OmniPDF/ (31 August 2026)
- SeeClear: https://zzthhj.github.io/SeeClear-Privacy/ (5 September 2026)
- SizeFixer: https://zzthhj.github.io/SizeFixer/ (14 September 2026)
- NativeID: https://zzthhj.github.io/NativeID/ (6 September 2026)

Local source references:

- OmniPDF/OmniPDF/Models/AppSupportConfig.swift
- OmniPDF/OmniPDF/Services/AppAnalytics.swift
- OmniPDF/OmniPDF/Models/RecentFileStore.swift
- Eyen/SeeClear/Helpers/AppConstants.swift
- Eyen/SeeClear/Services/AppAnalytics.swift and AdAttribution.swift
- Eyen/SeeClear/Views/ColorVisionCheckView.swift
- SizeFixer/SizeFixer/AppReviewSupport.swift and AppLegalURLs.swift
- SizeFixer/SizeFixer/Analytics/AppAnalytics.swift and AppleAdsAttribution.swift
- NativeID/NativeID/Utilities/LegalURLs.swift
- NativeID/NativeID/Analytics/AppAnalytics.swift and AdAttribution.swift
- NativeID/NativeID/Model/IDPhotoEntity.swift

## Changes

Four app policies now describe Aptabase analytics, technical request data,
local processing/storage, purchases, permissions and support correspondence.
SeeClear, SizeFixer and NativeID policies include Apple Ads install attribution.
SeeClear includes fixed calibration-result and applied-mode categories found in
current code. NativeID describes locally retained original and prepared images;
OmniPDF describes managed recent-document copies and local file details.
Removed generic advertising-provider placeholder and unsupported assertions
about anonymous transaction identifiers, manual analytics submission, and never
reading metadata. Existing safety disclaimers are preserved. The website privacy
section now distinguishes browser requests handled by Cloudflare from app analytics.

## Remaining release differences

1. OmniPDF's requested website positioning says free tools / export ads. Current
   local code has paywall/purchase events and no advertising SDK; its live policy
   says no advertisements and describes optional purchases. The website policy
   follows the current implementation, so marketing and shipped release must be
   aligned before publishing. An ad-supported release needs a real provider disclosure.
2. SeeClear's live policy mentions no individual calibration answers but does not
   explicitly disclose the calibration-result and applied-mode categories in current
   code. Its offline/only-network-request wording also omits Apple attribution and
   Apple purchases. Website text avoids those absolute claims.
3. NativeID's live policy combines “100% offline / no data” wording with Aptabase
   analytics and Apple attribution. Website text distinguishes local photo processing
   from network analytics, attribution and purchases.

This is a static source review, not a network capture of the App Store binaries.
App Store Connect privacy answers were not inspected. Browser layout should be
rechecked after these text changes. README's earlier visual-testing claims were
not independently rerun in this review.
