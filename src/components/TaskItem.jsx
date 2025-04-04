
const TaskItem = ({task, deleteTask})=> {
    return(
        <li className="liList">
            <input className="checkbox" type="checkbox" />
            <p className="paragraphList">{task.text}</p>
            <button onClick={()=> deleteTask(task.id)}>❌</button>
        </li>
    )

}
export default TaskItem;