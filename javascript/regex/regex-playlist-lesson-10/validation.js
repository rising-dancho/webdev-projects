// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
  slug: /^[a-z0-9\-]{8,20}$/,
  email: /^[a-z\d(\.\-_)?]+@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// validation function
function validate(field, regex) {
  let testForValidation = regex.test(field.value);
  console.log(testForValidation);
  if (testForValidation === true) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach(function (input) {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
