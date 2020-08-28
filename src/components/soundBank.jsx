const SOUNDBANK1 = [
  {
    keyCode: 81,
    id: "Heater-1",
    keyName: "Q",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    id: "Heater-2",
    keyName: "W",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    id: "Heater-3",
    keyName: "E",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    id: "Heater-6",
    keyName: "A",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 83,
    id: "Dsc_Oh",
    keyName: "S",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 68,
    id: "Kick_n_Hat",
    keyName: "D",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 90,
    id: "Chord-1",
    keyName: "Z",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 88,
    id: "Chord-2",
    keyName: "X",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 67,
    id: "Chord-3",
    keyName: "C",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
];

const SOUNDBANK2 = [
  {
    keyCode: 81,
    id: "Chord-1",
    keyName: "Q",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    id: "Chord-2",
    keyName: "W",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    id: "Chord-3",
    keyName: "E",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    id: "Shaker",
    keyName: "A",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    id: "Open-HH",
    keyName: "S",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    id: "Closed-HH",
    keyName: "D",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    id: "Punchy-kick",
    keyName: "Z",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    id: "Side-Stick",
    keyName: "X",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    id: "Snare",
    keyName: "C",
    soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const activeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 50,
  height: 40,
  margin: 5,
  borderRadius: 5,
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
};

const inactiveStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 50,
  height: 40,
  margin: 5,
  borderRadius: 5,
  backgroundColor: "grey",
  boxShadow: "3px 3px 5px black",
};
const activeStyleNoPower = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 50,
  height: 40,
  margin: 5,
  borderRadius: 5,
  backgroundColor: "grey",
  boxShadow: "0 3px grey",
};

const inactiveStyleNoPower = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: 50,
  height: 40,
  margin: 5,
  borderRadius: 5,
  backgroundColor: "grey",
  boxShadow: "3px 3px 5px black",
};

export {
  SOUNDBANK1,
  SOUNDBANK2,
  activeStyle,
  inactiveStyle,
  activeStyleNoPower,
  inactiveStyleNoPower,
};
