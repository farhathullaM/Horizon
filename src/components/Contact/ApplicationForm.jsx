import { requestSuggestion } from "@/services/public/publicRoutes";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    interestedArea: "",
    preferredCourse: "",
    budget: "",
    countryPreference: "",
    preferredMode: "",
    languagePreference: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.qualification.trim())
      newErrors.qualification = "Qualification is required";
    if (!formData.interestedArea.trim())
      newErrors.interestedArea = "Interested Area is required";
    if (formData.phone && !/^\d{7,15}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await requestSuggestion(formData);
      if (response?.success) {
        toast.success(response.message || "Suggestion sent successfully!");
      } else {
        toast.error(response.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send suggestion. Please try again.");
      console.error("Error in submitting suggestion:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl rounded-lg  mx-auto my-5 space-y-4 max-sm:p-2 p-4 bg-[#1E4765] m-2 text-[#ffffff] "
    >
      <h2 className="text-2xl py-3 font-bold mb-4 text-[#e3c70f] w-full text-center">
        Suggest Me a University
      </h2>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {[
          ["name", "Full Name"],
          ["phone", "Phone Number"],
          ["email", "Email Address"],
          ["qualification", "Qualification"],
          ["interestedArea", "Interested Area"],
          ["preferredCourse", "Preferred Course"],
          ["budget", "Budget"],
          ["countryPreference", "Country Preference"],
          ["languagePreference", "Language Preference"],
        ].map(([key, label]) => (
          <div key={key} className="flex flex-col gap-1">
            <label htmlFor={key} className="font-medium">
              {label}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md"
            />
            {errors[key] && (
              <span className="text-red-500 text-sm">{errors[key]}</span>
            )}
          </div>
        ))}

        <div className="flex flex-col gap-1">
          <label htmlFor="preferredMode" className="font-medium">
            Preferred Mode
          </label>
          <select
            name="preferredMode"
            value={formData.preferredMode}
            onChange={handleChange}
            className="border border-gray-300 bg-[#1E4765] p-2 rounded-md"
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="hover:bg-[#ff8801] cursor-pointer text-white px-4 py-2 rounded-md bg-[#FF9D01]"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ApplicationForm;
