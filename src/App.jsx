import React from 'react';
import './App.css';

function App() {
  console.log("App component is rendering!");

  return (
    <div id="drum-machine">
      <h1>🥁 Drum Machine</h1>
      <div id="display">Ready to play!</div>
      <div className="pad-grid">
        <div className="drum-pad" id="Heater-1">
          <div className="key">Q</div>
          <div className="name">Heater-1</div>
        </div>
        <div className="drum-pad" id="Heater-2">
          <div className="key">W</div>
          <div className="name">Heater-2</div>
        </div>
        <div className="drum-pad" id="Heater-3">
          <div className="key">E</div>
          <div className="name">Heater-3</div>
        </div>
        <div className="drum-pad" id="Heater-4">
          <div className="key">A</div>
          <div className="name">Heater-4</div>
        </div>
        <div className="drum-pad" id="Clap">
          <div className="key">S</div>
          <div className="name">Clap</div>
        </div>
        <div className="drum-pad" id="Open-HH">
          <div className="key">D</div>
          <div className="name">Open-HH</div>
        </div>
        <div className="drum-pad" id="Kick">
          <div className="key">Z</div>
          <div className="name">Kick</div>
        </div>
        <div className="drum-pad" id="Bass">
          <div className="key">X</div>
          <div className="name">Bass</div>
        </div>
        <div className="drum-pad" id="Closed-HH">
          <div className="key">C</div>
          <div className="name">Closed-HH</div>
        </div>
      </div>
      <p className="instructions">
        Click the pads or press Q, W, E, A, S, D, Z, X, C keys
      </p>
    </div>
  );
}

export default App;