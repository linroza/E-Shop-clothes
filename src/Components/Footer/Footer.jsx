import React from "react";
import FooterLogo from "../../assets/react.svg";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-flow-cols-3 pv-44 pt-5">
          {/* Company Detail */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} className="max-w-[50px]" />
              My Shop
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, eum veniam! Ipsam vitae possimus aliquam iure tempore,
              dolore veniam ex quibusdam nisi quasi vero magni commodi fugiat ab
              amet optio!
            </p>
          </div>
          {/* footer Links */}
          <div className="grid grid-cols-2 sm:grid-flow-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* social Link */}
            <div>
                <div className="flex ">
                    <a href="#" >
                        <FaInstagram className="text-3xl mx-2" />
                    </a>
                    <a href="#" >
                        <FaFacebook className="text-3xl mx-2"/>
                    </a>
                    <a href="#" >
                        <FaLinkedin className="text-3xl mx-2"/>
                    </a>

                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>
                            Boeung Kok 2, Toul Kok, Phnom Penh, Cambodia
                        </p>

                    </div>
                    <div className="flex items-center gap-3">
                        <FaMobileAlt />
                        <p>
                            +855 096 78 46 702
                        </p>

                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
