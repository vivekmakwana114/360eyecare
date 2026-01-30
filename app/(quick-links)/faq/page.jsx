import SubHeader from "../../../components/SubHeader";
import DryFaqs from "../../../components/DryFaqs";
import React from "react";

export async function generateMetadata() {
  return {
    title: "FAQ - 360 Eyecare",
    description:
      "Frequently asked questions about our services, eye exams, insurance coverage, and more.",
    openGraph: {
      title: "FAQ - 360 Eyecare",
      description:
        "Frequently asked questions about our services, eye exams, insurance coverage, and more.",
      url: "https://www.360eyecare.ca/faq/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: {
      canonical: "https://www.360eyecare.ca/faq/",
    },
  };
}

const tempFaqData = [
  {
    id: 1,
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday from 10:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM.",
  },
  {
    id: 2,
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please contact us to verify your specific coverage.",
  },
  {
    id: 3,
    question: "How often should I get an eye exam?",
    answer:
      "We recommend a comprehensive eye exam every 1-2 years, depending on your age and medical history.",
  },
  {
    id: 4,
    question: "Do you offer direct billing?",
    answer:
      "Yes, we offer direct billing to many insurance providers for your convenience.",
  },
  {
    id: 5,
    question: "Can I book an appointment online?",
    answer:
      "Absolutely! You can use our online booking system to schedule your appointment at your convenience.",
  },
];

const FAQPage = () => {
  return (
    <main className="pt-[110px]">
      <SubHeader text="Frequently Asked Questions" />
      <div className="max-w-7xl mx-auto my-8 px-4 md:px-0">
        <DryFaqs title="FAQ's" faqData={tempFaqData} />
      </div>
    </main>
  );
};

export default FAQPage;
