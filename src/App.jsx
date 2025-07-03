import { useEffect, useState } from "react";
import "./App.css";

const drumPads = [
  { key: "Q", id: "Heater-1" },
  { key: "W", id: "Heater-2" },
  { key: "E", id: "Heater-3" },
  { key: "A", id: "Heater-4" },
  { key: "S", id: "Clap" },
  { key: "D", id: "Open-HH" },
  { key: "Z", id: "Kick" },
  { key: "X", id: "Bass" },
  { key: "C", id: "Closed-HH" },
];

function App() {
  const [display, setDisplay] = useState("Press a key or click a pad");
  const [activePad, setActivePad] = useState("");
  
  console.log("App component rendering...");

  const playSound = (key) => {
    const pad = drumPads.find((p) => p.key === key);

    if (pad) {
      setDisplay(`${pad.id} - ${key}`);
      setActivePad(key);

      // Visual feedback duration
      setTimeout(() => setActivePad(""), 150);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      playSound(key);
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <h1>🥁 Drum Machine</h1>
      <div id="display">{display}</div>
      <div className="pad-grid">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            className={`drum-pad ${activePad === pad.key ? 'active' : ''}`}
            id={pad.id}
            onClick={() => playSound(pad.key)}
          >
            <div className="key">{pad.key}</div>
            <div className="name">{pad.id}</div>
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