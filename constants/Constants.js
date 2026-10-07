import Link from "next/link";
import {
  AlinaShahidImage,
  AnitaSritharanImage,
  CataractImage,
  Cataract2,
  ContactLenspediaImage,
  cornealImage,
  DiabeticImage,
  DryEyeSyndromeImage,
  GillImage,
  GinaChenImage,
  GlaucomaImage,
  IPLTherapyImage,
  lasikImage,
  MacularImage,
  MeibographyImage,
  MyopiaPediaImage,
  octImage,
  PediatricEyeImage,
  PerimetryImage,
  prkImage,
  RetinalImage,
  RFTherapyImage,
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

export const commonEyeServices = [
  {
    label: "Cataracts",
    icon: "/commoneye/cataracts.png",
    image: Cataract2,
    title: "Understanding Cataracts and Treatment Options",
    description:
      "Cataracts are a common age-related eye condition that causes cloudy vision. Our clinic offers advanced surgical and non-surgical treatments to restore clear vision and improve quality of life. Our team of experts will guide you through the diagnosis, treatment, and recovery process, ensuring personalized care every step of the way.",
  },
  {
    label: "Glaucoma",
    icon: "/commoneye/glaucoma.png",
    image: GlaucomaImage,
    title: "Managing Glaucoma: Diagnosis to Treatment",
    description:
      "Glaucoma is a group of eye diseases that can lead to vision loss if left untreated. Our clinic specializes in early detection and personalized treatment plans to manage glaucoma effectively. From medication to surgical options, we offer comprehensive care to preserve your vision and enhance your quality of life.",
  },
  {
    label: "Dry Eye",
    icon: "/commoneye/dryEye.png",
    image: DryEyeSyndromeImage,
    title: "Relief from Dry Eye: Causes and Treatments",
    description:
      "Dry eye syndrome is a common condition that occurs when the eyes do not produce enough or poor-quality tears. Our clinic provides advanced diagnostic testing to determine the underlying cause of dry eye and offers personalized treatment plans to alleviate symptoms and improve eye comfort. From prescription eye drops to lifestyle changes, we tailor our approach to meet your unique needs and improve your overall eye health.",
  },
  {
    label: "Diabetic Retinopathy",
    icon: "/commoneye/diabetic.png",
    image: DiabeticImage,
    title: "Diabetic Retinopathy: Prevention and Treatment",
    description:
      "Diabetic retinopathy is a serious eye condition that affects people with diabetes. If not properly managed, it can lead to vision loss. Our clinic specializes in the early detection and treatment of diabetic retinopathy, offering comprehensive eye exams and advanced treatments to preserve vision and prevent complications. With a focus on patient education and proactive care, we help our patients maintain healthy vision and overall well-being.",
  },
  {
    label: "Macular Degeneration",
    icon: "/commoneye/mascular.png",
    image: MacularImage,
    title: "Macular Degeneration: Symptoms and Treatments",
    description:
      "Macular degeneration is a leading cause of vision loss in older adults. Our clinic offers state-of-the-art diagnostic testing and personalized treatment plans to manage macular degeneration effectively. From lifestyle modifications to advanced therapies, we provide comprehensive care to slow the progression of the disease and preserve your vision. Our team of experts is committed to helping you maintain healthy vision and quality of life.",
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

export const laservisionService = [
  {
    label: "PRK",
    icon: "/laser/prk.png",
    image: prkImage,
    title: "PRK Laser Vision Correction Treatment",
    description:
      "PRK (Photorefractive Keratectomy) is a type of laser eye surgery used to correct nearsightedness, farsightedness, and astigmatism. It involves removing the cornea’s outer layer before reshaping it with an excimer laser. PRK is often recommended for patients with thin corneas or other corneal irregularities. The procedure typically takes less than 15 minutes per eye, and most patients experience improved vision within a few days to a week. PRK is a safe and effective option for vision correction, offering long-lasting results and minimal risk of complications. If you’re considering PRK, our experienced team can help determine if you’re a candidate and guide you through the process.",
  },
  {
    label: "LASIK",
    icon: "/laser/lasik.png",
    image: lasikImage,
    title: "LASIK Laser Vision Correction Treatment",
    description:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is a popular laser eye surgery that reshapes the cornea to correct refractive errors such as nearsightedness, farsightedness, and astigmatism. It involves creating a thin flap in the cornea using a femtosecond laser and an excimer laser to reshape the underlying corneal tissue. LASIK is known for its quick recovery time and high success rate, with many patients achieving 20/25 vision or better after the procedure. LASIK offers a permanent solution for vision correction, reducing or eliminating the need for glasses or contact lenses. If you’re interested in LASIK, our skilled LASIK surgeons can determine if you’re a suitable candidate and provide personalized care throughout your journey to clearer vision.",
  },
  {
    label: "SMILE",
    icon: "/laser/bladeless.png",
    image: smileImage,
    title: "SMILE Laser Vision Correction Treatment",
    description:
      "SMILE(Small Incision Lenticule Extraction) is an innovative laser vision correction procedure that corrects myopia (nearsightedness) and astigmatism. Unlike LASIK, which creates a corneal flap, SMILE uses a femtosecond laser to create a small, lens-shaped piece of tissue within the cornea, which is then removed through a small incision. This gentle, minimally invasive procedure preserves more of the cornea’s structural integrity compared to LASIK, making it a suitable option for patients with thin corneas or those at higher risk of dry eye syndrome. SMILE offers rapid visual recovery, with many patients achieving clear vision within a few days. If you’re considering SMILE, our experienced ophthalmologists can assess your candidacy and provide personalized guidance to help you achieve your vision correction goals.",
  },
];

export const advanceddiagnosticsService = [
  {
    label: "OCT Scans",
    icon: "/advanceddiagnosis/oct.png",
    image: octImage,
    title: "OCT Scans for Detailed Eye Analysis",
    description:
      "OCT (Optical Coherence Tomography) provides high-resolution, cross-sectional retina and optic nerve images. It helps in the early detection and management of eye diseases such as glaucoma, macular degeneration, and diabetic retinopathy. OCT’s noninvasive nature makes it a valuable tool for monitoring and managing various eye conditions.",
  },

  {
    label: "Corneal Topography",
    icon: "/advanceddiagnosis/corneal.png",
    image: cornealImage,
    title: "Corneal Topography for Corneal Health Assessment",
    description:
      "Corneal topography maps the curvature and shape of the cornea, aiding in diagnosing conditions such as astigmatism, keratoconus, and corneal dystrophies. It is also used in preoperative evaluations for procedures like LASIK and contact lens fittings. This technology provides detailed information about the cornea, helping eye care professionals to customize treatment plans for each patient.",
  },
  {
    label: "Meibography",
    icon: "/advanceddiagnosis/meibography.png",
    image: MeibographyImage,
    title: "Meibography for Meibomian Gland Assessment",
    description:
      "Meibography is used to assess the meibomian glands responsible for producing the oily layer of the tear film. This test helps diagnose and manage meibomian gland dysfunction (MGD), a common cause of dry eye syndrome. By evaluating the structure and function of the meibomian glands, meibography helps eye care professionals determine the most appropriate treatment for MGD.  Such treatments include warm compress therapy, lid hygiene,  meibomian gland expression, Omega 3 fatty acids, or procedures such as Intense pulse light (IPL) or Radiofrequency (RF).",
  },
  {
    label: "Tear Osmolarity Testing",
    icon: "/advanceddiagnosis/tear.png",
    image: TearOsmolarityImage,
    title: "Tear Osmolarity Testing for Dry Eye Diagnosis",
    description:
      "Tear osmolarity testing measures the salt content in tears, an indicator of tear film stability. This test is useful in the diagnosis and management of dry eye disease. The iPen device collects a tear sample, which is then analyzed to determine tear osmolarity levels. By assessing tear osmolarity, eye care professionals can better understand the underlying causes of dry eye and develop personalized treatment plans to improve tear film stability and relieve dry eye symptoms.",
  },
  {
    label: "Perimetry & the Zeiss Humphrey",
    icon: "/advanceddiagnosis/perimetry.png",
    image: PerimetryImage,
    title: "Perimetry for Visual Field Assessment",
    description:
      "Perimetry is a test that measures the entire area of peripheral vision that can be seen while the eye is focused on a central point. The Zeiss Humphrey visual field analyzer is a tool used for this test. Perimetry is important for detecting and monitoring conditions that cause visual field loss, such as glaucoma, optic nerve damage, and neurological disorders. By regularly performing perimetry, eye care professionals can assess the progression of these conditions and adjust treatment plans accordingly.",
  },
  {
    label: "Retinal Imaging",
    icon: "/advanceddiagnosis/retinal.png",
    image: RetinalImage,
    title: "Retinal Imaging for Comprehensive Retina Evaluation",
    description:
      "Retinal imaging uses specialized cameras to capture detailed images of the retina, blood vessels, and optic nerve head. These images help in the early detection and management of various eye diseases, including diabetic retinopathy, age-related macular degeneration, and retinal detachments. Retinal imaging is a non-invasive procedure that provides valuable information about the retina’s health, allowing eye care professionals to detect and monitor eye conditions more effectively.",
  },
  {
    label: "IPL Therapy",
    icon: "/advanceddiagnosis/ipl.png",
    image: IPLTherapyImage,
    title: "Advanced IPL Therapy for Dry Eye",
    description:
      "Intense Pulsed Light (IPL) therapy effectively treats dry eye by targeting inflammation and improving tear film stability. It uses controlled light pulses to reduce blockages in the meibomian glands, providing lasting relief and significantly improving overall eye health and comfort for patients suffering from chronic dry eye.",
  },
  {
    label: "RF Therapy",
    icon: "/advanceddiagnosis/rf.png",
    image: RFTherapyImage,
    title: "Innovative RF Therapy for Dry Eye",
    description:
      "Radiofrequency (RF) therapy enhances dry eye treatment by stimulating collagen production and improving meibomian gland function. This non-invasive technique helps restore natural tear production, alleviating discomfort and irritation. Offering a comfortable and effective solution, RF therapy provides significant relief for chronic dry eye sufferers, improving their overall eye health.",
  },
];

export const pediatricEyeService = [
  {
    label: "Vision Therapy",
    icon: "/homeIcons/EFP.png",
    image: VisionThreapImage,
    title: "OCT Scans for Detailed Eye Analysis",
    description:
      "Our pediatric optometrists in Toronto provide personalized vision therapy programs to address visual problems that cannot be treated with eyeglasses or contact lenses. Vision therapy is a highly effective non-surgical treatment for lazy eye (amblyopia), eye turns (strabismus), and certain visual processing disorders. Vision therapy helps improve children’s visual skills and abilities through customized exercises and activities, leading to better academic performance and overall quality of life.",
  },

  {
    label: "Myopia Control",
    icon: "/homeIcons/MYO.png",
    image: MyopiaPediaImage,
    title: "Effective Myopia Control Treatments for Kids",
    description:
      "Myopia, or nearsightedness, is a common vision problem that often develops during childhood and can worsen over time. Our pediatric optometrists offer specialized myopia control treatments in Toronto to slow myopia progression in children. These treatments, such as orthokeratology (Ortho-K) and multifocal contact lenses, are safe and effective and can help reduce the risk of future eye health issues associated with high myopia.",
  },
  {
    label: "Pediatric Eye Exams",
    icon: "/homeIcons/PED.png",
    image: PediatricEyeImage,
    title: "Comprehensive Pediatric Eye Exams in Toronto",
    description:
      "Regular eye exams are essential for monitoring your child’s eye health and vision development. Our pediatric optometrists in Toronto conduct comprehensive eye exams specifically designed for children to detect and treat vision problems early. These exams include visual acuity testing, binocular vision assessment, eye health evaluation, and more.We create a comfortable and child-friendly environment to ensure a positive experience for your child during the exam.",
  },
  {
    label: "Contact Lens Fitting",
    icon: "/homeIcons/contactlens.png",
    image: ContactLenspediaImage,
    title: "Expert Contact Lens Fitting for Children",
    description:
      "Contact lenses can be a safe and effective vision correction option for children. Our pediatric optometrists in Toronto specialize in fitting contact lenses for kids, ensuring proper fit, comfort, and vision quality. Whether your child needs contact lenses for sports, activities, or daily wear, we provide personalized fitting services to meet their visual needs and lifestyle.",
  },
  {
    label: "Sports Vision",
    icon: "/homeIcons/mypio.png",
    image: SportsVisionImage,
    title: "Enhancing Sports Performance Through Vision Training",
    description:
      "Sports vision training focuses on improving visual skills essential for optimal sports performance. Our pediatric optometrists in Toronto offer specialized sports vision training programs to help young athletes enhance their hand-eye coordination, depth perception, visual reaction time, and tracking abilities. By improving these visual skills, young athletes can improve their performance, reduce the risk of sports-related injuries, and gain a competitive edge on the field or court.",
  },
];

export const faqDatapediatric = [
  {
    id: 1,
    question: "Q. At what age should my child have their first eye exam?",
    answer:
      "Children should have their first eye exam at around six months of age, followed by another exam at three years old, and then before starting school. After that, yearly exams are recommended.",
  },
  {
    id: 2,
    question:
      "Q. What are common signs that my child may have a vision problem?",
    answer:
      "Common signs of vision problems in children include frequent eye rubbing, squinting, tilting the head to see better, holding reading materials close to the face, and complaining of headaches or eye strain.",
  },
  {
    id: 3,
    question: "Q. Can my child wear contact lenses?",
    answer:
      "Yes, contact lenses can be a safe and effective option for children, but it depends on their age, maturity level, and ability to handle and care for the lenses. Our optometrists can help determine if contact lenses are suitable for your child.",
  },
  {
    id: 4,
    question: "Q. How can I protect my child's eyes during sports?",
    answer:
      "To protect your child’s eyes during sports, make sure they wear protective eyewear designed for the sport they’re playing. Regular eyeglasses or sunglasses are not sufficient for protecting the eyes during sports",
  },
  {
    id: 5,
    question: "Q. What is vision therapy, and how can it help my child?",
    answer:
      "Vision therapy is a customized program of eye exercises and activities designed to improve visual skills and abilities. It can help children with various vision problems, such as lazy eye (amblyopia), eye alignment issues (strabismus), and focusing problems.",
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
