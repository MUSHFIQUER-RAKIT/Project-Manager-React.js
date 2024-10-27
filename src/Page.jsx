/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "./context/Context";
import Header from "./Header";
import { initialState, taskReducer } from "./Reducers/TaskReducer";
import SideBar from "./SideBar";
import TaskBoard from "./TaskLists/TaskBoard";

export const TaskProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const openModal = () => setModalOpen(true);
  function closeModal() {
    setModalOpen(false);
    setTaskToUpdate(null);
  }

  const addTask = (category, taskDetails, isAdd) => {
    if (isAdd) {
      dispatch({
        type: "ADD_TASK",
        payload: { category, task: taskDetails },
      });
    } else {
      dispatch({
        type: "EDIT_TASK",
        payload: { category, task: taskDetails },
      });
    }
  };

  function handleEditTask(event, category, task) {
    event.preventDefault();
    setTaskToUpdate(task);
    setModalOpen(true);
  }

  const deleteTask = (category, task) => {
    if (confirm("Are You Sure ?\nYou want To Delete?") === true) {
      dispatch({
        type: "REMOVE_TASK",
        payload: { category, task },
      });
      toast.success("Task Successfully Deleted");
    } else {
      toast.warning("Task Not Deleted");
    }
  };
  return (
    <TaskContext.Provider
      value={{
        state,
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
