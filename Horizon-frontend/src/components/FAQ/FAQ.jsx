import { SectionHeading } from "../ui/SectionHeading";
import { FaqItem } from "./FaqItem";
import faqQuestions from "./faqs.js";

export const FAQ = () => {
  return (
    <div className="flex justify-between mx-28 py-16 gap-5 flex-col max-md:mx-10 max-sm:mx-5 max-sm:pt-0">
      <SectionHeading heading={"FAQ"} />

      <div className="grid max-sm:mt-2 grid-cols-2 mt-8 gap-4 max-md:grid-cols-1">
        {faqQuestions.map((faq) => (
          <FaqItem
            key={faq.iconName}
            icon={faq.icon}
            question={faq.question}
            answer={faq.answer}
            iconName={faq.iconName}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
