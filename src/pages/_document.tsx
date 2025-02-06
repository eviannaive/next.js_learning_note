import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v15-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v15-pagesRouter";
import createCache from "@emotion/cache";

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

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createCache({ key: "css", prepend: true }),
  });
  return finalProps;
};
