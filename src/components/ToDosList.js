import styles from './styles/ToDosList.module.css'
import { ToDo } from './ToDo'



export const ToDosList = ({ toDos, removeToDo, editToDo }) => {

    return (
        <ul className={styles.toDoList}>
                {toDos.map(toDo => (
                    <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />
                ))}
        </ul>
    )
}