import {
  IconoAlertWarning,
  IconoAlertInfo,
  IconoAlertSuccess,
  IconoAlertError,
} from "../../assets";
import "./Alert.Module.css";

const Warning = ({ size, severity, children }) => {
  return (
    <div className={`alert container-${severity} ${size}`}>
      {severity === "success" && <IconoAlertSuccess className={`icon-${severity}`} /> }
      {severity === "info"    && <IconoAlertInfo    className={`icon-${severity}`} /> }
      {severity === "warning" && <IconoAlertWarning className={`icon-${severity}`} /> }
      {severity === "error"   && <IconoAlertError   className={`icon-${severity}`} /> }
      <div className="content-warning">{children}</div>
    </div>
  );
};

export default Warning;
