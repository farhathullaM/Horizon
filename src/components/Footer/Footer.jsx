import { ConnectInfo } from "./ConnectInfo";
import phone from "@/assets/icons/call.svg";
import location from "@/assets/icons/location.svg";
import mail from "@/assets/icons/mail-yellow.svg";
import logo from "@/assets/logo/horizon_white.png";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import x from "@/assets/icons/x.svg";
import { Link } from "react-router-dom";
import { navList } from "../Navbar/navList";

export const Footer = () => {
  return (
    <footer className="bg-[#0b2d44] text-white pt-4 justify-center flex flex-col items-center max-sm:pt-0 z-10">
      <div className="flex justify-around max-sm:justify-between w-11/12 border-b-2  border-gray-600 p-2 max-sm:w-full max-md:flex-col max-md:pl-10 max-md:gap-5 max-md:py-4 ">
        <ConnectInfo
          img={location}
          heading={"Find Us"}
          info={
            <Link
              target="_blank"
              to="https://www.google.co.in/maps/place/Horizon+Distance+Education/@10.0018178,76.3003572,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080dd20d4527ad:0xdb052cb0bda07d8d!8m2!3d10.0018125!4d76.3029375!16s%2Fg%2F11f60wty9g?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
            >
              Horizon Distance Education,
              <br /> 3 rd Floor, Arakal towers,
              <br /> Janatha Junction, Palarivattom, Cochin -25
            </Link>
          }
        />
        <ConnectInfo
          img={phone}
          heading={"Call Us"}
          info={
            <div className="flex flex-col gap-1">
              <Link
                target="_blank"
                to={`tel:8086027774`}
                className="font-light text-sm"
              >
                8086027774
              </Link>
              <Link
                target="_blank"
                to={`tel:8086027773`}
                className="font-light text-sm"
              >
                8086027773
              </Link>
            </div>
          }
        />
        <ConnectInfo
          img={mail}
          heading={"Email Us"}
          info={
            <Link
              target="_blank"
              to={`mailto:horizonadmission@gmail.com`}
              className="font-light text-sm"
            >
              horizonadmission@gmail.com
            </Link>
          }
        />
      </div>

      <div className="justify-between flex px-24 max-md:px-5 max-sm:px-3 w-full items-start p-2">
        <Link
          to="/"
          className="flex flex-col gap-1 pt-5  justify-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Horizon logo"
            className="w-40 select-none max-sm:w-24"
          />
          <p className="text-xs font-light ">
            Your Pathway to Success,
            <br /> Anytime, Anywhere
          </p>
        </Link>

        {/* <div className="flex flex-col gap-0 max-md:hidden">
          {navList.map((item) => (
            <Link
              
              key={item.id}
              to={item.link}
              className="underline hover:text-amber-500 hover:font-medium max-sm:text-sm transform duration-200 hover:scale-105 "
            >
              {item.name}
            </Link>
          ))}
        </div> */}
        <div className="flex flex-col gap-3 max-sm:gap-2">
          <p className="font-semibold">Follow Us</p>
          <div className="flex gap-3 max-sm:flex-wrap">
            <img
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100063723082804"
                )
              }
              src={facebook}
              alt="facebook"
              className="w-9 cursor-pointer transform max-sm:w-8 ease-in-out duration-200 hover:scale-110"
            />
            <img
              onClick={() =>
                window.open(
                  "https://www.instagram.com/_horizon_distance_education/"
                )
              }
              src={instagram}
              alt="instagram"
              className="w-9 cursor-pointer max-sm:w-8 transform ease-in-out duration-200 hover:scale-110"
            />
            <img
              src={x}
              alt="x"
              className="w-8 cursor-pointer max-sm:w-7 transform ease-in-out duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0f476b] p-2 max-sm:p-1">
        <p className="text-xs text-center ">
          Copyright © Horizon 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
