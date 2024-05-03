import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import images from "../../constants/images";
import "./chef.css";

function Chef() {
  return (
    <section className="app__bg chef_section section__padding">
      <div className="chef_image">
        <img src={images.chef} alt="chef img" />
      </div>{" "}
      <div className="chef_content-section">
        <SubHeading title={"Chef's Word"} />
        <h2 className="chef_heading">What We Believe In</h2>

        <div>
          <div className="chef_section-quote_img">
            <img src={images.quote} alt="" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
          </div>
          <p className="p__opensans">
            Quaerat quidem doloremque delectus? Odio sequi, fugiat dicta
            recusandae ab natus sunt!
          </p>
        </div>

        <div className="chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign imageww" />
        </div>
      </div>
    </section>
  );
}

export default Chef;
