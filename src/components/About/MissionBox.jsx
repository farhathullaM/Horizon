import BlurText from "../ui/BlurText";

export const MissionBox = ({ title, text, bgblue = true }) => {
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center py-10 rounded-xl p-5 border  max-sm:w-full min-h-72  ${
        bgblue ? "bg-[#1E4765] text-white" : "bg-amber-600 text-white"
      }`}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      {/* <p className="">{text}</p> */}
      <BlurText
          text={text}
          delay={10}
          animateBy="words"
          direction="top"
        />
    </div>
  );
};
