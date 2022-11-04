import "./App.css";
import { bankOne, bankTwo } from "./api";
import { useState } from "react";

function App() {
  const [bank, setBank] = useState(true);
  const [power, setPower] = useState(false);
  const [display, setDisplay] = useState();
  const [volume, setVolume] = useState(50);
  const [volumeDisplay, setVolumeDisplay] = useState()

  
    const volumeHandler = (e) => {
      setVolume(e.target.value)
      setDisplay();
      setVolumeDisplay(`Volume: ${e.target.value}`);
      setTimeout(() => {
        setVolumeDisplay();
      }, 2000);
    };

  const playHandler = (e) => {

    const triggers = bankOne.map((el) =>el.keyTrigger);

    if (e.key && triggers.some((item) => e.key.toUpperCase() === item)  && power)  {
      if (bank) {
        const obj = bankOne.filter(
          (x) => e.key.toUpperCase() === x.keyTrigger)[0]
        const audio = new Audio(obj.url);
        setVolumeDisplay();
        setDisplay(obj.id);
        audio.volume = volume/100
        audio.play()
      } else {
        const obj = bankTwo.filter(
          (x) => e.key.toUpperCase() === x.keyTrigger)[0]
        const audio = new Audio(obj.url);
        setVolumeDisplay()
        setDisplay(obj.id)
        audio.volume = volume/100
        audio.play()
      }
    } 
    else if (e.target.id && triggers.some(item=> e.target.id === item)  && power) {
      if (bank) {
        const obj = bankOne.filter(
          (x) => e.target.id === x.keyTrigger)[0];
        const audio = new Audio(obj.url);
        setVolumeDisplay();
        setDisplay(obj.id);
        audio.volume = volume/100
        audio.play()
      } else {
        const obj = bankTwo.filter(
          (x) => e.target.id === x.keyTrigger)[0];
        const audio = new Audio(obj.url);
        setVolumeDisplay();
        setDisplay(obj.id);
        audio.volume = volume/100
        audio.play()
      }
    }
}


  return (
    <div className="App" onClick={(e) => playHandler(e)} onKeyDown={(e) => playHandler(e)} tabIndex={-1}>
      <div id="drum-machine">
        <div id="drum-pads">
          {bank
            ? bankOne.map((el, i) => (
                <div
                  className="drum-pad"
                  id={el.keyTrigger}
                  name={el.id}
                  key={i}
                >
                  {el.keyTrigger}
                </div>
              ))
            : bankTwo.map((el, i) => (
                <div
                  className="drum-pad"
                  id={el.keyTrigger}
                  name={el.id}
                  key={i}
                >
                  {el.keyTrigger}
                </div>
              ))}
        </div>
        <div id="controls">
          <div className="power">
            <label>Power</label>
            <input
              type="checkbox"
              onChange={() => setPower((pre) => !pre)}
            ></input>
          </div>
          <div id="display">
            {display}
            {volumeDisplay}
          </div>
          <input type="range" onChange={volumeHandler} min="0" max="100" value={volume }></input>
          <div className="bank">
            <label>Bank</label>
            <input
              type="checkbox"
              onChange={() => setBank((pre) => !pre)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
