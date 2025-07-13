import React from "react";

const TextArea = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-medium">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border resize-none h-32 border-gray-300 rounded-md p-2 outline-none"
      />
    </div>
  );
};

export default TextArea;
