import React, { useState } from "react";
import Contact from "../pages/Contact";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const ContactUs = () => {
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);

  const handleIconMouseEnter = (icon) => {
    switch (icon) {
      case "Instagram":
        setIsInstagramHovered(true);
        break;
      case "Twitter":
        setIsTwitterHovered(true);
        break;
      case "Discord":
        setIsDiscordHovered(true);
        break;
      case "Facebook":
        setIsFacebookHovered(true);
        break;
      case "Youtube":
        setIsYoutubeHovered(true);
        break;
      default:
        break;
    }
  };

  const handleIconMouseLeave = (icon) => {
    switch (icon) {
      case "Instagram":
        setIsInstagramHovered(false);
        break;
      case "Twitter":
        setIsTwitterHovered(false);
        break;
      case "Discord":
        setIsDiscordHovered(false);
        break;
      case "Facebook":
        setIsFacebookHovered(false);
        break;
      case "Youtube":
        setIsYoutubeHovered(false);
        break;
      default:
        break;
    }
  };

  const iconStyle = {
    transition: "transform 0.2s ease-in-out",
  };

  const activeIconStyle = {
    transform: "scale(1.5)",
    backgroundColor: "",
    boxShadow:
      "0 0 10px rgba(0, 173, 239, 0.7), 0 0 20px rgba(0, 173, 239, 0.5), 0 0 30px rgba(0, 173, 239, 0.3)",
  };

  return (
    <>
      <div className="relative " id="Contact">
        <img
          className="h-[672px] w-full object-cover"
          src="/images/contactUS2.jpg"
          alt="Contact Us-image"
        />
        <div className="absolute inset-0 flex flex-col ">
          <div className="flex justify-evenly">
            <p className="left-0 absolute  font-bold ml-4 w-[320px] mt-36 text-white text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="mt-[100px]">
              <p className=" text-white font-bold text-6xl">We work for you</p>
              <div className="flex mt-4 w-[550px] ml-[3px]  text-3xl text-white font-bold font-sans mx-auto">
                Follow Us :
                <div className="flex -mt-[1px] ml-6 opacity-50 gap-4">
                  <FaInstagram
                    className={` rounded-xl p-1  cursor-pointer ${
                      isInstagramHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isInstagramHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Instagram")}
                    onMouseLeave={() => handleIconMouseLeave("Instagram")}
                    size={40}
                  />
                  <FaXTwitter
                    className={` rounded-xl mt-[1px] p-1 cursor-pointer ${
                      isTwitterHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isTwitterHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Twitter")}
                    onMouseLeave={() => handleIconMouseLeave("Twitter")}
                    size={40}
                  />
                  <FaDiscord
                    className={` rounded-xl p-1 -mt-[1px] cursor-pointer ${
                      isDiscordHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isDiscordHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Discord")}
                    onMouseLeave={() => handleIconMouseLeave("Discord")}
                    size={40}
                  />
                  <ImFacebook2
                    className={` p-1 -mt-[2px] cursor-pointer ${
                      isFacebookHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isFacebookHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Facebook")}
                    onMouseLeave={() => handleIconMouseLeave("Facebook")}
                    size={40}
                  />
                  <BsYoutube
                    className={` rounded-xl p-1 -mt-[1px] cursor-pointer ${
                      isYoutubeHovered ? "active" : ""
                    }`}
                    style={{
                      ...iconStyle,
                      ...(isYoutubeHovered && activeIconStyle),
                    }}
                    onMouseEnter={() => handleIconMouseEnter("Youtube")}
                    onMouseLeave={() => handleIconMouseLeave("Youtube")}
                    size={40}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-end mr-4   items-center justify-center">
            <Contact className=" " />
          </div>
          <div className="flex justify-evenly bg-zinc-950  pt-3 text-white font-mono text-md xl:text-2xl mt-12 ">
            <p className=" text-white font-mono font-bold cursor-pointer  hover:opacity-75">
              Copyright © 2023 Your Company Name. All Rights Reserved
            </p>
            <p className="cursor-pointer hover:opacity-75 ">Terms of Service</p>
            <p className="cursor-pointer hover:opacity-75 ">Privacy Policy</p>
            <p className="cursor-pointer hover:opacity-75 ">Cookies</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
