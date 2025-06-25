import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import { CartContext } from './ContextAPI';
import { useState } from 'react';

export default function App() {
  
  const [cartItems, setCartItems] = useState([]);
  const handleInc = (product) => {
  console.log("Product to add/update:", product); // Log the incoming product details

  setCartItems(prevItems => {
    console.log("Current cart items:", prevItems); // Log the cart before the update

    const existingItem = prevItems.find(item => item.id === product.id);
    if (existingItem) {
      console.log("Product exists in the cart. Updating quantity...");
      const updatedCart = prevItems.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + product.qty }
          : item
      );
      console.log("Updated cart items:", updatedCart); // Log the updated cart
      return updatedCart;
    }

    console.log("Product does not exist in the cart. Adding new product...");
    const newCart = [...prevItems, product];
    console.log("New cart items:", newCart); // Log the cart after adding the new product
    return newCart;
  });

  // Log after updating (state won't immediately reflect the changes here due to React's async state updates)
  console.log("Cart items after setCartItems (may not reflect the update yet):", cartItems);
};


  const handleDec = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      
      if (!existingItem) return prevItems;
      
      if (existingItem.qty === 1) {
        return prevItems.filter(item => item._id !== product._id);
      }
      
      return prevItems.map(item =>
        item._id === product._id 
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <Router>
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={ProductDetails} exact />
        <Route path='/Cart' component={Cart} exact />
      </Router>
    </CartContext.Provider>
  );
}