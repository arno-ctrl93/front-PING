import "./toolbar-styles.css";
import React, { useState } from "react";
import logo from "./totally_spies.jpg";
import buttonimg from "./button-bar.png";
import { useEffect } from "react";
//import localStorage from "local-storage";
//import refreshComponent from "../App"

import Global from "../constant/global";
import { isThrowStatement } from "@babel/types";

export var theme = 'ts'

function switchTheme(newTheme)
{
  document.documentElement.className = newTheme;
}

function PrefMenu() {
  return (
    <div class="menu">
      <button class="file-button">Preference file</button>
      <button class="run-shortcut">Run shortcut</button>
      <button class="search-shortcut">Search shortcust</button>
      <button class="ts-theme-shortcut"onClick={switchTheme('ts')}>Totally Spies theme</button>
      <button class="ts-theme-shortcut" onClick={switchTheme('light')}>Light theme</button>
      <button class="ts-theme-shortcut"onClick={switchTheme('dark')}>Dark theme</button>
    </div>
  );
}

function ToolBar() {
  // switch button
  const [isToggled, setIsToggled] = useState(false);
  var isKeyboard = global.isKeyboard;
  //const [isKeyboard, setIsKeyboard ] = global;

  useEffect(() => {
    //localStorage.setIsToggled('setIsToggled', JSON.stringify(isToggled));
    console.log("refresh : " + isKeyboard)
    console.log('THEEME' + isThrowStatement)
    //refreshComponent()

    //refreshPage(isToggled)
  }, [isKeyboard, window.theme]);

  const onToggle = () => 
  {
    setIsToggled(!isToggled);
    isKeyboard = isToggled
    //refreshPage(isToggled)
  }

  // preference menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonClick = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  }

  /*useEffect(() => {
    console.log('useffect' + isKeyboard)
    refreshPage()
    //document.getElementById('Clavier').outerHTML = '{ isKeyboard && <Keyboard /> }'
  }, [isKeyboard]);*/

    /*function refreshPage(isToggled) {
        console.log("refresh page");
        window.location.reload(false);
    }*/
  return (
    <div class="Layout">
      <div class="ToolBar">
        <img class="logo" src={logo} />
        <div class="ide-name">ELLA IDE</div>
        <div class="switch-element">
          <div class="toggle-switch">
            <label className="toggle-switch">
              <input type="checkbox" checked={isToggled} onChange={onToggle} />
              <span className="switch" />
            </label>
          </div>
          <div class="button-text">Keyboard</div>
        </div>
        <div>
          <button class="preference-button" type="button" onClick={buttonClick}>
            <img src={buttonimg} width="40" />
          </button>
        </div>
      </div>
      {isMenuOpen && <PrefMenu />}
    </div>
  );
}

export default ToolBar
//export { isKeyboard };