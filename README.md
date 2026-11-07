# Dota Cheats — local project

An Astro static site using the existing template components and layout.

## Run locally

- Install: npm ci
- Develop: npm run dev -- --host 127.0.0.1
- Production build: npm run build
- Validate every generated page: npm run validate
- Serve the production build: npm start (port 3000)
- Recreate image sizes: npm run optimize:images

The canonical domain is https://dota-cheats.com. The build generates sitemap.xml and does not notify search engines or publish anything. The Node production server and Astro development middleware handle the purchase redirect. Static-only hosting needs an equivalent server redirect for /go/dota-2/.

## Content boundaries

Six feature comparison pages explain the supplied keyword categories. Product availability, exact inclusion and pricing need confirmation from the seller; the supplied product page could not be accessed during implementation. Purchase buttons use one server-side destination.

The forums contain 12 illustrative discussions with three replies each. The 104 review examples are fictional and explicitly labeled. Review pages are paginated (12 per page) and noindex; they have no review or rating schema. Replace sample content with permissioned customer submissions before presenting it as real customer feedback. This static preview does not accept posts or orders.

# dota-cheats-.com

Four supplied image identities appear only on the homepage. The Dota gameplay image is used for Open Graph. Three menu screenshots are labeled as references from another game, as requested. Responsive size variants are uncropped. The site currently supports English, matching the template localization architecture.

## Verification

Reports are in artifacts/. The validation script checks all generated HTML pages, unique metadata, canonicals, image placement, schema JSON, sitemap coverage and internal references. Lighthouse reports describe the local production homepage; scores are lab measurements, not guarantees for deployed hosting.
