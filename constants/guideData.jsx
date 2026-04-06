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
  "eye-problems-treatments-toronto": {
    title: "Eye Problems & Treatments",
    headerImage: BeachImage,
    subtitle: "Your Vision Shapes Everything You Do",
    featureImage: ScreenHeadachesFeature,
    keyTakeaways: [
      "Most serious eye conditions like glaucoma and macular degeneration develop without symptoms, making regular eye exams essential for catching problems before permanent vision loss occurs.",
      "Presbyopia hits nearly everyone after 40, cataracts develop in most people over 75, and floaters become more common with aging, but treatments exist for most age-related changes.",
      "Sudden vision loss, flashing lights, or rapidly increasing floaters require immediate medical attention to prevent permanent damage from conditions like retinal detachment.",
      "Cataracts can be surgically corrected, diabetic retinopathy responds to injections and laser therapy, and childhood amblyopia corrects well with proper treatment before age 7.",
      "Ontario residents get coverage for diabetic eye exams, pediatric vision screening, and basic eye health services, making preventive care accessible across Toronto.",
    ],
    content: (
      <>
        <p>
          Your vision shapes everything you do, yet most people ignore eye
          health until it becomes a big issue. Eye problems and their treatments
          vary. To provide you with answers, this comprehensive guide addresses
          the questions patients ask most frequently across Toronto, from The
          Beaches to downtown, so you can recognize symptoms, understand
          treatment options, and know when professional care becomes essential
          for protecting your sight.
        </p>
      </>
    ),
    sections: [
      {
        id: "cataracts",
        heading: "What are Cataracts and How are they Treated?",
        image: {
          src: CataractImage,
          alt: "Cataract clouding illustration",
        },
        contentTop: (
          <>
            <p>
              Cataracts occur when the lens of your eyes becomes cloudy, thereby
              blocking light from reaching the retina. Modern cataract surgery
              replaces the clouded lens with an artificial one, restoring vision
              in approximately 15 minutes with a 98% success rate.
            </p>
            <p>
              The cataract-causing cloudiness is a result of the eye&apos;s lens
              gradually accumulating protein clumps. This egg white material
              turns opaque when heated.
            </p>
            <p>
              Toronto&apos;s healthcare system covers surgery through OHIP,
              though private clinics offer shorter waits and premium lens
              options. Most patients return to normal activities within days of
              the procedure.
            </p>
            <p>
              Perhaps the most remarkable aspect of treating cataract is how
              patients describe seeing colors they didn&apos;t previously
              notice.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Read our blog to learn more about cataracts:{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/cataract-prevention-tips-toronto/"
              >
                can they be prevented , and tips for protecting your eyes as you
                age.
              </a>
            </p>
          </>
        ),
      },
      {
        id: "macular-degeneration",
        heading:
          "What is Macular Degeneration and How can it Affect my Vision?",
        image: {
          src: MacularImage,
          alt: "Macular degeneration detailed vision loss",
        },
        contentTop: (
          <>
            <p>
              Macular degeneration damages the retina&apos;s central area,
              responsible for sharp, detailed vision. This progressive condition
              primarily affects people over 60. Early detection through advanced
              imaging significantly improves treatment outcomes.
            </p>
            <p>
              The macula controls what you see directly ahead reading,
              recognizing faces, driving. When it deteriorates, straight lines
              appear wavy. Eye clinics in Toronto frequently use Optical
              Coherence Tomography (OCT) scans to catch changes before symptoms
              develop.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Two types exist: dry and wet. Dry macular degeneration progresses
              slowly as retinal cells break down. Wet develops when abnormal
              blood vessels leak fluid under the retina. This causes rapid
              vision loss.
            </p>
            <p>
              Specialists from Yorkville to The Beaches now offer anti-VEGF
              injections for wet cases to stabilize vision in many patients.
              Nutritional supplements containing zinc and antioxidants may slow
              dry progression.
            </p>
            <p>
              Read our{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/macular-degeneration-treatment-toronto/"
              >
                comprehensive guide on macular degeneration to learn more.
              </a>
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
            <p>
              Diabetes damages tiny blood vessels throughout the retina. This
              causes diabetic retinopathy, the leading cause of blindness in
              working-age adults. The disease progresses silently. Early stages
              show no symptoms while blood vessels develop weak spots called
              microaneurysms. These leak fluid and blood into the surrounding
              retinal tissue.
            </p>
            <p>
              Treatment options include laser therapy to seal leaking vessels
              and anti-VEGF injections to reduce swelling. Vitrectomy surgery
              removes blood and scar tissue in severe cases.
            </p>
            <p>
              OHIP covers annual eye exams for diabetics across Ontario.
              Optometrists in Toronto recommend exams within five years of Type
              1 diagnosis and immediately for Type 2.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              The cruelest aspect isn&apos;t the gradual vision loss, but how
              decades of careful diabetes management can still fail to prevent
              this condition. Our blog on{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/diabetic-retinopathy-treatment-toronto/"
              >
                diabetic retinopathy discusses causes, symptoms, and risk
                factors.
              </a>
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
            <p>
              Glaucoma gradually damages the optic nerve through increased eye
              pressure, stealing peripheral vision so slowly most people
              don&apos;t notice until significant loss occurs. Regular pressure
              monitoring and early treatment with drops, laser therapy, or
              surgery can preserve remaining vision effectively.
            </p>
            <p>
              This “silent thief of sight” affects over 400,000 Canadians, yet
              half remain undiagnosed. The peripheral vision loss creates
              dangerous blind spots. Family history multiplies your risk
              significantly. Age amplifies it further &dash; one in 100 people
              over 40 develop glaucoma. African and Hispanic ancestry increases
              susceptibility.
            </p>
            <p>
              Toronto optometrists routinely measure eye pressure during
              comprehensive exams. Treatment ranges from daily pressure-lowering
              drops to minimally invasive surgical procedures.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              More information on causes, symptoms, and treatment options can be
              found in{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/protect-vision-glaucoma-toronto/"
              >
                our blog on glaucoma
              </a>
              .
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
            <p>
              Nearsightedness develops when your eyeball grows too long or your
              cornea curves too steeply, causing distant objects to appear
              blurry while close vision remains clear. Genetics, excessive near
              work, and reduced outdoor time drive this epidemic affecting over
              40% of North Americans.
            </p>
            <p>
              Your eye focuses light incorrectly when its shape changes during
              childhood development. Instead of landing precisely on the retina,
              light rays converge in front of it. This creates sharp vision for
              reading but makes street signs, whiteboards, and faces across
              rooms appear fuzzy.
            </p>
            <p>
              Research links reduced outdoor time to increased myopia rates.
              Natural light exposure appears protective, though scientists
              debate whether brightness, distance focusing, or physical activity
              provides the benefit.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Treatment options include glasses, contact lenses, orthokeratology
              (overnight reshaping lenses), and LASIK surgery for adults.
              Specialized contact lenses can slow progression in children.
            </p>
            <p>
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/what-is-myopia-and-how-to-correct-it/"
              >
                What is Myopia and how do we correct it
              </a>{" "}
              should be your next read. it provides an indepth discussion on all
              you need to know about Myopia.
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
            <p>
              Astigmatism occurs when your cornea or lens has an irregular,
              football-shaped curve instead of being perfectly round like a
              basketball. This uneven surface bends light rays unevenly,
              creating blurred or distorted vision at all distances that cannot
              be corrected by simply moving closer or farther away.
            </p>
            <p>
              Most people have slight astigmatism without realizing it. Severe
              cases cause headaches, eye strain, and difficulty driving at
              night. This condition typically develops during childhood and
              remains stable throughout life. Genetics play the primary role,
              though eye injuries or surgeries can create astigmatism later.
            </p>
            <p>
              Correction options include glasses, contact lenses, and refractive
              surgery.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/got-astigmatism-eye-condition-warning/"
              >
                Our detailed astigmatism blog
              </a>{" "}
              explores treatment options and lifestyle impacts thoroughly.
            </p>
          </>
        ),
        contentBottom: null,
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
            <p>
              Presbyopia steals your ability to focus on close objects as the
              eye’s natural lens loses flexibility with age. This universal
              condition affects nearly everyone after 40, making reading menus,
              threading needles, and checking phone messages increasingly
              difficult without holding items at arm’s length.
            </p>
            <p>
              Your lens changes shape constantly to focus on different distances
              – thick for near vision, thin for far. This process, called
              accommodation, requires flexible lens fibers. Age hardens these
              fibers like rubber bands left in sunlight.
            </p>
            <p>
              Toronto adults over 40 notice presbyopia’s onset gradually. The
              progression is predictable yet personal. Most people need reading
              glasses around age 45. By 65, accommodation disappears almost
              completely.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Solutions include reading glasses, bifocals, progressive lenses,
              and multifocal contacts. Monovision LASIK corrects one eye for
              distance, one for near vision.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/what-is-presbyopia-signs-fixes-expert-tips/"
              >
                Our comprehensive presbyopia blog
              </a>{" "}
              details these options and their trade-offs.
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
            <p>
              Lazy eye (amblyopia) develops when one eye becomes weaker because
              the brain favors input from the stronger eye during childhood
              development. Early treatment through patching, eye drops, or
              corrective lenses achieves excellent results in children, but
              adult correction becomes significantly more challenging once
              neural pathways solidify.
            </p>
            <p>
              The condition emerges when visual input differs between eyes
              &ndash; one might be more nearsighted, crossed, or blocked by a
              droopy eyelid. Your brain essentially &ldquo;turns off&rdquo; the
              weaker eye to avoid double vision, causing that eye&apos;s visual
              development to stagnate.
            </p>
            <p>
              Treatment works best before age 7 when neural plasticity peaks.
              Patching the stronger eye forces the weaker one to work harder.
              Eye drops can blur the dominant eye similarly. Toronto children
              from Yorkville to The Beaches often resist these treatments
              initially, but compliance determines success.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Adult treatment remains limited but possible. Vision therapy,
              specialized computer programs, and newer techniques show modest
              improvements in some cases.
            </p>
            <p>
              OHIP covers comprehensive pediatric eye exams across Ontario,
              recognizing early detection&apos;s importance.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/lazy-eye-treatment-for-adults-options/"
              >
                Our detailed amblyopia blog
              </a>{" "}
              explains treatment protocols and success rates thoroughly.
            </p>
          </>
        ),
      },
      {
        id: "color-blindness",
        heading: "What causes Colour Blindness and can it be Treated?",
        image: {
          src: PediatricEyeCareImage,
          alt: "Color blindness perception",
        },
        contentTop: (
          <>
            <p>
              Color blindness stems from missing or malfunctioning cone cells in
              the retina that detect red, green, or blue light wavelengths. This
              genetic condition, inherited through the X chromosome, affects 8%
              of men but only 0.5% of women. Currently no cure exists, though
              specialized glasses and contact lenses can enhance color
              discrimination for some people.
            </p>
            <p>
              Your retina contains three types of cone cells, each sensitive to
              different light wavelengths. When one type functions improperly or
              disappears entirely, color perception shifts. Red-green color
              blindness proves most common, making traffic lights challenging to
              distinguish.
            </p>
            <p>
              Rare cases develop from eye diseases, aging, or medications rather
              than genetics. Complete color blindness (seeing only grayscales)
              affects fewer than one in 30,000 people.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Treatment options remain limited. EnChroma glasses filter specific
              wavelengths to enhance color separation. Some contact lenses offer
              similar benefits.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/colour-blindness-toronto-guide/"
              >
                Our comprehensive colour blindness blog
              </a>{" "}
              explores adaptation strategies and assistive technologies.
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
              Blurry vision results from numerous causes ranging from simple
              refractive errors requiring glasses to serious conditions like
              cataracts, glaucoma, or retinal problems. Sudden onset needs
              immediate medical attention, while gradual changes often indicate
              natural aging or prescription updates. Professional diagnosis
              determines appropriate treatment.
            </p>
            <p>
              Your vision can blur for dozens of reasons. Refractive errors top
              the list &ndash; nearsightedness, farsightedness, and astigmatism
              all cause focusing problems. Diabetes triggers retinal swelling.
              High blood pressure damages delicate eye blood vessels.
              Medications like antihistamines and antidepressants affect tear
              production.
            </p>
            <p>
              Age brings presbyopia, cataracts, and macular degeneration. Sudden
              blurriness accompanied by flashing lights, floating spots, or eye
              pain signals medical emergencies requiring immediate care.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Toronto optometrists employ advanced diagnostic equipment &ndash;
              OCT scans, visual field testing, and corneal topography &ndash; to
              pinpoint causes quickly.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/common-causes-blurry-vision/"
              >
                Our comprehensive blog on common causes of blurry vision
              </a>{" "}
              explores specific conditions and their treatments in detail.
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
              Eye floaters appear as tiny specks, cobwebs, or squiggly lines
              drifting across your vision, caused by clumps of protein or cells
              casting shadows on your retina. Most floaters are harmless
              age-related changes, but sudden increases accompanied by flashing
              lights or vision loss require immediate medical attention to rule
              out retinal detachment.
            </p>
            <p>
              These annoying visual distractions develop when the vitreous gel
              inside your eye shrinks and pulls away from the retina. Think of
              it like fruit floating in gelatin that&apos;s beginning to
              separate. The clumps cast shadows that move as your eyes move.
            </p>
            <p>
              Worry when floaters multiply rapidly, especially with flashing
              lights or curtain-like vision loss. These symptoms suggest retinal
              tears or detachment requiring emergency surgery.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Our detailed blog{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/eye-floaters-causes-treatment/"
              >
                What Causes Floaters and Can They Be Treated?
              </a>{" "}
              covers removal options and coping strategies thoroughly.
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
              Understanding eye problems and treatments empowers you to protect
              your vision throughout life. Knowledge helps you recognize
              symptoms and seek appropriate treatment. Don&apos;t wait for
              vision changes to worsen &ndash;{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book your comprehensive eye exam
              </a>{" "}
              today and take control of your eye health before problems develop.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How often should I get my eyes examined?",
        answer:
          "Adults need comprehensive eye exams every two years, or annually after age 40. Diabetics require yearly checkups regardless of age. Toronto optometrists recommend more frequent visits if you have family history of glaucoma or macular degeneration.",
      },
      {
        id: 2,
        question: "What are the warning signs of serious eye problems?",
        answer:
          "Sudden vision loss, flashing lights, curtain-like shadows, or rapidly increasing floaters demand immediate attention. Gradual changes like halos around lights, difficulty reading, or persistent eye pain also warrant professional evaluation within days.",
      },
      {
        id: 3,
        question:
          "What's the difference between an optometrist and ophthalmologist?",
        answer:
          "Optometrists provide comprehensive eye care, prescribe glasses and contacts, and treat most eye conditions. Ophthalmologists are medical doctors who perform surgery and handle complex diseases. Both practice throughout Yorkville, Bay Street, and The Beaches areas.",
      },
      {
        id: 4,
        question: "Can I prevent eye problems as I age?",
        answer:
          "Regular exams catch problems early. UV protection slows cataract development. Managing diabetes and blood pressure protects retinal health. Eating leafy greens supports macular health. However, some age-related changes like presbyopia affect everyone eventually.",
      },
    ],
  },
  "page-2": {
    title: "Myopia Control Clinic",
    keyTakeaways: [],
    content: (
      <p>
        Myopia, or nearsightedness, has become a global health concern. Our
        clinic specializes in advanced myopia control strategies to slow its
        progression and protect long-term vision health.
      </p>
    ),
    sections: [],
    faqs: [
      {
        id: 1,
        question: "What is myopia?",
        answer:
          "Myopia, or nearsightedness, is a common vision condition in which near objects appear clear, but objects farther away look blurry.",
      },
    ],
  },
  "dry-eye-syndrome-symptoms-causes-treatments-toronto": {
    title: "Dry Eye 101",
    keyTakeaways: [],
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
        answer:
          "Dry eyes can be caused by aging, digital eye strain, environmental factors, or underlying health conditions.",
      },
    ],
  },
  "choose-glasses-contact-lenses-guide": {
    title: "Glasses vs Contact Lenses",
    keyTakeaways: [],
    content: (
      <p>
        Discover the freedom of clear vision without surgery or daytime lenses.
        Ortho-K reshaping happens while you sleep.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "pediatric-optometrists-toronto-child-eye-care": {
    title: "Pediatric Eye Care 101",
    keyTakeaways: [],
    content: (
      <p>
        Early eye exams are essential for developmental success. We provide a
        friendly, thorough environment for our youngest patients.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "eye-exams-cost-ohip-coverage-toronto": {
    title: "Eye Exam Cost & OHIP",
    keyTakeaways: [],
    content: (
      <p>
        Our clinic invests in state-of-the-art technology to provide the most
        precise diagnosis and monitoring for your eye health.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "eye-doctor-toronto-optometrist-ophthalmologist-optician": {
    title: "Optometrist vs Ophthalmologist",
    keyTakeaways: [],
    content: (
      <p>
        Explore the possibilities of life with reduced dependence on glasses or
        contacts through modern laser procedures.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "eye-emergency-immediate-actions-toronto": {
    title: "Eye Emergency 101",
    keyTakeaways: [],
    content: (
      <p>
        If you're experiencing sudden vision loss, flashing lights, or chemical
        exposure, our clinic provides immediate emergency eye care.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "eye-care-tips-toronto-healthy-vision": {
    title: "Eye Care 101",
    keyTakeaways: [],
    content: (
      <p>
        From cataracts to glaucoma, we provide comprehensive care and management
        for a wide range of ocular health conditions.
      </p>
    ),
    sections: [],
    faqs: [],
  },
  "eye-protection-101-toronto-tips": {
    title: "Eye Protection 101",
    keyTakeaways: [],
    content: (
      <p>
        Learn about our specialized eye care services tailored to meet your
        unique visual needs and lifestyle.
      </p>
    ),
    sections: [],
    faqs: [],
  },
};
