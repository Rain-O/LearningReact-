import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Adicionar a sua API aqui se quiser carregar tarefas iniciais
  /* useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=8",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);*/

  function OnTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Preciso alterar a task cujo ID foi clicado
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Caso contrário, retorno a task inalterada
      return task;
    });
    setTasks(newTasks);
  }

  function DeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function AddTaskClick(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 mx-auto flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-6">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask AddTaskClick={AddTaskClick} />
        <Tasks
          tasks={tasks}
          OnTaskClick={OnTaskClick}
          DeleteTaskClick={DeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
