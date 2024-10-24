import { useContext, useState } from "react";
import { TaskContext } from "./context";

const Modal = ({ closeModal }) => {
  const { addTask } = useContext(TaskContext);

  // Use a single state object for all task fields
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
    date: "",
    category: "todo", // Default category
  });

  // Handle input changes for any field
  const handleChange = e => {
    const { name, value } = e.target;
    setTaskDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { taskName, description, date, category } = taskDetails;
    if (taskName && description && date) {
      const newTask = { name: taskName, description, date };
      addTask(category, newTask); // Add the new task to the selected category
      closeModal(); // Close modal after submission
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="modal">
      <h3>Create Task</h3>

      {/* Task Name */}
      <input
        type="text"
        placeholder="Task Name"
        name="taskName"
        value={taskDetails.taskName}
        onChange={handleChange}
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        name="description"
        value={taskDetails.description}
        onChange={handleChange}
      ></textarea>

      {/* Date */}
      <input
        type="date"
        name="date"
        value={taskDetails.date}
        onChange={handleChange}
      />

      {/* Category Selection */}
      <select
        name="category"
        value={taskDetails.category}
        onChange={handleChange}
      >
        <option value="todo">To-Do</option>
        <option value="onProgress">On Progress</option>
        <option value="done">Done</option>
        <option value="revised">Revised</option>
      </select>

      <button onClick={handleSubmit}>Create Task</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default Modal;
