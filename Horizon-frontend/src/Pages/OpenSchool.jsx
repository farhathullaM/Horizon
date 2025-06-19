import bosse_logo from "@/assets/images/bosse-logo.png";
import bg_img from "@/assets/images/school.webp";
import Doubt from "@/components/Contact/Doubt";
import { perk } from "@/data/perks";

const OpenSchool = () => {
  return (
    <>
      <div className="relative p-10 h-[80vh]">
        <h1 className="absolute bg-[#182228] p-3 top-20 rounded-xl left-20 transform text-7xl font-bold text-[#d8e2e4]">
          BOSSE <br /> ADMISSIONS
        </h1>
        {/* <div className="w-full h-full bg-[#0766a054] z-20"> */}
        <img
          src={bg_img}
          alt="background horizon"
          className="w-full h-full rounded-md object-cover"
        />
        {/* </div> */}
        <img
          src={bosse_logo}
          alt="bosse logo"
          className="absolute rounded-md top-40 right-10 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center text-[#1E4765]">
          Enroll Now for 10th & 12th via BOSSE
        </h1>

        <section className="mb-12 p-10">
          <h2 className="text-2xl font-semibold mb-3">About BOSSE</h2>
          <p className="mb-4 text-lg">
            The
            <strong>Boad of Open Schooling and Skill Education (BOSSE)</strong>,
            established under Act No. 14 of 2020 by the Sikkim Legislative
            Assembly, is recognized by <strong>NIOS</strong> and the Ministry of
            Education, Govt. of India. BOSSE offers open schooling for Secondary
            (10th), Senior Secondary (12th), and Vocational programs. BOSSE
            certificates are accepted by all national and state education
            boards.
          </p>
          <p className="text-lg">
            BOSSE's flexible system empowers school dropouts, failed students,
            working professionals, and underprivileged learners to continue
            their education and skill development.
          </p>
        </section>
      </div>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-3 ">
          Why Choose BOSSE Through Horizon?
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {perk.map((perk, index) => (
            <div
              key={index}
              className="bg-[#c2cbd1] text-lg text-[#092f4a] rounded-md p-5 hover:bg-[#aabfcf] hover:text-[#fff] cursor-pointer"
            >
              {perk}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-[#1E4765] text-[#d8e2e4] p-10">
        <h2 className="text-4xl font-semibold mb-3 w-full text-center ">
          Who Can Apply?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>School dropouts or failed in previous board exams</li>
          <li>Youth from rural or underprivileged backgrounds</li>
          <li>Working men and women</li>
          <li>Anyone wishing to complete 10th or 12th education</li>
        </ul>
      </section>

      <section className="mb-12 p-10">
        <h2 className="text-2xl font-semibold mb-3">Eligibility Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#ced8da] p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Secondary (Class 10)</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Minimum age: 15 years</li>
              <li>No formal education required</li>
              <li>Must be able to read and write</li>
              <li>Age proof required</li>
            </ul>
          </div>
          <div className="bg-[#ced8da] p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Senior Secondary (Class 12)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-lg ">
              <li>Must have passed Class 10 from a recognized board</li>
              <li>Submission of Class 10 certificate required</li>
            </ul>
          </div>
        </div>
      </section>

      <Doubt heading="Want to Register" />
    </>
  );
};

export default OpenSchool;
