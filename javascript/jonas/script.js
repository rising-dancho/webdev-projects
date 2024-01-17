function calcAmplitudeNew(temp1, temp2) {

  let temperatures = temp1.concat(temp2);

  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];

    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) {
      max = currentTemp;
    } else if (currentTemp < min) {
      min = currentTemp
    }
  }
  const amplitude = max - min;
  return `max: ${max}; min: ${min}; amplitude: ${amplitude}`;
}
const temp1 = [3,1,1];
const temp2 = [6,2,2];

calcAmplitudeNew(temp1, temp2);