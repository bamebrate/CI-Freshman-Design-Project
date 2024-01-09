import React, { useState, useEffect } from 'react';
import { db } from '../../Config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import './Cart.css'; 

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      const cartCollectionRef = collection(db, 'cart');
      const cartSnapshot = await getDocs(cartCollectionRef);

      const cartItemsData = cartSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setCartItems(cartItemsData);
    };

    getCartItems();
  }, []);

  useEffect(() => {
    // Calculate subtotal whenever cartItems change
    const calculateSubtotal = () => {
      const priceSum = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
      setSubtotal(priceSum.toFixed(2));
    };
    calculateSubtotal();
  }, [cartItems]);

  const handleDelete = async (itemId) => {
    const itemDocRef = doc(db, 'cart', itemId);
    await deleteDoc(itemDocRef);

    // Update the cart items state by filtering out the deleted item
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <main>
      <div className="shopping-cart">

        {cartItems.map((item) => (
          <div className='cart-item' key={item.id}>
            
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button className='cart-button' onClick={() => handleDelete(item.id)}>Delete From Cart</button>
          
          </div>
        ))}
        
        <div className='checkout'>
          <h2>Subtotal: ${subtotal}</h2>
          <button className='checkout-button'>Checkout</button>
        </div>

      </div>
    </main>
  );
};
