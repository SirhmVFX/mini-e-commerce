"use client";
import { ProductContext } from "@/context/ProductContext";
import Link from "next/link";
import { useContext } from "react";
import { BsMenuApp } from "react-icons/bs";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";

function Header() {
  const { cartItems } = useContext(ProductContext);
  return (
    <>
      <div className="py-6 px-4 md:px-0 md:w-5/6 mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1>ShoeBank</h1>
        </Link>
        <ul className="md:flex hidden gap-8 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex gap-4">
          <CiSearch className="text-lg" />
          <Link href={"/cart"} className="relative">
            {" "}
            <CiShoppingCart className="text-lg" />
            <div className="bg-red-500 w-3 h-3 absolute -right-2 top-0 rounded-full flex justify-center items-center">
              <p className="text-white text-[8px]">{cartItems.length}</p>
            </div>
          </Link>
          <CiUser className="text-lg" />
          <FaHamburger />
        </div>
      </div>
    </>
  );
}

export default Header;
