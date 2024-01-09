import React from "react";
import "./UserGuide.css"

export const UserGuide = () => {
    return(
        <main>
  <h2 className="user-title"> User Guide </h2>
  <div className="login">
    <h3>Login and Sign Up</h3>
    <p>
      After you open our website if you want to Login/Sign up you'd have to got
      to the Profiles page. Additionally, if you want to login into another
      account you can also go to this page from the top right of the navigation
      bar. Inorder to sign up or login into our website you would just need to
      put in a valid email address and a password.
    </p>
    <img src="./UserGuideImages/login.jpg" alt="Login Image" />
  </div>
  <div className="login">
    <h3>Editing Profile</h3>
    <p>
      After you login into our website you'll be taken to the Profiles page
      where you have the option of ediitng your profile. When you click on the
      'Edit Information' button in the middle of the Contact Information section
      you'll be redirected to the Update Profiles page where you have the choice
      of editing your profile information. Once you're done changing your
      information click on the 'Save Changes' button in the middle to save your
      changes.
    </p>
    <img src="./UserGuideImages/profiles.jpg" alt="Profiles Image" />
    <img src="./UserGuideImages/uprofiles.jpg" alt="Update Profiles Image" />
  </div>
  <div className="login">
    <h3>Browsing Product</h3>
    <p>
      You have three main ways of browsing through our products. First when you
      open the website you are welcomed by the home page which is also the
      catalog page. It has all our availabe products listed and you can browse
      through and add to cart as needed. Our second form of browsing products is
      the colleges page in which you can look for items based on the specific
      colleges. If you find yourself looking for products for a specific subject
      you can look through our subjects page and search based on subjects. All
      these pages can be accessed from the navigation bar.
    </p>
    <img src="./UserGuideImages/home.png" alt="home Image" />
    <img src="./UserGuideImages/colleges.png" alt="college Image" />
    <img src="./UserGuideImages/subject.png" alt="subject Image" />
  </div>
  <div className="login">
    <h3>Uploading Product</h3>
    <p>
      If you want to sell a product on our website you can upload it by going to
      the profiles page then scrolling down to the product management section.
      From there you can click on the 'Add New Product' button to be redirected
      to the Add products page where you can enter a title and a price for your
      product before saving your changes.
    </p>
    <img src="./UserGuideImages/profiles1.jpg" alt="Profiles Image" />
    <img src="./UserGuideImages/uproducts.jpg" alt="Upload Product Image" />
  </div>
</main>
    )
}