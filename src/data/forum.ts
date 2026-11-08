import { staffForumDrafts } from './forumDrafts';

export interface ForumComment {author:string;age:string;score:number;body:string;replies?:ForumComment[];}
export interface ForumPost {slug:string;category:string;categoryTone:'purple'|'blue'|'green'|'orange';title:string;excerpt:string;author:string;age:string;commentsCount:number;upvotes:number;flair?:string;body:string[];comments:ForumComment[];sourceTitle?:string;sourcePath?:string;suggestedLinks?:{label:string;href:string}[];}
export const forumCategories=[{name:'Map & ESP',tone:'blue',icon:'eye'},{name:'Scripts',tone:'purple',icon:'crosshair'},{name:'Automation',tone:'orange',icon:'settings'},{name:'Cosmetics',tone:'green',icon:'layers'},{name:'Compatibility',tone:'blue',icon:'monitor'},{name:'Purchasing',tone:'purple',icon:'package'}] as const;
export const forumPosts:ForumPost[]=[
  {
    "slug": "map-overlay",
    "category": "Map & ESP",
    "categoryTone": "blue",
    "title": "Is a minimap hack showing live positions or last-seen markers?",
    "excerpt": "I want to know whether a listing describes live information or the last place someone was visible.",
    "author": "lane_reader",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "A feature label alone does not explain whether markers reflect live information or a player's last known location. That distinction changes how I would assess the display.",
      "A clear explanation should state which marker types appear, when they update, and whether each one can be hidden. Asking for a screenshot at a normal game resolution can also make the layout easier to judge.",
      "I would compare controls for marker size, label length, and visual contrast before relying on a preview. Specific documentation is more useful than a broad claim with no examples.",
      "It also helps to separate permanent information from temporary indicators. A listing can describe a marker clearly without implying that it offers a complete view of a match.",
      "Before deciding, I would check whether the interface explains range limits, update timing, and how individual categories can be turned off. Those details make a comparison more useful than a general feature label.",
      "A sensible preview should show the display during ordinary movement, not only a still image. That makes it easier to judge whether labels remain readable when several events happen at once.",
      "I would also look for a clear reset option. Being able to return to a simple layout after testing a setting is more useful than having a long list of controls with no explanation."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "riverwatch",
        "body": "That distinction matters more than the number of toggles. Ask for an explanation of the marker types before you buy.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "greyboots",
        "body": "I liked having fewer markers in a test layout. Once I turned everything on, the minimap became harder to read.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "pausemenu",
        "body": "I would pass on a listing that cannot explain where the information comes from. “Full vision” is too vague for me.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "hero-combo",
    "category": "Scripts",
    "categoryTone": "purple",
    "title": "Auto combo: what should I ask about hero support?",
    "excerpt": "I play a small character pool. A generic scripts label does not tell me whether my preferred abilities and items are covered.",
    "author": "tangent",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "I play a small character pool. A generic scripts label does not tell me whether my preferred abilities and items are covered.",
      "A useful comparison begins with a current support list and a short explanation of how ability order, item use, and manual input interact. That helps people decide whether a listed option fits the characters they actually play.",
      "Before comparing automation options, I would check whether controls can be interrupted, whether individual actions can be disabled, and whether the documentation names the game build it covers.",
      "A short example is often more informative than a broad compatibility claim. It should explain the expected input, the order of actions, and what happens when a player takes control manually.",
      "Patch notes and support documentation are worth checking as well. They can show whether an option has changed and whether the listed behavior applies to the current build.",
      "The description should distinguish optional assistance from actions that happen automatically. That distinction helps readers compare controls without assuming that every listed setting behaves in the same way.",
      "I would test one setting at a time in a private environment and keep manual control available. A clear explanation of limits and overrides matters more than a long feature list."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "spellqueue",
        "body": "Start with a character-by-character list. Item order and the ability to interrupt a sequence are separate questions.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "midlate",
        "body": "A long support list looked good until I noticed the abilities I use were not mentioned. Worth checking the details.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "copperlane",
        "body": "For me the useful part of a demo was seeing manual input take priority. I do not want to fight the controls.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "ward-controls",
    "category": "Map & ESP",
    "categoryTone": "blue",
    "title": "Ward ESP gets crowded — which display controls matter?",
    "excerpt": "Looking at overlay layouts, I keep coming back to readability. What would you check before choosing a display?",
    "author": "river_note",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "Looking at overlay layouts, I keep coming back to readability. What would you check before choosing a display?",
      "I would look for separate controls for marker type, range rings, label size, and contrast. A preview should show how the information reads during normal play rather than only in a close-up image.",
      "Resolution and interface scale matter too. A layout that appears clear on a large desktop monitor may become crowded on a laptop, so the available scaling options are worth confirming first."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "tinyfont",
        "body": "Separate switches for wards, sentries and range rings. One master switch is a pain.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "northcamp",
        "body": "I preferred simple colors and short labels in a mockup. More information was not automatically more useful.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "lantern",
        "body": "I was disappointed by tiny text on a laptop. Ask about scaling at your actual resolution.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "prediction",
    "category": "Scripts",
    "categoryTone": "purple",
    "title": "Why can a skillshot prediction still miss?",
    "excerpt": "I keep seeing aimbot in search results, but Dota has moving targets, cast points and projectile travel. Is that the same feature people mean?",
    "author": "cast_question",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "I keep seeing aimbot in search results, but Dota has moving targets, cast points and projectile travel. Is that the same feature people mean?"
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "castpoint",
        "body": "Usually they mean prediction or targeting assistance. It is not the same thing as shooter weapon aim, and the exact implementation matters.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "mudlane",
        "body": "Targets can change direction. I would be suspicious of any claim that every ability will land.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "ferry",
        "body": "Hero and ability coverage is what I would ask about. A feature name alone does not answer it.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "item-priority",
    "category": "Automation",
    "categoryTone": "orange",
    "title": "BKB, Hex and Orchid: do activators have separate priorities?",
    "excerpt": "I am comparing item automation descriptions. Can the user choose the order, or is it just a single on/off setting?",
    "author": "lane_reader",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "I am comparing item automation descriptions. Can the user choose the order, or is it just a single on/off setting?"
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "paperwand",
        "body": "That depends on the product. Ask about separate conditions for each item and whether manual use cancels a sequence.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "orangeboot",
        "body": "I liked the idea of per-item controls. A blanket activator would be too much for how I play.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "notyet",
        "body": "Some descriptions barely mention priorities. I would hold off until support gives a concrete answer.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "farm-control",
    "category": "Automation",
    "categoryTone": "orange",
    "title": "Auto farm bot or stack timer — what is actually automated?",
    "excerpt": "A few listings group these together. I only want to compare what each term means, especially manual override.",
    "author": "tangent",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "A few listings group these together. I only want to compare what each term means, especially manual override."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "smallcamp",
        "body": "A timer can just be a reminder. A farm bot implies actions. Do not assume one includes the other.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "backpack",
        "body": "The ability to stop an action immediately is my first question. Pathing claims come after that.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "creepwave",
        "body": "I liked a plain timer layout more than I expected. Automation would be a separate decision for me.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "cosmetic-visibility",
    "category": "Cosmetics",
    "categoryTone": "green",
    "title": "Does a skin changer give you tradable items?",
    "excerpt": "Trying to separate cosmetic previews from actual Steam inventory ownership before spending anything.",
    "author": "river_note",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "Trying to separate cosmetic previews from actual Steam inventory ownership before spending anything."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/skin-changer/",
    "comments": [
      {
        "author": "wardrobe",
        "body": "A local visual change does not establish ownership. Check the listing for what changes on your screen and what everyone else sees.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "bluecape",
        "body": "I enjoy trying cosmetic combinations in a preview. I would still want a supported-effects list.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "quietcarry",
        "body": "If I expected tradable items, I would be disappointed. That difference should be obvious before checkout.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "camera-size",
    "category": "Compatibility",
    "categoryTone": "blue",
    "title": "Zoom hack: will a wider camera make units too small?",
    "excerpt": "I play on a smaller display. More camera distance sounds useful, but I am concerned about text and unit size.",
    "author": "cast_question",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "I play on a smaller display. More camera distance sounds useful, but I am concerned about text and unit size."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "lowdpi",
        "body": "Yes, readability is worth checking. Ask about distance controls and a quick return to default.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "softreset",
        "body": "I liked comparing a small change against the normal view. A huge jump made it harder for me to follow fights.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "windowseat",
        "body": "Display mode support matters too. I would ask for the exact supported resolutions.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "update-errors",
    "category": "Compatibility",
    "categoryTone": "blue",
    "title": "Loader stopped after an update — what information does support need?",
    "excerpt": "What should a useful support request contain? I do not want to send a vague “it broke” message.",
    "author": "lane_reader",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "What should a useful support request contain? I do not want to send a vague “it broke” message."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "logbook",
        "body": "Exact error text, operating system and game build. Also note when the error first appeared.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "coldstart",
        "body": "Please do not post account passwords or license keys. Order details belong in the seller’s private support channel.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "slowqueue",
        "body": "Waiting without an explanation is frustrating. Ask whether maintenance affects your access time before you purchase.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "purchase-terms",
    "category": "Purchasing",
    "categoryTone": "purple",
    "title": "Monthly access: what should I check before paying?",
    "excerpt": "I can compare features, but the subscription details are less obvious. What are the questions people forget?",
    "author": "tangent",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "I can compare features, but the subscription details are less obvious. What are the questions people forget?"
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "readfirst",
        "body": "Renewal, cancellation and when the access timer starts. Get the actual terms from the seller.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "receiptbox",
        "body": "Device transfer limits caught my attention. I switch between two PCs, so that policy matters to me.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "afterlane",
        "body": "I am happy to pay when the details are clear. Missing refund and maintenance terms would stop me.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "device-reset",
    "category": "Compatibility",
    "categoryTone": "blue",
    "title": "Is an HWID reset the same as removing an account restriction?",
    "excerpt": "Both phrases appear in searches and I suspect they are being mixed up.",
    "author": "river_note",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "Both phrases appear in searches and I suspect they are being mixed up."
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "devicecheck",
        "body": "They are different questions. A license device reset changes access policy; it should not be described as restoring a restricted account.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "sparepc",
        "body": "I only needed to understand a license move. A separate hardware tool would not answer that question.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "plainread",
        "body": "Any promise of instant account restoration would make me leave. Ask exactly what the service changes.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  },
  {
    "slug": "settings-risk",
    "category": "Purchasing",
    "categoryTone": "purple",
    "title": "Can any settings guarantee that an account stays unrestricted?",
    "excerpt": "Some pages imply that a certain delay or overlay layout protects an account. Is there evidence for that?",
    "author": "cast_question",
    "age": "Nov 7, 2026",
    "commentsCount": 3,
    "upvotes": 0,
    "flair": "Illustrative discussion",
    "body": [
      "Some pages imply that a certain delay or overlay layout protects an account. Is there evidence for that?"
    ],
    "sourceTitle": "Related feature comparison",
    "sourcePath": "/products/dota-2-cheats/",
    "comments": [
      {
        "author": "clearanswer",
        "body": "No settings can provide that guarantee. Third-party modifications carry account risk.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "latebuy",
        "body": "I appreciate a page that says that plainly. Confident slogans do not help me make a decision.",
        "age": "Nov 7, 2026",
        "score": 0
      },
      {
        "author": "stillthinking",
        "body": "That is why I have not purchased. Clear feature documentation matters, but it does not remove the risk.",
        "age": "Nov 7, 2026",
        "score": 0
      }
    ]
  }
];
export const getForumPost=(slug:string)=>forumPosts.find(p=>p.slug===slug);

const staffCategoryTones: Record<string, ForumPost['categoryTone']> = {
  'General Discussion': 'purple',
  'Help & Support': 'blue',
  'Guides & Tutorials': 'green',
  'Technical Support': 'orange',
  'New Player Help': 'green',
};

forumPosts.push(...staffForumDrafts.map((draft) => ({
  slug: draft.slug,
  category: draft.category,
  categoryTone: staffCategoryTones[draft.category] ?? 'purple',
  title: draft.title,
  excerpt: draft.excerpt,
  author: 'Editorial draft',
  age: draft.publishedAt,
  commentsCount: draft.replies.length,
  upvotes: 0,
  flair: 'Staff-created draft',
  body: draft.body,
  comments: draft.replies.map((reply) => ({ author: reply.author, age: 'Editorial draft', score: 0, body: reply.body })),
  suggestedLinks: draft.suggestedLinks,
})));

for (const post of forumPosts) {
  post.sourceTitle = 'Products';
  post.sourcePath = '/products/dota-2-cheats/';
}
