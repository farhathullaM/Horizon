import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUniversityList } from "@/services/public/publicRoutes";

const UniversityList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["universityList"],
    queryFn: () => getUniversityList(),
    staleTime: 5 * 60 * 1000,
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="flex flex-col gap-2">
      {data.map((univ) => (
        <Link
          key={univ._id}
          to={`/university/${univ._id}`}
          className=" hover:bg-[#1E4765] hover:text-[#fff] cursor-pointer font-semibold px-2 py-1 rounded-sm transform transition duration-75"
        >
          {univ.name}
        </Link>
      ))}
    </div>
  );
};

export default UniversityList;
