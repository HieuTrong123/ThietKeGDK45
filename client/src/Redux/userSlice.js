import { createSlice } from '@reduxjs/toolkit';

const initState = {
    listNotify: [],
    stateLogIn: false,
    user: null,
    listCart: []
}
const counterSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        IsLogged: (state, action) => {

            state.stateLogIn = true
            state.user = action.payload
            state.listCart = action.payload.cart
            state.listNotify = action.payload.notify

        },
        IsLogOut: (state) => {

            state.stateLogIn = false
            state.user = null
            state.listCart = []
            state.listNotify = []

        },
        AddItemCart: (state, action) => {
            state.listCart = [...state.listCart, action.payload]
        },
        RemoveItemCart: (state, action) => {
            state.listCart = state.listCart.filter((e) => e.id !== action.payload)
        },
    },
});

export const { IsLogged, IsLogOut, AddItemCart, RemoveItemCart } = counterSlice.actions;
export default counterSlice.reducer;