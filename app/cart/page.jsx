"use client";
import { useContext } from "react";
import Link from "next/link";
import { ProductContext } from "@/context/ProductContext";
import Carts from "@/components/Carts";

function Cart() {
  const { cartItems, setCartItems, removeItem } = useContext(ProductContext);

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = (cartItems) => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      const price = item.current_price?.[0]?.NGN?.[0];
      if (price) {
        subtotal += price * (item.quantity || 1);
      }
    });
    return subtotal.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  return (
    <>
      <div>
        <div className="md:flex gap-6 py-10 w-full">
          <div className="md:w-8/12 flex flex-col gap-8">
            {cartItems.map((prod) => (
              <Carts
                key={prod.id}
                {...prod}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>

          <div className="md:w-4/12 flex flex-col gap-6 md:pt-0 pt-10">
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm">Cart Summary</p>
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-md">Subtotal</p>
                  <p className="text-xs">Delivery fees not included yet</p>
                </div>
                <h2 className="text-lg font-medium">
                  N{calculateSubtotal(cartItems)}
                </h2>
              </div>
              <Link
                className="p-4 text-center text-white rounded-xl bg-primarycolor"
                href={{
                  pathname: "/checkout",
                  query: { cartItems: JSON.stringify(cartItems) },
                }}
              >
                Checkout ({calculateSubtotal(cartItems)})
              </Link>
            </div>
            <div>
              <p>Returns are easy</p>
              <p>Free return within 7 days for ALL eligible items</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
