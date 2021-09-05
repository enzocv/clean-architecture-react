import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    loadding: 'idlg',
    top: 0,
    error: null
}

export const todoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.top += 1
        },
        decrement: (state) => {
            state.top -= 1
        },
        incrementByAmount: (state, action) => {
            state.top += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer