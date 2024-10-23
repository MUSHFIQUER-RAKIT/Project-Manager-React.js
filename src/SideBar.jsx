import { NavData } from "./Data/nav-data";

export default function SideBar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img
            src="../assets/lws-logo-en.svg"
            className="mx-auto h-10 text-center"
          />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          {NavData.map(item => (
            <li key={item.id}>
              <a href="#" className="flex items-center">
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
