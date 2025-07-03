
import React, { useState, useEffect } from 'react';
import './App.css';

const drumPads = [
  { 
    key: 'Q', 
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  { 
    key: 'W', 
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  { 
    key: 'E', 
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  { 
    key: 'A', 
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  { 
    key: 'S', 
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  { 
    key: 'D', 
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  { 
    key: 'Z', 
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  { 
    key: 'X', 
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  { 
    key: 'C', 
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function App() {
  const [display, setDisplay] = useState('');
  const [activePad, setActivePad] = useState('');

  const playSound = (key) => {
    const pad = drumPads.find(p => p.key === key);
    if (pad) {
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        setDisplay(pad.id);
        setActivePad(key);
        setTimeout(() => setActivePad(''), 100);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (drumPads.find(p => p.key === key)) {
        playSound(key);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <h1>🥁 FCC Drum Machine</h1>
      <div id="display">{display || 'Press a key or click a pad'}</div>
      <div className="pad-grid">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            className={`drum-pad ${activePad === pad.key ? 'active' : ''}`}
            id={pad.id}
            onClick={() => playSound(pad.key)}
          >
            {pad.key}
            <audio
              className="clip"
              id={pad.key}
              src={pad.src}
              preload="auto"
            />
          </div>
        ))}
      </div>
      <p className="instructions">
        Click the pads or press Q, W, E, A, S, D, Z, X, C keys
      </p>
    </div>
  );
}

export default App;
