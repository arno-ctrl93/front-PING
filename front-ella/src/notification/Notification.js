import "./notification-styles.css";
import checkImg from "./check_icon.png";
import errorImg from "./error-icon.png";

export default function Notification() {
  var success = false;
  return (
    <div className="Notification">{success ? <Success /> : <Error />}</div>
  );
}

function Success() {
  return (
    <div class="layout">
      <div class="header">
        <img class="icon-img" src={checkImg} />
        <div class="title">Build successful</div>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div class="layout">
      <div class="header">
        <img class="icon-error-img" src={errorImg}/>
        <div class="title">Error</div>
      </div>
      <div class="message">**error message**</div>
    </div>
  );
}
