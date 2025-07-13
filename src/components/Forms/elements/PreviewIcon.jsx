import { HomeIcon } from "lucide-react";

export const PreviewIcon = ({ iconPreview, onChange, onClick }) => {
  return (
    <div className="flex items-center gap-3 ">
      {iconPreview ? (
        <div className="flex items-center justify-center gap-3">
          <img
            src={iconPreview}
            alt="Icon Preview"
            className="w-14 h-14 object-cover mt-2 rounded-full"
          />
          <button
            onClick={onClick}
            className="rounded-md bg-red-500 text-sm px-1 flex items-center justify-center text-center text-white cursor-pointer hover:bg-red-600 active:bg-red-700"
          >
            remove
          </button>
        </div>
      ) : (
        <>
          <label
            htmlFor="icon"
            className="gap-3 flex items-center justify-center cursor-pointer"
          >
            <HomeIcon className="text-black  shrink-0  rounded-full w-10 h-10 p-3 bg-[#FFCC33]" />
            Add Icon
          </label>
          <input
            type="file"
            name="icon"
            className="hidden"
            id="icon"
            accept="image/*"
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
};
