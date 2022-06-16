import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        userData:{
        nom:'',
        email:''
        },
        loading: null ,
        error: false
    },
    reducers: {
        addUser: (state,action) =>{
            state.userData.nom = action.payload.nom ;
            state.userData.email = action.payload.email ;

        },
        startUser: (state) =>{
            state.loading = true;

        },
        successUser: (state,action) =>{
            state.userData= action.payload ;
            state.error = true ;

        },
        errorUser: (state,action) =>{
            state.userData.nom = action.payload.nom ;
            state.userData.email = action.payload.email ;

        },
    },
})

export const {addUser, startUser, successUser, errorUser} = userSlice.actions
export default userSlice.reducer