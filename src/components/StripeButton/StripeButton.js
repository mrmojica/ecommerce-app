import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe wants to see price value in cents.
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    // https://github.com/azmenak/react-stripe-checkout
    <StripeCheckout
      label="Pay Now"
      name="Crown Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${priceForStripe}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
