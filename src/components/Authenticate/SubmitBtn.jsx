
export const SubmitBtn = ({ loading, label, onClick }) => {
  return (
    <div disabled={loading} onClick={onClick} type="submit" className="bg-black text-white rounded-full p-2 max-w-96 text-center cursor-pointer select-none">
      {label}
    </div>
  );
};
