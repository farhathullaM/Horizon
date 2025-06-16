import BlurText from "../ui/BlurText";

export const FaqItem = ({ icon, question, answer, iconName }) => {
  return (
    <div className="flex bg-white rounded-md gap-4 max-sm:gap-3 cursor-pointer p-4 hover:bg-[#FF9D01] group max-sm:p-3 transform duration-200">
      <div className="p-3 border-2 border-gray-400 flex items-center justify-center border-opacity-35  w-fit h-fit rounded-md group-hover:border-white ">
        <img
          src={icon}
          alt={iconName}
          className="w-7 max-sm:w-6 shrink-0 select-none group-hover:invert"
        />
      </div>

      <div className="flex flex-col gap-2 text-black group-hover:text-white max-sm:gap-1">
        <h6 className="font-semibold text-xl max-sm:text-base">{question}</h6>
        <BlurText
          text={answer}
          delay={10}
          animateBy="words"
          direction="top"
          className="font-light text-black max-sm:text-sm group-hover:text-white"
        />
      </div>
    </div>
  );
};
