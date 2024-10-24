import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";
import Modal from "./Modal";
import TaskAction from "./TaskAction";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { tasks } = useContext(TaskContext);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <div className="mx-auto max-w-7xl p-6 ">
        {isModalOpen && <Modal onClose={closeModal} />}

        <TaskAction onAdd={openModal} />
        <TasksList tasks={tasks} />
      </div>
    </>
  );
}
