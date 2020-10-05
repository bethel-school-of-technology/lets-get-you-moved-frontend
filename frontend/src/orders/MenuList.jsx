import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ title, data, withImage, menuIndex, onChange }) => {
  return (
    <div className="shop-menu">
      <h2>{title}</h2>
      {data.map((params, i) => (
        <MenuItem
          {...{
            choice: { ...params, withImage },
            id: { menuIndex, subMenu: i },
            onChange,
            key: i,
          }}
        />
      ))}
    </div>
  );
};

export default MenuList;
