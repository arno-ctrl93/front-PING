import React from "react";
import { useEffect } from "react";
import "./treelist.css";

const App = () => {
  let root;
  
  /*const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                   'mode':'no-cors'},
      body: JSON.stringify({ path: 'myproject', name: 'root' })
  };
  
  fetch('http://localhost:9000/init/', requestOptions)
      .then(response => response.json())
      .then(data => { root = data["root"]; console.log("MY DATA: "+data)})
      .catch(error => console.log('error', error));*/

  root = {
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
  }
  
  let arbo = "";
  var arboDiv = document.getElementById("Arbolescence");
  if (!arboDiv) {
    console.log("arboDiv not found");
  }

  function loadFile(path) {
    console.log("loadFile: "+path);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                   'mode':'no-cors'},
      body: JSON.stringify({ path: path })
    };
    fetch('http://localhost:9000/contentFile', requestOptions)
        .then(response => response.json())
        .then(data => { console.log("MY DATA: "+data)})
        .catch(error => console.log('error', error));
  }
  function createArbolescence(root, indexSpace, folderToAttach) {
    for (let children of root.children) {
      if (children.isFolder) 
      {
        // is folder
        var folderUl = document.createElement("lu");
        folderUl.innerHTML = children["name"];
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
          loadFile(children["path"]);
        }
        folderToAttach.appendChild(fileIl);
      }
    }
  }

  useEffect(() => {
    let Arbolescence = document.getElementById("Arbolescence");
    if (Arbolescence && root !== undefined) {
      var folderUl = document.createElement("lu");
      folderUl.innerHTML = root["root"]["name"];
      createArbolescence(root["root"], 1, folderUl);
      Arbolescence.appendChild(folderUl);
    }
    else
      console.log("Root undefined")
  });
  return (
    <div className="App">
      <h4>Arbolescence des fichiers </h4>
      <div id="Arbolescence">
      </div>
    </div>
    
  );
};

export default App;