import React from "react";

const Edit = ({
  editValue,
  setVisibleEdit,
  setEditValue,
  applyEdit,
  editData,
}) => {
  return (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
      <button
        onClick={() => {
          applyEdit(editData);
          setVisibleEdit(false);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default Edit;
