export const Info = ({ img, name, info }) => {
  return (
    <div className="flex px-3 py-2 gap-1 rounded-sm bg-[#d6d8dd]">
      <div className="rounded-full bg-[#DFF2FF] p-2">
        <img src={img} alt={name} className="select-none w-6" />
      </div>
      <div >
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-sm font-medium text-black">{info}</p>
      </div>
    </div>
  );
};
