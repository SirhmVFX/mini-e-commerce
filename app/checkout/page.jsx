"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Checkoutcard from "@/components/Checkoutcard";
import { products } from "@/data";

function Checkout() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const { cartItems } = router.query;
      if (cartItems) {
        setCartItems(JSON.parse(cartItems));
      }
    }
  }, [router.isReady, router.query]);
  return (
    <div>
      <h2 className="text-3xl mb-8">Checkout</h2>
      <div className="md:flex gap-6">
        <div className="md:w-7/12 flex flex-col gap-4">
          <div className="py-1 border-b border-gray-100">
            <h2>Shipping details</h2>
          </div>

          <div className="md:flex justify-between py-4">
            <div>
              <h2 className="text-md font-medium">Fullstack Mechanic</h2>
              <p className="text-sm w-3/4 md:w-2/4">
                14, Afeolusegun Street, Denro Ishasi, Akute, Ojodu Berger.
              </p>
            </div>
            <p>sirhmvfx@gmail.com</p>
          </div>

          <div>
            <div className="py-1 border-b border-gray-100">
              <h2>Payment details</h2>
            </div>

            <form className="py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Name on card</label>
                <input
                  type="text"
                  placeholder="eg Fullstack Mechanic"
                  className="p-4 rounded-xl border border-gray-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Card Number</label>
                <input
                  type="text"
                  placeholder="eg 1234 5678 9012"
                  className="p-4 rounded-xl border border-gray-50"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label htmlFor="">Exp. Date</label>
                  <input
                    type="text"
                    placeholder="eg 12/34"
                    className="p-4 rounded-xl border border-gray-50"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label htmlFor="">CVV</label>
                  <input
                    type="text"
                    placeholder="eg 012"
                    className="p-4 rounded-xl border border-gray-50"
                  />
                </div>
              </div>
              <Button title={"Checkout (N751,133)"} />
            </form>
          </div>
        </div>

        <div className="md:w-5/12 py-6">
          <div className="py-1 border-b border-gray-100 mb-4">
            <h2>Order Summary</h2>
          </div>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <Checkoutcard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
