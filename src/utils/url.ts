import { configSeo } from "@/config/seo"

export const genLocaleUrl = (locale: string, url: string | string[] | undefined): string => {
  let currentUrl = locale;
  if (url && url[0] === '/') {
    url = url.toString().substring(1);
  }
  if (Array.isArray(url) && url.length > 0) {
    currentUrl = `${currentUrl}/${url.join('/')}`;
  } else if (url && url !== '') {
    currentUrl = `${currentUrl}/${url}`;
  }
  if (currentUrl && currentUrl[0] && currentUrl[0] === '/') {
    currentUrl = currentUrl.substring(1);
  }
  let returnUrl = `${configSeo.urlFrontEnd}/${currentUrl}`.replace(
    /([^:])(\/\/+)/g,
    '$1/'
  );
  const last = returnUrl[returnUrl.length - 1];
  if (last !== '/') {
    returnUrl = returnUrl + '/';
  }
  return returnUrl;
}
