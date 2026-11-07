import type { SitemapItem } from '@astrojs/sitemap';
export function sitemapSerialize(item:SitemapItem):SitemapItem|undefined { const p=new URL(item.url).pathname; if(p.startsWith('/go/')||p.startsWith('/reviews/')||p.includes('404'))return undefined; return item; }
