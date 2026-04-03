import {
  EyeEmergencyImage,
  OptometryImage,
  MedicalTeamImage,
  PediatricEyeCareImage,
  CataractImage,
  MacularImage,
  DiabeticImage,
  GlaucomaImage,
  MyopiaImage,
  SpectacleImage,
  UnderstandImage1,
  ColorfulGlassesImage,
  IrritatingEyeImage,
  UnderstandImage4,
  BeachImage,
  ScreenHeadachesFeature,
} from "./Images";

export const guides = {
  "page-1": {
    title: "Eye Problems and Treatments",
    headerImage: BeachImage,
    subtitle: "Your Vision Shapes Everything You Do",
    featureImage: ScreenHeadachesFeature,
    content: (
      <>
        <p>
          In today's digital age, screen-related headaches have become one of the
          most common complaints in eye clinics across Toronto. Whether you're working
          from a home office in The Beaches or commuting to a tech hub downtown,
          prolonged exposure to digital devices can strain your eyes and lead to
          persistent discomfort.
        </p>
        <p>
          Understanding the root causes of these headaches is the first step toward
          finding relief. From blue light exposure to improper posture and infrequent
          blinking, several factors contribute to "Computer Vision Syndrome."
          In this guide, we'll explore 6 daily habits that can significantly reduce
          eye strain and help you maintain crystal-clear vision in a digital world.
        </p>
      </>
    ),
    sections: [
      {
        id: "intro-summary",
        heading: "Eye Problems and Treatments",
        image: {
          src: EyeEmergencyImage,
          alt: "Eye Problems and Treatments Overview",
        },
        contentTop: (
          <>
            <p>
              Your vision shapes everything you do, yet most people ignore eye
              health until it becomes a big issue. Eye problems and their
              treatments vary.
            </p>
            <p>
              To provide you with answers, this comprehensive guide addresses the
              questions patients ask most frequently across Toronto, from The
              Beaches to downtown, so you can recognize symptoms, understand
              treatment options, and know when professional care becomes essential
              for protecting your sight.
            </p>
          </>
        ),
        contentBottom: (
          <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 mt-6">
            <h3 className="text-xl font-bold text-combination-200 mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-combination-100 mt-1">•</span>
                <p className="text-neutral-600">Most serious eye conditions develop without symptoms, making regular eye exams essential for catching problems before permanent vision loss occurs.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-combination-100 mt-1">•</span>
                <p className="text-neutral-600">Presbyopia, cataracts, and floaters are common age-related changes, but effective treatments exist for all.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-combination-100 mt-1">•</span>
                <p className="text-neutral-600">Sudden vision loss or flashing lights require immediate medical attention to prevent permanent damage.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-combination-100 mt-1">•</span>
                <p className="text-neutral-600">Many conditions respond well to surgery, injections, or vision therapy if detected early.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-combination-100 mt-1">•</span>
                <p className="text-neutral-600">OHIP coverage for seniors, children, and diabetics makes preventive care accessible across Toronto.</p>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "cataracts",
        heading: "What are Cataracts and How are they Treated?",
        image: {
          src: CataractImage,
          alt: "Cataract clouding illustration",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Cataracts occur when the lens of your eyes becomes cloudy, thereby blocking light from reaching the retina. Modern cataract surgery replaces the clouded lens with an artificial one, restoring vision in approximately 15 minutes with a 98% success rate.
            </p>
            <p>
              The cataract-causing cloudiness is a result of the eye’s lens gradually accumulating protein clumps. This egg white material turns opaque when heated.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Toronto’s healthcare system covers surgery through OHIP, though private clinics offer shorter waits and premium lens options. Most patients return to normal activities within days of the procedure.
            </p>
            <p>
              Perhaps the most remarkable aspect of treating cataract is how patients describe seeing colors they didn’t previously notice.
            </p>
          </>
        ),
      },
      {
        id: "macular-degeneration",
        heading: "What is Macular Degeneration and How can it Affect my Vision?",
        image: {
          src: MacularImage,
          alt: "Macular degeneration detailed vision loss",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Macular degeneration damages the retina’s central area, responsible for sharp, detailed vision. This progressive condition primarily affects people over 60. Early detection through advanced imaging significantly improves treatment outcomes.
            </p>
            <p>
              The macula controls what you see directly ahead – reading, recognizing faces, driving. When it deteriorates, straight lines appear wavy.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Toronto eye clinics use Optical Coherence Tomography (OCT) scans to catch changes before symptoms develop. Specialists from Yorkville to The Beaches now offer anti-VEGF injections for "wet" cases to stabilize vision.
            </p>
            <p>
              Nutritional supplements containing zinc and antioxidants may slow "dry" progression.
            </p>
          </>
        ),
      },
      {
        id: "diabetic-retinopathy",
        heading: "How does Diabetes Affect the Eyes (Diabetic Retinopathy)?",
        image: {
          src: DiabeticImage,
          alt: "Diabetic retinopathy blood vessel damage",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Diabetes damages tiny blood vessels throughout the retina. This causes diabetic retinopathy – the leading cause of blindness in working-age adults. The disease progresses silently.
            </p>
            <p>
              Early stages show no symptoms while blood vessels develop weak spots called microaneurysms. These leak fluid and blood into the surrounding retinal tissue.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Treatment options include laser therapy to seal leaking vessels and anti-VEGF injections to reduce swelling. OHIP covers annual eye exams for diabetics across Ontario.
            </p>
            <p>
              Toronto optometrists recommend exams within five years of Type 1 diagnosis and immediately for Type 2.
            </p>
          </>
        ),
      },
      {
        id: "glaucoma",
        heading: "What should I know about Glaucoma and Vision Protection?",
        image: {
          src: GlaucomaImage,
          alt: "Glaucoma peripheral vision loss",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Glaucoma gradually damages the optic nerve through increased eye pressure, stealing peripheral vision so slowly most people don’t notice until significant loss occurs.
            </p>
            <p>
              This “silent thief of sight” affects over 400,000 Canadians, yet half remain undiagnosed. Family history multiplied your risk significantly.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Age amplifies it further – one in 100 people over 40 develop glaucoma. African and Hispanic ancestry increases susceptibility.
            </p>
            <p>
              Toronto optometrists routinely measure eye pressure during comprehensive exams. Treatment ranges from daily drops to minimally invasive surgery.
            </p>
          </>
        ),
      },
      {
        id: "myopia",
        heading: "Why am I Nearsighted (Myopia) and what can be done?",
        image: {
          src: MyopiaImage,
          alt: "Myopia vision focusing error",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Nearsightedness develops when your eyeball grows too long or your cornea curves too steeply, causing distant objects to appear blurry while close vision remains clear.
            </p>
            <p>
              Genetics, excessive near work, and reduced outdoor time drive this epidemic affecting over 40% of North Americans.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Research links natural light exposure to protection from myopia. Treatments include glasses, contact lenses, orthokeratology (overnight reshaping), and LASIK for adults.
            </p>
            <p>
              Specialized contact lenses can significantly slow progression in children.
            </p>
          </>
        ),
      },
      {
        id: "astigmatism",
        heading: "What does it mean if I have Astigmatism?",
        image: {
          src: SpectacleImage,
          alt: "Astigmatism lens correction",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Astigmatism occurs when your cornea or lens has an irregular, football-shaped curve instead of being perfectly round like a basketball. This uneven surface bends light rays unevenly.
            </p>
            <p>
              Most people have slight astigmatism without realizing it. Severe cases cause headaches, eye strain, and difficulty driving at night.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              This condition typically develops during childhood and remains stable. Genetics play the primary role, though injuries can create it later.
            </p>
            <p>
              Correction options include glasses, contact lenses, and refractive surgery.
            </p>
          </>
        ),
      },
      {
        id: "presbyopia",
        heading: "What is Presbyopia, and why does it happen with Age?",
        image: {
          src: UnderstandImage1,
          alt: "Presbyopia age related vision changes",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Presbyopia steals your ability to focus on close objects as the eye’s natural lens loses flexibility. This affects nearly everyone after 40.
            </p>
            <p>
              Your lens changes shape constantly to focus – thick for near, thin for far. Age hardens these fibers like rubber bands left in sunlight.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Most people need reading glasses around age 45. Solutions include bifocals, progressive lenses, and multifocal contacts.
            </p>
            <p>
              Monovision LASIK is an option for adults looking for surgical correction of presbyopia.
            </p>
          </>
        ),
      },
      {
        id: "amblyopia",
        heading: "Can Lazy Eye (Amblyopia) be Corrected in Children or Adults?",
        image: {
          src: PediatricEyeCareImage,
          alt: "Pediatric eye care and amblyopia",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Lazy eye developments when one eye becomes weaker because the brain favors input from the stronger eye during childhood development.
            </p>
            <p>
              Treatment works best before age 7 when neural plasticity peaks. Patching or blurring the stronger eye forces the weaker one to work harder.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Adult treatment remains limited but possible through vision therapy. OHIP covers comprehensive pediatric eye exams across Ontario.
            </p>
            <p>
              Toronto children from Yorkville to The Beaches often require these treatments for developmental success.
            </p>
          </>
        ),
      },
      {
        id: "color-blindness",
        heading: "What causes Colour Blindness and can it be Treated?",
        image: {
          src: ColorfulGlassesImage,
          alt: "Color blindness perception",
        },
        contentTop: (
          <>
            <p className="text-combination-100 font-bold mb-2 uppercase tracking-wide text-sm">optometrist toronto</p>
            <p>
              Color blindness stems from malfunctioning cone cells in the retina. This genetic condition affects 8% of men but only 0.5% of women.
            </p>
            <p>
              Currently no cure exists, though specialized EnChroma glasses can enhance color discrimination for some people.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Your retina contains three types of cone cells (red, green, blue). Red-green color blindness proved most common, making traffic lights challenging.
            </p>
            <p>
              Rare cases develop from eye diseases, aging, or medications rather than genetics.
            </p>
          </>
        ),
      },
      {
        id: "blurry-vision",
        heading: "Why is My Vision Blurry?",
        image: {
          src: IrritatingEyeImage,
          alt: "Causes of blurry vision",
        },
        contentTop: (
          <>
            <p>
              Blurry vision results from numerous causes ranging from refractive errors to serious conditions like cataracts or glaucoma.
            </p>
            <p>
              Refractive errors top the list – nearsightedness, farsightedness, and astigmatism all cause focusing problems.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Sudden onset needs immediate medical attention. High blood pressure or diabetes can also trigger vision changes by damaging delicate eye blood vessels.
            </p>
            <p>
              Toronto optometrists employ OCT scans and corneal topography to pinpoint causes quickly.
            </p>
          </>
        ),
      },
      {
        id: "floaters",
        heading: "What are Eye Floaters and when should I Worry about them?",
        image: {
          src: UnderstandImage4,
          alt: "Eye floaters shadows on retina",
        },
        contentTop: (
          <>
            <p>
              Eye floaters appear as tiny specks or cobwebs caused by clumps of protein casting shadows on your retina.
            </p>
            <p>
              Most floaters are harmless age-related changes, but sudden increases accompanied by flashing lights require immediate care.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              These develop when the vitreous gel inside your eye shrinks and pulls away from the retina.
            </p>
            <p>
              Worry when floaters multiply rapidly, which may suggest retinal tears or detachment requiring emergency surgery.
            </p>
          </>
        ),
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Understanding eye problems and treatments empowers you to protect your vision throughout life. Knowledge helps you recognize symptoms and seek appropriate treatment.
            </p>
            <p className="font-bold text-lg text-combination-200">
              Don’t wait for vision changes to worsen – Book your comprehensive eye exam today and take control of your eye health before problems develop.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How often should I get my eyes examined?",
        answer: "Adults need comprehensive eye exams every two years, or annually after age 40. Diabetics require yearly checkups regardless of age. Toronto optometrists recommend more frequent visits if you have family history of glaucoma or macular degeneration.",
      },
      {
        id: 2,
        question: "What are the warning signs of serious eye problems?",
        answer: "Sudden vision loss, flashing lights, curtain-like shadows, or rapidly increasing floaters demand immediate attention. Gradual changes like halos around lights, difficulty reading, or persistent eye pain also warrant professional evaluation within days.",
      },
      {
        id: 3,
        question: "What’s the difference between an optometrist and ophthalmologist?",
        answer: "Optometrists provide comprehensive eye care, prescribe glasses and contacts, and treat most eye conditions. Ophthalmologists are medical doctors who perform surgery and handle complex diseases. Both practice throughout Yorkville, Bay Street, and The Beaches areas.",
      },
      {
        id: 4,
        question: "Can I prevent eye problems as I age?",
        answer: "Regular exams catch problems early. UV protection slows cataract development. Managing diabetes and blood pressure protects retinal health. Eating leafy greens supports macular health. However, some age-related changes like presbyopia affect everyone eventually.",
      },
    ],
  },
  "page-2": {
    title: "Myopia Control Clinic",
    content: (
      <p>
        Myopia, or nearsightedness, has become a global health concern. Our clinic 
        specializes in advanced myopia control strategies to slow its progression 
        and protect long-term vision health.
      </p>
    ),
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
    content: (
      <p>
        Dry eye is more than just a nuisance; it's a clinical condition that 
        requires professional care. We offer sophisticated diagnostics and 
        personalized treatment plans for lasting relief.
      </p>
    ),
    sections: [],
    faqs: [
      {
        id: 1,
        question: "What causes dry eyes?",
        answer: "Dry eyes can be caused by aging, digital eye strain, environmental factors, or underlying health conditions.",
      },
    ],
  },
  "page-4": { 
    title: "Orthokeratology", 
    content: <p>Discover the freedom of clear vision without surgery or daytime lenses. Ortho-K reshaping happens while you sleep.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-5": { 
    title: "Pediatric Eye Exams", 
    content: <p>Early eye exams are essential for developmental success. We provide a friendly, thorough environment for our youngest patients.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-6": { 
    title: "Advanced Diagnostics", 
    content: <p>Our clinic invests in state-of-the-art technology to provide the most precise diagnosis and monitoring for your eye health.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-7": { 
    title: "Laser Vision Correction", 
    content: <p>Explore the possibilities of life with reduced dependence on glasses or contacts through modern laser procedures.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-8": { 
    title: "Eye Emergencies", 
    content: <p>If you're experiencing sudden vision loss, flashing lights, or chemical exposure, our clinic provides immediate emergency eye care.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-9": { 
    title: "Eye Conditions", 
    content: <p>From cataracts to glaucoma, we provide comprehensive care and management for a wide range of ocular health conditions.</p>,
    sections: [], 
    faqs: [] 
  },
  "page-10": { 
    title: "Other Services", 
    content: <p>Learn about our specialized eye care services tailored to meet your unique visual needs and lifestyle.</p>,
    sections: [], 
    faqs: [] 
  },
};
