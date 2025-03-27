export const ChoiceItem = ({ heading, iconName, icon, img }) => {
  return (
    <div className="max-w-72 border border-[#1E4765] rounded-4xl h-52 flex items-end relative cursor-pointer group overflow-hidden">
      <img
        src={img}
        alt={iconName}
        className="group-hover:scale-110 w-full h-full rounded-4xl object-cover transform duration-200"
      />
      <div className="p-1 absolute  bg-white rounded-full border items-center gap-3 border-[#1E4765] text-[#1E4765] group-hover:text-white font-semibold flex h-fit w-full group-hover:bg-[#1E4765]">
        <div className="p-3 bg-[#1E4765] rounded-full">
          <img src={icon} alt={iconName} className="select-none w-7 invert" />
        </div>
        {heading}
      </div>
    </div>
  );
};
