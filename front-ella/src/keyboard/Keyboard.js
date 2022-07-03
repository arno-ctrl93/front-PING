import "./keyboard-styles.css";
import { useState, useEffect } from 'react'

export default function Keyboard() {
  useEffect(() => {
    var azerty_virtual = false
var azerty_physical = true
var last_key_pressed = undefined
var qwerty_layout =  document.getElementById("keyboard").outerHTML
var pressColor = "#FFFF00"

function row_one_to_azerty()
{
  // one
  document.getElementById("!").innerHTML = '1'
  document.getElementById("1").innerHTML = '&'
  // two
   document.getElementById("@").innerHTML = '2'
  document.getElementById("2").innerHTML = 'é ~'
  // three
  document.getElementById("#").innerHTML = '3'
  document.getElementById("3").innerHTML = '" #'
  // four
  document.getElementById("$").innerHTML = '4'
  document.getElementById("4").innerHTML = "' {"
  // five
  document.getElementById("%").innerHTML = '5'
  document.getElementById("5").innerHTML = "( ["
  // six
  document.getElementById("^").innerHTML = '6'
  document.getElementById("6").innerHTML = "- |"
  // seven
  document.getElementById("&").innerHTML = '7'
  document.getElementById("7").innerHTML = "è `"
  // eight
  document.getElementById("*").innerHTML = '8'
  document.getElementById("8").innerHTML = "_ \\"
  // nine
  document.getElementById("(").innerHTML = '9'
  document.getElementById("9").innerHTML = "ç ^"
  // zero
  document.getElementById(")").innerHTML = '0'
  document.getElementById("0").innerHTML = "à @"
  // nine
  document.getElementById("_").innerHTML = '°'
  document.getElementById("-").innerHTML = ") ]"
  document.getElementById("tilt").innerHTML = ""
  document.getElementById("acc").innerHTML = "2"
}

function row_two_to_azerty()
{
  document.getElementById("key-Q").innerHTML = 'A'
  document.getElementById("key-W").innerHTML = 'Z'
  document.getElementById("leftB").innerHTML = '¨'
  document.getElementById("leftC").innerHTML = '^'
  document.getElementById("rightB").innerHTML = '£'
  document.getElementById("rightC").innerHTML = '$'
}
function row_three_to_azerty()
{
  document.getElementById("key-A").innerHTML = 'Q'
  document.getElementById("quote").innerHTML = '%'
  document.getElementById("tick").innerHTML = "ù"
}
function row_four_to_azerty()
{
  // changing to m of azerty
  var s = document.getElementById("colon")
  s.parentNode.removeChild(s);
  var c = document.getElementById("semi-colon")
  c.parentNode.removeChild(c);
  document.getElementById("colon-M").classList.remove("key--double")
  document.getElementById("colon-M").classList.add("key--letter")
  document.getElementById("colon-M").innerHTML = 'M'
  // changing to ? , of azerty
  document.getElementById("key-M").classList.remove("key--letter")
  document.getElementById("key-M").classList.add("key--double")
  document.getElementById("key-M").innerHTML = '?'
  var coma = document.createElement("div");
  coma.innerHTML = ','
  document.getElementById("key-M").appendChild(coma)
  // lt and , to . ;
  document.getElementById("lt").innerHTML = '.'
  document.getElementById("comma").innerHTML = ';'
  // gt and . to / :
  document.getElementById("gt").innerHTML = '/'
  document.getElementById("dot").innerHTML = ':'
  // ? and / to + =
  document.getElementById("?").innerHTML = '+'
  document.getElementById("slash").innerHTML = '='
  // z to w
  document.getElementById("key-Z").innerHTML = 'W'
}

function display_azerty()
{
    row_one_to_azerty()
    row_two_to_azerty()
    row_three_to_azerty()
    row_four_to_azerty()
    azerty_virtual = true
}

function switch_button()
{
  if (azerty_virtual)
  {
    document.getElementById("keyboard").outerHTML = qwerty_layout
    azerty_virtual = false
  }
  else
    display_azerty()
}

document.onkeydown = function() {
  if (last_key_pressed != undefined)
    last_key_pressed.style.backgroundColor = "#fa8ebd"
  var key;
    switch (window.event.keyCode) {
        case 65: // A key
        if (!azerty_physical)
          key = document.getElementById("key-A")
        else
          key = document.getElementById("key-Q")
         break;
        case 66: // B key
          key = document.getElementById("key-B")
        break;
        case 67:
          key = document.getElementById("key-C")
         break;
        case 68:
          key = document.getElementById("key-D")
        break;
        case 69:
          key = document.getElementById("key-E")
         break;
        case 70:
          key = document.getElementById("key-F")
        break;
        case 71:
          key = document.getElementById("key-G")
         break;
        case 72:
          key = document.getElementById("key-H")
        break;
        case 73:
          key = document.getElementById("key-I")
         break;
        case 74:
          key = document.getElementById("key-J")
         break;
        case 75:
          key = document.getElementById("key-K")
        break;
        case 76:
          key = document.getElementById("key-L")
         break;
        case 77:
        if (!azerty_physical)
          key = document.getElementById("key-M")
        else
          key = document.getElementById("colon-M")
        break;
        case 78:
          key = document.getElementById("key-N")
         break;
        case 79:
          key = document.getElementById("key-O")
         break;
        case 80:
          key = document.getElementById("key-P")
        break;
        case 81:
          if (!azerty_physical)
          key = document.getElementById("key-Q")
        else
          key = document.getElementById("key-A")
        break;
        case 82:
          key = document.getElementById("key-R")
         break;
        case 83:
          key = document.getElementById("key-S")
         break;
        case 84:
          key = document.getElementById("key-T")
        break;
        case 85:
          key = document.getElementById("key-U")
         break;
        case 86:
          key = document.getElementById("key-V")
        break;
        case 87:
        if (!azerty_physical)
          key = document.getElementById("key-W")
        else
          key = document.getElementById("key-Z")
         break;
        case 88:
          key = document.getElementById("key-X")
        break;
        case 89:
          key = document.getElementById("key-Y")
         break;
        case 90:
        if (!azerty_physical)
          key = document.getElementById("key-Z")
        else
          key = document.getElementById("key-W")
        break;
        // F1 to F12
        case 112:
          key = document.getElementById("f1")
         break;
        case 113:
          key = document.getElementById("f2")
         break;
        case 114:
          key = document.getElementById("f3")
         break;
        case 115:
          key = document.getElementById("f4")
         break;
        case 116:
          key = document.getElementById("f5")
         break;
        case 117:
          key = document.getElementById("f6")
         break;
        case 118:
          key = document.getElementById("f7")
         break;
        case 119:
          key = document.getElementById("f8")
         break;
        case 120:
          key = document.getElementById("f9")
         break;
        case 121:
          key = document.getElementById("f10")
         break;
        case 122:
          key = document.getElementById("f11")
         break;
        case 123:
          key = document.getElementById("f12")
         break;
        // digits
        case 49:
          key = document.getElementById("one")
         break;
        case 50:
          key = document.getElementById("two")
         break;
        case 51:
          key = document.getElementById("three")
         break;
        case 52:
          key = document.getElementById("four")
         break;
        case 53:
          key = document.getElementById("five")
         break;
        case 54:
          key = document.getElementById("six")
         break;
        case 55:
          key = document.getElementById("seven")
         break;
        case 56:
          key = document.getElementById("eight")
         break;
        case 57:
          key = document.getElementById("nine")
         break;
        case 48:
          key = document.getElementById("zero")
         break;
        case 48:
          key = document.getElementById("zero")
         break;
        case 16:
        if (window.event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT){
        key = document.getElementById("shift")
        } 
        else if (window.event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        key = document.getElementById("shiftR")
        }
         break;
        case 27:
          key = document.getElementById("key-esc")
         break;
        case 9:
          key = document.getElementById("tab")
         break;
        case 219:
          key = document.getElementById("tab")
         break;
        case 13:
          key = document.getElementById("return")
         break;
        case 46:
          key = document.getElementById("delete")
         break;
        case 8:
          key = document.getElementById("delete")
         break;
        case 160:
          key = document.getElementById("left-b")
         break;
        case 164:
          key = document.getElementById("right-b")
         break;
        case 165:
          key = document.getElementById("quotess")
         break;
        case 32:
          key = document.getElementById("space")
          //window.event.preventDefault();
         break;
        case 222:
          key = document.getElementById("tild")
         break;
        case 169:
          key = document.getElementById("tirets")
         break;
        case 61:
          key = document.getElementById("onePlus")
         break;
        case 20:
          key = document.getElementById("caps")
         break;
        case 16:
          key = document.getElementById("shift")
         break;
        case 188:
          key = document.getElementById("key-M")
         break;
        case 59:
          key = document.getElementById("lgComma")
         break;
        case 58:
          key = document.getElementById("gtDot")
         break;
        case 161:
          key = document.getElementById("slashInter")
         break;
        case 17:
          key = document.getElementById("ctrl")
         break;
        case 37:
          key = document.getElementById("left")
         break;
        case 38:
          key = document.getElementById("up")
         break;
        case 39:
          key = document.getElementById("right")
         break;
        case 40:
          key = document.getElementById("down")
         break;
        
    }
  key.style.backgroundColor = pressColor;
  last_key_pressed = key
};
})

  return (
    
<div id='keyboard' class="keyboard">
  <div class="keyboard__row keyboard__row--h1">
    <div id="key-esc" data-key="27" class="key--word">
      <span>esc</span>
    </div>
    <div id='f1' data-key="112" class="key--fn">
      <span>F1</span>
    </div>
    <div id='f2' data-key="113" class="key--fn">
      <span>F2</span>
    </div>
    <div id='f3' data-key="114" class="key--fn">
      <span>F3</span>
    </div>
    <div id='f4' data-key="115" class="key--fn">
      <span>F4</span>
    </div>
    <div id='f5' data-key="116" class="key--fn">
      <span>F5</span>
    </div>
    <div id='f6' data-key="117" class="key--fn">
      <span>F6</span>
    </div>
    <div id='f7' data-key="118" class="key--fn">
      <span>F7</span>
    </div>
    <div id='f8' data-key="119" class="key--fn">
      <span>F8</span>
    </div>
    <div id='f9' data-key="120" class="key--fn">
      <span>F9</span>
    </div>
    <div id='f10' data-key="121" class="key--fn">
      <span>F10</span>
    </div>
    <div id='f11' data-key="122" class="key--fn">
      <span>F11</span>
    </div>
    <div id='f12' data-key="123" class="key--fn">
      <span>F12</span>
    </div>
    <div data-key="n/a" class="key--word">
      <span>pwr</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div id='tild' class="key--double" data-key="192">
      <div id='tilt'>~</div>
      <div id='acc'>`</div>
    </div>
    <div id='one' class="key--double" data-key="49">
      <div id='!'>!</div>
      <div id='1'>1</div>
    </div>
    <div id='two' class="key--double" data-key="50">
      <div id='@'>@</div>
      <div id='2'>2</div>
    </div>
    <div id='three' class="key--double" data-key="51">
      <div id='#'>#</div>
      <div id='3'>3</div>
    </div>
    <div id='four' class="key--double" data-key="52">
      <div id='$'>$</div>
      <div id='4'>4</div>
    </div>
    <div id='five' class="key--double" data-key="53">
      <div id="%">%</div>
      <div id='5'>5</div>
    </div>
    <div id='six' class="key--double" data-key="54">
      <div id='^'>^</div>
      <div id='6'>6</div>
    </div>
    <div id='seven' class="key--double" data-key="55">
      <div id='&'>&</div>
      <div id='7'>7</div>
    </div>
    <div id='eight' class="key--double" data-key="56">
      <div id='*'>*</div>
      <div id='8'>8</div>
    </div>
    <div id='nine' class="key--double" data-key="57">
      <div id='('>(</div>
      <div id='9'>9</div>
    </div>
    <div id='zero' class="key--double" data-key="48">
      <div id=')'>)</div>
      <div id='0'>0</div>
    </div>
    <div id='tirets' class="key--double" data-key="189">
      <div id='_'>_</div>
      <div id='-'>-</div>
    </div>
    <div id='onePlus' class="key--double" data-key="187">
      <div id='+'>+</div>
      <div id='='>=</div>
    </div>
    <div id='delete' class="key--bottom-right key--word key--w4" data-key="8">
      <span>delete</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div id='tab' class="key--bottom-left key--word key--w4" data-key="9">
      <span>tab</span>
    </div>
    <div id="key-Q" class="key--letter" data-char="Q">Q</div>
    <div id="key-W" class="key--letter" data-char="W">W</div>
    <div id="key-E" class="key--letter" data-char="E">E</div>
    <div id="key-R" class="key--letter" data-char="R">R</div>
    <div id="key-T" class="key--letter" data-char="T">T</div>
    <div id="key-Y" class="key--letter" data-char="Y">Y</div>
    <div id="key-U" class="key--letter" data-char="U">U</div>
    <div id="key-I" class="key--letter" data-char="I">I</div>
    <div id="key-O" class="key--letter" data-char="O">O</div>
    <div id="key-P" class="key--letter" data-char="P">P</div>
    <div id="left-b" class="key--double" data-key="219" data-char="{[">
      <div id='leftB'>(</div>
      <div id='leftC'>[</div>
    </div>
    <div id="right-b" class="key--double" data-key="221" data-char="}]">
      <div id='rightB'>)</div>
      <div id='rightC'>]</div>
    </div>
    <div class="key--double" data-key="220" data-char="|\">
      <div>|</div>
      <div>\</div>
    </div>
  </div>
  <div class="keyboard__row">
    <div id='caps' class="key--bottom-left key--word key--w5" data-key="20">
      <span>caps lock</span>
    </div>
    <div id="key-A" class="key--letter" data-char="A">A</div>
    <div id="key-S" class="key--letter" data-char="S">S</div>
    <div id="key-D" class="key--letter" data-char="D">D</div>
    <div id="key-F" class="key--letter" data-char="F">F</div>
    <div id="key-G" class="key--letter" data-char="G">G</div>
    <div id="key-H" class="key--letter" data-char="H">H</div>
    <div id="key-J" class="key--letter" data-char="J">J</div>
    <div id="key-K" class="key--letter" data-char="K">K</div>
    <div id="key-L" class="key--letter" data-char="L">L</div>
    <div id="colon-M" class="key--double" data-key="186">
      <div id="colon">:</div>
      <div id="semi-colon">;</div>
    </div>
    <div id='quotess' class="key--double" data-key="222">
      <div id="quote">"</div>
      <div id='tick'>'</div>
    </div>
    <div id="return" class="key--bottom-right key--word key--w5" data-key="13">
      <span>return</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div id='shift' class="key--bottom-left key--word key--w6" data-key="16">
      <span>shift</span>
    </div>
    <div id="key-Z" class="key--letter" data-char="Z">Z</div>
    <div id="key-X" class="key--letter" data-char="X">X</div>
    <div id="key-C" class="key--letter" data-char="C">C</div>
    <div id="key-V" class="key--letter" data-char="V">V</div>
    <div id="key-B" class="key--letter" data-char="B">B</div>
    <div id="key-N" class="key--letter" data-char="N">N</div>
    <div id="key-M" class="key--letter" data-char="M">M</div>
    <div id='lgComma' class="key--double" data-key="188">
      <div id='lt'>&lt;</div>
      <div id='comma'>,</div>
    </div>
    <div id='gtDot' class="key--double" data-key="190">
      <div id='gt'>&gt;</div>
      <div id='dot'>.</div>
    </div>
    <div id='slashInter' class="key--double" data-key="191">
      <div id='?'>?</div>
      <div id='slash'> /</div>
    </div>
    <div id='shiftR' class="key--bottom-right key--word key--w6" data-key="16-R">
      <span>shift</span>
    </div>
  </div>
  <div class="keyboard__row keyboard__row--h3">
    <div class="key--bottom-left key--word">
      <span>fn</span>
    </div>
    <div id='ctrl' class="key--bottom-left key--word key--w1" data-key="17">
      <span>control</span>
    </div>
    <div class="key--bottom-left key--word key--w1" data-key="18">
      <span>option</span>
    </div>
    <div class="key--bottom-right key--word key--w3" data-key="91">
      <span>command</span>
    </div>
    <div id='space' class="key--double key--right key--space" data-key="32" data-char=" ">
      &nbsp;
    </div>
    <div class="key--bottom-left key--word key--w3" data-key="93-R">
      <span>command</span>
    </div>
    <div class="key--bottom-left key--word key--w1" data-key="18-R">
      <span>option</span>
    </div>
    <div id='left' data-key="37" class="key--arrow">
      <span>&#9664;</span>
    </div>
    <div class="key--double key--arrow--tall" data-key="38">
      <div id='up'>&#9650;</div>
      <div id='down'>&#9660;</div>
    </div>
    <div id='right' data-key="39" class="key--arrow">
      <span>&#9654;</span>
    </div>
  </div>
</div>
  );
}
