import ToDoAction from "./ToDoAction";
import Todos from "./Todos";

export default function TodoBoard() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <ToDoAction />
      <Todos />
    </div>
  );
}
