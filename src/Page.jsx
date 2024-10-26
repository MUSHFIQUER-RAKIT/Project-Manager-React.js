/* eslint-disable react/prop-types */
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = () => setModalOpen(true);
  function closeModal() {
    setModalOpen(false);
    setTaskToUpdate(null);
  }

  const addTask = (category, taskDetails, newTask, isAdd) => {
    if (isAdd) {
      setTasks(prevTasks => ({
        ...prevTasks,
        [category]: [...prevTasks[category], newTask],
      }));
    } else {
      setTasks(prevTasks => ({
        ...prevTasks,
        [category]: prevTasks[category].map(task =>
          task.id === newTask.id ? newTask : task
        ),
      }));
    }
  };

  const deleteTask = (category, index) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((_, i) => i !== index),
    }));
  };

  function handleEditTask(event, task) {
    event.preventDefault();
    setTaskToUpdate(task);
    setModalOpen(true);
  }

  // const handleEditTasks = (category, index, updatedTask, event) => {
  //   event.preventDefault();
  //   const updatedCategory = [...tasks[category]];
  //   updatedCategory[index] = updatedTask;
  //   setTaskToUpdate(prevTasks => ({
  //     ...prevTasks,
  //     [category]: updatedCategory,
  //   }));
  //   setModalOpen(true);
  // };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        isModalOpen,
        setModalOpen,
        openModal,
        closeModal,
        searchTerm,
        setSearchTerm,
        taskToUpdate,
        handleEditTask,
      }}
    >
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
