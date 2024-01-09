import React from "react";
import "./About.css"

export const About = () => {
  return (
    <main>
  <h1 className="about"> ABOUT US </h1>
  <h2 className="create">Meet the Creators</h2>
  <div className="card-container">
    <div className="profile-card">
      <img
        src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
        className="pfp-img"
      />
      <h3>Kaaviya Senthil</h3>
      <p>Software Engineering Major</p>
    </div>
    <div className="profile-card">
      <img
        src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
        className="pfp-img"
      />
      <h3>Tsion Bekele</h3>
      <p>Software Engineering Major</p>
    </div>
    <div className="profile-card">
      <img
        src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
        className="pfp-img"
      />
      <h3>Angel Washington</h3>
      <p>Computer Science Major</p>
    </div>
    <div className="profile-card">
      <img
        src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
        className="pfp-img"
      />
      <h3>Beamlak Mebrate</h3>
      <p>Software Engineering Major</p>
    </div>
  </div>
  <div className="mission">
    <h2>Mission</h2>
    <p>
      With the price of college, earning an education has stained families'
      finances in recent years. To help students ease their minds and bank
      accounts, we created an affordable and convenient market for expensive
      products. By providing a platform that allows students to buy and sell
      used products, everyone can benefit by saving money. In the grand scheme
      of things, students can worry less about their finances and more about
      their academics.
    </p>
  </div>
</main>

      );
    };