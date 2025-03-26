import expert from "@/assets/icons/expert.svg";

export const ChoiceItem = () => {
  return (
    <div className="w-72 border border-[#1E4765] rounded-4xl h-52 flex items-end ">
      <img src="" alt="" />
      <div className="p-1 rounded-full border items-center gap-3 border-[#1E4765] text-[#1E4765] hover:text-white font-semibold flex h-fit w-full hover:bg-[#1E4765]">
        <div className="p-3 bg-[#1E4765] rounded-full">
          <img src={expert} alt="expert icon" className="select-none w-7" />
        </div>
        Expert <br />
        Guidence
      </div>
    </div>
  );
};
