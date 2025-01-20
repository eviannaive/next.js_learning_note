import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
      >
        <div className="p-4 flex flex-col gap-8 row-start-2 items-center sm:items-start border-l-4 border-orange-300">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">This project uses Next.js page router</li>
            <li>Test zone and Eazy note</li>
          </ol>
          <div>
            <div className="text-lg">Concept:</div>
            <div className="grid grid-cols-1 gap-4 items-center flex-col sm:flex-row mt-2">
              <Button label="High-Order Component" path="/highOrderComponent" />
            </div>
          </div>
          <div className="w-full h-[2px] bg-slate-200"></div>
          <div>
            <div className="text-lg">Package:</div>
            <div className="grid grid-cols-1 gap-4 items-center flex-col sm:flex-row mt-2">
              <Button label="SWR With Suspense" path="/swrWithSuspense" />
              <Button label="High-Order Component" path="/highOrderComponent" />
              <Button label="Formik" path="/formik" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </>
  );
}
