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
