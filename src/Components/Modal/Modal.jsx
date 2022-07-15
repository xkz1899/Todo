import React from "react";
import st from "./Modal.module.scss";

const Modal = ({ children, visible, setVisible }) => {
  const rootStyle = [st.mainModal];

  !visible && rootStyle.push(st.hide);

  return (
    <div className={rootStyle.join(" ")} onClick={(e) => setVisible(false)}>
      <div className={st.contentModal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
