import {CopyBlock, a11yDark} from "react-code-blocks";

const CodeBlock = ({text, language}) => {

    return (
        <CopyBlock
            text={text}
            language={language}
            wrapLines
            theme={a11yDark}
            showLineNumbers={false}
        />
    );
};

CodeBlock.defaultProps = {
    language: "jsx"
};

export default CodeBlock;
