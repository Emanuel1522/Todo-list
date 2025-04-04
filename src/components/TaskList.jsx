import TaskItem from './TaskItem'

const TaskList = ({tasks, deleteTask})=> {
    return(
        <ul className='ulList'>
            {tasks.map((task, index) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </ul>
    )
}
export default TaskList;