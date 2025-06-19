import { capitalizeText } from "@/utils/capitalizeFirstLetter";
import UniversityCourses from "@/components/University/UniversityCourses";
import { useParams } from "react-router-dom";
import { universityData } from "@/components/University/universities";

const University = () => {
  const { id } = useParams();

  const university = universityData.find((univ) => univ.id === Number(id));

  return (
    <div className="bg-[#253959]">
      <div className=" overflow-hidden h-screen text-[#fff] flex justify-between pt-10 max-md:flex-col-reverse">
        <div className="flex p-20 gap-8 flex-col h-[90dvh] justify-center">
          <h1 className="text-5xl font-semibold w-60 text-wrap">
            {capitalizeText(university.name)}
          </h1>
          <p className="w-96 text-wrap text-[#B7C3D8]">
            {university.description}
          </p>
          <div className="bg-[#f7f4f4] rounded-xl w-fit border-2 px-5 py-3">
            <img src={university.icon} alt={`${university.name} logo`} className="w-20" />
          </div>
        </div>

        <div className="relative ">
          <div className="absolute top-24 right-72 z-10 bg-[#6C6322] rounded-[90px] rotate-45 w-[400px] h-[500px]"></div>
          <div className="absolute top-20 right-44 z-30 bg-[#93928d] rounded-[90px] rotate-45 w-[400px] h-[500px] overflow-hidden">
            <img
              src={university.img}
              alt="amity university"
              className="w-full h-full object-cover -rotate-45 scale-[1.3]"
            />
          </div>
          <div className="absolute bg-[#978A29]  top-16 right-24 z-20 rounded-[90px] rotate-45 w-[400px] h-[500px]"></div>
        </div>
      </div>
      <div className="w-full h-20 bg-[#1E3252] -mt-16 z-50" />

      <UniversityCourses />
    </div>
  );
};

export default University;
