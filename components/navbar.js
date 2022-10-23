import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md py2">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src={"/logo.png"} width={210} height={50} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href={'/tshirts'}><a><li>TShirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <button><AiOutlineShoppingCart className="text-xl md: text-2xl" /></button>
      </div>
    </div>
  );
};

export default Navbar;
