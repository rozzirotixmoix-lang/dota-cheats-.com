import type { IconName } from '../components/icons/types';

export interface StoreProduct {
  title: string;
  category: string;
  categoryIcon: IconName;
  features: [string, string, string, string];
  buyUrl: string;
  detailsUrl: string;
}

export const storeProducts: StoreProduct[] = [
  {
    title: 'HWID Spoofer',
    category: 'Spoofer',
    categoryIcon: 'shield',
    features: [
      'Hardware ID change options',
      'Disk and MAC address spoofing',
      'Trace and cache cleanup',
      'One-click spoof and restore',
    ],
    buyUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fhwid-spoofer',
    detailsUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fhwid-spoofer',
  },
  {
    title: 'UGC',
    category: 'UGC',
    categoryIcon: 'package',
    features: [
      'Item and asset options',
      'Quick load and apply controls',
      'Saved preset support',
      'Simple menu and hotkeys',
    ],
    buyUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fugc',
    detailsUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fugc',
  },
  {
    title: 'Skin Changer',
    category: 'Changer',
    categoryIcon: 'layers',
    features: [
      'Skin and model selection',
      'Saved loadout presets',
      'Inventory preview display',
      'Hotkey toggle options',
    ],
    buyUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fskin-changer',
    detailsUrl: 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fskin-changer',
  },
];
