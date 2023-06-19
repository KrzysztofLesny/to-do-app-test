import { useState } from "react"
import trashIcon from '../../../assets/trash.svg'
import {StyledIcon} from "../../StyledIcon";
import {StyledToDo} from "./StyledToDo";

export const ToDo = ({ toDo, removeToDo }) => {
    const [isDone, setIsDone] = useState(false)

    const toggleDone = () => {
        setIsDone(currentIsDone => !currentIsDone)
    }

    return (
        //how to add fill to svg?
        <StyledToDo>
            <span 
                onClick={() => toggleDone()} 
                className={isDone ? 'done' : null}
            >
                {toDo.value}
            </span>
            {isDone &&
                <StyledIcon>
                    <div onClick={() => removeToDo(toDo.id)}>
                        <img src={trashIcon} alt="delete icon" title="Delete task" />
                    </div>
                </StyledIcon>
            }
        </StyledToDo>
    )
}


