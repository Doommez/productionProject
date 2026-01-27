import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = React.useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <Input value={value} placeholder="введите текст" onChange={onChange} />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
