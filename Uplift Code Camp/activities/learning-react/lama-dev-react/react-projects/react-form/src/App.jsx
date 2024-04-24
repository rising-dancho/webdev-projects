import FormInput from './components/FormInput';

function App() {
  return (
    <div className="app">
      <FormInput name="First Name:" placeholder="First Name" />
      <FormInput name="Last Name:" placeholder="Last Name" />
      <FormInput name="Username:" placeholder="Username" />
      <FormInput name="Email:" placeholder="Email" />
      <FormInput name="Password:" placeholder="Password" />
      <FormInput name="Confirm Password:" placeholder="Confirm Password" />
    </div>
  );
}

export default App;
