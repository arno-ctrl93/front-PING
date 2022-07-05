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
import { CompilationContext } from '../contexts/compilationContext';

let isTextCheck = "";

export default function IDEPage() {

    const [isKeyboard, setIsKeyboard] = useState(false);
    const [isText, setIsText] = useState('');
    const [isCompilation, setIsCompilation] = useState(false);

    isTextCheck = isText;

    document.documentElement.className = theme;

    return (
        <div className="Component">
            <KeyboardContext.Provider value={{ isKeyboard, setIsKeyboard }}>
                <TextContext.Provider value={{ isText, setIsText }}>
                    <CompilationContext.Provider value={{ isCompilation, setIsCompilation }}>
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
                                <Notifications successMessage={''} errorMessage={isCompilation}/>
                            </div>
                            <div id="Clavier">
                                { isKeyboard && <Keyboard /> }
                            </div>
                        </div>
                    </CompilationContext.Provider>
                </TextContext.Provider>
            </KeyboardContext.Provider>
        </div>
    );
}

export { isTextCheck };

