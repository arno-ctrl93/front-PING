import "./notification-styles.css";
import checkImg from "./check_icon.png";
import errorImg from "./error-icon.png";

export default function Notification ({successMessage, errorMessage}) {
  var success = false;
  return (
    <div className="Notification">{success ? <Success /> : <Error />}</div>
  );
}

function Success() {
  return (
    <div className="layout">
      <div className="header">
        <img className="icon-img" src={checkImg} />
        <div className="title">Build successful</div>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div className="layout">
      <div className="header">
        <img className="icon-error-img" src={errorImg}/>
        <div className="title">Error</div>
      </div>
      <div className="message">**error message**</div>
    </div>
  );
}
