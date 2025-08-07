import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo (20).png"

import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import Images from "./Images";

const Footer = () => {
  return (
    <>
      <div className="py-[45px] bg-[#F5F5F3]">
        <Container>
          <Flex className={`justify-between items-center`}>
            <div className="">
              <h3 className="text-sm text-[#262626] font-bold leading-[23px]">
                MENU
              </h3>
              <ul className="font-normal text-[14px] text-[#6D6D6D] py-[6px] leading-[23px]">
                <Link to="/">
                  <li className="hover:text-[#262626] hover:font-bold">Home</li>
                </Link>
                <Link to="shop">
                  <li className="hover:text-[#262626] hover:font-bold">Shop</li>
                </Link>
                <Link to="about">
                  <li className="hover:text-[#262626] hover:font-bold">
                    About
                  </li>
                </Link>
                <Link to="contact">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Contact
                  </li>
                </Link>
                <Link to="*">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>

            <div className="">
              <h3 className="text-sm text-[#262626] font-bold leading-[23px]">
                SHOP
              </h3>

              <ul className="font-normal text-[14px] text-[#6D6D6D] py-[6px] leading-[23px]">
                <Link to="/">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Category 1
                  </li>
                </Link>
                <Link to="shop">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Category 2
                  </li>
                </Link>
                <Link to="about">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Category 3
                  </li>
                </Link>
                <Link to="contact">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Category 4
                  </li>
                </Link>
                <Link to="*">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Category 5
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="text-sm text-[#262626] font-bold leading-[23px]">
                HELP
              </h3>
              <ul className="font-normal text-[14px] text-[#6D6D6D] py-[6px] leading-[23px]">
                <Link to="/">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Privacy Policy
                  </li>
                </Link>
                <Link to="shop">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Terms & Conditions
                  </li>
                </Link>
                <Link to="about">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Special E-shop
                  </li>
                </Link>
                <Link to="contact">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Shipping
                  </li>
                </Link>
                <Link to="*">
                  <li className="hover:text-[#262626] hover:font-bold">
                    Secure Payments
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="font-bold">(052) 611-5711</p>
              <h4 className="font-bold">company@domain.com</h4>
              <p>575 Crescent Ave Quakertown PA 18951</p>
            </div>
            <div className="">
           <Images imgSrc={Logo}/>
            </div>
         
          
          </Flex>
          <div className="py-[50px]">
            <Flex className={`justify-between`}>
            <div className="flex gap-x-6 font-bold text-black">
              <FaFacebookF/>
              <FaLinkedinIn />
              <LuInstagram />
            </div>
              <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </Flex>
          </div>
        </Container>
      </div>
    </>
    
  );
};

export default Footer;
