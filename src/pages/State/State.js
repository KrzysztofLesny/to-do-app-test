import { useState } from 'react';

import { ToDoInputForm } from '../../components/ToDoInputForm';
import { ToDosList } from '../../components/ToDosList';

import styles from '../../App.module.css'

export const State = () => {
    const [toDos, setToDos] = useState([]);

    const addToDo = (newToDo) => {
      setToDos(currentToDos => {
        return [...currentToDos, newToDo]
      })
    }
  
    const removeToDo = (todoID) => {
      setToDos(currentToDos => {
        return currentToDos.filter((toDo) => (
          todoID !== toDo.id
        ))
      })
    }

    return (
        <>
            <h2 className={styles.subHeader}>using useState</h2>
            <ToDoInputForm addToDo={addToDo} />
            <h2 className={styles.smallHeading}>Tasks</h2>
            <ToDosList toDos={toDos} removeToDo={removeToDo} />
        </>
    )
}