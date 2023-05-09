import { ToDoInputForm } from '../../components/ToDoInputForm/';
import { ToDosList } from '../../components/ToDosList';
import { useState } from 'react';
import { Button } from "../../styled-components/Button";

import styles from './Content.module.css'

export const Content = ({toDos, addToDo, removeToDo, header}) => {
    const [showForm, setShowFom] = useState(false);

    return (
        <>
            <h2 className={styles.subHeader}>using {header}</h2>
            <div className={styles.wrapper}>
                <ToDosList toDos={toDos} removeToDo={removeToDo} />
                <Button onClick={() => setShowFom(true)}>+ New task</Button>
                {showForm && <ToDoInputForm addToDo={addToDo} closeForm={() => setShowFom(false)}/>}
            </div>
        </>
    )
}