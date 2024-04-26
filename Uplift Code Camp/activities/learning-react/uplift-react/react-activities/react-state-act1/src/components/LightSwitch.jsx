import React, { useState } from 'react';
import './light-switch.css';

function LightSwitch() {
  const [lights, setLights] = useState('../public/lights_off.png');
  const [isLightOn, setIsLightOn] = useState(false);

  const on = '../public/lights_on.png';
  const off = '../public/lights_off.png';

  function toggler() {
    if (isLightOn === false) {
      setIsLightOn(true);
      setLights(on);
      console.log("Is you say, 'Daddy's home, home for me.. ♫♪'");
    } else {
      setIsLightOn(false);
      setLights(off);
    }

    console.log(isLightOn);
  }

  return (
    <div className="container">
      <img src={lights} alt="lightbulb" />
      <div>
        <button onClick={toggler}>Turn On</button>
      </div>
    </div>
  );
}

export default LightSwitch;
