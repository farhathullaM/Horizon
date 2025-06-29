import { FilePenLine } from "lucide-react";

export const EditBtn = ({ onClick }) => {
  return (
    <div
      className="flex select-none items-center gap-1 rounded-lg px-1 text-xs  bg-gray-300 hover:bg-gray-400 active:bg-gray-500 w-fit"
      onClick={onClick}
    >
      <FilePenLine className="w-3" />
      Edit
    </div>
  );
};
