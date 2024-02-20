import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import { locales, localesString, symbolLang } from '@/i18n';
interface ILocaleSwitcher {
  url: string;
  langPathUrl: String;
}

const LocaleSwitcher: FC<ILocaleSwitcher> = ({ url, langPathUrl }) => {
  const langActive = 'active';

  const redirectedPathName = (locale: string) => {
    let getUrl = url;
    if (getUrl[0] === '/') {
      getUrl = getUrl.substring(1);
    }
    const segments = [locale, getUrl];
    return `/${segments.join('/')}`;
  };

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {locales.map((locale: string) => {
          return (
            <li
              className={`hover:text-slate-700 p-1 w-10 mobile:w-8 h-auto flex items-center justify-center`}
              key={locale}
            >
              <Link
                className={`lang ${
                  langPathUrl === locale ? langActive : ''
                }`}
                href={redirectedPathName(locale)}
              >
                {localesString[locale]}
                <Image
                  width={30}
                  height={30}
                  src={symbolLang[locale]}
                  alt={locale}
                  className="rounded-[6px]"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
