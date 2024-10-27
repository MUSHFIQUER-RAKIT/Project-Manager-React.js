import { useContext } from "react";
import { TaskContext } from "../context/Context";
import Modal from "./Modal";
import TaskAction from "./TaskAction";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const { isModalOpen } = useContext(TaskContext);

  return (
    <>
      <div className="mx-auto max-w-7xl p-6 ">
        {isModalOpen && <Modal />}

        <TaskAction />
        <TasksList />
      </div>
    </>
  );
}
