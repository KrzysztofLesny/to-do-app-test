import styles from './ReduxToDosList.module.css'
import ReduxToDo from '../ReduxToDo'
import { useSelector } from 'react-redux'

export const ReduxToDosList = () => {
    const { toDos } = useSelector(state => state.toDoer)

    return (
        <>
            <ul className={styles.toDoList}>
                {toDos.length ? toDos.map(toDo => <ReduxToDo key={toDo.id} toDo={toDo} />) : <p>Currently there are no tasks for you to do.</p>}
            </ul>
        </>
    )
}