import { useEffect, useState } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Heater-6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick_n_Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "RP4_KICK_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Cev_H2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    const pad = drumPads.find((p) => p.key === key);

    if (audio && pad) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(pad.id);
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
      <p>Hi</p>
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
            <audio
              className="clip"
              id={pad.key}
              src={pad.url}
              preload="auto"
            ></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
