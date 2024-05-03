import React, { useState } from "react";
import image from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="nav_img">
        <a href="#">
          {" "}
          <img src={image.gericht} alt="image" className="nav__image" />
        </a>
      </div>
      <ul className="nav__items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Landing</a>
        </li>
      </ul>

      <div className="nav_login-section">
        <a href="#" className="login">
          Log in / registration
        </a>
        <div></div>
        <a href="#" className="book_table">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          fontSize={27}
          color={"fff"}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color={"white"}
              className="overlay__close "
              onClick={() => setToggleMenu(false)}
            />{" "}
            <ul className="app__navbar-smallscreen-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
