import FaqContainer from "@/components/FAQ/faqContainer";
import { getAllFaqs } from "@/services/public/publicRoutes";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const Faq = () => {
  const {
    data: faqs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allFaqs"],
    queryFn: () => getAllFaqs(),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="flex flex-col items-center min-h-screen py-5">
      <h1 className="text-3xl font-bold text-[#1E4765] p-4">FAQ</h1>
      <div className="w-11/12 max-sm:w-[96%]">
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader className="animate-spin text-[#FF9D01]" size={40} />
          </div>
        ) : isError ? (
          <div className="text-red-500 text-center">Failed to load faqs.</div>
        ) : (
          <div className="w-full flex gap-2 flex-col max-sm:gap-1 ">
            {faqs?.map((faq) => (
              <FaqContainer
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
