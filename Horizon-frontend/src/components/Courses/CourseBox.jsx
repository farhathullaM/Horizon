
export const CourseBox = () => {
  return (
    <div className="flex flex-col gap-3 bg-white py-2 px-3 rounded-2xl w-80 max-sm:w-full">
      <div className="flex flex-col">
        <p className=" text-[#3D6B8C] text-sm">Course Name</p>
        <p className="font-bold text-[#1E4765]">B.A Hindi</p>
      </div>

      <div>
        <p className=" text-[#3D6B8C] text-sm"> Eligibility</p>
        <p className="font-bold text-[#1E4765]">10+2 or its Equivalent</p>
      </div>

      <div className="flex gap-4 bg-[#FAFAFA] rounded-xl p-2">
        <div className="w-1/2">
          <p className=" text-[#3D6B8C] text-sm">Duration</p>
          <p className="font-bold text-[#1E4765]">3 Years</p>
        </div>

        <div className="w-1/2">
          <p className=" text-[#3D6B8C] text-sm ">Mode</p>
          <p className="font-bold text-[#1E4765]">Yearly</p>
        </div>
      </div>
    </div>
  );
};
