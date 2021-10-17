import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

export interface SettingsState {
  color: {
    main: string;
    second: string;
  };
}

const initialState: SettingsState = {
  color: {
    main: '#000000',
    second: '#FFFFFF',
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color.main = action.payload;
    },
  },
});

export const { setColor } = settingsSlice.actions;

export const getMainColor = (state: RootState): string => state.settings.color.main;
export const getSecondColor = (state: RootState): string => state.settings.color.second;

export default settingsSlice.reducer;
