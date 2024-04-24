import Card from './components/Card.jsx';
import products from './components/imports/products.js';

function productsGallery(product, index) {
  return (
    <Card
      key={index}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  );
}

function App() {
  return (
    <>
      <h1 className='title'>Products</h1>
      <div className="grid-container">{products.map(productsGallery)}</div>
    </>
  );
}

export default App;

// FIXME: TODO:
// Challenge your self
// [] Add a button to each list item that allows the user to add the product to their shopping cart.
// [] Allow the user to sort the products by price or name.
// [] Add CSS styles to the items, such as border, background, color, or font size.