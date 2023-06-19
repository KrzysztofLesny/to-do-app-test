import { ToDoInputForm } from '../ToDoInputForm/';
import { ToDosList } from '../ToDosList';
import { useState } from 'react';
import { StyledButton } from "../StyledButtons";
import { StyledSubHeader } from "../StyledHeaders";
import { StyledWrapper } from "../StyledWrapper/";

export const Content = ({toDos, addToDo, removeToDo, header}) => {
    const [showForm, setShowFom] = useState(false);

    return (
        <>
            <StyledSubHeader>using {header}</StyledSubHeader>
            <StyledWrapper>
                <ToDosList toDos={toDos} removeToDo={removeToDo} />
                <StyledButton onClick={() => setShowFom(true)}>+ New task</StyledButton>
                {showForm && <ToDoInputForm addToDo={addToDo} closeForm={() => setShowFom(false)}/>}
            </StyledWrapper>
        </>
    )
}