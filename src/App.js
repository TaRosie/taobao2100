import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Alien Travel Pillow: Made in Spanish, Earth, long-distance travel',
    image: 'https://bit.ly/36BPJkY',
    description: ' Long-distance Travel in space? This alien travel pillow helps you have a sweet dream even in space! A pillow is a support of the body at rest for comfort, therapy, or decoration. Pillows are used by many species, including humans. Some types of pillows include throw pillows, body pillows, decorative pillows and many more.',
    price: 100, 
  },
  {
    item: 'Wearable Translator, Made in China, 100 languages accessible',
    image: 'https://bit.ly/33gsIC5',
    description: 'Want to talk to your friends from other planets? This small wearable device might help!',
    price: 150,
  },
  {
    item: 'The thickest book: Space Wikipedia',
    image: 'https://bit.ly/2NF4ISB',
    description: 'A classic and elegant way to kill your time in space! Made in special light material. Wikipedia is a multilingual online encyclopedia created and maintained as an open collaboration project by a community of earth human volunteer editors using a wiki-based editing system.',
    price: 500,
  },
]

function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function makeProduct(singleProduct){
return(
  <Product item={singleProduct.item} image={singleProduct.image} description={singleProduct.description} price={singleProduct.price}/>
)
}

function ShoppingCart() {
  const products = shoppingCartItems.map(makeProduct);
  return(
    <div className="cart">
    {products}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <img src={props.image} width="100"/>
      <p className="product-title">{props.item}</p>
      <p className="product-description">{props.description}</p>
      <p className="product-price">{props.price}</p>
      

    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
