import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StateSchemaKey
} from 'app/providers/StoreProvider/config/StateShema';
import { Reducer } from 'redux';
import { useAppDispatch } from 'shared/hooks/reduxHooks';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers)
            .forEach(([key, reducer]: ReducerListEntry) => {
                store.reducerManager.add(key, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            });

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers)
                    .forEach((key: StateSchemaKey) => {
                        store.reducerManager.remove(key);
                        dispatch({ type: `@REMOVE ${key} reducer` });
                    });
            }
        };
        // eslint-disable-next-line
    }, []);
    return children;
};
