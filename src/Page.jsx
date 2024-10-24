import { useState } from "react";

import Header from "./Header";
import SideBar from "./SideBar";
import TaskBoard from "./TaskLists/TaskBoard";
import { TaskContext } from "./context/Context";

const initialTasks = {
  todo: [],
  onProgress: [],
  done: [],
  revised: [],
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (category, task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [category]: [...prevTasks[category], task],
    }));
  };

  const deleteTask = (category, index) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((_, i) => i !== index),
    }));
  };

  // const editTask = (category, index, updatedTask, event) => {
  //   event.preventDefault();
  //   const updatedCategory = [...tasks[category]];
  //   updatedCategory[index] = updatedTask;
  //   setTasks(prevTasks => ({ ...prevTasks, [category]: updatedCategory }));
  // };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default function Page() {
  return (
    <TaskProvider>
      <div className="bg-gray-900 text-white">
        <div className="flex h-screen relative">
          <SideBar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
            <TaskBoard />
          </main>
        </div>
      </div>
    </TaskProvider>
  );
}
