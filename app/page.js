"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="relative -mt-[76px] overflow-hidden" id="home">
        <div className="h-screen">
          <video
            muted
            loop
            autoPlay
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="assets/bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-75">
          <div className="max-w-[868px] px-4 md:px-5 mx-auto h-full flex flex-col items-center justify-center pt-[10%] pb-[15%]">
            <h6 className="max-md:text-base font-bold md:leading-7 text-white mb-3.5 md:mb-7 text-center">
              Boundaries are meant to be broken.
            </h6>
            <p className="text-3xl font-extrabold leading-normal text-center text-white md:text-5xl lg:text-6xl lg:leading-tight md:leading-tight">
              LIMITS ARE MEANT TO BE REDEFINED.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-5 pt-10 pb-6 mx-auto md:py-16 max-w-custom-screen">
        <h2 className="h1 w-full before:content-[''] before:h-[1px] before:bg-red-700 before:block before:absolute before:-bottom-3 before:w-full before:-translate-x-1/2 relative mb-8">
          SUNSCREEN
        </h2>
        <div className="flex flex-wrap w-full -mx-5">
          <div className="w-full px-5 pt-5 py-2.5 max-md:mb-5 md:w-2/3">
            <p className="mb-5 last:mb-0">
              Every dermatologist konws that sunscreen is the #1 most imporant
              product for healthy, young skin.
            </p>
            <p className="mb-5 last:mb-0">
              Without a good sunscreen, every other anti-aging product is a
              waste of money.
            </p>
            <p className="mb-5 last:mb-0">
              But a GREAT sunscreen? It will save you from most of your skin-
              care woes.
            </p>
            <p className="mb-5 last:mb-0">
              Sometimes, there's that one super special (unicorn) product out
              there. Something that's unlike anything else. This is it.
            </p>
          </div>
          <div className="w-1/2 p-2.5 md:p-5 md:w-1/3">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/p-1.4.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
          <div className="w-1/2 p-2.5 md:p-5 md:w-1/3">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/p-1.1.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
          <div className="w-1/2 p-2.5 md:p-5 md:w-1/3">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/p-1.2.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
          <div className="w-1/2 p-2.5 md:p-5 md:w-1/3">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/p-1.3.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pb-6 mx-auto md:pb-16 max-w-custom-screen">
        <h2 className="pb-3 mx-auto mb-10 leading-tight text-center border-b border-red-700 outline-offset-4 w-fit h1">
          PIONEERING THE FUTURE OF SKINCARE FOR ATHLETES.
        </h2>
        <div className="mb-10">
          <p className="text-lg text-center text-red-700 mb-7 md:text-xl">
            SHATTER THE RULES.
          </p>
          <p className="text-lg text-center text-red-700 mb-7 md:text-xl">
            REDEFINE BOUNDARIES.
          </p>
          <p className="text-lg text-center text-red-700 mb-7 md:text-xl">
            DO THE IMPOSSIBLE.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl text-center md:text-xl-22">
            Skin Aging is primarily caused by the sun and bad UVA protection.
          </p>
          <p className="mb-4 text-lg text-center md:text-xl">
            Your #1 Anti-Aging product is high quality sunscreen.
          </p>
          <p className="text-center font-bold mb-5 max-w-[500px] mx-auto">
            "Every other anti-aging product you buy is a waste of money if you
            don't have a good sunscreen."
          </p>
          <div className="mb-5 text-center">
            <p>- DERMATOLOGIST EDIT OLASZ HARKEN</p>
            <p>founder, Harken Derm</p>
          </div>
          <p className="text-center font-bold mb-5 max-w-[500px] mx-auto">
            "... and people don't realize that. They are out spending thousands
            on retinol creams and treatments, but that is all useless if you
            don't have a good sunscreen. That's why I wanted to create the best
            sunscreens to serve as the essential foundation of your skincare to
            make it easy for you step 1 & step 2."
          </p>
          <h2 className="pb-2 mx-auto my-6 border-b border-red-700 md:my-10 outline-offset-4 w-fit">
            Products
          </h2>
          <div className="flex flex-wrap -mx-5">
            <Link href="/product" className="w-1/2 p-5 sm:w-1/3">
              <div>
                <Image
                  loader={imageLoader}
                  unoptimized={true}
                  priority={false}
                  src="assets/p-1.png"
                  width={750}
                  height={750}
                  alt="Main Logo"
                  className="w-full"
                />
              </div>
              <p className="mt-2 font-semibold text-center">
                All Mineral SPF 50 Sunscreen with Antioxidants
              </p>
            </Link>
            <Link href="#" className="w-1/2 p-5 sm:w-1/3">
              <div>
                <Image
                  loader={imageLoader}
                  unoptimized={true}
                  priority={false}
                  src="assets/p-2.png"
                  width={750}
                  height={750}
                  alt="Main Logo"
                  className="w-full"
                />
              </div>
              <p className="mt-2 font-semibold text-center">
                Daily Skin Repair Lotion
              </p>
            </Link>
            <Link href="#" className="w-1/2 p-5 sm:w-1/3">
              <div>
                <Image
                  loader={imageLoader}
                  unoptimized={true}
                  priority={false}
                  src="assets/p-3.png"
                  width={750}
                  height={750}
                  alt="Main Logo"
                  className="w-full"
                />
              </div>
              <p className="mt-2 font-semibold text-center">
                The 2 Step Solution
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 py-6 mx-auto md:pb-16 max-w-custom-screen">
        <h2 className="pb-3 mx-auto mb-5 border-b border-red-700 outline-offset-4 w-fit h1">
          HOW TO APPLY
        </h2>
        <p className="mb-5 text-xl text-center md:text-xl-22">
          A little goes a long way!
        </p>
        <div className="flex max-lg:flex-wrap">
          <div className="p-2.5 max-sm:w-1/2 max-lg:w-1/3">
            <div>
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/hta-1.jpg"
                width={550}
                height={550}
                alt="Main Logo"
                className="w-full"
              />
            </div>
            <p>
              Apply a pea size amount into your hand. That is the amount needed
              for a facial application.
            </p>
          </div>
          <div className="p-2.5 max-sm:w-1/2 max-lg:w-1/3">
            <div>
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/hta-2.jpg"
                width={550}
                height={550}
                alt="Main Logo"
                className="w-full"
              />
            </div>
            <p>
              Rub your hands together, gently spreading the product in your
              palm.
            </p>
          </div>
          <div className="p-2.5 max-sm:w-1/2 max-lg:w-1/3">
            <div>
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/hta-3.jpg"
                width={550}
                height={550}
                alt="Main Logo"
                className="w-full"
              />
            </div>
            <p>
              Spread by press your hands into small sections of body and blend
              evenly into skin.
            </p>
          </div>
          <div className="p-2.5 max-sm:w-1/2 max-lg:w-1/3">
            <div>
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/hta-4.jpg"
                width={550}
                height={550}
                alt="Main Logo"
                className="w-full"
              />
            </div>
            <p>
              Repeat the application process on desired areas using a larger pea
              size model as your guide.
            </p>
          </div>
          <div className="p-2.5 max-sm:w-1/2 max-lg:w-1/3">
            <div>
              <Image
                loader={imageLoader}
                unoptimized={true}
                priority={false}
                src="assets/hta-5.jpg"
                width={550}
                height={550}
                alt="Main Logo"
                className="w-full"
              />
            </div>
            <p>
              Reapply using small dots on areas that you feel you need more or
              on spots that burn easier. Then rub in thoroughly. Thats it!
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 pb-10 mx-auto md:pb-16 max-w-custom-screen">
        <h2 className="pb-3 mx-auto leading-tight text-center border-b border-red-700 mb-7 outline-offset-4 w-fit h1">
          OFFICIAL SUNSCREEN PARTNER OF:
        </h2>
        <div className="flex items-center justify-center">
          <div className="w-1/2 px-5 max-w-[300px]">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/USST-Logo-496.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
          <div className="w-1/2 px-5 max-w-[300px]">
            <Image
              loader={imageLoader}
              unoptimized={true}
              priority={false}
              src="assets/American+Magic+Logo+NYYC.png"
              width={300}
              height={66}
              alt="Main Logo"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
