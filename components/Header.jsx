import Link from "next/link";
import { BsMenuApp } from "react-icons/bs";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaHamburger } from "react-icons/fa";

function Header() {
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
          <Link href={"/cart"}>
            {" "}
            <CiShoppingCart className="text-lg" />
          </Link>
          <CiUser className="text-lg" />
          <FaHamburger />
        </div>
      </div>
    </>
  );
}

export default Header;
