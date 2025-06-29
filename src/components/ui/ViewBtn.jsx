import { Eye } from "lucide-react";

export const ViewBtn = ({ onClick }) => {
  return (
    <div
      className="flex w-fit select-none items-center gap-1 rounded-lg bg-bg-muted px-1 text-xs bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
      onClick={onClick}
    >
      <Eye className="w-3" />
      View
    </div>
  );
};