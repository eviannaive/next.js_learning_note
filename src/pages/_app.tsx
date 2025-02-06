import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppPropsWithLayout) {
  const getLayout = props.Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <AppCacheProvider {...props}>
        <Head>
          <title>Next.js learning note</title>
        </Head>
        <props.Component {...props.pageProps} />
      </AppCacheProvider>
    </>,
  );
}
