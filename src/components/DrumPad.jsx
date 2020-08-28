import React, { useEffect, useState } from "react";
import {
  activeStyle,
  inactiveStyle,
  activeStyleNoPower,
  inactiveStyleNoPower,
} from "./soundBank";

const DrumPad = ({ keyName, soundUrl, id, onDisplayName, keyCode, power }) => {
  const [padStyle, setPadStyle] = useState(inactiveStyle);

  const activatePad = () => {
    if (power) {
      padStyle.backgroundColor === "orange"
        ? setPadStyle(inactiveStyle)
        : setPadStyle(activeStyle);
    } else {
      padStyle.boxShadow === "0 3px grey"
        ? setPadStyle(inactiveStyleNoPower)
        : setPadStyle(activeStyleNoPower);
    }
  };

  const playAudio = () => {
    const sound = document.getElementById(`${keyName}`);

    sound.currentTime = 0;

    sound.play();

    activatePad();
    const deactivate = setTimeout(() => {
      setPadStyle(inactiveStyle);
    }, 50);
    onDisplayName(id);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) playAudio();
  };

  return (
    <div id={id} style={padStyle} className="drum-pad" onClick={playAudio}>
      <audio id={keyName} className="clip" src={soundUrl}></audio>
      {keyName}
    </div>
  );
};

export default DrumPad;
