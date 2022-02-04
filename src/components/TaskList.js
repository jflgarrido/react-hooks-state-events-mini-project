import React from "react";
import Task from "./Task"

function TaskList({tasks, onDeleteTask}) {
   
  const tasksToDisplay = tasks.map((task) => {
    return <Task text={task.text} key={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
  })
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
