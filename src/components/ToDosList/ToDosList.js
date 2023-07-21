import { ToDo } from "./ToDo";
import * as S from "./StyledToDoList";

export const ToDosList = ({ toDos, removeToDo }) => {
  return (
    <S.List>
      {toDos.length ? (
        toDos.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} removeToDo={removeToDo} />
        ))
      ) : (
        <p>Currently there are no tasks for you to do.</p>
      )}
    </S.List>
  );
};
