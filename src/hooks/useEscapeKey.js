import React from "react";

const useEscapeKey = (handleKeydown) => {
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};

export default useEscapeKey;
