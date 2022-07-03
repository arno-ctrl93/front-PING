import './compilebar.css'

function GitPush () {
    console.log("push")
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