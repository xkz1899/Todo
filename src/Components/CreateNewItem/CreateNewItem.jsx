import React, { useState } from "react";

const CreateNewItem = ({ create }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={(e) => {
          create(value);
          setValue("");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreateNewItem;
