import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../redux';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
