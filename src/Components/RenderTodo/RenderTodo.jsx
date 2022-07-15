import React from "react";
import st from "./RenderTodo.module.scss";
import Check from "./Check";
import { IoIosRemoveCircle } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";

const RenderTodo = ({
  todo,
  changeCompleted,
  setVisibleEdit,
  changeEdit,
  remove,
}) => {
  return (
    <div className={st.mainBlock}>
      <Check todo={todo} changeCompleted={changeCompleted} />
      <div className={st.btns}>
        <button
          onClick={(e) => {
            changeEdit(todo);
            setVisibleEdit(true);
          }}
          className={st.edit}
        >
          <AiOutlineEdit size="30" />
        </button>
        <button onClick={() => remove(todo)} className={st.remove}>
          <IoIosRemoveCircle size="30" />
        </button>
      </div>
    </div>
  );
};

export default RenderTodo;
