import { useState, useContext, createContext } from 'react'

const ToDoContext = createContext()

export const useToDos = () => useContext(ToDoContext)

export const ToDoProvider = ({ children }) => {
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
        <ToDoContext.Provider value={{ toDos, addToDo, removeToDo }}> 
            {children}
        </ToDoContext.Provider>
    )

}
