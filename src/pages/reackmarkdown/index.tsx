import Back from "@/components/Back";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useEffect, useState } from "react";

const content = `A paragraph with *emphasis* and **strong importance**.
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

~~~js
console.log('It works!')
~~~

`;

const Page = () => {
  const [importContent, setImportContent] = useState("");
  // const filePath = path.join(process.cwd(), "README.md");
  useEffect(() => {
    fetch("/demo.md")
      .then((res) => res.text())
      .then(setImportContent)
      .catch(console.error);
  }, []);
  return (
    <>
      <h2 className="font-bold text-3xl px-2">[React Markdown]</h2>
      <div className="mt-4">
        <p>在頁面中渲染 markdown</p>
        <p>記得unreset css</p>
        <p>使用以下套件</p>
        <span>主要套件：</span>
        <a
          className="link"
          href="https://www.npmjs.com/package/react-markdown/v/8.0.6"
          target="_blank"
        >
          react-markdown
        </a>
        <br />
        <span>添加了對刪除線、表格、任務清單和 URL 的支援：</span>
        <a
          className="link"
          href="https://www.npmjs.com/package/remark-gfm/v/1.0.0"
          target="_blank"
        >
          remark-gfm
        </a>
        <br />
        <span>支援程式碼：</span>
        <a
          className="link"
          href="https://www.npmjs.com/package/react-syntax-highlighter"
          target="_blank"
        >
          react-syntax-highlighter
        </a>
        <br />
        <br />
        <p>範例文件：</p>
        <div className="unreset bg-yellow-300/70 p-4 rounded-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const { style, ...restProps } = props;
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    PreTag="div"
                    {...restProps}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        <br />
        <p>也可以用引入檔案的方式：</p>
        <p>如果是server component</p>
        <p>{`可以import fs from "fs";import path from "path";用這兩個套件`}</p>
        <p>如果是client component</p>
        <p>需要用 fetch 的方式載入檔案</p>
        <p>《本專案使用 page router ,故是以 client 端為主》</p>
        <div className="unreset bg-yellow-300/70 p-4 rounded-lg mt-4">
          <ReactMarkdown>{importContent}</ReactMarkdown>
        </div>
        <Back />
      </div>
    </>
  );
};

export default Page;
