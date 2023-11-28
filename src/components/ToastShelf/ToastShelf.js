import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ key, variant, message }) => {
        return (
          <li key={key} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              message={message}
              onClose={removeToast}
            ></Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
