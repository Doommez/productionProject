import { componentRender } from 'shared/lib/tests/renderWithTranslation/componentRender';
import { act, fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter Value exist', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 12
                }
            }
        });

        expect(screen.getByTestId('value-title'))
            .toBeInTheDocument();
        expect(screen.getByTestId('value-title'))
            .toHaveTextContent('12');
    });

    test('increment counter', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 1
                }
            }
        });
        act(() => {
            fireEvent.click(screen.getByTestId('increment-button')); // вызывает dispatch внутри
        });
        expect(screen.getByTestId('value-title'))
            .toHaveTextContent('2');
    });

    test('decrement counter', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 1
                }
            }
        });
        act(() => {
            fireEvent.click(screen.getByTestId('decrement-button')); // вызывает dispatch внутри
        });
        expect(screen.getByTestId('value-title'))
            .toHaveTextContent('0');
    });
});
