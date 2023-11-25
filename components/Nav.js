"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  const imageLoader = ({ src }) => {
    return `${src}`;
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 76;
      setIsScrolled(scrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${ isScrolled && "bg-black"} ${pathname == "/" ? '' : 'bg-black' } fixed top-0 z-10 w-full transition-all ease-in-out duration-500`}
    >
      <nav className="flex items-center justify-between w-full gap-2.5 px-5 py-2 mx-auto text-white max-w-custom-screen">
        <div
          className="text-sm font-bold cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          MENU
        </div>
        <div className="max-w-[310px] md:-ml-5">
          <Link href="/" onClick={() => setToggleMenu(false)}>
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/hd-logo.png"
              width={1479}
              height={389}
              alt="Main Logo"
            />
          </Link>
        </div>
        <div className="text-sm font-bold cursor-pointer">CART</div>
        <div
          className={`${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-full bottom-0 bg-black bg-opacity-40 text-white text-xl-22 font-bold transition-transform ease-in-out duration-500`}
        >
          <div className="h-full text-black relative flex flex-col px-8 pt-20 pb-7 bg-white w-full font-normal max-w-[360px]">
            <span
              className="absolute text-2xl top-3.5 right-5"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <Link
              href="#"
              onClick={() => setToggleMenu(false)}
              className="py-1 text-base"
            >
              Shop All
            </Link>
            <Link
              href="#"
              onClick={() => setToggleMenu(false)}
              className="py-1 text-base"
            >
              Shop All
            </Link>
            <Link
              href="#"
              onClick={() => setToggleMenu(false)}
              className="py-1 text-base"
            >
              Shop All
            </Link>
            <Link
              href="#"
              onClick={() => setToggleMenu(false)}
              className="py-1 text-base"
            >
              Shop All
            </Link>
            <Link
              href="#"
              onClick={() => setToggleMenu(false)}
              className="flex items-center py-1 mt-10 text-base"
            >
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="ml-2">Account</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
