import Header from '@/components/Header/index';
import {useTranslations} from 'next-intl';

import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';


export async function generateMetadata({params: {locale}}: { params: { locale: string}}) {
  const t = await getTranslations({locale, namespace: 'about'});
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function About({
  params: { locale },
}: {
    params: {
      locale: string;
    },
  }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('about');
  return (
    <div>
      <Header locale={locale} url="/about" selectMenuKey="about" />
      <p>{t('description')}</p>
    </div>
  );
}
