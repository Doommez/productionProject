import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import I18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router';

export function renderWithTranslation(component: React.ReactNode) {
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={I18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    );
}
