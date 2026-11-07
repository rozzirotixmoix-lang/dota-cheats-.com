export const PRIMARY_CHECKOUT_PATH = '/go/dota-2/';
export function checkoutPath(_product?: string) { return PRIMARY_CHECKOUT_PATH; }
export function checkoutForSlug(_slug: string) { return PRIMARY_CHECKOUT_PATH; }
export function resolveCheckoutHref(_href: string) { return PRIMARY_CHECKOUT_PATH; }
