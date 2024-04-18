const fname = 'Jose';
const lname = 'Perez';
let luckyNumber = Math.floor(Math.random() * 10) + 1;
// let luckyNumber = 7;

function TemplateLiterals() {
  return (
    <>
      {/* <h1>Hello {fname + " " + lname}!</h1> */}
      {/* <h1>Hello {`${fname} ${lname}`}!</h1> */}
      <h2 className="heading">
        Hello {fname} {lname}!
      </h2>
      <p>Your lucky number is {luckyNumber}</p>
    </>
  );
}

export default TemplateLiterals;

