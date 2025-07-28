import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Button render text test', () => {
        const textButton = 'test';
        render(<Button>{textButton}</Button>);
        expect(screen.getByText(textButton))
            .tobei;
    });
});
