import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await axios("http://localhost:5000/api/tasks");
      const sortedTasks = result.data.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks);
    };
    fetchTasks();
  }, []);

  const addTaskToState = (task) => {
    setTasks((prevTasks) =>
      [...prevTasks, task].sort((a, b) => b.priority - a.priority)
    );
  };

  const deleteTaskFromState = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <TaskForm addTaskToState={addTaskToState} />
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          deleteTaskFromState={deleteTaskFromState}
        />
      ))}
    </div>
  );
}

export default TaskList;
