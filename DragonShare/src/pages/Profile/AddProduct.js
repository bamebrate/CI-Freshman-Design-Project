import React, { useContext, useEffect, useState } from "react";
import "./AddProduct.css";
import { addDoc, collection } from "firebase/firestore"; 
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../Config";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const productsCollectionRef = collection(db, "products")

    const [newTitle, setTitle] = useState("")
    const [newPrice, setPrice] = useState(0.00)

    useEffect(() => {
         // Redirect to auth page if user is signed out
        if (!currentUser) {
        navigate("/Auth");
        }
    }, [currentUser, navigate]);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        await addDoc(productsCollectionRef, {
            title: newTitle,
            price: newPrice,
            sellerID: currentUser.uid
        })
        // Redirect to profile page when product successfully adds to database
        navigate("/Profile");
    };

  return (
        <main>
            <div className="addProduct-form">
                <h2>Add a Product</h2>
                <form onSubmit={handleAddProduct}>
                    <label htmlFor="title">Title</label>
                    <input required 
                        type="text" 
                        id="title" 
                        placeholder="Product Title" 
                        onChange={(e) => setTitle(e.target.value)} />
                    
                    <label htmlFor="price">Price</label>
                    <input required 
                        type="number" 
                        id="price" 
                        min="0"
                        placeholder="0.00" 
                        onChange={(e) => setPrice(parseFloat(e.target.value).toFixed(2))} />
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </main>
    );
};
