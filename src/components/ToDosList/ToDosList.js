import styles from './ToDosList.module.css'
import { ToDo } from './ToDo'

export const ToDosList = ({toDos, removeToDo}) => {

    return (
        <>
            <ul className={styles.toDoList}>
                {toDos.length ? toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />) : <p>Currently there are no tasks for you to do.</p>}
            </ul>
        </>
    )
}