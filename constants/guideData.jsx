import {
  EyeEmergencyImage,
  OptometryImage,
  MedicalTeamImage,
  PediatricEyeCareImage,
} from "./Images";

/**
 * Centralized guide data for all pages.
 * Each key represents a slug used in the URL: /guide/[slug]
 */
export const guides = {
  "page-1": {
    title: "Our Services Guide",
    sections: [
      {
        id: "emergency-eye-care",
        layout: "image-right",
        heading: "Emergency Eye Care When Every Second Counts",
        image: {
          src: EyeEmergencyImage,
          alt: "Emergency Eye Care",
        },
        contentTop: (
          <>
            <p>
              Most people believe that eye injuries are common in the workplace,
              especially in manufacturing and construction industries. Contrary to
              this, nearly half (44.8%) of all eye-related injuries (eye
              emergencies) occurred at home. This is according to findings
              published by the American Society of Ocular Trauma (ASOT).
            </p>
            <p>
              A further 40% of reported eye injuries were due to sports-related
              activity. This disproves the myth that most eye injuries occur in
              the workplace. What's even more shocking is the fact that about 78%
              of the people who were injured were not wearing any protective
              eyewear.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              When it comes to your vision, emergencies can't wait. Eye emergencies are critical situations that require immediate medical attention to prevent potential vision loss or serious complications. Recognizing the signs of an eye emergency can make all the difference in preserving your sight and ensuring the best possible outcome.
            </p>
            <p>
              Swift action is crucial because certain conditions, such as retinal detachment, sudden vision loss, or chemical burns, can escalate rapidly. Ignoring these symptoms or delaying treatment can lead to irreversible damage. You increase your chances of effective treatment and recovery by seeking prompt care from an eye care professional.
            </p>
            <p>
              If you experience any sudden changes in vision, severe eye pain, redness, or injury to the eye, don't hesitate. Contact an eye care provider immediately to receive the necessary attention and care. Your eyes are invaluable, and timely intervention is key to maintaining your vision and overall eye health.
            </p>
          </>
        ),
      },
      {
        id: "advanced-eye-diagnostics",
        layout: "image-left",
        heading: "Advanced Eye Diagnostics & Technology",
        image: {
          src: OptometryImage,
          alt: "Advanced Diagnostics",
        },
        contentTop: (
          <>
            <p>
              At 360 Eyecare, we invest in the latest diagnostic technology to 
              provide the most accurate assessment of your eye health. Our 
              advanced tools allow us to detect issues that might go unnoticed 
              during a standard eye exam.
            </p>
            <p>
              From digital retinal imaging to optical coherence tomography (OCT), 
              we use non-invasive methods to peer deep into the structures of 
              your eyes, ensuring comprehensive care for every patient.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Our diagnostic capabilities include visual field testing for glaucoma 
              monitoring, corneal topography for contact lens fitting, and 
              specialized imaging for diabetic retinopathy. Early detection through 
              these technologies is key to preventing long-term vision loss.
            </p>
            <p>
              We believe that better data leads to better outcomes. That's why our 
              medical team is constantly updating their expertise with the newest 
              clinical protocols and technological advancements in the field of 
              optometry.
            </p>
          </>
        ),
      },
      {
        id: "medical-team",
        layout: "image-center",
        heading: "Meet Our Dedicated Medical Team",
        subheading: "Expert Care for Your Eyes",
        image: {
          src: MedicalTeamImage,
          alt: "Medical Team",
          width: 1000,
          height: 400,
        },
        contentTop: (
          <p>
            Our team of highly skilled optometrists and eye care professionals is
            dedicated to providing the highest quality of care to our patients.
            With years of experience and a passion for eye health, we strive to
            ensure that every patient receives the attention and care they deserve.
          </p>
        ),
        contentBottom: (
          <p>
            At 360 Eyecare, we work together to provide a seamless and comfortable experience for our patients. From the moment you walk through our doors to the completion of your eye exam, our team is here to support you and answer any questions you may have.
          </p>
        ),
      },
      {
        id: "pediatric-eye-care",
        layout: "image-full-right",
        heading: "Pediatric Eye Care Excellence",
        image: {
          src: PediatricEyeCareImage,
          alt: "Pediatric Eye Care",
        },
        contentTop: (
          <>
            <p>
              Early eye exams for children are crucial for their development and
              learning. Many vision problems can be effectively treated if detected
              early, ensuring that your child has the best start in life.
            </p>
            <p>
              Our pediatric eye care services are designed to be fun and engaging
              for children, while providing thorough and accurate assessments of
              their vision and eye health.
            </p>
            <p>
              We specialize in detecting and managing common childhood vision issues such as amblyopia (lazy eye), strabismus (crossed eyes), and refractive errors.
            </p>
          </>
        ),
      },
      {
        id: "why-choose-us",
        layout: "grid-points",
        heading: "Why Choose 360 Eyecare?",
        points: [
          /* ... points remain the same ... */
          {
            title: "Expert Optometrists",
            description: "Our team consists of highly trained and experienced professionals dedicated to your eye health.",
          },
          {
            title: "Advanced Technology",
            description: "We use the latest diagnostic tools to provide accurate and comprehensive eye exams.",
          },
          {
            title: "Patient-Centered Care",
            description: "We tailor our services to meet the unique needs and preferences of each patient.",
          },
          {
            title: "Convinient Locations",
            description: "With multiple locations across Toronto, we are always near you when you need us.",
          },
          {
            title: "Comprehensive Services",
            description: "From routine eye exams to advanced dry eye therapy, we offer a full range of eye care services.",
          },
          {
            title: "Emergency Eye Care",
            description: "We provide urgent eye care services to address sudden vision changes or eye injuries.",
          },
          {
            title: "Handcrafted Eyewear",
            description: "Discover our curated collection of designer frames and high-quality lenses.",
          },
          {
            title: "Myopia Management",
            description: "Specialized treatments to slow down the progression of nearsightedness in children.",
          },
        ],
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How often should I have an eye exam?",
        answer: "For most adults, a comprehensive eye exam is recommended every 1–2 years. However, children, seniors, and those with certain medical conditions like diabetes should have their eyes checked annually.",
      },
      {
        id: 2,
        question: "What should I bring to my appointment?",
        answer: "Please bring your current glasses, contact lens prescription, a list of any medications you are taking, and your provincial health card (OHIP) or private insurance information.",
      },
      {
        id: 3,
        question: "Do you offer direct billing to insurance?",
        answer: "Yes, we offer direct billing for most major insurance providers. Please contact our office to verify if your specific plan is supported.",
      },
      {
        id: 4,
        question: "Are eye exams covered by OHIP?",
        answer: "OHIP covers annual eye exams for children (19 and under) and seniors (65 and over). Adults aged 20-64 with specific medical conditions may also be eligible for coverage.",
      },
    ],
  },
  "page-2": {
    title: "Myopia Control Clinic",
    sections: [],
    faqs: [
      {
        id: 1,
        question: "What is myopia?",
        answer: "Myopia, or nearsightedness, is a common vision condition in which near objects appear clear, but objects farther away look blurry.",
      },
    ],
  },
  "page-3": {
    title: "Dry Eye Clinic",
    sections: [],
    faqs: [
      {
        id: 1,
        question: "What causes dry eyes?",
        answer: "Dry eyes can be caused by aging, digital eye strain, environmental factors, or underlying health conditions.",
      },
    ],
  },
  "page-4": { title: "Orthokeratology", sections: [], faqs: [] },
  "page-5": { title: "Pediatric Eye Exams", sections: [], faqs: [] },
  "page-6": { title: "Advanced Diagnostics", sections: [], faqs: [] },
  "page-7": { title: "Laser Vision Correction", sections: [], faqs: [] },
  "page-8": { title: "Eye Emergencies", sections: [], faqs: [] },
  "page-9": { title: "Eye Conditions", sections: [], faqs: [] },
  "page-10": { title: "Other Services", sections: [], faqs: [] },
};
