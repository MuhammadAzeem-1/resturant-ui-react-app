import React from "react";
import { Newsletter, Footerlay } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <Footerlay />
        <Newsletter />
        <div className="main">
          <div className="first header">
            <h4>Contact Us</h4>
            <p>9 W 53rd St, New York</p>
            <p>, NY 10019, USA</p>
          </div>
          <div className="second">
            <h2>Gerícht</h2>
            <SubHeading
              title={
                "The best way to find yourself is to lose yourself in the service of others.”"
              }
            />
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
          <div className="third header">
            <h4>Working Hours</h4>
            <p>Monday-Friday:</p>
            <p> 08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p> 07:00am -11:00 pm</p>
          </div>
        </div>
        <div className="last">
          <p>2021 Gerícht. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
