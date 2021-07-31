import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment was successful");
  };
  return (
    <StripeCheckout
      name="Nimrit Clothing Ltd."
      panelLabel="Pay Now"
      shippingAddress
      billingAddress
      token={onToken}
      stripeKey=""
      amount={price * 100}
      currency="USD"
      label="Pay Now"
      description={`Your total amount is $${price}`}
    />
  );
};

export default StripeCheckoutButton;
