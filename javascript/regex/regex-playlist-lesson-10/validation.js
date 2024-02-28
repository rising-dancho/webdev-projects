// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
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
