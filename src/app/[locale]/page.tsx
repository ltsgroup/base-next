import Header from '@/components/Header/index';
import {useTranslations} from 'next-intl';

import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';


export async function generateMetadata({params: {locale}}: { params: { locale: string}}) {
  const t = await getTranslations({locale, namespace: 'home'});
  return {
    title: t('title'),
    description: t('demo'),
    openGraph: {
      title: t('title'),
      description: t('demo'),
    },
  };
}

export default function Index({
  params: { locale },
}: {
    params: {
      locale: string;
    },
  }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');

  return (
    <div>
      <Header locale={locale} url="/" selectMenuKey="home" />
      <h1>{t('title')}</h1>
      <p>{t('demo')}</p>
    </div>
  );
}
