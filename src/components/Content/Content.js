import { ToDoInputForm } from '../../components/ToDoInputForm/';
import { ToDosList } from '../../components/ToDosList';
import { useState } from 'react';

import styles from './Content.module.css'

export const Content = ({toDos, addToDo, removeToDo, header}) => {
    const [showForm, setShowFom] = useState(false);

    return (
        <>
            <h2 className={styles.subHeader}>using {header}</h2>
            <div className={styles.wrapper}>
                <ToDosList toDos={toDos} removeToDo={removeToDo} />
                <button className={styles.button} onClick={() => setShowFom(true)}>+ New task</button>
                {showForm && <ToDoInputForm addToDo={addToDo} closeForm={() => setShowFom(false)}/>}
            </div>
        </>
    )
}