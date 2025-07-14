import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "@/services/public/publicRoutes";
import { Loader } from "lucide-react";
import { BASE_FILE_URL } from "@/lib/url";

const Blog = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: () => getAllBlogs(),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="min-h-screen bg-white px-6 py-10 max-sm:px-2 ">
      <h1 className="text-4xl font-bold text-[#1E4765] text-center mb-10">
        Blog & Knowledge Base
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <Loader className="animate-spin text-[#FF9D01]" size={40} />
        </div>
      ) : isError ? (
        <div className="text-red-500 text-center">Failed to load blogs.</div>
      ) : (
        <div className="flex gap-4 flex-col items-center">
          {blogs?.map((blog, index) => (
            <div
              key={blog._id}
              className={`${
                index % 2 === 0 ? "flex flex-row-reverse" : "flex"
              } bg-[#F1F1F1] gap-4 py-4 px-6 rounded-md max-md:flex-col max-md:items-center max-sm:px-2 max-sm:gap-2 max-sm:py-2`}
            >
              {blog.image ? (
                <img
                  src={BASE_FILE_URL + "blog/" + blog.image}
                  alt={blog.title}
                  className="w-80 h-80 rounded-md max-sm:w-full "
                />
              ) : (
                <div className="w-80 h-80 bg-[#F1F1F1] max-sm:w-full"></div>
              )}
              <div
                className={`flex flex-col min-w-96 gap-3 max-sm:items-center ${
                  index % 2 === 0 ? "items-start" : "items-end"
                }`}
              >
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
