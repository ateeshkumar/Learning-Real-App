import React, { useEffect, useState } from 'react'
import './index.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {qtcreatorDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const CodeSnippit = () => {
    const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
    import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    const Component = () => {
      const codeString = '(num) => num + 1';
      return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      );
    };`;

    const [textToCopy, setTextToCopy] = useState('');
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // Reset copied status after 2 seconds
        })
        .catch((error) => console.error('Failed to copy text: ', error));
    };
    useEffect(()=>{
        setTextToCopy(codeString);
    },[codeString]);
  return (
    <div className="codesnippt">
        <div className="codesnippt-upper">
            <p>Example code</p>
            <div className='code-copy-container'>
            
            <div className='code-copy' onClick={handleCopyClick}>{isCopied?'Copied!':<div><ContentCopyIcon/> Copy code</div>}</div>
            </div>
            
        </div>
        <SyntaxHighlighter language="jsx" style={qtcreatorDark}
        customStyle={{padding:'25px',}}
        wrapLongLines={true}>
            {textToCopy}
        </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippit