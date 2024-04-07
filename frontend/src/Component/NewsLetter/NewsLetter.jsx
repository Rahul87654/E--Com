import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1> Gets Exclusive Offers on Our Mail </h1>
      <p> Subscribe to Our News Letter </p>
      <div>
        <input type="email" placeholder="Your Email ID " />
        <button> Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;
