import { CheckSquareIcon, ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, OnTaskClick, DeleteTaskClick }) {
  const navigate = useNavigate();
  function handleNavigate(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/tasks?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => OnTaskClick(tasks.id)}
            className={`bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
              tasks.isCompleted && "line-through bg-green-500"
            }`}
          >
            {tasks.isCompleted && (
              <CheckSquareIcon className="w-5 h-5 min-w-[20px]" />
            )}
            {tasks.title}
          </button>
          <Button onClick={() => handleNavigate(tasks)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => DeleteTaskClick(tasks.id)}>
            <DeleteIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
