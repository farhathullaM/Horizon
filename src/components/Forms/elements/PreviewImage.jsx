import { Upload, X } from "lucide-react";

export const PreviewImage = ({ onChange, imagePreview, onClick }) => {
  return (
    <>
      {imagePreview ? (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Product Preview"
            className="w-full h-40 object-cover mt-2 rounded"
          />
          <X
            className="absolute top-2 right-3 cursor-pointer p-1 bg-white rounded-full"
            onClick={onClick}
          />
        </div>
      ) : (
        <div>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={onChange}
            className="hidden"
          />

          <label
            htmlFor="image"
            className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-lg cursor-pointer"
          >
            <Upload className="text-white w-20" size={40} />
          </label>
        </div>
      )}
    </>
  );
};
