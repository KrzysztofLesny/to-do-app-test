import { ToDo } from './ToDo'
import {StyledToDoList} from "./StyledToDoList";

export const ToDosList = ({toDos, removeToDo}) => {

    return (
        <StyledToDoList>
            {toDos.length ? toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />) : <p>Currently there are no tasks for you to do.</p>}
        </StyledToDoList>
    )
}