import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const dist=path.resolve('dist');
const files=fs.readdirSync(dist,{recursive:true}).filter(p=>String(p).endsWith('.html'));
const failures=[];
const titles=new Set(),descriptions=new Set();
let contentImages=0,schemas=0,links=0,indexable=0;
const value=(html,pattern)=>html.match(pattern)?.[1];
for(const rel of files){
 const html=fs.readFileSync(path.join(dist,rel),'utf8');
 const route=rel==='index.html'?'/':rel==='404.html'?'/404/':'/'+String(rel).replaceAll('\\','/').replace(/index\.html$/,'');
 const title=value(html,/<title>(.*?)<\/title>/s);
 const desc=value(html,/<meta name="description" content="([^"]*)"/);
 const canonical=value(html,/<link rel="canonical" href="([^"]*)"/);
 if(!title||titles.has(title))failures.push(route+' missing/duplicate title');titles.add(title);
 if(!desc||descriptions.has(desc))failures.push(route+' missing/duplicate description');descriptions.add(desc);
 if(canonical!=='https://dota-cheats--com.pages.dev'+route)failures.push(route+' canonical: '+canonical);
 const h1=(html.match(/<h1\b/g)||[]).length;
 if(h1!==1)failures.push(route+' has '+h1+' h1 headings');
 if(/undetected|fortnite|dotacheats\.com|\/guides\//i.test(html))failures.push(route+' residual content');
 if(!/<meta name="robots" content="noindex/.test(html))indexable++;
 for(const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){
  try{const data=JSON.parse(match[1]);schemas++;if(/"@type":"(?:AggregateRating|Review|DiscussionForumPosting)"|https:\/\/schema.org\/InStock/.test(JSON.stringify(data)))failures.push(route+' unsupported schema');}catch{failures.push(route+' invalid schema');}
 }
 const images=[...html.matchAll(/<img\b[^>]*src="([^"]*)"[^>]*>/g)].map(x=>x[1]).filter(x=>x!=='/logo.svg');
 contentImages+=images.length;
 if((route==='/'&&images.length!==3)||(route==='/products/dota-2-cheats/'&&images.length!==4)||(route==='/blog/'&&images.length!==4)||(route!=='/'&&route!=='/products/dota-2-cheats/'&&route!=='/blog/'&&images.length))failures.push(route+' unexpected content image count '+images.length);
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const raw=match[1];if(!raw.startsWith('/')||raw.startsWith('//'))continue;
  const target=raw.split(/[?#]/)[0];links++;
  const localTarget=target.replace(/^\/+/, '');
  const file=path.join(dist,localTarget === '' ? 'index.html' : localTarget.endsWith('/') ? localTarget+'index.html' : localTarget);
  if(!fs.existsSync(file))failures.push(route+' broken asset/link '+target);
 }
}
const sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
if(urls.length!==indexable)failures.push('Sitemap count '+urls.length+' vs '+indexable+' indexable pages');
for(const url of urls){if(!url.startsWith('https://dota-cheats--com.pages.dev/')||/reviews|guides|404|\/go\//.test(url))failures.push('Unexpected sitemap URL '+url);}
const result={pages:files.length,indexablePages:indexable,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,contentImages,jsonLdBlocks:schemas,checkedInternalReferences:links,sitemapUrls:urls.length,failures};
fs.mkdirSync('artifacts',{recursive:true});fs.writeFileSync('artifacts/site-validation.json',JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));assert.equal(failures.length,0,'Site validation failed');
