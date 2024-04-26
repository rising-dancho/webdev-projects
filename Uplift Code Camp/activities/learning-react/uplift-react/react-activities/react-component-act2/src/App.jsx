import Card from './components/Card';

// Instruction
// [X] Create a new component, you can simply name them Card. Follow the convention
// [X] Add a prop for title of the card
// [X] Add a prop for price
// [X] Add a prop for imageUrl
// [X] Render a card element with all the props
// [X] Update your App.jsx and add your component

// Challenge yourself
// [] Use the map method on an array to create multiple elements
// [] Include extra information in the props, such as the currency or whether a product is available.
// [] Set default values for certain props, like using a default image if no imageUrl is provided.
// [] Allow additional customization with props for background color, link, and button text

function App() {
  return (
    <div className="grid-container">
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        title="Basic Tee"
        price="35"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
        title="Basic White Tee"
        price="35"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
        title="Basic Charcoal Tee"
        price="35"
      />
      <Card
        imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
        title="Artwork Dots Tee"
        price="45"
      />
    </div>
  );
}

export default App;
