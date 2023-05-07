import { ToDoInputForm } from '../../components/ToDoInputForm';
import { ToDosList } from '../../components/ToDosList'
import { useDispatch } from 'react-redux'
import { addToDo, removeToDo } from '../../redux/toDoReducer'

import styles from '../../App.module.css'

import { useSelector } from 'react-redux';

export const Redux = () => {
    const { toDos } = useSelector(state => state.toDoer)
    const dispatch = useDispatch();

    return (
        <>
            <h2 className={styles.subHeader}>using Redux</h2>
            <ToDoInputForm addToDo={(id) => dispatch(addToDo(id))} />
            <h2 className={styles.smallHeading}>Tasks</h2>
            <ToDosList toDos={toDos} removeToDo={(id) => dispatch(removeToDo(id))} />
        </>
    )
}