import styles from "./AllToasts.module.css";
import toast from "react-hot-toast";

const Toast = Object.freeze({
  success: (message) => {
    toast.remove();
    toast.custom(
      (toast) => (
        <ToastJsx toastId={toast.id} type={"success"} message={message} />
      ),
      ToastConfig
    );
  },
  error: (message) => {
    toast.remove();
    toast.custom(
      (toast) => (
        <ToastJsx toastId={toast.id} type={"error"} message={message} />
      ),
      ToastConfig
    );
  },
  info: (message) => {
    toast.remove();
    toast.custom(
      (toast) => (
        <ToastJsx toastId={toast.id} type={"info"} message={message} />
      ),
      ToastConfig
    );
  },
  warning: (message) => {
    toast.remove();
    toast.custom(
      (toast) => (
        <ToastJsx toastId={toast.id} type={"warning"} message={message} />
      ),
      ToastConfig
    );
  },
  loading: (message) => {
    toast.remove();
    toast.custom((toast) => <ToastJsx type={"loading"} message={message} />, {
      duration: 600000,
      position: "top-right",
    });
  },
});

export default Toast;

const ToastJsx = ({ toastId, type, message }) => {
  const meta = {
    success: {
      icon: "/icons/success-icon.svg",
      background_color: "#00D807",
    },
    error: {
      icon: "/icons/error-icon.svg",
      background_color: "#ff4b4b",
    },
    info: {
      icon: "/icons/info-icon.svg",
      background_color: "#54c7ec",
    },
    warning: {
      icon: "/icons/warning-icon.svg",
      background_color: "#f1c40f",
    },
    loading: {
      icon: "/icons/loading-icon.svg",
      background_color: "#537895",
    },
  };
  return (
    <div className={`${styles.toast}`}>
      {/* Close Toast */}
      {type !== "loading" && (
        <img
          src="/icons/close-icon.svg"
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            cursor: "pointer",
          }}
          onClick={() => {
            toast.remove(toastId);
          }}
        />
      )}
      {/* Icon Div */}
      <div
        className={`${styles.icon_div}`}
        style={{ backgroundColor: meta[type].background_color }}
      >
        <img src={meta[type].icon} />
      </div>
      {/* Message Div */}
      <div className={`${styles.msg_div}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

const ToastConfig = {
  duration: 4000,
  position: "top-right",
};
