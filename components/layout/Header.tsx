import { assets } from "@/public/asstes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-14 lg:h-[8vh] sticky top-0 z-50 py-4 pb-12 text-gray-500 bg-white">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="logo" quality={100} />
        <ul className="gap-4 font-medium hidden lg:flex">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">menu</Link>
          </li>
          <li>
            <Link href="">mobile app</Link>
          </li>
          <li>
            <Link href="">contact us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Image
            className="cursor-pointer"
            src={assets.search_icon}
            alt="logo"
            quality={100}
          />
          <Image
            className="cursor-pointer"
            src={assets.basket_icon}
            alt="logo"
            quality={100}
          />
          <div>
            <button className="rounded-full text-gray-500 font-medium border border-orangeColor px-8 h-10">
              sign in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
