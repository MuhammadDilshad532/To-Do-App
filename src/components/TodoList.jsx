import React, { useState } from "react";
import { FaPlus, FaChartBar, FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";
import TaskItem from "./TaskItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Personal");
  const [newPriority, setNewPriority] = useState("Medium");

  const addTask = () => {
    if (!newTask.trim()) return;

    const newItem = {
      text: newTask,
      completed: false,
      category: newCategory,
      priority: newPriority,
      createdAt: new Date()
    };
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

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-3">
            <FaTasks className="text-blue-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalTasks}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{completedTasks}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-3">
            <FaClock className="text-orange-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{pendingTasks}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center space-x-3">
            <FaChartBar className="text-purple-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Task Input Card */}
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Create New Task</h2>

        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-4 bg-white/50 dark:bg-gray-800/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-900 dark:text-white"
              >
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-900 dark:text-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            onClick={addTask}
          >
            <FaPlus />
            <span>Add Task</span>
          </button>
        </div>

        {/* Task List */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your Tasks</h3>
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <FaTasks className="text-gray-400 text-4xl mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add one above to get started!</p>
            </div>
          ) : (
            <ul className="space-y-3">
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
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
