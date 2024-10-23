import { TaskAdd } from "../Component/svg";

export default function ToDoAction() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Projectify</h2>
      <div className="flex space-x-2">
        <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
          {TaskAdd}
          Add
        </button>
      </div>
    </div>
  );
}
