import { useState } from 'react';
import { Content } from '../../components/Content';

export const State = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (newToDo) => {
    setToDos(currentToDos => {
       return [...currentToDos, newToDo]
    })
  }
  
  const removeToDo = (todoID) => {
    setToDos(currentToDos => {
      return currentToDos.filter((toDo) => (
        todoID !== toDo.id
      ))
    })
  }

  return (
    <Content 
      addToDo={addToDo} 
      toDos={toDos} 
      removeToDo={removeToDo} 
      header={'useState'}
    />
  )
}