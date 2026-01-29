import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    loginByUserName
} from 'features/authByUserName/model/services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: null
};

export const loginSlice = createSlice({
    name: 'loginSlice',
    initialState,
    reducers: {
        setUserName: (state, actions: PayloadAction<string>) => {
            state.username = actions.payload;
        },
        setPassword: (state, actions: PayloadAction<string>) => {
            state.password = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, () => {

        })
            .addCase(loginByUserName.rejected, () => {

            })
            .addCase(loginByUserName.fulfilled, () => {

            });
    }
});

export const {
    actions: loginActions
} = loginSlice;

export const { reducer: loginReducer } = loginSlice;
