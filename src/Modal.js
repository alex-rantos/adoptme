import React from "react";
const { useRef, useEffect } = require("react");
const { createPortal } = require("react-dom");

const Modal = ({ children }) => {
  const elfRef = useRef(null);
  if (!elfRef.current) {
    const div = document.createElement("div");
    elfRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elfRef.current);

    return () => modalRoot.removeChild(elfRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elfRef.current);
};

export default Modal;
