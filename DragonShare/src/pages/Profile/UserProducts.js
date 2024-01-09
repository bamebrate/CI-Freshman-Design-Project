import React, { useContext, useEffect, useState } from "react";
import "./UserProducts.css";
import "../../components/product-card.css"

import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../Config";
import { useNavigate } from "react-router-dom";

export const UserProducts = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
         // Redirect to auth page if user is signed out
        if (!currentUser) {
        navigate("/Auth");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        const getUserProducts = async () => {
            // Create a query to filter documents 
            const q = query(collection(db, "products"), where("sellerID", "==", currentUser.uid));

            // Fetch documents that match the query
            const querySnapshot = await getDocs(q);

              // Extract the document data from the query snapshot and store it in state
            const userProducts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setUserProducts(userProducts);    
        }
        getUserProducts();
    }, [currentUser.uid])

    const deleteProduct = async (id) => {
        // delete prodcut from catalog
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
      };

  return (
        <main>
            <div className="product-container">
                {userProducts.map((doc) => (
                    <div key={doc.id} className="product-card">
                        <h3>{doc.title}</h3>
                        <p>${doc.price}</p>

                        <button onClick={() => {deleteProduct(doc.id)}}>Delete Product</button>
                    </div>
                ))}
            </div>
        </main>
    );
};
