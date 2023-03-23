import { useState } from "react"
import { useDispatch } from 'react-redux'
import { removeToDo } from '../../redux/toDoReducer'

import styles from './ReduxToDo.module.css'
import closeIcon from '../../assets/icon-close.svg'

export const ReduxToDo = ({ toDo }) => {
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false)

    const toggleDone = () => {
        setIsDone(currentIsDone => !currentIsDone)
    }

    return (
        <li className={styles.toDoListItem}>
            <span 
                onClick={() => toggleDone()} 
                className={isDone ? styles.done : null}
            >
                {toDo.value}
            </span>
            <div>
                <span className={styles.removeIcon} onClick={() => dispatch(removeToDo(toDo.id))}>
                    <img src={closeIcon} alt="delete icon" title="Delete task"/>
                </span>
            </div>
        </li>
    )
}


