export const FaqItem = ({ icon, question, answer, iconName }) => {
  return (
    <div className="flex bg-white rounded-md gap-4 cursor-pointer p-4 hover:bg-amber-500 group">
      <div className="p-3 border-2 border-gray-400 flex items-center justify-center border-opacity-35  w-fit h-fit rounded-md group-hover:border-white">
        <img
          src={icon}
          alt={iconName}
          className="w-7 shrink-0 select-none group-hover:invert"
        />
      </div>

      <div className="flex flex-col gap-2 text-black group-hover:text-white">
        <h6 className="font-semibold text-xl">{question}</h6>
        <p className="font-light text-black group-hover:text-white">{answer}</p>
      </div>
    </div>
  );
};
