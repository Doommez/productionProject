import React from 'react';
import { StateSchema } from 'app/providers/StoreProvider/config/StateShema';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = ({
                                  children,
                                  initialState
                              }: StoreProviderProps) => {
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
