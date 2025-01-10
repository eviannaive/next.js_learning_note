import SyntaxHighlighter from "react-syntax-highlighter";

const CodeArea = ({ children }: { children: string }) => {
  return (
    <SyntaxHighlighter className="mt-4" language="javascript">
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeArea;
