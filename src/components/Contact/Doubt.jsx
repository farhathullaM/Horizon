import Lottie from "lottie-react";
import doubt from "../../assets/connect.json";
import { Link } from "react-router-dom";
import { PhoneOutgoing } from "lucide-react";

const Doubt = ({heading}) => {
  return (
    <div className="py-10 bg-[#ffffff] px-2">
      <h2 className="text-6xl font-bold text-center max-md:text-3xl max-sm:text-2xl text-[#1E4765] items-center flex w-full  justify-center">
        {heading}
        <span className="text-[#bdc704] text-8xl pl-5 animate-bounce">?</span>
      </h2>
      <div className="flex items-center justify-center max-md:flex-col">
        <Lottie
          animationData={doubt}
          loop={true}
          className="w-1/2 rounded-full max-md:w-full"
        />
        <div className="w-1/2 flex items-center justify-center max-md:w-full">
          <div className="rounded-3xl p-10 max-md:p-5 bg-[#dae2f7] w-fit max-md:w-full">
            <Link
              to={`tel:8086027773`}
              className="text-4xl  font-semibold text-center max-md:text-2xl max-sm:text-xl bg-[#1E4765] rounded-2xl py-3 px-15 text-[#ffffff] items-center flex w-full gap-3 max-md:w-full max-md:px-0  justify-center cursor-pointer hover:scale-105 transform duration-200"
            >
              <p>Make a Call</p>
              <PhoneOutgoing size={30} />
            </Link>
            <p className="text-2xl pt-5 font-bold text-center max-md:text-xl max-sm:text-lg text-[#1E4765] items-center flex w-full  justify-center">
              We are here to help you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
