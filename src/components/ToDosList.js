import styles from './styles/ToDosList.module.css'
import { ToDo } from './ToDo'
import { useToDos } from './ToDoContext'

export const ToDosList = () => {
    const [toDos,, removeToDo] = useToDos([0, 2]);

    return (
        <>
            <ul className={styles.toDoList}>
                {toDos.length ? toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />) : <p>Currently there are no tasks for you to do.</p>}
            </ul>
        </>
    )
}