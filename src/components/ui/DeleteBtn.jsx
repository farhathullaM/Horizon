import { Trash2 } from "lucide-react";

export const DeleteBtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex select-none items-center gap-1 rounded-lg px-1 text-xs  bg-gray-300 hover:bg-gray-400 active:bg-gray-500 w-fit"
    >
      <Trash2 className="w-3" />
      Delete
    </div>
  );
};
