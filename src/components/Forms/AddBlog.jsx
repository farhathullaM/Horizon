import { useRef, useState } from "react";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";
import { SheetClose } from "../ui/sheet";
import { PreviewImage } from "./elements/PreviewImage";
import { useBlogActions } from "@/hooks/useBlogActions";

const AddBlog = () => {
  const closeRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    author: "",
  });

  const { create, creating, created, createError } = useBlogActions();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
      if (errors.image) setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleRemoveImg = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const validate = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.description.trim())
      errors.description = "Description is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    create(formData);
  };

  return (
    <div className="flex flex-col gap-4 px-2 pb-4 overflow-y-scroll">
      <PreviewImage
        onChange={handleFileChange}
        imagePreview={imagePreview}
        onClick={handleRemoveImg}
      />

      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter blog title"
        error={errors.title}
      />

      <TextArea
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Write your blog content..."
        error={errors.description}
      />
      <Input
        label="Author (optional)"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author name"
      />

      <div className="flex justify-between gap-4">
        <button
          type="submit"
          className="bg-[#3363ff] cursor-pointer text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          {creating ? "Creating..." : "Create"}
        </button>
        <SheetClose
          ref={closeRef}
          className="cursor-pointer px-4 py-2 rounded-md border-2 border-[#232121]"
        >
          Cancel
        </SheetClose>
      </div>
    </div>
  );
};

export default AddBlog;
