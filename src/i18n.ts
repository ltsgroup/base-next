import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'vi', 'jp'];

type VLocaleString = {
	[K in typeof locales[number]]: string
}
export const localesString: VLocaleString = {
  en: 'English',
  vi: 'Việt Nam',
  jp: '日本語'
};
export const symbolLang: VLocaleString = {
  en: '/images/langs/en.svg',
  vi: '/images/langs/vi.svg',
  jp: '/images/langs/ja.svg'
};

export const codeLocale: VLocaleString = {
  en: 'en_US',
  vi: 'vi_VN',
  jp: 'ja_JP'
};

export const defaultLocale = 'en';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
