import { Plus } from "lucide-react";

const AddButton = ({text}) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer select-none justify-center py-2 px-4 text-[#ffffff] my-2 bg-[#1E4765] rounded-md w-fit m-4">
      <Plus />
      <span>{text}</span>
    </div>
  );
};

export default AddButton;
