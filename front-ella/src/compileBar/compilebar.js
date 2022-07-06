import './compilebar.css'
import axios from "axios";
import { useCompilationContext} from "../contexts/CompilationContext";
import { pathProject } from "../App";

function GitPush () {
  console.log("push")
  
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

  function GitCommit () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/git:/dd',
    }).then(function (response) {
      return response.data;
    });
  }

  function GitPull () {
    axios({
      method: 'get',
      url: 'http://localhost:9000/git:3',
    }).then(function (response) {
      return response.data;
    });
  }

  const allFiles = GitAdd();

}

function Run () {

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

function MyToolBar () {
  return (
    <div className='buttons'>
        <button className='run-btn' onClick={Run}>Run</button>
        <button className='git-btn' onClick={GitPush}>Git</button>
    </div>
    )
};
      
 export default MyToolBar;