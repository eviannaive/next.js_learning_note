import useSWR from "swr";
import Back from "@/components/Back";
import CodeArea from "@/components/CodeArea";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const url = "http://localhost/api";

const Loading = () => {
  return <div>loading...</div>;
};

const Description = () => {
  const { data } = useSWR(url + "/home", fetcher, {
    suspense: true,
    fallbackData: {
      data: { site_description: <Loading /> }, // 提供初始資料
    },
  });
  return <div>{data?.data.site_description}</div>;
};

const Page = () => {
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[Nginx]</h2>
      <div className="mt-4">
        <p>使用nginx搭配docker在開發模式處理CORS的問題</p>
        <div className="bg-amber-400/20 mt-5 p-4">
          <Description />
        </div>
        <p className="mt-3">設置docker-compose.dev.yml</p>
        <CodeArea>{`
          version: "3"
          services:
            nginx:
              image: nginx:alpine
              ports:
                - "80:80"
              volumes:
                - ./nginx.dev.conf:/etc/nginx/conf.d/default.conf
              extra_hosts:
                - "host.docker.internal:host-gateway"
              networks:
                - dev-network

          networks:
            dev-network:
              driver: bridge
              `}</CodeArea>
        <p className="mt-3">nginx.dev.conf</p>
        <CodeArea>{`
          server {
              listen 80;
              server_name localhost;

              error_log /var/log/nginx/error.log debug;

              # 前端開發伺服器
              location / {
                  # 使用 host.docker.internal 代替 localhost
                  proxy_pass http://host.docker.internal:3000;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection 'upgrade';
                  proxy_set_header Host $host;
              }

              # API 請求
              location /api/ {
                  # 將請求轉發到後端 API
                  proxy_pass https://api.sinsin.tw/api/;

                  # 設置正確的 Host 頭
                  proxy_set_header Host api.sinsin.tw;
                  proxy_set_header X-Real-IP $remote_addr;
                  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                  proxy_ssl_server_name on;  # 啟用 SNI 支持

                  # CORS 設定
                  add_header 'Access-Control-Allow-Origin' '*';
                  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
                  add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

                  # 處理 OPTIONS 請求
                  if ($request_method = 'OPTIONS') {
                      add_header 'Access-Control-Allow-Origin' '*';
                      add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
                      add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
                      add_header 'Access-Control-Max-Age' 1728000;
                      add_header 'Content-Type' 'text/plain charset=UTF-8';
                      add_header 'Content-Length' 0;
                      return 204;
                  }
              }
          }

              `}</CodeArea>
        <p className="mt-3">
          bash執行
          <code className="short-code mx-2">
            docker compose -f docker-compose.dev.yml up -d
          </code>
        </p>
        <p className="mt-3">
          關閉
          <code className="short-code mx-2">
            docker compose -f docker-compose.dev.yml down
          </code>
        </p>
        <Back />
      </div>
    </>
  );
};

export default Page;
