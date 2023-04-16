import { useEffect, useState } from 'react';
import React from 'react';
import { AppProps } from 'next/app';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import MainLayout from '@/components/layouts/main';
import { MyUserContextProvider } from '@/utils/useUser';
import type { Database } from 'types_db';

import 'styles/global.css';
import 'styles/chrome-bug.css';
import 'pages/schedule/main.css';
import 'pages/schedule/list.css';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { Barlow } from 'next/font/google';

const barlow = Barlow({
  weight: ['200', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export default function MyApp({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);


  return (
      <div className={barlow.className}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <MyUserContextProvider>
            <MainLayout>
              <Layout Component={Component} pageProps={pageProps} />
            </MainLayout>
          </MyUserContextProvider>
        </SessionContextProvider>
      </div>
  );
}

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(
        <Component {...pageProps} />
    );
  } else {
    return (
        <Component {...pageProps} />
    );
  }
};
