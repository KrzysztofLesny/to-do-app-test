import styles from './ToDosList.module.css'
import ToDo from '../ToDo'
import { useToDos } from '../../context/ToDoContext'

export const ToDosList = () => {
    const {toDos, removeToDo} = useToDos();

    return (
        <>
            <ul className={styles.toDoList}>
                {toDos.length ? toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />) : <p>Currently there are no tasks for you to do.</p>}
            </ul>
        </>
    )
}