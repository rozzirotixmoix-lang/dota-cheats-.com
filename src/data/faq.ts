import type { IconName } from '../components/icons/types';
export type FaqTopic='all'|'plans'|'esp'|'scripts'|'safety'|'products'|'setup';
export interface SiteFaqItem {id:string;topic:FaqTopic;icon:IconName;q:string;a:string;aHtml?:string;scopes?:string[];}
export const siteFaqs:SiteFaqItem[]=[
  {
    "id": "question-1",
    "topic": "plans",
    "icon": "navFaq",
    "q": "What should I confirm before purchasing Dota 2 cheats?",
    "a": "Confirm the exact feature list, supported game build, operating system, access duration, renewal terms and refund conditions on the purchase page. This site explains feature categories; it does not verify current availability."
  },
  {
    "id": "question-2",
    "topic": "scripts",
    "icon": "navFaq",
    "q": "Are ESP, aimbot and auto combo the same thing?",
    "a": "No. ESP describes information overlays. In Dota 2, aimbot usually refers to skillshot targeting or prediction. Auto combo sequences actions. Read the hero and ability coverage for each feature separately."
  },
  {
    "id": "question-3",
    "topic": "products",
    "icon": "navFaq",
    "q": "Are these official Dota 2 cheat codes?",
    "a": "No. Private-lobby cheat codes are different from third-party software. This site discusses third-party feature categories and purchase questions."
  },
  {
    "id": "question-4",
    "topic": "safety",
    "icon": "navFaq",
    "q": "Can third-party software cause an account restriction?",
    "a": "Yes. Third-party modifications can lead to account restrictions. No settings, software label or status claim can guarantee an account will be protected."
  },
  {
    "id": "question-5",
    "topic": "setup",
    "icon": "navFaq",
    "q": "Which platforms and heroes are supported?",
    "a": "Check the current purchase listing for supported operating systems, game builds and individual heroes. We do not have a verified compatibility feed."
  },
  {
    "id": "question-6",
    "topic": "products",
    "icon": "navFaq",
    "q": "Does a skin changer add items to my Steam inventory?",
    "a": "Do not assume that it does. Local cosmetic previews and inventory ownership are different. Confirm precisely what changes and who can see it."
  },
  {
    "id": "question-7",
    "topic": "plans",
    "icon": "navFaq",
    "q": "What happens when I select a purchase button?",
    "a": "You leave this site for the supplied external Dota 2 purchase page. The seller handles pricing, payment, fulfillment and purchase support. Some links may earn a commission."
  },
  {
    "id": "question-8",
    "topic": "products",
    "icon": "navFaq",
    "q": "Are the forum conversations and reviews real customer submissions?",
    "a": "The current preview contains clearly labeled illustrative discussions and sample reviews. They demonstrate the layout and are not verified customer experiences."
  },
  {
    "id": "question-9",
    "topic": "setup",
    "icon": "navFaq",
    "q": "How do I handle an update or loader error?",
    "a": "Record the exact error, operating system and game build. Check the seller’s current instructions and contact purchase support. Do not assume an old configuration remains compatible after an update."
  },
  {
    "id": "question-10",
    "topic": "setup",
    "icon": "navFaq",
    "q": "What should I ask about HWID resets?",
    "a": "Ask how many devices a license allows, whether transfers are available and whether resets have fees or waiting periods. A device reset should not be described as reversing an account restriction."
  }
];
export const faqTopics=[{id:'all',label:'All questions'},{id:'plans',label:'Purchase'},{id:'scripts',label:'Scripts'},{id:'products',label:'Features'},{id:'safety',label:'Account risk'},{id:'setup',label:'Compatibility'}];
export const getLandingFaqs=()=>siteFaqs.slice(0,7);
export const getProductFaqs=(_slug:string,_kind?:string)=>siteFaqs.slice(0,7);

export const getAllFaqs=()=>siteFaqs;
