import LightSwitch from './components/LightSwitch';

// Instruction
// [X] Create a new component, you can simply name them LightSwitch. Follow the convention
// [X] Use useState hook to create a state variable, isLightOn and set an initial value to false.
// [X] Render a button that will act as the light switch
// [X] Display an image or text indicating whether the light is on or off, based on the state
// [X] Write a function that toggles isLightOn from true to false and vice versa
// [X] This function should be called when the button is clicked

// Hint
// You can use ternary operator
// Your toggler function can be like this
// function toggler() {
//   setLight(!isLightOn);
// }

function App() {
  return (
    <>
      <LightSwitch />
    </>
  );
}

export default App;
