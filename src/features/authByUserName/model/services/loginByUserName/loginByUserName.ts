import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage/localstorage';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue : string}>(
    'login/loginByUserName',
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post<User>('http://localhost:4000/auth/login', authData);
          if (!response.data) {
              throw new Error('Unable to sign in');
          }
          localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
          dispatch(userActions.setAuthData(response.data));
          return response.data;
        } catch (error) {
            console.error(error);
           return rejectWithValue(error);
        }
    }
);
