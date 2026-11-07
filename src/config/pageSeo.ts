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
    "title": "Dota 2 Forums | Feature & Purchase Discussions",
    "description": "Explore Dota 2 cheats, ESP and aimbot questions in illustrative forum discussions. Compare settings, compatibility and purchase considerations."
  },
  "/faq/": {
    "title": "Dota 2 Cheats FAQ | Features, Access & Compatibility",
    "description": "Dota 2 cheats, ESP and aimbot questions answered. Understand feature terminology, external purchases and the details to confirm before checkout."
  },
  "/about/": {
    "title": "About This Dota 2 Feature Resource",
    "description": "Learn how this independent Dota 2 resource presents feature comparisons, affiliate purchase links and clearly labeled sample discussions."
  },
  "/support/": {
    "title": "Dota 2 Help | Purchase & Compatibility Questions",
    "description": "Find help with Dota 2 feature comparisons and purchase questions. Prepare the right details for the external seller’s support team."
  },
  "/privacy/": {
    "title": "Privacy | Dota Cheats",
    "description": "Read how this static Dota 2 resource uses browser preferences and external affiliate purchase links."
  },
  "/terms/": {
    "title": "Site Terms & External Purchases | Dota Cheats",
    "description": "Understand the limits of feature comparisons, illustrative community content and purchases handled by an external seller."
  }
};
export function normalizeSeoPath(p:string){return p==='/'?p:p.replace(/\/?$/,'/');}
export function getPageSeoEntry(p:string){return PAGE_SEO[normalizeSeoPath(p)];}
