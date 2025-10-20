import { useState } from "react";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Write a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
