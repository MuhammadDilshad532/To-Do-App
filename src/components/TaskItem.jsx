import React, { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    if (!text.trim()) return;
    onEdit(text);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center mb-2">
      {isEditing ? (
        <>
          <input
            className="flex-1 p-2 border rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={saveEdit}
            className="ml-2 p-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={onToggle}
          >
            {task.text}
          </span>

          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={onDelete}
            className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
 