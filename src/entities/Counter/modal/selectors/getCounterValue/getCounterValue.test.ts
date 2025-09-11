import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from 'entities/Counter/modal/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
    test('should return the correct value', () => {
        const state: Partial<StateSchema> = {
            counter: {
                value: 100
            }
        };
        expect(getCounterValue(state as StateSchema))
            .toEqual(100);
    });
});
