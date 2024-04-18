const formFields = [
  { label: "First Name:", inputType: "text", inputName: "firstName" },
  { label: "Last Name:", inputType: "text", inputName: "lastName" },
  { label: "Email:", inputType: "email", inputName: "email" },
  { label: "Password:", inputType: "password", inputName: "password" },
];

function App() {
  return (
    <form className="container">
      <h1>Registration Form</h1>
      {formFields.map((field, index) => (
        <label className="label" key={index}>
          {field.label}
          <input
            className="input"
            type={field.inputType}
            name={field.inputName}
          />
        </label>
      ))}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;