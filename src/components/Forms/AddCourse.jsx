import { useCourseActions } from "@/hooks/useCourseActions";
import { getUniversityList } from "@/services/public/publicRoutes";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import Input from "./elements/Input";
import { SheetClose } from "../ui/sheet";
import TextArea from "./elements/TextArea";
import { PreviewImage } from "./elements/PreviewImage";

const AddCourse = () => {
  const closeRef = useRef(null);
  const { create, creating, created, createError } = useCourseActions();
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    university_id: null,
    name: "",
    description: "",
    duration: null,
    fees: "",
    mode: "online",
    eligibility: "",
  });

  const {
    data: universityList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["universityList"],
    queryFn: () => getUniversityList(),
    staleTime: 5 * 60 * 1000,
  });

  const handleChange = (event) => {
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
      if (errors.image) {
        setErrors((prev) => ({ ...prev, image: "" }));
      }
    }
  };

  const handleRemoveImg = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const validate = () => {
    const errors = {};

    if (!formData.university_id) {
      errors.university_id = "University is required";
    }

    if (!formData.name.trim()) {
      errors.name = "Course name is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    create(formData);
  };

  //   useEffect(() => {
  //     if (created) {
  //       closeRef.current.click();
  //     }
  //   }, [created]);

  return (
    <div className="flex flex-col gap-4 px-2 pb-4 overflow-y-scroll">
      <PreviewImage
        onChange={handleFileChange}
        imagePreview={imagePreview}
        onClick={handleRemoveImg}
      />

      <Input
        label={"Course Name"}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Course Name"
        error={errors.name}
      />

      <div className="flex flex-col gap-1">
        <span className="font-medium">University</span>
        <select
          name="university_id"
          value={formData.university_id}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 outline-none"
        >
          <option value="">Select University</option>
          {isLoading ? (
            <option>Loading...</option>
          ) : isError ? (
            <option>Error</option>
          ) : (
            universityList?.map((university) => (
              <option key={university._id} value={university._id}>
                {university.name}
              </option>
            ))
          )}
        </select>
      </div>

      <TextArea
        label={"Description"}
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <Input
        label={"Duration"}
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Enter Duration"
        error={errors.duration}
      />

      <Input
        label={"Fees"}
        name="fees"
        value={formData.fees}
        onChange={handleChange}
        placeholder="Enter Fees"
        error={errors.fees}
      />

      <div className="flex gap-4 items-center">
        <span>Mode:</span>
        <select
          name="mode"
          id=""
          value={formData.mode}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 outline-none"
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <Input
        label={"Eligibility"}
        name="eligibility"
        value={formData.eligibility}
        onChange={handleChange}
        placeholder="Enter Eligibility"
        error={errors.eligibility}
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

export default AddCourse;
