import React, { useContext, useEffect, useState } from "react";
import "./Auth.css"
import { signOut, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../Config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore"; 


export const Auth = () => {
  const [signupError, setSignupError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [successMsg, setSignupMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const { currentUser, dispatch } = useContext(AuthContext)

  // Redirect to profile page if user is already login
  useEffect(() => {
    if (currentUser) {
      navigate("/Profile");
    }
  }, [currentUser, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid;

        // display success message
        setSignupMsg(true)

        // Create a document with the user's data
        const userRef = doc(db, 'users', uid);
        await setDoc(userRef, {
          name: "",
          email: user.email,
          phone: ""
        });
        // ...
      })
      // display error message
      .catch((error) => {
        setSignupError(true);
      });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in  
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        console.log("user has logged in")
        
        // Redirect to profile page after successful login
        navigate("/Profile")

      })
      // display error message
      .catch((error) => {
        setLoginError(true);
      });
  }

  return (
    <main>
      <div className="auth-box">

        <div className="sign-up">
          <h2>New User</h2>

          <form onSubmit={handleSignup}>
              <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
              <button type="submit">Sign Up</button>
              {signupError && <span>Something went wrong, try again</span>}
              {successMsg && <span>Successfully created account!</span>}
          </form>

        </div>
        
        <div className="login-in">
          <h2>Existing User</h2>

          <form onSubmit={handleLogin}>
              <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
              <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
              <button type="submit">Log In</button>
              {loginError && <span>Entered wrong email or password</span>}
          </form>
        </div>

      </div>
    </main>
  );
};