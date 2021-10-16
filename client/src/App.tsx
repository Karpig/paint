import React, { FC } from 'react';
import Toolbar from '@components/Toolbar';
import DraggablePanel from '@components/DraggablePanel';
import Palette from '@components/Palette';
import Menu from '@components/Menu';
import Canvas from '@components/Canvas';

const App: FC = () => {
  return (
    <>
      <Menu />

      <Canvas />

      <DraggablePanel title="Инструменты" code="toolbar">
        <Toolbar />
      </DraggablePanel>

      <DraggablePanel title="Палитра" code="palette">
        <Palette />
      </DraggablePanel>

      <DraggablePanel title="История" code="history">
        <Toolbar />
      </DraggablePanel>
    </>
  );
};

export default App;
