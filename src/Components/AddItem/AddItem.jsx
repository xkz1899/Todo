import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import st from "./AddItem.module.scss";

const AddItem = ({ setVisible }) => {
  return (
    <button onClick={() => setVisible(true)} className={st.add}>
      <AiFillFileAdd size="70" />
    </button>
  );
};

export default AddItem;
