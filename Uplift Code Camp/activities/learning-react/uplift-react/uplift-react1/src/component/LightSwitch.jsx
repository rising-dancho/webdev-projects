import React from 'react';
import { useState } from 'react';

function LightSwitch() {
  let isLightOn = false;
  const [light, setLight] = useState(false);

  function toggler() {
    setLight(!isLightOn);
  }

  return (
    <>
      <p>Light: {isLightOn}</p>
      <button onClick={toggler}>Turn On</button>
    </>
  );
}

export default LightSwitch;
