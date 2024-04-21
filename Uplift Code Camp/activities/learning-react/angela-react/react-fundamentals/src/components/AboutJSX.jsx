// required to be in a javascript object format
const imgStyling = {
  width: '150px',
  height: '150px',
  // 'object-fit': 'cover', // style variation
  objectFit: 'cover',
  // 'border-radius': '6px', // style variation
  borderRadius: '6px',
  border: '8px solid white',
};

let randomImg = 'https://picsum.photos/200';

imgStyling.boxShadow =
  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';

function AboutJSX() {
  return (
    <>
      {/* <h1 contentEditable="true" spellCheck="false"> */}
      <h1>My Favourite Foods</h1>
      <ul>
        <li>
          <img style={imgStyling} src={randomImg + '?grayscale'} alt="random" />
          <p>Random Photo</p>
        </li>
        <li>
          <img
            style={imgStyling}
            src="https://biteswithbri.com/wp-content/uploads/2021/02/HamburgerPattyRecipe04.jpg"
            alt="Hamburger"
          />
          <p>Hamburger</p>
        </li>
        <li>
          <img
            style={imgStyling}
            src="https://www.oneproudmomma.com/wp-content/uploads/2023/08/Jolly-Spaghetti.jpg"
            alt="Jollibee Spaghetti"
          />
          <p>Spaghetti</p>
        </li>
        <li>
          <img
            style={imgStyling}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiaSHhMqi5990aksvFB8msoCCeGijUBDeQ5QtK7gItMSMlY2k8vd1ZzB6RyY0dKeS1FO0&usqp=CAU"
            alt="Spinach Dip Pizza"
          />
          <p>Pizza</p>
        </li>
      </ul>
    </>
  );
}

export default AboutJSX;
