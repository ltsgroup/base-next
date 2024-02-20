import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|vi|jp)/:path*']
};
