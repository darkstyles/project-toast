import React from "react";
import { VARIANT_OPTIONS } from "../ToastPlayground";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);
  const addToast = (e) => {
    e.preventDefault();

    setToasts([
      ...toasts,
      {
        message,
        variant: selectedVariant,
        key: crypto.randomUUID(),
      },
    ]);
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };
  const removeToast = (removeMessage) => {
    setToasts([...toasts.filter(({ message }) => message !== removeMessage)]);
  };
  const resetToast = () => {
    setToasts([]);
  };

  const value = {
    message,
    setMessage,
    selectedVariant,
    setSelectedVariant,
    toasts,
    addToast,
    removeToast,
    resetToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
