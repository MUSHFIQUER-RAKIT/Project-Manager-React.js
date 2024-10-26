import { useContext } from "react";
import { TaskContext } from "../context/Context";
import Modal from "./Modal";
import TaskAction from "./TaskAction";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const { tasks, isModalOpen, openModal, closeModal, taskToUpdate } =
    useContext(TaskContext);

  return (
    <>
      <div className="mx-auto max-w-7xl p-6 ">
        {isModalOpen && (
          <Modal onClose={closeModal} taskToUpdate={taskToUpdate} />
        )}

        <TaskAction onAdd={openModal} />
        <TasksList tasks={tasks} />
      </div>
    </>
  );
}
