# Website fix-list implementation

Source: `website-fix-list-bigtradingjp.pdf`, 24 points. Inspected baseline:
`1220cb0fd91f8e0e5d8cd7945043b8ed7601d6f5` (18 November 2026).

| PDF items | Implementation |
| --- | --- |
| 1 | Excluded entirely following the owner's subsequent instruction: do not publish a secondhand dealer licence number. |
| 2 | Restored supplied representative Rikaz Mohamed, ¥10,000,000 capital, 12 employees, founding date and address. Removed unsupported sales/export counters. Bank names were not supplied in usable evidence and are not invented. |
| 3, 9, 18 | Correct registered English/Japanese names, postal address 498-0801 and Mie Prefecture; consistent contact/footer/profile. |
| 4–6 | Replaced marketplace boilerplate with bilingual inquiry-site privacy and terms. Removed fictional memberships, fees, lead generation and contradictory jurisdictions. Clearly displayed revision date; professional legal/native-language review remains recommended. |
| 7, 8, 15, 20 | Added /vehicles and query-based category filters, BrowserRouter, legacy hash-link conversion, page-change scroll reset, direct-route hosting fallback templates. Removed obsolete /vehicles banner. Sitemap now includes real routes only. |
| 10 | Mileage in km; performance mph values converted numerically to km/h, not relabelled. |
| 11–14 | Removed unsupported pricing promises, statistics and unrelated business claims; removed duplicate sales contacts, financing/test-drive wording. Inquiry form opens the visitor's email draft and explicitly does not claim delivery. |
| 16, 17, 19 | Machinery spelling, copyright spacing, removed placeholder social links, working product destinations. Existing logo's misspelled raster tagline is clipped from displayed navigation/footer; a corrected source logo is still desirable. |
| 21–23 | English grammar, Japanese footer/form subjects/content, appraisal icon and business wording corrected. |
| 24 | Removed misleading sports-car/Peugeot hero and page-header/banner imagery. Existing catalog images remain. Replacement verified company-stock hero photos were not provided; no stock-image provenance is invented. |

## Verification

- `npm run build`: PASS. Tailwind was aligned to v3.4.17 because the existing stylesheet and PostCSS configuration use v3; baseline v4 dependency prevented production builds.
- `npx tsc -b`: PASS; existing unused bindings cleaned up.
- `npm run lint`: zero errors, one existing React Fast Refresh export warning.
- `node --test tests/source-regression.cjs`: 5/5 PASS. These are source/configuration regression checks, not end-to-end tests.
- `git diff --check`: PASS.
- `tests/browser-smoke.cjs`: provided for real navigation, filter, language and runtime checks, but NOT passed in this cloud environment. Chromium launch was blocked by the environment's socket restriction, including an escalated attempt. No visual/browser success is claimed.

To run browser checks: start `npm run dev`, install Chromium with `npx playwright install chromium`, then run `node tests/browser-smoke.cjs`. Alternatively set `CHROMIUM_PATH` to an installed Chromium executable. Tests use only local pages and do not send inquiries.

## Hosting and remaining inputs

The Vite build includes Apache `.htaccess` and Netlify `_redirects`; Vercel fallback is in `vercel.json`. Use only the configuration applicable to the actual host. Existing static files must be served before SPA fallback. Test direct URL refresh and legacy links on the deployed host. No hosting deployment or live-server configuration was performed by this change.

Needed for full content sign-off: verified bank names if publishing them, verified actual-stock photography, corrected original logo artwork, and review of bilingual legal wording. No business licences, bank details, legal approvals or inventory availability are asserted without evidence.
