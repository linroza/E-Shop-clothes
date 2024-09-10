import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container ">
        <div className="grid grid-flow-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text detail */}
          <div  className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <div  className="text-4xl sm:text-[26px] ">
              <h1 data-aos="fade-up" className="font-bold">Winter sale Upto 50% Off</h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur vero distinctio odit exercitationem dolorum mollitia.
              </p>
              <div className="flex flex-col gap-4">
                {/* Quality Products Icon */}
                <div data-aos="fade-up" className="flex items-center gap-4 ">
                  <GrSecure className="text-2xl h-11 w-11 shadow-sm p-4 mt-2 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-[16px] ">Quality Products</p>
                </div>
                {/* Fast Delivery Icon */}
                <div data-aos="fade-up" className="flex items-center gap-4 ">
                  <IoFastFood className="text-2xl h-11 w-11 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-[16px] ">Fast Delivery</p>
                </div>
                {/* Easy Payment method */}
                <div data-aos="fade-up" className="flex items-center gap-4 ">
                  <IoFastFood className="text-2xl h-11 w-11 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-[16px] ">Easy Payment method</p>
                </div>
                {/* Get Offer Icon */}
                <div data-aos="fade-up" className="flex items-center gap-4 ">
                  <GiFoodTruck className="text-2xl h-11 w-11 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                  <p className="text-[16px] ">Get Offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
