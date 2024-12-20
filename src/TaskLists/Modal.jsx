import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context/Context";

export default function Modal() {
  const { addTask, closeModal, taskToUpdate } = useContext(TaskContext);
  const [category, setCategory] = useState("todo");
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const [taskDetails, setTaskDetails] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      name: "",
      description: "",
      date: "",
    }
  );

  const handleChange = e => {
    const { name, value } = e.target;
    setTaskDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (taskDetails, event) => {
    event.preventDefault();

    if (taskDetails.name && taskDetails.description && taskDetails.date) {
      addTask(category, taskDetails, isAdd);
      closeModal();
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className=" absolute left-0 top-0  w-screen h-full backdrop-blur-sm ">
      <div className="  flex  items-center justify-center transform translate-y-32  p-4 text-white">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              {isAdd ? "Create Task" : "Edit Task"}
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={taskDetails.name}
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
                  value={category}
                  onChange={e => setCategory(e.target.value)}
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
                  onClick={closeModal}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmit(taskDetails, event)}
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {isAdd ? "Create Task" : "Edit Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
