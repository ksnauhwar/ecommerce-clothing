import React from "react";

import "./cart-item.styles.scss";

function CartItem({ item }) {
  const { quantity, name, price, imageUrl } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item"></img>
      <div className="cart-item__details">
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__quantity-price">
          {quantity} X {price}
        </p>
      </div>
    </div>
  );
}

export default React.memo(CartItem);
