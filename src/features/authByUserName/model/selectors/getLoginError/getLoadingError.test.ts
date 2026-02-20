import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/authByUserName/model/selectors/getLoginError/getLoginError';

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error'
            }
        };
        expect(getLoginError(state as StateSchema))
            .toEqual('Error');
    });
});
