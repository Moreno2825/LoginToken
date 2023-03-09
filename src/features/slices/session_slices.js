import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice ({
    name: 'session',
    //estado inicial
    initialState: {
        token:''
    },
    //funciones save 
    reducers:{
        login:(state, action) => {
            //payload pasa la informacion del reducers
            state.token = action.payload
        },
        logout: (state, action) =>{
            state.token = ''
        }
    }
})

//destructuracion
export const {login, logout} = sessionSlice.actions;

export const selectSession = (state) => state.session;

export default sessionSlice.reducer;
//contiene todo los metodos que contiene en el reducer

