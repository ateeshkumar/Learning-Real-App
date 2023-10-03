import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, onChange }) => {
  const editorDidMount = (editor, monaco) => {
    console.log('Editor mounted');
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      editorDidMount={editorDidMount}
      onChange={onChange}
    />
  );
};

export default CodeEditor;
