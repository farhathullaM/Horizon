import React from "react";

const Eligible = () => {
  return (
    <section className="mb-12 max-lg:p-5 max-md:p-2 bg-[#1E4765] text-[#d8e2e4] p-10">
      <h2 className="text-4xl font-semibold mb-3 max-md:text-3xl w-full text-center ">
        Who Can Apply?
      </h2>
      <ul className="list-disc list-inside space-y-2 text-lg max-md:text-base">
        <li>School dropouts or failed in previous board exams</li>
        <li>Youth from rural or underprivileged backgrounds</li>
        <li>Working men and women</li>
        <li>Anyone wishing to complete 10th or 12th education</li>
      </ul>
    </section>
  );
};

export default Eligible;
