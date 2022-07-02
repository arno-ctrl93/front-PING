import './textarea.css';
import { useEffect } from 'react'

function App() {
  var obj = ['abstract','class', 'interface', 'import', 'this', 'enum', 'native', 'extends', 'package', 'implements', 'super'];
  var types = ['int', 'float', 'double', 'long', 'short', 'byte', 'char', 'boolean', 'void', 'String', 'Object', 'Array'];
  var etats = ['const', 'static', 'false', 'strictfp', 'final', 'transient', 'new', 'true', 'null'];
  var modificateurs = ['public', 'protected', 'private'];
  var boucles =  ['continue', 'break', 'do', 'while', 'for', 'goto'];
  var branchements = ['assert', 'if', 'break', 'instanceof', 'case', 'default', 'switch', 'else'];
  var execeptions = ['try', 'catch', 'finally','throw', 'throws'];

  const colorMap = {"abstract":"red","class":"red", "interface":"red", "import":"red", "this":"red", "enum":"red", "native":"red", "extends":"red", "package":"red", "implements":"red", "super":"red", "int":"blue", "float":"blue", "double":"blue", "long":"blue", "short":"blue", "byte":"blue", "char":"blue", "boolean":"blue", "void":"blue", "String":"blue", "Object":"blue", "Array":"blue", "const":"green", "static":"green", "false":"green", "strictfp":"green", "final":"green", "transient":"green", "new":"green", "true":"green", "null":"green", "public":"green", "protected":"green", "private":"green", "continue":"green", "break":"green", "do":"green", "while":"green", "for":"green", "goto":"green", "assert":"green", "if":"green", "break":"green", "instanceof":"green", "case":"green", "default":"green", "switch":"green", "else":"green", "try":"green", "catch":"green", "finally":"green", "throw":"green", "throws":"green"};

  useEffect(() => {
  var textarea = document.getElementById("textarea1");
  //var container = document.getElementById("block-texte");
  if(textarea)
  {
    textarea.addEventListener("keyup", function() {
      var text = textarea.value;
      console.log(text);
      
      let regex = new RegExp(Object.keys(colorMap).join("|"), "gi");
      text = text.replace(regex, function(matched) {
        console.log(matched);
        return "<span style='color:" + colorMap[matched] + "'>" + matched + "</span>";
      });
     //container.innerHTML = text;
     textarea.innerHTML = text;
    });
  }
  });
  return (
    <div className="App">
      <header className="App-header">
      <textarea id="textarea1" 
                rows="40" 
                cols="100" 
                placeholder="Your code here "
                autoComplete="on"
                /*onKeyUp={applyColors(this.value)}*/>
      </textarea>
      </header>
    </div>
  );
}

export default App;
