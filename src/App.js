import { ToDoInputForm } from './components/ToDoInputForm/ToDoInputForm';
import { ToDosList } from './components/ToDosList/ToDosList';
import { ToDoProvider } from "./context/ToDoContext";

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>TO DO APP</h1>
      </header>
      <main className={styles.main}>
        <ToDoProvider>
          <ToDoInputForm/>
          <h2 className={styles.subHeader}>Tasks</h2>
          <ToDosList/>
        </ToDoProvider>
      </main>
    </div>
  );
}

export default App;
