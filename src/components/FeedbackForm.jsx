import React from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  return (
    <div className="feedback-form">
      <h2>We Value Your Feedback</h2>
      <form>
        {/* Name Field */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" required />

        {/* Email Field */}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your Email" required />

        {/* Feedback Message */}
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your Feedback" rows="5" required />

        {/* Rating Section */}
        <div className="rating">
          <p>Rate Us:</p>
          <label>
            <input type="radio" name="rating" value="1" />
            <span>1</span>
          </label>
          <label>
            <input type="radio" name="rating" value="2" />
            <span>2</span>
          </label>
          <label>
            <input type="radio" name="rating" value="3" />
            <span>3</span>
          </label>
          <label>
            <input type="radio" name="rating" value="4" />
            <span>4</span>
          </label>
          <label>
            <input type="radio" name="rating" value="5" />
            <span>5</span>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
