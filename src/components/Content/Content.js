import { ToDoInputForm } from '../../components/ToDoInputForm/';
import { ToDosList } from '../../components/ToDosList';
import { useState } from 'react';
import { StyledButton } from "../../styled-components/StyledButton";
import { StyledSubHeader } from "../../styled-components/StyledSubHeader";
import { StyledWrapper } from "../../styled-components/StyledWrapper";

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