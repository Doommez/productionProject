import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/authByUserName';

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
};

const defaultReducers: Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};

export const StoreDecorator = (
    initialStore?: DeepPartial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) => (Story: () => ReactNode) => (
    <StoreProvider
        // @ts-ignore
        initialState={initialStore}
        asyncReducers={{ ...defaultReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>

);
