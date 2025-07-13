import { useFaqActions } from "@/hooks/useFaqActions";
import React, { useRef, useState } from "react";
import TextArea from "./elements/TextArea";
import { SheetClose } from "../ui/sheet";

const AddFaq = () => {
  const closeRef = useRef(null);
  const { create, creating, created, createError } = useFaqActions();
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.question.trim()) {
      errors.question = "Question is required";
    }
    if (!formData.answer.trim()) {
      errors.answer = "Answer is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      create(formData);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-2 pb-4 overflow-y-scroll">
      <TextArea
        label="Question"
        name="question"
        value={formData.question}
        onChange={handleChange}
        placeholder="Enter your question"
        error={errors.question}
      />
      <TextArea
        label="Answer"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        placeholder="Enter your answer"
        error={errors.answer}
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

export default AddFaq;
