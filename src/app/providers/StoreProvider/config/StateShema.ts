import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';
import { Reducer, UnknownAction } from 'redux';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // асинхронный редюсер
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager;
}
