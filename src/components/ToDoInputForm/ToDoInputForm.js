import { useState } from "react"
import ReactDOM from "react-dom";
import styles from './ToDoInputForm.module.css'
import {InputFormBackdrop} from "../../styled-components/InputFormBackdrop";
import {StyledForm} from "../../styled-components/StyledForm";
import {StyledLabel} from "../../styled-components/StyledLabel";
import {StyledTextInput} from "../../styled-components/StyledTextInput";
import {StyledInputTextLabel} from "../../styled-components/StyledInputTextLabel";
import {StyledInputTextUnderline} from "../../styled-components/StyledInputTextUnderline";

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
        <InputFormBackdrop onClick={() => closeForm()}>
            <StyledForm onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
                <StyledLabel>
                    <StyledTextInput
                        autoFocus 
                        placeholder=" "
                        type="text"
                        value={toDo} 
                        onChange={(e) => setToDo(e.target.value)}
                    />
                    <StyledInputTextLabel>Input To Do here:</StyledInputTextLabel>
                    <StyledInputTextUnderline/>
                </StyledLabel>
                <div>
                    <button className={styles.button}><span>Add To Do</span></button>
                </div>
            </StyledForm>
        </InputFormBackdrop>
    ), document.body)
}