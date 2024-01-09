import React from "react";
import "./Colleges.css"

export const Colleges = () => {
  return (
    <main>
  {/*buttons*/}
  <div className="btn-group">
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/westphal/admissions/drexel-urbn-center-lobby_900x400.ashx?h=400&w=900&hash=980450D84CEBF41C896AAE5F7D07A6CB70F60A02" />
      <div className="txt-overlay">
        Antoinette Westphal College of Media Arts and Design
      </div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Drexel/Core-Site-Group/Core/Images/academics-education/colleges-schools/lebow-1520x1140/lebow-1520x1140_160x53.ashx?w=860&hash=3151F2D2465604AC4FFF9A75F441C394" />
      <div className="txt-overlay">Bennett S. Lebow College of Business</div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Drexel/Core-Site-Group/Core/Images/academics-education/colleges-schools/close-school-1520x1140/close-school-1520x1140_160x53.ashx" />
      <div className="txt-overlay">
        Charles D. Close School of Entrepreneurship
      </div>
    </div>
  </div>
  <div className="btn-group">
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/coas2/COAS/admissions/biowall-stairs-horizontal--900x275.ashx?la=en" />
      <div className="txt-overlay">College of Arts and Sciences</div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/cci/Homepage/Homepage-Snippet/virtualtour_800.ashx?la=en" />
      <div className="txt-overlay">College of Computing and Informatics</div>
    </div>
    <div className="college-btn">
      <img src="https://educationsnapshots.com/wp-content/uploads/sites/4/2018/05/drexel-university-electrical-philadelphia-1-1050x750.jpg" />
      <div className="txt-overlay">College of Engineering</div>
    </div>
  </div>
  <div className="btn-group">
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/cnhp/health-sciences-building/HSB%201024x768%202/mobile.ashx" />
      <div className="txt-overlay">
        College of Nursing and Health Professions
      </div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/dornsife/ui/dragon-background-1600/mobile.ashx" />
      <div className="txt-overlay">
        Dana and David Dornsife School of Public Health
      </div>
    </div>
    <div className="college-btn">
      <img src="https://media.newyorker.com/photos/60a5473498e3953d886a09fc/16:9/w_2560,h_1440,c_limit/Shouts-Outside.jpg" />
      <div className="txt-overlay">Goodwin College of Professional Studies</div>
    </div>
  </div>
  <div className="btn-group">
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Drexel/Core-Site-Group/Core/Images/academics-education/colleges-schools/biomed_1520x1140/biomed_1520x1140_160x53.ashx?w=1600&hash=37394896F39FF8F8344EA4717E16F9A5" />
      <div className="txt-overlay">
        School of Biomedical Engineering, Science, and Health System
      </div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Drexel/Core-Site-Group/Core/Images/academics-education/colleges-schools/soe-1520x1140/soe-1520x1140_16x9.ashx" />
      <div className="txt-overlay">School of Education</div>
    </div>
    <div className="college-btn">
      <img src="https://drexel.edu/~/media/Images/law/LRC/LRC-main-page-banner%202.ashx?h=301&w=787&hash=4BB21B038B85E11F96FEE652C50875683A933CEA" />
      <div className="txt-overlay">Thomas R. Kline School of Law</div>
    </div>
  </div>
</main>

      );
    };