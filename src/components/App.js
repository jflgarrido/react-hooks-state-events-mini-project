import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All")
  

  function addNewTask(taskObj){
    setTasks([...tasks, taskObj])
  }
  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const taskToDisplay = tasks.filter((task) =>
    category === "All" || task.category === category)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={addNewTask} 
        categories={CATEGORIES}
        
      />
      <TaskList 
        tasks={taskToDisplay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
