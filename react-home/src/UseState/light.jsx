import React, { useState } from "react";

// For making light On Or Off
const Light = ( { isOn } ) => {
    return (
        <div style={{ backgroundColor: isOn ? "yellow" : "gray" }}>
             light is {isOn ? "ON" : "OFF"}
        </div>
    );
}

// Turn On button
const TurnOn = ({ setIsOn }) => {
      return (
        <button onClick={() => setIsOn(true)}>Turn On</button>
      )
} 

//Turn Off
const TurnOff = ({ setIsOn }) => {
      return (
        <button onClick={() => setIsOn(false)}>Turn Off</button>
      );
} 

// Initialize light

const Init = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
          <TurnOff setIsOn={setIsOn}/>
          <TurnOn setIsOn={setIsOn}/>
          <Light isOn={isOn} />
        </div>
    )
}


export default Init;