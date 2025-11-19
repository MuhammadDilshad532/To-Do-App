import React, { useState } from "react";
import TaskItem from "./TaskItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    const newItem = { text: newTask, completed: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const updateTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">To Do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
            onEdit={(newText) => updateTask(index, newText)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
