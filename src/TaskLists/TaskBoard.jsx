import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";
import Modal from "./Modal";
import TaskAction from "./TaskAction";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { tasks } = useContext(TaskContext);

  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  function handleEditTask(event, task) {
    event.preventDefault();
    setTaskToUpdate(task);
    setModalOpen(true);
  }

  return (
    <>
      <div className="mx-auto max-w-7xl p-6 ">
        {isModalOpen && (
          <Modal onClose={closeModal} taskToUpdate={taskToUpdate} />
        )}

        <TaskAction onAdd={openModal} />
        <TasksList tasks={tasks} onEdit={handleEditTask} />
      </div>
    </>
  );
}
