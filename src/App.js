import React, { useState } from "react";
import RenderTodo from "./Components/RenderTodo/RenderTodo";
import Modal from "./Components/Modal/Modal";
import Edit from "./Components/Edit/Edit";
import AddItem from "./Components/AddItem/AddItem";
import CreateNewItem from "./Components/CreateNewItem/CreateNewItem";

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "One", isCompleted: false, isEdit: false },
    { id: 2, title: "Two", isCompleted: false, isEdit: false },
    { id: 3, title: "Three", isCompleted: false, isEdit: false },
  ]);

  const [editValue, setEditValue] = useState("");
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editData, setEditData] = useState();

  const [visible, setVisible] = useState(false);

  const changeCompleted = (data) => {
    const change = [...todo].find((item) => item.id === data.id);
    change.isCompleted = !change.isCompleted;
    setTodo([...todo]);
  };

  const create = (data) => {
    const newTodo = {
      id: Date.now(),
      title: data,
      isCompleted: false,
      isEdit: false,
    };
    setTodo([...todo, newTodo]);
    setVisible(false);
  };

  const remove = (data) => {
    setTodo([...todo].filter((item) => data.id !== item.id));
  };

  const changeEdit = (data) => {
    const change = [...todo].find((item) => item.id === data.id);
    setEditValue(change.title);
    setEditData(data);
  };

  const applyEdit = (data) => {
    const change = [...todo].find((item) => item.id === data.id);
    change.title = editValue;
    change.isEdit = true;
    setTodo([...todo]);
  };

  return (
    <div className="container">
      {todo.map((item) => (
        <RenderTodo
          key={item.id}
          todo={item}
          remove={remove}
          changeCompleted={changeCompleted}
          setVisibleEdit={setVisibleEdit}
          changeEdit={changeEdit}
        />
      ))}
      <Modal visible={visibleEdit} setVisible={setVisibleEdit}>
        <Edit
          editValue={editValue}
          setEditValue={setEditValue}
          applyEdit={applyEdit}
          editData={editData}
          setVisibleEdit={setVisibleEdit}
        />
      </Modal>
      <Modal visible={visible} setVisible={setVisible}>
        <CreateNewItem create={create} />
      </Modal>
      <AddItem setVisible={setVisible} />
    </div>
  );
};

export default App;
