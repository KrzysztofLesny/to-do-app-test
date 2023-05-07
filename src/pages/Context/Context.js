import { ToDoInputForm } from '../../components/ToDoInputForm/';
import { ToDosList } from '../../components/ToDosList';
import { useToDos } from '../../context/ToDoContext'
import styles from '../../App.module.css'

export const Context = () => {
    const {toDos, addToDo, removeToDo} = useToDos();

    return (
        <>
                <h2 className={styles.subHeader}>using useContext</h2>
                <ToDoInputForm addToDo={addToDo} />
                <h2 className={styles.smallHeading}>Tasks</h2>
                <ToDosList toDos={toDos} removeToDo={removeToDo}/>
        </>
    )
}