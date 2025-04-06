import { ContactForm } from "@/components/Contact/ContactForm";
import phone from "@/assets/icons/call.svg";
import location from "@/assets/icons/location.svg";
import mail from "@/assets/icons/mail-yellow.svg";
import contact from "@/assets/icons/contact.svg";

export const ContactPage = () => {
  return (
    <div className="min-h-screen px-10 max-sm:px-3 max-md:px-5 max-sm:py-5 py-10 bg-[#F1F1F1]">
      <h1 className="text-4xl w-full text-center font-bold">Contact Us</h1>
      <div className="flex gap-5 justify-between w-full">
        <ContactForm />

        <img src={contact} alt="bg contact" className="w-[40%]" />
      </div>

      <div className="flex bg-[#0b69ac] text-[#ffffff] my-5 w-full p-2 rounded-2xl border border-gray-300 gap-2 max-md:flex-col ">
        <div className="flex gap-4 items-center p-1 w-1/2 rounded-2xl border-2 border-[#ffffff] max-md:w-full ">
          <img src={location} alt="" className="w-14" />
          Horizon Distance Education,
          <br /> 3 rd Floor, Arakal towers,
          <br /> Janatha Junction, Palarivattom, Cochin -25
        </div>

        <div className="flex flex-col gap-2 max-md:w-full w-1/2">
          <div className="flex gap-4 p-1 items-center rounded-2xl border-2 border-[#ffffff]">
            <img src={phone} alt="" className="w-14" />
            0484 4050506 <br />
            +91 8089027774
          </div>
          <div className="flex gap-4 p-1 items-center rounded-2xl border-2 border-[#ffffff]">
            <img src={mail} alt="" className="w-14" />
            horizonadmission@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
