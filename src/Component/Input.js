import React, { useState } from 'react';

function App() {


    return (
        <div className="App">
          <h1>Adding Two Numbers</h1>
    
          <div className="number-inputs">
            <input
              type="number"
              value={number1}
              onChange={e => setNumber1(+e.target.value)}
              placeholder="0"
            />
            <input
              type="number"
              value={number2}
              onChange={e => setNumber2(+e.target.value)}
              placeholder="0"
            />
          </div>
    
          <button>Add Them!</button>
    
          <h2>{total}</h2>
        </div>
      );
    }

    export default App;