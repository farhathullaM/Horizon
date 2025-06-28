import { ContactForm } from "@/components/Contact/ContactForm";
import phone from "@/assets/icons/call.svg";
import location from "@/assets/icons/location.svg";
import mail from "@/assets/icons/mail-yellow.svg";
import contact from "@/assets/icons/contact.svg";
import { LocationHorizon } from "@/components/Map/locationHorizon";
import { Link } from "react-router-dom";

export const ContactPage = () => {
  return (
    <div className="min-h-screen px-10 max-sm:px-3 max-md:px-5 my-10  bg-[#F1F1F1]">
      <h1 className="text-6xl  w-full text-center font-bold">Contact Us</h1>
      <div className="flex gap-5 justify-around w-full max-sm:flex-col-reverse">
        <ContactForm />

        <img src={contact} alt="bg contact" className="w-[40%] max-sm:w-full" />
      </div>

      <div className="flex  bg-[#0f476b] my-5 w-full p-2 text-[#ffffff] rounded-2xl borderborder-[#fff] gap-2 max-md:flex-col ">
        <div className="flex  gap-4 items-center p-2 w-1/2 rounded-2xl border-2 border-[#fff] max-md:w-full ">
          <div className="flex items-center justify-center bg-[#d0e1f4] rounded-full p-4">
            <img src={location} alt="" className="w-6" />
          </div>
          Horizon Distance Education,
          <br /> 3 rd Floor, Arakal towers,
          <br /> Janatha Junction, Palarivattom, Cochin -25
        </div>

        <div className="flex flex-col gap-2 max-md:w-full w-1/2">
          <div className="flex gap-4 p-2 items-center rounded-2xl border-2 border-[#fff]">
            <div className="flex items-center justify-center bg-[#d0e1f4] rounded-full p-4">
              <img src={phone} alt="" className="w-6" />
            </div>
            <div className="flex flex-col">
              <Link to={`tel:8086027774`}>+91 8086027774</Link>
              <Link to={`tel:8086027773`}>+91 8086027773</Link>
            </div>
          </div>
          <div className="flex gap-4 p-2 items-center rounded-2xl border-2 border-[#fff]">
            <div className="flex items-center justify-center bg-[#d0e1f4] rounded-full p-4">
              <img src={mail} alt="" className="w-6" />
            </div>
            <Link to={`mailto:horizonadmission@gmail.com`}>
              horizonadmission@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <LocationHorizon />
    </div>
  );
};
