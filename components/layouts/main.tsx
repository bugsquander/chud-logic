import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

import { PageMeta } from '@/types';

interface Props extends PropsWithChildren {
  meta?: PageMeta;
}

export default function MainLayout({ children, meta: pageMeta }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Chud Logic',
    description: 'Chud Logic website design v0.1.6',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://subscription-starter.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div className="bg-[url('/cartographer.png')] bg-repeat bg-fixed flex flex-col h-screen w-screen">
      <Header />
      <main id="skip" className="flex-2 overflow-auto bg-gradient-to-t from-[rgba(13,12,12,0.2)] via-[rgba(60,60,60,0.2)] to-[rgba(13,12,12,0.2)] p-5">{children}</main>
      <Footer />
      </div>
    </>
  );
}
