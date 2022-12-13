import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const ref = useRef();

  const toggleCart = () => {
    if(ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else {
      ref.current.classList.add('translate-x-full');
      ref.current.classList.remove('translate-x-0');
    }
  }
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
          <Link href={"/tshirts"}>
            <a>
              <li>TShirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5">
        <button onClick={toggleCart}>
          <AiOutlineShoppingCart className="text-xl md: text-2xl" />
        </button>
      </div>

      <div ref={ref} className="sidebar absolute top-0 right-0 bg-slate-600 p-10 transition-transform translate-x-full">
        <h2 className="font-bold text-x1">This is my cart.</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl"><AiFillCloseCircle /></span>
      </div>
    </div>
  );
};

export default Navbar;
