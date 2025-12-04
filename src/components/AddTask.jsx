import { useState } from "react";
import Input from "./Input";

function AddTask({ AddTaskClick }) {
  // Estados locais para os campos de entrada
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 bg-slate-200 p-6 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Descrição da tarefa"
        className="w-full p-2 rounded-md border border-slate-400"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button
        onClick={() => {
          // Validação simples para garantir que os campos não estejam vazios
          if (title.trim() !== "" && description.trim() !== "") {
            AddTaskClick(title, description);
            setTitle("");
            setDescription("");
          } else {
            // Exibir um alerta se os campos estiverem vazios
            alert(
              "Por favor, preencha ambos os campos antes de adicionar a tarefa."
            );
          }
        }}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default AddTask;
