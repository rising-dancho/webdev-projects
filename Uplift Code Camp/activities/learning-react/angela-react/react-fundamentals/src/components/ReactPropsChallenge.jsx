//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

import React from 'react';
import ContactCard from './mini-components/ContactCard';
import contacts from './functions/contacts';

/* same page component */
// function ContactCard(props) {
//   return (
//     <div className="card">
//       <div className="top">
//         <h2 className="name">{props.name}</h2>
//         <img
//           className="circle-img"
//           src={props.imgURL}
//           alt="avatar_img"
//         />
//       </div>
//       <div className="bottom">
//         <p>{props.number}</p>
//         <p>{props.email}</p>
//       </div>
//     </div>
//   );
// }

/* APPROACH 4 */
function createContact(contact, index) {
  return (
    <ContactCard
      key={index}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      number={contact.phone}
      email={contact.email}
    />
  );
}

function ReactPropsChallenge(props) {
  return (
    <div>
      <h1>My Contacts</h1>
      {/* APPROACH 1 */}
      {/* <ContactCard
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        number="+123 456 789"
        email="b@beyonce.com"
      /> */}
      {/* APPROACH 2 */}
      {/* <ContactCard
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        number={contacts[0].phone}
        email={contacts[0].email}
      /> */}
      {/* APPROACH 3 */}
      {/* {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          number={contact.phone}
          email={contact.email}
        />
      ))} */}
      {/* APPROACH 4 */}
      {contacts.map(createContact)}
    </div>
  );
}

export default ReactPropsChallenge;
