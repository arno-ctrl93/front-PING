import React from "react";
import { useEffect } from "react";
import "./treelist.css";
import axios from 'axios';

import { useTextContext } from '../contexts/TextContext'

const App = () => {
  let root;

  const { setIsText } = useTextContext();
  
  let arbo = "";
  var arboDiv = document.getElementById("Arbolescence");
  if (!arboDiv) {
    console.log("arboDiv not found");
  }

  function loadFile(path) {
    console.log("loadFile: "+path);
    let t = "";
    axios({
      method: 'post',
      url: 'http://localhost:9000/contentFile',
      data: {
        path : path,
      }
    }).then(function (response) {
      t = response.data;
      console.log("file")
      console.log(response.data);
    });
    return t;
  }
  function createArbolescence(root, indexSpace, folderToAttach) {
    console.log("recursive");
    for (let children of root.children) {
      if (children.isFolder) 
      {
        // is folder
        var folderUl = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        folderUl.appendChild(checkbox);
        folderUl.innerHTML = children["name"];
        folderUl.style.listStyle = "square";
        createArbolescence(children, indexSpace + 1, folderUl);
        folderToAttach.appendChild(folderUl);
      }
      else
      {
        // is file
        var fileIl = document.createElement("li");
        fileIl.innerHTML = children["name"];
        fileIl.onclick = function() {
          console.log("click");
          let text = loadFile(children["path"]);
          setIsText(text);
        }
        folderToAttach.appendChild(fileIl);
      }
    }
  }

  useEffect(() => {

    axios({
      method: 'post',
      url: 'http://localhost:9000/init',
      data: {
        path : "myproject",
        name : "cc"
      }
    }).then(function (response) {
      root = response.data;
      console.log("file")
      console.log(response.data);
    }).then(function() {

      let Arbolescence = document.getElementById("Arbolescence");
      if (Arbolescence && root !== undefined) {
        var folderUl = document.createElement("li");
        folderUl.innerHTML = root["root"]["name"];
        folderUl.style.listStyle = "./folder.jpg";
        createArbolescence(root["root"], 1, folderUl);
        Arbolescence.appendChild(folderUl);
      } else
        console.log("Root undefined")
    });
  });
  return (
    <div className="App">
      <center><h4> Fichiers </h4></center>
      <div id="Arbolescence">
      </div>
    </div>
    
  );
};

export default App;