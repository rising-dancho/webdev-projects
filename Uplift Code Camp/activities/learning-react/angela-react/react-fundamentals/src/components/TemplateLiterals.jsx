import Avatar from "./mini-components/Avatar";

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
      <Avatar imgURL="https://yt3.googleusercontent.com/MbA8DvJo-NiZO2r8JNI7k8IZ4HZOOACYauUPyXOdVnUDpwhw4hsRLxsabK70TwW89JbwPoEq0g=s176-c-k-c0x00ffffff-no-rj" />
      <p>Your lucky number is {luckyNumber}</p>
    </>
  );
}

export default TemplateLiterals;
