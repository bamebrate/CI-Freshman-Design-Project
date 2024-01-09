import React from "react";
import "./Subjects.css"

export const Subjects = () => {
  return (
    <main>
  {/* class trending-products in video */}
  <section className="allSubjects">
    {/* class products in video */}
    <div className="subjects">
      <div className="row">
        <img src="./subjectImages/Biology.jpg" alt="Bio Image" />
        <div>
          <h3>Biology</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/chemistry.jpg" alt="Chem Image" />
        <div>
          <h3>Chemistry</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/math.jpg" alt="Math Image" />
        <div>
          <h3>Mathematics</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/physics.jpg" alt="Physics Image" />
        <div>
          <h3>Physics</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/socialscience.png" alt="Social Image" />
        <div>
          <h3>Social Sciences</h3>
        </div>
      </div>

      <div className="row">
        <img src="./subjectImages/lang.png" alt="Lang Image" />
        <div>
          <h3>Languages</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/business.jpg" alt="Business Image" />
        <div>
          <h3>Business</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/appliedarts.jpg" alt="Arts1 Image" />
        <div>
          <h3>Applied Arts</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/perfArts.jpg" alt="Arts2 Image" />
        <div>
          <h3>Performing Arts</h3>
        </div>
      </div>
      <div className="row">
        <img src="./subjectImages/fineart.png" alt="Arts3 Image" />
        <div>
          <h3>Fine Arts</h3>
        </div>
      </div>
    </div>
  </section>
</main>

      );
    };