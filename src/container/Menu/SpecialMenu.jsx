import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const SpecialMenu = () => (
  <div className="app__specialMenu flex_center sectoin__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Todays special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tag={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tag={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button flex-center">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
