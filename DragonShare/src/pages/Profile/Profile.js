import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { auth, db } from "../../Config";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";


export const Profile = () => {
  const navigate = useNavigate()
  const { currentUser, dispatch } = useContext(AuthContext)

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setPhone] = useState(currentUser.phone);
  
  // Redirect to auth page if user is signed out
  useEffect(() => {
    if (!currentUser) {
      navigate("/Auth");
    }
  }, [currentUser, navigate]);

  // get realtime data of user
  const docRef = doc(db, "users", currentUser.uid)

  onSnapshot(docRef, (doc) => {
    const data = doc.data();
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
  });

  const handleLogout = (e) => {
    e.preventDefault();
    
    signOut(auth)
      .then(() => {
      // Signed out 
      console.log("user has signed out")
      dispatch({ type: "LOGOUT" });

      // Redirect to auth page after successful logout
      navigate("/Auth")
    })
      .catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <main>
      <div className="profile-container">
          <form onClick={handleLogout}>
            <button id="logout" type="submit">Log Out</button>
          </form>
          
          <div className="card">
            <h2>Contact Infomation</h2>
            
            <div className="card-section">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" disabled="disabled" value={name} />

                <label htmlFor="id">Email</label>
                <input type="email" id="email" disabled="disabled" value={email} />

                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" disabled="disabled" value={phone} />
                
                <Link to ="/Profile/UpdateProfile"><button className="redirect">Edit Infomation</button></Link>
              </form>
              </div>
          </div>

          <div className="card">
            <h2>Product Management</h2>
            
            <div className="card-section">
              <form>
                <Link to ="/Profile/AddProduct"><button className="redirect">Add New Product</button></Link>
              </form>
              <form>
                <Link to ="/Profile/UserProducts"><button className="redirect">View Products</button></Link>
              </form>
            </div>
          </div>

      </div>
    <Outlet />
    </main>
  );
};
