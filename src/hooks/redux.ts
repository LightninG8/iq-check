import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'ducks';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
