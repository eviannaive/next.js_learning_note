import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/Button";
import logo from "@p/logo.png";

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
        <div className="w-full p-4 flex flex-col gap-8 row-start-2 items-center sm:items-start border-l-4 border-orange-300">
          <Image
            className="dark:invert"
            src={logo}
            alt="Next.js Learning Note"
            width={200}
            height={200}
            priority
          />
          <div className="font-[family-name:var(--font-geist-mono)] text-sm">
            <ol className="list-outside list-decimal  text-left pl-8">
              <li className="mb-2">This project uses Next.js page router</li>
              <li className="mb-2">
                Here are <b>Test zone</b> and <b>Eazy note</b>
              </li>
              <li className="mb-2">
                The blog is under construction and will be moved there later
              </li>
              <li className="mb-2">The content will be more comprehensive</li>
            </ol>
            <div className="mb-2 text-right">By Eloise</div>
          </div>
          <div className="w-full">
            <div className="text-lg">Concept:</div>
            <div className="w-full grid grid-cols-[repeat(auto-fill,250px)] gap-4 items-center sm:flex-row mt-2">
              <Button label="High-Order Component" path="/highOrderComponent" />
              <Button label="Proxy Server" path="/proxyServer" />
              <Button label="Nginx" path="/nginx" />
            </div>
          </div>
          <div className="w-full h-[2px] bg-slate-200"></div>
          <div className="w-full">
            <div className="text-lg">Package:</div>
            <div className="w-full grid grid-cols-[repeat(auto-fill,250px)] gap-4 items-center sm:flex-row mt-2">
              <Button label="SWR With Suspense" path="/swrWithSuspense" />
              <Button label="Formik" path="/formik" />
              <Button label="Material UI" path="/mui" />
              <Button label="Rive" path="/rive" />
              <Button label="React Markdown" path="/reackmarkdown" />
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
