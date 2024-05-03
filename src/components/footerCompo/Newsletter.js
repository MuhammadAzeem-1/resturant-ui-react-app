import React from "react";
import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div>
        <SubHeading title={"Newsletter"} />

        <h2>Subscribe to Our Newsletter</h2>
        <p>And never miss latest Updates!</p>
      </div>
      <div className="navletter-input">
        <input type="text" placeholder="Email" />
        <button>Subscribr</button>
      </div>
    </section>
  );
}

export default Newsletter;
