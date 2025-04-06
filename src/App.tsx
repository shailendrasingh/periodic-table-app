import React from 'react';
import PeriodicTable from './components/PeriodicTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <div className="periodic-table-container">
        <PeriodicTable />
      </div>
    </div>
  );
}

export default App;
