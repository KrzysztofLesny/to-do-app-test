import { Content } from '../../components/Content';
import { useDispatch } from 'react-redux'
import { addToDo, removeToDo } from '../../redux/toDoReducer'
import { useSelector } from 'react-redux';

export const Redux = () => {
    const { toDos } = useSelector(state => state.toDoer)
    const dispatch = useDispatch();

    return (
        <Content 
            addToDo={(id) => dispatch(addToDo(id))} 
            toDos={toDos} 
            removeToDo={(id) => dispatch(removeToDo(id))} 
            header={'Redux'}
        />
    )
}