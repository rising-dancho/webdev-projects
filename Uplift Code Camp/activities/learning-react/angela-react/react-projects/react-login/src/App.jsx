import Login from './components/Login';
import Register from './components/Register';

//Challenge: Without moving the userIsRegistered variable,
// [X] 1. Show Login as the button text if userIsRegistered is true.
// [X] Show Register as the button text if userIsRegistered is false.
// [X] 2. Only show the Confirm Password input if userIsRegistered is false.
// [X] Don't show it if userIsRegistered is true.

function App() {
  let isLoggedIn = false;
  const currentTime = new Date(2024, 1, 1, 12).getHours();
  let userIsRegistered = true;

  // APPROACH 1
  // function renderConditionally() {
  //   if (isLoggedIn) {
  //     return <h2>Welcome back!</h2>;
  //   } else {
  //     return <Login />;
  //   }
  // }

  // APPROACH 1: variations
  // STYLE 1
  // function renderConditionally() {
  //   if (isLoggedIn) {
  //     return <h2>Welcome back!</h2>;
  //   } else if (userIsRegistered != true) {
  //     return <Register />;
  //   } else {
  //     return <Login />;
  //   }
  // }
  // STYLE 2
  function renderConditionally() {
    if (isLoggedIn) {
      return <h2>Welcome back!</h2>;
    } else {
      return <Login userIsRegistered={userIsRegistered} />;
    }
  }

  return (
    // JSX DOES NOT ALLOW STATEMENTS
    // if else dont work only ternary works
    <div className="container">
      <h1>friendster</h1>
      {/* APPROACH 1 */}
      {renderConditionally()}

      {/* APPROACH 2 */}
      {/* {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      )} */}

      {/* APPROACH 3 : variations */}
      {/* {currentTime > 12 ? <h2>Welcome back!</h2> : <Login />} */}

      {/* USING (&&) OPERATOR TO ESCAPE THE TERNARY */}
      {/* STYLE 1 */}
      {/* {currentTime > 12 ? <h2>Welcome back!</h2> : null} */}
      {/* STYLE 2 */}
      {/* {currentTime > 12 && <h2>Welcome back!</h2>} */}
    </div>
  );
}

export default App;
