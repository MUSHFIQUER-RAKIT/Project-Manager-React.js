import { useContext } from "react";
import { TodoDelete, TodoEdit, TodoSort } from "../Component/svg";
import { TaskContext } from "../context/Context";

const getCategory = category => {
  switch (category.toLowerCase()) {
    case "todo":
      return "bg-indigo-600";
    case "onprogress":
      return "bg-yellow-500";
    case "done":
      return "bg-teal-500";
    case "revised":
      return "bg-rose-500";
    default:
      return "bg-red-700 text-gray-800 border-gray-300";
  }
};
const getColor = category => {
  switch (category.toLowerCase()) {
    case "todo":
      return "text-indigo-500";
    case "onprogress":
      return "text-yellow-500";
    case "done":
      return "text-teal-500";
    case "revised":
      return "text-rose-500";
    default:
      return "text-red-700";
  }
};

export default function TasksList({ onEdit }) {
  const { tasks, deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      {Object.entries(tasks).map(([category, taskArray]) => (
        <div key={category} className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
          <div className={`rounded-lg ${getCategory(category)}  p-4`}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {category.toUpperCase()} ({taskArray.length})
              </h3>

              <button>{TodoSort}</button>
            </div>

            {taskArray.length === 0 ? (
              <p>Task List is empty!</p>
            ) : (
              taskArray.map((task, index) => (
                <div key={index} className="mb-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex justify-between">
                    <h4
                      className={`mb-2 flex-1 font-semibold ${getColor(
                        category
                      )}`}
                    >
                      {task.name}
                    </h4>

                    <div className="flex gap-2">
                      <button onClick={() => deleteTask(category, index)}>
                        {TodoDelete}
                      </button>
                      <button onClick={() => onEdit(event, task)}>
                        {TodoEdit}
                      </button>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-zinc-200">
                    {task.description}
                  </p>

                  <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
