export const InputItem = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <div className="border-2 border-black rounded-full p-1 max-w-96 ">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-full px-3 py-1 placeholder:text-[#A8A8A8] bg-inherit text-sm outline-none border-none"
        />
      </div>
      {error && (
        <p className="text-xs w-full pl-4 text-red-500">{error}</p>
      )}
    </div>
  );
};
