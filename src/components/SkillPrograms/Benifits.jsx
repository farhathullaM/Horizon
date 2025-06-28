import certificate from "@/assets/images/certificate.png";

const Benifits = () => {
  return (
    <section className="px-20 py-10 max-md:py-5  max-md:px-2">
      <h3 className="text-5xl w-full py-5 font-semibold text-[#1E4765] max-md:text-3xl">
        Benifits of Microsoft Office Skill Certification Course
      </h3>

      <ul className="list-disc pl-5 text-xl flex flex-col gap-3 max-md:text-lg max-md:gap-2">
        <li>Increase workplace efficiency</li>
        <li>Boost your resume</li>
        <li>Qualify for more job roles</li>
        <li>Work smarter with automation and productivity hacks</li>
        <li>Stand out in interviews and assessments</li>
      </ul>

      <div className="my-10 p-5 gap-1 max-md:my-5 rounded-lg flex max-md:flex-col bg-[#e1e4ec]">
        <p>
          Upon successful completion of the course, students will receive an
          industry-recognized certificate verifying their proficiency in
          Microsoft Office tools.
        </p>
        <img src={certificate} alt="certificate img" className="w-96 max-md:w-80 rounded-sm" />
      </div>
    </section>
  );
};

export default Benifits;
