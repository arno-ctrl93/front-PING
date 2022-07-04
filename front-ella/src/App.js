import './App.css';
import Keyboard from './keyboard/Keyboard';
import ToolBar from './toolbar/Toolbar';
import TextArea from './textArea/textarea';
import TreeList from './treeList/treelist';
import Notifications from './notification/Notification';
import MyToolBar from './compileBar/compilebar';
import { useState, useEffect } from "react";

import { theme } from "./toolbar/Toolbar"
//import { isKeyboard } from './toolbar/Toolbar'

let isKeyboard = true;

export var refreshComponent = function () {
    isKeyboard = !isKeyboard
}

function App() {
  useEffect(() => {
    console.log('useffect' + isKeyboard)
    //document.getElementById('Clavier').outerHTML = '{ isKeyboard && <Keyboard /> }'
  }, [isKeyboard]);

  console.log("is kean" + isKeyboard)
  document.documentElement.className = theme;

  return (
    <div className="Component">
    <div className="Top">
      <div className="Files">
        <TreeList />
      </div>
      <div id = "Editor">
        <ToolBar />
        <TextArea />
        
      </div>
    </div>
      
    <div className="Bottom">
      <div id="Console">
        <MyToolBar/>
        <Notifications/>
      </div>
      <div id="Clavier">
        { isKeyboard && <Keyboard /> }
      </div>
    </div>
  </div>
  );
}

export default App;
//export { refreshComponent };
