"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUp } from "lucide-react";

// Eye exam FAQ data. Each answer is an array of blocks:
// a string renders as a paragraph, { list: [...] } renders as a bullet list.
const faqData = [
  {
    id: 1,
    question:
      "How much does an eye exam cost in The Beaches and Yorkville, Toronto?",
    answer: [
      "The cost of a comprehensive eye exam at 360 Eyecare depends on your age and coverage. In Ontario, OHIP covers annual eye exams for children and youth under 20 and for adults 65 and older. So if you fall into either category, your routine exam at our Yorkville or Beaches clinic is covered at no cost to you, unless additional tests are recommended by the optometrist.",
      "For adults between 20 and 64, OHIP does not cover routine eye exams, but many extended health benefit plans do either fully or partially. If you're unsure what your plan covers, it's worth checking before you book. Our front desk team at both locations can also help clarify what to expect when you call.",
      "Out-of-pocket costs for a comprehensive exam vary depending on the complexity of the appointment and any additional testing required. Contact either clinic directly for current pricing.",
    ],
  },
  {
    id: 2,
    question: "How often should I get my eyes examined?",
    answer: [
      "The Canadian Association of Optometrists recommends the following schedule as a general guide:",
      {
        list: [
          "Infants and toddlers: first exam between 6 and 9 months",
          "Children (2–5 years): at least one exam before starting school",
          "School-age children and teens (6–19): annually",
          "Adults (20–39): every 2 to 3 years, or annually if you wear contacts or have risk factors",
          "Adults (40–64): every 2 years",
          "Adults 65 and older: annually",
        ],
      },
      "That said, these are minimums. If you're experiencing changes in your vision, frequent headaches, eye strain from screen use, or have a family history of glaucoma, macular degeneration, or diabetes, your optometrist may recommend more frequent visits. Both our Yorkville and Beaches clinics can help you establish a monitoring schedule based on your individual risk profile.",
    ],
  },
  {
    id: 3,
    question: "How flexible are the appointment times?",
    answer: [
      "Both 360 Eyecare locations offer extended hours on weekday evenings and Saturday appointments, which makes fitting an exam around a full work schedule significantly easier than it used to be.",
      "The Yorkville clinic on Bloor Street West is particularly convenient for patients working in the downtown core. The Beaches clinic on Queen Street East offers easy access via the 501 streetcar.",
      "Walk-in appointments are welcome when availability allows, but booking online is the easiest way to secure your preferred time at either location.",
    ],
  },
  {
    id: 4,
    question: "How do I prepare for my eye test?",
    answer: [
      "Not much preparation is required, but a few things will make your appointment run more smoothly:",
      {
        list: [
          "Bring your current glasses or contact lenses, even if your prescription feels outdated.",
          "If you wear contacts, consider arriving in glasses.",
          "Bring your OHIP card and any extended health benefit information.",
          "Have a list of any medications you're currently taking, including eye drops.",
          "If this is your first visit to 360 Eyecare, note any family history of eye conditions like glaucoma, macular degeneration, or retinal detachment.",
          "If you're likely to have your pupils dilated, consider arranging a ride home or bringing sunglasses.",
        ],
      },
    ],
  },
  {
    id: 5,
    question: "What should I expect during an eye exam?",
    answer: [
      "A comprehensive eye exam at 360 Eyecare typically runs between 45 and 60 minutes for a new patient, though follow-up appointments are often shorter. You'll move through a structured sequence of assessments, with each test building on the last.",
      "Nothing about a standard comprehensive exam is painful. Some tests involve brief puffs of air or bright lights, and dilation drops (when used) cause temporary blurring and light sensitivity that can last a couple of hours. Your optometrist will walk you through what each test involves and what they're looking for as you go.",
    ],
  },
  {
    id: 6,
    question: "How long does an eye exam take?",
    answer: [
      "For a new patient undergoing a full comprehensive exam, expect to set aside 45 to 60 minutes. That includes the intake process, all assessments, imaging, and a consultation with your optometrist to go through results and recommendations. Returning patients with straightforward histories typically move through more quickly. If your appointment involves additional testing, your optometrist will let you know in advance so you can plan accordingly.",
    ],
  },
  {
    id: 7,
    question: "Does my insurance cover eye exams?",
    answer: [
      "It depends on your age and your plan. OHIP covers routine annual eye exams for Ontarians under 20 and 65 and older. For adults between 20 and 64, coverage depends entirely on your extended health benefits package. Most employer-sponsored plans include some level of vision care, though the specific amount and frequency vary. Direct billing is available at both our Yorkville and Beaches locations for many major insurers. Ask our front desk team when you book, and we'll confirm what we can process on your behalf.",
    ],
  },
  {
    id: 8,
    question:
      "Do you offer pediatric eye exams in Yorkville and The Beaches, Toronto?",
    answer: [
      "Yes, and it's one of the things we're particularly experienced with. Our optometrists see children as young as six months old, and we're trained to conduct thorough assessments even with patients who can't yet read a letter chart. Pediatric eye exams are covered by OHIP until age 20, which means there's no cost barrier to getting your child's vision checked annually.",
      "Early detection matters enormously in pediatric eye care. Conditions like amblyopia (lazy eye), strabismus (eye turns), and myopia progress most quickly during childhood. If your child is school-age and hasn't had an eye exam recently, it's worth booking sooner. Both our Beaches and Yorkville clinics are set up to make the experience as calm and comfortable as possible for younger patients.",
    ],
  },
  {
    id: 9,
    question: "Can I schedule an eye exam online?",
    answer: [
      "Yes. Online booking is available for both the Yorkville and Beaches locations directly through the 360 Eyecare website. Select your preferred clinic, choose a date and time that works, and you'll receive a confirmation. If you have specific questions before booking, you're welcome to call either clinic directly or reach out through the website contact form.",
    ],
  },
];

// FAQ Item Component
const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
  return (
    <div className="mb-2 overflow-hidden rounded">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${
          isOpen
            ? "bg-combination-100 text-white"
            : "bg-gray-100 text-combination-200"
        }`}
        onClick={() => toggleFAQ(faq.id)}
      >
        <h3
          className={`font-medium cursor-pointer ${
            isOpen
              ? "text-white font-semibold "
              : "text-combination-200 hover:text-combination-100"
          }`}
        >
          {faq.question}
        </h3>
        <div>
          {isOpen ? (
            <Minus className="w-5 h-5 text-combination-200" />
          ) : (
            <Plus className="w-5 h-5 text-combination-200" />
          )}
        </div>
      </div>
      <div
        className={`bg-white px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1200px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3">
          {faq.answer.map((block, index) =>
            typeof block === "string" ? (
              <p key={index}>{block}</p>
            ) : (
              <ul key={index} className="list-disc pl-5 space-y-1">
                {block.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
const FaqPlusMinus = () => {
  // Changed from single state to an array of open FAQ IDs
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (id) => {
    setOpenFAQs((prevOpenFAQs) => {
      // If already open, remove it from the array (close it)
      if (prevOpenFAQs.includes(id)) {
        return prevOpenFAQs.filter((faqId) => faqId !== id);
      }
      // Otherwise, add it to the array (open it)
      return [...prevOpenFAQs, id];
    });
  };

  return (
    <div className="w-full max-w-7xl bg-white mx-auto p-4 font-sans">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-combination-200 mb-2">
          Eye Exams FAQs
        </h2>
        <div className="w-12 h-1 bg-combination-100 mb-4"></div>
        <p className="text-neutral-500 text-base">
          Firstly, if you are considering eye exams in Toronto but still have
          questions or things you want to clarify, rest assured, that you are
          not alone. Based on the questions we received over the many years
          we've examined, diagnosed, and treated{" "}
          <span className="font-semibold">eye conditions</span> in the Toronto
          area, we've come up with a list of the most Frequently Asked Questions
          regarding eye exams in Toronto. However, if you still have questions
          after consulting our FAQs, do not hesitate to contact us via phone,
          email, or by also using our website.
        </p>
      </div>

      <div className="space-y-2">
        {faqData.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openFAQs.includes(faq.id)}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqPlusMinus;
