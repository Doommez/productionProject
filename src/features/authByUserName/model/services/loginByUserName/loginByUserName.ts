import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue : string}>(
    'login/loginByUserName',
    async (authData, { rejectWithValue }) => {
        try {
            const response = await axios.post<User>('http://localhost:4000/auth/login', authData);
          if (!response.data) {
              throw new Error('Unable to sign in');
          }
          return response.data;
        } catch (error) {
            console.log(error);
           return rejectWithValue(error.message);
        }
    }
);
