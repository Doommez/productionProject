import { render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('test render ', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar'))
            .toBeInTheDocument();
    });
});
