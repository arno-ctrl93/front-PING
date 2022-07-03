import './textarea.css';
import React from 'react';
import { useEffect } from 'react'
import { render } from 'react-dom';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/ext-language_tools";
import brace from 'brace';

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-xcode';


function App() {

  useEffect(() => {
    /*let editor = document.getElementById('editor');
    if (editor) {
      editor.style.height = '100%';
    }
    else
      console.log("editor not found");
    //editor.setTheme("ace/theme/clouds_midnight");*/
  });
  return (
    <div className="App">
        <AceEditor 
          id = "editor"
          class = "editor"
          placeholder="Type your code here..."
          mode="java" 
          theme='monokai'
          fontSize={14}
          width="100%"
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
