import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <main className="p-[40px]">
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
