const products = [
  {
    name: 'Earthen Bottle',
    price: 48_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  },
  {
    name: 'Nomad Tumbler',
    price: 35_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
  },
  {
    name: 'Focus Paper Refill',
    price: 89_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
  },
  {
    name: 'Machined Mechanical Pencil',
    price: 35_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
  },
  {
    name: 'Focus Card Tray',
    price: 64_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
  },
  {
    name: 'Focus Multi-Pack',
    price: 39_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
  },
  {
    name: 'Brass Scissors',
    price: 50_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
  },
  {
    name: 'Focus Carry Pouch',
    price: 32_00,
    image:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
  },
];

function App() {
  return (
    <form className="container">
      <h1>Products</h1>
      {formFields.map((field, index) => (
        <label className="label" key={index}>
          {field.label}
          <input
            className="input"
            type={field.inputType}
            name={field.inputName}
          />
        </label>
      ))}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
