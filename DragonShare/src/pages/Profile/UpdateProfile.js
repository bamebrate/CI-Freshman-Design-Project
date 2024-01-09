import React, { useContext, useEffect, useState } from "react";
import "./UpdateProfile.css";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../Config";
import { useNavigate } from "react-router-dom";

export const UpdateProfile = () => {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const docRef = doc(db, "users", currentUser.uid)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
         // Redirect to auth page if user is signed out
        if (!currentUser) {
            navigate("/Auth");

        }}, [currentUser, navigate]);

    useEffect(() => {
        // Fetch the current user data
        const fetchUserData = async () => {
            if (currentUser) {
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()) {
                const userData = docSnap.data();
                setName(userData.name || "");
                setEmail(userData.email || "");
                setPhone(userData.phone || "");
            }}};
        fetchUserData();
    }, [currentUser]);

    const handleUpdateForm = async (e) => {
        e.preventDefault();
        try {

            // updates user data
            await updateDoc(docRef, {
                name,
                email,
                phone,
              });
            
            // Redirect to profile page after successfully updating data
            navigate("/profile")
        } 
        catch(error) {
            console.error("Error updating user data:", error);
        }
    };

  return (
        <main>
            <div className="update-form">
                <h2>Update Contact Infomation</h2>
                <form onSubmit={handleUpdateForm}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                    
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                        type="tel"
                        id="phone" 
                        placeholder="##########" 
                        pattern="[0-9]{10}"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} />
                    
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </main>
    );
};
