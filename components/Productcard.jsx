"use client";
import { useContext } from "react";
import { ProductContext } from "@/context/ProductContext";
import Image from "next/image";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

function Productcard({ id, name, review, sold, photos, current_price }) {
  const { cartItems, setCartItems } = useContext(ProductContext);

  const addToCart = () => {
    const product = { id, name, current_price, review, sold, photos };
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <>
      <div className="relative">
        <Link href={`/products/${id}`} className=" ">
          <div className="bg-gray-100 md:h-[200px] h-[150px] relative rounded-ss-xl rounded-se-xl">
            <div className="bg-white rounded-full flex justify-center items-center absolute right-2 top-2 md:w-[35px] md:-[35px] w-[25px] h-[25px]">
              <CiHeart className="text-base md:text-xl " />
            </div>
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
          <div className="py-4 flex justify-between items-end ">
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <FaStar className="text-xs text-yellow-500" />
                <FaStar className="text-xs text-yellow-500" />
                <FaStar className="text-xs text-yellow-500" />
                <FaStar className="text-xs text-yellow-500" />
                <FaStar className="text-xs text-yellow-500" />
                <p className="text-sm">{review}</p>
              </div>
              <h2 className="text-xs md:text-[18px]">{name}</h2>
              <div className="flex gap-2 items-center">
                <h2 className="text-xs md:text-[14px] font-medium ">
                  {current_price?.[0].NGN}.00
                </h2>
                             </div>
            </div>{" "}
          </div>
        </Link>
        <div
          onClick={addToCart}
          className="bg-primarycolor absolute bottom-3 right-3 rounded-full flex justify-center items-center md:w-[35px] w-[25px] md:h-[35px] h-[25px] cursor-pointer"
        >
          <CiShoppingCart className="text-base md:text-xl text-white" />
        </div>
      </div>{" "}
    </>
  );
}

export default Productcard;
