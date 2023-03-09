import { useState } from "react"
import { ToDoInputForm } from './components/ToDoInputForm';
import { ToDosList } from './components/ToDosList';

import styles from './App.module.css'

const App = () => {
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
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>TO DO APP</h1>
      </header>
      <main className={styles.main}>
        <ToDoInputForm addToDo={addToDo} />
        <h2 className={styles.subHeader}>Tasks</h2>
        {toDos.length ? <ToDosList toDos={toDos} removeToDo={removeToDo} /> : <p>Currently there are no tasks for you to do.</p>}
      </main>
    </div>
  );
}

export default App;
