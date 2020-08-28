import React, { useState, useEffect } from "react";
import "./App.css";
import DrumDisplay from "./components/DrumDisplay";
import { SOUNDBANK1, SOUNDBANK2 } from "./components/soundBank";

const App = () => {
  const [soundBank, setSoundBank] = useState(SOUNDBANK1);
  const [display, setDisplay] = useState("Bank 1");
  const [power, setPower] = useState(true);
  const [changeSoundBank, setChangeSoundBank] = useState(false);

  const handleDisplayName = (id) => {
    setDisplay(id);
  };

  const handlePower = () => {
    setPower(!power);
  };

  const handleChangeSoundBank = () => {
    setChangeSoundBank(!changeSoundBank);
  };

  useEffect(() => {
    if (changeSoundBank === true) {
      setSoundBank(SOUNDBANK2);
      setDisplay("Bank 2");
    } else {
      setSoundBank(SOUNDBANK1);
      setDisplay("Bank 1");
    }
  }, [changeSoundBank]);

  return (
    <div className="app" id="drum-machine">
      <DrumDisplay
        soundBank={soundBank}
        onDisplayName={handleDisplayName}
        display={display}
        power={power}
        setPower={handlePower}
        setChangeSoundBank={handleChangeSoundBank}
        changeSoundBank={changeSoundBank}
      />
    </div>
  );
};

export default App;
