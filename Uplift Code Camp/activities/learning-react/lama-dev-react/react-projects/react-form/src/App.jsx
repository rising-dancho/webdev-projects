import { useState } from "react";
import FormInput from "./components/FormInput";
import inputs from "./components/functions/inputs.js";
import "./index.css";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button >Submit</button>
      </form>
    </div>
  );
};

export default App;
