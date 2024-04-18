// COMPONENT WITHOUT IMPORTING
// - a component is a piece of code that returns some JSX
// PROPS
// - short for properties
// - every component has a built in "props" object
function Person(props) {
  return (
    <>
      <h1>Name: {props.firstName}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}

function App() {
  return (
    <>
      {/* <ReactBasics /> */}
      {/* <ReactFragment /> */}
      {/* PROPS: it's fine to pass in just a string, but for dynamic experessions (ie. 2+2) it needs to be inside curly braces. likes so, {2+2} */}
      <Person firstName="Barlito" lastName="Chubebe" age={60 + 9} />
      <Person firstName="Aweng" lastName="Chuknu" age="12" />
      <Person firstName="John" lastName="Sick" age="60" />
      <Person firstName="Diwata" lastName="Pares" age="38" />
    </>
  );
}

export default App;
