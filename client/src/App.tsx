import React, { FC } from 'react';
import Toolbar from '@components/Toolbar';
import DraggablePanel from '@components/DraggablePanel';
import Palette from '@components/Palette';
import Menu from '@components/Menu';

const App: FC = () => {
  return (
    <div>
      <Menu />
      <DraggablePanel title="Инструменты" code="toolbar">
        <Toolbar />
      </DraggablePanel>

      <DraggablePanel title="Палитра" code="palette">
        <Palette />
      </DraggablePanel>

      <DraggablePanel title="История" code="history">
        <Toolbar />
      </DraggablePanel>
    </div>
  );
};

export default App;
