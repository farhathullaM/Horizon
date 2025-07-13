import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md p-2 outline-none"
      />

      {error && <p className="text-xs w-full pl-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
