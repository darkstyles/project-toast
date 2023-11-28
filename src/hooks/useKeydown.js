import React from "react";

const useKeydown = ({ key, handler }) => {
  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === key) {
        handler();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};

export default useKeydown;
