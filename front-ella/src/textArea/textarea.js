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

import 'ace-builds/src-noconflict/theme-clouds';

import { theme } from "../toolbar/Toolbar"
let aceTheme = ""
if (theme === 'dark')
  aceTheme = 'monokai'
else if (theme === 'light')
  aceTheme = 'clouds'
else
  aceTheme = 'xcode'

  function changeTextArea(text) {
    console.log("changeTextArea: " + text)
    let edit = document.getElementById("editor")
    if (edit) {
      edit.value = text
    }
  }

function App() {
  console.log("le them" + theme)
  changeTextArea("");
  useEffect(() => {
  });
  return (
    <div className="App">
        <AceEditor 
          id = "editor"
          class = "editor"
          placeholder="Type your code here..."
          mode="java" 
          theme= { aceTheme }
          fontSize={14}
          width="100%"
          height = "400px"
          value={`public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello World!");
  }
}`}
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
