import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/renderWithTranslation/componentRender';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('test render ', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar'))
            .toBeInTheDocument();
    });
    test('test toggle ', () => {
        componentRender(<SideBar />);
        const toggleButton = screen.getByTestId('toggleButton');
        expect(screen.getByTestId('sidebar'))
            .toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar'))
            .toHaveClass('collapsed');
    });
});
