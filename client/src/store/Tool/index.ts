import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/index';
import Tool from '@modules/Tool';
import Brush from '@modules/Brush';

export interface ToolState {
  tool: Tool | null;
  primaryColor: string;
  secondaryColor: string;
  lineWidth: number;
}

const initialState: ToolState = {
  tool: null,
  primaryColor: '#000000',
  secondaryColor: '#FFFFFF',
  lineWidth: 1,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    setLineWidth: (state, action) => {
      state.lineWidth = action.payload;
      if (state.tool) {
        state.tool.lineWidth = action.payload;
      }
    },
    setColor: (state, action) => {
      state.primaryColor = action.payload;
      if (state.tool) {
        state.tool.fillColor = action.payload;
        state.tool.strokeColor = action.payload;
      }
    },
  },
});

export const { setColor, setLineWidth, setTool } = toolSlice.actions;

export const getTool = (state: RootState): ToolState['tool'] => state.tool.tool;

export default toolSlice.reducer;
