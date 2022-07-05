import React, { useState } from 'react'
import './New.css'
import { useStartContext } from '../contexts/StartContext'
import { useNavigate } from "react-router-dom";

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
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ path: inputPath + '/' + inputName })
          };
          fetch('https://reqres.in/api/posts', requestOptions)
              .then(response => response.json())
              .then(data => this.setState({ postId: data.id }));

          //window.open('https://google.com', '_blank', 'noopener,noreferrer');
      }

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