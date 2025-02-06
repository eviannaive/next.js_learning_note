import Back from "@/components/Back";
import CodeArea from "@/components/CodeArea";

const Page = () => {
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[Material UI]</h2>
      <div className="mt-4">
        <p>mui 在next.js 導入的方法</p>
        <a
          className="text-orange-600 underline underline-offset-1"
          href="https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOoqz9UNzuOOgEUJ2YtbmiV6zurJaOLKGTXkuv3wbwdtcIiUGZexC"
          target="_blank"
        >
          https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOoqz9UNzuOOgEUJ2YtbmiV6zurJaOLKGTXkuv3wbwdtcIiUGZexC
        </a>
        <p>步驟好多（暈）</p>
        <h3>Page Router:</h3>
        <p>step1:安裝</p>
        <CodeArea>
          {`npm install @mui/material @mui/material-nextjs
npm install @emotion/cache @emotion/server @emotion/styled`}
        </CodeArea>
        <p>step2:_document.tsx</p>
        <CodeArea>
          {`
          import { Head,DocumentContext } from "next/document";
          import {
            DocumentHeadTags,
            documentGetInitialProps,
          } from "@mui/material-nextjs/v15-pagesRouter";
          import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";
          import createCache from "@emotion/cache";
          //...
          export default function Document(props: DocumentHeadTagsProps) {
            return (
              <Html lang="en">
                <Head>
                  <DocumentHeadTags {...props} />
                </Head>
                <body className="antialiased">
                  <main className="p-[40px]">
                    <Main />
                  </main>
                  <NextScript />
                </body>
              </Html>
            );
          }
          `}
        </CodeArea>
        <p>step3:_app.tsx</p>
        <CodeArea>
          {`import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
            //...
            <AppCacheProvider {...props}>
              <Head>
                <title>Next.js learning note</title>
              </Head>
              <props.Component {...props.pageProps} />
            </AppCacheProvider>`}
        </CodeArea>

        <Back />
      </div>
    </>
  );
};

export default Page;
