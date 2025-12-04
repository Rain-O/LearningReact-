import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[600px] space-y-6">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col">
          <h1>Titulo:</h1>
          <h1 className="w-full p-2 rounded-md border border-slate-400 break-words whitespace-normal min-w-0">
            {title}
          </h1>
          <h1>Descrição:</h1>
          <p className="w-full p-2 rounded-md border border-slate-400 break-words whitespace-normal min-w-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
