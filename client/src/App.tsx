import React, { FC } from 'react';
import Toolbar from '@components/Toolbar';
import DraggablePanel from '@components/DraggablePanel';

const App: FC = props => {
  return (
    <div>
      <DraggablePanel title="Инструменты" code="toolbar">
        <Toolbar />
      </DraggablePanel>

      <DraggablePanel title="Палитра" code="palette">
        <Toolbar />
      </DraggablePanel>

      <DraggablePanel title="История" code="history">
        <Toolbar />
      </DraggablePanel>
    </div>
  );
};

export default App;
