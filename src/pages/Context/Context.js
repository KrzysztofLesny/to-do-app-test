import ToDoInputForm from '../../components/ToDoInputForm/';
import ToDosList from '../../components/ToDosList';
import { ToDoProvider } from "../../context/ToDoContext";
import styles from '../../App.module.css'

export const Context = () => {
    return (
        <>
            <ToDoProvider>
                <h2 className={styles.subHeader}>using useContext</h2>
                <ToDoInputForm/>
                <h2 className={styles.smallHeading}>Tasks</h2>
                <ToDosList/>
            </ToDoProvider>
        </>
    )
}