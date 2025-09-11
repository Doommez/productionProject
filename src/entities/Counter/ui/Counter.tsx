import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../modal/slice/counterSlice';
import cls from './Counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>
                +
            </Button>
            <Button onClick={decrement}>
                -
            </Button>
        </div>
    );
};
