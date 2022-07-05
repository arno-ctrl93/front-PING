import './IDEPage.css';
import Keyboard from '../keyboard/Keyboard';
import ToolBar from '../toolbar/Toolbar';
import TextArea from '../textArea/textarea';
import TreeList from '../treeList/treelist';
import Notifications from '../notification/Notification';
import MyToolBar from '../compileBar/compilebar';
import { useState, useEffect } from "react";

import { theme } from "../toolbar/Toolbar";
import { KeyboardContext } from '../contexts/KeyboardContext';
import { TextContext } from '../contexts/TextContext';

let isTextCheck = "";

export default function IDEPage() {

    const [isKeyboard, setIsKeyboard] = useState(false);
    const [isText, setIsText] = useState('');

    isTextCheck = isText;

    document.documentElement.className = theme;

    return (
        <div className="Component">
            <KeyboardContext.Provider value={{ isKeyboard, setIsKeyboard }}>
                <TextContext.Provider value={{ isText, setIsText }}>
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
                </TextContext.Provider>
            </KeyboardContext.Provider>
        </div>
    );
}

export { isTextCheck };

