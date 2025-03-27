import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { Info } from "../ui/Info";
import phone from "@/assets/icons/phone_blue.svg";
import mail from "@/assets/icons/mail.svg";

export const Contact = () => {
  return (
    <div>
      <SectionHeading heading={"Contact Us"} img={false} />

      <div className="flex gap-5 w-full justify-around py-5">
        <div className="flex flex-col justify-between p-3 rounded-md border border-gray-300 gap-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <p className="text-gray-600">Fill out the form to contact us</p>
            <p className="text-gray-600">
              Alternatively you can also contact us directly via telephone or
              email
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Info img={phone} name={"Telephone"} info={"9807654321"} />
            <Info img={mail} name={"Email"} info={"horizon@gmail.com"} />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
