import "./toolbar-styles.css";
import React, { useState } from "react";
import logo from "./totally_spies.jpg";
import buttonimg from "./button-bar.png";

let isKeyboard = false;

function PrefMenu() {
  return (
    <div class="menu">
      <button class="file-button">Preference file</button>
      <button class="run-shortcut">Run shortcut</button>
      <button class="search-shortcut">Search shortcut</button>
      <button class="ts-theme-shortcut">Totally Spies theme shortcut</button>
    </div>
  );
}

function ToolBar() {
  // switch button
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => 
  {
    console.log(isToggled);
    isKeyboard = !isKeyboard;
    setIsToggled(!isToggled);
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
            <img src={buttonimg} width="40" />
          </button>
        </div>
      </div>
      {isMenuOpen && <PrefMenu />}
    </div>
  );
}

export default ToolBar;