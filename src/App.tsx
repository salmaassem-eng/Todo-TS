import React from 'react';
import Todos from './components/Todos';
import todo from './TypeDefinition/Todo';

function App() {
  const todos =[new todo('Learn React', '1'),
    new todo('Build an app', '2'),]
  return (
    <div className="App">
      <Todos items={todos} />
    </div>

  );
}

export default App;
