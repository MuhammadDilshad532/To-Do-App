import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaBriefcase, FaUser, FaExclamationTriangle, FaFlag, FaRegCircle, FaCheckCircle } from "react-icons/fa";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    if (!text.trim()) return;
    onEdit(text);
    setIsEditing(false);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Work': return <FaBriefcase className="text-blue-500" />;
      case 'Personal': return <FaUser className="text-green-500" />;
      case 'Urgent': return <FaExclamationTriangle className="text-red-500" />;
      default: return <FaUser className="text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-500';
      case 'Medium': return 'text-yellow-500';
      case 'Low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <li className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 animate-fade-in">
      {isEditing ? (
        <div className="flex items-center space-x-3">
          <input
            className="flex-1 p-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-900 dark:text-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={saveEdit}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <FaCheck />
            <span>Save</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <button
              onClick={onToggle}
              className="text-2xl hover:scale-110 transition-transform duration-200"
            >
              {task.completed ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaRegCircle className="text-gray-400 hover:text-blue-500" />
              )}
            </button>

            <div className="flex-1">
              <p className={`text-lg ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"} transition-all duration-200`}>
                {task.text}
              </p>
              <div className="flex items-center space-x-4 mt-1">
                <div className="flex items-center space-x-1">
                  {getCategoryIcon(task.category)}
                  <span className="text-sm text-gray-600 dark:text-gray-400">{task.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaFlag className={getPriorityColor(task.priority)} />
                  <span className={`text-sm ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-500 hover:bg-blue-500/20 rounded-lg transition-all duration-200 hover:scale-110"
              title="Edit task"
            >
              <FaEdit />
            </button>

            <button
              onClick={onDelete}
              className="p-2 text-red-500 hover:bg-red-500/20 rounded-lg transition-all duration-200 hover:scale-110"
              title="Delete task"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TaskItem;
 