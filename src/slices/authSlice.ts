import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    authenthicated: boolean;
    loading: boolean;
    userName: string | null;
    error:string | null
}

const initialState: AuthState = {
    authenthicated: false,
    loading: false,
    userName: null,
    error:null
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            const {username,password} = action.payload;
            if(username == "test"  && password == "test"){
                state.authenthicated = true;
                state.userName="test"
            }else{
                state.error = "Incorrect Data"
            }
        }
    }

})

export default authSlice.reducer;
export const {login} = authSlice.actions;