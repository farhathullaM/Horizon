import CountUp from "../ui/CountUp";

export const Count = () => {
  return (
    <div className="flex  w-full  justify-around bg-[#1E4765] text-white items-center h-60 max-sm:flex-col">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={5500}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">+</p>
        </div>
        <p>Students Adviced</p>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={15}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">+</p>
        </div>
        <p>Universities</p>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="text-7xl font-bold max-md:text-5xl max-sm:text-2xl"
          />
          <p className="text-5xl font-bold max-md:text-4xl max-sm:text-xl">+</p>
        </div>
        <p>Programs Offered</p>
      </div>
    </div>
  );
};
