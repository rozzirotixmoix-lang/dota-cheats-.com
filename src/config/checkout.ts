export const PRIMARY_CHECKOUT_PATH = 'https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fdota-2';
export function checkoutPath(_product?: string) { return PRIMARY_CHECKOUT_PATH; }
export function checkoutForSlug(_slug: string) { return PRIMARY_CHECKOUT_PATH; }
export function resolveCheckoutHref(_href: string) { return PRIMARY_CHECKOUT_PATH; }
