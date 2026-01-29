import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    loginByUserName
} from '../../model/services/loginByUserName/loginByUserName';
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
        builder.addCase(loginByUserName.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.username = action.payload.username;
            });
    }
});

export const {
    actions: loginActions
} = loginSlice;

export const { reducer: loginReducer } = loginSlice;
