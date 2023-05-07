import { useState } from "react"
import ReactDOM from "react-dom";
import styles from './ToDoInputForm.module.css'

export const ToDoInputForm = ({addToDo, closeForm}) => {
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
        closeForm();
    }

    return ReactDOM.createPortal((
        // how to use <dialog>?
        <div className={styles.inputFormBackdrop} onClick={() => closeForm()}>
            <form className={styles.inputForm} onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
                <label className={styles.inputTextWrapper}>
                    <input
                        autoFocus 
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
        </div>
    ), document.body)
}