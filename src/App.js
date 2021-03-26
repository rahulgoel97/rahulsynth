import logo from './logo.svg';
import './App.css';
import * as Tone from "tone";
import React, {useState, useEffect} from "react";



const synth = new Tone.MembraneSynth().toMaster();

  



function App() {

  const playSynth = () => {

    // Value
    console.log("+======+");
    console.log({keyVal});

    if(keyVal==="C9"){
    synth.triggerAttackRelease("C9",note);
  }
  else if(keyVal==="C8"){
    synth.triggerAttackRelease("C8",note);
  }
  else{
    synth.triggerAttackRelease(keyVal,note);
  }
    
 

  };


  const noteChangeHandler = (e) => {
    setKey(e.target.value);
  };

  const durChangeHandler = (e) => {
    setNote(e.target.value);
  };

  const [keyVal, setKey] = useState("C2");
  const [note, setNote] = useState("3");


  return (
    <div className="App">
    <div className="SynthInput">
    <div className="leftInput"> ENTER NOTE (such as C2)  <input className="noteInput" onChange={noteChangeHandler}/></div>
    <div className="rightInput">ENTER DURATION (such as 3)  <input className="noteInput" onChange={durChangeHandler}/></div>
    </div>
      <h1 className="mainLogo"> R a h u l s y n t h </h1>
      <button className="playbutton" onClick={playSynth}> Play {keyVal} for {note}</button>
      
    </div>
  );
}

export default App;
