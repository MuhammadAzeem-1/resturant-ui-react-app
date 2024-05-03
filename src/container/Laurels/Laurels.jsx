import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import "./laurels.css";
function Laurels() {
  return (
    <section className="app__bg section__padding app__wrapper">
      <section className="app__wrapper_inf">
        <SubHeading title={"Awards & recognition"} />
        <h2 className="laurels_section-heading">Our Laurels</h2>

        <div className="laurels_section-map">
          {data.awards.map((award) => {
            const { imgUrl, title, subtitle } = award;
            return (
              <section className="laurels_section-content">
                <img src={imgUrl} alt={title} />

                <div className="laurels_section-Subconetnt">
                  <p>{title}</p>
                  <p>{subtitle}</p>
                </div>
              </section>
            );
          })}
        </div>
      </section>
      <div className="laurels_img">
        <img src={images.laurels} alt="" />
      </div>
    </section>
  );
}

export default Laurels;
