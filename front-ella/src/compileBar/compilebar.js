import './compilebar.css'
import axios from "axios";
import { useCompilationContext} from "../contexts/CompilationContext";
import { pathProject } from "../App";
import { useState } from "react";

function MyToolBar () {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }


  const Popup = props => {
    return (
        <div className="popup-box">
          <div className="box">
            <button className="btn-close" onClick={props.handleClose}></button>
            {props.content}
          </div>
        </div>
    );
  };

  function Run () {

    console.log("run")

    const { setIsCompilation } = useCompilationContext();

    axios({
      method: 'post',
      url: 'http://localhost:9000/mvn/compile',
      data: {
        rootpath: pathProject,
      }
    }).then(function (response) {
      console.log(response.data);
      setIsCompilation(response.data);
    });
  }

  function GitPush () {
    console.log("push")

    const [messageCommit, setMessageCommit] = useState('');

    function handleInputMessage(e) {
      setMessageCommit(e.target.value)
    }

    function GitAdd () {
      let res = '';
      axios({
        method: 'get',
        url: 'http://localhost:9000/git:/dd',
      }).then(function (response) {
        res = response.data;
      });
      return res;
    }

    //const allFiles = GitAdd();
    const allFiles = ['test', 'example', 'example/test', 'hello.java', 'example/test/test.java'];

    const [checkedState, setCheckedState] = useState(
        new Array(allFiles.length).fill(false)
    );

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
    }

    let addFiles = [];

    function handleSubmit () {
      console.log(checkedState.length)
      console.log(messageCommit)

      for (let i = 0; i < checkedState.length; i++) {
        if (checkedState[i]) {
          addFiles.push(allFiles[i]);
        }
      }
      console.log(addFiles);
      setIsOpen(!isOpen);
      axios({
        method: 'post',
        url: 'http://localhost:9000/git:/dd',
        data: {
          files: addFiles,
          message: messageCommit,
        }
      }).then(function (response) {
        console.log(response.data);
      });
      alert("Push Successful");
      setMessageCommit("")
    }

    return (
        <div className='compilebar'>
          <ul className='files-list'>
            {allFiles.map((name, index) => {
              return (
                  <li key={index}>
                    <div className='file-name'>
                      <input
                          type='checkbox'
                          id={`checkbox-${index}`}
                          name={name}
                          value={name}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  </li>
              );
            })}
          </ul>
          <form className='commit-message' onSubmit={handleSubmit}>
            <div>
              <input
                  type='text'
                  placeholder='Commit Message'
                  onChange={handleInputMessage}
                  value={messageCommit}
              />
              <input type='submit' value='Push' />
            </div>
          </form>
        </div>
    )

  }

  function SaveButton () {
    alert("Your changes have been saved")
  }

  return (
    <div className='buttons'>
        <button className='run-btn' onClick={Run}>Run</button>
        <button className='git-btn' onClick={togglePopup}>Git</button>
        {isOpen && <Popup handleClose={togglePopup} content={
          <div className='popup-content'>
            <h1>Files to add</h1>
            <p>Select the file you want to add</p>
            <GitPush />
          </div>
        } />}
        <button className='save_btn' onClick={SaveButton}>Save</button>
    </div>
    )
};
      
 export default MyToolBar;