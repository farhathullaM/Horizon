import React, { useState } from "react";
import Input from "./elements/Input";
import { PreviewImage } from "./elements/PreviewImage";
import { PreviewIcon } from "./elements/PreviewIcon";
import { useUniversityActions } from "@/hooks/useUniversityActions";
import TextArea from "./elements/TextArea";

const AddUniversity = () => {
  const { create, creating, created, createError } = useUniversityActions();
  const [formData, setFormData] = useState({
    name: "",
    type: "indian",
    description: "",
    image: null,
    icon: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    if (file) {
      if (name === "image") {
        setFormData((prev) => ({ ...prev, image: file }));
        setImagePreview(URL.createObjectURL(file));
      }
      if (name === "icon") {
        setFormData((prev) => ({ ...prev, icon: file }));
        setIconPreview(URL.createObjectURL(file));
      }
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: "" }));
      }
    }
  };

  const handleRemoveImg = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleRemoveIcon = () => {
    setFormData((prev) => ({ ...prev, icon: null }));
    setIconPreview(null);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    create(formData);
  };
  return (
    <div className="flex flex-col gap-4 px-2">
      <PreviewImage
        onChange={handleFileChange}
        imagePreview={imagePreview}
        onClick={handleRemoveImg}
      />

      <PreviewIcon
        onChange={handleFileChange}
        iconPreview={iconPreview}
        onClick={handleRemoveIcon}
      />

      <Input
        label={"University Name"}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />

      <div className="flex gap-4 items-center">
        <span>Type:</span>
        <select
          name="type"
          id=""
          value={formData.type}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 outline-none"
        >
          <option value="indian">indian</option>
          <option value="abroad">abroad</option>
        </select>
      </div>

      <TextArea
        label={"Description"}
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
      />

      <div>
        <button
          type="submit"
          className="bg-[#3363ff] cursor-pointer text-white px-4 py-2 rounded-md"
          onClick={handleSubmit}
        >
          {creating ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
};

export default AddUniversity;
