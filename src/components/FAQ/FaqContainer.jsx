import { Plus } from "lucide-react";
import React, { useState } from "react";

const FaqContainer = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${open ? 'bg-[#FF9D01] text-[#ffffff]' : 'bg-[#ffffff]' } p-4 rounded-md cursor-pointer transform transition-all delay-75 duration-150 ease-in-out max-sm:p-3`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between ">
        <h2 className="text-2xl transform-all delay-75 duration-150 ease-in-out font-semibold w-full max-sm:text-xl">{question}</h2>
        <Plus />
      </div>
      {open && <p className="mt-2 transform transition-all delay-75 duration-150 ease-in-out">{answer}</p>}
    </div>
  );
};

export default FaqContainer;
