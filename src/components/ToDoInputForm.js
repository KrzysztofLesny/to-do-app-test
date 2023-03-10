import { useState } from "react"
import styles from './styles/ToDoInputForm.module.css'

export const ToDoInputForm = ({ addToDo }) => {
    const [toDo, setToDo] = useState('');

    const resetForm = () => {
        setToDo('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (toDo === '') {return}
        const newToDo = {
            value: toDo,
            id: Math.floor(Math.random() * 10000)
        }
        addToDo(newToDo);
        resetForm();
    }

    return (
        <form className={styles.inputForm} onSubmit={handleSubmit}>
            <label className={styles.inputTextWrapper}>
                <input
                    placeholder=" "
                    className={styles.inputText}
                    type="text"
                    value={toDo} 
                    onChange={(e) => setToDo(e.target.value)}
                />
                <span className={styles.inputTextLabel}>Input To Do here:</span>
                <span className={styles.inputTextUnderline} />
            </label>
            <div>
                <button className={styles.button}><span>Add To Do</span></button>
            </div>
        </form>
    )
}