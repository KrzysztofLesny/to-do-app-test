import { useToDos } from '../../context/ToDoContext'
import { Content } from '../../components/Content';

export const Context = () => {
    const {toDos, addToDo, removeToDo} = useToDos();

    return (
        <Content 
            addToDo={addToDo} 
            toDos={toDos} 
            removeToDo={removeToDo} 
            header={'useContext'}
        />
    )
}