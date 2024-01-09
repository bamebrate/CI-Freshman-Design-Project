import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {Colleges} from "./pages/Colleges/Colleges"
import {Subjects} from "./pages/Subjects/Subjects"
import {About} from "./pages/About/About"
import {Cart} from "./pages/Cart/Cart"
import {Auth} from "./pages/Auth/Auth";
import {Profile} from "./pages/Profile/Profile";
import {UpdateProfile} from "./pages/Profile/UpdateProfile";
import {AddProduct} from "./pages/Profile/AddProduct";
import {UserProducts} from "./pages/Profile/UserProducts";

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { UserGuide } from "./pages/UserGuide/UserGuide";

function App() {
  const currentUser = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/Auth" />
  }

  console.log(currentUser)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Colleges" element={<Colleges />}/>
          <Route path="/Subjects" element={<Subjects />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Auth" element={<Auth />}/>
          
          <Route path="/Profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>}/>
          
          <Route path="/Profile/UpdateProfile" element={
          <RequireAuth>
            <UpdateProfile />
          </RequireAuth>}/>

          <Route path="/Profile/AddProduct" element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>}/>

          <Route path="/Profile/UserProducts" element={
          <RequireAuth>
            <UserProducts />
          </RequireAuth>}/>

          <Route path="/UserGuide" element={<UserGuide />}/>


        </Routes>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
