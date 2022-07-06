import React, { useState } from 'react'
import './New.css'
import { useStartContext } from '../contexts/StartContext'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

let pathNew = "";

export default function QuestionForm() {

      const nav = useNavigate();

      const { setHasStarted } = useStartContext();
  
      const [inputName, setInputName] = useState('')
      const [inputPath, setInputPath] = useState('')

      function handleInputName(e) {
        setInputName(e.target.value)
      }

      function handleInputPath(e) {
        setInputPath(e.target.value)
      }

      function validateForm() {
        return inputName.length > 0 && inputPath.length > 0;
      }

      function handleSubmit(event) {
          console.log("submitted")
          event.preventDefault();
          setHasStarted(true);
          nav("/ide");
          axios({
              method: 'post',
              url: 'http://localhost:9000/init',
              data: {
                  path : inputPath,
                  name: inputName,
              }
          }).then(function (response) {
              console.log(response.data);
          });
      }

      pathNew = inputPath;

      return (
          <div  className='New'>
              <div  className='lander'>
                  <h2>New Project</h2>
                  <p>Create your new project</p>
              </div>
              <div className='Form'>
                  <form className='ella-footer' onSubmit={handleSubmit}>
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
                          disabled={!validateForm()}
                          value="Create"
                      />
                  </form>
              </div>
          </div>
      )
}

export { pathNew };