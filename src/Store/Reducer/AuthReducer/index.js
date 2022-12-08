import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    LoginUser: false,
    UserDetail: [],
    TokenId: [],
    first: false
};

export const AuthReducer = createSlice({
    name: "Fitness",
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.LoginUser = action.payload;
        },
        UserDetail: (state, action) => {
            state.UserDetail = action.payload;
        },
        TokenId: (state, action) => {
            state.TokenId = action.payload;
        },
        LogOut: (state, action) => {
            (state.LoginUser = false), (state.UserDetail = []), (state.TokenId = []);
        },
        first: (state, action) => {
            state.first = action.payload;
        },
    }
});

export const { LoginUser, UserDetail, TokenId, LogOut, first } = AuthReducer.actions;
export default AuthReducer.reducer;