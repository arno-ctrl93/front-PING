import axios from 'https://cdn.skypack.dev/axios@0.27.2';
import logo from './Totally_Spies_logo.png'
import React, { useState } from 'react'
import './Start.css'

function Banner () {
    const title = 'ELLA';
    const desc = 'Welcome to ELLA IDE';
    return (<div className = 'ella-banner'>  
        <h1 className='ella-title'> { title } </h1> 
        <h3 className='ella-desc'> { desc } </h3>
        <img src={ logo } alt='Tottaly Spies' className='TS-logo' />
        </div>
     )
};

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="btn-close" onClick={props.handleClose}>x</button>
        {props.content}
        </div>
    </div>
  );
};

function QuestionForm() {
  
  const [inputName, setInputName] = useState('')
  const [inputPath, setInputPath] = useState('')

  function handleInputName(e) {
    setInputName(e.target.value)
  }
  
  function handleInputPath(e) {
    setInputPath(e.target.value)
  }

  return (
    <form 
      className='ella-footer'
      onSubmit={(event) => {
        console.log("submitted")
        //window.open('https://google.com', '_blank', 'noopener,noreferrer');
        event.preventDefault();
        const body = { inputName, inputPath };
        axios
          .post("https://google.com", body)
          .then((response) => alert(`Project created ! ${response}`))
          .catch((error) => alert(`Not able to create project : ${error}`));
      }}
    >
      <input
        placeholder='Name Project'
        onChange={handleInputName}
        value={inputName}
        />
      <input
        placeholder='Path Project'
        onChange={handleInputPath}
        value={inputPath}
        />
      <input
        type="submit"
        value="Create"
        />
    </form>
   )
}

function OpenDirectory () {
  console.log("open directory")
  let fileHandle;
  
  async function getFile() {
    console.log("open directory in the async")
    // open file picker
    [fileHandle] = await window.showOpenFilePicker();
    
    if (fileHandle.kind === 'file') {
      console.log("its a file")
    } else if (fileHandle.kind === 'directory') {
      console.log("its a dir")
    }
  }
}

function Buttons () {
  
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopupNew = () => {
    setIsOpenNew(!isOpenNew)
  }
  
  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className="buttons">
      
      <div className="new-btn">
      
        <button onClick={togglePopupNew}>NEW</button>

        {isOpenNew && <Popup
          content={<div>
            <h2>New Project</h2>
            <p>Create your new project</p>
            
            <QuestionForm />
  
          </div>}
          handleClose={togglePopupNew}
        />}
      </div>
      
      <div className="open-btn">
        <button onClick={togglePopup}>OPEN</button>
      
        {isOpen && <Popup
          content={<div>
            <h2>Open Project</h2>
            <p>Open your project on ELLA IDE</p>
            <input type="file" directory="" webkitdirectory="" />
            <button onClick={OpenDirectory}>Choose a Directory</button>
          </div>}
          handleClose={togglePopup}
        />}
      </div>
    </div>
  );
}
function Start () {
  return (
    <div className="Component">
      <Banner />
      <Buttons />
    </div>
  );
}

export default Start;