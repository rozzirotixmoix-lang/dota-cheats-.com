export interface PageSeoEntry {title:string;description:string;}
export const PAGE_SEO:Record<string,PageSeoEntry>={
  "/": {
    "title": "Dota 2 Cheats | Scripts, ESP & Feature Comparisons",
    "description": "Compare Dota 2 cheats, ESP and aimbot terminology. Explore hero scripts, map overlays, cosmetics and questions to ask before purchase."
  },
  "/products/dota-2-cheats/": {
    "title": "Dota 2 Cheat Features | ESP, Scripts & Cosmetics",
    "description": "Compare Dota 2 cheats, ESP and aimbot features. Review scripts, map overlays, cosmetics and compatibility questions before choosing access."
  },
  "/forum/": {
    "title": "Forums – Feature & Purchase Discussions | Dota Cheats",
    "description": "Explore Dota 2 cheats, ESP and aimbot questions in illustrative forum discussions. Compare settings, compatibility and purchase considerations."
  },
  "/faq/": {
    "title": "Features FAQ | Access & Compatibility | Dota Cheats",
    "description": "Features FAQ covering terminology, compatibility, external purchases, and the practical details to confirm before visiting a seller's checkout page."
  },
  "/about/": {
    "title": "Resource – Dota 2 Feature Information | Dota Cheats",
    "description": "This independent resource explains Dota 2 feature terminology, affiliate purchase links, and clearly labeled discussion examples for visitors."
  },
  "/support/": {
    "title": "Dota 2 Help | Purchase & Compatibility Questions",
    "description": "Find help with Dota 2 feature comparisons and purchase questions. Prepare the right details for the external seller’s support team."
  },
  "/privacy/": {
    "title": "Privacy – Static Dota 2 Resource | Dota Cheats",
    "description": "Privacy information explains how this static Dota 2 resource handles browser preferences, affiliate purchase links, and external checkout pages."
  },
  "/terms/": {
    "title": "Site Terms & External Purchases | Dota Cheats",
    "description": "Understand the limits of feature comparisons, illustrative community content and purchases handled by an external seller."
  }
};
export function normalizeSeoPath(p:string){return p==='/'?p:p.replace(/\/?$/,'/');}
export function getPageSeoEntry(p:string){return PAGE_SEO[normalizeSeoPath(p)];}
