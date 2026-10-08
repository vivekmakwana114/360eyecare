import Link from "next/link";
import {
  AlinaShahidImage,
  AnitaSritharanImage,
  CataractImage,
  ContactLenspediaImage,
  cornealImage,
  DiabeticImage,
  DryEyeSyndromeImage,
  GillImage,
  GinaChenImage,
  GlaucomaImage,
  lasikImage,
  MacularImage,
  MeibographyImage,
  MyopiaPediaImage,
  OCTScanImage,
  PediatricEyeImage,
  PerimetryImage,
  prkImage,
  RetinalImage,
  SamBarramImage,
  SamBarramImage_copy,
  smileImage,
  SportsVisionImage,
  TearOsmolarityImage,
  VisionThreapImage,
  TeamBrandonImage,
  TeamAlinaShahidImage,
  TeamAnitaSritharanImage,
  TeamSamBaraamImage,
  TeamHannahImage,
  TeamJuliaImage,
  TeamLilyImage,
  TeamLucelImage,
  TeamMelanieImage,
  TeamMiaImage,
  TeamVanessaImage,
  TeamSavannahVecchiarelli,
  SavannahVecchiarelliImage,
  TeamHashimPervaiz,
  HashimPervaizImage,
} from "./Images";
import { Eye, CheckSquare, Clock, Shield, Heart, User } from "lucide-react";

import {
  ContactLensIcon,
  ContactLensImage,
  DryEyeImage,
  EyeExamImage,
  MyopiaImage,
  PediatricEyeCareImage,
} from "./Images";

import {
  FaEye,
  FaLightbulb,
  FaRobot,
  FaCamera,
  FaMedkit,
  FaSearchLocation,
} from "react-icons/fa";
import { GrVolumeControl } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { LuScanEye } from "react-icons/lu";
import { TbBrandVisualStudio } from "react-icons/tb";
import { FaLowVision } from "react-icons/fa";
import Image from "next/image";
import { BiSolidReport } from "react-icons/bi";
import { FaGlasses } from "react-icons/fa6";
import { GiSpectacleLenses } from "react-icons/gi";
import { IoIosContacts } from "react-icons/io";
import {
  HiOutlineEye,
  HiOutlineViewGridAdd,
  HiOutlineChartPie,
} from "react-icons/hi";
import { FaDiagnoses, FaMicroscope } from "react-icons/fa";
import {
  MdOutlineRemoveRedEye,
  MdVisibility,
  MdCameraAlt,
} from "react-icons/md";

export const OptometryServices = [
  {
    imageLink: "/homeIcons/Comprehensive Eye Exams.png",
    title: "Comprehensive Eye Exams",
    description:
      "Our eye exams help detect issues early and ensure your vision is at its best.",
    buttonText: "Book Your Eye Exam",
    buttonLink: "/book-eye-exam",
  },
  {
    imageLink: "/homeIcons/eyewearCollection.png",
    title: "Eyewear Collection",
    description:
      "Choose from our handcrafted and designer frames to suit your style and vision needs",
    buttonText: "Our Eyewear Collections",
    buttonLink: "/eye-glasses",
  },
];
// export const cardData = [
//   {
//     id: 1,
//     number: "01",
//     title: "Expertise",
//     description:
//       "Experienced optometrists committed to delivering quality eye care.",
//     iconPath: "/Icons/Optometry-Icon1.webp",
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Eye Care For All Ages",
//     description: "We offer essential eye care services for every age group.",
//     iconPath: "/Icons/Optometry-Icon2.webp",
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Personalized Treatment",
//     description:
//       "Get personalized eye care from the best optometrists in Toronto.",
//     iconPath: "/Icons/Optometry-Icon1.webp",
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Modern Optical Centre",
//     description:
//       "Full scope and family friendly optical store for your eyewear needs.",
//     iconPath: "/Icons/Optometry-Icon2.webp",
//   },
// ];

export const slides = [
  {
    title: "Toronto Optometrists",
    subtitle: "Expert Eye Care Near You in Yorkville & The Beaches",
    buttonText: "Book an Eye Exam",
    buttonLink: "/book-eye-exam",
    image: "/Slider1.webp",
  },
  // {
  //   title: "360 Eyecare",
  //   subtitle: "Your Neighbourhood Optometry Clinic",
  //   buttonText: "Book an Eye Exam",
  //   buttonLink: "/book-eye-exam",
  //   image: "/Slider1.webp",
  // },
  // {
  //   title: "Toronto Optometrists",
  //   subtitle: "Providing You with Expert Eye Care",
  //   buttonText: "About Us",
  //   buttonLink: "/about-us",
  //   image: "/Slider2.webp",
  // },
];
export const optometrists = [
  {
    id: 1,
    name: "Dr. Sam Baraam",
    alt: "Dr. Sam Baraam Optometrist at 360 Eyecare",
    slug: "dr-sam-baraam",
    image: SamBarramImage.src,
    metaTitle:
      "Dr. Sam Baraam - Optometrist in Yorkville & Beaches | 360 Eyecare",
    metaDescription:
      "Meet Dr. Sam Baraam at 360 Eyecare Beaches and Yorkville Toronto. Book a comprehensive eye exam and receive personalized vision and eye care.",
    description: (
      <>
        Dr. Sam Baraam is a certified optometrist with advanced training in
        specialty contact lenses, dry eye and ocular surface disease management.
      </>
    ),

    longDescription: `
    Dr. Sam Baraam is a dedicated optometrist committed to providing accessible, patient-centered, and comprehensive eye care, including specialty services. He completed his post-secondary education in Cellular Biology at the University of Western Ontario before earning his Doctor of Optometry degree from the prestigious Pennsylvania College of Optometry at Salus University.

During his training, Dr. Baraam gained extensive experience in ocular disease at the world-renowned Veterans Affairs Hospital in Connecticut and at SightMD, a leading refractive laser surgery and cataract center in Philadelphia. He further received advanced training in pediatrics and binocular vision, earning clinical honors from the Eye Institute at Salus University; an accolade awarded to those demonstrating both academic and clinical excellence.

Passionate about supporting patients with ocular surface disease, dry eye management, and specialty contact lenses, Dr. Baraam offers advanced in-office treatments, including Intense Pulsed Light (IPL therapy) and Radiofrequency (RF), to ensure the highest level of care. He also specializes in myopia management and provides orthokeratology lens fitting (OrthoK), helping to slow myopia progression in children and young adults.

Beyond his clinical practice, Dr. Baraam participated in the SOSH mission team, where he provided essential eye care to thousands of patients in underserved villages in Belize. He is certified by the Canadian National Boards (CSAO) and has successfully completed all three parts of the US National Board Examinations (NBEO). As an active member of both the Ontario Association of Optometrists and the Canadian Association of Optometrists, he remains at the forefront of his field.

Dr. Baraam is the founder and president of 360 Eyecare, practicing at the Beaches and Yorkville locations. Outside of work, he enjoys running, cycling, and spending quality time with his family and friends`,
  },
  {
    id: 2,
    name: "Dr. Anita Sritharan",
    alt: "Dr. Anita Sritharan Optometrist at 360 Eyecare",
    slug: "dr-anita-sritharan",
    image: AnitaSritharanImage.src,
    metaTitle:
      "Dr. Anita Sritharan - Optometrist at 360 Eyecare Yorkville & Beaches",
    metaDescription:
      "Meet Dr. Anita Sritharan at 360 Eyecare Toronto. Book an eye exam and get professional care for your vision and long-term eye health.",
    description:
      "Dr. Anita Sritharan is dedicated to providing patient-centered eye care and developing unique treatment plans based on individual needs.",
    longDescription: `Dr. Anita Sritharan is a dedicated optometrist providing full-scope optometry with a special interest in dry eye treatments and myopia control. She has extensive experience managing conditions such as blepharitis, meibomian gland dysfunction, ocular rosacea, styes, and chalazions. To offer her patients the most effective treatments, she provides advanced in-office treatments, including intense pulsed light (IPL) and radio frequency (RF Therapy). Additionally, Dr. Sritharan specializes in fitting specialty contact lenses, including RGPs and OrthoK lenses.

Dr. Sritharan earned both her Honours Bachelor of Science Degree majoring in Biomedical Sciences, and thereafter received her Doctor of Optometry degree with distinction from the University of Waterloo. During her clinical training she gained valuable experience in binocular vision, pediatrics, low vision, and ocular disease. She is passionate about optometry and is dedicated to delivering patient-centered, comprehensive eye care.

She is licensed by the College of Optometrists of Ontario and certified to prescribe Therapeutic Pharmaceutical Agents. She is also a member of the Ontario Association of Optometrists and the Canadian Association of Optometrists.

On her spare time, she enjoys baking, swimming, and travelling`,
  },
  {
    id: 3,
    name: "Dr. Hashim Pervaiz",
    alt: "Dr. Hashim Pervaiz Optometrist at 360 Eyecare",
    slug: "dr-hashim-pervaiz",
    image: HashimPervaizImage.src,
    metaTitle: "Dr. Hashim Pervaiz - Optometrist in Toronto | 360 Eyecare",
    metaDescription:
      "Meet Dr. Hashim Pervaiz at 360 Eyecare Toronto. Book a comprehensive eye exam with Dr. Pervaiz for personalized vision and eye care.",
    description:
      "Dr. Hashim Pervaiz earned his Honours Bachelor of Science in Health Studies from the University of Waterloo before completing his Doctor of Optometry at Nova Southeastern University in Fort Lauderdale, Florida.",
    longDescription: `Dr. Hashim Pervaiz earned his Honours Bachelor of Science in Health Studies from the
University of Waterloo before completing his Doctor of Optometry at Nova Southeastern
University in Fort Lauderdale, Florida.
During his clinical training, Dr. Pervaiz completed an ocular disease externship at the Erie VA
Medical Center, where he gained experience diagnosing and managing a wide range of ocular
conditions. He also completed a vision rehabilitation/therapy externship at the State University
of New York (SUNY) College of Optometry.
Dr. Pervaiz has special interests in pediatric optometry, vision therapy, and ocular disease. He
is passionate about providing comprehensive, full-scope eye care and takes a personalized
approach to each patient’s unique visual needs.
Dr. Pervaiz is an active member of the Ontario Association of Optometrists and the Canadian
Association of Optometrists. He is committed to providing thorough, evidence-based care while
building trusting relationships with his patients.
Outside of the clinic, Dr. Pervaiz enjoys hockey, travelling, and working out.`,
  },
  {
    id: 4,
    name: "Dr. Savannah Vecchiarelli",
    alt: "Dr. Savannah Vecchiarelli Optometrist at 360 Eyecare",
    slug: "dr-savannah-vecchiarelli",
    image: SavannahVecchiarelliImage.src,
    metaTitle:
      "Dr. Savannah Vecchiarelli - Optometrist in Toronto | 360 Eyecare",
    metaDescription:
      "Meet Dr. Savannah Vecchiarelli at 360 Eyecare Toronto. Book a comprehensive eye exam...",
    description:
      "Dr. Savannah Vecchiarelli earned her Doctor of Optometry degree from the University of Waterloo and completed her clinical externship training in Toronto.",
    longDescription: `Dr. Savannah Vecchiarelli earned her Doctor of Optometry degree from the University of Waterloo and completed her clinical externship training in Toronto, gaining valuable experience in ocular disease management, contact lens fitting, and dry eye treatment. Dr Savannah Vecchiarelli enjoys caring for patients of all ages and helping them achieve and maintain optimal eye health. Her clinical interests include comprehensive primary eye care, myopia control, ocular disease management, and helping patients find vision correction options that best suit their lifestyle and visual needs. Outside of the clinic, Dr. Vecchiarelli enjoys painting, travelling, and Pilates.`,
  },
  {
    id: 5,
    name: "Dr. Alina Shahid",
    alt: "Dr. Alina Shahid Optometrist at 360 Eyecare",
    slug: "dr-alina-shahid",
    image: AlinaShahidImage.src,
    metaTitle: "Dr. Alina Shahid - Optometrist at 360 Eyecare | Toronto",
    metaDescription:
      "Learn more about Dr. Alina Shahid at 360 Eyecare Toronto. Schedule an eye exam for expert vision care and eye health support.",
    description:
      "Dr. Shahid is passionate about providing thorough eye care and building trusting relationships with her patients.",
    longDescription: `Dr. Alina Shahid graduated from McMaster University with her Bachelor of Science, majoring in Molecular Biology and Genetics. She then completed her Doctor of Optometry from Illinois College of Optometry in Chicago. Dr. Shahid has clinical experience serving diverse patient populations, with extensive training in ocular disease, contact lenses, pediatrics and dry eye disease. Her special interests include the treatment and management of glaucoma, myopia control and refractive surgery co-management. She is licensed to practice optometry in both the U.S. and Canada.
Dr. Shahid is an active member of the Ontario Association of Optometrists and the Canadian Association of Optometrists and is certified to prescribe Therapeutic Pharmaceutical Agents. Outside of the clinic, she has published an article in glaucoma research and has presented at the American Academy of Optometry. She has also received various honours during her clinical training, including membership with the Golden Key International Optometric Honour Society and Beta Sigma Kappa Honour Society.
Dr. Shahid is passionate about providing thorough eye care and building trusting relationships with her patients. She is fluent in English and Urdu. During her spare time, she loves travelling, reading and photography`,
  },
  {
    id: 6,
    name: "Dr. Harmandeep Gill",
    alt: "Dr. Harmandeep Gill Optometrist at 360 Eyecare",
    slug: "dr-harmandeep-gill",
    image: GillImage.src,
    metaTitle: "Dr. Harmandeep Gill - Optometrist in Toronto | 360 Eyecare",
    metaDescription:
      "Meet Dr. Harmandeep Gill at 360 Eyecare Toronto. Book a comprehensive eye exam and receive personalized vision care.",
    description:
      "Dr. Harmandeep Gill completed his Bachelor of Science in Biochemistry and Molecular Biology at University of Toronto.",
    longDescription: `Dr. Harmandeep Gill completed his Bachelor of Science in Biochemistry and Molecular Biology at the University of Toronto. He went on to receive his Doctor of Optometry from the University of Waterloo.
During his final year of optometry school, he completed his training in Detroit, Michigan at the John D. Dingell Veterans Affairs Medical Centre. While at the hospital, he gained clinical experience in the treatment and management of ocular diseases.
Dr. Gill works at the Yorkville location in Toronto. Outside of patient care, Dr. Gill enjoys photography, basketball, and squash`,
  },
  {
    id: 7,
    name: "Dr. Gina Chen",
    alt: "Dr. Gina Chen Optometrist at 360 Eyecare",
    slug: "dr-gina-chen",
    image: GinaChenImage.src,
    metaTitle: "Dr. Gina Chen - Optometrist in Toronto | 360 Eyecare",
    metaDescription:
      "Get expert eye care from Dr. Gina Chen at 360 Eyecare Toronto. Schedule your eye exam and protect your vision today.",
    description:
      "Dr. Gina Chen is a passionate optometrist specializing in Orthokeratology lenses and enjoys practicing comprehensive eye care.",
    longDescription: `Dr. Gina Chen received both her Doctor of Optometry degree and Bachelor of Science degree with honours from the University of Waterloo. During her clinical studies, she obtained extensive training with a focus in retinal diseases, cataracts, and dry eye diseases at the Eye Associates of Pinellas in Pinellas Park, Florida.

She is passionate about her profession and strives to provide quality patient-centred eye care. Her main clinical experiences include primary care, ocular health and therapeutics, contact lenses, pediatrics, and refractive surgery co-management. As nearsightedness is a fast-growing eye condition in children, Dr. Chen has a professional interest in myopia control to slow the progression of nearsightedness in young patients through Orthokeratology (OrthoK) and innovative soft contact lenses.

Dr. Chen is licensed by the College of Optometrists of Ontario and is certified to prescribe Therapeutic Pharmaceutical Agents in Canada. She is a member of both the Ontario Association of Optometrists and the Canadian Association of Optometrists.

Dr. Chen is excited to be a member of the distinguished team at 360 Eyecare and practices out of the Downtown office – Yorkville. She conducts eye examinations with full fluency in English and Mandarin.

In her spare time, she enjoys exercising, travelling, reading, and being a foodie`,
  },
];

export const whyChoose360 = [
  {
    head: "Led by the Best Optometrist in The Beaches, Toronto",
    para: "Our founder, Dr. Sam Baraam, is a highly respected optometrist known for expertise, compassionate care, and dedication to patient well-being.",
  },
  {
    head: "State-of-the-Art Technology & Personalized Eye Care",
    para: "We use cutting-edge diagnostic tools to provide accurate assessments and customized treatment plans for optimal vision health.",
  },
  {
    head: "Comprehensive Eye Care for All Ages",
    para: "We offer eyecare services for every stage of life from pediatric eye exams to senior vision care.",
  },
  {
    head: "Convenient Booking Options",
    para: "While we welcome walk-ins when possible, we offer online and phone bookings to provide efficient service with minimal wait times.",
  },
];

export const whyChoose360Rosedale = [
  {
    head: "Led by a Top-Rated Optometrist",
    para: "Our founder, Dr. Sam Baraam, is highly regarded for his expertise, compassionate approach, and commitment to cutting-edge eye care.",
  },
  {
    head: "Advanced Technology for Precision Eye Health",
    para: "Our clinic utilizes the latest diagnostic tools to detect and manage vision conditions early, ensuring the best outcomes for your eye health.",
  },
  {
    head: "Customized Eye Care for Every Stage of Life",
    para: "We provide specialized services for children, adults, and seniors, addressing everything from vision correction to age-related eye diseases.",
  },
  {
    head: "Flexible Appointment Booking",
    para: "While walk-ins are welcome when possible, we encourage online and phone bookings for a seamless and efficient experience.",
  },
];

export const eyeCareServices = [
  {
    head: "Comprehensive Eye Exams",
    para: (
      <>
        Regular{" "}
        <Link
          href="/eye-exams"
          className="text-combination-100 hover:text-combination-100"
        >
          eye exams in Toronto
        </Link>{" "}
        are essential for maintaining good vision and early detection of eye
        diseases. Our thorough eye exams for children, adults, and seniors
        ensure you enjoy clear vision and long-term eye health.
      </>
    ),
  },
  {
    head: "Advanced Dry Eye Treatment – IPL & RF Therapy",
    para: (
      <>
        If you suffer from dry, irritated, or fatigued eyes, our{" "}
        <Link
          href="/dry-eye-treatment"
          className="text-combination-100 hover:text-combination-100"
        >
          Intense Pulsed Light (IPL)
        </Link>{" "}
        and Radiofrequency (RF) treatments offer lasting relief by addressing
        the root cause of dry eye disease. Our{" "}
        <Link
          href="/our-team/optometrists"
          className="text-combination-100 hover:text-combination-100"
        >
          eye doctors
        </Link>{" "}
        provide customized treatment plans to help restore your eye comfort.
      </>
    ),
  },
  {
    head: "Pediatric Eye Care",
    para: "Children’s vision plays a crucial role in their learning and development. Our pediatric eye exams in The Beaches detect early vision issues such as nearsightedness, lazy eye (amblyopia), and eye coordination problems, ensuring your child sees the world clearly.",
  },
  {
    head: "Emergency Eye Care – Immediate Attention When You Need It Most",
    para: "Eye emergencies require urgent medical attention. If you experience sudden vision loss, severe eye pain, flashes of light, eye infections, or injuries, contact us immediately for emergency care.",
  },
  {
    head: "Eyewear & Contact Lens Fittings",
    para: "If you are looking for stylish and functional eyewear, we carry a wide range of designer frames, prescription glasses, and specialty contact lenses. Our opticians will ensure you have the perfect fit for your lifestyle and vision needs.",
  },
];

export const eyeCareRosedale = [
  {
    head: "Comprehensive Eye Exams",
    para: "Regular eye exams in Toronto are essential for maintaining good vision and early detection of eye diseases. Our thorough eye exams for children, adults, and seniors ensure you enjoy clear vision and long-term eye health.",
  },
  {
    head: "Advanced Dry Eye Treatment – IPL & RF Therapy",
    para: "If you suffer from dry, irritated, or fatigued eyes, our Intense Pulsed Light (IPL) and Radiofrequency (RF) treatments offer lasting relief by addressing the root cause of dry eye disease. Our eye doctors provide customized treatment plans to help restore your eye comfort.",
  },
  {
    head: "Pediatric Eye Care",
    para: "Children’s vision plays a crucial role in their learning and development. Our pediatric eye exams in The Beaches detect early vision issues such as nearsightedness, lazy eye (amblyopia), and eye coordination problems, ensuring your child sees the world clearly.",
  },
  {
    head: "Emergency Eye Care – Immediate Attention When You Need It Most",
    para: "Eye emergencies require urgent medical attention. If you experience sudden vision loss, severe eye pain, flashes of light, eye infections, or injuries, contact us immediately for emergency care.",
  },
  {
    head: "Eyewear & Contact Lens Fittings",
    para: "If you are looking for stylish and functional eyewear, we carry a wide range of designer frames, prescription glasses, and specialty contact lenses. Our opticians will ensure you have the perfect fit for your lifestyle and vision needs.",
  },
];

export const beachesFaqs = [
  {
    head: "Can I visit your clinic for urgent eye care needs?",
    para: "Yes, 360 Eyecare provides emergency services at our Eye Clinic in The Beaches, handling eye injuries, infections, and sudden vision problems.",
  },
  {
    head: "Do you offer contact lens fittings and consultations?",
    para: "Yes, our Optometry provides comprehensive contact lens fittings, including options for Ortho-K lenses for myopia control.",
  },
  {
    head: "Do you provide laser vision correction consultations in The Beaches?",
    para: "Yes, our Optometrist in The Beaches team offers laser vision correction consultations to guide you through pre- and post-operative care.",
  },
  {
    head: "Can I visit your clinic for urgent eye care needs?",
    para: "Yes, 360 Eyecare provides emergency services at our Eye Clinic in The Beaches, handling eye injuries, infections, and sudden vision problems.",
  },
  {
    head: "How often should I have an eye exam?",
    para: (
      <>
        {"=>"} Adults (19–64): Every 1–2 years <br />
        {"=>"} Children (0–18) & Seniors (65+): Annually or as recommended by
        your optometrist
      </>
    ),
  },
  {
    head: "Do you accept vision insurance?",
    para: (
      <>
        Yes! We accept most vision insurance plans.{" "}
        <Link
          href={""}
          className="text-combination-100 hover:text-combination-100"
        >
          Learn more
        </Link>{" "}
        about coverage.
      </>
    ),
  },
];

export const firstRow = [
  {
    src: "/associate/associate1.webp",
    alt: "Canadian Association of Optometrists",
    width: 275,
    height: 32,
  },
  {
    src: "/associate/associate2.webp",
    alt: "Ontario Association of Optometrists",
    width: 250,
    height: 91,
  },
  {
    src: "/associate/associate3.webp",
    alt: "College of Optometrists of Ontario",
    width: 200,
    height: 80,
  },
  {
    src: "/associate/associate4.webp",
    alt: "National Board of Examiners in Optometry",
    width: 305,
    height: 126,
  },
];

export const orgImages = [
  {
    src: "/associate/associate5.webp",
    alt: "World Sight Day Challenge",
    width: 174,
    height: 50,
  },
  {
    src: "/associate/associate6.webp",
    alt: "Optometry Giving Sight",
    width: 174,
    height: 103,
  },
  {
    src: "/associate/associate7.png",
    alt: "Optometry Giving Sight",
    width: 784,
    height: 165,
  },
];

// Array of card data for easier maintenance and mapping
export const cardData = [
  {
    id: "01",
    icon: "/homeIcons/book.png",
    title: "Expertise",
    description:
      "Experienced optometrists committed to delivering quality eye care.",
  },
  {
    id: "02",
    icon: "/homeIcons/medical.png",
    title: "Eye Care For All Ages",
    description: "We offer essential eye care services for every age group.",
  },
  {
    id: "03",
    icon: "/homeIcons/doctorwithbp.png",
    title: "Personalized Treatment",
    description:
      "Get personalized eye care from the best optometrists in Toronto.",
  },
  {
    id: "04",
    icon: "/homeIcons/vision.png",
    title: "Modern Optical Centre",
    description:
      "Full scope and family friendly optical store for your eyewear needs.",
  },
];

export const services = [
  {
    label: "Eye Exams",
    icon: "/homeIcons/eyeExam.png",
    image: EyeExamImage,
    title: "Comprehensive Eye Exams by Top Toronto Optometrists",
    description:
      "Comprehensive Eye Exams by Top Toronto Optometrists. Our team of experienced optometrists provides thorough eye exams using advanced technology to assess your vision and eye health. We tailor our exams to your needs, whether you're seeking a routine check-up, have specific concerns, or need a new prescription. By choosing our optometrists near you, you're selecting the best optometrists in Toronto committed to your eye care.",
    services: [
      "Comprehensive Eye Health Assessment",
      "OCT scan and Retinal imaging",
      "Refraction Assessment for Glasses and Contact Lenses",
      "Eye Pressure Measurement (Tonometry)",
      "Visual Fields and other ocular tests",
    ],
  },
  {
    label: "Contact Lens Fitting",
    icon: "/homeIcons/contact.png",
    image: ContactLensImage,
    title: "Professional Contact Lens Fittings for You",
    description:
      "Our clinic offers expert contact lens fittings to ensure optimal comfort, vision, and eye health. Our experienced optometrists assess your eyes to recommend the most suitable contact lenses for your lifestyle and needs.",
    services: [
      "Customized Fittings for Comfort",
      "Thorough Eye Health Evaluation",
      "Trial Lenses for Evaluation",
      "Education on Proper Lens Care",
      "Follow-Up Care for Continued Comfort",
    ],
  },
  {
    label: "Myopia Control",
    icon: "/homeIcons/myopia.png",
    image: MyopiaImage,
    title: "Effective Myopia Control Solutions for Children",
    description:
      "Our clinic offers specialized myopia control treatments for children to slow the progression of nearsightedness. Our personalized approach includes Spectacle therapy, multifocal contact lenses, atropine eye drops, and orthokeratology (Ortho-K) to manage myopia effectively.",
    services: [
      "Spectacle Therapy",
      "Customized Treatment Plans",
      "Multifocal Contact Lenses",
      "Orthokeratology (Ortho-K)",
      "Regular Monitoring and Adjustments",
      "Axial Length measurements",
    ],
  },
  {
    label: "Dry Eye Treatment",
    icon: "/homeIcons/dryeye.png",
    image: DryEyeImage,
    title: "Effective Dry Eye Treatment Solutions",
    description:
      "We offer advanced dry eye treatments to relieve discomfort and improve eye health. We identify the underlying causes and recommend treatments to restore moisture and comfort to your eyes.",
    services: [
      "Comprehensive Dry Eye Evaluation",
      "Lifestyle and Environmental Recommendations",
      "Prescription Eye Drops and Medications",
      "Tear Duct Plugs (Punctal Plugs)",
      "IPL and RF therapy procedures",
    ],
  },
  {
    label: "Pediatric Eye Care",
    icon: "/homeIcons/pediatric1.png",
    image: PediatricEyeCareImage,
    title: "Comprehensive Pediatric Optometric Services in Toronto",
    description:
      "Our Toronto optometrists specialize in pediatric eye care, providing comprehensive exams, vision therapy, and myopia control solutions. We are dedicated to ensuring your child's vision and eye health are our top priority.",
    services: [
      "Pediatric Eye Exams Tailored for Children",
      "Vision Therapy Services for Visual Development",
      "Myopia Control Solutions to Manage Nearsightedness",
      "Expertise in Treating Children's Eye Conditions",
      "Compassionate and Child-Friendly Care",
    ],
  },
];

export const eyeExamTools = [
  {
    label: "Visual Acuity & Snellen Chart",
    icon: <FaEye size={24} />,
    image: "/eyeexam/eyeexam1.webp",
    title: "The Snellen Chart — Visual Acuity Testing",
    description:
      "The eye chart is the oldest tool in the room and still one of the most useful. Developed by Dutch ophthalmologist Dr. Herman Snellen in the 1860s, the chart measures visual acuity by asking you to read rows of letters that decrease in size from top to bottom. The result tells your optometrist how your vision compares to a statistically “standard” eye at a given distance.",
    content:
      "Modern clinics, including 360 Eyecare, use digitized versions of the chart, which allow the optometrist to randomize letters between readings (eliminating memorization by frequent patients), adjust line size instantly, and operate the chart from a much smaller room using a mirror system. It sounds like a small upgrade. In practice, it makes the test more reliable and the appointment more efficient.",
    paragraph1:
      "Visual acuity is used for establishing whether corrective lenses are needed, legally defining low vision or blindness, determining fitness to drive without glasses, and tracking vision changes over time.",
    height: "243",
    width: "243",
  },
  {
    label: "The Phoropter",
    height: "355",
    width: "533",
    icon: <FaMedkit size={24} />,
    image: "/eyeexam/eyeexam2.webp",
    title: "The Phoropter — Refraction Testing",
    content:
      "If the Snellen chart tells your optometrist that your vision needs correction, the phoropter tells them how much. This is the instrument you look through while your optometrist cycles through lens combinations to land on the precise prescription that gives you your clearest, most comfortable vision.",
    paragraph1:
      "At 360 Eyecare, we use digital phoropter technology rather than the traditional manual version. Digital phoropters switch between lens options faster and more smoothly, which reduces patient fatigue during testing and produces more reliable results, particularly for patients with complex prescriptions or those who find the manual version difficult to judge.",
  },
  {
    label: "The Slit Lamp",
    height: "243",
    width: "243",
    icon: <FaLightbulb size={24} />,
    image: "/eyeexam/eyeexam3.webp",
    title: "The Slit Lamp — Anterior Segment Microscopy",
    content:
      "The slit lamp is a binocular microscope mounted on a table, and it gives optometrists a highly magnified view of the front structures of the eye. The narrow beam of light it projects can be angled and focused to illuminate specific layers of tissue, making it the primary tool for detecting corneal conditions like keratoconus, surface infections, early cataracts, inflammatory conditions, and meibomian gland dysfunction.",
  },
  {
    label: "The Auto Refractor",
    height: "291",
    width: "244",
    icon: <FaRobot size={24} />,
    image: "/eyeexam/eyeexam4.webp",
    title: "The Auto Refractor — Objective Baseline Measurement",
    content:
      "Before your optometrist runs the subjective refraction with the phoropter, an autorefractor gives them an objective starting point. You look into the device at a small image — usually a hot air balloon or a house at the end of a road — while it automatically measures how light focuses on your retina. The reading isn’t a final prescription, but it significantly narrows the range the optometrist needs to test, making the phoropter portion of your exam faster and more precise.",
  },
  {
    label: "The Retinal Camera",
    height: "286",
    width: "531",
    icon: <FaCamera size={24} />,
    image: "/eyeexam/eyeexam5.webp",
    title: "The Retinal Camera — Posterior Imaging",
    content:
      "A high-resolution digital camera captures detailed photographs of the retina, macula, optic nerve head, and surrounding blood vessels. These images serve two purposes. First, they allow your optometrist to assess the current health of these structures in far greater detail than direct observation alone. Second, they create a documented visual record that makes it possible to detect and measure change over time, which is how conditions like glaucoma, diabetic retinopathy, and macular degeneration are caught and monitored before they cause significant vision loss.",
    paragraph1:
      "At 360 Eyecare, retinal images are provided to every patient after their exam for their own records.",
  },
  {
    label: "The OCT",
    height: "354",
    width: "531",
    icon: <FaMicroscope size={24} />,
    image: "/eyeexam/eyeexam6.webp",
    title: "The OCT — Optical Coherence Tomography",
    content:
      "The OCT is arguably the most significant technological advancement in optometry in the past generation. It produces cross-sectional images of the retina at a microscopic level.",
    paragraph1:
      "OCT is particularly valuable for early glaucoma detection, monitoring macular degeneration, assessing optic nerve health, and evaluating patients with diabetes or other systemic conditions that affect retinal tissue. What makes it so clinically important is that it can detect structural changes in the eye before those changes produce any symptoms the patient would notice.",
  },
  {
    label: "The Visual Fields Test",
    height: "354",
    width: "531",
    icon: <FaSearchLocation size={24} />,
    image: "/eyeexam/EyeExam.webp",
    title: "The Visual Fields Test — Perimetry",
    content:
      "Peripheral vision loss is one of the most dangerous things that can happen to your eyes, partly because it tends to happen gradually and symmetrically. The visual fields test maps the full extent of your field of vision while you focus on a central point, identifying any blind spots, gaps, or areas of reduced sensitivity.",
    paragraph1:
      "Manual confrontation testing gives a quick gross assessment. Automated perimetry is used for more specific screening. It’s the standard tool for glaucoma monitoring and is also used when neurological conditions affecting the visual pathway are a concern. A tumour pressing on the optic chiasm, for example, produces a characteristic pattern of visual field loss that this test can identify.",
  },
];

// Common eye conditions shown as tabs on the common eye conditions page.
// paragraphs → intro copy beside the image; sections → cards below it, each
// with optional paragraphs, list (plain strings), points ({ head, para }) and
// closing. half: true pairs two adjacent sections side by side on desktop.
// link (optional) → { href, label } to a dedicated service page.
export const commonEyeServices = [
  {
    label: "Cataracts",
    icon: "/commoneye/cataracts.png",
    image: CataractImage,
    title: "Cataracts",
    paragraphs: [
      "A cataract is a clouding of the crystalline lens inside the eye. As the proteins in the lens gradually clump together over time, they scatter and block light rather than focusing it clearly, producing the characteristic symptoms of cataract: blurred or hazy vision, increased glare and light sensitivity, fading of colours, difficulty seeing at night, and the need for progressively stronger reading glasses.",
      "Cataracts are the leading cause of reversible vision loss worldwide. They develop slowly and are primarily age-related. The majority of people over 75 have some degree of cataract formation, but they can also result from eye trauma, prolonged corticosteroid use, certain systemic conditions including diabetes, and significant UV exposure over a lifetime.",
    ],
    sections: [
      {
        heading: "Symptoms",
        list: [
          "Blurred, hazy, or foggy vision that doesn't improve with updated glasses",
          "Increased sensitivity to glare from headlights, sunlight, and bright overhead lighting",
          "Halos around lights, especially at night",
          "Colours appearing faded, yellowed, or washed out",
          "Difficulty driving at night or in low contrast conditions",
          "Frequent prescription changes as the lens opacity progresses",
        ],
      },
      {
        heading: "Diagnosis and Monitoring at 360 Eyecare",
        paragraphs: [
          "Cataracts are diagnosed during the comprehensive eye exam through slit lamp examination of the anterior segment and dilated posterior segment assessment. At 360 Eyecare, we document cataract development photographically and track progression over time, monitoring visual acuity, contrast sensitivity, and glare disability to assess functional impact.",
          "Early-stage cataracts that aren't significantly affecting daily function are monitored rather than treated. When cataracts reach the point of meaningfully affecting vision, quality of life, or safety, surgical referral is appropriate.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Cataracts cannot be reversed with drops, nutrition, or non-surgical interventions. The only effective treatment is surgical removal of the cloudy lens and replacement with an artificial intraocular lens (IOL). Cataract surgery is one of the most commonly performed and most successful surgeries in medicine, with high rates of visual recovery.",
          "At 360 Eyecare, we don't perform cataract surgery. This is carried out by an ophthalmologist at a surgical facility. We provide pre-operative assessment and co-management, and we manage post-operative care including monitoring healing and optimising the final refractive outcome following surgery. Patients who have had cataract surgery continue their routine eye care at 360 Eyecare.",
        ],
      },
    ],
  },
  {
    label: "Glaucoma",
    icon: "/commoneye/glaucoma.png",
    image: GlaucomaImage,
    title: "Glaucoma",
    paragraphs: [
      "Glaucoma is a group of eye conditions characterised by progressive damage to the optic nerve. It is one of the leading causes of irreversible blindness worldwide and affects an estimated 400,000 Canadians, roughly half of whom don't know they have it. The damage glaucoma causes is permanent, but when detected early, its progression can be significantly slowed or halted with treatment.",
      "The most common form, primary open-angle glaucoma, develops without noticeable symptoms in its early and middle stages. The peripheral vision is affected first, and the brain compensates so effectively that most patients don't notice the loss until it's advanced. By the time a patient notices visual field changes in daily life, significant irreversible damage has typically already occurred. This is why glaucoma screening through regular comprehensive eye exams is the only reliable early detection strategy.",
    ],
    sections: [
      {
        heading: "Risk Factors",
        half: true,
        list: [
          "Age over 60",
          "Family history of glaucoma",
          "Elevated intraocular pressure (IOP)",
          "Thin central corneal thickness",
          "African or Caribbean ancestry",
          "History of eye trauma, prolonged corticosteroid use, or other eye conditions affecting drainage",
        ],
      },
      {
        heading: "Symptoms",
        half: true,
        paragraphs: [
          "Primary open-angle glaucoma is largely asymptomatic until late-stage.",
          "Late-stage open-angle glaucoma symptoms include tunnel vision and progressive peripheral field loss, though at this point significant irreversible damage has already occurred.",
        ],
      },
      {
        heading: "Diagnosis and Monitoring at 360 Eyecare",
        paragraphs: [
          "Glaucoma assessment at 360 Eyecare integrates multiple diagnostic data points; no single measurement is sufficient for accurate risk stratification:",
        ],
        points: [
          {
            head: "Intraocular pressure measurement",
            para: "tonometry assesses the pressure inside the eye; elevated pressure is the primary treatable risk factor.",
          },
          {
            head: "OCT nerve fibre layer analysis",
            para: "measures the thickness of the retinal nerve fibre layer around the optic nerve with micrometre precision, detecting thinning years before visual field loss becomes measurable.",
          },
          {
            head: "Optic nerve assessment",
            para: "slit lamp examination and photography of the optic disc, assessing cup-to-disc ratio and nerve head morphology.",
          },
          {
            head: "Visual field testing",
            para: "automated Humphrey perimetry maps the full visual field, detecting any areas of peripheral sensitivity loss.",
          },
          {
            head: "Pachymetry",
            para: "corneal thickness measurement, integrated with IOP readings to produce corrected pressure values and assess risk.",
          },
        ],
        closing: [
          "Patients with elevated IOP, suspicious optic nerve appearance, family history, or other risk factors are placed on a monitoring schedule with more frequent assessment to detect any progression at the earliest possible stage.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Glaucoma treatment aims to lower intraocular pressure, the primary modifiable factor in slowing optic nerve damage. First-line treatment is typically prescription eye drops that reduce IOP either by decreasing aqueous production or improving drainage. For patients who don't achieve adequate pressure control with drops, laser treatment (SLT — selective laser trabeculoplasty) or surgical procedures may be recommended through specialist referral.",
          "At 360 Eyecare, we prescribe and manage glaucoma eye drop therapy, monitor treatment response through regular IOP measurement and OCT imaging, and coordinate referral to ophthalmology when surgical intervention or specialist co-management is needed.",
        ],
      },
    ],
  },
  {
    label: "Dry Eye",
    icon: "/commoneye/dryEye.png",
    image: DryEyeSyndromeImage,
    title: "Dry Eye Disease",
    paragraphs: [
      "Dry eye disease (DED) is one of the most common conditions we manage at 360 Eyecare and one of the most frequently undertreated. It's a chronic condition affecting the tear film, caused by either insufficient tear production or poor tear quality leading to rapid evaporation. Symptoms include burning, grittiness, redness, fluctuating vision, light sensitivity, and, paradoxically, excessive tearing.",
      "At 360 Eyecare, dry eye assessment and treatment is a clinical specialty at both our Yorkville and Beaches locations. We use the OCULUS Keratograph 5M for meibomian gland imaging and tear film analysis, and the i-PEN osmolarity system for objective severity measurement. Treatment ranges from prescription drops and warm compresses through to advanced in-office procedures including InMode IPL and RF therapy.",
      "For full clinical detail on dry eye disease, diagnosis, and treatment options at 360 Eyecare, see our dedicated Dry Eye Clinic page.",
    ],
    sections: [],
    link: {
      href: "/dry-eye-syndrome-keratograph-i-pen",
      label: "Learn More — Dry Eye Clinic at 360 Eyecare",
    },
  },
  {
    label: "Diabetic Retinopathy",
    icon: "/commoneye/diabetic.png",
    image: DiabeticImage,
    title: "Diabetic Retinopathy",
    paragraphs: [
      "Diabetic retinopathy is a complication of diabetes affecting the blood vessels of the retina, a sensitive tissue at the back of the eye. It is the leading cause of vision loss in working-age adults in Canada, and affects a significant proportion of people living with both Type 1 and Type 2 diabetes. As with glaucoma, it typically develops without symptoms in its early stages.",
      "High blood sugar levels damage the tiny blood vessels supplying the retina, causing them to leak fluid, develop abnormal new vessels, or both. The early stage involves microaneurysms, haemorrhages, and fluid accumulation. The advanced stage involves the growth of fragile new blood vessels that can bleed into the vitreous or cause tractional retinal detachment, both of which can cause rapid and severe vision loss.",
    ],
    sections: [
      {
        heading: "Symptoms",
        paragraphs: [
          "Early diabetic retinopathy typically produces no symptoms. As the condition progresses, patients may notice:",
        ],
        list: [
          "Blurred or fluctuating vision",
          "Dark spots or floaters",
          "Vision that varies throughout the day as blood sugar fluctuates",
          "Difficulty with colour perception",
          "Vision loss",
        ],
      },
      {
        heading: "Diagnosis and Monitoring at 360 Eyecare",
        paragraphs: [
          "All patients with diabetes should have a comprehensive dilated eye exam annually and more frequently if retinopathy is present. At 360 Eyecare, diabetic eye assessments include:",
        ],
        points: [
          {
            head: "Dilated fundus examination",
            para: "direct assessment of the retina, optic nerve, and retinal blood vessels through a dilated pupil.",
          },
          {
            head: "Digital retinal imaging",
            para: "high-resolution photographs of the posterior pole providing a documented baseline for tracking change over time.",
          },
          {
            head: "OCT",
            para: "cross-sectional imaging of the retinal layers to detect macular oedema, which is the most common cause of vision loss in diabetic retinopathy.",
          },
        ],
        closing: [
          "Findings are documented and communicated to the patient's diabetes care team as part of the integrated management of diabetic eye disease.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Early and moderate diabetic retinopathy without macular oedema is managed through monitoring, optimisation of blood sugar control, blood pressure management, and lifestyle modification. Advanced retinopathy, macular oedema, or proliferative disease is managed through referral to a retinal specialist for intravitreal injection therapy (anti-VEGF), laser photocoagulation, or surgical intervention where indicated.",
        ],
      },
    ],
  },
  {
    label: "Macular Degeneration",
    icon: "/commoneye/mascular.png",
    image: MacularImage,
    title: "Macular Degeneration",
    paragraphs: [
      "Age-related macular degeneration (AMD) is the leading cause of central vision loss in adults over 50 in the developed world. It affects the macula. Peripheral vision is typically preserved even in advanced AMD, but the loss of central vision has a profound impact on daily function and quality of life.",
      "AMD exists in two forms. Dry AMD, the more common form, accounting for approximately 85 to 90 percent of cases, involves the gradual accumulation of drusen deposits beneath the retina and progressive thinning of macular tissue. It advances slowly over years and may remain relatively stable for long periods before progressing.",
      "Wet AMD is less common but responsible for the majority of severe vision loss from AMD. It involves the growth of abnormal new blood vessels beneath the retina that leak fluid and blood, causing rapid and sometimes dramatic central vision loss.",
    ],
    sections: [
      {
        heading: "Risk Factors",
        half: true,
        list: [
          "Age over 50",
          "Smoking",
          "Family history of AMD",
          "Lighter iris colour",
          "Prolonged UV exposure without adequate eye protection",
          "Cardiovascular disease and hypertension",
          "Diet low in antioxidants and omega-3 fatty acids",
        ],
      },
      {
        heading: "Symptoms",
        half: true,
        list: [
          "Blurred or distorted central vision",
          "A blurry or blank spot in the centre of vision",
          "Difficulty reading or recognising faces despite adequate lighting",
          "Colours appearing less vivid or distinct",
          "Increased difficulty adapting from bright to dim light",
        ],
      },
      {
        heading: "Diagnosis and Monitoring at 360 Eyecare",
        paragraphs: ["AMD is assessed and monitored at 360 Eyecare using:"],
        points: [
          {
            head: "OCT",
            para: "the primary imaging tool for AMD assessment; cross-sectional retinal imaging detects drusen accumulation, geographic atrophy, and the presence of subretinal fluid or neovascularisation associated with wet AMD with a precision not achievable through clinical examination alone.",
          },
          {
            head: "Digital retinal photography",
            para: "documents drusen distribution and macular appearance for longitudinal comparison.",
          },
          {
            head: "Amsler grid testing",
            para: "a simple but effective screening tool for detecting metamorphopsia; patients with AMD or at high risk are provided with an Amsler grid for home monitoring, with instructions to seek urgent assessment if new distortion appears.",
          },
        ],
        closing: [
          "Patients with early and intermediate AMD are monitored on a regular schedule with OCT at each visit to detect any conversion to wet AMD, which is the primary concern during monitoring. Wet AMD requires urgent referral for intravitreal injection therapy, where early treatment significantly improves the chances of preserving useful central vision.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Dry AMD has no approved pharmacological treatment in Canada at the time of writing, though research into complement inhibitors and other targets is active. Management focuses on risk factor modification and nutritional supplementation. The AREDS2 formula (vitamin C, vitamin E, lutein, zeaxanthin, zinc, and copper) has demonstrated a 25 percent reduction in progression risk in intermediate AMD in the landmark AREDS2 clinical trial.",
          "Wet AMD is treated with intravitreal anti-VEGF injections administered by a retinal specialist. These injections inhibit the abnormal blood vessel growth driving wet AMD and, when started promptly, can stabilise or in many cases improve central vision. 360 Eyecare treats any new presentation of wet AMD symptoms or OCT findings as an urgent referral.",
        ],
      },
    ],
  },
];

// Additional conditions shown as cards. link (optional) → { href, label }.
export const additionalEyeConditions = [
  {
    title: "Myopia (Nearsightedness)",
    description:
      "The most rapidly increasing refractive condition worldwide. Myopia occurs when the eyeball grows too long, causing light to focus in front of rather than on the retina. Beyond corrective glasses and contact lenses, 360 Eyecare offers a full myopia control program for children to slow progression and reduce long-term disease risk. See our Myopia Control page for full detail.",
    link: { href: "/myopia-control-clinic", label: "Myopia Control" },
  },
  {
    title: "Hyperopia (Farsightedness)",
    description:
      "Occurs when the eyeball is too short or the cornea too flat, causing difficulty focusing at near, and in significant hyperopia, at distance as well. Corrected with glasses or contact lenses. Young patients with high hyperopia are also screened for accommodative esotropia.",
  },
  {
    title: "Astigmatism",
    description:
      "A refractive error caused by the cornea or lens having an irregular shape, causing light to focus at multiple points rather than a single point on the retina. Produces blurred or distorted vision at all distances. Corrected with toric glasses lenses or toric contact lenses. Corneal topography is used when astigmatism is irregular or when contact lens fitting is planned.",
  },
  {
    title: "Presbyopia",
    description:
      "The gradual loss of near focusing ability that affects everyone from approximately age 40 onwards, caused by the crystalline lens losing its flexibility with age. Not a disease but an inevitable physiological change. Managed with reading glasses, bifocals, progressive lenses, or multifocal contact lenses.",
  },
  {
    title: "Keratoconus",
    description:
      "A progressive condition in which the cornea gradually thins and bulges into a cone shape, causing increasing irregular astigmatism and progressive vision distortion that cannot be fully corrected with standard glasses. Detected through corneal topography often before it produces noticeable visual symptoms. Early detection allows referral for corneal cross-linking, which halts progression. Advanced keratoconus is managed with scleral contact lenses at 360 Eyecare.",
  },
  {
    title: "Blepharitis",
    description:
      "Chronic inflammation of the eyelid margins usually caused by bacterial overgrowth, meibomian gland dysfunction, or demodex mite infestation. Produces red, itchy, crusty eyelid margins and is a common contributor to dry eye symptoms. Managed with eyelid hygiene, warm compresses, topical or oral antibiotics where indicated, and for demodex-associated blepharitis, IPL therapy.",
  },
  {
    title: "Conjunctivitis (Pink Eye)",
    description:
      "Inflammation of the conjunctiva caused by bacterial infection, viral infection, or allergic reaction. The three types have different presentations, different treatments, and different contagion profiles. Bacterial conjunctivitis typically responds to antibiotic drops; viral conjunctivitis resolves without specific treatment; allergic conjunctivitis is managed with antihistamine drops and allergen avoidance. Bacterial and viral conjunctivitis look similar but are managed differently.",
  },
  {
    title: "Amblyopia (Lazy Eye)",
    description:
      "Reduced visual acuity in one eye caused by the visual system failing to develop normal connections between that eye and the brain, typically due to strabismus, significant refractive error differences between the eyes, or deprivation in early childhood. Amblyopia is effectively treated with optical correction and patching, but the treatment window narrows significantly after age seven to eight as visual pathways mature. Early detection through pediatric eye exams is critical.",
  },
  {
    title: "Strabismus (Eye Turns)",
    description:
      "A condition where the eyes are not aligned (one or both eyes turn in, out, up, or down) either constantly or intermittently. Causes amblyopia if untreated in childhood, and causes double vision and disrupted depth perception in adults. Management includes glasses correction, prism lenses, vision therapy, and in some cases surgical referral.",
  },
];

// Common eye conditions FAQs. Plain-string answers.
export const commonEyeConditionsFaqs = [
  {
    id: 1,
    question: "Can eye conditions be prevented?",
    answer:
      "Many can be detected early enough to prevent serious vision loss, which is functionally as important as prevention. Glaucoma, diabetic retinopathy, and macular degeneration cause irreversible damage silently, and regular comprehensive eye exams are the only reliable way to catch them before vision is significantly affected.",
  },
  {
    id: 2,
    question:
      "How often should I have my eyes examined if I have a diagnosed eye condition?",
    answer:
      "It depends on the condition and its severity. Glaucoma suspects and patients with diabetic retinopathy typically require monitoring every three to six months. Stable dry AMD is typically monitored every six to twelve months. Your optometrist will recommend a monitoring schedule at every appointment based on current findings.",
  },
  {
    id: 3,
    question: "Does OHIP cover eye condition management?",
    answer:
      "OHIP covers annual comprehensive eye exams for patients under 20 and 65 and older. For adults between 20 and 64, OHIP covers assessments for specific medical conditions including diabetic eye disease, glaucoma, and certain other conditions when clinically indicated. Supplementary testing fees may apply for advanced imaging. Your optometrist will advise on what is covered at the time of booking.",
  },
  {
    id: 4,
    question: "Can an optometrist treat glaucoma?",
    answer:
      "Yes. Ontario optometrists are licensed to prescribe and manage glaucoma medications. They conduct the monitoring required to assess treatment response and disease progression, and coordinate referral to ophthalmology when surgical or laser intervention is needed.",
  },
  {
    id: 5,
    question: "I've been told I have drusen. Should I be concerned?",
    answer:
      "Drusen are deposits beneath the retinal pigment epithelium and are the hallmark early finding in dry AMD. Small drusen are very common and often benign. Larger or more numerous drusen indicate intermediate AMD and a higher risk of progression to advanced disease. Your optometrist will advise on the appropriate monitoring frequency and whether AREDS2 supplementation is recommended based on your specific findings.",
  },
  {
    id: 6,
    question: "My vision is fine, do I still need an eye exam?",
    answer:
      "Yes. Glaucoma, early diabetic retinopathy, and early macular degeneration all develop without noticeable vision changes. By the time vision is affected, significant damage has often already occurred. Annual eye exams detect these conditions at the stage when treatment is most effective.",
  },
];

export const eyeemergencyData = [
  {
    id: "01",
    icon: "/eyeemergencies/corneal.png",
    title: "Corneal Abrasions",
    description:
      "If you think you have a foreign object in your eye or a corneal abrasion, get medical help immediately.",
  },
  {
    id: "02",
    icon: "/eyeemergencies/chemical.png",
    title: "Chemical Burns",
    description:
      "In case of a chemical burn, wash your eyes with clear water and seek immediate medical attention.",
  },
  {
    id: "03",
    icon: "/eyeemergencies/penetrating.png",
    title: "Penetrating Foreign Objects",
    description: "If something gets in your eye, call us immediately.",
  },
  {
    id: "04",
    icon: "/eyeemergencies/sudden.png",
    title: "Sudden Inflammation and Eye Bleeding",
    description:
      "Signs of serious underlying issues requiring urgent attention..",
  },
];

// Eye emergencies triage lists. Items are { head, para? }: head renders bold.
export const eyeEmergencyTriage = {
  clinic: [
    { head: "Corneal abrasions (scratched eye)" },
    { head: "Foreign body in the eye", para: "eyelash, grit, small particles that haven't penetrated the eye." },
    { head: "Acute red eye", para: "sudden conjunctivitis, uveitis, or significant inflammation." },
    { head: "Subconjunctival haemorrhage", para: "red patch on the white of the eye." },
    { head: "Contact lens-related complications", para: "acute infection, stuck lens, significant discomfort." },
    { head: "Mild to moderate chemical splash", para: "after immediate flushing with water for at least 15 minutes." },
    { head: "New onset of floaters", para: "without flashing lights or vision loss." },
    { head: "Stye or eyelid abscess", para: "requiring assessment and treatment." },
    { head: "Sudden eye pain with a red eye", para: "possible iritis or anterior uveitis." },
    { head: "Suspected early pink eye", para: "that is rapidly worsening." },
  ],
  er: [
    { head: "Penetrating eye injury", para: "anything that has punctured or entered the eye itself." },
    { head: "Severe chemical burn", para: "particularly alkali products (bleach, oven cleaner, cement) which penetrate rapidly and require immediate irrigation and hospital management." },
    { head: "Sudden complete or near-complete vision loss", para: "in one or both eyes." },
    { head: "Eye injury following significant blunt force trauma" },
    { head: "Symptoms suggesting stroke alongside vision changes", para: "sudden facial drooping, arm weakness, speech difficulty." },
    { head: "Acute angle-closure glaucoma", para: "severe pain, nausea, vomiting, and halos around lights. Go to ER immediately; this is a time-critical emergency." },
    { head: "Retinal detachment", para: "advancing shadow or curtain across the visual field; requires same-day surgical evaluation." },
  ],
};

// Common eye emergencies. paragraphs and notes are strings or { head, para }
// (bold lead-in); lists are { heading, items }; action is the closing
// instruction.
export const eyeEmergencyConditions = [
  {
    id: "chemical-exposure",
    title: "Chemical Exposure",
    paragraphs: [
      "Chemical exposure to the eye, even from common household products, can cause serious damage. Alkali chemicals (bleach, ammonia, oven cleaners, cement) are particularly dangerous because they penetrate the corneal tissue rapidly, causing progressive damage long after the initial contact. Acid chemicals cause immediate pain but tend to be somewhat self-limiting as they coagulate corneal proteins. Both require urgent treatment.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "Burning or stinging sensation",
          "Redness and significant tearing",
          "Blurred vision",
          "Sensitivity to light",
          "Feeling that something is in the eye",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "Irrigate the eye immediately with large volumes of clean water or saline; hold the eye open under a running tap, use an eye wash station, or pour from a bottle. Continue flushing for a minimum of 15 to 20 minutes without stopping.",
          "Do not rub the eye",
          "Remove contact lenses if present and easy to remove; do not delay irrigation to do this",
          "After flushing, seek emergency eye care immediately; call 360 Eyecare or go to the nearest ER depending on the severity and the chemical involved",
        ],
      },
    ],
  },
  {
    id: "foreign-object",
    title: "Foreign Object in the Eye",
    paragraphs: [
      "Foreign bodies range from eyelashes and dust particles to metal shavings, glass fragments, and wood splinters, which can scratch the cornea, embed in the tissue, or penetrate the eye entirely. The distinction matters enormously for management.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "Persistent feeling of something in the eye that doesn't resolve with blinking",
          "Redness and tearing",
          "Pain or significant discomfort, particularly with blinking",
          "Blurred vision",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "Do not rub the eye; rubbing can embed a superficial particle into the corneal tissue or cause additional scratching.",
          "Try blinking rapidly or flushing with clean water or saline to dislodge a superficial particle.",
          "If the object doesn't flush out, if there is significant pain, or if you suspect the object may have penetrated the eye, do not attempt further removal. Cover the eye loosely and seek immediate care.",
          "For metal particles specifically: rust rings form rapidly on the cornea and require professional removal. Call 360 Eyecare as soon as possible.",
        ],
      },
    ],
  },
  {
    id: "corneal-abrasion",
    title: "Corneal Abrasion",
    paragraphs: [
      "A corneal abrasion is a scratch on the surface of the cornea. They're extremely common and extremely painful, caused by foreign objects, fingernails, contact lens edges, or even a forceful rub of the eye. Despite the significant discomfort, most corneal abrasions heal well with appropriate treatment.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "Sharp, significant eye pain, often described as a feeling of grit despite nothing being visible",
          "Sensitivity to light",
          "Tearing",
          "Redness",
          "Blurred vision",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "Do not rub the eye",
          "Keep the eye closed or covered with a clean, loose dressing if the pain is severe",
          "Remove contact lenses if wearing them",
          "Call 360 Eyecare. Corneal abrasions are the most common presentation we see for emergency appointments and are very effectively managed with antibiotic drops and appropriate pain management",
        ],
      },
    ],
  },
  {
    id: "sudden-vision-loss",
    title: "Sudden Vision Loss",
    paragraphs: [
      "Sudden vision loss, whether partial or complete, in one or both eyes, is a medical emergency until proven otherwise. The causes range from relatively benign (ocular migraine) to immediately sight-threatening (retinal artery occlusion, retinal detachment) to life-threatening (stroke). The only way to determine which is causing your symptoms is prompt professional assessment.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "Complete or partial loss of vision occurring suddenly",
          "Vision that appears blurred, distorted, or significantly changed from normal",
          "A grey or black area obscuring part of the visual field",
        ],
      },
      {
        heading: "Possible causes",
        items: [
          "Retinal detachment. Requires urgent surgical intervention",
          "Retinal artery or vein occlusion",
          "Optic neuritis",
          "Ischaemic optic neuropathy",
          "Stroke or TIA: seek emergency care immediately if other neurological symptoms are present",
        ],
      },
    ],
    action: {
      label: "Immediate action",
      text: "Call 360 Eyecare immediately or go directly to the nearest emergency room. Do not wait to see if vision returns. Time to treatment directly determines the visual outcome in most causes of sudden vision loss.",
    },
  },
  {
    id: "eye-trauma",
    title: "Eye Trauma",
    paragraphs: [
      "Eye trauma encompasses any physical injury to the eye or surrounding structures from a direct blow during sport or an accident, or a penetrating injury from a sharp object. The severity ranges enormously, and the appropriate response depends on the nature and mechanism of the injury.",
      {
        head: "Blunt force trauma",
        para: "can cause a subconjunctival haemorrhage (red patch on the white of the eye, usually benign), hyphaema (blood in the anterior chamber, requires urgent assessment), orbital fracture, or posterior segment damage including retinal tear or detachment.",
      },
      {
        head: "Penetrating trauma",
        para: "anything that has broken the integrity of the eye itself is a surgical emergency. Do not apply pressure. Do not remove the object if it is embedded. Stabilise the object if possible, cover the eye loosely without any pressure, and go directly to the nearest hospital emergency room.",
      },
    ],
    lists: [
      {
        heading: "Symptoms requiring immediate care",
        items: [
          "Pain and significant swelling around the eye",
          "Visible blood in or on the eye",
          "Any change in vision following trauma",
          "Double vision",
          "The eye appearing sunken or the eyelid structure visibly disrupted",
        ],
      },
      {
        heading: "Immediate actions",
        items: [
          "For blunt trauma: apply a cold compress to the surrounding area only, no direct pressure on the eye",
          "For penetrating trauma: stabilise, cover loosely, go to ER immediately",
          "For any trauma with vision change: seek immediate professional assessment. Call 360 Eyecare or go to the ER depending on severity",
        ],
      },
    ],
  },
  {
    id: "acute-angle-closure-glaucoma",
    title: "Acute Angle-Closure Glaucoma",
    paragraphs: [
      "Acute angle-closure glaucoma is a true ophthalmic emergency. Without treatment within hours, permanent and severe optic nerve damage can occur. It is characterised by a very specific cluster of symptoms that, once recognised, should prompt immediate action.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "Severe, sudden eye pain",
          "Headache, nausea, and vomiting alongside eye pain",
          "Sudden blurred vision",
          "Halos or rainbow-coloured rings around lights",
          "Redness of the eye",
          "The eye may feel hard to the touch",
        ],
      },
    ],
    action: {
      label: "Immediate action",
      text: "Go directly to the nearest hospital emergency room. This is not a condition to manage at home or wait for a clinic appointment. Intraocular pressure must be reduced urgently to prevent permanent vision loss. Call ahead while on the way so the emergency team is prepared.",
    },
  },
  {
    id: "retinal-detachment",
    title: "Retinal Detachment",
    paragraphs: [
      "Retinal detachment occurs when the retina separates from its underlying supportive tissue at the back of the eye. Once detached, the retina cannot function, and if the central retina (macula) detaches before surgical repair, the chances of recovering full central vision are significantly reduced. Retinal detachment is a surgical emergency.",
    ],
    lists: [
      {
        heading: "Symptoms",
        items: [
          "A sudden significant increase in floaters, especially many new floaters appearing at once",
          "Flashes of light, particularly in peripheral vision",
          "A shadow, curtain, or dark area spreading across part of the visual field — this is the retina detaching progressively",
          "Blurred vision",
        ],
      },
    ],
    notes: [
      {
        head: "Important distinction",
        para: "A small number of new floaters alongside flashes of light may indicate a posterior vitreous detachment (PVD), a common, usually benign age-related change where the gel inside the eye separates from the retina. PVD can occasionally cause a retinal tear, which can then progress to detachment. Any new onset of flashes and floaters should be assessed urgently to rule out this progression.",
      },
    ],
    action: {
      label: "Immediate action",
      text: "If you notice a curtain or shadow advancing across your vision, go directly to the nearest hospital emergency room with ophthalmology coverage. For new floaters and flashes without vision loss, call 360 Eyecare for an urgent same-day assessment.",
    },
  },
  {
    id: "severe-eye-pain",
    title: "Severe Eye Pain",
    paragraphs: [
      "Severe eye pain without an obvious cause is always worth urgent assessment. The differential diagnosis includes conditions that are rapidly treatable with no lasting consequences (corneal abrasion, iritis) and conditions that are time-critical emergencies (acute glaucoma, corneal ulcer, endophthalmitis). Severity of pain does not always predict severity of underlying condition; some serious conditions present with moderate pain and some minor conditions produce severe pain.",
    ],
    lists: [
      {
        heading: "Possible causes",
        items: [
          "Acute angle-closure glaucoma",
          "Corneal abrasion or ulcer",
          "Iritis or uveitis (inflammation inside the eye)",
          "Severe eye infection",
          "Foreign body that isn't immediately visible",
        ],
      },
    ],
    action: {
      label: "Immediate action",
      text: "Call 360 Eyecare. Describe your symptoms, including when the pain started, whether it's constant or intermittent, whether vision is affected, and whether you have any associated nausea, vomiting, or headache. Our team will advise whether you need an urgent appointment or emergency room assessment.",
    },
  },
  {
    id: "flashes-and-floaters",
    title: "Flashes of Light and Floaters",
    paragraphs: [
      "Floaters are extremely common and usually benign, caused by condensations in the vitreous gel inside the eye. Flashes of light in peripheral vision are caused by the vitreous pulling on the retina. Individually and in small numbers, these symptoms are usually not urgent.",
      "The concern arises with sudden onset, many new floaters appearing at once, floaters accompanied by persistent flashing lights, or any associated shadow or curtain in the visual field. This combination can indicate a retinal tear or early detachment requiring same-day assessment.",
    ],
    lists: [
      {
        heading: "Symptoms requiring urgent assessment",
        items: [
          "A sudden significant increase in floaters — more than a few appearing at once",
          "Persistent flashing lights in peripheral vision, particularly in one eye",
          "Any shadow, curtain, or dark area in the visual field alongside flashes or floaters",
          "Floaters following eye trauma",
        ],
      },
    ],
    action: {
      label: "Action",
      text: "Call 360 Eyecare for an urgent same-day assessment. Do not wait to see if symptoms resolve. Retinal tears are most effectively treated before they progress to detachment.",
    },
  },
];

export const eyeEmergencyBring = [
  "Your OHIP card",
  "Any current glasses or contact lenses",
  "If chemical exposure occurred: the product label or container if safely accessible — this helps identify the chemical and guide treatment",
  "A list of any current medications, particularly blood thinners or eye drops",
];

export const eyeEmergencyAvoid = [
  "Do not rub the eye",
  "Do not apply any drops, ointments, or home remedies unless advised by a medical professional",
  "Do not attempt to remove an embedded object",
  "Do not drive if your vision is significantly affected",
];

// Eye emergency FAQs. Plain-string answers (also used for JSON-LD).
export const eyeEmergencyFaqs = [
  {
    id: 1,
    question: "Are you open for eye emergencies?",
    answer:
      "Both 360 Eyecare locations offer same-day emergency appointments during clinic hours. Call us as soon as possible — Yorkville at 416-901-2725 and The Beaches at 416-698-3937. Outside clinic hours, go to your nearest hospital emergency room with ophthalmology coverage.",
  },
  {
    id: 2,
    question: "Do I need an appointment for an eye emergency?",
    answer:
      "Call us first rather than walking in. This allows us to prepare for your visit and assess urgency over the phone. Same-day appointments are prioritised for emergency presentations.",
  },
  {
    id: 3,
    question: "Should I go to the ER or call 360 Eyecare?",
    answer:
      "Call 360 Eyecare for: corneal abrasions, foreign bodies, acute red eye, contact lens complications, new floaters without vision loss, and sudden eye pain with a red eye. Go directly to the ER for: penetrating injuries, severe chemical burns, sudden complete vision loss, symptoms of stroke, acute angle-closure glaucoma, and a curtain or shadow advancing across your visual field. If you're unsure, call us; we'll direct you appropriately.",
  },
  {
    id: 4,
    question: "Is an emergency eye exam covered by OHIP?",
    answer:
      "Yes, urgent and emergency eye examinations are covered by OHIP for eligible patients (under 20 and 65 and older). For adults between 20 and 64, emergency eye exams may not be covered under routine OHIP funding.",
  },
  {
    id: 5,
    question: "What eye emergencies can an optometrist treat?",
    answer:
      "Ontario optometrists are licensed to diagnose and treat a wide range of urgent eye conditions, including corneal abrasions, foreign body removal, acute conjunctivitis, iritis and uveitis, subconjunctival haemorrhage, contact lens-related infections, and early assessment of flashes and floaters. Conditions requiring surgery or hospital-level intervention are managed through immediate referral.",
  },
  {
    id: 6,
    question:
      "My eye has been red and uncomfortable for a day is that an emergency?",
    answer:
      "It warrants assessment rather than waiting to see if it resolves. Red eye with significant pain, vision change, or light sensitivity should be assessed the same day. Red eye with mild discomfort and no vision change can typically be assessed within 24 to 48 hours. Call us and describe your symptoms; we'll advise on the appropriate urgency.",
  },
];

export const selectionGuideData = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Face Shape",
    description:
      "Consider your face shape for flattering frames. Match frames to complement your face shape for stylish looks.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Color and Style",
    description:
      "Choose colors and styles that suit your personality. Select frames that reflect your style and enhance your features.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Comfort and Fit",
    description:
      "Ensure frames fit comfortably for daily wear. Check for proper fit to avoid discomfort and ensure clarity.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Lens Options",
    description:
      "Explore lens types for your vision needs. Discuss lens options with our optician for optimal vision correction.",
  },
];
export const laservisiondata = [
  {
    id: "01",
    icon: "/laser/lasik.png",
    title: "LASIK Eye Surgery",
    description:
      "Refractive surgery to correct vision problems like nearsightedness and astigmatism.",
  },
  {
    id: "02",
    icon: "/laser/prk.png",
    title: "PRK Vision Correction",
    description:
      "Similar to LASIK but does not involve creating a corneal flap.",
  },
  {
    id: "03",
    icon: "/laser/bladeless.png",
    title: "Bladeless Laser Surgery",
    description:
      "Advanced technology for precise and blade-free laser vision correction.",
  },
  {
    id: "04",
    icon: "/laser/wavefront.png",
    title: "Custom Wavefront LASIK",
    description:
      "Personalized treatment that maps the unique characteristics of your eyes.",
  },
];
export const pediatricEyeData = [
  {
    id: "01",
    icon: "/pediatric/vision.png",
    title: "Vision Care",
    description: "Comprehensive eye care services for children of all ages.",
  },
  {
    id: "02",
    icon: "/pediatric/myopio.png",
    title: "Myopia Control",
    description:
      "Specialized treatments to slow down the progression of nearsightedness.",
  },
  {
    id: "03",
    icon: "/pediatric/eyeExam.png",
    title: "Eye Exams",
    description:
      "Regular eye exams to monitor and maintain your child’s vision health.",
  },
  {
    id: "04",
    icon: "/pediatric/eyeglasses.png",
    title: "Eyeglasses & Contacts",
    description: "Stylish eyeglasses and comfy contact lenses for kids.",
  },
];

// Laser vision correction procedures shown as tabs on the laser vision page.
// paragraphs → description; recovery and bestFor → labelled lines under it.
export const laservisionService = [
  {
    label: "PRK",
    icon: "/laser/prk.png",
    image: prkImage,
    title: "PRK — Photorefractive Keratectomy",
    paragraphs: [
      "PRK is the original laser vision correction procedure, predating LASIK by several years, and remains the gold standard for patients with thin corneas, certain corneal irregularities, or high-risk lifestyles where a corneal flap could be a concern.",
      "In PRK, the epithelium (the outermost cellular layer of the cornea) is gently removed, and an excimer laser reshapes the underlying corneal stroma directly. The epithelium regenerates naturally over three to five days following surgery. There is no corneal flap, which eliminates flap-related complications and makes PRK the preferred choice for patients involved in contact sports, combat roles, or other activities where a direct blow to the eye is a realistic risk.",
    ],
    recovery:
      "Slower than LASIK, most patients experience discomfort and reduced visual clarity for three to seven days as the epithelium heals. Full visual stabilisation typically takes four to six weeks, though many patients are functional within a week.",
    bestFor:
      "Patients with thin corneas; patients whose topography shows borderline findings that make LASIK less appropriate; patients in high-risk physical occupations or contact sports; patients with lower prescriptions where the ablation depth required for LASIK would leave insufficient stromal bed thickness.",
  },
  {
    label: "LASIK",
    icon: "/laser/lasik.png",
    image: lasikImage,
    title: "LASIK — Laser-Assisted In Situ Keratomileusis",
    paragraphs: [
      "LASIK is the most commonly performed refractive surgery globally. A thin corneal flap is created, and the flap is lifted to allow excimer laser reshaping of the stromal bed underneath. The flap is then repositioned, adhering without sutures through natural corneal adhesion.",
      "The key advantage of LASIK over PRK is recovery speed. The corneal epithelium is preserved under the flap, so healing is faster and discomfort is significantly less. Most LASIK patients achieve functional vision within 24 to 48 hours.",
    ],
    recovery:
      "Most patients are functional within one to two days, with stable vision typically achieved within two to four weeks. Some patients notice halos or glare at night in the early weeks of recovery, which typically resolves as healing progresses.",
    bestFor:
      "Patients with adequate corneal thickness, normal topography, and prescriptions within the treatable range who want the fastest recovery and are not in high-risk physical environments where flap integrity could be compromised.",
  },
  {
    label: "SMILE",
    icon: "/laser/bladeless.png",
    image: smileImage,
    title: "SMILE — Small Incision Lenticule Extraction",
    paragraphs: [
      "SMILE is the newest generation of laser vision correction and the only flapless, all-laser procedure currently available. A femtosecond laser creates a small disc of corneal tissue inside the intact cornea, which is then extracted through a small incision without creating a corneal flap. The cornea is reshaped by the removal of this tissue disc.",
      "SMILE avoids both the flap complications of LASIK and the epithelial removal of PRK. Corneal nerves are less disrupted than in LASIK, which may reduce the severity and duration of post-operative dry eye, a meaningful advantage for patients with borderline pre-operative tear film health.",
    ],
    recovery:
      "Intermediate between PRK and LASIK. Most patients achieve functional vision within one to three days, with full stabilisation over four to six weeks.",
    bestFor:
      "Patients with mild to moderate myopia (currently approved for myopia and myopic astigmatism, not hyperopia); patients concerned about flap integrity; patients with borderline dry eye who are otherwise suitable candidates; patients seeking the most technologically current option.",
  },
];

// What the laser vision candidacy assessment evaluates
export const laserCandidacyFactors = [
  {
    title: "Prescription Range",
    description:
      "Laser vision correction can address myopia, hyperopia, and astigmatism within certain ranges. LASIK and SMILE are most effective for myopia up to approximately -8.00D to -10.00D depending on corneal thickness; PRK has a similar range but may be preferred for lower prescriptions or thinner corneas. Hyperopia correction is possible up to approximately +4.00D to +6.00D. Prescriptions outside these ranges, or prescriptions that are still changing year-on-year, may not be appropriate for laser correction at the current time.",
  },
  {
    title: "Prescription Stability",
    description:
      "Laser correction produces a permanent change to the corneal shape ideally matched to a stable prescription. Candidates should have had a stable prescription for at least one to two years before surgery. This is relevant for younger patients whose myopia may still be progressing; proceeding with surgery while the prescription is changing produces a result that may not remain accurate as the eye continues to change.",
  },
  {
    title: "Corneal Thickness and Shape",
    description:
      "The laser removes corneal tissue to reshape the refractive surface. Pachymetry measurement determines whether sufficient tissue exists for the planned ablation depth. Corneal topography screens for keratoconus and other corneal irregularities. Subclinical keratoconus that appears normal on basic examination can be detected on topography, which is why this test is essential before any refractive surgery recommendation.",
  },
  {
    title: "Tear Film and Dry Eye",
    description:
      "Laser surgery temporarily disrupts corneal nerve fibres, reducing corneal sensation and reflexive tear production for weeks to months post-operatively. Patients with pre-existing significant dry eye are at higher risk of severe post-operative dry eye that can affect visual quality and recovery comfort. Tear film assessment, including Keratograph 5M tear film analysis and i-PEN osmolarity testing, is part of the pre-surgical evaluation at 360 Eyecare, and significant dry eye may need to be treated before proceeding with surgery.",
  },
  {
    title: "Age and General Health",
    description:
      "Most refractive surgeons recommend waiting until at least age 18 to 21, when the cornea and prescription have typically reached adult stability. For patients over 40, the natural development of presbyopia needs to be factored into the surgical plan, as distance-only laser correction will still require reading glasses for near work. Certain systemic conditions, medications, and autoimmune conditions are contraindications for laser surgery and will be identified during the pre-surgical health review.",
  },
];

export const laserNotCandidates = [
  "Patients with keratoconus or irregular corneal topography",
  "Patients with inadequate corneal thickness for the planned ablation",
  "Patients with significant uncontrolled dry eye disease",
  "Patients with unstable, still-progressing prescriptions",
  "Patients with certain systemic or autoimmune conditions",
  "Patients who are pregnant or breastfeeding",
  "Patients with unrealistic expectations about surgical outcomes",
];

// Co-management steps, from consultation through post-operative care
export const laserCoManagementSteps = [
  {
    title: "Pre-surgical consultation",
    paragraphs: [
      "Your first appointment is a comprehensive candidacy assessment, which typically takes 60 to 90 minutes. It includes corneal topography, pachymetry, tear film assessment with the Keratograph 5M and i-PEN osmolarity testing, a full refractive assessment, and a complete ocular health evaluation. At the end of the appointment, your optometrist will give you a clear assessment of your candidacy, discuss which procedure, if any, is appropriate for your situation, and answer any questions you have before you make any decision.",
      "If you're a suitable candidate and decide to proceed, your optometrist coordinates the referral to a refractive surgeon and communicates your clinical findings and assessment. You'll receive a detailed summary of your pre-surgical measurements.",
    ],
  },
  {
    title: "Pre-operative preparation",
    paragraphs: [
      "Contact lens wearers must discontinue lens wear before surgery. Soft lenses typically two weeks before; rigid gas-permeable lenses four to six weeks or longer, as the cornea needs time to return to its natural shape before accurate measurements can be taken. Your optometrist will advise you on the specific timeline based on your lens type and wearing history.",
      "If dry eye is identified during the pre-surgical assessment, a course of treatment may be recommended before surgery to optimise the ocular surface and reduce the risk of post-operative dry eye.",
    ],
  },
  {
    title: "Surgery",
    paragraphs: [
      "The surgical procedure is performed at the refractive surgery centre by the ophthalmologist. 360 Eyecare optometrists do not perform laser surgery. Most procedures take 15 to 30 minutes for both eyes combined.",
    ],
  },
  {
    title: "Post-operative care",
    paragraphs: [
      "Post-operative follow-up begins the day after surgery and continues over the following weeks and months. Visits are typically scheduled at one day, one week, one month, and three months post-operatively, with additional visits if there are any concerns about healing or refractive outcome.",
      "At each post-operative visit at 360 Eyecare, your optometrist assesses visual acuity and refraction, examines the corneal surface and the flap, manages any post-operative dry eye symptoms, and monitors your healing trajectory. If the refractive outcome at the three-month assessment is not within the expected range, your optometrist will discuss enhancement candidacy with the surgical team.",
    ],
  },
];

// Laser vision correction FAQs. Plain-string answers (also used for JSON-LD).
export const laserVisionFaqs = [
  {
    id: 1,
    question: "Does 360 Eyecare perform laser eye surgery?",
    answer:
      "No, 360 Eyecare optometrists provide laser vision correction co-management instead. It is the pre-surgical candidacy assessment and post-operative care surrounding the procedure. The surgery itself is performed by a refractive ophthalmologist at a surgical facility. We coordinate the referral and manage your care before and after.",
  },
  {
    id: 2,
    question: "What's the difference between LASIK, PRK, and SMILE?",
    answer:
      "All three use laser technology to reshape the cornea and correct refractive errors. LASIK creates a corneal flap for faster recovery. PRK removes the epithelium, resulting in slower recovery but no flap, making it preferable for thin corneas and high-risk lifestyles. SMILE is the newest option, which is flapless and all-laser, with the smallest incision and potentially less post-operative dry eye. Your optometrist will advise which is most appropriate for your situation.",
  },
  {
    id: 3,
    question: "How do I know if I'm a candidate for laser vision correction?",
    answer:
      "A pre-surgical candidacy assessment determines this. Not everyone is a candidate; conditions like keratoconus, thin corneas, significant dry eye, and unstable prescriptions are contraindications. The assessment at 360 Eyecare gives you an honest, independent answer.",
  },
  {
    id: 4,
    question:
      "How long do I need to stop wearing contact lenses before the assessment?",
    answer:
      "Soft contact lens wearers should discontinue lens wear for at least two weeks before the pre-surgical assessment. Rigid gas-permeable lens wearers typically need four to six weeks or longer. The cornea needs time to return to its natural shape before accurate topography and pachymetry measurements can be taken.",
  },
  {
    id: 5,
    question: "Will I still need glasses after laser vision correction?",
    answer:
      "Most patients achieve 20/20 or better without glasses for distance following laser correction. However, patients over 40 will typically still need reading glasses for near work as presbyopia develops, regardless of laser surgery. Some patients opt for monovision correction (one eye optimised for distance and one for near), which reduces reading glass dependence. Your optometrist will discuss realistic expectations for your specific situation.",
  },
  {
    id: 6,
    question: "How long does post-operative care last?",
    answer:
      "Standard post-operative monitoring visits are scheduled at one day, one week, one month, and three months after surgery. Most patients are discharged from active post-operative care at the three-month visit once the refractive outcome has stabilised. Annual comprehensive eye exams continue as normal thereafter.",
  },
  {
    id: 7,
    question: "Is laser vision correction covered by OHIP or insurance?",
    answer:
      "No. Laser vision correction is an elective procedure and is not covered by OHIP. Some extended health benefit plans include partial coverage for refractive surgery; check your plan.",
  },
];

// Diagnostic tools shown as tabs on the advanced diagnostics page.
// paragraphs → intro copy; points (optional) → bullets, either plain strings
// or { head, para } with a bold lead-in; closing (optional) → copy after them.
export const advanceddiagnosticsService = [
  {
    label: "OCT Scans",
    icon: "/advanceddiagnosis/oct.png",
    image: OCTScanImage,
    title: "Optical Coherence Tomography (OCT)",
    paragraphs: [
      "OCT is the most significant technological advancement in optometry in a generation. It produces cross-sectional images of the retinal layers at a microscopic level using light waves rather than radiation, without any contact with the eye. Think of it as an ultrasound for the eye, but with far greater resolution.",
      "At 360 Eyecare, OCT is used to:",
    ],
    points: [
      {
        head: "Detect and monitor glaucoma",
        para: "measuring the thickness of the retinal nerve fibre layer around the optic nerve with micrometre precision, detecting thinning that indicates glaucoma-related nerve damage years before visual field loss becomes measurable.",
      },
      {
        head: "Assess macular health",
        para: "imaging the individual cellular layers of the macula to detect macular degeneration, epiretinal membranes, macular holes, and cystoid macular oedema.",
      },
      {
        head: "Monitor diabetic retinopathy",
        para: "detecting and quantifying retinal oedema and structural changes associated with diabetic eye disease.",
      },
      {
        head: "Evaluate the optic nerve",
        para: "assessing cup-to-disc ratio and nerve head topography for glaucoma risk stratification.",
      },
      {
        head: "Assess corneal and anterior segment structures",
        para: "anterior segment OCT can image the corneal layers, angle anatomy, and anterior chamber in detail relevant to glaucoma, corneal disease, and surgical planning.",
      },
    ],
    closing: [
      "The non-invasive nature of OCT means it can be repeated at every exam, creating a longitudinal structural record that makes change detectable at the earliest possible stage rather than waiting for it to become clinically apparent.",
    ],
  },
  {
    label: "Retinal Imaging",
    icon: "/advanceddiagnosis/retinal.png",
    image: RetinalImage,
    title: "Digital Retinal Imaging",
    paragraphs: [
      "High-resolution digital photography of the posterior structures captured without requiring pupil dilation in most cases. Retinal images serve two distinct clinical functions: immediate assessment of the current health of posterior structures, and a documented photographic baseline against which future exams can be compared.",
      "At 360 Eyecare, retinal images are taken at every comprehensive exam and provided to patients for their own records. The ability to compare current retinal photographs with images from previous years is what makes subtle changes visible at a stage when intervention is still effective.",
      "Conditions detected through retinal imaging include: diabetic retinopathy, hypertensive retinopathy, age-related macular degeneration, retinal vein occlusion, glaucoma, retinal detachment risk factors, optic nerve abnormalities, and in some cases systemic conditions including multiple sclerosis and certain intracranial pathologies that produce visible changes at the optic nerve head.",
    ],
  },
  {
    label: "Corneal Topography",
    icon: "/advanceddiagnosis/corneal.png",
    image: cornealImage,
    title: "Corneal Topography",
    paragraphs: [
      "Corneal topography produces a detailed, colour-coded map of the corneal surface curvature, measuring thousands of points across the cornea to produce a three-dimensional profile of its shape. It is the primary diagnostic tool for keratoconus and other corneal ectasias, and is essential for contact lens fitting, particularly Ortho-K and scleral lens design.",
      "At 360 Eyecare, corneal topography is used for:",
    ],
    points: [
      {
        head: "Keratoconus screening and monitoring",
        para: "detecting the irregular corneal steepening and thinning that characterises keratoconus, often before it produces noticeable visual symptoms. Early detection allows intervention before significant corneal distortion occurs.",
      },
      {
        head: "Ortho-K lens design",
        para: "the topography map is the primary data input for custom Ortho-K lens fabrication, and is measured at every Ortho-K monitoring visit to assess the reshaping response.",
      },
      {
        head: "Contact lens fitting",
        para: "assessing corneal shape for standard and specialty lens fitting, including scleral lenses for irregular corneas.",
      },
      {
        head: "Pre-surgical screening",
        para: "identifying candidates unsuitable for LASIK or other refractive surgery due to subclinical keratoconus or corneal irregularity.",
      },
    ],
  },
  {
    label: "Meibography",
    icon: "/advanceddiagnosis/meibography.png",
    image: MeibographyImage,
    title: "Meibography — OCULUS Keratograph 5M",
    paragraphs: [
      "Meibography uses infrared imaging to visualise the structure and function of the meibomian glands in the upper and lower eyelids. It is the only diagnostic method that allows direct assessment of gland integrity without any invasive procedure.",
      "At 360 Eyecare, meibography is performed using the OCULUS Keratograph 5M, the most advanced dry eye imaging system available in community optometry. The Keratograph simultaneously provides:",
    ],
    points: [
      "Infrared meibography of upper and lower lid glands.",
      {
        head: "Non-invasive tear breakup time (NIKBUT)",
        para: "objective tear film stability measurement without dye.",
      },
      {
        head: "Tear meniscus height measurement",
        para: "assessing the aqueous tear reservoir.",
      },
      {
        head: "Lipid layer assessment",
        para: "evaluating the oily outer tear film layer.",
      },
      {
        head: "Standardised bulbar redness grading",
        para: "objective ocular surface inflammation measurement.",
      },
    ],
    closing: [
      "Meibography findings directly determine treatment decisions for dry eye and MGD, distinguishing patients who will respond to warm compresses and drops from those who need in-office interventions like IPL or RF, and establishing baseline gland structure against which treatment response is measured at follow-up.",
    ],
  },
  {
    label: "Tear Osmolarity Testing",
    icon: "/advanceddiagnosis/tear.png",
    image: TearOsmolarityImage,
    title: "Tear Osmolarity Testing — i-PEN",
    paragraphs: [
      "Tear osmolarity is the most sensitive and specific objective biomarker for dry eye disease currently available. Elevated osmolarity confirms tear film instability and correlates with disease severity.",
      "The i-PEN osmolarity system measures tear osmolarity in seconds with a brief, painless touch of a sterile sensor tip to the lower lid margin. At 360 Eyecare, osmolarity testing is standard at every dry eye assessment and at follow-up appointments during dry eye treatment, providing an objective, numerical measure of treatment response that doesn't rely solely on symptom reports.",
    ],
  },
  {
    label: "Perimetry & the Zeiss Humphrey",
    icon: "/advanceddiagnosis/perimetry.png",
    image: PerimetryImage,
    title: "Perimetry — Zeiss Humphrey Visual Field Analyser",
    paragraphs: [
      "Automated perimetry maps the full extent of the visual field, identifying any areas of reduced sensitivity or blind spots that may indicate glaucomatous damage, neurological pathology, or other conditions affecting the visual pathway. The Zeiss Humphrey Field Analyser is the clinical gold standard for perimetry; its SITA testing algorithms minimise test time while maximising sensitivity and reliability.",
      "At 360 Eyecare, visual field testing is performed when clinically indicated for glaucoma suspects and monitoring, for patients with elevated intraocular pressure, for neurological concerns, and for any patient presenting with symptoms of peripheral vision loss. The Humphrey printout produces a standardised, documented record that can be compared between visits to detect progression.",
    ],
  },
];

// Diagnostic tools without a tab image, shown as cards under the tabs
export const advanceddiagnosticsMoreTools = [
  {
    title: "Pachymetry — Corneal Thickness Measurement",
    icon: <FaDiagnoses className="text-combination-100" size={32} />,
    paragraphs: [
      "Pachymetry measures the thickness of the cornea at multiple points across its surface. Corneal thickness is clinically significant in two primary contexts: glaucoma risk assessment (thin corneas are associated with higher risk of glaucomatous damage and can cause intraocular pressure readings to be underestimated), and refractive surgery candidacy (minimum corneal thickness thresholds must be met for safe LASIK or PRK).",
      "At 360 Eyecare, pachymetry findings are integrated with intraocular pressure measurements and OCT optic nerve data to produce a comprehensive glaucoma risk profile rather than treating any single measurement in isolation.",
    ],
  },
  {
    title: "Auto Refraction",
    icon: <MdVisibility className="text-combination-100" size={32} />,
    paragraphs: [
      "The autorefractor provides an objective baseline measurement of refractive error before the subjective phoropter examination. The patient looks into the device at a small target image while it automatically measures how light focuses on the retina, producing an objective starting prescription that significantly narrows the range the optometrist needs to test manually. This makes the subjective refraction faster, more precise, and more reliable, particularly for patients with complex prescriptions or those who find the \"which is better\" comparisons difficult to judge.",
    ],
  },
];

// Advanced diagnostics FAQs. Plain-string answers (also used for JSON-LD).
export const advancedDiagnosticsFaqs = [
  {
    id: 1,
    question: "What is an OCT scan and do I need one?",
    answer:
      "OCT (Optical Coherence Tomography) produces microscopic cross-sectional images of the retinal layers and optic nerve. It's the most sensitive tool available for early detection of glaucoma, macular degeneration, and diabetic retinopathy.",
  },
  {
    id: 2,
    question: "Is the OCT scan covered by OHIP?",
    answer:
      "The comprehensive eye exam is OHIP-covered for patients under 20 and 65 and older. OCT scanning as a supplementary test may involve an additional fee for adults between 20 and 64. Your optometrist will advise you in advance if additional testing fees apply to your appointment.",
  },
  {
    id: 3,
    question: "What is corneal topography used for?",
    answer:
      "Corneal topography maps the curvature of the corneal surface in detail. It's used to screen for keratoconus, design custom Ortho-K and scleral lenses, assess candidates for refractive surgery, and monitor corneal health in contact lens wearers.",
  },
  {
    id: 4,
    question: "What does the Keratograph 5M do?",
    answer:
      "The OCULUS Keratograph 5M is an advanced corneal imaging system used primarily for dry eye assessment. It measures tear film stability, images the meibomian glands with infrared light, assesses the oily tear film layer, and measures the tear reservoir along the lower lid, providing a comprehensive picture of dry eye type and severity without drops or dye.",
  },
  {
    id: 5,
    question: "What is tear osmolarity testing?",
    answer:
      "Tear osmolarity measures the concentration of the tear film. The i-PEN device used at 360 Eyecare measures it in seconds with a painless touch to the lower lid. Elevated osmolarity confirms dry eye and helps track whether treatment is working.",
  },
  {
    id: 6,
    question: "What is a visual field test?",
    answer:
      "A visual field test maps the full extent of your peripheral vision. It's used to screen for glaucoma, detect neurological conditions affecting the visual pathway, and monitor any patient with known visual field loss. The Zeiss Humphrey Field Analyser used at 360 Eyecare is the clinical gold standard for this test.",
  },
  {
    id: 7,
    question: "Do I need to have my pupils dilated for these tests?",
    answer:
      "Not for most of them. OCT, corneal topography, meibography, and retinal imaging can all be performed without dilation in the majority of patients. Dilation may be recommended for a more thorough posterior segment examination in certain clinical situations. Your optometrist will advise you if this applies to your appointment.",
  },
];

export const pediatricEyeService = [
  {
    label: "Vision Therapy",
    icon: "/homeIcons/EFP.png",
    image: VisionThreapImage,
    title: "Vision Therapy",
    description:
      "Vision therapy is a structured, evidence-based treatment program for visual conditions that can't be corrected with glasses or contact lenses alone, including amblyopia (lazy eye), strabismus (eye turns), convergence insufficiency, accommodative disorders, and certain visual processing difficulties. Programs are customised to each child's specific condition and typically involve a combination of in-office sessions and at-home exercises. Vision therapy helps children develop the visual skills their eyes lack, improving reading comfort, academic performance, and overall quality of life in ways that optical correction alone doesn't achieve.",
  },

  {
    label: "Myopia Control",
    icon: "/homeIcons/MYO.png",
    image: MyopiaPediaImage,
    title: "Myopia Control",
    description:
      "Myopia is the most rapidly increasing vision condition in school-age children, and the rate of progression during the development years directly determines the lifetime prescription and associated health risks your child carries into adulthood. At 360 Eyecare, myopia control programs include specialised spectacle lenses (MiyoSmart, MyoCare), orthokeratology (Ortho-K), MiSight soft contact lenses, and low-dose atropine.",
    // Optional "read more" link rendered under the description by PediatricSlider
    link: {
      href: "/myopia-control-clinic/",
      label: "Full details on the Myopia Control page",
    },
  },
  {
    label: "Pediatric Eye Exams",
    icon: "/homeIcons/PED.png",
    image: PediatricEyeImage,
    title: "Comprehensive Pediatric Eye Exams",
    description:
      "Annual comprehensive eye exams structured specifically for children covering visual acuity, refractive status, binocular vision, ocular health, and developmental appropriateness. OHIP-covered for all patients under 20.",
  },
  {
    label: "Contact Lens Fitting",
    icon: "/homeIcons/contactlens.png",
    image: ContactLenspediaImage,
    title: "Contact Lens Fitting for Children",
    description:
      "Contact lenses are appropriate for many children from around age 10 to 12 depending on maturity and motivation. We fit daily disposable soft lenses for general vision correction and myopia control (MiSight), as well as orthokeratology lenses for overnight wear. Every contact lens fitting includes thorough training in insertion, removal, and care to ensure your child is confident and safe before lenses are dispensed.",
  },
  {
    label: "Sports Vision",
    icon: "/homeIcons/mypio.png",
    image: SportsVisionImage,
    title: "Sports Vision",
    description:
      "Children involved in competitive sports benefit from optimised vision that goes beyond basic distance correction. Sports vision assessment evaluates dynamic visual acuity, eye-hand coordination, depth perception, peripheral awareness, and reaction time. Contact lens options, sports-specific eyewear, and protective eyewear recommendations are available for young athletes at both locations.",
  },
];

// Pediatric eye exam FAQs. The "Q. " prefix is display-only; the page strips
// it when building the FAQPage JSON-LD.
export const faqDatapediatric = [
  {
    id: 1,
    question: "Q. At what age should my child have their first eye exam?",
    answer:
      "Between six and nine months of age. Early assessment detects conditions like strabismus and amblyopia during the window when treatment is most effective. The Canadian Association of Optometrists recommends exams at 6 to 9 months, age 2 to 5, and annually from school age.",
  },
  {
    id: 2,
    question:
      "Q. What are common signs that my child may have a vision problem?",
    answer:
      "Squinting, sitting unusually close to screens or boards, avoiding reading, losing their place frequently while reading, tilting the head to one side, covering one eye, frequent eye rubbing, headaches after school, and eyes that appear misaligned are all signs worth investigating. Children rarely self-report vision problems. These behavioural signs are often the only indication something is wrong.",
  },
  {
    id: 3,
    question: "Q. Can my child wear contact lenses?",
    answer:
      "Yes, from around age 10 to 12 depending on maturity and motivation. Daily disposable lenses are the preferred option for children. They are simple to care for, hygienic, and available in myopia control options including MiSight. Orthokeratology lenses worn overnight are another option for appropriate candidates. Your optometrist will assess readiness at the appointment.",
  },
  {
    id: 4,
    question: "Q. How can I protect my child's eyes during sports?",
    answer:
      "Polycarbonate lenses are the standard recommendation for sports eyewear. They are impact-resistant and significantly stronger than standard lens materials. Sport-specific frames with secure fits are available at both 360 Eyecare locations.",
  },
  {
    id: 5,
    question: "Q. What is vision therapy and how can it help my child?",
    answer:
      "Vision therapy is a structured treatment program for visual conditions that glasses can't fix, including amblyopia, strabismus, convergence insufficiency, and accommodative disorders. Programs are individualised to each child's condition and typically involve weekly in-office sessions alongside daily home exercises.",
  },
  {
    id: 6,
    question: "Q. Is my child's eye exam covered by OHIP?",
    answer:
      "Yes, one comprehensive eye exam per year is fully covered by OHIP for all children and youth under 20 in Ontario. Bring your child's OHIP card to the appointment and we direct-bill on your behalf.",
  },
  {
    id: 7,
    question: "Q. How long does a pediatric eye exam take?",
    answer:
      "For a first appointment, allow 45 to 60 minutes, particularly for younger children where the exam may need to be paced around the child's attention and cooperation. Follow-up appointments for established patients are typically 30 to 45 minutes. If dilation drops are used, allow additional time for the pupil to return to normal before driving.",
  },
  {
    id: 8,
    question:
      "Q. My child's school did a vision screening. Do they still need an eye exam?",
    answer:
      "Yes. School vision screenings check basic distance visual acuity only. They miss the majority of binocular vision disorders, focusing problems, and conditions affecting reading and learning that a comprehensive eye exam would detect. A passed school screening does not mean your child's vision is healthy. It means their distance acuity on that day met a basic threshold.",
  },
];

export const Orthokeratology = [
  {
    id: "01",
    icon: "/eyecare/persistent.png",
    title: "Non-Surgical and Fully Reversible",
    description:
      "Unlike LASIK and other refractive surgeries, Ortho-K produces no permanent change to corneal structure. The reshaping effect is temporary, maintained by nightly lens wear and reversible within one to two days of discontinuation as the corneal epithelium returns to its original profile. This makes Ortho-K an ideal option for patients who want the functional benefits of surgical vision correction without the permanence or surgical risk, and for children whose prescriptions are still changing and for whom surgery is not yet appropriate or available. If your prescription changes, the lenses can be updated. If you decide to stop, your cornea returns to exactly where it started.",
  },
  {
    id: "02",
    icon: "/eyecare/complications.png",
    title: "Freedom from Daytime Eyewear",
    description:
      "Ortho-K eliminates the need for glasses or daytime contact lenses during waking hours, providing a quality of visual freedom that typically requires refractive surgery to achieve any other way. For active patients, this is transformative: swimmers don't need prescription goggles, contact sport athletes don't risk lens displacement or glasses damage, and outdoor enthusiasts don't contend with lenses drying out in wind or glasses fogging in temperature changes. For children in Toronto who swim competitively, play hockey, or are involved in year-round sport, Ortho-K removes the daily friction of managing eyewear around physical activity in a way that no other myopia control treatment does.",
  },
  {
    id: "03",
    icon: "/homeIcons/doctorwithbp.png",
    title: "Slows Myopia Progression in Children",
    description:
      "Beyond its vision correction function, Ortho-K is one of the most effective myopia control treatments available. The peripheral defocus pattern created by the reshaped cornea inhibits the retinal signal that drives axial elongation, producing 40 to 60 percent reduction in myopia progression compared to standard single-vision correction in clinical trials. For a child currently progressing at -0.50D per year, this difference compounds significantly over the six to ten years of the typical active progression period, potentially resulting in a final prescription that is two to three dioptres lower than it would have been with standard correction alone. Lower final prescription means meaningfully lower lifetime risk of glaucoma, retinal detachment, macular degeneration, and cataract.",
  },
  {
    id: "04",
    icon: "/homeIcons/vision.png",
    title: "Comfort and Convenience",
    description:
      "For patients who find daytime contact lenses uncomfortable due to dry eye, long screen hours, air-conditioned environments, or simply the fatigue of extended lens wear, Ortho-K removes the discomfort entirely. Lenses are worn during sleep, when comfort during wear is irrelevant. Waking hours are lens-free. For patients who've struggled with dry, irritated eyes from daily contact lens wear, or who work in environments that make sustained lens wear difficult, Ortho-K frequently represents a significant quality-of-life improvement. In Toronto's dry winter months, when forced-air heating depletes indoor humidity and accelerates contact lens dehydration, the daytime lens-free advantage of Ortho-K is particularly appreciated by patients who've experienced contact lens discomfort year-round.",
  },
];

export const faqVirtualConsult = [
  {
    id: 1,
    question: "What is Tele-optometry?",
    answer:
      "Tele-optometry is the provision of vision and eye health services that are delivered within the scope of practice of optometry using electronic health information, medical and communication technologies, and where the provider and patient are separated by remote distance.",
  },
  {
    id: 2,
    question:
      "What is the difference between Telemedicine, Telehealth and Tele-optometry?",
    answer:
      "Telehealth and Telemedicine are often used interchangeably but are distinguished in terms of their scope. Telemedicine describes the remote delivery of clinical medical services, such as diagnosis and disease management, but Telehealth includes the delivery of health promotion and disease prevention information and therapeutic care. As such, Telemedicine is a part of Telehealth, and Tele-optometry is a part of Telehealth.",
  },
  {
    id: 3,
    question: "Is Tele-optometry safe and what does it involve?",
    answer:
      "Your online consultation may involve video chat, direct messaging, or photo uploads. Your online consultation protects your privacy using encryption technology for any personal information or images that may be shared between you and the doctor on the platform.",
  },
  {
    id: 4,
    question: "What will I need to prepare for before my virtual consultation?",
    answer:
      "You will be asked questions about the nature of your symptoms as well as your health history if relevant, including any medications you are taking.",
  },
  {
    id: 5,
    question: "Is Tele-optometry covered by OHIP or private insurance?",
    answer:
      "As of now (April, 2021) There is no OHIP coverage for telemedical optometry services. Every private insurance will vary in coverage depending on the insurance provider and the specific plan offered. Our office will email you an invoice at the end of your virtual consultation that you can use to submit to your insurance if applicable.",
  },
  {
    id: 6,
    question:
      "How much will the consultation cost and how do I make a payment?",
    answer:
      "The fee to access this service is $75 per consultation. At the end of the consultation the system will prompt you to make an online payment with a valid credit card. Be sure to have your credit card ready before the beginning of your consultation to avoid delays.",
  },
];
export const fagshoppingfaq = [
  {
    id: 1,
    question: "What is Tele-optometry?",
    answer:
      "Tele-optometry is the provision of vision and eye health services that are delivered within the scope of practice of optometry using electronic health information, medical and communication technologies, and where the provider and patient are separated by remote distance.",
  },
  {
    id: 2,
    question:
      "What is the difference between Telemedicine, Telehealth and Tele-optometry?",
    answer:
      "Telehealth and Telemedicine are often used interchangeably but are distinguished in terms of their scope. Telemedicine describes the remote delivery of clinical medical services, such as diagnosis and disease management, but Telehealth includes the delivery of health promotion and disease prevention information and therapeutic care. As such, Telemedicine is a part of Telehealth, and Tele-optometry is a part of Telehealth.",
  },
  {
    id: 3,
    question: "Is Tele-optometry safe and what does it involve?",
    answer:
      "Your online consultation may involve video chat, direct messaging, or photo uploads. Your online consultation protects your privacy using encryption technology for any personal information or images that may be shared between you and the doctor on the platform.",
  },
  {
    id: 4,
    question: "What will I need to prepare for before my virtual consultation?",
    answer:
      "You will be asked questions about the nature of your symptoms as well as your health history if relevant, including any medications you are taking.",
  },
  {
    id: 5,
    question: "Is Tele-optometry covered by OHIP or private insurance?",
    answer:
      "As of now (April, 2021) There is no OHIP coverage for telemedical optometry services. Every private insurance will vary in coverage depending on the insurance provider and the specific plan offered. Our office will email you an invoice at the end of your virtual consultation that you can use to submit to your insurance if applicable.",
  },
  {
    id: 6,
    question:
      "How much will the consultation cost and how do I make a payment?",
    answer:
      "The fee to access this service is $75 per consultation. At the end of the consultation the system will prompt you to make an online payment with a valid credit card. Be sure to have your credit card ready before the beginning of your consultation to avoid delays.",
  },
];

export const benefitsData = [
  {
    title: "Clear Vision",
    description: "Achieve sharp, clear vision without the need for glasses.",
    icon: <Eye className="w-9 h-9 text-combination-100" size={36} />,
  },
  {
    title: "Quick Recovery",
    description:
      "Experience fast recovery and return to your daily activities.",
    icon: <CheckSquare className=" text-combination-100" size={36} />,
  },
  {
    title: "Long-Term Results",
    description:
      "Enjoy lasting vision improvement with laser vision correction.",
    icon: <Clock className=" text-combination-100" size={36} />,
  },
  {
    title: "Proven Safety",
    description: "Laser vision correction is a safe and established procedure.",
    icon: <Shield className=" text-combination-100" size={36} />,
  },
  {
    title: "Enhanced Quality of Life",
    description: "Improved vision can lead to a better quality of life.",
    icon: <Heart className=" text-combination-100" size={36} />,
  },
  {
    title: "Personalized Treatment",
    description: "Each procedure is tailored to meet your vision needs.",
    icon: <User className=" text-combination-100" size={36} />,
  },
];
export const pediatricEyeBenefitsData = [
  {
    title: "Myopia Control",
    description:
      "Effective treatments to slow down myopia progression in children.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Glasses with special lenses for myopia control */}
      //   <path
      //     d="M5 9L9 9C11 9 11 13 9 13L5 13C3 13 3 9 5 9Z"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path
      //     d="M15 9L19 9C21 9 21 13 19 13L15 13C13 13 13 9 15 9Z"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path d="M9 11H15" strokeWidth="1.5" stroke="currentColor" />
      //   {/* Myopia control indicator */}
      //   <path
      //     d="M7 7L7 15"
      //     strokeWidth="1"
      //     strokeDasharray="1,1"
      //     stroke="currentColor"
      //   />
      //   <path
      //     d="M17 7L17 15"
      //     strokeWidth="1"
      //     strokeDasharray="1,1"
      //     stroke="currentColor"
      //   />
      // </svg>
      <GrVolumeControl size={36} className="text-combination-100" />
    ),
  },
  {
    title: "Vision Therapy",
    description:
      "Customized programs to enhance children's visual skills and abilities.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Eye with therapy exercises */}
      //   <path
      //     d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <circle
      //     cx="12"
      //     cy="12"
      //     r="3"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   {/* Exercise arrows for vision therapy */}
      //   <path
      //     d="M16 8L18 6"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M8 8L6 6"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M16 16L18 18"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M8 16L6 18"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      // </svg>
      <FaLowVision size={36} className="text-combination-100" />
    ),
  },
  {
    title: "Pediatric Eye Exams",
    description:
      "Comprehensive exams to monitor and maintain your child's vision health.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Eye chart for pediatric exams */}
      //   <rect
      //     x="4"
      //     y="4"
      //     width="16"
      //     height="16"
      //     rx="1"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <text
      //     x="7"
      //     y="9"
      //     fontSize="4"
      //     fontWeight="bold"
      //     stroke="none"
      //     fill="currentColor"
      //   >
      //     E
      //   </text>
      //   <text x="12" y="9" fontSize="3" stroke="none" fill="currentColor">
      //     F P
      //   </text>
      //   <text x="7" y="14" fontSize="2.5" stroke="none" fill="currentColor">
      //     T O Z
      //   </text>
      //   <text x="7" y="18" fontSize="2" stroke="none" fill="currentColor">
      //     L P E D
      //   </text>
      // </svg>
      <BiSolidReport size={36} className="text-combination-100" />
    ),
  },
  {
    title: "Eyeglasses for Kids",
    description:
      "Stylish and durable eyeglasses designed for children's active lifestyles.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Kid-friendly eyeglasses */}
      //   <path
      //     d="M5 10L9 10C11 10 11 14 9 14L5 14C3 14 3 10 5 10Z"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path
      //     d="M15 10L19 10C21 10 21 14 19 14L15 14C13 14 13 10 15 10Z"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path d="M9 12H15" strokeWidth="1.5" stroke="currentColor" />
      //   {/* Colorful temple design for kids */}
      //   <path
      //     d="M3 10C3 10 2 7 4 7"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M21 10C21 10 22 7 20 7"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      // </svg>
      <FaGlasses size={36} className="text-combination-100" />
    ),
  },
  {
    title: "Contact Lenses for Children",
    description:
      "Safe and comfortable contact lens options for kids' vision correction.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Contact lens */}
      //   <ellipse
      //     cx="12"
      //     cy="12"
      //     rx="8"
      //     ry="4"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <ellipse
      //     cx="12"
      //     cy="12"
      //     rx="4"
      //     ry="2"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   {/* Case for contacts */}
      //   <path
      //     d="M4 18H8"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M16 18H20"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <circle
      //     cx="6"
      //     cy="20"
      //     r="1"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <circle
      //     cx="18"
      //     cy="20"
      //     r="1"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      // </svg>
      <GiSpectacleLenses size={36} className="text-combination-100" />
    ),
  },
  {
    title: "Eye Care Tips for Parents",
    description:
      "Valuable advice on how to protect and maintain your child's vision.",
    icon: (
      // <svg
      //   className="w-9 h-9 text-combination-100"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      //   xmlns="http://www.w3.org/2000/svg"
      // >
      //   {/* Parent and child icons with eye care element */}
      //   <circle
      //     cx="8"
      //     cy="9"
      //     r="2.5"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path
      //     d="M3 17C3 14 5.5 13 8 13C10.5 13 13 14 13 17"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <circle
      //     cx="16"
      //     cy="11"
      //     r="1.8"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   <path
      //     d="M13 17C13 15 14.5 14 16 14C17.5 14 19 15 19 17"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     fill="none"
      //   />
      //   {/* Protection shield for eye care */}
      //   <path
      //     d="M12 5C12 5 14 7 16 7"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      //   <path
      //     d="M7 6.5L8.5 8"
      //     strokeWidth="1.5"
      //     stroke="currentColor"
      //     strokeLinecap="round"
      //   />
      // </svg>
      <IoIosContacts size={36} className="text-combination-100" />
    ),
  },
];

export const advanceddiagnosticsbenefitsData = [
  {
    title: "Digital Retinal Imaging",
    description:
      "High-resolution images of the retina for early disease detection.",
    icon: <MdCameraAlt className=" text-combination-100" size={36} />,
  },
  {
    title: "Optical Coherence Tomography (OCT)",
    description:
      "Detailed cross-sectional images of the eye for precise diagnosis.",
    icon: <FaMicroscope className=" text-combination-100" size={36} />,
  },
  {
    title: "Visual Field Testing",
    description:
      "Assessment of your peripheral vision for early detection of diseases.",
    icon: <MdOutlineRemoveRedEye className=" text-combination-100" size={36} />,
  },
  {
    title: "Corneal Topography",
    description:
      "Mapping the cornea’s surface to detect irregularities and conditions.",
    icon: <HiOutlineChartPie className=" text-combination-100" size={36} />,
  },
  {
    title: "Pachymetry",
    description:
      "Measurement of corneal thickness is important for glaucoma detection.",
    icon: <FaDiagnoses className=" text-combination-100" size={36} />,
  },
  {
    title: "Auto Refraction",
    description:
      "Automated measurement of refractive errors for accurate prescriptions.",
    icon: <MdVisibility className=" text-combination-100" size={36} />,
  },
];

export const customlensfaqs = [
  {
    id: 1,
    question: "Can I wear contact lenses?",
    answer:
      "The answer depends on each patient. However, with today's technology and the advancements that have been made in this field, we can find solutions for many patients. Whether you have been diagnosed with astigmatism or presbyopia, you can correct the condition with both soft lenses or scleral contact lenses respectively. In other words, you may be a better candidate for contacts than you assume.",
  },
  {
    id: 2,
    question: "Are contacts uncomfortable?",
    answer:
      "This depends on your age and previously diagnosed conditions, but a good rule of thumb is to have your eyes regularly checked every 1 to 2 years. The doctor can inform you which conditions that require attention, or register if it is normal. Knowing when to visit an eye doctor to get your eyes checked is important. Not only is this information valuable, but it could also save you from potentially developing advanced eye conditions that might not have symptoms at early stages. Only your optometrist can determine how frequently you should be seen for eye examinations. Assume you were deemed a candidate and had a proper fit with no complications it typically only takes a brief period for you to adapt to the contacts and you won't notice any difference. The risk of developing ocular disease is higher at 65 years of age and older. Our doctors at 360 Eyecare in Toronto strongly advocate following the recommended frequency of visits by your optometrist. These exams will detect early signs of many eye diseases such as glaucoma, cataracts, and macular degeneration.",
  },
  {
    id: 3,
    question: "Can they get lost behind my eyeball?",
    answer:
      "The conjunctiva (which is a thin membrane) covers the white of your eye and connects to your eyelid making it practically impossible for the contact lens to get lost behind the eyeball.",
  },
  {
    id: 4,
    question: "Can a contact lens be permanently stuck to my eye?",
    answer:
      "While it is true that the soft contact lens may stick to the surface of the eye when it (the lens) is dried out, re-moisturizing it should make it easy for you to remove it. A sterile saline solution or multi-purpose lens solution should be used to moisturize the lens.",
  },
  {
    id: 5,
    question: "Can contact lenses cause eye problems?",
    answer:
      "Yes, they can cause eye problems. Certain eye complications may arise due to the use of contacts. However, if you follow your optometrist's instructions regarding how to wear them, how to take care of them, how frequently they should be replaced, and how long to wear them then your risk of complications is reduced.",
  },
  {
    id: 6,
    question: "Can contacts pop out of my eyes?",
    answer:
      "Some years ago, the old-fashioned contacts would pop out of the eye during sports or any other rigorous activity. However, while it is still possible, recent advancements in both soft and rigid gas-permeable lenses have allowed for more customizable fits making it more difficult to dislodge.",
  },
  {
    id: 7,
    question: "Are contacts too expensive?",
    answer:
      "That depends on the brand and quality of lenses, but for the most part, contact lens prices have come a long way and most are quite affordable now. You can get disposable daily contacts (once considered a luxury) for less than the cost of a daily cup of coffee.",
  },
  {
    id: 8,
    question: "Am I too old to wear contacts?",
    answer:
      "Thanks to the bifocal contact lens, age is no longer a barrier. Our optometrists and opticians at 360 Eyecare are licensed and experienced in all modalities of contacts including multi-focal and mono-vision systems.",
  },
  {
    id: 9,
    question: "Do contacts require a lot of care?",
    answer:
      "Not really. A multipurpose solution or hydrogen peroxide can be used to clean and disinfect most lenses daily. Better yet, you can opt for daily disposable contacts, which save you a lot of headaches, as they do not require any solution. These lenses are disposed of daily and new ones are worn every day.",
  },
];

export const virtualShoppingFaqs = [
  {
    id: 1,
    question: "Is there a cost for booking a virtual shopping appointment?",
    answer:
      "Nope! There are absolutely no costs or fees to book a virtual shopping appointment. If you enjoy the virtual experience of shopping with us, you're welcome to book more than once.",
  },
  {
    id: 2,
    question: "What happens if I can't make it or need to cancel?",
    answer:
      "If you can't make it to your shopping timeslot, please kindly email virtual@360eyecare.ca and let us know your name and timeslot. We understand things come up and there are no penalties for canceling a timeslot.",
  },
  {
    id: 3,
    question: "How do I make an appointment to shop virtually?",
    answer:
      "We provide all of our virtual shopping appointments via Zoom. Once you have received confirmation of your timeslot, our staff will provide you with a meeting link when appropriate. To ensure a smooth experience and to make the most of your time, please have Zoom installed/set up prior to your timeslot. Our staff can provide basic setup assistance for your timeslot upon request.",
  },
  {
    id: 4,
    question: "What happens during a virtual shopping experience?",
    answer:
      "Our virtual experiences provide one-on-one appointments with our opticians in half-hour timeslots. During this time you get a personalized walk-through of our wide selection of frames. Whether you want to pick out frames from the comfort of your home or get selections and suggestions tailored to you by our experienced opticians, our shopping experience gives you a completely private, personalized, and exclusive frame selection experience.",
  },
];

// Booking destinations per clinic (same targets as the /book-eye-exam page)
export const BOOK_YORKVILLE_URL =
  "https://360rosedale.mypatientsportal.com/select-location";
export const BOOK_BEACHES_URL = "/book-eye-exam#book-appointment";

// Clinic contact cards shared by the dry eye and IPL/RF service pages
export const dryEyeClinics = [
  {
    name: "360 Eyecare Yorkville",
    shortName: "Yorkville",
    pageHref: "/toronto-rosedale-optometrist",
    addressLines: [
      "55 Bloor Street West, Suite 03",
      "Manulife Centre, Toronto, ON M4W 1A5",
    ],
    phone: "416-901-2725",
    email: "yorkville@360eyecare.ca",
    description:
      "Steps from Bay Station — serving Yorkville, The Annex, Bay Street corridor, Church-Wellesley Village, and the University of Toronto campus.",
    bookHref: BOOK_YORKVILLE_URL,
  },
  {
    name: "360 Eyecare Beaches",
    shortName: "The Beaches",
    pageHref: "/toronto-beaches-optometrist",
    addressLines: ["2199 Queen Street East", "Toronto, ON M4E 1E5"],
    phone: "416-698-3937",
    email: "beaches@360eyecare.ca",
    description:
      "Accessible via the 501 Queen streetcar and Woodbine Station — serving The Beaches, Leslieville, Upper Beaches, East Danforth, and surrounding east end communities.",
    bookHref: BOOK_BEACHES_URL,
  },
];

// Myopia control clinic FAQs. Plain-string answers (also used for JSON-LD).
export const myopiaFaqdata = [
  {
    id: 1,
    question: "What is myopia control?",
    answer:
      "Myopia control refers to evidence-based treatments that slow the progression of nearsightedness in children.",
  },
  {
    id: 2,
    question: "At what age should myopia control start?",
    answer:
      "As early as myopia is detected and showing signs of progression, typically between ages six and fourteen.",
  },
  {
    id: 3,
    question: "How effective is myopia control?",
    answer:
      "Clinical trials consistently show 40 to 60 percent reduction in myopia progression compared to standard single-vision correction, depending on the treatment modality and the individual child.",
  },
  {
    id: 4,
    question: "Which myopia control treatment is best for my child?",
    answer:
      "It depends on your child's age, prescription, progression rate, corneal anatomy, and ability to handle contact lenses. Spectacle lenses are the lowest-barrier starting point. Ortho-K and MiSight offer strong efficacy with added convenience benefits. Atropine is uniquely flexible, usable at any age and combinable with optical modalities. Your optometrist will recommend the most appropriate option based on a full assessment.",
  },
  {
    id: 5,
    question: "Does myopia control stop myopia completely?",
    answer:
      "No, myopia control slows progression; it doesn't stop it entirely. The goal is to meaningfully reduce the final prescription your child reaches in adulthood, and thereby reduce their lifetime risk of myopia-associated eye disease.",
  },
  {
    id: 6,
    question: "Is Ortho-K safe for children?",
    answer:
      "Yes. Ortho-K is approved by Health Canada and has been used safely in children for over two decades. As with all contact lens wear, proper lens hygiene and care protocols are essential. Your optometrist will ensure your child and family are thoroughly trained before lenses are dispensed.",
  },
  {
    id: 7,
    question: "Does myopia control work once myopia has stabilised?",
    answer:
      "Myopia control is most effective during the active progression years, typically ages six to eighteen. Once myopia has stabilised, the focus shifts to monitoring and ensuring the final prescription remains stable into adulthood.",
  },
  {
    id: 8,
    question: "Is myopia control covered by OHIP or insurance?",
    answer:
      "OHIP does not cover myopia control treatments. Many extended health benefit plans include some coverage for contact lens fittings and eyewear; check your plan details.",
  },
  {
    id: 9,
    question: "Do you offer myopia control at both Toronto locations?",
    answer:
      "Yes. Full myopia control programs, including all four treatment modalities, are available at both our Yorkville clinic on Bloor Street West and our Beaches clinic on Queen Street East. New patients are welcome at both locations without a referral.",
  },
];

// Orthokeratology (Ortho-K) FAQs. Plain-string answers (also used for JSON-LD).
export const orthoFaqdata = [
  {
    id: 1,
    question: "How long does Ortho-K take to work?",
    answer:
      "Most patients notice significant vision improvement from the first morning after wear. Full, stable correction typically takes one to two weeks of consistent nightly use as the corneal reshape reaches its target profile.",
  },
  {
    id: 2,
    question: "How long does the vision correction last throughout the day?",
    answer:
      "Most patients with prescriptions up to -3.00D maintain clear unaided vision for the full waking day (16 to 18 hours) without top-up lens wear. Patients with higher prescriptions may notice some vision degradation by late afternoon, which typically improves as their eyes adjust to the treatment over the first few weeks.",
  },
  {
    id: 3,
    question: "Is Ortho-K safe for children?",
    answer:
      "Yes. Ortho-K is approved by Health Canada and has been used safely in children for over two decades. The primary safety requirement is consistent adherence to the lens care and hygiene protocol, particularly avoiding any tap water contact with the lenses.",
  },
  {
    id: 4,
    question: "What happens if I stop wearing Ortho-K lenses?",
    answer:
      "The cornea gradually returns to its original shape within one to two days of lens discontinuation. Your original prescription is fully restored.",
  },
  {
    id: 5,
    question: "Can Ortho-K correct astigmatism?",
    answer:
      "Yes, in many cases. Toric Ortho-K lens designs can manage astigmatism up to approximately -1.75D simultaneously with myopia correction. Higher levels of astigmatism may limit what's achievable. Your optometrist will assess this at the candidacy evaluation.",
  },
  {
    id: 6,
    question: "How much does Ortho-K cost in Toronto?",
    answer:
      "Ortho-K involves initial fitting fees covering the assessment, corneal topography mapping, and custom lens fabrication, as well as the lenses themselves and follow-up visits. Costs vary depending on the complexity of the fit and the lens design required. OHIP does not cover Ortho-K. Some extended health benefit plans include partial coverage for contact lens fittings.",
  },
  {
    id: 7,
    question: "How often do Ortho-K lenses need to be replaced?",
    answer:
      "Typically every one to two years, depending on wear patterns and deposit accumulation. Replacement may also be triggered by prescription changes that require updated lens parameters, particularly relevant for children whose myopia is still actively progressing.",
  },
  {
    id: 8,
    question: "Can I wear Ortho-K lenses if I have dry eye?",
    answer:
      "Mild to moderate dry eye is not necessarily a contraindication for Ortho-K, since the lenses are worn during sleep rather than during waking hours when dry eye symptoms are most pronounced. Significant dry eye that is not adequately managed may affect lens tolerance and corneal surface health; your optometrist will assess this at the fitting appointment and may recommend dry eye treatment before proceeding with Ortho-K.",
  },
  {
    id: 9,
    question: "Do I still need glasses with Ortho-K?",
    answer:
      "Most patients with prescriptions within the treatable range achieve full correction and don't need glasses during the day. A pair of glasses with your current prescription is recommended as a backup for days when lenses aren't worn and for the early weeks of treatment before full correction is achieved.",
  },
  {
    id: 10,
    question: "Is Ortho-K an alternative to laser eye surgery?",
    answer:
      "Ortho-K produces comparable daytime vision freedom to laser eye surgery. It's an excellent option for patients not yet eligible for surgery (too young, or prescription still changing), patients who want the freedom of surgery-free vision without committing permanently, or patients whose prescriptions or corneal anatomy make them poor surgical candidates.",
  },
];

// IPL & RF dry eye treatment FAQs. Answers are plain strings so they can
// also be serialised into the page's FAQPage JSON-LD schema.
export const iplRfFaqdata = [
  {
    id: 1,
    question: "What is the difference between IPL and RF for dry eye?",
    answer:
      "IPL uses light energy to eliminate the abnormal blood vessels driving eyelid inflammation and thermally stimulate the meibomian glands. RF uses radiofrequency heat to liquefy blocked meibum and stimulate collagen in the eyelid tissue. IPL is most effective for rosacea-associated dry eye; RF works across all skin tones and adds structural collagen benefits IPL doesn't provide. Many patients benefit from both in combination.",
  },
  {
    id: 2,
    question: "How many sessions do I need?",
    answer:
      "IPL requires four sessions spaced two to four weeks apart. RF typically requires three to four sessions on the same schedule. Both are followed by maintenance sessions every six to twelve months depending on your response.",
  },
  {
    id: 3,
    question: "How long do results last?",
    answer:
      "Most patients experience meaningful relief for six to twelve months following a full treatment course. Maintenance sessions extend that duration. Results are tracked objectively using Keratograph and i-PEN measurements at follow-up appointments.",
  },
  {
    id: 4,
    question: "Is IPL or RF painful?",
    answer:
      "Neither treatment requires anaesthesia. IPL produces a brief warming sensation and flash of light with each pulse. RF feels like a warm, gentle massage. Both are well-tolerated and require no recovery time.",
  },
  {
    id: 5,
    question: "Can I have IPL if I have darker skin?",
    answer:
      "IPL is not appropriate for Fitzpatrick skin types V and VI, or for recently tanned skin. RF has no skin tone contraindications and is appropriate for all skin tones. Your optometrist will assess skin type at your consultation and recommend accordingly.",
  },
  {
    id: 6,
    question: "Do I need a referral to book?",
    answer:
      "No referral required. New patients are welcome at both our Yorkville and Beaches clinics. Book directly online or by phone.",
  },
  {
    id: 7,
    question: "Is IPL or RF covered by insurance?",
    answer:
      "IPL and RF for dry eye are not currently covered by OHIP. Some extended health benefit plans include coverage for in-office dry eye procedures — check your plan details before booking. Our team can provide itemised receipts for benefit submission.",
  },
  {
    id: 8,
    question: "What happens at the first appointment?",
    answer:
      "Your first appointment is a comprehensive dry eye assessment. It includes Keratograph 5M meibography, i-PEN osmolarity testing, lid margin examination, and a full review of your history and symptoms. Treatment recommendations are made based on those findings.",
  },
  {
    id: 9,
    question: "Can I combine IPL and RF in the same appointment?",
    answer:
      "Yes. At 360 Eyecare, combined IPL and RF therapy is often delivered in the same appointment, with RF immediately preceding or following IPL. The two treatments address complementary aspects of MGD and together produce more comprehensive improvement than either alone.",
  },
  {
    id: 10,
    question: "How soon will I notice improvement?",
    answer:
      "Most patients notice meaningful symptom improvement after sessions two and three. The full benefit of a treatment course is typically apparent four to six weeks after the final session, as the inflammatory response continues to resolve and, in the case of RF, collagen remodelling develops.",
  },
];

// Dry eye FAQ data. An answer is either a string, or an array of blocks:
// a string renders as a paragraph, { list: [...] } renders as a bullet list.
export const dryFaqdata = [
  {
    id: 1,
    question: "What is dry eye?",
    answer:
      "Dry eye disease (DED) is a chronic condition affecting the tear film. When the tear film becomes unstable, either because your eyes don't produce enough tears or because your tears evaporate too quickly, the result is a cycle of ocular surface inflammation and discomfort that tends to worsen over time without treatment.",
  },
  {
    id: 2,
    question: "What causes dry eyes?",
    answer: [
      "Dry eye has two primary causes, which often overlap:",
      "Evaporative dry eye, the most common type, occurs when the meibomian glands in the eyelids fail to produce sufficient or adequate-quality oil to stabilise the tear film.",
      "Aqueous deficient dry eye occurs when the lacrimal glands don't produce enough tear fluid. It's associated with autoimmune conditions like Sjögren's syndrome, aging, hormonal changes particularly around menopause, and medications including antihistamines, antidepressants, and certain blood pressure drugs.",
    ],
  },
  {
    id: 3,
    question: "What are the symptoms of dry eye?",
    answer:
      "The most common symptoms include burning or stinging, grittiness, redness, blurry or fluctuating vision, light sensitivity, eye fatigue, and, counterintuitively, excessive tearing.",
  },
  {
    id: 4,
    question: "How is dry eye diagnosed?",
    answer: [
      "A proper dry eye diagnosis requires a structured clinical assessment that goes beyond a symptom questionnaire. At 360 Eyecare's Yorkville and Beaches clinics, dry eye assessment includes:",
      {
        list: [
          "OCULUS Keratograph 5M imaging",
          "i-PEN osmolarity testing",
          "Tear Breakup Time (TBUT)",
          "Schirmer tear test",
          "Ocular surface staining",
          "Lid margin and meibomian gland examination",
        ],
      },
    ],
  },
  {
    id: 5,
    question: "How can I prevent dry eyes?",
    answer: [
      "Prevention focuses on protecting meibomian gland health and minimising the environmental and behavioural factors that destabilise the tear film:",
      {
        list: [
          "Blink fully and deliberately during screen use",
          "Use a humidifier during Toronto's heating season to maintain indoor humidity between 40 and 60 percent",
          "Wear wraparound sunglasses or close-fitting frames outdoors, particularly in wind",
          "Supplement with triglyceride-form omega-3 fatty acids",
          "Use preservative-free lubricating drops proactively in dry environments rather than reactively once symptoms are established",
          "Attend annual comprehensive eye exams",
        ],
      },
    ],
  },
  {
    id: 6,
    question: "What treatments are available for dry eye disease?",
    answer: [
      {
        list: [
          "Preservative-free artificial tears, lubricating ointments at night, warm compresses, eyelid hygiene, omega-3 supplementation, and environmental modifications",
          "Cyclosporine eye drops (Restasis, Cequa), topical corticosteroids for acute inflammation, and low-dose oral doxycycline for MGD-driven inflammation",
          "InMode IPL therapy",
          "InMode RF therapy",
          "Thermal pulsation",
          "Punctal plug insertion",
          "Scleral lens fitting for severe refractory cases",
        ],
      },
    ],
  },
  {
    id: 7,
    question: "Can dry eyes be cured?",
    answer: [
      "It depends on the type and the underlying cause. For some patients (particularly those whose dry eye is driven by a correctable factor like medication side effects, vitamin deficiency, or an environmental trigger) addressing the root cause can resolve the condition significantly or completely.",
      "For the majority of patients with MGD-driven evaporative dry eye, dry eye is a chronic condition that requires ongoing management rather than a one-time cure. The goal of treatment is to restore tear film stability, protect meibomian gland health, slow gland atrophy, and reduce symptoms to a level that doesn't meaningfully affect daily life.",
    ],
  },
  {
    id: 8,
    question: "Is dry eye a serious condition?",
    answer:
      "More serious than it's typically given credit for. At the mild end, dry eye is an intermittent nuisance. At the moderate to severe end, it affects reading ability, driving comfort, screen tolerance, sleep quality, and contact lens wear.",
  },
  {
    id: 9,
    question: "Can contact lenses cause dry eyes?",
    answer:
      "Contact lenses are one of the most significant modifiable risk factors for dry eye and MGD. They disrupt tear film stability by sitting on the ocular surface and interfering with the normal spread of the lipid layer. They increase tear evaporation. This doesn't mean contact lens wearers are destined for dry eye, but it does mean that MGD management is particularly important for this group, and that contact lens-related dry eye symptoms that aren't responding to rewetting drops are usually a signal that the underlying gland health needs to be assessed rather than just the lens type changed.",
  },
  {
    id: 10,
    question: "Are there any home remedies for dry eye?",
    answer: [
      {
        list: [
          "Warm compresses",
          "Eyelid hygiene",
          "Omega-3 supplementation",
          "Environmental modifications",
          "Conscious blinking practice",
        ],
      },
    ],
  },
];

export const bookeyeexamFaqdata = [
  {
    id: 1,
    question: "What should I expect during my eye exam?",
    answer:
      "During your eye exam, our optometrists will assess your vision, eye health, and screen for common conditions. Expect a comfortable, thorough check-up including tests for clear vision and overall eye function.",
  },
  {
    id: 2,
    question: "How often should I have an eye exam?",
    answer:
      "It’s recommended to have an eye exam every 1–2 years, depending on age and health. If you experience vision changes or discomfort, more frequent exams may be necessary. Regular exams ensure early detection of eye conditions.",
  },
  {
    id: 3,
    question: "Do you offer treatments for dry eyes?",
    answer:
      "Yes, we offer effective treatments for dry eyes, including lifestyle advice, prescription drops, and advanced therapies like Inmode IPL and RF. Our team will help find the best treatment for your unique symptoms.",
  },
  {
    id: 4,
    question: "How can I prepare for my eye exam?",
    answer:
      "For your eye exam, bring your prescription glasses or contacts, and any relevant medical history. Avoid wearing eye makeup or contact lenses on the day of your exam to ensure accurate testing results.",
  },
  {
    id: 5,
    question: "Are your optometrists experienced with children’s eye care?",
    answer:
      "Absolutely! Our optometrists are highly skilled in pediatric eye care, offering thorough exams to check for conditions like myopia, amblyopia, and strabismus. We make the experience comfortable and fun for your child.",
  },
];

export const torontoBeachesFaqData = [
  {
    id: 1,
    question:
      "Q1. Where exactly is your optometry clinic located in the Beaches?",
    answer: (
      <>
        We're located at 2199 Queen Street East in the heart of the Beaches
        shopping and cultural district. Our clinic is easily accessible by the
        501 Queen streetcar, just a 3-minute walk from Woodbine Beach, and close
        to Kew Gardens Park. Perfect for anyone searching for an "optometrist
        Queen Street East" or "eye doctor near Woodbine Beach."
      </>
    ),
  },
  {
    id: 2,
    question: "Q2. Do you offer walk-in eye exams in the Beaches?",
    answer: (
      <>
        Yes, we welcome walk-in appointments when possible! However, to ensure
        minimal wait times and guaranteed service, we recommend{" "}
        <strong>booking online or calling 416-698-3937</strong>. We offer
        extended hours including evenings and Saturdays to accommodate busy
        Beaches residents and visitors.
      </>
    ),
  },
  {
    id: 3,
    question: "Q3. What makes you the best optometrist in the Beaches Toronto?",
    answer: (
      <>
        Dr. Sam Baraam brings specialized expertise in{" "}
        <strong>
          Ortho-K myopia control, advanced dry eye therapy, and comprehensive
          family eye care
        </strong>{" "}
        to the Beaches community. Our clinic features cutting-edge diagnostic
        technology, therapeutic optometry services, and a deep commitment to the
        local beach lifestyle. We understand the unique vision needs of our
        active, family-oriented community.
      </>
    ),
  },
  {
    id: 4,
    question: "Q4.How often should I schedule eye exams for my family?",
    answer: (
      <>
        <strong>Children & Teens: </strong>Annual exams (OHIP covered until age
        20) - especially important for active beach kids
        <br />
        <strong>Adults (20-64):</strong> Every 1-2 years, annually if you have
        risk factors or wear contacts
        <br />
        <strong>Seniors 65+:</strong> Annual comprehensive exams (OHIP covered)
        <br />
        <strong>Active individuals:</strong> More frequent assessments for
        sports vision and UV protection needs
        <br />
      </>
    ),
  },
  {
    id: 5,
    question: "Q5. Do you provide emergency eye care in the Beaches?",
    answer: (
      <>
        Absolutely! We handle urgent eye issues including{" "}
        <strong>
          beach-related injuries, sand irritation, foreign objects, infections,
          and sudden vision changes.
        </strong>{" "}
        Call - <strong>416-698-3937</strong> immediately for same-day emergency
        appointments. Our location on Queen Street East makes us easily
        accessible for urgent care needs.
      </>
    ),
  },
  {
    id: 6,
    question: "Q6. What specialized dry eye treatments do you offer?",
    answer: (
      <>
        We provide the most advanced dry eye treatments available:
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>IPL (Intense Pulsed Light) Therapy -</strong>Targets
            inflammation and improves gland function
          </li>
          <li>
            <strong>Radiofrequency Treatment -</strong>Gentle warming to
            stimulate natural tear production
          </li>
          <li>
            <strong>Meibomian Gland Expression -</strong>Professional techniques
            to clear blocked glands
          </li>
        </ul>
        These FDA-approved treatments provide lasting relief, especially
        beneficial for beach residents dealing with wind and sun exposure.
      </>
    ),
  },
  {
    id: 7,
    question: "Q7. Do you offer Ortho-K lenses for myopia control?",
    answer: (
      <>
        Yes! We're specialists in{" "}
        <strong>Ortho-K (Orthokeratology) overnight lenses</strong> that reshape
        your cornea while you sleep, allowing clear vision during the day
        without glasses or contacts. This revolutionary treatment is
        particularly popular with Beaches residents who enjoy swimming, beach
        sports, and active lifestyles. Dr. Baraam provides comprehensive Ortho-K
        consultations and ongoing management.
      </>
    ),
  },
  {
    id: 8,
    question:
      "Q8. What should I expect during my Beaches eye exam appointment?",
    answer: (
      <>
        Your comprehensive 60-minute examination includes:
        <ul>
          <li>
            <strong>
              1. Health History & Lifestyle Assessment (10 minutes) -
            </strong>{" "}
            Including beach activity and sun exposure habits
          </li>
          <li>
            <strong>
              2. Visual Acuity & Prescription Testing (15 minutes) -{" "}
            </strong>
            Precise measurements for optimal vision
          </li>
          <li>
            <strong>3. Advanced Diagnostic Imaging (15 minutes) - </strong>
            Digital retinal photography and OCT scanning
          </li>
          <li>
            <strong>4. Eye Health Evaluation (10 minutes) - </strong>Pressure
            testing and comprehensive screening
          </li>
          <li>
            <strong>5. Personalized Consultation (10 minutes) - </strong>
            Treatment recommendations and lifestyle advice
          </li>
        </ul>
        These FDA-approved treatments provide lasting relief, especially
        beneficial for beach residents dealing with wind and sun exposure.
      </>
    ),
  },
  {
    id: 9,
    question: "Q9. Are you conveniently located for TTC transit users?",
    answer: (
      <>
        Extremely convenient! Take the <strong>501 Queen streetcar</strong> east
        directly to our location, or take the{" "}
        <strong>Bloor-Danforth subway to Woodbine Station</strong> then the 92
        Woodbine bus south to Queen Street. We're also bike-friendly with easy
        access to the Martin Goodman Trail and Beaches Boardwalk for those
        cycling to appointments.
      </>
    ),
  },
];

export const RosedaleFaqData = [
  {
    id: 1,
    question: "Q1. How often should I get an eye exam in Toronto?",
    answer: (
      <>
        <strong>Adults (20-64):</strong> Every 1-2 years for routine care,
        annually if you wear contacts or have risk factors <br />
        <strong>Adults 65+:</strong> Annual eye exams (OHIP covered) <br />
        <strong>Children:</strong> Before school starts, then annually (OHIP
        covered until age 20) <br />
        <strong>High-risk patients:</strong>More frequent exams as recommended
        by your optometrist
      </>
    ),
  },
  {
    id: 2,
    question: "Q2. Do you offer same-day eye exams in Yorkville?",
    answer: (
      <>
        Yes, 360 Eyecare Yorkville accommodates urgent eye care needs and
        emergency appointments at our Yorkville location. Call-
        <strong>416-901-2725 </strong> for same-day availability. We reserve
        time slots for urgent cases including eye injuries, sudden vision
        changes, and severe eye pain.
      </>
    ),
  },
  {
    id: 3,
    question: "Q3. What insurance do you accept for eye exams in Toronto?",
    answer: (
      <>
        We accept most major insurance plans including Sun Life, Manulife,
        Great-West Life, Blue Cross, Green Shield, Chambers of Commerce plans,
        etc. We offer direct billing so you don't pay upfront for covered
        services. OHIP covers eye exams for children under 20 and adults 65+,
        plus those with specific medical conditions.
      </>
    ),
  },
  {
    id: 4,
    question: "Q4. What advanced dry eye treatments do you offer?",
    answer: (
      <>
        Our eye clinic features the latest FDA-approved treatments for chronic
        dry eye syndrome:
        <br />
        <strong>IPL (Intense Pulsed Light) therapy - </strong> Reduces
        inflammation and improves meibomian gland function
        <br />
        <strong>RF (Radiofrequency) treatment - </strong> Gentle heating to
        stimulate natural tear production
        <br />
        <strong>Meibomian gland expression - </strong> Manual techniques to
        clear blocked glands
        <br />
        These treatments provide long-lasting relief for patients who haven't
        found success with traditional eye drops.
      </>
    ),
  },
  {
    id: 5,
    question: "Q5. Do you offer contact lens fittings in Yorkville?",
    answer: (
      <>
        Yes, we provide comprehensive contact lens fittings including specialty
        lenses for astigmatism, presbyopia, and keratoconus. Our services
        include:
        <ul className="list-disc list-inside space-y-1">
          <li>Professional measurements and fitting</li>
          <li>Free trial lenses to ensure comfort</li>

          <li>Insertion and removal training</li>
          <li>Follow-up appointments included</li>
          <li>Daily, weekly, and monthly lens options available</li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    question: "Q6. What should I expect during my eye exam appointment?",
    answer: (
      <>
        Your 60-minute comprehensive eye exam includes:
        <br />
        <strong>1. Medical History Review (5 minutes) - </strong> Discussion of
        health and vision concerns
        <br />
        <strong>2. Visual Acuity Testing (10 minutes) - </strong> Reading charts
        to measure vision clarity
        <br />
        <strong>3. Refraction Test (15 minutes) -</strong> Determining your
        exact prescription
        <br />
        <strong>4. Eye Health Examination (15 minutes) - </strong>Dilated exam
        of retina and optic nerve
        <br />
        <strong>5. Pressure Testing (5 minutes) -</strong>Glaucoma screening
        <br />
        <strong>6. Results & Recommendations (10 minutes) -</strong>Discussion
        of findings and next steps
        <br />
      </>
    ),
  },
  {
    id: 7,
    question:
      "Q7. Can I bring my child for an eye exam at your Yorkville clinic?",
    answer: (
      <>
        Absolutely! We specialize in pediatric eye care with child-friendly
        equipment and techniques. Children's eye exams are fully covered by OHIP
        until age 20. We recommend first eye exams before starting school, then
        annually. Our pediatric services include early detection of
        learning-related vision problems and myopia management programs.
      </>
    ),
  },
  {
    id: 8,
    question:
      "Q8. Are you the closest optometrist to Queen's Park and University of Toronto?",
    answer: (
      <>
        Yes! We're only an{" "}
        <strong>8-minute walk south from Queen's Park </strong> via Avenue Road
        to Bloor Street. For University of Toronto students and staff, we're the
        closest full-service optometry clinic - just one subway stop from St.
        George Station to Bay Station, or a pleasant 10-minute walk along Bloor
        Street. Perfect for anyone searching "optometrist near Queen's Park" or
        "eye doctor University of Toronto."
      </>
    ),
  },
  {
    id: 9,
    question: "Q9. Where exactly is your eye clinic located on Bloor Street?",
    answer: (
      <>
        We're located at <strong>55 Bloor Street West, Suite 03 </strong> on the
        concourse level of the{" "}
        <strong>Manulife Centre, Toronto, ON M4W 1A5, Canada</strong>, directly
        at the intersection of <strong>Bay Street and Bloor Street. </strong>{" "}
        Our clinic is steps from Bloor-Yonge subway station and Bay Station,
        making us easily accessible for anyone searching for an "eye doctor
        Bloor Street" or "optometrist Bay Street Toronto".
      </>
    ),
  },
];

export const eyeCareServiceData = [
  {
    id: 1,
    head: "Comprehensive Eye Exams",
    icon: "/location/icons/eyeExam.svg",
    para: [
      "Thorough vision assessments using cutting-edge technology for optimal eye health and vision clarity.",
      "Advanced digital retinal imaging",
      "Glaucoma and macular degeneration screening",
      "OHIP billing for eligible patients",
      "Same-day results and recommendations",
    ],
  },
  {
    id: 2,
    head: "Advanced Dry Eye Treatment",
    icon: "/location/icons/dryeye.svg",
    para: [
      "New IPL and radiofrequency therapy for chronic dry eye relief and lasting comfort.",
      "FDA-approved IPL (Intense Pulsed Light) therapy",
      "Advanced radiofrequency treatments",
      "Meibomian gland dysfunction therapy",
      "Custom tear film analysis",
      "Long-term symptom management plans",
    ],
  },
  {
    id: 3,
    head: "Family Eye Care & Pediatrics",
    icon: "/location/icons/eyeTest.svg",
    para: [
      "Gentle, comprehensive eye care for children and families with specialized pediatric expertise.",
      "Child-friendly examination techniques",
      "Early learning disability detection",
      "Myopia control and management",
      "Sports vision assessments",
      "OHIP coverage for children under 20",
    ],
  },
  {
    id: 4,
    head: "Emergency Eye Care",
    icon: "/location/icons/emergencyeye.svg",
    para: [
      "Urgent care for eye injuries, infections, and sudden vision changes with immediate attention.",
      "Same-day emergency appointments",
      "Foreign object removal",
      "Eye injury assessment and treatment",
      "Infection diagnosis and management",
      "Urgent referrals when necessary",
    ],
  },
  {
    id: 5,
    head: "Ortho-K & Contact Lens Specialists",
    icon: "/location/icons/emergencyeye.svg",
    para: [
      "Advanced contact lens fittings including Ortho-K lenses for myopia control.",
      "Ortho-K overnight vision correction",
      "GSpecialty lens fittings (keratoconus, astigmatism)",
      "Daily, weekly, and monthly lens options",
      "Professional insertion and care training",
    ],
  },
  {
    id: 6,
    head: "Premium Eyewear & Frames",
    icon: "/location/icons/contactLens.svg",
    para: [
      "Curated collection of designer and functional eyewear to complement your lifestyle and vision needs.",
      "Designer frame collections (Ray-Ban, Tom Ford, Kate Spade)",
      "Progressive lens specialists",
      "Anti-blue light and computer glasses",
      "Prescription sunglasses and sports eyewear",
      "Professional frame fitting and adjustments",
    ],
  },
];

export const choose360eyeCareData = [
  {
    id: 1,
    head: "Led by an Experienced Optometrist in Toronto",
    icon: "/location/icons/checkup.svg",
    para: "Dr. Sam Baraam leads our clinic with years of experience, delivering trusted care, compassionate service, and a deep commitment to every patient’s eye health.",
  },
  {
    id: 2,
    head: "Modern Technology for Personalized Eye Care",
    icon: "/location/icons/eyeExamination.svg",
    para: "We use cutting-edge diagnostic tools to assess vision, detect early conditions, and create custom treatment plans that suit your unique needs and lifestyle.",
  },
  {
    id: 3,
    head: "Comprehensive Eye Care for All Age Groups",
    icon: "/location/icons/comprehensive.svg",
    para: "From young children to seniors, we provide full-spectrum vision care services tailored to every stage of life, ensuring clarity, comfort, and ongoing protection.",
  },
  {
    id: 4,
    head: "Flexible Scheduling and Simple Booking Options",
    icon: "/location/icons/testing.svg",
    para: "Book online, by phone, or visit in person. We offer flexible scheduling options to reduce waiting time and deliver seamless, stress-free appointment experiences.",
  },
];

export const RosedaleeyeCareServiceData = [
  {
    id: 1,
    head: "Comprehensive Eye Exams",
    icon: "/location/icons/eyeExam.svg",
    para: [
      "Complete vision assessment and eye health screening using advanced diagnostic technology.",
      "Digital retinal imaging and OCT scanning",
      "Glaucoma and cataract screening",
      "Personalized vision correction recommendations",
      "OHIP coverage for eligible patients",
      "Insurance direct billing is available",
    ],
  },
  {
    id: 2,
    head: "Advanced Dry Eye Treatment",
    icon: "/location/icons/dryeye.svg",
    para: [
      "Latest IPL and RF therapy for lasting dry eye relief - the most advanced treatments available at our optometry.",
      "IPL (Intense Pulsed Light) therapy",
      "RF (Radiofrequency) treatment",
      "Customized treatment protocols",
      "Meibomian gland expression",
      "Long-lasting symptom relief",
    ],
  },
  {
    id: 3,
    head: "Pediatric Eye Care",
    icon: "/location/icons/eyeTest.svg",
    para: [
      "Specialized eye care for children with a child-friendly environment and equipment.",
      "Early vision problem detection",
      "Myopia management programs",
      "School-age vision assessments",
      "Learning-related vision issues",
      "OHIP covered for children under 20",
    ],
  },
  {
    id: 4,
    head: "Emergency Eye Care",
    icon: "/location/icons/emergencyeye.svg",
    para: [
      "Urgent eye care services for injuries, infections, and sudden vision changes.",
      "Same-day emergency appointments",
      "Foreign body removal",
      "Eye infection treatment",
      "Sudden vision loss assessment",
      "On-call services available",
    ],
  },
  {
    id: 5,
    head: "Contact Lens Fitting",
    icon: "/location/icons/contactLens.svg",
    para: [
      "Professional contact lens fittings, including specialty lenses for all vision needs.",
      "Comprehensive lens fitting",
      "Specialty lenses (astigmatism, presbyopia)",
      "Keratoconus lens solutions",
      "Free trial lenses are available",
      "Ongoing lens care support",
    ],
  },
  {
    id: 6,
    head: "Designer Eyewear & Glasses",
    icon: "/location/icons/contactLens.svg",
    para: [
      "Curated selection of premium frames and lenses to match your lifestyle and budget.",
      "Designer frame collections",
      "Progressive lens specialists",
      "Blue light filtering options",
      "Sports and safety eyewear",
      "Frame adjustment and repairs",
    ],
  },
];

export const Rosedalechoose360eyeCareData = [
  {
    id: 1,
    head: "Led by an Experienced Optometrist in Toronto",
    icon: "/location/icons/checkup.svg",
    para: "Dr. Sam Baraam leads our clinic with years of experience, delivering trusted care, compassionate service, and a deep commitment to every patient’s eye health.",
  },
  {
    id: 2,
    head: "Modern Technology for Personalized Eye Care",
    icon: "/location/icons/eyeExamination.svg",
    para: "We use cutting-edge diagnostic tools to assess vision, detect early conditions, and create custom treatment plans that suit your unique needs and lifestyle.",
  },
  {
    id: 3,
    head: "Comprehensive Eye Care for All Age Groups",
    icon: "/location/icons/comprehensive.svg",
    para: "From young children to seniors, we provide full-spectrum vision care services tailored to every stage of life, ensuring clarity, comfort, and ongoing protection.",
  },
  {
    id: 4,
    head: "Flexible Scheduling and Simple Booking Options",
    icon: "/location/icons/testing.svg",
    para: "Book online, by phone, or visit in person. We offer flexible scheduling options to reduce waiting time and deliver seamless, stress-free appointment experiences.",
  },
];

export const eyeexamsCardData = [
  {
    icon: FaUserDoctor,
    title: "Annual Checkups",
    description:
      "Experts recommend an annual comprehensive eye exam to check for harmful eye conditions.",
    bgColor: "bg-combination-100",
  },
  {
    icon: LuScanEye,
    title: "Regular Exams",
    description:
      "Regular eye exams are important, regardless of age or physical condition.",
    bgColor: "bg-combination-200",
  },
  {
    icon: TbBrandVisualStudio,
    title: "Comprehensive Testing",
    description:
      "An eye exam at our center includes various tests to assess your eye health.",
    bgColor: "bg-combination-100",
  },
];

export const bookEyeExamCardData = [
  {
    icon: FaUserDoctor,
    title: "Annual Checkups",
    description:
      "Don’t skip your annual eye exam. Yearly checkups catch changes early. Stay ahead",
    bgColor: "bg-combination-100",
  },
  {
    icon: LuScanEye,
    title: "Regular Eye Exams",
    description:
      "Stay ahead of vision changes. Regular eye exams make all the difference",
    bgColor: "bg-combination-200",
  },
  {
    icon: TbBrandVisualStudio,
    title: "Comprehensive Testing",
    description:
      "See the whole picture. Comprehensive eye testing gives a full picture of your vision",
    bgColor: "bg-combination-100",
  },
];

export const RosedaleMajorStreets = [
  {
    name: "Bloor Street West",
    description: "Our clinic location (steps from Bay & Bloor)",
  },
  {
    name: "Yonge Street",
    description: "2-minute walk east",
  },
  {
    name: "Bay Street",
    description: "1-minute walk west",
  },
  {
    name: "Church Street",
    description: "5-minute walk east",
  },
  {
    name: "Avenue Road",
    description: "10-minute walk west",
  },
  {
    name: "Cumberland Street",
    description: "Heart of Yorkville shopping",
  },
  {
    name: "Yorkville Avenue",
    description: "Historic cultural district",
  },
  {
    name: "Charles Street",
    description: "Residential Yorkville area",
  },
  {
    name: "Scollard Street",
    description: "Boutique shopping district",
  },
];

export const RosedaleLandmarks = [
  {
    name: "Royal Ontario Museum (ROM)",
    description: "5-minute walk north on Avenue Road",
  },
  {
    name: "University of Toronto",
    description: "Queen's Park campus, 10 minutes south",
  },
  {
    name: "Queen's Park",
    description: "Ontario legislature & government district",
  },
  {
    name: "Yorkville Village Mall",
    description: "Connected via Cumberland Street",
  },
  {
    name: "Village of Yorkville Park",
    description: "Historic granite rock parkland",
  },
  {
    name: "Four Seasons Hotel Toronto",
    description: "Same block on Bay Street",
  },
  {
    name: "Park Hyatt Toronto",
    description: "3 blocks north on Avenue Road",
  },
  {
    name: "The Mink Mile",
    description: "Bloor Street luxury shopping corridor",
  },
  {
    name: "Gardiner Museum",
    description: "Museum district near Queen's Park",
  },
  {
    name: "Church-Wellesley Village",
    description: "10-minute walk east",
  },
  {
    name: "Casa Loma",
    description: "15 minutes north via subway",
  },
  {
    name: "St. George Campus",
    description: "University of Toronto main campus",
  },
];

export const RosedaleAccessPoints = [
  {
    name: "From Queen's Park & Government District",
    description:
      "8-minute walk south on Avenue Road to Bloor, then east to our optometry clinic",
  },
  {
    name: "From Church Street Corridor",
    description:
      "Walk west on Bloor Street directly to our Manulife Centre location",
  },
  {
    name: "From Bay Street Financial District",
    description:
      "Take Bay Street north directly to our building at Bloor intersection",
  },
  {
    name: "From University of Toronto (St. George Campus)",
    description:
      "One subway stop to Bay Station or 10-minute walk via Bloor Street",
  },
  {
    name: "From Yonge Street",
    description:
      "2-minute walk west on Bloor Street to our optometry clinic entrance",
  },
];

export const theBeachesMajorStreets = [
  {
    name: "Queen Street East",
    description: "Our main location on the cultural strip",
  },
  {
    name: "Woodbine Avenue",
    description: "Gateway to Woodbine Beach (5-minute walk)",
  },
  {
    name: "Coxwell Avenue",
    description: "Western Beaches boundary",
  },
  {
    name: "Victoria Park Avenue",
    description: "Eastern Beaches limit",
  },
  {
    name: "Kingston Road",
    description: "Upper Beaches residential area",
  },
  {
    name: "Lakeshore Boulevard",
    description: "Waterfront access route",
  },
  {
    name: "Main Street",
    description: "Upper Beaches community hub",
  },
  {
    name: "Gerrard Street East",
    description: "Northern Beaches corridor",
  },
];

export const theBeachesLandmarks = [
  {
    name: "Woodbine Beach",
    description: "Toronto's premier beach (3-minute walk)",
  },
  {
    name: "Kew Gardens Park",
    description: "Historic community center and Jazz Festival venue",
  },
  {
    name: "Toronto Beaches Boardwalk",
    description: "3.5km lakefront promenade",
  },
  {
    name: "Balmy Beach Park",
    description: "Eastern beaches recreation area",
  },
  {
    name: "Leuty Lifeguard Station",
    description: "Iconic heritage landmark",
  },
  {
    name: "R.C. Harris Water Treatment Plant",
    description: " Art Deco architectural masterpiece",
  },
  {
    name: "Martin Goodman Trail",
    description: "Waterfront cycling and walking path",
  },
  {
    name: "Ashbridge's Bay",
    description: "Natural harbor and park space",
  },
  {
    name: "Beaches Branch Library",
    description: "Historic 1916 Carnegie library",
  },
  {
    name: "Kew Beach Tennis Club",
    description: "Community sports facility",
  },
];

export const theBeachesAccessPoints = [
  {
    name: "From Woodbine Beach",
    description: "3-minute walk north on Woodbine Avenue to Queen Street East",
  },
  {
    name: "From TTC Subway",
    description:
      "Take Bloor-Danforth Line to Woodbine Station, then 92 Woodbine bus south to Queen",
  },
  {
    name: "From Downtown Toronto",
    description: "Take 501 Queen streetcar east directly to our location",
  },
  {
    name: "From Kingston Road (Upper Beaches)",
    description: "Short walk south on local streets to Queen Street",
  },
  {
    name: "By Car",
    description:
      "Street parking available on Queen Street East and side streets",
  },
];

export const teamMembers = [
  {
    name: "Dr. Sam Baraam",
    role: "Optometrist",
    image: TeamSamBaraamImage,
    slug: "dr-sam-baraam",
  },
  {
    name: "Dr. Anita Sritharan",
    role: "Optometrist",
    image: TeamAnitaSritharanImage,
    slug: "dr-anita-sritharan",
  },
  {
    name: "Dr. Hashim Pervaiz",
    role: "Optometrist",
    image: TeamHashimPervaiz,
    slug: "dr-hashim-pervaiz",
  },
  {
    name: "Dr. Savannah Vecchiarelli",
    role: "Optometrist",
    image: TeamSavannahVecchiarelli,
    slug: "dr-savannah-vecchiarelli",
  },
  {
    name: "Dr. Alina Shahid",
    role: "Optometrist",
    image: TeamAlinaShahidImage,
    slug: "dr-alina-shahid",
  },
  {
    name: "Dr. Harmandeep Gill",
    role: "Optometrist",
    image: GillImage,
    slug: "dr-harmandeep-gill",
  },
  {
    name: "Dr. Gina Chen",
    role: "Optometrist",
    image: GinaChenImage,
    slug: "dr-gina-chen",
  },
  {
    name: "Brandon",
    role: "Optician",
    image: TeamBrandonImage,
  },
  {
    name: "Lucel",
    role: "Optician",
    image: TeamLucelImage,
  },
  {
    name: "Hannah",
    role: "Administrative Lead",
    image: TeamHannahImage,
  },
  {
    name: "Lily",
    role: "Administrative Lead",
    image: TeamLilyImage,
  },
  {
    name: "Mia",
    role: "Ophthalmic Technician",
    image: TeamMiaImage,
  },
  {
    name: "Vanessa",
    role: "Ophthalmic Technician",
    image: TeamVanessaImage,
  },
  {
    name: "Julia",
    role: "Optometric Assistant",
    image: TeamJuliaImage,
  },
  {
    name: "Melanie",
    role: "Optometric Assistant",
    image: TeamMelanieImage,
  },
];
