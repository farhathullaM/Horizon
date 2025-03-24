import box from "@/assets/images/box.png";
import SplitText from "../ui/SplitText";

export const HeroSection = () => {
  return (
    <div className="flex justify-between mx-28 mt-16">
      <div className="w-[54%] flex flex-col gap-4">
        <h2 className="text-6xl font-bold text-black text-wrap ">
          Trasform Your Passion into a Profession with 
          <span className="text-[#1E4765]"> Horizon</span>
        </h2>
        <p className="text-[#595959] font-light w-[65%]">
          Elevate your career with globally accreditd degrees. Experience
          education that crosses borders and expands minds. Your jouney to
          success begins here.
        </p>

        <div className="flex gap-3 select-none">
          <button className="bg-[#FF9D01] text-white py-3 px-6 font-semibold rounded-xl  cursor-pointer hover:bg-[#ff8801]">
            Get a free Consultation
          </button>
          <button className="text-[#1E4765] border-2 py-3 px-6 cursor-pointer hover:bg-[#daebf6]  font-semibold rounded-xl">
            View Programmes
          </button>
        </div>

        <div className="flex gap-3">
          <div className="w-52 rounded-2xl h-48 bg-[#D9D9D9]"></div>
          <div className="w-52 rounded-2xl h-48 bg-[#D9D9D9]"></div>
        </div>
      </div>

      <div className="flex items-end"> 
      <SplitText
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
        <img
          src={box}
          alt="background box"
          draggable={false}
          className="select-none h-[90%]"
        />
      </div>
    </div>
  );
};
