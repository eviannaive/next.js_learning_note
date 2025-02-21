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
      <h2 className="font-bold text-3xl px-2">[SWR With Suspense]</h2>
      <div className="mt-4">
        <p>官方不建議使用supense搭配swr</p>
        <p>如過真的要使用，用swr需要設定fallbackData較安全</p>
        <p>但若是資料繁多，就不適合用</p>
        <div className="bg-amber-400/20 mt-5 p-4">
          <Description />
        </div>
        <CodeArea>{`
        import useSWR, { preload } from "swr";

        const fetcher = (url: string) => fetch(url).then((res) => res.json());
        const url = "https://api.sinsin.tw/api/home";

        const Loading = () => {
          return <div>loading...</div>;
        };

        const Description = () => {
          const { data } = useSWR(url, fetcher, {
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
              <Description />
            </>
          );
        };

        export default Page`}</CodeArea>
        <Back />
      </div>
    </>
  );
};

export default Page;
