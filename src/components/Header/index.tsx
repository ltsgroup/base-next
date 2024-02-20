import { locales, localesString } from '@/i18n';
import { genLocaleUrl } from '@/utils/url';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Header({
  locale,
  url,
  selectMenuKey,
}: {
    locale: string;
    url: string;
    selectMenuKey: string;
  }) {

  const t = useTranslations('menu');
  const items = [{
    label: (
      <Link href={genLocaleUrl(locale, "/")}>
        {t("home")}
      </Link>
    ),
    key: 'home',
  }, {
    label: (
      <Link href={genLocaleUrl(locale, "/about")}>
        {t("about")}
      </Link>
    ),
    key: 'about',
  }];

  return (
    <>
      <div className="demo-logo" />
      <Menu
        selectedKeys={[selectMenuKey]}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
      <LocaleSwitcher url={url} langPathUrl={locale} />
    </>
  );
}
