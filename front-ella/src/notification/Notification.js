import "./notification-styles.css";
import checkImg from "./check_icon.png";
import errorImg from "./error-icon.png";

export default function Notification() {
  var success = true;
  return (
    <div className="Notification">{success ? <Success /> : <Error />}</div>
  );
}

function Success() {
  return (
    <div class="layout">
      <div class="header">
        <img class="check" src={checkImg} width="10%" />
        <div class="title">Build successful</div>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div class="layout">
      <div class="header">
        <img class="error-img" src={errorImg} width="10%" />
        <div class="title">Error</div>
      </div>
      <div class="message">**error message**</div>
    </div>
  );
}
