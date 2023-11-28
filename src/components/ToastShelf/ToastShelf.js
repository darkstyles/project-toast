import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [], onClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ key, variant, message }) => {
        return (
          <li key={key} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              message={message}
              onClose={onClose}
            ></Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
