import { useState } from "react"
import styles from './styles/ToDo.module.css'
import closeIcon from '../assets/icon-close.svg'

export const ToDo = ({ toDo, removeToDo }) => {
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
                <span className={styles.removeIcon} onClick={() => removeToDo(toDo.id)}>
                    <img src={closeIcon} alt="delete icon" title="Delete task"/>
                </span>
            </div>
        </li>
    )
}


