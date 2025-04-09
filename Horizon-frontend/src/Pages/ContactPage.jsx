import { ContactForm } from "@/components/Contact/ContactForm";
import phone from "@/assets/icons/call.svg";
import location from "@/assets/icons/location.svg";
import mail from "@/assets/icons/mail-yellow.svg";
import contact from "@/assets/icons/contact.svg";
import { LocationHorizon } from "@/components/Map/locationHorizon";

export const ContactPage = () => {
  return (
    <div className="min-h-screen px-10 max-sm:px-3 max-md:px-5  bg-[#F1F1F1]">
      <h1 className="text-4xl w-full text-center font-bold">Contact Us</h1>
      <div className="flex gap-5 justify-between w-full max-sm:flex-col-reverse">
        <ContactForm />

        <img src={contact} alt="bg contact" className="w-[40%] max-sm:w-full" />
      </div>

      <div className="flex bg-white my-5 w-full p-2 text-[#0b69ac] rounded-2xl border border-gray-300 gap-2 max-md:flex-col ">
        <div className="flex gap-4 items-center p-1 w-1/2 rounded-2xl border-2  border-gray-300 max-md:w-full ">
          <img src={location} alt="" className="w-14" />
          Horizon Distance Education,
          <br /> 3 rd Floor, Arakal towers,
          <br /> Janatha Junction, Palarivattom, Cochin -25
        </div>

        <div className="flex flex-col gap-2 max-md:w-full w-1/2">
          <div className="flex gap-4 p-1 items-center rounded-2xl border-2  border-gray-300">
            <img src={phone} alt="" className="w-14" />
            8086027774 <br />
            8086027773
          </div>
          <div className="flex gap-4 p-1 items-center rounded-2xl border-2  border-gray-300">
            <img src={mail} alt="" className="w-14" />
            horizonadmission@gmail.com
          </div>
        </div>
      </div>

      <LocationHorizon />
    </div>
  );
};
