import { categories } from "./category";

const Explore = () => {
  return (
    <div className="flex flex-col gap-4 py-8">
      <h3 className="text-5xl font-bold text-center">Explore Our Course Categories</h3>

      <div className="flex flex-wrap gap-15 max-md:gap-5 p-2 w-full justify-center">
        {categories.map((category) => (
          <div className="w-80 hover:translate-y-[-5px] delay-75 transform duration-200 flex cursor-pointer flex-col gap-3 p-3 bg-[#9bb4c5] rounded-2xl" key={category.id}>
            <img src={category.img} alt={`${category.name} image`} className="rounded-xl " />
            <h4 className="text-2xl font-bold text-[#131426]">{category.name}</h4>
            <p className="text-[#1e153d]">{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
