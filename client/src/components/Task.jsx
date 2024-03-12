import React from "react";

function Task({ task, deleteTaskFromState }) {
  return (
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-5">
      <h3 class="text-lg font-semibold text-gray-900">{task.title}</h3>
      <p class="text-gray-600 mt-2">{task.description}</p>
      <p class="text-gray-500 mt-2">
        Priority: <span class="font-medium text-gray-700">{task.priority}</span>
      </p>
      <p class="text-gray-500">
        Category: <span class="font-medium text-gray-700">{task.category}</span>
      </p>
      <button
        onClick={() => deleteTaskFromState(task._id)}
        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
