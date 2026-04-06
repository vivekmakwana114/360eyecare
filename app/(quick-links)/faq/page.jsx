import SubHeader from "../../../components/SubHeader";
import DryFaqs from "../../../components/DryFaqs";
import React from "react";
import Link from "next/link";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "360 Eyecare FAQs | Eye Exams, Insurance & Appointments",
    description:
      "Get answers to common questions about eye exams, appointments, insurance, kids’ eye care & more at 360 Eyecare. Book your visit today.",
    openGraph: {
      title: "360 Eyecare FAQs | Eye Exams, Insurance & Appointments",
      description:
        "Get answers to common questions about eye exams, appointments, insurance, kids’ eye care & more at 360 Eyecare. Book your visit today.",
      url: "https://www.360eyecare.ca/faq/",
      siteName: "360 Eyecare",
      type: "website",
    },
    alternates: { canonical: "https://www.360eyecare.ca/faq/" },
  };
}

const faqSections = [
  {
    sectionId: "general-information",
    sectionTitle: "General Information",
    faqs: [
      {
        id: "gen-1",
        question: "How do I find the best optometrist near me in Toronto?",
        answer:
          "Finding the best optometrist in Toronto starts with location and services. 360 Eyecare has two convenient locations in Yorkville and the Beaches, offering comprehensive eye exams, advanced diagnostics technology, and experienced optometrists. Look for clinics that provide same day appointments, accepts your insurance, and offer specialized services like dry eye treatment and myopia control.",
      },
      {
        id: "gen-2",
        question: "Is 360 Eyecare a walk-in eye clinic near me?",
        answer:
          "Yes, 360 Eyecare welcomes same-day appointments at both our Yorkville and Beaches locations when possible. However, we recommend booking online or calling ahead to ensure minimal wait times. Our Beaches location can be reached at 416-698-3937, and Yorkville at 416-901-2725. We offer extended hours including evenings and Saturdays for your convenience.",
      },
      {
        id: "gen-3",
        question: "Do you offer same-day or walk-in eye exams in Toronto?",
        answer:
          "Yes, we accommodate same-day and walk-in appointments at both locations. For urgent eye care needs or emergency appointments, call our Yorkville location at 416-901-2725 or Beaches at 416-698-3937. We reserve time slots for urgent cases including eye injuries, sudden vision changes, and severe eye pain.",
      },
      {
        id: "gen-4",
        question: "What services does an eye clinic near me typically provide?",
        answer:
          "360 Eyecare provides comprehensive eye care services at both Yorkville and Beaches locations, including: comprehensive eye exams, contact lens fittings, eyeglasses and prescription lenses, pediatric eye exams, myopia control treatments, advanced dry eye therapy (IPL and RF), emergency eye care, and retinal imaging and OCT scans. We also have a full optical shop at each location.",
      },
      {
        id: "gen-5",
        question:
          "Why should I choose a local optometry clinic instead of a chain store?",
        answer:
          "Local clinics like 360 Eyecare offer personalized care that chain stores can't match. At both our Yorkville and Beaches locations, our optometrists remember your name, prescription history, and specific needs. We take time with each patient, offer advanced treatments like IPL therapy for dry eyes and Ortho-K for myopia control, and build long-term relationships with our community. Plus, we offer flexible appointment times and direct insurance billing.",
      },
      {
        id: "gen-6",
        question:
          "Is 360 Eyecare considered one of the best optometry clinics in Toronto?",
        answer:
          "360 Eyecare is recognized as a leading optometry clinic in Toronto. Our optometrist, Dr. Sam Baraam, brings over 10 years of expertise and is certified by the Canadian Association of Optometrists. Both our Yorkville and Beaches locations feature cutting-edge diagnostic technology, specialized treatments, and comprehensive family eye care. We're known for patient-centered care and innovative solutions for dry eye and myopia management.",
      },
      {
        id: "gen-7",
        question: "What are your office hours?",
        answer: (
          <span>
            We&apos;re open Monday through Saturday with flexible hours to
            accommodate your schedule. For specific times and to book
            appointments that work for you,{" "}
            <Link
              href="https://www.360eyecare.ca/book-eye-exam"
              className="text-[#28305F] hover:underline font-medium"
            >
              visit our appointments page
            </Link>
            .
          </span>
        ),
      },
      {
        id: "gen-8",
        question: "Is 360 Eyecare accepting new patients?",
        answer: (
          <span>
            Yes, we welcome new patients of all ages.{" "}
            <a
              href="tel:4166983937"
              className="text-[#28305F] hover:underline font-medium"
            >
              Call us
            </a>{" "}
            or{" "}
            <Link
              href="https://www.360eyecare.ca/book-eye-exam"
              className="text-[#28305F] hover:underline font-medium"
            >
              book online
            </Link>{" "}
            to schedule your first appointment and join our growing family of
            satisfied patients.
          </span>
        ),
      },
    ],
  },

  {
    sectionId: "appointments-insurance",
    sectionTitle: "Appointments & Insurance",
    faqs: [
      {
        id: "ins-1",
        question: "Do you accept vision insurance for eye exams in Toronto?",
        answer:
          "Yes, 360 Eyecare accepts most major insurance plans at both Yorkville and Beaches locations including Sun Life, Manulife, Great-West Life, Blue Cross, Green Shield, and Chambers of Commerce plans. We offer direct billing so you don't pay upfront for covered services. Contact us with your insurance information for verification.",
      },
      {
        id: "ins-2",
        question: "Is OHIP accepted for eye exams?",
        answer:
          "Yes, OHIP covers eye exams for children under 20, adults 65 and older, and people with specific medical conditions like diabetes, glaucoma, or cataracts. OHIP-eligible exams are fully covered at both our Yorkville and Beaches locations. Adults aged 20-64 without medical conditions typically need private insurance or pay out-of-pocket.",
      },
      {
        id: "ins-3",
        question: "How much does an eye exam cost in Toronto?",
        answer:
          "Eye exam costs vary based on coverage. OHIP-covered exams (under 20, 65+, medical conditions) are free. Contact our Yorkville (416-901-2725) or Beaches (416-698-3937) location for current pricing and insurance verification.",
      },
      {
        id: "ins-4",
        question: "What should I bring to my eye exam appointment?",
        answer:
          "Bring your health card (for OHIP coverage), valid photo ID, current glasses and/or contact lenses, insurance information (if applicable), list of current medications, and any questions or concerns about your vision. If you're a new patient at our Yorkville or Beaches location, arrive 10-15 minutes early to complete paperwork.",
      },
      {
        id: "ins-5",
        question: "How can I book an appointment online with 360 Eyecare?",
        answer: (
          <>
            <span>
              Visit{" "}
              <Link
                href="https://www.360eyecare.ca/book-eye-exam"
                className="text-[#28305F] hover:underline font-medium"
              >
                360eyecare.ca
              </Link>{" "}
              and click on "Contact Us", Select your preferred location
              (Yorkville or Beaches), choose an available date and time, and
              fill in your contact information. You'll receive confirmation by
              email. Alternatively, call Yorkville at 416-901-2725 or Beaches at
              416-698-3937.
            </span>
          </>
        ),
      },
      {
        id: "ins-6",
        question: "Do you offer emergency or urgent eye care services?",
        answer:
          "Yes, both our Yorkville and Beaches locations accommodate urgent eye care needs and emergency appointments. We handle eye injuries, sudden vision changes, severe eye pain, foreign object removal, infections (pink eye), and contact lens complications. Call immediately for same-day emergency care: Yorkville 416-901-2725 or Beaches 416-698-3937. We reserve time slots daily for urgent cases.",
      },
      {
        id: "ins-7",
        question: "What if I don't have insurance?",
        answer:
          "No problem. 360 Eyecare offers competitive self-pay rates and flexible payment options. Everyone deserves quality eye care, and we'll work with you to make it affordable.",
      },
      {
        id: "ins-8",
        question: "What's your cancellation policy?",
        answer:
          "We ask for 24 hours' notice if you need to cancel or reschedule. This helps us serve other patients who need appointments and keeps our schedule running smoothly.",
      },
      {
        id: "ins-9",
        question: "How long does a typical eye exam take at 360 Eyecare?",
        answer:
          "Most comprehensive eye exams take 30 to 45 minutes. Complex cases or additional testing may require more time. We'll let you know what to expect when scheduling.",
      },
    ],
  },

  {
    sectionId: "eye-exams-testing",
    sectionTitle: "Eye Exams & Testing",
    faqs: [
      {
        id: "exam-1",
        question:
          "What is included in a comprehensive eye exam at 360 Eyecare?",
        answer:
          "A comprehensive eye exam at 360 Eyecare includes vision assessment, eye health evaluation, OCT scan and retinal imaging, refraction for glasses and contact lenses, eye pressure measurement (tonometry), and visual field testing. The exam typically takes 60 minutes and is available at both our Yorkville and Beaches locations. We use advanced diagnostic technology to detect early signs of eye disease.",
      },
      {
        id: "exam-2",
        question: "How often should I get an eye exam in Toronto?",
        answer:
          "Eye exam frequency depends on your age. Children and teens should have annual exams (OHIP covered until age 20). Adults aged 20-64 need exams every 1-2 years, or annually if you wear contacts or have risk factors. Seniors 65+ should have annual comprehensive exams (OHIP covered). Book at either our Yorkville or Beaches location based on convenience.",
      },
      {
        id: "exam-3",
        question: "Do you offer eye testing for adults and seniors in Toronto?",
        answer:
          "Yes, both our Yorkville and Beaches locations provide comprehensive eye testing for adults and seniors. We assess vision clarity, screen for conditions like glaucoma, cataracts, and macular degeneration, and evaluate overall eye health. Adults 65+ receive OHIP-covered annual exams. Our optometrists are trained in managing age-related eye conditions.",
      },
      {
        id: "exam-4",
        question:
          "What is the difference between an eye test and a full eye exam?",
        answer:
          "An eye test typically checks only your vision and prescription needs. A full comprehensive eye exam includes vision testing plus complete eye health assessment, screening for diseases like glaucoma and diabetes, retinal imaging and OCT scans, and evaluation of eye pressure and visual fields. At 360 Eyecare's Yorkville and Beaches locations, we always provide comprehensive exams to ensure your overall eye health.",
      },
      {
        id: "exam-5",
        question: "How long does an eye exam take at your clinic?",
        answer:
          "A comprehensive eye exam at 360 Eyecare takes approximately 60 minutes. This includes all testing, imaging, consultation with the optometrist, and discussion of results and recommendations. Both our Yorkville and Beaches locations schedule appointments with enough time to thoroughly assess your vision and eye health without rushing.",
      },
      {
        id: "exam-6",
        question: "Can I get an eye exam without a referral in Toronto?",
        answer:
          "Yes, you can book an eye exam at 360 Eyecare without a referral. Simply call our Yorkville location at 416-901-2725 or Beaches at 416-698-3937, or book online. Our optometrists provide comprehensive eye care and can refer you to specialists if needed. No referral is required for routine eye exams, contact lens fittings, or emergency eye care.",
      },
    ],
  },

  {
    sectionId: "glasses-contacts",
    sectionTitle: "Glasses & Contact Lenses",
    faqs: [
      {
        id: "glass-1",
        question: "Do you have an optical shop at your eye clinic in Toronto?",
        answer:
          "Yes, 360 Eyecare has a full-service optical shop at both our Yorkville and Beaches locations. We offer a wide selection of designer and budget-friendly frames, prescription lenses (single-vision, progressive, and specialty), sunglasses, and contact lenses. Our licensed opticians help you choose eyewear that fits your style, budget, and vision needs.",
      },
      {
        id: "glass-2",
        question: "What types of eyeglasses are available at 360 Eyecare?",
        answer:
          "Both our Yorkville and Beaches optical shops offer designer frames and budget-friendly options, prescription glasses for all ages, progressive and bifocal lenses, computer and blue light blocking glasses, prescription sunglasses, and specialty lenses for sports and activities. We carry various brands and styles to match your personal preferences and lifestyle.",
      },
      {
        id: "glass-3",
        question:
          "Do you offer prescription lenses and custom lenses in Toronto?",
        answer:
          "Yes, 360 Eyecare provides prescription lenses and custom lenses at both locations. We offer single-vision lenses, progressive (no-line bifocal) lenses, computer lenses for screen use, high-index thin lenses, anti-reflective and blue light coatings, and photochromic (transition) lenses. Our opticians create custom lens solutions based on your prescription and daily activities.",
      },
      {
        id: "glass-4",
        question: "Can I get my glasses made on the same day?",
        answer:
          "Same-day service depends on the prescription and lens type. Simple prescriptions may be available same-day, while specialized lenses (progressives, high-index) may take a few days. Contact our Yorkville location at 416-901-2725 or Beaches at 416-698-3937 to inquire about your specific needs and timeline.",
      },
      {
        id: "glass-5",
        question: "Do you offer contact lens exams in Toronto?",
        answer:
          "Yes, 360 Eyecare offers comprehensive contact lens exams at both Yorkville and Beaches locations. The exam includes contact lens fitting, prescription determination, instruction on proper insertion and care, and follow-up appointments to ensure comfort. We fit soft daily and monthly lenses, rigid gas permeable lenses, specialty lenses for astigmatism, and Ortho-K overnight lenses.",
      },
      {
        id: "glass-6",
        question: "What types of contact lenses do you provide?",
        answer:
          "We provide all types of contact lenses at both locations: soft daily disposable lenses, monthly replacement lenses, toric lenses for astigmatism, multifocal lenses for presbyopia, colored and cosmetic lenses, Ortho-K overnight corneal reshaping lenses, and MiSight myopia control lenses. Our optometrists help you find the best option for your vision needs and lifestyle.",
      },
      {
        id: "glass-7",
        question: "Are custom contact lenses available at your clinic?",
        answer:
          "Yes, both our Yorkville and Beaches locations offer custom contact lenses including specialty Ortho-K lenses for myopia control, scleral lenses for irregular corneas, custom soft lenses for high prescriptions or astigmatism, and rigid gas permeable (RGP) lenses. Dr. Sam Baraam has specialized training in custom lens fitting and provides personalized care.",
      },
      {
        id: "glass-8",
        question:
          "Is Ortho-K available at your Yorkville and Beaches locations?",
        answer:
          "Yes, Ortho-K is available at both 360 Eyecare locations. Dr. Sam Baraam specializes in Ortho-K fitting and management at our Yorkville clinic (416-901-2725) and Beaches clinic (416-698-3937). We provide comprehensive consultations, custom lens fitting, overnight wear instructions, and regular follow-up care to ensure optimal results and eye health.",
      },
      {
        id: "glass-9",
        question: "Who is a good candidate for Ortho-K lenses in Toronto?",
        answer:
          "Good Ortho-K candidates include children and teens with progressive myopia, adults with mild to moderate nearsightedness, people with low to moderate astigmatism, active individuals who want freedom from daytime eyewear, and athletes and swimmers. A consultation at either our Yorkville or Beaches location will determine if Ortho-K is right for you. We assess corneal shape and eye health before fitting.",
      },
    ],
  },

  {
    sectionId: "eye-conditions-treatment",
    sectionTitle: "Eye Conditions & Treatment",
    faqs: [
      {
        id: "eye-1",
        question: "Is 360 Eyecare a specialized dry eye clinic in Toronto?",
        answer:
          "Yes, 360 Eyecare is a specialized dry eye clinic with locations in Yorkville and the Beaches. We offer the most advanced dry eye treatments including IPL (Intense Pulsed Light) therapy, RF (Radiofrequency) treatment, and meibomian gland expression. Our optometrists are trained in diagnosing and treating chronic dry eye syndrome using FDA-approved technology.",
      },
      {
        id: "eye-2",
        question: "What dry eye treatments do you offer?",
        answer:
          "360 Eyecare offers advanced dry eye treatments at both locations including IPL (Intense Pulsed Light) therapy to reduce inflammation, RF (Radiofrequency) treatment to stimulate tear production, meibomian gland expression to clear blockages, prescription treatments and eye drops, and lifestyle and nutrition counseling. We create customized treatment plans based on your specific condition.",
      },
      {
        id: "eye-3",
        question: "What is RF eye treatment and how does it help dry eyes?",
        answer:
          "RF (Radiofrequency) treatment uses gentle heat to stimulate the meibomian glands and improve natural tear production. The controlled warming melts blocked oils, reduces inflammation, and enhances gland function. RF therapy complements IPL treatment and provides long-term relief from dry eye symptoms. Available at both 360 Eyecare locations with comfortable, painless treatment sessions.",
      },
      {
        id: "eye-4",
        question: "How many sessions are needed for dry eye treatment?",
        answer:
          "Most patients need 3-4 IPL or RF treatment sessions spaced 3-4 weeks apart for optimal results. Some improvement may be noticed after the first session, but full benefits develop after completing the series. Maintenance treatments every 6-12 months help sustain results. Treatment plans are customized at our Yorkville and Beaches locations based on your specific dry eye condition and response to therapy.",
      },
    ],
  },
  {
    sectionId: "pediatric-eye-care-myopia-control",
    sectionTitle: "Pediatric Eye Care & Myopia Control",
    faqs: [
      {
        id: "pediatric-eye-care-myopia-control-1",
        question: "Do you offer pediatric eye exams in Toronto?",
        answer:
          "Yes, 360 Eyecare specializes in pediatric eye care at both Yorkville and Beaches locations. We use child-friendly equipment and techniques to make exams comfortable. Children's eye exams are fully covered by OHIP until age 20. Our pediatric services include early detection of learning-related vision problems and myopia management programs.",
      },
      {
        id: "pediatric-eye-care-myopia-control-2",
        question: "When should my child have their first eye exam?",
        answer:
          "Children should have their first eye exam before starting school, ideally around age 3-5. After the initial exam, annual checkups are recommended through age 19. Early eye exams at 360 Eyecare (available at both Yorkville and Beaches) can detect vision problems that affect learning and development. Children's exams are OHIP-covered and completely free.",
      },
      {
        id: "pediatric-eye-care-myopia-control-3",
        question:
          "Are pediatric eye exams available at your Yorkville and Beaches locations?",
        answer:
          "Yes, pediatric eye exams are available at both 360 Eyecare locations. Our Yorkville clinic is at 55 Bloor St W, Concourse Level, Suite 03, Manulife Centre, Toronto, ON M4W 1A5, Canada (call 416-901-2725) and our Beaches clinic is at 2199 Queen Street East (call 416-698-3937). Both locations offer comprehensive children's eye care, myopia control programs, and OHIP-covered exams for children under 20.",
      },
      {
        id: "pediatric-eye-care-myopia-control-4",
        question: "What is myopia control and how does it help children?",
        answer:
          "Myopia control is a treatment program that slows or stops nearsightedness progression in children. At 360 Eyecare's Yorkville and Beaches locations, we use specialized therapies including MiYOSMART and MyoCare lenses, Ortho-K overnight lenses, and specialized contact lenses. Myopia control reduces dependency on strong prescriptions and lowers the risk of serious eye conditions like retinal detachment later in life.",
      },
      {
        id: "pediatric-eye-care-myopia-control-5",
        question:
          "What are MiYOSMART and MyoCare lenses for myopia management?",
        answer:
          "MiYOSMART and MyoCare are specially designed eyeglass lenses that correct vision while slowing myopia progression in children. These lenses are comfortable, easy to wear throughout the day, and clinically proven to reduce myopia progression. Available at both our Yorkville and Beaches locations, they provide clear vision while protecting your child's long-term eye health.",
      },
      {
        id: "pediatric-eye-care-myopia-control-6",
        question: "Is Ortho-K safe for children with myopia?",
        answer:
          "Yes, Ortho-K is safe and effective for children with myopia. These specially designed lenses are worn overnight to gently reshape the cornea, providing clear vision during the day without glasses or contacts. Ortho-K is FDA-approved and available at both our Yorkville and Beaches locations. Dr. Sam Baraam specializes in Ortho-K fitting and provides comprehensive follow-up care to ensure safety and effectiveness.",
      },
      {
        id: "pediatric-eye-care-myopia-control-7",
        question: "Are children's eye exams covered by OHIP?",
        answer:
          "Yes. In Ontario, children under 20 receive one covered comprehensive eye exam per year. Take advantage of this benefit to protect your child's vision and development at 360 Eyecare at both our Yorkville and Beaches locations.",
      },
    ],
  },
  {
    sectionId: "emergency-eye-care",
    sectionTitle: "Emergency Eye Care",
    faqs: [
      {
        id: "emergency-eye-care-1",
        question: "What qualifies as an eye emergency?",
        answer: (
          <span>
            Eye injuries, sudden vision loss, severe pain, chemical exposure,
            foreign objects stuck in the eye, or sudden flashes and floaters all
            require immediate attention.{" "}
            <a
              href="tel:4169012725"
              className="text-[#28305F] hover:underline font-medium"
            >
              Contact us
            </a>{" "}
            right away.
          </span>
        ),
      },
      {
        id: "emergency-eye-care-2",
        question: "Do you handle same-day emergencies?",
        answer:
          "Yes. 360 Eyecare reserves time daily for urgent cases. If you have an eye emergency during business hours, call us immediately. We'll fit you in as quickly as possible.",
      },
      {
        id: "emergency-eye-care-3",
        question: "What should I do if something gets in my eye?",
        answer:
          "Rinse with clean water or saline solution. Don't rub your eye. If the object won't flush out or you have pain or vision changes, contact us immediately for removal.",
      },
      {
        id: "emergency-eye-care-4",
        question: "What if I have an eye emergency after hours?",
        answer:
          "For severe emergencies outside business hours, visit your nearest emergency room. For urgent but non-critical issues, contact us first thing when we open for prompt care.",
      },
    ],
  },
  {
    sectionId: "location-specific-faqs",
    sectionTitle: "Location-Specific FAQs (Beaches & Yorkville)",
    faqs: [
      {
        id: "location-specific-faqs-1",
        question: "Where is 360 Eyecare located in Yorkville, Toronto?",
        answer:
          "360 Eyecare Yorkville is located at 55 Bloor Street West, Suite 03, in the Manulife Centre concourse level, directly at Bay Street and Bloor Street. We're easily accessible by subway (Bay Station), an 8-minute walk from Queen's Park, and 10 minutes from University of Toronto. Call 416-901-2725 or book online. Street parking and public parking are available nearby.",
      },
      {
        id: "location-specific-faqs-2",
        question: "Do you have an optometrist location in the Beaches area?",
        answer:
          "Yes, our Beaches location is at 2199 Queen Street East in the heart of the Beaches shopping district. We're just a 3-minute walk from Woodbine Beach, easily accessible by the 501 Queen streetcar or Woodbine subway station. Our Beaches clinic offers the same comprehensive services as Yorkville. Call 416-698-3937 to book your appointment.",
      },
      {
        id: "location-specific-faqs-3",
        question: "Are eye exams available in Yorkville and Beaches Toronto?",
        answer:
          "Yes, comprehensive eye exams are available at both locations. Our Yorkville clinic at 55 Bloor St W, Concourse Level, Suite 03, Manulife Centre, Toronto, ON M4W 1A5, Canada serves Yorkville, Rosedale, Bay Street, and downtown Toronto. Our Beaches clinic at 2199 Queen Street East serves the Beaches, Leslieville, and East Toronto. Both locations offer the same services, advanced technology, and experienced optometrists.",
      },
      {
        id: "location-specific-faqs-4",
        question:
          "Is parking available near your Yorkville or Beaches clinics?",
        answer:
          "Yes, parking is available at both locations. Yorkville: Public parking is available at the Manulife Centre and nearby lots on Bloor Street. We're also easily accessible by TTC subway (Bay Station). Beaches: Street parking is available on Queen Street East and surrounding streets. We're bike-friendly and close to the 501 streetcar and Woodbine station.",
      },
      {
        id: "location-specific-faqs-5",
        question:
          "How do I book an eye exam at 360 Eyecare Yorkville or Beaches?",
        answer:
          "Booking is easy at both locations. Book online, call Yorkville at 416-901-2725, or call Beaches at 416-698-3937. You can also walk in, though appointments are recommended for minimal wait times. We offer flexible scheduling including evenings and Saturdays at both locations.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find the best optometrist near me in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finding the best optometrist in Toronto starts with location and services. 360 Eyecare has two convenient locations in Yorkville and the Beaches, offering comprehensive eye exams, advanced diagnostics technology, and experienced optometrists. Look for clinics that provide same day appointments, accepts your insurance, and offer specialized services like dry eye treatment and myopia control.",
      },
    },
    {
      "@type": "Question",
      name: "Is 360 Eyecare a walk-in eye clinic near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 360 Eyecare welcomes same-day appointments at both our Yorkville and Beaches locations when possible. However, we recommend booking online or calling ahead to ensure minimal wait times. Our Beaches location can be reached at 416-698-3937, and Yorkville at 416-901-2725. We offer extended hours including evenings and Saturdays for your convenience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same-day or walk-in eye exams in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we accommodate same-day and walk-in appointments at both locations. For urgent eye care needs or emergency appointments, call our Yorkville location at 416-901-2725 or Beaches at 416-698-3937. We reserve time slots for urgent cases including eye injuries, sudden vision changes, and severe eye pain.",
      },
    },
    {
      "@type": "Question",
      name: "What services does an eye clinic near me typically provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "360 Eyecare provides comprehensive eye care services at both Yorkville and Beaches locations, including: comprehensive eye exams, contact lens fittings, eyeglasses and prescription lenses, pediatric eye exams, myopia control treatments, advanced dry eye therapy (IPL and RF), emergency eye care, and retinal imaging and OCT scans. We also have a full optical shop at each location.",
      },
    },
    {
      "@type": "Question",
      name: "Is 360 Eyecare considered one of the best optometry clinics in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "360 Eyecare is recognized as a leading optometry clinic in Toronto. Our optometrist, Dr. Sam Baraam, brings over 10 years of expertise and is certified by the Canadian Association of Optometrists. Both our Yorkville and Beaches locations feature cutting-edge diagnostic technology, specialized treatments, and comprehensive family eye care. We're known for patient-centered care and innovative solutions for dry eye and myopia management.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept vision insurance for eye exams in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 360 Eyecare accepts most major insurance plans at both Yorkville and Beaches locations including Sun Life, Manulife, Great-West Life, Blue Cross, Green Shield, and Chambers of Commerce plans. We offer direct billing so you don't pay upfront for covered services. Contact us with your insurance information for verification.",
      },
    },
    {
      "@type": "Question",
      name: "Is OHIP accepted for eye exams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, OHIP covers eye exams for children under 20, adults 65 and older, and people with specific medical conditions like diabetes, glaucoma, or cataracts. OHIP-eligible exams are fully covered at both our Yorkville and Beaches locations. Adults aged 20-64 without medical conditions typically need private insurance or pay out-of-pocket.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an eye exam cost in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eye exam costs vary based on coverage. OHIP-covered exams (under 20, 65+, medical conditions) are free. Contact our Yorkville (416-901-2725) or Beaches (416-698-3937) location for current pricing and insurance verification.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book an appointment online with 360 Eyecare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit 360eyecare.ca and click on “Contact Us”, Select your preferred location (Yorkville or Beaches), choose an available date and time, and fill in your contact information. You'll receive confirmation by email. Alternatively, call Yorkville at 416-901-2725 or Beaches at 416-698-3937.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency or urgent eye care services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both our Yorkville and Beaches locations accommodate urgent eye care needs and emergency appointments. We handle eye injuries, sudden vision changes, severe eye pain, foreign object removal, infections (pink eye), and contact lens complications. Call immediately for same-day emergency care: Yorkville 416-901-2725 or Beaches 416-698-3937. We reserve time slots daily for urgent cases.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer eye testing for adults and seniors in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both our Yorkville and Beaches locations provide comprehensive eye testing for adults and seniors. We assess vision clarity, screen for conditions like glaucoma, cataracts, and macular degeneration, and evaluate overall eye health. Adults 65+ receive OHIP-covered annual exams. Our optometrists are trained in managing age-related eye conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer contact lens exams in Toronto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, 360 Eyecare offers comprehensive contact lens exams at both Yorkville and Beaches locations. The exam includes contact lens fitting, prescription determination, instruction on proper insertion and care, and follow-up appointments to ensure comfort. We fit soft daily and monthly lenses, rigid gas permeable lenses, specialty lenses for astigmatism, and Ortho-K overnight lenses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle same-day emergencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 360 Eyecare reserves time daily for urgent cases. If you have an eye emergency during business hours, call us immediately. We'll fit you in as quickly as possible.",
      },
    },
     {
      "@type": "Question",
      name: "Are pediatric eye exams available at your Yorkville and Beaches locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, pediatric eye exams are available at both 360 Eyecare locations. Our Yorkville clinic is at 55 Bloor St W, Concourse Level, Suite 03, Manulife Centre, Toronto, ON M4W 1A5, Canada (call 416-901-2725) and our Beaches clinic is at 2199 Queen Street East (call 416-698-3937). Both locations offer comprehensive children's eye care, myopia control programs, and OHIP-covered exams for children under 20.",
      },
    },
    {
      "@type": "Question",
      name: "What is myopia control and how does it help children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Myopia control is a treatment program that slows or stops nearsightedness progression in children. At 360 Eyecare's Yorkville and Beaches locations, we use specialized therapies including MiYOSMART and MyoCare lenses, Ortho-K overnight lenses, and specialized contact lenses. Myopia control reduces dependency on strong prescriptions and lowers the risk of serious eye conditions like retinal detachment later in life.",
      },
    },
     {
      "@type": "Question",
      name: "What is RF eye treatment and how does it help dry eyes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RF (Radiofrequency) treatment uses gentle heat to stimulate the meibomian glands and improve natural tear production. The controlled warming melts blocked oils, reduces inflammation, and enhances gland function. RF therapy complements IPL treatment and provides long-term relief from dry eye symptoms. Available at both 360 Eyecare locations with comfortable, painless treatment sessions.",
      },
    },

  ],
};

const FAQPage = () => {
  return (
    <main className="pt-[110px]">
      <Script
        id="faq-schema-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>
      <SubHeader text="Frequently Asked Questions" />

      <div className="max-w-7xl mx-auto my-10 px-4 space-y-12">
        {faqSections.map((section) => (
          <section key={section.sectionId} id={section.sectionId}>
            <DryFaqs title={section.sectionTitle} faqData={section.faqs} />
          </section>
        ))}
      </div>

      <div className="pt-2">
        <h2 className="text-sm md:text-3xl font-bold text-center text-[#28305F]">
          Still have Questions?
        </h2>
        <p className="text-sm md:text-base text-center text-[#28305F] pt-5">
          Our friendly team is here to help. Contact us today to speak with an
          eye care professional.
        </p>
      </div>
      <div className="flex justify-center p-5 whitespace-nowrap">
        <Link
          href="https://www.360eyecare.ca/book-eye-exam"
          className="bg-combination-200 font-semibold text-sm md:text-base text-[#FFFFFF]
                     py-2 px-6 rounded-full w-full max-w-[267px] 
                     h-[52px] flex justify-center items-center 
                     cursor-pointer hover:opacity-90 transition-opacity mt-4"
        >
          Schedule Your Appointment
        </Link>
      </div>
    </main>
  );
};

export default FAQPage;
