import React from "react";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        Welcome to Foodie's Delight! Our journey started with a passion for delicious food
        and a commitment to exceptional service. Our chefs craft each dish with care and
        creativity, ensuring a delightful experience for every customer.
      </p>
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Chef Mario</h3>
            <p>Head Chef - 15+ years of culinary experience.</p>
          </div>
          <div className="team-member">
            <h3>Susan Smith</h3>
            <p>Pastry Chef - Known for her incredible desserts!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
