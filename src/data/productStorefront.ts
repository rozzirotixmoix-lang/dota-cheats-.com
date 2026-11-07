import type { IconName } from '../components/icons/types';

export type StorefrontProduct = {
  kind: 'featured' | 'utility';
  title: string;
  category: string;
  icon: IconName;
  description: string;
  features: string[];
  price: string;
  priceSuffix: string;
  lifetime?: string;
  link: string;
  image?: string;
  imageAlt?: string;
};

// The only product configuration used by the Products page.
export const storefrontProducts: StorefrontProduct[] = [
  {
    kind: 'featured',
    title: 'dota 2 cheats',
    category: 'Main product',
    icon: 'gamepad2',
    description: 'Hero ESP, ward ESP, minimap options, rune timers, auto combo, smart cast, orbwalker, and auto farm for Dota 2. Monthly ($35, 30 days) and lifetime ($150) at checkout.',
    features: ['Hero ESP', 'Ward ESP', 'Auto combo', 'Smart cast', 'Orbwalker', 'Auto farm'],
    price: '$35',
    priceSuffix: '/ month',
    lifetime: 'Lifetime $150',
    link: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fdota-2',
    image: '/images/showcase/dota-gameplay.webp',
  },
  {
    kind: 'utility',
    title: 'HWID spoofer',
    category: 'System utility',
    icon: 'settings',
    description: 'Designed to rewrite disk serials, MAC addresses, GPU IDs, and related fingerprints after a hardware flag, with trace cleanup bundled in one license.',
    features: ['Volume serial rotation', 'MAC rotation', 'GPU ID rotation', 'Trace cleanup included'],
    price: '$50',
    priceSuffix: '/ month',
    link: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fhwid-spoofer',
    image: '/images/product-hwid-spoofer.jpg',
    imageAlt: 'HWID spoofer menu interface',
  },
  {
    kind: 'utility',
    title: 'UGC',
    category: 'Account recovery',
    icon: 'mail',
    description: 'Unban & Governance Control (UGC) is designed to ship stored appeal templates and automated dispute filings for limited logins on gaming, social, and marketplace platforms.',
    features: ['Appeal templates', 'Dispute runners', 'Any platform', 'Gaming, social, marketplace'],
    price: '$35',
    priceSuffix: '/ month',
    link: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fugc',
    image: '/images/product-ugc.jpg',
    imageAlt: 'UGC menu interface',
  },
  {
    kind: 'utility',
    title: 'Skin Changer',
    category: 'Cosmetic',
    icon: 'palette',
    description: 'Compact client designed to paint premium weapon skins, outfits, and knife variants on your display across major supported titles.',
    features: ['Weapon skin presets', 'Outfit presets', 'Knife presets', 'Major title list'],
    price: '$35',
    priceSuffix: '/ month',
    link: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fskin-changer',
    image: '/images/product-skin-changer.jpg',
    imageAlt: 'Skin changer menu interface',
  },
];

export const featuredStorefrontProduct = storefrontProducts.find((product) => product.kind === 'featured')!;
export const utilityStorefrontProducts = storefrontProducts.filter((product) => product.kind === 'utility');
