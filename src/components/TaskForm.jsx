import { useState } from "react";

const TaskForm = ({addTask})=> {
    const [taskValue, setTaskValue] = useState("");

    const SaveTask = (e)=> {
        e.preventDefault();
        if(taskValue.trim() === "") return;
        addTask(taskValue);
        setTaskValue("");
    }

    return(
        <form className="formAddTask" onSubmit={SaveTask}>
            <input 
            className="inputAddTask"
            value={taskValue} 
            onChange={(e)=> setTaskValue(e.target.value)} 
            placeholder="ESCRIBIR"/>
            <button className="buttonAddTask" type="submit">Agregar</button>
        </form>
    )
}
export default TaskForm;