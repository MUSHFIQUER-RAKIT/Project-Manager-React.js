/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TaskContext } from "../context/Context";

export default function Modal({ onClose, taskToUpdate }) {
  console.log(taskToUpdate);
  const { addTask } = useContext(TaskContext);

  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
    date: "",
    category: "todo",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setTaskDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { taskName, description, date, category } = taskDetails;
    if (taskName && description && date) {
      const newTask = { name: taskName, description, date };
      addTask(category, newTask);
      onClose();
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className=" absolute left-0 top-0  w-screen h-full backdrop-blur-sm ">
      <div className="  flex  items-center justify-center transform translate-y-32  p-4 text-white">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={taskDetails.taskName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={taskDetails.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  value={taskDetails.date}
                  onChange={handleChange}
                  name="date"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={taskDetails.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="todo">To-Do</option>
                  <option value="onProgress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={onClose}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmit(event)}
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
