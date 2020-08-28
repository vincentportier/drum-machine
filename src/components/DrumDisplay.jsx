import React, { useState } from "react";
import DrumPad from "./DrumPad";

const DrumDisplay = ({
  soundBank,
  onDisplayName,
  display,
  setPower,
  power,
  setChangeSoundBank,
  changeSoundBank,
}) => {
  return (
    <div id="display" className="drum-display">
      {power
        ? soundBank.map((sound, index) => (
            <DrumPad
              key={index}
              id={sound.id}
              keyName={sound.keyName}
              soundUrl={sound.soundUrl}
              onDisplayName={onDisplayName}
              keyCode={sound.keyCode}
              power={power}
            />
          ))
        : soundBank.map((sound, index) => (
            <DrumPad
              key={index}
              id={sound.id}
              keyName={sound.keyName}
              soundUrl="#"
              onDisplayName={onDisplayName}
              keyCode={sound.keyCode}
              power={power}
            />
          ))}
      <div className="controls">
        <div>
          <h3>Power</h3>
          <div className="switch" onClick={() => setPower()}>
            <div className={power ? "switch-right" : "switch-left"}></div>
          </div>
        </div>
        <div className="display">{power ? display : "Power Off"}</div>
        <h3>Change Bank</h3>
        <div
          className="switch"
          onClick={power ? () => setChangeSoundBank() : null}
        >
          <div
            className={!changeSoundBank ? "switch-right" : "switch-left"}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DrumDisplay;
