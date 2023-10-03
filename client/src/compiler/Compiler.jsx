import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
const Compiler = () => {
    const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="App">
      <CodeEditor code={code} onChange={handleCodeChange} />
    </div>
  );
}

export default Compiler