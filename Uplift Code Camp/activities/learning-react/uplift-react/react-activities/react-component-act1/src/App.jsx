import Input from './components/Input';

// Instruction
// [X] Create a new component, you can simply name them Input. Follow the convention
// [X] Add a prop for label where the name of the field
// [X] Add a prop for type or the type of the input
// [X] Add a prop for placeholder
// [X] Render an input element with all the props
// [X] Update your App.jsx and add your component
// Example Implementation
// import Input from './components/Input';

// Challenge yourself
// [] Add additional props for input color, size and validation

function App() {
  return (
    <div className="container">
      <Input
        type="text"
        label="First Name"
        placeholder="Enter your first name"
      />
      <Input type="text" label="Last Name" placeholder="Enter your last name" />
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email address"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your secure password"
      />
    </div>
  );
}

export default App;
