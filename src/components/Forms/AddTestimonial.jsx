import { useRef, useState } from "react";
import Input from "./elements/Input";
import TextArea from "./elements/TextArea";
import { SheetClose } from "../ui/sheet";
import { PreviewImage } from "./elements/PreviewImage";
import { useTestimonalActions } from "@/hooks/useTestimonalActions";

const AddTestimonial = () => {
  const closeRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    review: "",
    image: null,
    university: "",
    course: "",
  });
  const { create, creating, created, createError } = useTestimonalActions();

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
    if (!formData.username.trim()) errors.username = "Username is required";
    if (!formData.review.trim()) errors.review = "Review is required";
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
      />{" "}
      <Input
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your name"
        error={errors.username}
      />
      <TextArea
        label="Review"
        name="review"
        value={formData.review}
        onChange={handleChange}
        placeholder="Your feedback"
        error={errors.review}
      />
      <Input
        label="University (optional)"
        name="university"
        value={formData.university}
        onChange={handleChange}
        placeholder="University name"
      />
      <Input
        label="Course (optional)"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="Course name"
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

export default AddTestimonial;
