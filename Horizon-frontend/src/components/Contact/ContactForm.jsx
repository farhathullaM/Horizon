import React from "react";

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 w-[40%]">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="bg-white p-2  rounded-sm border text-sm "
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="text"
          placeholder="Enter email"
          className="bg-white p-2   rounded-sm border text-sm "
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="msg" className="font-medium">
          Message
        </label>
        <textarea
          placeholder="message"
          className="bg-white p-2   rounded-sm border text-sm resize-none h-20"
        />
      </div>

      <button className="rounded-3xl bg-amber-400 w-fit px-4 py-2 hover:bg-amber-500 active:bg-amber-600">
        Submit
      </button>
    </form>
  );
};
