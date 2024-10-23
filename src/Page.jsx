import Header from "./Header";
import SideBar from "./SideBar";
import TodoBoard from "./ToDoLists/TodoBoard";

export default function Page() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <TodoBoard />
      </main>
    </div>
  );
}
