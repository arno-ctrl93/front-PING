import './App.css';
import Keyboard from './keyboard/Keyboard';
import ToolBar from './toolbar/Toolbar';
import TextArea from './textArea/textarea';
//import TreeList from './treeList/treelist';
import Notifications from './notification/Notification';
import MyToolBar from './compileBar/compilebar';

//let keyboard = ToolBar.

function App() {
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
        <Keyboard />
      </div>
    </div>
  </div>
  );
}

export default App;
