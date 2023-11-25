"use client";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const imageLoader = ({ src }) => {
    return `${src}`;
  };

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="px-5 mx-auto max-w-custom-screen">
      <div className="flex flex-wrap py-10 md:py-16">
        <div className="w-full max-md:order-2 md:w-1/2 pr-7">
          <h1 className="mb-3">
            All Mineral SPF 50 Sunscreen with Antioxidants
          </h1>
          <div className="flex items-center gap-2 mb-5">
            <div>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStarHalf} />
              </span>
            </div>
            <a href="#" className="underline">
              Review
            </a>
          </div>
          <div className="space-y-4 text-black font-extralight">
            <p>Your fight against skin cancer starts here.</p>
            <p>
              Maximum protection and repair, the longest-lasting sunscreen you
              will find.
            </p>
            <p>
              Using the perfect amounts of the best non-nano mineral filters UV
              filters, boosted with our botanical antioxidant complex, Harken
              Derm High Performance Sunscreen will keep you protected and your
              skin feeling great in the toughest conditions.
            </p>
            <p>
              Maximum water resistance, maximum sweat resistance, full spectrum
              SPF 50, with zinc oxide and titanium dioxide - no chemical
              filters. This will keep you protected like others don’t.
            </p>
            <p>
              Safe for our seas and the reefs, safe for all skin types and
              children. For sensitive skin, post-procedure, hypoallergenic,
              cruelty-free, vegan.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <p className="text-xl text-red-700 md:text-2xl">$39.50</p>
            <p className="text-xl text-gray-500 line-through md:text-2xl">
              $59.50
            </p>
            <p className="p-1 text-xs font-bold text-white bg-red-700">
              50% OFF
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="w-full px-5 py-3.5 text-white bg-primary"
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="w-full max-md:order-1 max-md:mb-10 md:w-1/2">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
      <div>
        <Image
          loader={imageLoader}
          unoptimized={true}
          priority={false}
          src="assets/pd-details-1.png"
          width={750}
          height={750}
          alt="Main Logo"
          className="w-full"
        />
      </div>
      <div className="py-10">
        <h2 className="mb-5">FULL INGREDIENTS</h2>
        <p className="font-extralight">
          Cyclomethicone 5, Water, Zinc Oxide (non-nano), Dimethicone
          Crosspolymer (450000 MPA.S At 12% In Cyclopentasiloxane), Butylene
          Glycol, Cetyl PEG/PPG-10/1 Dimethicone (HLB 2), Titanium Dioxide
          (non-nano), Polymethylsilsesquioxane (4.5 Microns), Caprylyl
          Trisiloxane, PEG-10 Dimethicone (600 CST), Argan Oil, Glycerin,
          Disteardimonium Hectorite, Isododecane, .ALPHA.-Tocopherol Acetate,
          Aluminum Oxide, Apple, Caprylyl Glycol, Ethylhexylglycerin, Helianthus
          Annuus Flowering Top, Hexylene Glycol, Lauryl Polyglyceryl-3,
          Polydimethylsiloxyethyl Dimethicone, Levomenol, Methicone (20 CST),
          Phenoxyethanol, Propylene Carbonate, Rice Bran, Rosemary, Silicon
          Dioxide, Sodium Chloride, Tocopherol, Triethoxycaprylylsilane.
        </p>
      </div>
      <div className="py-5">
        <Image
          loader={imageLoader}
          unoptimized={true}
          priority={false}
          src="assets/pd-details-2.png"
          width={750}
          height={750}
          alt="Main Logo"
          className="w-full"
        />
      </div>
      <div className="py-5">
        <Image
          loader={imageLoader}
          unoptimized={true}
          priority={false}
          src="assets/pd-details-3.png"
          width={750}
          height={750}
          alt="Main Logo"
          className="w-full"
        />
      </div>
      <div className="pt-10 pb-16">
        <div className="aspect-video">
          <YouTube
            videoId="y3HOP7ofNfU"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
            className="w-full h-full"
          />
        </div>
        <p className="mt-5">
          Founder of Harken Derm, high performance skincare line for outdoor
          enthusiasts, high-risk skin cancer expert and dermatologist Edit Olasz
          Harken MD PhD shares her tips on applying sunscreen, high risk areas,
          and how to apply Harken Derm all mineral high performance full
          spectrum SPF 50 sunscreen.
        </p>
      </div>
    </div>
  );
};

export default Home;
