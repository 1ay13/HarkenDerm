"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaImdb, FaLinkedin, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <footer className="text-white bg-footer">
      <div className="flex items-center justify-center gap-5 px-5 pt-10 mx-auto text-white max-lg:flex-wrap lg:gap-7 max-w-custom-screen lg:justify-between md:pt-16">
        <div className="w-full lg:w-1/2 max-md:text-center">
          <h2 className="w-full mb-3 leading-snug text-white lg:w-auto">
            Subscribe to our Newsletter
          </h2>
          <p>
            Join our mailing list and be among the first to receive updates on
            our products and special deals.
          </p>
        </div>
        <div className="flex w-full overflow-hidden border border-white border-solid lg:w-1/2 rounded-xl">
          <div className="md:w-[calc(100%-140px)] w-[calc(100%-133px)] text-black">
            <input type="text" className="w-full px-5 h-10 md:h-[50px]" id="fname" name="fname" />
          </div>
          <div className="w-[133px] lg:w-[140px] flex items-center justify-center">
            <button type="button" className="w-full ">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 mx-auto md:py-16 max-w-custom-screen">
        <div className="flex flex-wrap">
          <div className="w-full mb-2 md:-ml-5">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/footer-logo.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="max-md:mx-auto"
            />
          </div>
          <div className="flex items-center justify-center w-full gap-3 mb-5 md:w-auto">
            <a href="#" target="_blank">
              <AiFillInstagram size="1.5rem" />
            </a>
            <a href="#" target="_blank">
              <AiFillYoutube size="1.5rem" />
            </a>
            <a href="#" target="_blank">
              <FaVimeoV size="1.5rem" />
            </a>
            <a href="#" target="_blank">
              <FaImdb size="1.5rem" />
            </a>
            <a
              href="#"
              target="_blank"
            >
              <FaLinkedin size="1.5rem" />
            </a>
          </div>
          <div className="flex justify-between w-full gap-8 max-2xl:flex-wrap">
            <div className="max-sm:w-full max-sm:text-center sm:w-[calc(50%-20px)] md:w-auto">
              <h6 className="pb-2 mb-5 font-semibold border-b border-white border-solid">
                Our Products
              </h6>
              <ul className="space-y-1.5 text-sm md:text-base">
                <li>
                  <Link
                    to="about"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Where to buy Harken Derm
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-clients"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Repair
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="why-us"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Why Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:text-center sm:w-[calc(50%-20px)] md:w-auto">
              <h6 className="pb-2 mb-5 font-semibold border-b border-white border-solid">
                Save Our Skin
              </h6>
              <ul className="space-y-1.5 text-sm md:text-base">
                <li>
                  <Link
                    to="about"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Save Your Skin
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-clients"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    About The Elements
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    How To Apply Sunscreen
                  </Link>
                </li>
                <li>
                  <Link
                    to="why-us"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Check The Back
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:text-center sm:w-[calc(50%-20px)] md:w-auto">
              <h6 className="pb-2 mb-5 font-semibold border-b border-white border-solid">
                About Harken Derm
              </h6>
              <ul className="space-y-1.5 text-sm md:text-base">
                <li>
                  <Link
                    to="about"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    The Harken Derm Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-clients"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:text-center sm:w-[calc(50%-20px)] md:w-auto">
              <h6 className="pb-2 mb-5 font-semibold border-b border-white border-solid">
                Dive Deeper
              </h6>
              <ul className="space-y-1.5 text-sm md:text-base">
                <li>
                  <Link
                    to="about"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Featured Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-clients"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Save the Corals
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Beat Plastic
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Gear Bag
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Marlene Plumley - Diver & Ambassador
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-sm:w-full max-sm:text-center sm:w-[calc(50%-20px)] md:w-auto">
              <h6 className="pb-2 mb-5 font-semibold border-b border-white border-solid">
                Legal
              </h6>
              <ul className="space-y-1.5 text-sm md:text-base">
                <li>
                  <Link
                    to="about"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="our-clients"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    href="#"
                    className="text-white cursor-pointer"
                  >
                    Shipping & Payment Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5 text-xs">
          <p>
            This website is owned and copyrighted to the fullest extent of the
            law by Harken Derm LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
