import './App.css';
import Keyboard from './keyboard/Keyboard';
import ToolBar from './toolbar/Toolbar';
import TextArea from './textArea/textarea';
//import TreeList from './treeList/treelist';
import Notifications from './notification/Notification';
import MyToolBar from './compileBar/compilebar';
import { useState, useEffect } from "react";

import { isKeyboard } from './toolbar/Toolbar'

function App() {
  useEffect(() => {
    function test()
    {
      var c = document.getElementById('Clavier')
    }
    test()
    console.log('useffect' + isKeyboard)
    //document.getElementById('Clavier').outerHTML = '{ isKeyboard && <Keyboard /> }'
  });

  return (
    <div className="Component">
    <div className="Top">
      <div className="Files">
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
        
      </div>
    </div>
  </div>
  );
}

export default App;
