
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
const preloadedRecordings = [
  {
    name: "Hip Hop Groove",
    pattern: [
      { key: 'X', timestamp: 0 },     // Kick
      { key: 'C', timestamp: 250 },   // Closed HH
      { key: 'F', timestamp: 500 },   // Snare
      { key: 'C', timestamp: 750 },   // Closed HH
      { key: 'X', timestamp: 1000 },  // Kick
      { key: 'C', timestamp: 1250 },  // Closed HH
      { key: 'F', timestamp: 1500 },  // Snare
      { key: 'C', timestamp: 1750 },  // Closed HH
      { key: 'X', timestamp: 2000 },  // Kick
      { key: 'C', timestamp: 2250 },  // Closed HH
      { key: 'F', timestamp: 2500 },  // Snare
      { key: 'C', timestamp: 2750 },  // Closed HH
    ]
  },
  {
    name: "House Beat",
    pattern: [
      { key: 'X', timestamp: 0 },     // Kick
      { key: 'C', timestamp: 500 },   // Hi-hat
      { key: 'X', timestamp: 1000 },  // Kick
      { key: 'C', timestamp: 1500 },  // Hi-hat
      { key: 'X', timestamp: 2000 },  // Kick
      { key: 'C', timestamp: 2500 },  // Hi-hat
      { key: 'X', timestamp: 3000 },  // Kick
      { key: 'C', timestamp: 3500 },  // Hi-hat
      { key: 'D', timestamp: 4000 },  // Open HH for variety
    ]
  },
  {
    name: "Trap Beat",
    pattern: [
      { key: 'X', timestamp: 0 },      // Kick
      { key: 'C', timestamp: 250 },    // Hi-hat
      { key: 'C', timestamp: 500 },    // Hi-hat
      { key: 'F', timestamp: 750 },    // Snare
      { key: 'C', timestamp: 1000 },   // Hi-hat
      { key: 'X', timestamp: 1250 },   // Kick
      { key: 'C', timestamp: 1500 },   // Hi-hat
      { key: 'C', timestamp: 1750 },   // Hi-hat
      { key: 'F', timestamp: 2000 },   // Snare
      { key: 'C', timestamp: 2250 },   // Hi-hat rolls
      { key: 'C', timestamp: 2350 },   // Hi-hat rolls
      { key: 'C', timestamp: 2450 },   // Hi-hat rolls
      { key: 'F', timestamp: 2500 },   // Snare
    ]
  },
  {
    name: "Lo-fi Chill",
    pattern: [
      { key: 'V', timestamp: 0 },      // Bass loop
      { key: 'G', timestamp: 0 },      // Synth loop
      { key: 'X', timestamp: 500 },    // Kick
      { key: 'C', timestamp: 1000 },   // Hi-hat
      { key: 'F', timestamp: 1500 },   // Snare
      { key: 'C', timestamp: 2000 },   // Hi-hat
      { key: 'X', timestamp: 2500 },   // Kick
      { key: 'C', timestamp: 3000 },   // Hi-hat
      { key: 'F', timestamp: 3500 },   // Snare
    ]
  },
  {
    name: "Rock Jam",
    pattern: [
      { key: 'X', timestamp: 0 },      // Kick
      { key: 'T', timestamp: 250 },    // Tom
      { key: 'F', timestamp: 500 },    // Snare
      { key: 'Y', timestamp: 750 },    // Crash
      { key: 'X', timestamp: 1000 },   // Kick
      { key: 'T', timestamp: 1250 },   // Tom
      { key: 'F', timestamp: 1500 },   // Snare
      { key: 'Y', timestamp: 1750 },   // Crash
    ]
  }
];

const drumPads = [
  { key: 'Q', id: 'Heater-1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'R', id: 'Percussion', src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },
  { key: 'T', id: 'Tom', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { key: 'Y', id: 'Crash', src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { key: 'A', id: 'Heater-4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'F', id: 'Snare', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { key: 'G', id: 'Synth-Loop', src: 'https://cdn.pixabay.com/audio/2023/03/08/audio_888e414bc3.mp3', loop: true },
  { key: 'H', id: 'Guitar-Loop', src: 'https://cdn.pixabay.com/audio/2023/02/27/audio_6dc08b9d5f.mp3', loop: true },
  { key: 'Z', id: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { key: 'V', id: 'Bass-Loop', src: 'https://cdn.pixabay.com/audio/2023/05/25/audio_1d1bc9f2cc.mp3', loop: true },
  { key: 'B', id: 'Electro-Loop', src: 'https://cdn.pixabay.com/audio/2022/07/27/audio_8ab2440372.mp3', loop: true },
];


const DrumMachine = () => {
  const [display, setDisplay] = useState('');
  const [activePad, setActivePad] = useState('');
  const [isRecording, setIsRecording] = useState(false);
 const [recordings, setRecordings] = useState(
  preloadedRecordings.map(r => r.pattern)
);

  const [currentRecording, setCurrentRecording] = useState([]);
  const [loops, setLoops] = useState({});
  const [activeLoops, setActiveLoops] = useState(new Set());
  const startTimeRef = useRef(null);

  const playSound = (key, isFromRecording = false) => {
    const pad = drumPads.find(p => p.key === key);
    if (pad) {
      const audio = document.getElementById(key);
      if (audio) {
        audio.currentTime = 0;
        audio.loop = pad.loop || false;
        audio.play();

        if (!isFromRecording) {
          setDisplay(pad.id);
          setActivePad(key);
          setTimeout(() => setActivePad(''), 100);
        }

        if (isRecording && !isFromRecording) {
          const timestamp = Date.now() - startTimeRef.current;
          setCurrentRecording(prev => [...prev, { key, timestamp }]);
        }
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
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    startTimeRef.current = Date.now();
    setCurrentRecording([]);
    setDisplay('Recording...');
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (currentRecording.length > 0) {
      setRecordings(prev => [...prev, currentRecording]);
      setDisplay(`Saved recording #${recordings.length + 1}`);
    }
  };

  const playRecording = (index) => {
    const recording = recordings[index];
    if (!recording) return;

    const loop = () => {
      recording.forEach(event => {
        setTimeout(() => playSound(event.key, true), event.timestamp);
      });
    };

    loop();

    const intervalId = setInterval(() => {
      loop();
    }, recording[recording.length - 1].timestamp);

    setLoops(prev => ({ ...prev, [index]: intervalId }));
    setActiveLoops(prev => new Set(prev).add(index));
  };

  const stopRecordingLoop = (index) => {
    if (loops[index]) {
      clearInterval(loops[index]);
      setLoops(prev => {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      });
      setActiveLoops(prev => {
        const updated = new Set(prev);
        updated.delete(index);
        return updated;
      });
    }
  };
const removeRecording = (indexToRemove) => {
  // Stop loop if it's playing
  if (loops[indexToRemove]) {
    clearInterval(loops[indexToRemove]);
  }

  setLoops(prev => {
    const updated = { ...prev };
    delete updated[indexToRemove];
    return updated;
  });

  setActiveLoops(prev => {
    const updated = new Set(prev);
    updated.delete(indexToRemove);
    return updated;
  });

  // Remove the recording
  setRecordings(prev => prev.filter((_, i) => i !== indexToRemove));
};

const playAllRecordings = () => {
  recordings.forEach((_, index) => {
    if (!activeLoops.has(index)) {
      playRecording(index);
    }
  });
};


  const stopAllLoops = () => {
    Object.values(loops).forEach(clearInterval);
    setLoops({});
    setActiveLoops(new Set());
    setDisplay('Stopped all loops');
  };

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
            <audio className="clip" id={pad.key} src={pad.src} preload="auto" />
          </div>
        ))}
      </div>

      <div className="controls">
         <button
    onClick={startRecording}
    disabled={isRecording}
    className={isRecording ? 'recording-active' : ''}
  >
    🎙️ Record
  </button>

  <button onClick={stopRecording} disabled={!isRecording}>⏹ Stop</button>
        <button onClick={stopAllLoops}>🛑 Stop All Loops</button>
<button onClick={playAllRecordings}>🎼 Play All Recordings</button>
{recordings.map((rec, index) => (
  <div key={index} className="recording">
    <strong>
      {preloadedRecordings[index]?.name || `Recording ${index + 1}`}
    </strong>
    <div className="recording-controls">
      <button
        onClick={() => playRecording(index)}
        style={activeLoops.has(index) ? {
          backgroundColor: '#00d4ff',
          color: '#000',
          fontWeight: 'bold',
          boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
        } : {}}
      >
        ▶ Play
      </button>
      <button onClick={() => stopRecordingLoop(index)}>⏹ Stop</button>
      <button onClick={() => removeRecording(index)} className="remove">🗑 Remove</button>
    </div>
  </div>
))}


      </div>

      <p className="instructions">
        Click pads or press keys Q–B to play sounds. Use Record → Stop → Play.
      </p>
    </div>
  );
}

export default DrumMachine
