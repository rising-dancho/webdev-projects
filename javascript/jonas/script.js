
function measureKelvin(){
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // 3. FIX THE BUG 
    value: Number(prompt('Degrees celsius:'))
  }
  // 2. FIND THE BUG 
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
}
// 1. IDENTIFY 
console.log(measureKelvin());