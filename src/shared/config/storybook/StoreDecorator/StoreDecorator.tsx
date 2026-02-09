import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';

type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object
        ? DeepPartial<T[K]>
        : T[K];
};

export const StoreDecorator = (initialStore?: DeepPartial<StateSchema>) => (Story: () => ReactNode) => (
// @ts-ignore
        <StoreProvider initialState={initialStore}>
            <Story />
        </StoreProvider>

    );
