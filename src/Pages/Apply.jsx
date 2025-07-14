import ApplicationForm from "@/components/Contact/ApplicationForm";
import React from "react";

const Apply = () => {
  return (
    <div>
      <h1 className="text-5xl max-sm:text-3xl w-full py-5 text-center font-bold text-[#1E4765] p-4">
        We will Suggest You The Best University
      </h1>
      <p className="text-xl font-medium text-[#02121e] text-center p-4">
       At Horizon, we are committed to guiding aspiring students towards their dream universities with personalized and expert support. Our experienced counselors take the time to understand each individual's academic background, interests, goals, and financial considerations, ensuring that every recommendation aligns with the student’s aspirations. Whether you're looking for world-class institutions abroad or reputable universities in India, Horizon simplifies the journey with transparency and care—helping you take confident steps toward a successful academic future.
      </p>

      <ApplicationForm />
    </div>
  );
};

export default Apply;
