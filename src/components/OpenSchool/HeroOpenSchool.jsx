import bosse_logo from "@/assets/images/bosse-logo.png";
import bg_img from "@/assets/images/school.webp";
const HeroOpenSchool = () => {
  return (
    <div className="relative h-[80vh] ">
      <h1 className="absolute p-3 top-20 rounded-xl left-20 transform text-7xl font-bold text-[#d8f2f7] max-md:text-6xl max-sm:text-5xl max-md:top-1/3 max-md:left-5 z-30">
        BOSSE <br /> ADMISSIONS
      </h1>
      <img
        src={bg_img}
        alt="background horizon"
        className="w-full h-full max-sm:h-[70vh] rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-black/75 max-sm:h-[70vh]" />
      <img
        src={bosse_logo}
        alt="bosse logo"
        className="absolute rounded-md top-40 right-10 transform -translate-x-1/2 -translate-y-1/2 max-md:w-28 max-md:h-28 w-44 h-44 max-md:top-20 max-md:right-0"
      />
    </div>
  );
};

export default HeroOpenSchool;
