import { useEffect, useState } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://cdn.freesound.org/previews/66/66717_931655-lq.mp3", // Drum hit 1
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://cdn.freesound.org/previews/66/66716_931655-lq.mp3", // Drum hit 2
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://cdn.freesound.org/previews/66/66715_931655-lq.mp3", // Drum hit 3
  },
  {
    key: "A",
    id: "Heater-4",
    url: "https://cdn.freesound.org/previews/66/66714_931655-lq.mp3", // Snare
  },
  {
    key: "S",
    id: "Clap",
    url: "https://cdn.freesound.org/previews/67/67862_931655-lq.mp3", // Clap
  },
  {
    key: "D",
    id: "Open-HH",
    url: "https://cdn.freesound.org/previews/67/67861_931655-lq.mp3", // Open hi-hat
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://cdn.freesound.org/previews/66/66720_931655-lq.mp3", // Kick + hat
  },
  {
    key: "X",
    id: "Kick",
    url: "https://cdn.freesound.org/previews/66/66719_931655-lq.mp3", // Kick
  },
  {
    key: "C",
    id: "Closed-HH",
    url: "https://cdn.freesound.org/previews/66/66718_931655-lq.mp3", // Closed hi-hat
  },
];

function App() {
  const [display, setDisplay] = useState("Press a Pad");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      const pad = drumPads.find((p) => p.key === key);
      if (pad) setDisplay(pad.id);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => playSound(e.key.toUpperCase());
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="pad-grid">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            className="drum-pad"
            id={pad.id}
            onClick={() => playSound(pad.key)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.url}></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
