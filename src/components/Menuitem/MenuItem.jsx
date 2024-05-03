import React from "react";
import "./MenuItem.css";

function MenuItem({ title, price, tags }) {
  return (
    <section className="menu-item_section">
      <div className="menuitem_section_items">
        <p>{title}</p>

        <div className="menuItem-price">
          <div className="menuItem_div" />
          <p>{price}</p>
        </div>
      </div>
      <div className="menuItem_sub">
        <p>{tags}</p>
      </div>
    </section>
  );
}

export default MenuItem;
