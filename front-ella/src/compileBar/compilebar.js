import './compilebar.css'

function GitPush () {
    console.log("push")
    const requestPush = async () => 
    {
      const response = await fetch("localhost:9000/git:3");
      const content = await response.json()
      console.log(content);
    };
  }
  
  function GitAdd () {
    const requestAdd = async () => 
    {
      const response = await fetch("localhost:9000/git:1");
      const content = await response.json()
      console.log(content);
    };
  }

  function GitCommit () {
    const requestCommit = async () => 
    {
      const response = await fetch("localhost:9000/git:2");
      const content = await response.json()
      console.log(content);
    };
  }

  function GitPull () {
    const requestPull = async () => 
    {
      const response = await fetch("localhost:9000/git:4");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenCompile () {
    const requestCompile = async () => 
    {
      const response = await fetch("localhost:9000/mavencompile");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenPackage () {
    const requestPackage = async () => 
    {
      const response = await fetch("localhost:9000/maven:1");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenInstall () {
    const requestInstall = async () => 
    {
      const response = await fetch("localhost:9000/maven:2");
      const content = await response.json()
      console.log(content);
    };
  }

  function Maventest () {
    const requestTest = async () => 
    {
      const response = await fetch("localhost:9000/maven:3");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenExec () {
    const requestExec = async () => 
    {
      const response = await fetch("localhost:9000/maven:4");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenTree () {
    const requestTree = async () => 
    {
      const response = await fetch("localhost:9000/maven:5");
      const content = await response.json()
      console.log(content);
    };
  }

  function MavenClean () {
    const requestClean = async () => 
    {
      const response = await fetch("localhost:9000/maven:6");
      const content = await response.json()
      console.log(content);
    };
  }


  function MyToolBar () {
    return (
      <div className='buttons'>
          <button className='run-btn'>Run</button>
          <button className='git-btn' onClick={GitPush}>Git</button>
          <button className='maeven-btn'>Maeven</button>
      </div>
      )
  };
      
 export default MyToolBar;