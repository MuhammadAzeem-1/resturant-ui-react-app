import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";
import MenuItem from "../../components/Menuitem/MenuItem";
import "./menu.css";

function Menu() {
  return (
    <section className="section__padding  menu-section">
      <div className="menu-section_header">
        <SubHeading title={"Menu that fits you palatte"} />
        <h2 className="menu-section_heading">Today’s Special</h2>
      </div>
      <div className="menu-section_menu">
        <div className="menu-subSection-left">
          <p className="para">Wine & Beer</p>
          {data.wines.map((item, index) => {
            return (
              <MenuItem
                key={index}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            );
          })}
        </div>
        <div className="menu-section_img">
          <img src={images.menu} alt="" />
        </div>
        <div className="menu-subSection-right">
          <p className="para">Cocktails</p>
          {data.cocktails.map((item, index) => {
            return (
              <MenuItem
                key={index}
                title={item.title}
                price={item.price}
                tags={item.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
