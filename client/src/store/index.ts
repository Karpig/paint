import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import settingsReducer from './Settings';
import toolReducer from './Tool';

export interface AbstractState<Data> {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  data: Data;
}

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    tool: toolReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
