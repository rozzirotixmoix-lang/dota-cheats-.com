export interface SiteImage {
  src: string;
  alt: string;
  label: string;
}

// Shared Home-slider and Blog-grid images. Replace these files without changing page code.
export const siteImages: SiteImage[] = [
  { src: '/images/slide-1.jpg', alt: 'Dota 2 gameplay during a team fight', label: 'Dota 2 gameplay' },
  { src: '/images/slide-2.jpg', alt: 'Dota 2 gameplay showing hero abilities in action', label: 'Dota 2 hero action' },
  { src: '/images/slide-3.jpg', alt: 'Dota 2 gameplay showing a map lane and hero units', label: 'Dota 2 map gameplay' },
];

export const HERO_SLIDE_DELAY = 3000;
