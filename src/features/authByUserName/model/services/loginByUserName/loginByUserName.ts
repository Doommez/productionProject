import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUserNameProps {
    username: string;
    password: string;
}

const loginByUserName = createAsyncThunk<User, LoginByUserNameProps>(
    'login/loginByUserName',
    async (authData, { rejectWithValue }) => {
        try {
            const response = await axios.post<User>('localhost:4000/auth/login', authData);
          if (!response.data) {
              throw new Error('Unable to sign in');
          }
          return response.data;
        } catch (error) {
            console.log(error);
           return rejectWithValue(error);
        }
    }
);
