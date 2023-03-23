import { createSlice } from '@reduxjs/toolkit'

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        toDos: [],
    },
    reducers: {
        addToDo: (state, action) => {
            state.toDos = [...state.toDos, action.payload];
        },
        removeToDo: (state, action) => {
            state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
        },
    }
})

// Action creators are generated for each case reducer function
export const { addToDo, removeToDo } = toDoSlice.actions

export default toDoSlice.reducer