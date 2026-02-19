import React from 'react';
import { StateSchema } from 'app/providers/StoreProvider/config/StateShema';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateSchema;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({
                                  children,
                                  initialState,
                                  asyncReducers
                              }: StoreProviderProps) => {
    const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);
    return (
        <Provider store={store}>

            {children}
        </Provider>
    );
};
