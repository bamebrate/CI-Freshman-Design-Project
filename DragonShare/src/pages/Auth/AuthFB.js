// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyBwHgfBR87z2p0tyZPitNngWKQuSFDwyTg",
  authDomain: "auth-tutorial-e3376.firebaseapp.com",
  projectId: "auth-tutorial-e3376",
  storageBucket: "auth-tutorial-e3376.appspot.com",
  messagingSenderId: "317689181695",
  appId: "1:317689181695:web:4fd764246c60b5c64663ca"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

signUp.addEventListener('click',(e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
          email: email
      })

      alert('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });

});

login.addEventListener('click',(e)=>{
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })
        
         if(user) {
            window.location = 'profile.html'; 
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 });
 const user = auth.currentUser;
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});