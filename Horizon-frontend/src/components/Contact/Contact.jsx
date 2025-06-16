import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { Info } from "../ui/Info";
import phone from "@/assets/icons/phone_blue.svg";
import mail from "@/assets/icons/mail.svg";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div
      className="flex flex-col items-center mx-10 max-md:mx-5
    max-sm:mx-2 gap-5 py-7"
    >
      <SectionHeading heading={"Contact Us"} img={false} />

      <div className="flex gap-20 max-md:gap-5 w-full justify-between py-5 max-sm:flex-col max-md:justify-center max-md:w-11/12">
        <div className="flex flex-col justify-between p-3 rounded-md border border-gray-300 gap-20 w-1/2 max-md:w-full">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <p className="text-gray-600">Fill out the form to contact us</p>
            <p className="text-gray-600">
              Alternatively you can also contact us directly via telephone or
              email
            </p>
          </div>
          <div className="flex flex-col gap-1 max-md:w-full">
            <Info
              img={phone}
              name={"Telephone"}
              info={
                <Link
                  to={`tel:8086027773`}
                  className="text-sm font-medium text-black"
                >
                  {8086027773}
                </Link>
              }
            />
            <Info
              img={mail}
              name={"Email"}
              info={
                <Link
                  to={`mailto:horizonadmission@gmail`}
                  className="text-sm font-medium text-black"
                >
                  horizonadmission@gmail.com
                </Link>
              }
            />
          </div>
        </div>
        <div className="w-1/2 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
