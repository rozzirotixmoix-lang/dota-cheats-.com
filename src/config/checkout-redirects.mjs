const destination = "https://zadeyo.com/go/MOIX?to=%2Fproducts%2Fdota-2";
export const CHECKOUT_URLS = { dota2: destination };
export const CHECKOUT_PATH_REDIRECTS = new Map([['/go/dota-2', destination], ['/go/dota-2/', destination]]);
export function resolveCheckoutPathRedirect(pathname) { return CHECKOUT_PATH_REDIRECTS.get(pathname) ?? null; }
