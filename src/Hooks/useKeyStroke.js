import React, { useCallback, useEffect } from "react";

export const useKeyStroke = (keyCode, callback) => {

  const handleEvent = useCallback((e) => {
    if (keyCode === e.keyCode && typeof callback === "function") callback();
  }, []);
//test
  const addKeyEvent = () => {
    document.addEventListener("keydown", handleEvent, false);
  };

  const removeKeyEvent = () => {
    document.removeEventListener("keydown", handleEvent, false);
  };

  useEffect(() => {
    addKeyEvent();
    return () => removeKeyEvent();
  }, []);

  return;
};

