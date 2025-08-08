import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Default } = composeStories(stories);

describe('Button', () => {
    test('Button render text test', () => {
        const textButton = 'test';
        render(<Button>{textButton}</Button>);
        expect(screen.getByText(textButton))
            .toBeInTheDocument();
    });
    test('Button render clear theme ', () => {
        const textButton = 'test';
        render(<Button themeButton={ThemeButton.CLEAR}>{textButton}</Button>);
        expect(screen.getByText(textButton))
            .toHaveClass(ThemeButton.CLEAR);
    });

    test('Button snapshot', async () => {
        render(<Default />);
        expect(document.body.firstChild)
            .toMatchSnapshot();
    });
});
