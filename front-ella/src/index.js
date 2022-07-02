import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keyboard from './keyboard/Keyboard';
import ToolBar from './toolbar/Toolbar';
import TextArea from './textArea/textarea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="Component">
      <div id="Key">
        <div id="file"> Je suis un file. </div>
        <Keyboard />
        </div>
        <div id = "Editor">
          <ToolBar />
          <TextArea />
        </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
