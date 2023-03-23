import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToDo } from '../../redux/toDoReducer'

import styles from './ReduxToDoInputForm.module.css'

export const ReduxToDoInputForm = () => {
    const dispatch = useDispatch();
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
        dispatch(addToDo(newToDo));
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