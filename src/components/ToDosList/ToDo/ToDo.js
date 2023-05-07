import { useState } from "react"
import styles from './ToDo.module.css'
import trashIcon from '../../../assets/trash.svg'

export const ToDo = ({ toDo, removeToDo }) => {
    const [isDone, setIsDone] = useState(false)

    const toggleDone = () => {
        setIsDone(currentIsDone => !currentIsDone)
    }

    return (
        //how to add fill to svg?
        <li className={styles.toDoListItem}>
            <span 
                onClick={() => toggleDone()} 
                className={isDone ? styles.done : null}
            >
                {toDo.value}
            </span>
            {isDone &&
                <div>
                    <span className={styles.removeIcon} onClick={() => removeToDo(toDo.id)}>
                        <img src={trashIcon} alt="delete icon" title="Delete task" />
                    </span>
                </div>
            }
        </li>
    )
}


