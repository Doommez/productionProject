import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppStore } from 'app/providers/StoreProvider/config/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppStore>();
