import {forumPosts} from '../data/forum';
import {blogArticles} from '../data/blog';
const routes=['/','/products/dota-2-cheats/','/blog/','/forum/','/faq/','/support/','/about/','/privacy/','/terms/',...blogArticles.map(p=>'/blog/'+p.slug+'/'),...forumPosts.map(p=>'/forum/'+p.slug+'/')];
export function GET(){return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+routes.map(p=>'<url><loc>https://dota-cheats--com.pages.dev'+p+'</loc></url>').join('')+'</urlset>',{headers:{'Content-Type':'application/xml; charset=utf-8'}});}
