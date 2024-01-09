import React, { useState, useEffect } from "react";
import './Home.css';
import "../../components/product-card.css"

import { db } from '../../Config.js';
import {collection, getDoc, getDocs, addDoc, doc } from "firebase/firestore";

 
export const Home = () => {
  const [products, setProducts] = useState([]);
  
  const productsCollectionRef = collection(db, "products")
  const cartCollectionRef = collection(db, "cart")

  useEffect(() => {
    // get realtime data of products

    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProducts()
  }, [])

  useEffect(() => {
    // change button to show product was added to cart
    const handleClick = (e) => {
      if (e.target.classList.contains("addToCart")) {
        e.target.innerHTML = "Added!";
        setTimeout(() => {
          e.target.innerHTML = "Add to Cart";
        }, 3000);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  const addtocart = async (productId) => {
    // get the product document from the "products" collection
    const productDoc = doc(db, "products", productId);
    const productSnapshot = await getDoc(productDoc);
    
    // check if the product document exists
    if (productSnapshot.exists()) {
      const productData = productSnapshot.data();
      
      // create a new document in the "cart" collection with the product data
      await addDoc(cartCollectionRef, productData);
    }
  };

  return (
    <main>
      <div className="product-container"> 
        
        {products.map((product) =>{
          return(
              
              <div key={product.id} className="product-card"> 
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              
                <button className="addToCart" onClick={() => {addtocart(product.id)}}>
                  Add to cart
                </button>
              </div>

          );
        })}

      </div>
    </main>
  );
};
