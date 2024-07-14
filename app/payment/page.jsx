"use client";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";

function Payment() {
  const { cartItems } = useContext(ProductContext);

  // Function to calculate total amount
  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = item.current_price?.[0]?.NGN?.[0];
      if (price) {
        total += price * (item.quantity || 1);
      }
    });
    return total.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    }); // Format total as currency
  };

  return (
    <>
      <div className="p-4 md:w-3/6 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold">🎉 Payment Successful 🎉</h1>
          <h2 className="text-xl mt-2">Your Order has been received</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Order Summary</h3>
            <div className="mt-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <span>
                    {item.name} (x{item.quantity})
                  </span>
                  <span>
                    {item.current_price?.[0]?.NGN?.[0].toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between font-bold">
              <span>Total Amount:</span>
              <span>{calculateTotal(cartItems)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
