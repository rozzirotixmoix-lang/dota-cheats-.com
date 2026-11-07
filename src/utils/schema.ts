import type { FaqItem } from '../i18n/types';
import {SITE_ORIGIN,canonicalUrl} from '../config/seo';
export interface BreadcrumbItem {name:string;path:string;}
export function breadcrumbSchema(items:BreadcrumbItem[]){return {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:items.map((x,i)=>({'@type':'ListItem',position:i+1,name:x.name,item:canonicalUrl(x.path)}))};}
export function websiteSchema(){return {'@context':'https://schema.org','@type':'WebSite',name:'Dota Cheats',url:SITE_ORIGIN+'/',inLanguage:'en',description:'Dota 2 feature comparisons and purchase questions.'};}
export function organizationSchema(){return {'@context':'https://schema.org','@type':'Organization',name:'Dota Cheats',url:SITE_ORIGIN+'/',logo:SITE_ORIGIN+'/logo.svg'};}
export function webPageSchema(input:{name:string;description:string;url:string}){return {'@context':'https://schema.org','@type':'WebPage',name:input.name,description:input.description,url:canonicalUrl(input.url),inLanguage:'en',isPartOf:{'@type':'WebSite',name:'Dota Cheats',url:SITE_ORIGIN+'/'}};}
export function collectionPageSchema(input:{name:string;description:string;url:string}){return {...webPageSchema(input),'@type':'CollectionPage'};}
export function articleSchema(input:{headline:string;description:string;url:string;datePublished:string}){return {'@context':'https://schema.org','@type':'Article',headline:input.headline,description:input.description,url:canonicalUrl(input.url),datePublished:input.datePublished,inLanguage:'en',publisher:{'@type':'Organization',name:'Dota Cheats',url:SITE_ORIGIN+'/'}};}
export function itemListSchema(items:{name:string;url:string}[]){return {'@context':'https://schema.org','@type':'ItemList',itemListElement:items.map((x,i)=>({'@type':'ListItem',position:i+1,name:x.name,url:canonicalUrl(x.url)}))};}
export function faqPageSchema(items:FaqItem[]){return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:items.map(x=>({'@type':'Question',name:x.q,acceptedAnswer:{'@type':'Answer',text:x.a}}))};}
