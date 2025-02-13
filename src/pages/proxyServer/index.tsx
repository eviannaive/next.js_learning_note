import { useEffect } from "react";
import useSWRMutation from "swr/mutation";
import { Back, CodeArea, DividerLine } from "@/components";

const loginData = {
  email: process.env.NEXT_PUBLIC_PROXY_USER,
  password: process.env.NEXT_PUBLIC_PROXY_PASSWORD,
};

const fetchData = () => {
  fetch("/api/proxy/Member/Login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
};

async function fetcher(url: string, { arg }: { arg: string }) {
  await fetch(url, {
    method: "POST",
    body: arg,
    headers: {
      "content-type": "application/json",
    },
  });
}

const Page = () => {
  const { trigger } = useSWRMutation("/api/proxy/Member/Login", fetcher);
  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[Proxy Server]</h2>
      <div className="mt-4">
        <p>雖然可以使用 next.js rewrites</p>
        <p>但某些時候，專案需要打包成靜態檔案</p>
        <p>就可以使用 api router 轉發</p>
        <p>
          先安裝套件{" "}
          <code className="short-code">next-http-proxy-middleware</code>
        </p>
        <CodeArea>
          {`pages/api/proxy/[...path].ts

import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";
import type { NextHttpProxyMiddlewareOptions } from "next-http-proxy-middleware";

const isDevelopment = process.env.NODE_ENV === "development";

const handleProxyInit: NextHttpProxyMiddlewareOptions["onProxyInit"] = (
  proxy,
) => {
  proxy.on("proxyReq", (proxyReq, req) => {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
      proxyReq.setHeader("Authorization", authHeader);
    }

    if (req.headers.cookie) {
      proxyReq.setHeader("Cookie", req.headers.cookie);
    }
  });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(process.env.NODE_ENV, "轉發???");
  return isDevelopment
    ? httpProxyMiddleware(req, res, {
        target: process.env.NEXT_PUBLIC_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/api/proxy": "/be/api", // 重寫路徑
        },
        onProxyInit: handleProxyInit,
      })
    : res.status(404).send(null);
}

`}
        </CodeArea>
        <p>fetch的時候</p>
        <p>會從local host轉發，能夠繞過CORS的問題</p>
        <CodeArea>
          {`const fetchData = () => {
  fetch("/api/proxy/Member/Login/", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
};`}
        </CodeArea>
        <CodeArea>
          {`Network

Request URL:http://localhost:3382/api/proxy/Member/Login
Request Method:POST
Status Code:200 OK
Remote Address:[::1]:3382
Referrer Policy:strict-origin-when-cross-origin`}
        </CodeArea>
        <DividerLine />

        <p>使用useSWR的做法</p>
        <button
          className="demo-button mt-2"
          onClick={() => {
            trigger(JSON.stringify(loginData));
          }}
        >
          TRIGGER
        </button>
        {/* <CodeArea></CodeArea> */}
        <Back />
      </div>
    </>
  );
};

export default Page;
