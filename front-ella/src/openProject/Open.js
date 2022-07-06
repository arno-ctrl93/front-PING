import React, { useState } from 'react'
import './Open.css'
import { useStartContext } from '../contexts/StartContext'

let pathOpen = "";

export default function OpenDirectory() {

    const { setHasStarted } = useStartContext();

    const [inputPath, setInputPath] = useState('')

    function handleInputPath(e) {
        setInputPath(e.target.value)
    }

    function validatePath() {
        return inputPath.length > 0;
    }

    function handleSubmit(event) {
        console.log("submitted")
        event.preventDefault();
        setHasStarted(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path: inputPath })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    pathOpen = inputPath;

    return (
        <div className='Open'>
            <div className='lander'>
                <h2>Open Project</h2>
                <p>Open your project on ELLA IDE</p>
            </div>
            <div className='Choose'>
                <input type="file" directory="" webkitdirectory="" />
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