import React from "react";
import { useEffect } from "react";
import "./treelist.css";
import axios from 'axios';

import { useTextContext } from '../contexts/TextContext'

const App = () => {
  let root;

  const { setIsText } = useTextContext();

  axios({
    method: 'post',
    url: 'http://localhost:9000/init',
    data: {
      path : "myproject",
      name : "cc"
    }
  }).then(function (response) {
    console.log(response.data);
  });
  /*const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ path: 'myproject', name: 'root' })
  };
  
  fetch('http://localhost:9000/init', requestOptions)
      .then(response => response.json())
      .then(data => { root = data["root"]; console.log("MY DATA: "+data)})
      .catch(error => console.log('error', error));*/

  /*root = {
    "root":{
      "name":"root",
      "path":"myproject",
      "isFolder" : true,
      "isFile" : false,
      "children":[
        {
          "name":"src",
          "path":"myproject/src",
          "isFolder" : true,
          "isFile" : false,
          "children":[
            {
              "name":"main",
              "path":"myproject/src/main",
              "isFolder" : false,
              "isFile" : true,
              "children":[]
            },
            {
              "name":"test",
              "path":"myproject/src/test",
              "isFolder" : false,
              "isFile" : true,
              "children":[]
            }
          ]
        },
        {
          "name":"test",
          "path":"myproject/test",
          "isFolder" : false,
          "isFile" : true,
          "children":[]
        }]
    }
  }*/
  
  let arbo = "";
  var arboDiv = document.getElementById("Arbolescence");
  if (!arboDiv) {
    console.log("arboDiv not found");
  }

  function loadFile(path) {
    console.log("loadFile: "+path);
    let t = "";
    const requestOptions = {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                   'mode':'no-cors'},
      body: JSON.stringify({ path: path })
    };
    fetch('http://localhost:9000/contentFile', requestOptions)
        .then(response => response.json())
        .then(data => { t = data; console.log("MY DATA: "+data)})
        .catch(error => console.log('error', error));
    return t;
  }
  function createArbolescence(root, indexSpace, folderToAttach) {
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
    let Arbolescence = document.getElementById("Arbolescence");
    if (Arbolescence && root !== undefined) {
      var folderUl = document.createElement("li");
      folderUl.innerHTML = root["root"]["name"];
      folderUl.style.listStyle = "./folder.jpg";
      createArbolescence(root["root"], 1, folderUl);
      Arbolescence.appendChild(folderUl);
    }
    else
      console.log("Root undefined")
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