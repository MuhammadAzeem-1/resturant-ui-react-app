import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import image from "../../constants/images";
import "./header.css";

function Header() {
  return (
    <section className="header_section section__padding">
      <div className="heading_section-subheading">
        <SubHeading title={"Chase The New Flavour"} />{" "}
        <h2 className="heading">The key to Fine dining </h2>
        <p className="para">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>

      <div className="header_section-img">
        <img src={image.welcome} alt="header iamge" />
      </div>
    </section>
  );
}

export default Header;
