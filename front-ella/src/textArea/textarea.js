import './textarea.css';
import React from 'react';
import { useEffect } from 'react'
import { render } from 'react-dom';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/ext-language_tools";
import brace from 'brace';

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-monokai';


function App() {

  useEffect(() => {
    let editor;
    //editor = AceEditor.edit("editor");
    
  });
  return (
    <div className="App">
        <AceEditor 
          id = "editor"
          placeholder="Type your code here..."
          mode="java" 
          theme="monokai"
          name="UNIQUE_ID_OF_DIV"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
          editorProps={{
              $blockScrolling: true
              }}
         />
    </div>
  );
}

export default App;
