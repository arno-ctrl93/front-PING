import React, { useState } from 'react'
import './Open.css'
import { useStartContext } from '../contexts/StartContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";

let pathOpen = "";

export default function OpenDirectory() {

    const nav = useNavigate();

    const { setHasStarted } = useStartContext();

    const [inputPath, setInputPath] = useState('')

    function handleInputPath(e) {
        setInputPath(e.target.value)
    }

    function validatePath() {
        return inputPath.length > 0;
    }

    const getLastItem = (path) => {
        return path.substring(path.lastIndexOf('/') + 1);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHasStarted(true);
        nav("/ide");
        axios({
            method: 'post',
            url: 'http://localhost:9000/init',
            data: {
                path: inputPath,
                name: getLastItem(inputPath),
            }
        }).then(function (response) {
            console.log(response.data);
        });
    }

    pathOpen = inputPath;

    return (
        <div className='Open'>
            <div className='lander'>
                <h2>Open Project</h2>
                <p>Open your project on ELLA IDE</p>
            </div>
            <div className='Choose'>
                <input type="file" id="filepicker" directory="" webkitdirectory="" />
                <button className='Button' onClick={ChooseDirectory}>Choose a Directory</button>
            </div>
            <div className='OpenProject'>
                <input
                    type="submit"
                    disabled={!validatePath()}
                    value="Open Project"
                    onClick={handleSubmit}
                />
                <button className='Button' onClick={handleSubmit}>Open Project</button>
            </div>
        </div>
    )
}

function ChooseDirectory () {
    console.log("open directory")
    let fileHandle;

    /*async function getFile() {
      console.log("open directory in the async")
      // open file picker
      [fileHandle] = await window.showOpenFilePicker();

      if (fileHandle.kind === 'file') {
        console.log("its a file")
      } else if (fileHandle.kind === 'directory') {
        console.log("its a dir")
      }
    }*/
}

export { pathOpen };