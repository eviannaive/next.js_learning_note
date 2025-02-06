import { CopyBlock, dracula } from "react-code-blocks";

const CodeArea = ({ children }: { children: string }) => {
  return (
    <div className="py-4">
      <CopyBlock
        language="javascript"
        theme={dracula}
        text={children}
        showLineNumbers
        codeBlock
      ></CopyBlock>
    </div>
  );
};

export default CodeArea;
