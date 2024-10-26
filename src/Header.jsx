import { useContext } from "react";
import { Inbox, Menu, Notification } from "./Component/svg";
import { TaskContext } from "./context/Context";

export default function Header() {
  const { searchTerm, setSearchTerm } = useContext(TaskContext);

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">{Menu}</button>
      <div className="mx-4 flex-1">
        <input
          type="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={() => setSearchTerm(event.target.value)}
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          {Notification}
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          {Inbox}
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
