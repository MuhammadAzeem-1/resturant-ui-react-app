import React from "react";
import images from "../../constants/images";
import "./about.css";

function About() {
  return (
    <section className="section__padding app__bg flex__center section_about">
      <div className="about_G-img_overlay flex__center">
        <img src={images.G} alt="image" />
      </div>
      <div className="about_section-content flex__center">
        <div className="about_section-InnerContent">
          <h2>About Us</h2>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button">Know More</button>
        </div>

        <div className="about_section-knife_img">
          <img src={images.knife} alt="Knife image" />
        </div>

        <div className="about_section-InnerContent_2">
          <h2>Our History</h2>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
