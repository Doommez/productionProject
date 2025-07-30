import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('test render ', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar'))
            .toBeInTheDocument();
    });
    test('test toggle ', () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId('toggleButton');
        expect(screen.getByTestId('sidebar'))
            .toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar'))
            .toHaveClass('collapsed');
    });
});
