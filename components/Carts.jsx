"use client";

import { useState } from "react";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";

function Carts({
  id,
  name,
  current_price,
  photos,
  removeItem,
  updateQuantity,
}) {
  const [quantity, setQuantity] = useState(1); // State to track quantity

  // Function to increase the quantity
  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(id, newQuantity);
    }
  };

  // Calculate the total amount
  const price = current_price?.[0]?.NGN?.[0] || 0;
  const totalAmount = price * quantity;

  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="bg-gray-100 rounded-lg w-[160px] h-[110px] md:h-[128px]">
          {photos?.map((p) => (
            <Image
              key={p.id}
              src={`https://api.timbu.cloud/images/${p.url}`}
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
              alt="Product Photo"
            />
          ))}
        </div>

        <div className="md:flex justify-between w-full pb-3">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-lg">{name}</h2>
              <p className="text-xs md:text-sm">
                Seller: Timbu Official Store-DORE2 | Variation: M/L
              </p>
            </div>
            <h2 className="text-lg font-medium">NGN {price}.00</h2>
            <div className="flex items-center mt-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded-lg"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded-lg"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <h2 className="text-lg font-medium mt-2">
              Total: NGN{" "}
              {totalAmount.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </h2>
          </div>

          <div className="flex gap-2 items-center">
            <CiTrash
              onClick={() => removeItem(id)}
              className="cursor-pointer"
            />
            <p
              className="text-xs md:text-base cursor-pointer"
              onClick={() => removeItem(id)}
            >
              Remove
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carts;
