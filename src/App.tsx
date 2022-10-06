import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Users } from './features/users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Users />

      </header>
    </div>
  );
}

export default App;
