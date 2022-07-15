import React from "react";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";
import st from "./Check.module.scss";

const Check = ({ todo, changeCompleted }) => {
  const rootStyle = [st.title];
  if (todo.isCompleted) {
    rootStyle.push(st.active);
  }
  return (
    <div className={st.leftBlock}>
      {todo.isCompleted ? (
        <BsBookmarkCheckFill size="30" />
      ) : (
        <BsBookmarkCheck size="30" />
      )}
      <h1
        className={rootStyle.join(" ")}
        onClick={(e) => changeCompleted(todo)}
      >
        {todo.title}
      </h1>
    </div>
  );
};

export default Check;
