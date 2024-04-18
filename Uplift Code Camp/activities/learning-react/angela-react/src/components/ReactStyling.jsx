// GETTING HOUR OF DAY: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
// NESTED TERNARY OPERATOR: https://www.sitepoint.com/javascript-ternary-operator/#:~:text=Although%20ternary%20operators%20are%20used,if...else%20statements.
// 24hr to 12hr:
// - https://www.shecodes.io/athena/4069-how-to-display-12-hour-time-with-javascript#:~:text=You%20can%20use%20the%20toLocaleTimeString%20method%20to%20print%2012%2Dhour,localize%20to%20your%20timetable%20settings.
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
// list of locales: https://help.sap.com/docs/SAP_BUSINESSOBJECTS_BUSINESS_INTELLIGENCE_PLATFORM/09382741061c40a989fae01e61d54202/46758c5e6e041014910aba7db0e91070.html

// CHALLENGE:
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green,  Night = blue.

// APPROACH 1
// const morningRed = { color: '#E74032' };
// const afternoonGreen = { color: '#8CCD58' };
// const eveningBlue = { color: '#108EDD' };
// const defaultColor = { color: '#303846' };

// DETERMINING TIME OF DAY: (military time)
// let currentTime = new Date(2024, 1, 1, 18); // for testing
let currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();

let greeting = '';
function changeGreeting(input) {
  return (greeting = input);
}

// APPROACH 2
const morningRed = '#E74032';
const afternoonGreen = '#8CCD58';
const eveningBlue = '#108EDD';
const defaultColor = '#303846';

let customStyle = {
  color: { defaultColor },
};

function changeColor(color) {
  return (customStyle.color = color);
}

hours >= 0 && hours < 12
  ? changeGreeting('Good Morning') && changeColor(morningRed)
  : hours >= 12 && hours < 18 && minutes >= 0
  ? changeGreeting('Good Afternoon') && changeColor(afternoonGreen)
  : hours >= 18
  ? changeGreeting('Good Evening') && changeColor(eveningBlue)
  : changeColor(defaultColor);

// const amOrPm = timeOfDay == 'Good Morning' ? 'AM' : 'PM';
// console.log(hours + ':' + minutes + ' ' + amOrPm);
// console.log(timeOfDay);
console.log(greeting);

function convertTo12HourClock(time) {
  const options = { timeStyle: 'short', hour12: true };
  let timeString = time.toLocaleTimeString('en-PH', options);
  return timeString;
}
console.log(convertTo12HourClock(currentTime));

function ReactStyling() {
  return (
    <>
      <h1
        className="heading-challenge"
        style={
          // APPROACH 1
          // timeOfDay === 'Good Morning'
          //   ? morningRed
          //   : timeOfDay === 'Good Afternoon'
          //   ? afternoonGreen
          //   : timeOfDay === 'Good Evening'
          //   ? eveningBlue
          //   : defaultColor

          // APPROACH 2
          customStyle
        }
      >
        {greeting === 'Good Morning'
          ? 'Good Morning!!'
          : greeting === 'Good Afternoon'
          ? 'Good Afternoon!!'
          : 'Good Evening !!'}
      </h1>
      <p className="clock">{convertTo12HourClock(currentTime)}</p>
    </>
  );
}

export default ReactStyling;
