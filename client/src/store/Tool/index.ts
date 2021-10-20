import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store/index';
import Tool from '@modules/Tool';

export interface ToolState {
  tool: Tool | null;
}

const initialState: ToolState = {
  tool: null,
};

export const toolSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
    },
  },
});

export const { setTool } = toolSlice.actions;

export const getTool = (state: RootState): Tool | null => state.tool.tool;

export default toolSlice.reducer;
