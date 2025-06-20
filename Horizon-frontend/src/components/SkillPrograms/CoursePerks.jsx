import { coursePerk } from "@/data/perks";

const CoursePerks = () => {
  return (
    <section className="px-20 py-10 max-md:py-5  max-md:px-2">
      <h3 className="text-5xl w-full text-center py-5 font-semibold text-[#1E4765] max-md:text-4xl">
        Course Outline
      </h3>
      <div className="grid grid-cols-2 gap-5 ">
        {coursePerk.map((perk) => (
          <div
            key={perk.title}
            className="flex  flex-col p-5 rounded-lg bg-[#1E4765] items-center cursor-pointer gap-3 text-[#d8e2e4]"
          >
            <div className="bg-[#c9d7dc] p-3  rounded-full ">
              <perk.icon className="size-10 animate-pulse text-[#073a4d]" />
            </div>
            <p className="font-medium w-full text-center">{perk.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursePerks;
