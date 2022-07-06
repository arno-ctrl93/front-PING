import "./toolbar-styles.css";
import React, { useState } from "react";
import logo from "./totally_spies.jpg";
import buttonimg from "./button-bar.png";
import { useEffect } from "react";
import { isThrowStatement } from "@babel/types";
import { useKeyboardContext } from '../contexts/KeyboardContext'

export var theme = 'light'

function switchTheme(newTheme)
{
  document.documentElement.className = newTheme;
  console.log("swiiiiiitch")
}

function PrefMenu() {
  return (
    <div class="menu">
      <button class="file-button">Preference file</button>
      <button class="run-shortcut">Run shortcut</button>
      <button class="search-shortcut">Search shortcust</button>
      <button class="ts-theme-shortcut"onClick={switchTheme('light')}>Totally Spies theme</button>
      <button class="light-theme-shortcut" onClick={switchTheme('ts')}>Light theme</button>
      <button class="dark-theme-shortcut"onClick={switchTheme('dark')}>Dark theme</button>
    </div>
  );
}

function ToolBar() {
  // switch button
  const [isToggled, setIsToggled] = useState(false);

  const { setIsKeyboard } = useKeyboardContext();

  useEffect(() => {
    //localStorage.setIsToggled('setIsToggled', JSON.stringify(isToggled));
    console.log('THEEME' + isThrowStatement)
    //refreshComponent()

    //refreshPage(isToggled)
  }, [isToggled]);

  const onToggle = () => 
  {
    setIsToggled(!isToggled);
    setIsKeyboard(!isToggled)
  }

  // preference menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonClick = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  }

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
            <img class="barimg" src={buttonimg} width="40" />
          </button>
        </div>
      </div>
      {isMenuOpen && <PrefMenu />}
    </div>
  );
}

export default ToolBar
//export { isKeyboard };