import PageLayout from "@/components/PageLayout";
import { ReactElement } from "react";
import { useState } from "react";
import CodeArea from "@/components/CodeArea";

// 高階組件定義
const WithBottonCounter = <P extends object>(
  WrapComponent: React.ComponentType<P & { num: number }>,
) => {
  const EnhancedComponent = (props: P) => {
    const [count, setCount] = useState(0);
    const handleMinus = () => {
      setCount((prev) => prev - 1);
    };
    const handleAdd = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <div className="flex items-center gap-5 mt-4">
        <button className="border rounded-2 p-2" onClick={handleMinus}>
          minus
        </button>
        <WrapComponent {...props} num={count} />
        <button className="border rounded-2 p-2" onClick={handleAdd}>
          add
        </button>
      </div>
    );
  };
  const wrappedName = WrapComponent.displayName || WrapComponent.name;
  EnhancedComponent.displayName = `withClickCounter(${wrappedName})`;

  return EnhancedComponent;
};

const NumBox = ({ num }: { num: number }) => {
  return (
    <div className="bg-rose-200 w-8 h-8 grid place-content-center">{num}</div>
  );
};

const EnhancedCounter = WithBottonCounter(NumBox);

const WithBottonCounter2 = ({
  children,
}: {
  children: (props: { num: number }) => React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="flex items-center gap-5 mt-4">
      <button className="border rounded-2 p-2" onClick={handleMinus}>
        minus
      </button>
      {children({ num: count })}
      <button className="border rounded-2 p-2" onClick={handleAdd}>
        add
      </button>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <h2 className="font-bold text-3xl px-2">
        [High-Order Component 高階組件]
      </h2>

      <div className="mt-4">
        <p>HOC 是一個函數，它接受一個組件作為輸入，並返回一個新的增強版組件</p>
        <p>
          使用場景為增強功能（如權限驗證、數據預處理、狀態管理等），重複邏輯抽離，避免代碼重複。
        </p>
        <br />
        <p className="text-xl text-orange-600">
          extend props 的寫法，很像 slot 的用法，並且可以自訂 displayName：
        </p>
        <EnhancedCounter />
        <CodeArea>
          {`
            const WithBottonCounter = <P extends object>(
              WrapComponent: React.ComponentType<P & { num: number }>,
            ) => {
              const EnhancedComponent = (props: P) => {
                const [count, setCount] = useState(0);
                const handleMinus = () => {
                  setCount((prev) => prev - 1);
                };
                const handleAdd = () => {
                  setCount((prev) => prev + 1);
                };
                return (
                  <div className="flex items-center gap-5 mt-4">
                    <button className="border rounded-2 p-2" onClick={handleMinus}>
                      minus
                    </button>
                    <WrapComponent {...props} num={count} />
                    <button className="border rounded-2 p-2" onClick={handleAdd}>
                      add
                    </button>
                  </div>
                );
              };
              const wrappedName = WrapComponent.displayName || WrapComponent.name;
              EnhancedComponent.displayName = n\`withClickCounter(n\${wrappedName})n\`;

              return EnhancedComponent;
            };

            const NumBox = ({ num }: { num: number }) => {
              return (
                <div className="bg-rose-200 w-8 h-8 grid place-content-center">{num}</div>
              );
            };

            const EnhancedCounter = WithBottonCounter(NumBox);
            `}
        </CodeArea>
        <br />
        <p>使用時</p>
        <CodeArea>{`<EnhancedCounter />`}</CodeArea>

        <br />
        <p className="text-xl text-orange-600">
          children 的寫法，差異在無法自定義 displayName:
        </p>
        <WithBottonCounter2>
          {({ num }: { num: number }) => {
            return (
              <div className="bg-rose-200 w-8 h-8 grid place-content-center">
                {num}
              </div>
            );
          }}
        </WithBottonCounter2>
        <CodeArea>
          {`
            const WithBottonCounter2 = ({
              children,
            }: {
              children: (props: { num: number }) => React.ReactNode;
            }) => {
              const [count, setCount] = useState(0);
              const handleMinus = () => {
                setCount((prev) => prev - 1);
              };
              const handleAdd = () => {
                setCount((prev) => prev + 1);
              };
              return (
                <div className="flex items-center gap-5 mt-4">
                  <button className="border rounded-2 p-2" onClick={handleMinus}>
                    minus
                  </button>
                  {children({ num: count })}
                  <button className="border rounded-2 p-2" onClick={handleAdd}>
                    add
                  </button>
                </div>
              );
            };
            `}
        </CodeArea>
        <br />
        <p>使用時</p>
        <CodeArea>{`<WithBottonCounter2>
          {({ num }: { num: number }) => {
            return (
              <div className="bg-rose-200 w-8 h-8 grid place-content-center">
                {num}
              </div>
            );
          }}
        </WithBottonCounter2>`}</CodeArea>
      </div>
    </>
  );
}

Page.getLayout = function getLatout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};
