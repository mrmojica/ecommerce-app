import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import "./styles.scss";

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted className="custom-button">
      Add TO CART
    </CustomButton>
  </div>
);

export default CollectionItem;
