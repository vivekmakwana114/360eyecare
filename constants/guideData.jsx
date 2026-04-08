import Image from "next/image";
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
  DryEyeSyndromeImage,
  understandDryEyeImage,
  symptomsDryImage,
  findeyedoctorImage,
} from "./Images";

export const guides = {
  // page -1
  "eye-problems-treatments-toronto": {
    title: "Eye Problems & Treatments",
    headerImage: BeachImage,
    subtitle:
      "Eye Problems and Treatments: Answers to the Most Common Questions",
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

  // page - 2
  "dry-eye-syndrome-symptoms-causes-treatments-toronto": {
    title: "Dry Eye 101",
    subtitle:
      "Why Are My Eyes Always Dry? A Complete Guide to Dry Eye Syndrome",
    featureImage: DryEyeSyndromeImage,
    keyTakeaways: [
      "Dry eyes happen when your tears can`t properly lubricate your eyes. This happens when you don’t make enough tears or the tears evaporate too quickly.",
      "Common causes of dry eyes include ageing, screen time, Toronto’s harsh climate, medications, and medical conditions like allergies or autoimmune diseases.",
      "Treatment options range from simple artificial tears and lifestyle changes to advanced therapies like IPL and radiofrequency.",
      "Prevention focuses on controlling humidity, taking screen breaks, proper blinking, and protecting your eyes from wind and sun exposure.",
      "See an optometrist if symptoms persist after two weeks of self-treatment.",
    ],
    content: (
      <>
        <p>
          Your eyes burn, they itch, and each time you blink, it feels like
          there’s sandpaper in your eyes. That is a symptom of dry eye syndrome.
          <a
            className="text-primary hover:underline"
            href="https://www.360eyecare.ca/dry-eye-syndrome-symptoms-causes-treatments-toronto"
          >
            Over 30% of Canadians deal with this frustrating condition daily.
          </a>{" "}
          So you are not alone in your search for dry eye treatment in Toronto.
          This guide helps you understand why you have dry eyes and how to find
          relief as an everyday Torontonian.
        </p>
      </>
    ),
    sections: [
      {
        id: "what-is-dry-eye",
        heading: "What is Dry Eye Syndrome?",
        image: {
          src: understandDryEyeImage,
          alt: "Dry eye treatment toronto",
        },
        contentTop: (
          <>
            <p>
              Dry eye syndrome happens when your tears are unable to lubricate
              your eyes as they should. This is due to your eyes not producing
              enough tears or the tears evaporating too quickly.
            </p>
            <p>
              Your tear film has three layers: oil, water, and mucus. When one
              of these layers gets disrupted, you begin to experience dry eyes.
              The condition affects millions worldwide, and Toronto’s harsh
              winters plus indoor heating make it particularly common here
              during colder months.
            </p>
          </>
        ),
      },
      {
        id: "symptoms",
        heading: "Common Symptoms of Dry Eyes",
        image: {
          src: symptomsDryImage,
          alt: "Dry eye symptoms toronto",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Dry eyes come with a collection of symptoms that can range from
              mildly annoying to genuinely debilitating. Here are some :
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Burning and Stinging Sensations
              </h4>
              <p>
                Your eyes feel like someone sprinkled hot sauce directly onto
                them. This burning sensation typically worsens throughout the
                day as your natural tear production struggles to keep up with
                evaporation. The stinging can be so intense that you
                instinctively want to rub your eyes, which only makes things
                worse.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Scratchy, Gritty Feeling
              </h4>
              <p>
                Every blink feels rough and uncomfortable, as if your eyelids
                are scraping against sandpaper. This grittiness often
                intensifies in windy conditions or air-conditioned environments
                where moisture gets sucked away faster.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Redness and Irritation
              </h4>
              <p>
                Your eyes look like you&apos;ve been crying or staying up all
                night. The whites become pink or red as blood vessels dilate in
                response to the irritation. This redness can make you
                self-conscious and often accompanies a general feeling of
                soreness around your eye area.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Excessive Watering
              </h4>
              <p>
                Paradoxically, dry eyes often produce too many tears. Your body
                recognizes the problem and floods your eyes with reflex tears,
                but these emergency tears lack the proper composition to
                actually solve the dryness. You end up with streaming eyes that
                still feel parched.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">5. Blurred Vision</h4>
              <p>
                Your vision becomes inconsistent and unreliable. Text might
                appear fuzzy one moment and clear the next. This happens because
                an unstable tear film creates an uneven surface on your cornea,
                which disrupts how light enters your eye. Blinking improves your
                vision temporarily, but it&apos;s not long before it degrades
                again.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Light Sensitivity
              </h4>
              <p>
                Normal lighting conditions that never bothered you before would
                now begin to cause you some discomfort. Dry eyes can&apos;t
                properly filter and process light. This makes light from
                computer screens and sunny days feel overwhelming.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">7. Eye Fatigue</h4>
              <p>
                Your eyes tire quickly during normal activities like reading or
                computer work. The constant strain of trying to maintain clear
                vision through an inadequate tear film exhausts your eye
                muscles. By evening, your eyes feel heavy and worn out, even
                after minimal use.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "causes",
        heading: "What Causes Dry Eyes?",
        image: {
          src: IrritatingEyeImage,
          alt: "What causes dry eyes",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Your dry eyes didn&apos;t appear overnight &ndash; they&apos;re
              the result of specific triggers that disrupt your natural tear
              production and quality.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Age-Related Changes
              </h4>
              <p>
                Getting older means your tear glands slow down production. After
                50, both men and women experience decreased tear volume, but
                women face additional challenges due to hormonal fluctuations
                during menopause. Your meibomian glands (the tiny oil producers
                along your eyelid edges) also become less efficient with age.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Environmental Factors
              </h4>
              <p>
                Toronto&apos;s climate creates a perfect storm for dry eyes.
                Winter&apos;s freezing temperatures and low humidity suck
                moisture from your eyes, while summer&apos;s air conditioning
                does the same indoors. Wind, smoke, and dust particles irritate
                your ocular surface and accelerate tear evaporation. Even that
                cozy fireplace contributes to the problem.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Digital Eye Strain
              </h4>
              <p>
                Staring at screens reduces your blink rate by up to 60%. When
                you&apos;re focused on your computer, phone, or tablet, you
                forget to blink completely &ndash; and incomplete blinks
                don&apos;t properly spread tears across your eye surface. The
                blue light doesn&apos;t help either. It potentially disrupts
                your natural tear film stability.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Medical Conditions
              </h4>
              <p>
                Autoimmune diseases like{" "}
                <a
                  href="https://www.nidcr.nih.gov/health-info/sjogrens-disease"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Sjögren&apos;s syndrome
                </a>{" "}
                directly attack your tear and saliva glands. Diabetes is another
                condition that affects nerve function that controls tear
                production. Thyroid disorders can also alter both tear quantity
                and quality. Rheumatoid arthritis and lupus also commonly
                trigger dry eye symptoms as part of their systemic inflammation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">5. Medications</h4>
              <p>
                Your medicine cabinet might be sabotaging your eyes.
                Antihistamines, antidepressants, blood pressure medications, and
                birth control pills all reduce tear production as side effects.
                Even over-the-counter sleep aids can leave your eyes feeling
                parched the next morning.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Hormonal Changes
              </h4>
              <p>
                Hormonal fluctuations can significantly impact tear production.
                Women may experience dry eye symptoms during pregnancy,
                menopause, or while using hormone replacement therapy. These
                hormonal shifts can affect the oil glands in the eyelids,
                leading to increased tear evaporation and discomfort.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                7. Seasonal Allergies
              </h4>
              <p>
                Spring pollen doesn&apos;t just make you sneeze &ndash; it
                inflames your entire ocular surface. The constant rubbing and
                antihistamine use create a double assault on your tear film. Our
                detailed guide on{" "}
                <a
                  href="https://www.360eyecare.ca/seasonal-allergies-dry-eyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  seasonal allergies and dry eyes
                </a>{" "}
                explains exactly how allergens disrupt your eye&apos;s natural
                moisture balance and what you can do about it.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                8. Contact Lens Wear
              </h4>
              <p>
                Even the best contact lenses absorb tears and reduce oxygen flow
                to your cornea. Extended wear makes the problem worse, as
                protein deposits build up and create additional irritation. Many
                long-time contact lens users develop chronic dry eyes without
                realizing the connection.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                9. Previous Eye Surgery
              </h4>
              <p>
                LASIK and other refractive surgeries temporarily damage the
                nerves responsible for triggering tear production. Most people
                recover normal tear function within months, but some develop
                persistent dryness that requires ongoing management.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "serious-conditions",
        heading: "Is It Just Dryness or Something More Serious?",
        // image: {
        //   src: findeyedoctorImage,
        //   alt: "Serious eye conditions",
        // },
        contentTop: (
          <>
            <p>
              Not all eye discomfort comes from simple dryness. Sometimes what
              feels like dry eyes may even be a more serious condition that
              needs immediate medical attention.
            </p>
            <p>
              For example, a sudden onset of severe eye pain accompanied by
              vision changes could mean acute glaucoma. This medical emergency
              can permanently damage your sight within hours. If you experience
              rainbow halos around lights, nausea, and intense pressure behind
              your eyes, head to the emergency room immediately.
            </p>
            <p>
              Trust your instincts. If something feels different or frightening
              about your eye discomfort, don&apos;t wait. Toronto has excellent
              emergency eye care services, and catching problems early prevents
              complications.
            </p>
            <p>
              Your eyes are irreplaceable &ndash; when in doubt, get them
              checked professionally rather than hoping the problem disappears
              on its own.
            </p>
          </>
        ),
      },
      {
        id: "treatment",
        heading: "Treatment Options for Dry Eye Syndrome",
        image: {
          src: findeyedoctorImage,
          alt: "Dry eye treatment options",
        },
        contentTop: (
          <div>
            <p>
              Your relief plan depends on severity, underlying causes, and how
              your eyes respond to different options :
            </p>
            <ul className="pt-2 space-y-2">
              <li>
                <strong className="text-primary">
                  1. Over-the-Counter Eye Drops:
                </strong>
                <p className="text-base pl-4">
                  Artificial tears offer immediate relief for mild symptoms.
                  Look for preservative-free options if you need drops more than
                  four times daily &ndash; preservatives can irritate already
                  sensitive eyes. Gel drops last longer but may blur vision
                  temporarily. Some people find success with lipid-based drops
                  that target oil layer deficiency.
                </p>
              </li>
              <li>
                <strong className="text-primary">
                  2. Prescription Medications:
                </strong>
                <p className="text-base pl-4">
                  Restasis and Xiidra reduce inflammation and boost natural tear
                  production, but patience is required &ndash; benefits
                  typically appear after 3-6 months of consistent use. Steroid
                  drops provide faster relief during flare-ups but can’t be used
                  long-term due to side effects like increased eye pressure.
                </p>
              </li>
            </ul>
          </div>
        ),
        contentBottom: (
          <div>
            <ul className="pt-2 space-y-2">
              <li>
                <strong className="text-primary">3. Punctal Plugs</strong>
                <p className="text-base pl-4">
                  These tiny devices block your tear drainage ducts, keeping
                  natural and artificial tears on your eye surface longer.
                  Starting with temporary collagen plugs helps determine if
                  permanent silicone versions will help.{" "}
                  <a
                    href="https://www.360eyecare.ca/punctal-plugs-dry-eye-treatment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Our comprehensive guide on punctal plugs for dry eye
                    treatment
                  </a>{" "}
                  explains exactly how this simple procedure can improve your
                  comfort.
                </p>
              </li>
              <li>
                <strong className="text-primary">
                  4. IPL (Intense Pulsed Light) Therapy
                </strong>
                <p className="text-base pl-4">
                  Originally developed for skin treatments, IPL targets
                  inflammation around your eyelids that contributes to meibomian
                  gland dysfunction. The gentle pulses of light reduce bacteria
                  and improve oil gland function. Most patients need 3-4
                  sessions spaced weeks apart for optimal results. Check out our
                  detailed explanation of{" "}
                  <a
                    href="https://www.360eyecare.ca/ipl-therapy-dry-eyes-toronto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    IPL therapy for dry eyes
                  </a>{" "}
                  to see if you&apos;re a good candidate.
                </p>
              </li>
              <li>
                <strong className="text-primary">
                  5. Radiofrequency (RF) Therapy:
                </strong>
                <p className="text-base pl-4">
                  RF energy heats and melts hardened oils in your meibomian
                  glands while tightening loose eyelid skin. This dual-action
                  treatment addresses both functional and cosmetic concerns. The
                  procedure feels like a warm massage and requires no downtime.
                  <a
                    href="https://www.360eyecare.ca/rf-therapy-dry-eyes-toronto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Our complete guide to RF therapy for dry eyes
                  </a>{" "}
                  covers everything from treatment expectations to cost
                  considerations.
                </p>
              </li>
              <li>
                <strong className="text-primary">
                  6. Lifestyle Modifications:
                </strong>
                <p className="text-base pl-4">
                  Increase your blink rate during screen time by following the
                  20-20-20 rule: every 20 minutes, look at something 20 feet
                  away for 20 seconds. Use a humidifier in your bedroom and
                  office. Omega-3 supplements may improve tear quality over
                  time.
                </p>
              </li>
              <li>
                <strong className="text-primary">
                  7. Warm Compresses and Lid Hygiene:
                </strong>
                <p className="text-base pl-4">
                  Daily warm compresses soften hardened oils in your meibomian
                  glands. Follow with gentle lid massage to express these oils.
                  Specialized lid scrubs remove debris and bacteria that worsen
                  symptoms.
                </p>
              </li>
            </ul>
          </div>
        ),
      },
      {
        id: "prevention",
        heading: "How to Prevent Dry Eyes",
        image: {
          src: DryEyeSyndromeImage,
          alt: "Dry eye prevention",
        },
        contentTop: (
          <div className="space-y-6">
            <p>
              Prevention beats treatment every time. Simple daily habits can
              keep your tears flowing properly:
            </p>
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-primary">
                  1. Control Your Environment
                </h5>
                <p>
                  Toronto&apos;s winter air drops to 10-20% humidity indoors,
                  but your eyes need at least 40% to stay comfortable. Run a
                  humidifier in your bedroom and office. Position fans and air
                  conditioning vents away from your face &ndash; direct airflow
                  accelerates tear evaporation by up to 300%.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary">
                  2. Master the Art of Blinking
                </h5>
                <p>
                  <a
                    href="https://www.nalug.net/the-science-behind-blinking-how-many-times-a-day-does-a-person-blink/#:~:text=According%20to%20scientists%2C%20the%20average%20blink%20lasts%20for,day%2C%20which%20may%20vary%20depending%20on%20several%20factors."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    You blink 15,000 times daily
                  </a>{" "}
                  without thinking about it, but screen time cuts that rate in
                  half. Set hourly phone reminders to take deliberate blink
                  breaks. Practice full blinks where your upper lid completely
                  touches your lower lid &ndash; partial blinks don&apos;t
                  spread tears properly across your cornea.
                </p>
              </div>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-primary">
                3. Protect Against Wind and Sun
              </h5>
              <p>
                Wraparound sunglasses create a moisture chamber around your eyes
                while blocking UV rays that damage tear glands. Even on cloudy
                days, UV penetration remains high. In winter, the combination of
                cold air and bright snow reflection creates particularly harsh
                conditions for your ocular surface.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                4. Stay Hydrated Internally
              </h5>
              <p>
                Dehydration affects tear production within hours. Your body
                prioritizes vital organs over tear glands when water runs low.
                Aim for eight glasses daily, more if you drink caffeine or
                alcohol, which both have dehydrating effects.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                5. Take Regular Screen Breaks
              </h5>
              <p>
                The 20-20-20 rule isn&apos;t just marketing &ndash; it works.
                Every 20 minutes, focus on something 20 feet away for 20
                seconds. This relaxes focusing muscles and triggers natural
                blink reflexes. Consider blue light filtering glasses for
                evening screen use.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                6. Choose Contact Lenses Wisely
              </h5>
              <p>
                Daily disposables reduce protein buildup that irritates eyes. If
                you wear monthlies, replace them exactly on schedule. Sleeping
                in contacts, even extended-wear types, dramatically increases
                dry eye risk by reducing overnight oxygen flow.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "when-to-see-optometrist",
        heading: "When to See an Optometrist in Toronto",
        image: {
          src: findeyedoctorImage,
          alt: "When to see an optometrist in Toronto",
        },
        contentTop: (
          <div className="space-y-6">
            <p>
              Knowing when to seek professional help can save you months of
              unnecessary discomfort and prevent complications.
            </p>
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-primary">
                  1. Troublesome Symptoms
                </h5>
                <p>
                  Over-the-counter drops provide temporary relief for normal dry
                  eyes. If you&apos;re using artificial tears more than six
                  times daily without lasting improvement, something deeper is
                  wrong. Persistent symptoms after two weeks of consistent
                  treatment signal the need for professional evaluation.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary">2. Vision Changes</h5>
                <p>
                  Blurry vision that comes and goes with blinking suggests tear
                  film instability. But vision changes that persist even after
                  blinking, or sudden vision loss, require immediate attention.
                  Your optometrist can distinguish between dry eye-related blur
                  and more serious conditions.
                </p>
              </div>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-6">
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-primary">
                  3. Pain That Interferes With Daily Life
                </h5>
                <p>
                  Mild discomfort is manageable. Sharp, stabbing pain or
                  pressure that prevents you from working, reading, or driving
                  needs professional assessment. Severe light sensitivity that
                  forces you to wear sunglasses indoors also warrants urgent
                  care.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary">
                  4. Failed Self-Treatment
                </h5>
                <p>
                  You&apos;ve tried warm compresses, artificial tears, and
                  environmental changes for a month without improvement.
                  Different people respond to different treatments, and an
                  optometrist can identify why your current approach isn&apos;t
                  working and suggest alternatives.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary">
                  5. Recurring Infections or Inflammation
                </h5>
                <p>
                  Frequent styes, red bumps along your eyelid, or chronic
                  redness suggests underlying meibomian gland dysfunction. These
                  conditions respond well to professional treatment but can
                  worsen without proper care.
                </p>
              </div>
              <div>
                <h5 className="font-bold text-primary">
                  6. Contact Lens Problems
                </h5>
                <p>
                  Your lenses feel uncomfortable within hours of insertion, or
                  you can&apos;t wear them for your usual duration. This often
                  indicates tear film changes that an optometrist can diagnose
                  and treat.
                </p>
                <p>
                  {" "}
                  Toronto offers excellent eye care options, from walk-in
                  clinics for urgent problems to specialized dry eye centers for
                  complex cases. Many optometrists now offer advanced treatments
                  like IPL and radiofrequency therapy that weren&apos;t
                  available even five years ago.
                </p>
              </div>
            </div>
          </div>
        ),
      },

      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Dry eyes don&apos;t have to control your life. Understanding your
              symptoms and triggers puts you back in the driver&apos;s seat.
              Whether you need simple lifestyle adjustments or advanced
              treatments like our IPL and RF therapy options, relief is within
              reach.
            </p>
            <p>
              Don&apos;t spend another day squinting through discomfort.{" "}
              <a
                className="text-primary underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book an appointment with our Toronto eye care specialists
              </a>{" "}
              today and discover which treatment approach will finally give your
              eyes the comfort they deserve.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How long does dry eye treatment take to work?",
        answer:
          "Most artificial tears provide immediate relief, while prescription drops like Restasis need 3-6 months for full benefits. Advanced treatments like IPL typically show improvement after 2-3 sessions spaced weeks apart.",
      },
      {
        id: 2,
        question: "Can dry eyes cause permanent damage?",
        answer:
          "Severe untreated dry eyes can lead to corneal scarring and vision problems. However, most cases respond well to treatment when caught early, preventing long-term complications from developing.",
      },
      {
        id: 3,
        question: "Are expensive eye drops better than cheaper ones?",
        answer:
          "Not necessarily. Preservative-free drops work better for frequent use, but brand doesn’t matter much. The key is finding the right consistency and ingredients for your specific type of dryness.",
      },
      {
        id: 4,
        question: "Do blue light glasses help with dry eyes?",
        answer:
          "Blue light glasses may reduce eye strain, but they don’t directly treat dryness. The real benefit comes from reducing screen time and remembering to blink more frequently during computer work.",
      },
    ],
  },

  // page - 3
  "eye-emergency-immediate-actions-toronto": {
    title: "Eye Emergency 101",
    subtitle: "What Should I Do If I Have an Eye Emergency in Toronto?",
    featureImage: EyeEmergencyImage,
    keyTakeaways: [
      "Sudden vision loss, severe pain, chemical burns, or eye trauma need immediate medical attention to prevent permanent damage.",
      "Choose the right care level: emergency rooms for severe trauma and chemical burns, optometrists for urgent but stable issues.",
      "Protect the eye with a loose cover, flush chemicals for 15 minutes, and never remove embedded objects yourself.",
      "Call ahead to reduce wait times at hospitals, urgent care centers, or ophthalmology clinics.",
      "Prevention includes safety eyewear, proper contact lens hygiene, and regular eye exams.",
    ],
    content: (
      <>
        <p>
          You can lose your vision at 2 AM, or a foreign object can lodge where
          it shouldn’t be at any point in time. These are some of the unexpected
          ways eye emergencies occur. Emergencies don’t wait for convenient
          timing, and in Toronto’s sprawling metropolis, knowing where to turn
          when an emergency occurs can be what saves your sight.
        </p>
        <p>
          Toronto’s healthcare landscape offers several paths for urgent eye
          care, but not all emergencies require the same response. Therefore, it
          is wise for you to know your options before crisis strikes to preserve
          the gift you rely on the most. This guide teaches you what to do in
          case of an eye emergency in Toronto.
        </p>
      </>
    ),
    sections: [
      {
        id: "what-is-eye-emergency",
        heading: "What Counts as an Eye Emergency?",
        image: {
          src: EyeEmergencyImage,
          alt: "Eye emergency Toronto",
        },
        contentTop: (
          <>
            <p>
              An eye emergency is any sudden injury or condition that threatens
              your vision or causes severe pain that needs immediate medical
              attention. Not every eye problem requires you to rush to the
              hospital at midnight, but certain symptoms are so serious that you
              just cannot wait.
            </p>
            <h4 className="font-bold text-primary mb-1">
              Common Conditions That Require Urgent Care
            </h4>
            <p>
              Deciding which eye condition requires you to “wait until morning”
              or “go now” often depends on the following warning signs:
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Sudden Vision Loss
              </h4>
              <p>
                Complete or partial vision loss that occurs within minutes or
                hours needs immediate attention. When such occurs, it may
                indicate retinal detachment, stroke, or severe glaucoma attack.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">2. Chemical Burns</h4>
              <p>
                Any chemical splash to the eye, whether household cleaner or an
                industrial substance, needs to be flushed immediately. The
                damage will continue until the chemical is completely removed.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Severe Eye Pain
              </h4>
              <p>
                Intense throbbing pain, accompanied by nausea or headache, often
                indicates that acute glaucoma or a serious infection is lurking.
                This pain feels different from typical eye strain or dryness.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Flashing Lights and Floaters
              </h4>
              <p>
                New onset of flashing lights combined with a sudden increase in
                floaters may indicate retinal detachment. This condition
                progresses very fast and requires surgical intervention.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Foreign Objects in the Eye:
              </h4>
              <p>
                Large objects or anything embedded in the eye tissue need
                professional removal. Small particles that won&apos;t flush out
                with water also warrant urgent care.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Eye Trauma and Cuts:
              </h4>
              <p>
                Any injury that cuts the eyelid or eyeball, or blunt trauma that
                causes significant swelling and pain, requires immediate
                evaluation for internal damage.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "optometrist-vs-er",
        heading: "When to Go to an Optometrist vs Emergency Room?",
        image: {
          src: findeyedoctorImage,
          alt: "Emergency eye care Toronto",
        },
        contentTop: (
          <div className="space-y-4">
            <div>
              <p>
                Choosing the right care level can save precious time and
                potentially your vision. Here’s some guidance:
              </p>
              <h4 className="font-bold text-primary mb-1 mt-2">
                1. Emergency Room: Life-Threatening Symptoms
              </h4>
              <p>
                Head to the ER immediately for chemical burns, severe trauma
                with cuts, complete vision loss, or eye injuries with nausea and
                vomiting. These conditions can cause permanent damage to your
                eyes within a few hours.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Optometrist: Urgent but Stable Issues
              </h4>
              <p>
                Book same-day optometry appointments for eyes with discharge or
                new onset double vision. These issues need prompt attention but
                aren&apos;t immediately sight-threatening.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div>
            <h4 className="font-bold text-primary mb-1">
              3. When Time Matters Most
            </h4>
            <p>
              If you&apos;re questioning severity, err on the side of caution.
              Emergency rooms have equipment to handle complex eye trauma that
              optometry offices don&apos;t possess.
            </p>
          </div>
        ),
      },
      {
        id: "immediate-actions",
        heading: "What Are the Most Common Eye Emergencies in Toronto?",
        image: {
          src: findeyedoctorImage,
          alt: "Immediate eye emergency steps",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Toronto’s urban environment creates unique eye hazards that
              emergency rooms see repeatedly :
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Workplace Injuries
              </h4>
              <p>
                Construction sites across Yorkville and downtown Toronto
                generate the majority of serious eye trauma cases. Metal
                fragments, chemical splashes, and debris from renovation
                projects send workers to emergency rooms daily.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Winter-Related Eye Problems
              </h4>
              <p>
                Toronto’s harsh winters bring road salt injuries, snow blindness
                from bright reflections, and dry eye complications that can
                escalate to corneal damage during extended cold snaps.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Sports and Recreation Injuries
              </h4>
              <p>
                The Beaches volleyball courts and downtown hockey rinks
                contribute to blunt force eye trauma. Tennis balls, hockey
                pucks, and basketball injuries peak during recreational league
                seasons.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Chemical Exposure Incidents
              </h4>
              <p>
                Household cleaning accidents spike during spring cleaning
                season, while pool chemicals cause burns throughout summer
                months. These injuries require immediate flushing and
                professional evaluation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Contact Lens Complications
              </h4>
              <p>
                Toronto’s diverse population includes many contact lens wearers
                who develop serious infections from overwear, poor hygiene, or
                sleeping in daily disposables meant for single use.
              </p>
            </div>
            <p>
              For detailed information on recognizing and handling these
              situations, check out our comprehensive guide:{" "}
              <a
                className="text-primary underline"
                href="https://www.360eyecare.ca/emergency-eye-care-toronto-guide/"
              >
                Top 10 Most Common Eye Emergencies and How to Handle Them
              </a>
            </p>
          </div>
        ),
      },
      {
        id: "vision-warning-signs",
        heading: "What Should I Do Immediately If I Injure My Eye?",
        image: {
          src: findeyedoctorImage,
          alt: "Immediate eye emergency steps",
        },
        contentTop: (
          <>
            <p>
              Stop. Don&apos;t touch, rub, or attempt to remove anything from
              your injured eye. These often worsen the damage. The first few
              minutes after eye injury are very critical. Your immediate actions
              matter.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Step 1: Assess Without Touching
              </h4>
              <p>
                Look in a mirror if possible, but keep your hands away from the
                injured area. Note what you can see, any visible objects, or
                bleeding around the eye socket.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                Step 2: Protect the Injured Eye
              </h4>
              <p>
                Cover the eye gently with a clean cloth or paper cup taped
                loosely in place. Never apply pressure directly to the eyeball.
                If both eyes are injured, cover both to prevent synchronized eye
                movement.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Step 3: Handle Chemicals Immediately
              </h4>
              <p>
                For chemical splashes, flush continuously with clean water for
                at least 15 minutes before seeking care. Remove contact lenses
                only if they come out easily during flushing.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Step 4: Don&apos;t Remove Embedded Objects
              </h4>
              <p>
                Large objects stuck in the eye should never be pulled out.
                Stabilize them with bulky dressings around the object and seek
                immediate emergency care.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Step 5: Take Pain Medication Sparingly
              </h4>
              <p>
                Over-the-counter pain relievers are acceptable, but avoid
                aspirin, which can increase bleeding. Don&apos;t use numbing eye
                drops; they mask important symptoms doctors need to assess.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "prevention",
        heading: "Are Blurred Vision, Flashes, or Floaters an Emergency?",
        // image: {
        //   src: DryEyeSyndromeImage,
        //   alt: "Eye safety prevention",
        // },
        contentTop: (
          <div className="space-y-4">
            <p>
              Many people dismiss these warning signs as fatigue or aging, but
              your retina doesn’t send false alarms.
            </p>
            <div>
              <h5 className="font-bold text-primary">
                1. Gradual Blurred Vision: Usually Not an Emergency
              </h5>
              <p>
                Slowly developing blur over weeks or months typically indicates
                refractive changes, cataracts, or diabetes complications.
                Schedule an eye exam within days.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                2. Sudden Blurred Vision: Emergency Territory
              </h5>
              <p>
                Vision that becomes blurry within minutes or hours, especially
                in one eye, need immediate attention. This could indicate
                stroke, retinal vein occlusion, or severe glaucoma attack.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-primary">
                3. New Flashing Lights: Red Flag Symptom
              </h5>
              <p>
                Flashes that appear suddenly, particularly in peripheral vision,
                often indicate retinal tears. These don&apos;t resolve on their
                own and require urgent evaluation by an ophthalmologist.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                4. Floater Explosion: Rush to Care
              </h5>
              <p>
                A sudden shower of new floaters, especially with flashing lights
                or curtain-like vision loss, indicates retinal detachment. This
                constitutes a true emergency that requires surgery within hours.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                5. The Curtain Effect: Call 911
              </h5>
              <p>
                If vision appears blocked by a curtain or shadow moving across
                your visual field, don&apos;t drive yourself anywhere. This
                classic retinal detachment symptom needs immediate surgical
                repair.
              </p>
              <p>
                Toronto&apos;s Yorkville and The Beaches residents have
                excellent access to retinal specialists, but only if they
                recognize these symptoms early.
              </p>
              <p>
                Your brain can&apos;t regenerate retinal tissue once it&apos;s
                permanently damaged.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "prevention",
        heading: "What Should Parents Do If Their Child Has an Eye Emergency?",
        image: {
          src: DryEyeSyndromeImage,
          alt: "Eye safety prevention",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Keep your child calm while protecting the injured eye from further
              damage, avoid letting them rub or touch the area, and seek
              immediate medical attention for any vision changes or severe pain.
              Your composure directly affects your child’s cooperation during
              treatment.{" "}
            </p>
            <div>
              <h5 className="font-bold text-primary">
                1. Stay Calm and Assess Quickly
              </h5>
              <p>
                Your anxiety transfers instantly to your child. Take three deep
                breaths, then examine what happened without touching the eye.
                Ask simple questions about their vision and pain level.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-primary">
                2. Prevent Rubbing at All Costs
              </h5>
              <p>
                Children instinctively rub injured eyes, potentially pushing
                foreign objects deeper or scratching corneas further. Hold their
                hands gently but firmly if necessary.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                3. Handle Chemical Exposure Immediately
              </h5>
              <p>
                Flush with lukewarm water for 15 minutes minimum if any
                household cleaner, soap, or chemical touched their eye. Don’t
                worry about them crying; tears help flush harmful substances.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                4. Know Your Toronto Emergency Options
              </h5>
              <p>
                <a
                  href="https://www.360eyecare.ca/pediatric-eye-exams"
                  className="text-primary hover:underline"
                >
                  360 Eyecare offers pediatric ophthalmology,
                </a>{" "}
                while hospitals in Yorkville and The Beaches can handle most
                urgent cases. Don’t drive across the city if local emergency
                care is available.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                5. Document the Incident
              </h5>
              <p>
                Note the time, cause of injury, and your child’s symptoms.
                Emergency doctors need this information to provide appropriate
                treatment quickly.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "prevention",
        heading: "How Can I Get Emergency Eye Care in Toronto Quickly?",
        image: {
          src: DryEyeSyndromeImage,
          alt: "Eye safety prevention",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Call ahead to emergency departments, urgent care centers, or
              ophthalmology clinics to reduce wait times, as many facilities can
              prepare for your arrival and expedite treatment for serious eye
              injuries.
            </p>
            <p>
              Toronto’s healthcare system offers multiple pathways for urgent
              eye care, but knowing which door to enter saves precious time. The
              city’s size works against you during emergencies; choosing the
              wrong facility could add hours to your wait.
            </p>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-primary">
                1. Emergency Departments: 24/7 Access
              </h5>
              <p>
                Toronto General Hospital and Mount Sinai offer round-the-clock
                emergency eye care with ophthalmologists on call. The Beaches
                and Scarborough areas have Michael Garron Hospital for eastern
                Toronto residents.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                2. Walk-In Clinics: Faster for Minor Issues
              </h5>
              <p>
                Urgent care centers throughout Yorkville and downtown handle
                pink eye, foreign objects, and minor injuries with significantly
                shorter wait times than emergency rooms.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                3. Ophthalmology Clinics: Same-Day Appointments
              </h5>
              <p>
                Many eye specialists reserve slots for urgent cases. Call first
                thing in the morning for same-day availability, especially for
                retinal concerns or sudden vision changes.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                4. Telehealth Ontario: Triage Support
              </h5>
              <p>
                Call 811 for immediate assessment of symptoms. Nurses can
                determine if your situation requires emergency care or can wait
                for regular appointments.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                5. Private Eye Care Options
              </h5>
              <p>
                Some clinics offer extended hours and emergency services for
                faster access. These facilities often coordinate directly with
                hospitals when surgical intervention becomes necessary.
              </p>
              <p>
                For comprehensive information about eye care options throughout
                the city, visit our detailed guide:{" "}
                <a
                  href="https://www.360eyecare.ca/comprehensive-eye-care-services-rosedale-yorkville-toronto/"
                  className="text-primary hover:underline"
                >
                  Comprehensive Eye Care Services in Yorkville and Toronto.
                </a>
              </p>
              <p>
                <strong className="text-primary">
                  Transportation Considerations:
                </strong>{" "}
                <br />
                Don’t drive yourself with vision problems. TTC, taxis, or
                rideshare services prevent accidents while getting you to care
                quickly.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "prevention",
        heading: "How Can I Prevent Eye Emergencies?",
        image: {
          src: DryEyeSyndromeImage,
          alt: "Eye safety prevention",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Most eye emergencies are preventable with basic precautions that
              people consistently ignore. The same safety measures that feel
              unnecessary during routine activities become lifesavers when
              accidents happen.
            </p>

            <div>
              <h5 className="font-bold text-primary">
                1. Workplace Protection: Non-Negotiable
              </h5>
              <p>
                Safety glasses prevent 90% of work-related eye injuries, yet
                construction sites across Toronto see daily cases of workers who
                “forgot them for just five minutes.” Side shields and wraparound
                frames offer superior protection.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-primary">
                2. Sports Safety: Beyond the Obvious
              </h5>
              <p>
                Basketball causes more eye injuries than boxing. Racquet sports
                need polycarbonate lenses, while hockey requires full face
                protection.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-primary">
                3. Contact Lens Hygiene
              </h5>
              <p>
                Replace lenses on schedule, never sleep in dailies, and wash
                hands before handling. Overwearing contacts creates infections
                that can permanently scar corneas.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-primary">
                4. Chemical Awareness at Home
              </h5>
              <p>
                Store cleaning products securely and wear protection when using
                drain cleaners or oven sprays. Mix bleach with nothing; toxic
                gas can cause severe eye burns.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-primary">5. Regular Eye Exams</h5>
              <p>
                Annual checkups catch glaucoma, diabetic changes, and retinal
                problems before symptoms appear. Early detection prevents
                emergencies entirely.
              </p>
            </div>

            <div>
              <h5 className="font-bold text-primary">
                6. UV Protection Year-Round
              </h5>
              <p>
                Toronto’s winter snow reflects harmful rays that cause corneal
                burns. Quality sunglasses protect your sight.
              </p>
            </div>

            <div>
              <p>
                For detailed prevention strategies for busy lifestyles, check
                out our comprehensive resource:{" "}
                <a
                  href="https://www.360eyecare.ca/eye-care-tips-busy-professionals-families/"
                  className="text-primary underline"
                >
                  Eye Care Tips for Busy Professionals and Families.
                </a>
              </p>
            </div>

            <div>
              <h5 className="font-bold text-primary">
                7. Know Your Family History
              </h5>
              <p>
                Genetic predispositions to glaucoma, macular degeneration, and
                retinal detachment help predict and prevent future emergencies
                through proactive monitoring.
              </p>
            </div>

            <p>
              The best emergency is the one that never happens because you took
              simple precautions seriously.
            </p>
          </div>
        ),
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Your vision can’t wait for a convenient time to fail. Toronto’s
              eye emergency resources are excellent, but prevention remains your
              strongest defense. Don’t gamble with irreplaceable sight;
              recognize warning signs, act quickly when emergencies strike, and
              maintain regular eye care.
            </p>
            <p>
              Ready to protect your vision?{" "}
              <a
                href="https://www.360eyecare.ca/book-eye-exam"
                className="text-primary hover:underline"
              >
                Book your comprehensive eye exam
              </a>{" "}
              today and stay ahead of potential emergencies.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Should I drive myself to the hospital with an eye injury?",
        answer:
          "Never drive with vision problems, severe eye pain, or after eye trauma. Use public transit, rideshare, or ask someone to drive you to prevent accidents that could worsen your injury.",
      },
      {
        id: 2,
        question: "Can I use eye drops for emergency eye pain?",
        answer:
          "Avoid numbing drops or medication that masks symptoms doctors need to assess. Over-the-counter pain relievers are acceptable, but let medical professionals evaluate your eye condition first.",
      },
      {
        id: 3,
        question: "How long can I wait with sudden vision changes?",
        answer:
          "Sudden vision loss, flashing lights, or curtain-like shadows require immediate attention within hours. Gradual changes over weeks can wait for regular appointments, but don’t delay urgent symptoms.",
      },
      {
        id: 4,
        question: "What should I do if something gets stuck in my child’s eye?",
        answer:
          "Don’t let them rub the eye or attempt removal yourself. Cover gently with a clean cloth, keep them calm, and seek immediate medical attention at the nearest emergency facility.",
      },
    ],
  },

  // page - 4
  "choose-glasses-contact-lenses-guide": {
    title: "Glasses vs Contact Lenses",
    subtitle: "Should I Choose Glasses or Contact Lenses? A Complete Guide",
    featureImage: ColorfulGlassesImage,
    keyTakeaways: [
      'Your choice depends on lifestyle, not which option is "better".',
      "Sports, swimming, and outdoor activities favor contact lenses for freedom and safety.",
      "Glasses offer convenience and lower maintenance: no daily cleaning routines, lower infection risks, and they last for years.",
      "Glasses cost more upfront but contacts create ongoing monthly expenses that add up.",
      "Switch between options based on daily activities rather than limiting yourself to one choice.",
    ],
    content: (
      <>
        <p>
          The glasses vs. contact lenses debate centres on lifestyle, comfort,
          and how you prefer to navigate the world. On some mornings, you want
          the intellectual edge that frames provide. Other days, you crave the
          freedom of unobstructed peripheral vision. The choice of which is
          better isn&apos;t straightforward. It depends on several medical
          factors and your personal preference as a person. This guide provides
          a comprehensive explanation of both choices, the individual advantages
          of each option, the most suitable for your condition, how to care for
          them, and other tips.
        </p>
      </>
    ),
    sections: [
      // ── Section 0 ──────────────────────────────────────────────────────────
      {
        id: "difference",
        heading: "What's the Difference Between Glasses and Contact Lenses?",
        image: {
          src: MyopiaImage,
          alt: "Glasses vs contact lenses comparison",
        },
        contentTop: (
          <>
            <p>
              Glasses correct vision by placing curved lenses at a distance from
              your eyes, while contact lenses sit directly on your eye&apos;s
              tear film to redirect light. Both achieve the same goal, but in
              different ways.
            </p>
            <p className="text-primary text-base font-bold">
              Pros and Cons of Glasses and Contact Lenses
            </p>
            <p>
              Your decision on which of the two shouldn&apos;t be dependent on
              what worked for your college roommate. Here&apos;s what matters in
              your choice :
            </p>
          </>
        ),
        contentBottom: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div>
              <h4 className="font-bold text-primary mb-2">Glasses Pros</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>There&apos;s zero risk of eye infections</li>
                <li>They last for years with proper care</li>
                <li>They transform your style</li>
                <li>You&apos;re protected from wind, dust, and UV rays</li>
                <li>They&apos;re easy to clean and maintain</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Glasses Cons</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>They&apos;re susceptible to fogging in weather changes</li>
                <li>They have limited peripheral vision</li>
                <li>They easily slip during physical activity</li>
                <li>There are reflection issues in photos</li>
                <li>You&apos;re limited by style based on your face shape</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                Contact Lenses Pros
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>They provide a complete field of vision</li>
                <li>No weather interference</li>
                <li>There&apos;s freedom during sports and activities</li>
                <li>Natural appearance in photos</li>
                <li>There&apos;s a wider range of corrective options</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                Contact Lenses Cons
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>They need to be maintained daily</li>
                <li>Higher long-term costs</li>
                <li>There are risks of eye infections if mishandled</li>
                <li>They can be lost or torn</li>
                <li>
                  They&apos;re not suitable for everyone&apos;s eye chemistry
                </li>
              </ul>
            </div>
          </div>
        ),
      },

      // ── Section 1 ──────────────────────────────────────────────────────────
      {
        id: "eye-conditions",
        heading: "Which Eye Conditions Can Glasses or Contacts Correct?",
        image: {
          src: MyopiaImage,
          alt: "Eye conditions corrected by glasses or contacts",
        },
        contentTop: (
          <>
            <p>
              Both glasses and contact lenses tackle the same vision problems,
              but their effectiveness depends on your condition and lifestyle
              needs.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Nearsightedness (Myopia)
              </h4>
              <p>
                In nearsightedness, distance vision is blurry while close-up
                tasks maintain clarity. Both glasses and contacts are best here,
                though contacts provide better peripheral vision for activities
                like driving. Severe myopia sometimes responds better to custom
                contact lens designs that slow progression in children.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Farsightedness (Hyperopia)
              </h4>
              <p>
                For farsightedness, close-up work strains your eyes while
                distant objects appear clearer. Glasses work immediately and
                effectively. Contacts require a brief adjustment period since
                they sit directly on your eye, but many people prefer them for
                reading and computer work once adapted.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">3. Astigmatism</h4>
              <p>
                With astigmatism, your cornea&apos;s irregular shape creates
                blurry vision at all distances. Standard glasses correct most
                astigmatism cases easily. Toric contact lenses handle
                astigmatism too, though they cost more and require precise
                fitting. Severe astigmatism often responds better to rigid
                gas-permeable contacts than soft lenses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">4. Presbyopia</h4>
              <p>
                Age-related reading difficulty typically starts in your 40s.
                Progressive glasses offer seamless vision correction across all
                distances. Multifocal contacts work but require patience during
                the adjustment period. Many people use reading glasses over
                distance contacts as a hybrid solution.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Severe Refractive Errors
              </h4>
              <p>
                Extreme prescriptions create thick, heavy glasses that distort
                your appearance and vision quality. High-index lenses help, but
                don&apos;t eliminate the problem. Contacts provide more natural
                vision correction and eliminate the magnification or
                minification effect of strong prescriptions.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 2 ──────────────────────────────────────────────────────────
      {
        id: "lifestyle",
        heading: "Are Glasses or Contact Lenses Better for My Lifestyle?",
        image: {
          src: BeachImage,
          alt: "Glasses vs contacts for active lifestyle",
        },
        contentTop: (
          <>
            <p>Your daily routine determines which option serves you best.</p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Active and Athletic Lifestyles
              </h4>
              <p>
                Contacts win for athletes. They don&apos;t bounce, fog up during
                temperature changes, or limit your peripheral vision when
                tracking a ball. Sports glasses exist, but they create blind
                spots and can shatter.
              </p>
              <p>
                Swimming requires daily disposable contacts (never wear
                monthlies in water) or prescription goggles. Rock climbing,
                martial arts, and contact sports heavily favor lenses. Your
                sweat won&apos;t create slipping issues, and you won&apos;t
                worry about expensive frames getting damaged.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Professional and Office Environments
              </h4>
              <p>
                Glasses often project authority and intelligence in corporate
                settings. They&apos;re also practical for computer-heavy jobs
                since you can get blue light filtering and anti-reflective
                coatings. There&apos;s no risk of dry eyes during long screen
                sessions.
              </p>
              <p>
                Contacts work better for jobs that require safety goggles,
                helmets, or frequent temperature changes. Restaurant workers,
                laboratory technicians, and outdoor professionals typically
                prefer lenses. Video calls look more natural without frame
                reflections.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Social and Appearance Considerations
              </h4>
              <p>
                Glasses change your entire look instantly. They can enhance
                facial features, hide under-eye circles, or become a signature
                style element. Dating profiles often perform better with glasses
                since they suggest intelligence and stability.
              </p>
              <p>
                With contacts, makeup application becomes easier, and when
                wearing sunglasses, they fit properly. During photography and
                special events, the pictures often look better because there are
                no frames to create shadows or reflections.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Budget and Maintenance Preferences
              </h4>
              <p>
                Glasses cost more upfront, but they last for years with proper
                care. One pair handles most situations, though many people keep
                backup frames. Annual eye exams and occasional repairs would be
                your main ongoing expenses.
              </p>
              <p>
                Contacts need consistent monthly spending plus cleaning
                solutions. Daily disposables cost more but eliminate
                maintenance. People who are conscious about their budget often
                choose glasses initially, then add contacts later for specific
                activities.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 3 ──────────────────────────────────────────────────────────
      {
        id: "comfort",
        heading: "Which Is More Comfortable: Glasses or Contacts?",
        image: {
          src: UnderstandImage1,
          alt: "Comfort comparison glasses vs contacts",
        },
        contentTop: (
          <>
            <p>
              Comfort depends entirely on your individual eye chemistry, facial
              anatomy, and daily habits; what feels natural to one person
              creates constant irritation for another.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Initial Adjustment Period
              </h4>
              <p>
                Glasses feel comfortable immediately for most people. Weight
                distribution across your nose bridge and ears might cause minor
                pressure points initially, but proper fitting will eliminate
                this. Heavy prescriptions need high-index lenses to prevent
                sliding and indentations.
              </p>
              <p>
                Contacts need patience during the first week. Your eyes produce
                extra tears and blink more frequently as they adapt to foreign
                objects. Soft lenses typically feel comfortable within 2–3 days.
                Rigid gas permeable lenses require 1–2 weeks but eventually
                become unnoticeable.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. All-Day Wearability
              </h4>
              <p>
                Well-fitted glasses should feel weightless after the adjustment
                period. Poorly fitted frames would create headaches, ear pain,
                and nose marks. Adjustable nose pads and lightweight materials
                solve most of these comfort issues.
              </p>
              <p>
                Quality contacts disappear from conscious awareness once your
                eyes adapt to them. Cheap lenses or improper fits cause burning,
                dryness, and foreign body sensations. Daily disposables are more
                comfortable than weekly or monthly options since protein buildup
                doesn&apos;t occur.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Environmental Factors
              </h4>
              <p>
                Air conditioning can make metal frames cold against your skin.
                They slip during physical exertion and require constant
                adjustment during active days.
              </p>
              <p>
                Contacts handle temperature changes seamlessly but suffer in dry
                environments like airplanes and heated buildings. Wind
                doesn&apos;t affect vision quality, though dust particles can
                cause temporary discomfort. Swimming and showering require
                removal or waterproof daily disposables.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Long-Term Comfort Considerations
              </h4>
              <p>
                Glasses can cause permanent nose indentations and ear grooving
                with heavy frames. Regular adjustments maintain proper fit as
                your face changes. Prescription changes only require new lenses,
                not complete frame replacement.
              </p>
              <p>
                Extended contact wear can reduce tear production and corneal
                sensitivity over time. Proper hygiene and regular replacement
                schedules prevent most complications. Some people develop
                contact lens intolerance after years of successful wear.
              </p>
              <p>
                Your comfort preference might change seasonally, with age, or
                based on daily activities.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 4 ──────────────────────────────────────────────────────────
      {
        id: "cost",
        heading: "How Much Do Glasses and Contact Lenses Cost in Toronto?",
        image: {
          src: SpectacleImage,
          alt: "Cost of glasses and contact lenses in Toronto",
        },
        contentTop: (
          <>
            <p>
              The cost of eyewear in Toronto varies based on where you shop,
              your prescription, and the level of quality you need.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Glasses Cost Breakdown
              </h4>
              <p>
                Basic frames from budget retailers start at affordable prices,
                while designer options are more expensive. Your prescription
                strength affects lens costs; high prescriptions require special
                materials that increase expenses.
              </p>
              <p>
                Anti-reflective coatings, blue light filtering, and progressive
                lenses add substantial costs. Single vision prescriptions cost
                less than multifocals or complex astigmatism corrections. Frame
                warranties and lens replacement programs affect long-term value.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Contact Lens Expenses
              </h4>
              <p>
                Daily disposables offer convenience but create higher monthly
                costs than weekly or monthly replacements. Toric lenses for
                astigmatism and multifocal options for presbyopia command
                premium pricing over standard spherical lenses.
              </p>
              <p>
                Cleaning solutions, cases, and rewetting drops add ongoing
                expenses for non-daily lenses. Annual eye exams and contact lens
                fittings represent additional costs beyond the lenses
                themselves.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Hidden Costs to Consider
              </h4>
              <p>
                Insurance coverage varies widely between employers and plans.
                Many policies provide partial eyewear benefits annually but
                don&apos;t cover premium upgrades or special lenses.
              </p>
              <p>
                Replacement costs matter more than initial expenses. Glasses
                typically last years with proper care, while contacts require
                consistent monthly purchases. Lost or damaged items create
                unexpected expenses.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 5 ──────────────────────────────────────────────────────────
      {
        id: "safety",
        heading: "Are Contact Lenses Safe for My Eyes?",
        image: {
          src: IrritatingEyeImage,
          alt: "Contact lens safety for eyes",
        },
        contentTop: (
          <>
            <p>
              Contact lenses are remarkably safe when used properly, but poor
              hygiene and improper wear create serious risks that can
              permanently damage your vision.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. The Safety Reality
              </h4>
              <p>
                Modern contact lenses undergo rigorous FDA testing and safety
                protocols. Millions of people wear them daily without
                complications. However, contacts aren&apos;t risk-free. They are
                medical devices that require respect and proper handling. Casual
                attitudes toward hygiene create most of the problems people
                experience.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Infection Risks and Prevention
              </h4>
              <p>
                Bacterial infections represent the most serious concern. These
                develop from contaminated lenses, dirty hands during insertion,
                or overwearing beyond recommended schedules. Acanthamoeba
                infections, though rare, can cause blindness if untreated.
              </p>
              <p>
                Water exposure creates the biggest danger. Never rinse lenses
                with tap water, swim while wearing them, or shower without
                removing them first. Use only sterile saline or recommended
                cleaning solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Common Complications
              </h4>
              <p>
                Dry eyes affect many contact wearers, especially in
                air-conditioned environments or during extended computer use.
                Protein deposits on monthly lenses can cause irritation and
                blurred vision. Giant papillary conjunctivitis creates bumps
                under your eyelids from chronic irritation.
              </p>
              <p>
                Corneal abrasions occur from torn lenses or rough insertion
                techniques. These heal quickly but increase infection
                vulnerability. Allergic reactions to cleaning solutions or lens
                materials cause redness and discomfort.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Safe Wearing Practices
              </h4>
              <p>
                Replace lenses exactly as prescribed &ndash; daily, weekly, or
                monthly. Never extend wear schedules to save money. Clean your
                hands thoroughly before touching lenses. Store them in fresh
                solution, never reused liquid.
              </p>
              <p>
                Follow the recommended wearing schedule. Your eyes need oxygen,
                and overwearing creates complications even with
                high-breathability materials.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 6 ──────────────────────────────────────────────────────────
      {
        id: "specialty-lenses",
        heading: "What Are Specialty Lenses and When Are They Needed?",
        image: {
          src: UnderstandImage4,
          alt: "Specialty contact lenses and glasses",
        },
        contentTop: (
          <>
            <p>
              Specialty lenses solve vision problems that standard glasses and
              contacts can&apos;t handle effectively, offering hope for people
              with complex eye conditions and demanding visual requirements.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Scleral Contact Lenses
              </h4>
              <p>
                These large, rigid lenses vault over your entire cornea and rest
                on the white part of your eye. They create a fluid reservoir
                that smooths irregular corneal surfaces and provide exceptional
                comfort for dry eye sufferers.
              </p>
              <p>
                Keratoconus patients often achieve their best vision with
                sclerals when regular contacts fail. Post-surgical corneas from
                transplants or refractive surgery complications respond well to
                these specialized designs. Severe dry eye conditions that make
                other lenses impossible become manageable.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Gas Permeable Specialty Designs
              </h4>
              <p>
                Custom rigid lenses correct irregular astigmatism that soft
                lenses can&apos;t handle. Orthokeratology lenses reshape your
                cornea overnight, providing clear daytime vision without any
                correction. Athletes and pilots often prefer this temporary
                reshaping approach.
              </p>
              <p>
                Bifocal and multifocal rigid designs offer sharper vision than
                soft alternatives for presbyopia. High prescriptions achieve
                better optics through rigid materials than thick soft lenses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Prosthetic and Cosmetic Lenses
              </h4>
              <p>
                Artificial eyes and painted lenses restore appearance after
                injury or congenital defects. These don&apos;t improve vision
                but provide psychological benefits and social confidence. Custom
                iris patterns match your natural eye color perfectly.
              </p>
              <p>
                Theatrical and colored lenses change appearance dramatically but
                require the same prescription fitting as vision-correcting
                lenses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Advanced Prescription Solutions
              </h4>
              <p>
                High-index glasses materials reduce thickness for extreme
                prescriptions. Prism lenses correct double vision from muscle
                imbalances. Occupational lenses optimize vision for specific
                work distances and tasks.
              </p>
              <p>
                Computer glasses with blue light filtering and anti-reflective
                coatings reduce digital eye strain. Photochromic lenses adapt to
                lighting conditions automatically.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 7 ──────────────────────────────────────────────────────────
      {
        id: "care",
        heading: "How Do I Take Care of My Glasses and Contact Lenses?",
        image: {
          // src: OptometryImage,
          alt: "Glasses and contact lens care",
        },
        contentTop: (
          <div>
            <p>
              Proper care extends the life of your eyewear dramatically while
              preventing eye infections and maintaining crystal-clear vision
              through simple daily habits.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Essential Glasses Maintenance
              </h4>
              <p>
                Clean lenses with microfiber cloths and approved cleaning
                solutions, never your shirt or tissues. These materials scratch
                anti-reflective coatings and create permanent damage. Rinse
                frames under lukewarm water first to remove debris before
                wiping.
              </p>
              <p>
                Store glasses in protective cases when not wearing them. Leaving
                them lens-down on surfaces creates scratches. Adjust loose
                screws immediately; small problems become expensive repairs
                quickly. Professional adjustments every few months maintain
                proper fit and prevent breakage.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Contact Lens Hygiene Protocols
              </h4>
              <p>
                Wash hands thoroughly with soap before touching lenses.
                Water-based hand sanitizers don&apos;t eliminate all bacteria
                and can irritate eyes. Use only recommended cleaning solutions,
                never water or saliva for emergency situations.
              </p>
              <p>
                Replace lens cases every three months minimum. Bacteria colonize
                plastic surfaces despite regular cleaning. Store lenses in fresh
                solution daily; never reuse yesterday&apos;s liquid. Protein
                deposits accumulate in old solution and cause irritation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Daily vs Extended Wear Care
              </h4>
              <p>
                Daily disposables require zero maintenance but cost more
                monthly. Simply discard after single use and start fresh
                tomorrow. Never attempt cleaning or reusing dailies.
              </p>
              <p>
                Weekly and monthly lenses demand consistent cleaning routines.
                Rub lenses gently with solution, even if using
                &ldquo;no-rub&rdquo; formulas. This mechanical action removes
                protein deposits that chemical cleaning alone misses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Warning Signs and Replacement Schedules
              </h4>
              <p>
                Replace contacts exactly on schedule regardless of remaining
                solution or apparent lens condition. Overwearing creates protein
                buildup and increases infection risks significantly.
              </p>
              <p>
                Red eyes, excessive tearing, or vision changes require immediate
                lens removal and eye care consultation. Torn or damaged lenses
                must be discarded immediately; never attempt repairs or
                continued wear.
              </p>
              <p>
                For detailed information on how to care for your glasses, Read
                our blog{" "}
                <a
                  href="https://www.360eyecare.ca/how-to-remove-scratches-from-glasses/"
                  className="text-primary hover:underline"
                >
                  How to Remove Scratches From Glasses.
                </a>
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 8 ──────────────────────────────────────────────────────────
      {
        id: "switching",
        heading: "Should I Switch Between Glasses and Contacts?",
        image: {
          src: MedicalTeamImage,
          alt: "Switching between glasses and contact lenses",
        },
        contentTop: (
          <>
            <p>
              Alternating between glasses and contacts offers the best of both
              worlds, letting you match your eyewear to daily activities rather
              than forcing one solution onto every situation.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. The Hybrid Approach Benefits
              </h4>
              <p>
                Most successful contact wearers own backup glasses for sick
                days, late nights, and lazy mornings. Your eyes need breaks from
                contacts occasionally, especially during illness when tear
                production decreases. Glasses provide instant relief without
                compromising vision quality.
              </p>
              <p>
                Switching prevents contact lens fatigue and reduces infection
                risks. Overwearing contacts leads to dry eyes and protein
                buildup. Regular glasses days let your corneas breathe and
                recover their natural moisture balance.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Activity-Based Selection
              </h4>
              <p>
                Contacts work best for sports, outdoor activities, and social
                events where appearance matters. Swimming requires daily
                disposables or prescription goggles; never regular contacts.
                Hiking and cycling benefit from unobstructed peripheral vision
                that contacts provide.
              </p>
              <p>
                Glasses work better for computer-intensive days, air travel, and
                environments with dust or chemicals. Late-night reading sessions
                cause less eye strain with properly fitted glasses than dry
                contacts. Cold weather and windy conditions favor frames over
                lenses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Cost Optimization Strategy
              </h4>
              <p>
                Daily contact use becomes expensive quickly. Limiting contacts
                to specific activities reduces monthly costs while maintaining
                lifestyle flexibility. Weekend-only contact wear cuts expenses
                dramatically compared to daily use.
              </p>
              <p>
                Prescription sunglasses eliminate the need for contact-sunglass
                combinations during outdoor activities. Photochromic glasses
                adjust automatically to lighting changes without requiring
                contact lens coordination.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Practical Switching Tips
              </h4>
              <p>
                Keep contact supplies at work and home for spontaneous activity
                changes. Travel with both options; flights delay luggage, but
                you still need vision correction. Gym bags should contain daily
                disposables for unexpected workout opportunities.
              </p>
              <p>
                Consider prescription strength differences between glasses and
                contacts. Some people require slightly different powers due to
                distance from the eye. Your eye care provider adjusts
                prescriptions accordingly during fittings.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 9 ─────────────────────────────────────────────────────────
      {
        id: "decision",
        heading: "How Do I Decide What's Right for Me?",
        contentTop: (
          <>
            <p>
              The right choice emerges from honest self-assessment about your
              daily routine, priorities, and tolerance for maintenance rather
              than following generic advice or peer pressure.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Start with Your Non-Negotiables
              </h4>
              <p>
                Identify activities where vision problems create real
                consequences. Pilots and surgeons need absolute clarity without
                distortion. Athletes require peripheral vision and impact
                resistance. Musicians depend on sheet music clarity under stage
                lighting.
              </p>
              <p>
                Consider your vanity level honestly. Some people feel incomplete
                without their signature frames. Others hate how glasses change
                their appearance. Neither preference is shallow; comfort with
                your appearance affects confidence and daily satisfaction.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Assess Your Lifestyle Patterns
              </h4>
              <p>
                Track your week realistically. Do you exercise daily or just
                talk about it? Honest gym attendance determines whether contact
                sports benefits matter. Weekend warriors need different
                solutions than daily athletes.
              </p>
              <p>
                Evaluate your morning routine tolerance. Rushed mornings favor
                glasses &ndash; grab and go versus contact insertion rituals.
                Night owls who stay up late often prefer glasses for end-of-day
                comfort when eyes become dry and irritated.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Factor in Your Personality Type
              </h4>
              <p>
                Organized people handle contact lens maintenance well. Cleaning
                schedules and replacement reminders become routine habits.
                Disorganized personalities often struggle with lens hygiene and
                overextend wearing schedules dangerously.
              </p>
              <p>
                Risk tolerance matters significantly. Conservative people prefer
                glasses&apos; predictability and lower infection risks.
                Adventurous types embrace contacts despite maintenance
                requirements and occasional complications.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Professional Consultation Strategy
              </h4>
              <p>
                Book comprehensive eye exams that include contact lens trials.
                Many optometrists offer sample lenses for different brands and
                materials. Real-world testing reveals comfort differences that
                specifications can&apos;t predict.
              </p>
              <p>
                Discuss lifestyle openly with your eye care provider. Mention
                hobbies, work demands, and appearance preferences. Experienced
                professionals spot patterns and recommend solutions based on
                similar patients&apos; experiences.
              </p>
            </div>
          </div>
        ),
      },

      // ── Conclusion ─────────────────────────────────────────────────────────
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              The glasses vs contact lenses debate doesn&apos;t require choosing
              sides permanently. Your vision deserves options that adapt to your
              changing needs, not rigid loyalty to one solution.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book an eye exam today
              </a>{" "}
              to explore both possibilities with professional guidance. For
              additional insights on matching eyewear to your specific lifestyle
              demands, read our detailed guide on{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/contact-lenses-vs-glasses/"
              >
                Contact Lenses vs. Glasses: Choosing the Right Fit for Your
                Lifestyle
              </a>
              . Your perfect vision solution is waiting.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Can I wear both glasses and contact lenses?",
        answer:
          "Most contact wearers own backup glasses for sick days, late nights, and activities where contacts aren't practical. Switching between them based on your daily schedule gives you the best of both options.",
      },
      {
        id: 2,
        question: "How often should I replace my glasses or contacts?",
        answer:
          "Glasses last years with proper care, requiring updates only when prescriptions change. Contact lenses follow strict schedules (daily, weekly, or monthly) regardless of apparent condition to prevent infections.",
      },
      {
        id: 3,
        question: "Are contact lenses safe for teenagers?",
        answer:
          "Yes, when teens demonstrate responsibility with hygiene and maintenance routines. Maturity level matters more than age. Daily disposables reduce infection risks for busy teenage lifestyles requiring less maintenance.",
      },
      {
        id: 4,
        question: "What if my prescription is too strong for contacts?",
        answer:
          "High prescriptions often work better with contacts than thick glasses. Specialty lenses handle extreme prescriptions effectively. Consult an eye care professional about advanced options before assuming contacts won't work.",
      },
    ],
  },

  // page - 5
  "eye-exams-cost-ohip-coverage-toronto": {
    title: "Complete Guide to Eye Exams in Toronto",
    subtitle:
      "Complete Guide to Eye Exams in Toronto: Cost, OHIP Coverage, and How to Find the Right Optometrist",
    featureImage: OptometryImage,
    keyTakeaways: [
      "OHIP covers eye exams in Toronto for kids under 20 and adults over 65.",
      "Adults over 40 need annual exams, while younger people can wait two years between visits.",
      "Modern technology, like OCT scans and digital imaging, catches problems earlier than traditional methods. So choose clinics with updated equipment.",
      "Pick an eye clinic somewhere close to home, or one that has decent parking close by and flexible hours.",
      "Don't wait for vision problems to appear before visiting an eye clinic. Serious eye diseases like glaucoma steal sight silently before you notice symptoms.",
    ],
    content: (
      <>
        <p>
          Toronto offers numerous eye care options, but when it comes to costs,
          OHIP coverage, and quality of care, finding the right optometrist can
          be very overwhelming. Some eye exams in Toronto are covered by
          provincial coverage, while others incur a cost of at least $150 out of
          pocket. With the right information, you can book a comprehensive eye
          exam with confidence, knowing you won&apos;t encounter any surprises
          when you walk into an eye clinic.
        </p>
        <p>
          This guide covers everything you need to know before your eye exam:
          where to go for an eye exam in Toronto, what to expect, and how to
          prepare. Read on to learn more.
        </p>
      </>
    ),
    sections: [
      // ── Section 0 ──────────────────────────────────────────────────────────
      {
        id: "what-is-eye-exam",
        heading: "What is an Eye Exam?",
        image: {
          src: MedicalTeamImage,
          alt: "Optometrist in Toronto conducting an eye exam with a slit lamp biomicroscope",
        },
        contentTop: (
          <>
            <p>
              An eye exam is when an optometrist checks the eyes for pressure,
              examines the retina for diseases, and tests the peripheral vision.
              The goal of an eye exam is to find abnormalities in the eyes, such
              as glaucoma,{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/can-optometrist-detect-diabetes/"
              >
                diabetes complications
              </a>
              , and even brain tumours that show symptoms through the eyes.
            </p>
            <p>
              Eye exams in Toronto typically take 30&ndash;60 minutes with a
              certified and qualified optometrist. The test may include digital
              retinal photography, visual vision testing, and sometimes{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/dilated-eye-exam-importance/"
              >
                pupil dilation
              </a>
              .
            </p>
          </>
        ),
        contentBottom: null,
      },

      // ── Section 1 ──────────────────────────────────────────────────────────
      {
        id: "who-needs-exam",
        heading: "Who Needs an Eye Exam (and How Often)?",
        image: {
          src: MedicalTeamImage,
          alt: "Eye exams Toronto – who needs them and how often",
        },
        contentTop: (
          <>
            <p>
              Most people do not consider an eye exam as part of a routine
              medical checkup until they begin to notice a blur in their sight.
              This is a habit that shouldn&apos;t be encouraged. Eye problems do
              not announce themselves with obvious symptoms. By the time you
              notice something off about your sight, permanent damage may have
              already been done. Here&apos;s who needs an eye exam, and how
              often they should have it.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong className="text-primary">Children and teens</strong>{" "}
                should have their first eye exam at age three, then annually
                throughout their school years.
              </li>
              <li>
                <strong className="text-primary">
                  Young adults (under 40)
                </strong>{" "}
                who have no family history and whose vision stays stable should
                have an eye exam every two years.
              </li>
              <li>
                <strong className="text-primary">Adults over 40</strong> need an
                annual eye exam (this is non-negotiable). There&apos;s a double
                risk of glaucoma and diabetes every decade after 40 years.
              </li>
              <li>
                <strong className="text-primary">High-risk groups</strong> such
                as diabetics, high blood pressure patients, and families with a
                history of glaucoma, cataracts, or retinal disease require
                frequent and yearly monitoring.
              </li>
              <li>
                <strong className="text-primary">Digital workers</strong> such
                as computer professionals (programmers, graphic/UI designers)
                should visit the eye doctor annually, regardless of their age.
                Screen time accelerates vision changes that would normally take
                years to develop.
              </li>
              <li>
                <strong className="text-primary">Contact lens wearers</strong>{" "}
                need yearly eye exams to prevent infections and corneal
                scarring. Even daily disposables carry risks.
              </li>
            </ul>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 font-semibold">Group</th>
                    <th className="text-left p-3 font-semibold">Frequency</th>
                    <th className="text-left p-3 font-semibold">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Children (3–18)",
                      "Annually",
                      "Vision problems impact learning and development",
                    ],
                    [
                      "Young Adults (Under 40)",
                      "Every 2 years",
                      "Lower risk with stable vision and no family history",
                    ],
                    [
                      "Adults (40+)",
                      "Annually",
                      "Glaucoma and macular degeneration risks double each decade",
                    ],
                    [
                      "Diabetics",
                      "Every 6 months",
                      "High risk for retinal damage and vision loss",
                    ],
                    [
                      "High Blood Pressure",
                      "Annually",
                      "Blood vessel damage affects eye health",
                    ],
                    [
                      "Family History of Eye Disease",
                      "Annually",
                      "Genetic predisposition requires close monitoring",
                    ],
                    [
                      "Digital Workers",
                      "Annually",
                      "Screen time accelerates vision changes",
                    ],
                    [
                      "Contact Lens Wearers",
                      "Annually",
                      "Risk of infections and corneal damage",
                    ],
                  ].map(([group, freq, why], i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="p-3 font-medium">{group}</td>
                      <td className="p-3">{freq}</td>
                      <td className="p-3">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-primary">
              For a detailed guide on how frequently you should have eye exams,
              read more on our{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="https://www.360eyecare.ca/eye-exam-frequency/"
              >
                eye exam frequency blog
              </a>
              .
            </p>
          </>
        ),
      },

      // ── Section 2 ──────────────────────────────────────────────────────────
      {
        id: "exam-process",
        heading: "Eye Exam Process in Toronto (Step-by-Step)",
        image: {
          src: MedicalTeamImage,
          alt: "Step-by-step eye exam process Toronto",
        },
        contentTop: (
          <>
            <p>
              When visiting an optometrist in Toronto for an eye exam, there are
              certain procedures you will be taken through. The step-by-step
              process we provide here covers everything you might encounter so
              that you can be adequately prepared.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-primary mb-2">
                1. Initial Assessment (5 minutes)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Your appointment starts with paperwork, then general questions
                  about your eye health, family history, complaints you have,
                  and current medications you are on. The receptionist will also
                  check your health card and confirm OHIP eye exam eligibility.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                2. Vision Testing (10 minutes)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  The first eye test of the day will be a vision test using the
                  classical eye chart. Your experience may be different because
                  modern facilities use digital charts now. You will be asked to
                  read letters at various distances while covering each eye. The
                  optometrist would also test your eye muscles by asking you to
                  follow a pen or light as it moves in different directions.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                3. Eye Pressure Check (2 minutes)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  The &ldquo;puff of air&rdquo; test, which most clients dread,
                  measures the pressure of the eyeball. High pressure in the
                  eyeball means potential glaucoma. Apart from the air puff
                  method, some offices use a gentler probe instead.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                4. Pupil Dilation (15–30 minutes)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Eye drops are used to make your pupil huge so that the
                  optometrist can see your retina clearly. Doing this feels
                  weird for you and makes you sensitive to light. So we
                  recommend that you bring along sunglasses for a comprehensive
                  eye exam.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                5. Retinal Examination (10 minutes)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  The optometrist peers into your dilated eyes with a bright
                  light to check for signs of diabetes, high blood pressure, or
                  retinal tears. Digital cameras are also often used to capture
                  images for your file.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                6. Prescription Update (5 minutes)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  If you need glasses or contacts, you would be asked to try
                  different lens strengths until your vision is crisp. The
                  &ldquo;better one or better two&rdquo; routine can feel
                  endless, but it&apos;s all to ensure accuracy.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                7. Results Discussion (5 minutes)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  At the end of all the tests conducted, the optometrist
                  explains their findings and recommends follow-up care if
                  needed. If serious issues were discovered, you will be
                  referred to specialists immediately.
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-4">
              <p>
                Typically, it takes 45&ndash;75 minutes for a comprehensive eye
                exam, depending on your eye health complexity.
              </p>
              <p className="text-primary">
                For more on what to expect during an eye exam, read our blog:{" "}
                <a
                  className="text-primary hover:underline font-medium"
                  href="https://www.360eyecare.ca/first-eye-doctor-visit/"
                >
                  What to Expect at Your First Eye Doctor Visit: A Complete
                  Guide
                </a>
                .
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 3 ──────────────────────────────────────────────────────────
      {
        id: "cost-ohip",
        heading: "Cost of Eye Exams in Toronto",
        image: {
          src: UnderstandImage1,
          alt: "Eye exam cost and OHIP coverage Toronto",
        },
        contentTop: (
          <>
            <p>
              Eye exam cost in Toronto depends on your insurance coverage and
              whether you need additional testing.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">1. OHIP Coverage</h4>
              <p>
                If you&apos;re under 20 or over 65, OHIP covers a basic eye exam
                once every 12 months. For adults between 20 and 64, exams
                aren&apos;t covered unless you have a specific medical
                condition, so you&apos;ll likely need to pay out-of-pocket or
                use private insurance.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">2. Typical Costs</h4>
              <p>
                A standard comprehensive eye exam usually falls in the mid-range
                for most working adults. However, if your optometrist recommends
                extra tests, such as retinal photography or a visual field
                analysis, your bill can increase, sometimes nearly doubling.
              </p>
              <p>
                Private clinics often charge more than community health centers,
                though some optometrists offer payment plans or family packages
                to make care more affordable.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Insurance Benefits
              </h4>
              <p>
                If you have extended health benefits through work, your plan may
                cover part or all of your exam. Be sure to check your coverage
                details, including annual maximums, which usually reset in
                January.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">4. Extra Fees</h4>
              <p>
                Contact lens wearers should budget for additional costs.
                Fittings are billed separately from the basic exam, and yearly
                follow-up appointments are also an added expense that many
                people don&apos;t anticipate.
              </p>
            </div>
            <p className="text-primary">
              Our blog on{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="https://www.360eyecare.ca/ontario-eye-exam-insurance"
              >
                Ontario Eye Exam Insurance Coverage Guide for 2025
              </a>{" "}
              sheds more light on eye exam costs in Toronto.
            </p>
          </div>
        ),
      },

      // ── Section 4 ──────────────────────────────────────────────────────────
      {
        id: "age-groups",
        heading: "Eye Exams for Different Age Groups & Needs",
        // image: {
        //   src: PediatricEyeCareImage,
        //   alt: "Eye exams for different age groups Toronto",
        // },
        contentTop: (
          <>
            <p>
              At every stage in your age comes different vision challenges.
              Toronto optometrists know this, and they adjust their approach
              accordingly.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-primary mb-2">
                1. Children&apos;s Eye Exams
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={PediatricEyeCareImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Kids don&apos;t know what blurry vision is; to them, it&apos;s
                  normal vision. Unfortunately, many eye problems in kids go
                  unnoticed because parents assume good grades mean good vision.
                  Conditions like lazy eye and crossed eyes, for example, need
                  early treatment before age seven, while the brain&apos;s
                  visual development window is still open.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                2. Teen and Young Adult Exams
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MyopiaImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Teenagers hide vision problems to avoid wearing glasses
                  because they find glasses &ldquo;uncool.&rdquo; Contact lens
                  consultations should become a norm around the age of
                  14&ndash;16. Many teens develop nearsightedness during growth
                  spurts that parents attribute to increased studying.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                3. Adult Comprehensive Care
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={OptometryImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Working professionals need exams that meet their daily
                  demands. Computer workers, for example, require specific tests
                  for digital eye strain and blue light sensitivity. Reading
                  glasses also become necessary for most people after 40, even
                  those who never needed vision correction before.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                4. Senior Eye Health
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={GlaucomaImage}
                  alt="Eye exam process"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1 space-y-4">
                  <p>
                    Older adults face cataracts, glaucoma, and macular
                    degeneration risks, and for that matter require special
                    monitoring. Medicare-style coverage starts at 65, but
                    waiting until then may mean missing crucial early
                    intervention opportunities.
                  </p>
                  <p>
                    Diabetic patients too need dilated retinal exams regardless
                    of age to catch complications before vision loss occurs.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-primary pt-4">
              For detailed age-specific recommendations and scheduling
              guidelines, see our comprehensive{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="https://www.360eyecare.ca/healthy-eyes-at-every-age-a-guide-for-the-beaches-yorkville-and-rosedale-residents"
              >
                Healthy Eyes at Every Age Guide
              </a>
              .
            </p>
          </div>
        ),
      },

      // ── Section 5 ──────────────────────────────────────────────────────────
      {
        id: "technology",
        heading: "Eye Exams & Technology in Toronto",
        image: {
          src: GlaucomaImage,
          alt: "Advanced eye exam technology Toronto",
        },
        contentTop: (
          <>
            <p>
              Toronto eye care has gone high-tech. Here is some equipment you
              should expect to see at a well-equipped eye clinic:
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-primary mb-2">
                1. Digital Retinal Photography
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={DiabeticImage}
                  alt="Digital Retinal Photography"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Digital retinal cameras capture high-resolution images of your
                  eye&apos;s back wall without dilation drops. These photos
                  become part of your permanent record for optometrists to track
                  tiny changes over the years.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                2. Optical Coherence Tomography (OCT)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={GlaucomaImage}
                  alt="Optical Coherence Tomography"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  OCT scans create 3D maps of retinal layers. This technology
                  detects glaucoma damage before it is noticed in traditional
                  tests. Not all Toronto clinics have OCT machines due to their
                  hefty price tags.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                3. Computerized Visual Field Testing
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={OptometryImage}
                  alt="Computerized Visual Field Testing"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Computerized visual field testing replaced manual methods in
                  most modern practices. Patients click a button when they see
                  flashing lights, creating detailed maps of peripheral vision.
                  The process feels like a video game, but it shows blind spots.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                4. Telehealth Consultations
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Telehealth Consultations"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Telehealth consultations gained popularity during COVID, but
                  they work better for follow-up appointments than initial
                  exams. You can&apos;t properly assess eye pressure or examine
                  retinas through a computer screen.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">
                5. Corneal Topography
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={understandDryEyeImage}
                  alt="Corneal Topography"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <p className="flex-1">
                  Contact lens fitting now uses corneal topography to map your
                  eye&apos;s exact curvature. This creates custom fits that
                  reduce irritation and improve comfort compared to traditional
                  trial-and-error methods.
                </p>
              </div>
            </div>
            <p className="text-primary pt-4">
              Learn more about{" "}
              <a
                className="text-primary hover:underline font-medium"
                href="https://www.360eyecare.ca/technology-in-canadian-eye-care"
              >
                The Role of Technology in Transforming Canadian Eye Care
              </a>
              .
            </p>
          </div>
        ),
      },

      // ── Section 6 ──────────────────────────────────────────────────────────
      {
        id: "find-optometrist",
        heading: "How to Find the Right Optometrist in Toronto",
        image: {
          src: findeyedoctorImage,
          alt: "How to find the right optometrist in Toronto",
        },
        contentTop: (
          <>
            <p>
              Finding the right optometrist in Toronto requires strategy, and we
              will show you how:
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Location and Convenience
              </h4>
              <p>
                A convenient clinic near work or home increases the odds
                you&apos;ll actually show up for follow-up appointments. Toronto
                traffic makes cross-city trips for routine care impractical.
              </p>
              <p>
                Parking availability and subway-accessible locations work well
                for commuters. So choose clinics you can easily access or find
                parking close to. Strip mall locations often offer easier access
                and free parking compared to medical buildings downtown.
              </p>
              <p>
                Concourse-level clinics beat second or third-floor offices for
                seniors or anyone with mobility issues.
              </p>
            </div>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Modern Equipment Standards
              </h4>
              <p>
                <a
                  className="text-primary hover:underline"
                  href="https://www.360eyecare.ca/advanced-diagnostics-eye-exams"
                >
                  Check their equipment list before booking.
                </a>{" "}
                Modern practices should have digital retinal cameras and OCT
                scanners. Older clinics relying solely on traditional methods
                might miss early-stage problems that newer technology catches.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Patient Reviews and Reputation
              </h4>
              <p>
                <a
                  className="text-primary hover:underline"
                  href="https://www.google.com/search?sca_esv=596d12ff5f9b0ee9&cs=1&output=search&kgmid=/g/1ttq32dh&q=360+Eyecare+-+Beaches&shndl=30&shem=lcuae,lsptbl1,uaasie&source=sh/x/loc/uni/m1/1&kgs=3e7f7f53831fb3a6&utm_source=lcuae,lsptbl1,uaasie,sh/x/loc/uni/m1/1#"
                >
                  Read recent Google reviews
                </a>
                , but ignore the extremes. Focus on middle-ground feedback about
                wait times, thoroughness, and staff courtesy. Patients rarely
                lie about rushed appointments or pressure to buy expensive
                frames.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Specialist Referral Network
              </h4>
              <p>
                Ask about their referral network. Good optometrists have
                established relationships with ophthalmologists, retinal
                specialists, and glaucoma experts. Quick referrals can save your
                vision when serious problems emerge.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Insurance and Payment Options
              </h4>
              <p>
                Insurance acceptance varies across Toronto practices. Some work
                directly with major providers, while others require upfront
                payment and reimbursement hassles.{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.360eyecare.ca/payment-plans"
                >
                  Verify coverage before your appointment to avoid billing
                  surprises.
                </a>{" "}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Scheduling Flexibility
              </h4>
              <p>
                Weekend and evening hours suit working professionals better than
                traditional 9&ndash;5 schedules. Many newer practices{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.360eyecare.ca/book-eye-exam#:~:text=beaches%40360eyecare.ca-,Business%20Hours,-Mon%20%3A%209"
                >
                  offer extended hours
                </a>{" "}
                while established offices stick to banker&apos;s hours.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                7. Emergency Care Access
              </h4>
              <p>
                <a
                  className="text-primary hover:underline"
                  href="https://www.360eyecare.ca/eye-emergencies"
                >
                  Emergency availability
                </a>{" "}
                separates excellent practices from mediocre ones. Eye injuries
                and sudden vision changes need immediate attention, not
                next-week appointments.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                8. Trust Your Instincts
              </h4>
              <p>
                Trust your gut during the consultation. Optometrists who rush
                through exams or push unnecessary upgrades care more about
                profits than patients.
              </p>
            </div>
            <p>
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/eye-doctor-near-me-beaches-yorkville"
              >
                Looking for an Eye Doctor in The Beaches or Yorkville? Start
                Here.
              </a>
            </p>
          </div>
        ),
      },

      // ── Conclusion ─────────────────────────────────────────────────────────
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Your vision deserves professional care, not wishful thinking.
              Toronto offers excellent eye care options once you know how to
              navigate the system. Don&apos;t gamble with your sight by
              postponing that overdue exam.
            </p>
            <p>
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book your comprehensive eye exam online today
              </a>{" "}
              and discover what you might be missing.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Are eye exams free in Toronto?",
        answer:
          "OHIP covers basic eye exams for children under 20 and adults over 65. Everyone else pays out-of-pocket unless they have workplace health benefits or private insurance coverage.",
      },
      {
        id: 2,
        question: "How long does an eye exam take?",
        answer:
          "Comprehensive eye exams in Toronto typically take 45–75 minutes. Basic vision checks run shorter, but thorough examinations, including dilation and special testing, require more time for accurate results.",
      },
      {
        id: 3,
        question: "Can I walk in for an eye exam in Toronto?",
        answer:
          "Most optometry clinics require appointments due to high demand and lengthy exam procedures. Some locations accept walk-ins for urgent issues, but expect significant wait times.",
      },
      {
        id: 4,
        question: "What if I only need glasses?",
        answer:
          "Even if you only want updated glasses, a comprehensive eye exam remains necessary. Vision changes often indicate underlying health issues that simple prescription updates miss completely.",
      },
    ],
  },

  // page - 6
  "eye-doctor-toronto-optometrist-ophthalmologist-optician": {
    title: "Optometrist vs Ophthalmologist vs Optician",
    subtitle: "Optometrist vs Ophthalmologist: Who Should You See?",
    featureImage: MedicalTeamImage,
    keyTakeaways: [
      "Optometrists handle routine eye care, such as eye exams, prescriptions, and managing common conditions. They're your first stop for vision problems.",
      "Ophthalmologists are surgeons who treat serious eye diseases and perform procedures like cataract surgery. You'll need a referral to see one in Ontario.",
      "Opticians fit your eyewear. They don't do exams or write prescriptions, but they make sure your glasses or contacts work properly.",
      "Start with an optometrist. They'll assess your eyes and refer you to an ophthalmologist or optician if needed. It's team-based care.",
      "Choose based on your needs. Look for specialty services, a convenient location, modern technology, and good reviews when picking an eye doctor in Toronto.",
    ],
    content: (
      <>
        <p>
          Not all eye professionals perform the same tasks; they each play
          distinct roles. An optometrist handles exams and prescriptions.
          Ophthalmologists perform surgery and treat serious conditions.
          Opticians fit your glasses after the prescription has been written.
        </p>
        <p>
          Who you should go to depends on what you need. Let&apos;s break it
          down in this blog so you know where to go when the need arises.
        </p>
      </>
    ),
    sections: [
      // ── Section 0 ──────────────────────────────────────────────────────────
      {
        id: "differences",
        heading:
          "What's the Difference Between an Optometrist, Ophthalmologist, and Optician?",
        image: {
          src: findeyedoctorImage,
          alt: "Eye doctor in Toronto – optometrist vs ophthalmologist vs optician",
        },
        contentTop: (
          <>
            <p>
              It is common for people to struggle to differentiate between these
              professionals. Most often, we use them interchangeably.
              Here&apos;s what each professional does and what their differences
              are:
            </p>
          </>
        ),
        contentBottom: (
          <>
            <div className="space-y-8 mt-4">
              <div>
                <h4 className="font-bold text-primary mb-2">Optometrist</h4>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={OptometryImage}
                    alt="Optometrist"
                    className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                  />
                  <p className="flex-1">
                    An optometrist is the person you see for routine eye care.
                    They conduct eye exams and prescribe eyeglasses and contact
                    lenses. They diagnose and manage certain eye conditions and
                    diseases. When necessary, they refer you to a specialist.
                    So, optometrists are your first point of contact.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Ophthalmologist</h4>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={MedicalTeamImage}
                    alt="Ophthalmologist"
                    className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                  />
                  <p className="flex-1">
                    Ophthalmologists do everything an optometrist does, but in
                    addition, they perform eye surgeries. Cataracts, retinal
                    detachment, and LASIK all fall under their scope of
                    practice. If your eye condition requires a procedure or
                    medication, you&apos;re referred to them.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">Optician</h4>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={ColorfulGlassesImage}
                    alt="Optician"
                    className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                  />
                  <p className="flex-1">
                    Opticians don&apos;t examine your eyes or prescribe
                    medications. What they do is take the prescription provided
                    by your optometrist and turn it into wearable eyewear. They
                    fit glasses and adjust frames. When you need eyewear for
                    your lifestyle, they are the ones to attend to you.
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-3">
              Below is a quick comparison table for easy understanding:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 font-semibold">
                      Professional
                    </th>
                    <th className="text-left p-3 font-semibold">Education</th>
                    <th className="text-left p-3 font-semibold">
                      What They Do
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Can Prescribe?
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Can Perform Surgery?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Optometrist",
                      "Doctor of Optometry (OD)",
                      "Eye exams, prescriptions, diagnose and manage eye conditions",
                      "In some cases (varies by region)",
                      "No",
                    ],
                    [
                      "Ophthalmologist",
                      "Medical Doctor (MD)",
                      "Full medical and surgical eye care",
                      "Yes",
                      "Yes",
                    ],
                    [
                      "Optician",
                      "Diploma or certification",
                      "Fit and dispense glasses and contact lenses",
                      "No",
                      "No",
                    ],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="p-3 font-medium first:font-semibold"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ),
      },

      // ── Section 1 ──────────────────────────────────────────────────────────
      {
        id: "optometrist",
        heading: "What Does an Optometrist Do?",
        image: {
          src: findeyedoctorImage,
          alt: "Optometrist in Toronto performing an eye exam",
        },
        contentTop: (
          <>
            <p>Optometrists provide the following services:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Vision correction:</strong> They prescribe eyeglasses
                and contact lenses based on the needs of your vision.
              </li>
              <li>
                <strong>Dry eye care:</strong> Optometrists assess your eyes
                and, based on their tests, if you suffer from dry eyes, they
                recommend some treatments. It could be eye drops or in-office
                therapies.
              </li>
              <li>
                <strong>Myopia control:</strong> For kids whose eyesight is
                getting worse, optometrists offer specialty lenses or atropine
                drops as solutions to slow progression.
              </li>
              <li>
                <strong>Eye disease management:</strong> They monitor and treat
                conditions like glaucoma, macular degeneration, and infections.
                If something requires surgery, they refer you to an
                ophthalmologist.
              </li>
            </ul>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Optometrists hold a Doctor of Optometry (OD) degree &ndash;
              that&apos;s four years of specialized training after undergrad.
              They study everything from optics to pharmacology to ocular
              disease. In Ontario, they must also pass national and provincial
              licensing exams.
            </p>
            <p className="mt-3">
              In Toronto, most people see an optometrist first. They handle
              routine checkups or a sudden vision change. OHIP covers eye exams
              for kids under 20 and adults over 65. For everyone else, it&apos;s
              out-of-pocket.
            </p>
          </>
        ),
      },

      // ── Section 2 ──────────────────────────────────────────────────────────
      {
        id: "ophthalmologist",
        heading: "When Should I See an Ophthalmologist?",
        image: {
          src: MedicalTeamImage,
          alt: "Ophthalmologist performing eye surgery Toronto",
        },
        contentTop: (
          <>
            <p>
              Ophthalmologists are medical doctors who focus on the eyes.
              Services they offer include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Cataract surgery:</strong> They remove and replace the
                lens of your eyes with an artificial one.
              </li>
              <li>
                <strong>Glaucoma surgery:</strong> If eye drops aren&apos;t
                enough to control pressure inside your eye, surgery can help
                fluid drain properly and protect your optic nerve.
              </li>
              <li>
                <strong>Retinal procedures:</strong> Ophthalmologists handle
                torn retinas, detachments, or bleeding from diabetes &ndash;
                sometimes with lasers or injections.
              </li>
            </ul>
          </>
        ),
        contentBottom: (
          <>
            <p>
              You usually can&apos;t just book an appointment with an
              ophthalmologist on your own. In Ontario, you need a referral. That
              typically comes from your optometrist or family doctor after
              they&apos;ve identified something that requires surgical or
              advanced medical care. It&apos;s a gatekeeping system, but it
              ensures you see the right specialist at the right time.
            </p>
          </>
        ),
      },

      // ── Section 3 ──────────────────────────────────────────────────────────
      {
        id: "optician",
        heading: "What Does an Optician Do?",
        contentTop: (
          <>
            <p>
              Opticians don&apos;t examine your eyes. They don&apos;t diagnose
              problems or write prescriptions. What they do is take the
              prescription you already have and turn it into eyewear. Services
              they provide include:
            </p>
          </>
        ),
        contentBottom: (
          <>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Frame selection:</strong> They help you find frames that
                fit your face, your style, and your budget. Not every frame
                works for every prescription, so they guide you toward
                what&apos;s practical.
              </li>
              <li>
                <strong>Precise measurements:</strong> Your pupillary distance,
                the curve of your nose, and how the frames sit on your ears all
                matter. Opticians measure everything so your lenses are
                positioned correctly.
              </li>
              <li>
                <strong>Lens options:</strong> They explain what single vision,
                progressives, blue light filters, and anti-glare coatings do
                &ndash; and what you need versus what&apos;s just marketing.
              </li>
              <li>
                <strong>Adjustments and repairs:</strong> Frames get bent. Nose
                pads wear out. Opticians fix these things so your glasses stay
                comfortable and functional.
              </li>
            </ul>
            <p>
              An optometrist checks your eye health and determines your
              prescription, while an optician uses that prescription to craft
              your glasses or fit your contact lenses. One diagnoses and the
              other delivers. You need both, but they&apos;re not
              interchangeable.
            </p>
            <p className="mt-3">
              Most optometry clinics in Toronto have opticians on-site. You can
              also find standalone eyewear boutiques where opticians work
              independently. If you&apos;ve seen an eye doctor in Toronto and
              walked out with a prescription, your next stop is an optician.
            </p>
          </>
        ),
      },

      // ── Section 4 ──────────────────────────────────────────────────────────
      {
        id: "who-to-see-first",
        heading:
          "Optometrist vs. Ophthalmologist vs. Optician: Who Should I See First?",
        image: {
          src: GlaucomaImage,
          alt: "Eye doctor Toronto – who to see first",
        },
        contentTop: (
          <>
            <p>
              <strong>Start with an Optometrist.</strong> Most of the time, an
              optometrist is your first call.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                Routine eye exams? <strong>Optometrist.</strong>
              </li>
              <li>
                Blurry vision or trouble reading? <strong>Optometrist.</strong>
              </li>
              <li>
                Itchy, red, or dry eyes? <strong>Optometrist.</strong>
              </li>
              <li>
                New glasses or contact lens prescription?{" "}
                <strong>Optometrist.</strong>
              </li>
            </ul>
            <p className="mt-3">
              They handle the day-to-day stuff. And if something looks serious
              during your exam, they&apos;ll send you where you need to go next.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <p>
              You won&apos;t usually see an ophthalmologist unless someone
              refers you. You&apos;ll be referred to an ophthalmologist when
              surgery or advanced care is needed:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3 mb-3">
              <li>
                Cataracts clouding your vision? That&apos;s surgery.{" "}
                <strong>Ophthalmologist.</strong>
              </li>
              <li>
                Glaucoma not responding to drops?{" "}
                <strong>Ophthalmologist.</strong>
              </li>
              <li>
                Retinal tear or detachment?{" "}
                <strong>Ophthalmologist immediately.</strong>
              </li>
            </ul>
            <p>
              They step in when the problem goes beyond what an optometrist can
              treat. And in Ontario, you&apos;ll need that referral from your
              optometrist or family doctor to book an appointment.
            </p>
            <p className="mt-3">
              Once your optometrist writes your prescription, the optician takes
              over. They measure your face, help you pick frames, explain lens
              options, and make sure everything fits right. No prescription?
              They can&apos;t help you yet. Think of them as the final step in
              getting your vision corrected.
            </p>
            <p className="mt-3">
              These three professionals aren&apos;t competing &ndash;
              they&apos;re collaborating. Your optometrist catches the problem.
              Your ophthalmologist fixes what needs surgical intervention. Your
              optician makes sure you can see clearly every day. Start with an
              optometrist in Toronto for regular care, and they&apos;ll guide
              you to the right person if you need more.
            </p>
          </>
        ),
      },

      // ── Section 5 ──────────────────────────────────────────────────────────
      {
        id: "choose-right-doctor",
        heading: "How Do I Choose the Right Eye Doctor in Toronto?",
        image: {
          src: findeyedoctorImage,
          alt: "Choosing the right eye doctor in Toronto",
        },
        contentTop: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Consider Your Age and Eye Health Needs
              </h4>
              <p>
                A kid getting their first eye exam needs something different
                than someone managing glaucoma. Children benefit from
                optometrists who specialise in pediatric care. Older adults may
                need someone experienced with age-related conditions like
                cataracts or macular degeneration. If you have diabetes, find an
                optometrist who does thorough retinal screenings.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Look for Specialty Services That Match Your Situation
              </h4>
              <p>Not every clinic offers the same services:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong>Pediatric Eye Care:</strong> Some optometrists focus
                  on catching issues early, managing lazy eye in kids, or
                  fitting children with their first glasses.
                </li>
                <li>
                  <strong>Dry Eye Treatment:</strong> If your eyes burn or water
                  constantly, look for a clinic with advanced dry eye therapies,
                  not just basic eye drops.
                </li>
                <li>
                  <strong>Myopia Control:</strong> Parents worried about their
                  child&apos;s worsening nearsightedness should seek out
                  optometrists trained in myopia management programs.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Location and Accessibility
              </h4>
              <p>
                You&apos;re more likely to keep up with eye care if it&apos;s
                convenient. Is the clinic near your home or work? Can you get
                there by transit? Do they offer evening or weekend appointments?
                If you&apos;re in Toronto, there are optometrists in nearly
                every neighborhood. Don&apos;t settle for one that&apos;s hard
                to reach.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Technology and Advanced Diagnostics
              </h4>
              <p>
                Modern equipment catches problems earlier. Digital retinal
                imaging, OCT scans, and visual field testing give a clearer
                picture of your eye health than older methods. Clinics that
                invest in technology often deliver more accurate diagnoses.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 6 ──────────────────────────────────────────────────────────
      {
        id: "tips-finding-clinic",
        heading: "Tips for Finding a Trusted Optometry Clinic in Toronto",
        image: {
          src: UnderstandImage1,
          alt: "Tips for finding a trusted optometry clinic in Toronto",
        },
        contentTop: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">Read Reviews</h4>
              <p>
                Google reviews and patient testimonials tell you how people
                actually feel about their experience.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Ask for Recommendations
              </h4>
              <p>
                Friends, family, or your family doctor can point you toward
                someone reliable.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">Check Credentials</h4>
              <p>
                Make sure the optometrist is licensed with the College of
                Optometrists of Ontario.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                Visit the Clinic First
              </h4>
              <p>
                If something feels off &ndash; whether it&apos;s the staff, the
                wait time, or how rushed the exam feels &ndash; trust your gut.
              </p>
            </div>
            <p>
              Choosing the right eye doctor in Toronto isn&apos;t complicated.
              It just takes a little homework upfront. For more guidance on what
              to look for, check out our blog on{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/optometrist-in-toronto-beaches-guide/"
              >
                Choosing the Right Optometrist
              </a>
              .
            </p>
          </div>
        ),
      },

      // ── Conclusion ─────────────────────────────────────────────────────────
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Your eyes deserve the right care from the right professional.
              Whether you need a routine exam, surgery, or new glasses, knowing
              who to see makes all the difference. Start with an optometrist in
              Toronto for regular checkups and let them guide you from there.
            </p>
            <p className="mt-3">
              Want to learn more? Read our guides on{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/opticians-optometrists-and-ophthalmologists/"
              >
                Understanding Eye Care Professionals
              </a>{" "}
              and{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/before-you-search-eye-doctor-near-me"
              >
                Finding &amp; Visiting Eye Doctors
              </a>{" "}
              for deeper insights into protecting your vision.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "Can an optometrist treat eye diseases?",
        answer:
          "Yes. Optometrists diagnose and manage conditions like glaucoma, dry eye, and diabetic retinopathy. They prescribe medication in many cases. If surgery is needed, they'll refer you to an ophthalmologist for advanced treatment.",
      },
      {
        id: 2,
        question: "Do I need a referral to see an ophthalmologist in Ontario?",
        answer:
          "Usually, yes. Ophthalmologists typically require a referral from your optometrist or family doctor. This ensures you're seeing the right specialist at the right time. Emergency cases may bypass this process.",
      },
      {
        id: 3,
        question: "How often should I get an eye exam?",
        answer:
          "Adults should have an eye exam every two years. Kids, seniors, and people with existing eye conditions or diabetes should go annually. Your optometrist will recommend a schedule based on your specific needs.",
      },
      {
        id: 4,
        question:
          "What's the difference between an optometrist and an optician?",
        answer:
          "An optometrist examines your eyes and writes prescriptions. An optician uses that prescription to fit and dispense glasses or contact lenses. One diagnoses, the other provides the eyewear you need to see clearly.",
      },
    ],
  },

  // page - 7
  "pediatric-optometrists-toronto-child-eye-care": {
    title: "Pediatric Eye Care 101",
    subtitle:
      "How Do I Take Care of My Child's Eyes? A Complete Guide for Parents",
    featureImage: PediatricEyeCareImage,
    keyTakeaways: [
      "Children rarely complain about vision problems. Regular eye exams starting in infancy are essential to catch issues before they affect development.",
      "More outdoor time, less screen time, proper nutrition, and good sleep habits directly impact eye health and can prevent myopia progression.",
      "Kids' glasses should be durable and comfortable. Involve your child in choosing frames they'll want to wear, and consider specialized lenses for myopia control.",
      "Eye emergencies like injuries, sudden vision changes, or infections with discharge require immediate professional care.",
      "A pediatric optometrist in Toronto offers specialized care beyond basic vision checks. They can detect subtle issues that school screenings often miss.",
    ],
    content: (
      <>
        <p>
          Taking care of your child&apos;s eyes starts right from birth. This
          will continue through their teenage years, when you manage their
          screen time. It&apos;s no small feat to take care of your child&apos;s
          eyes. This guide covers all that you need to know about taking care of
          your child&apos;s eyes.
        </p>
        <p>
          Pediatric optometrists in Toronto recommend that you make it a habit
          to regularly check your child&apos;s eye health to catch issues early
          before they become lifelong problems later on. Small steps today
          prevent big problems tomorrow.
        </p>
      </>
    ),
    sections: [
      // ── Section 0 ──────────────────────────────────────────────────────────
      {
        id: "vision-development",
        heading: "Understanding Children's Vision Development",
        image: {
          src: PediatricEyeCareImage,
          alt: "Pediatric optometrists in Toronto – children's vision development",
        },
        contentTop: (
          <>
            <p>
              Vision isn&apos;t fully developed from birth. It takes time and
              grows like a muscle, with constant use and care. However, it
              develops remarkably fast. Babies go from detecting light and
              shadows to identifying faces and objects in just a few months
              after birth.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <div className="space-y-8 mt-8">
              <div>
                <h4 className="font-bold text-primary mb-2">
                  How Eyes Develop From Infancy to School Age
                </h4>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={PediatricEyeCareImage}
                    alt="Eye Development"
                    className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p>
                      Newborns see in black and white. They only begin to
                      distinguish color by the third month. In terms of
                      distance, they can only see about 8&ndash;12 inches
                      &ndash; enough to see you as you breastfeed them.
                    </p>
                    <p className="mt-2">
                      By the fifth month, they begin to develop their depth
                      perception. By this time, they realize that they can touch
                      an object if they reach for it.
                    </p>
                    <p className="mt-2">
                      Through constant use, school-age children refine their
                      vision. Their eyes learn to work together, track moving
                      objects, and focus on varying distances.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2">
                  Key Milestones in Visual Development
                </h4>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <Image
                    src={PediatricEyeCareImage}
                    alt="Visual Milestones"
                    className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                  />
                  <ul className="list-disc pl-5 space-y-1 flex-1">
                    <li>
                      <strong>Birth to 1 month:</strong> Responds to bright
                      light; focuses 8–12 inches away.
                    </li>
                    <li>
                      <strong>2–3 months:</strong> Begins to follow moving
                      objects and notices hands.
                    </li>
                    <li>
                      <strong>4–5 months:</strong> Develops depth perception and
                      color vision.
                    </li>
                    <li>
                      <strong>6–8 months:</strong> Eye-hand coordination
                      improves; reaches objects accurately.
                    </li>
                    <li>
                      <strong>9–12 months:</strong> Judges distances better and
                      deliberately throws objects.
                    </li>
                    <li>
                      <strong>1–2 years:</strong> Color vision fully develops;
                      depth perception improves.
                    </li>
                    <li>
                      <strong>3–5 years:</strong> Visual acuity approaches
                      20/20.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ),
      },

      // ── Section 1 ──────────────────────────────────────────────────────────
      {
        id: "warning-signs",
        heading: "Warning Signs Parents Should Watch For",
        contentTop: (
          <>
            <p>
              If you feel something is off with your child&apos;s vision, then
              it probably is. Learn to trust your instincts. Here are some signs
              you should watch out for:
            </p>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>Excessive tearing or eye discharge</li>
                <li>Constant eye rubbing when not tired</li>
                <li>Extreme sensitivity to light</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>White or gray-white color in the pupil</li>
                <li>Eyes that don&apos;t line up by 4 months</li>
                <li>One eye turning in or out consistently</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>Head tilting when trying to see</li>
                <li>Difficulty following objects by 3 months</li>
                <li>Squinting or closing one eye to see</li>
              </ul>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>Sitting too close to screens</li>
                <li>Avoiding visual activities or reading</li>
              </ul>
            </div>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Children rarely complain about vision problems. They don&apos;t
              know what &ldquo;normal&rdquo; vision is, so you need to always be
              on the lookout. Early intervention is very important. Most vision
              problems can be corrected if caught early by a pediatric
              optometrist in Toronto.
            </p>
          </>
        ),
      },

      // ── Section 2 ──────────────────────────────────────────────────────────
      {
        id: "regular-eye-exams",
        heading: "Why Regular Eye Exams Are Essential",
        image: {
          src: GlaucomaImage,
          alt: "Regular pediatric eye exams Toronto",
        },
        contentTop: (
          <>
            <p>
              Children can&apos;t tell if there&apos;s something wrong with
              their vision. If they see a tree without leaves, they have no idea
              that they are missing something beautiful. To them, that&apos;s
              how a tree is supposed to look. For that matter, book regular eye
              consultations with optometrists in Toronto to examine their eyes.
              Here&apos;s a recommended eye exam schedule you can use:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                <strong>First exam:</strong> 6–12 months old
              </li>
              <li>
                <strong>Second exam:</strong> 3 years old
              </li>
              <li>
                <strong>Before kindergarten:</strong> 5–6 years old
              </li>
              <li>
                <strong>School-aged children:</strong> Annually
              </li>
            </ul>
          </>
        ),
        contentBottom: (
          <>
            <p>
              When you visit a pediatric optometrist in Toronto, they use
              child-friendly techniques to examine children who won&apos;t sit
              still. They understand that testing a three-year-old requires a
              different approach from testing an adult. When you visit them,
              they check the following:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3 mb-4">
              <li>Visual acuity (how clearly your child sees)</li>
              <li>Eye muscle coordination</li>
              <li>Focusing abilities</li>
              <li>Peripheral awareness</li>
              <li>Color vision</li>
              <li>Eye health</li>
            </ul>
            <h4 className="font-bold text-primary mb-2">
              Benefits of Early Detection
            </h4>
            <p>
              80% of learning happens through vision. When kids encounter vision
              problems at an early stage of their lives, it can derail their
              learning process. Vision problems can make a smart child seem
              inattentive or slow. Early intervention means:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Better academic performance</li>
              <li>Stronger social skills</li>
              <li>Fewer behavioral problems</li>
              <li>More confidence</li>
              <li>Proper brain development</li>
            </ul>
            <p className="mt-3">
              Finding vision problems early often means simpler, less invasive
              treatments.
            </p>
          </>
        ),
      },

      // ── Section 3 ──────────────────────────────────────────────────────────
      {
        id: "common-conditions",
        heading: "Common Children's Eye Conditions",
        contentTop: (
          <>
            <p>
              Eye conditions affect a child&apos;s development in many ways we
              can&apos;t imagine &ndash; from catching a ball to learning to
              read. Here are some of the most common eye conditions seen at
              pediatric practices across Toronto.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-12 mt-8">
            {/* 1. Myopia */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                1. Myopia (Nearsightedness)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={MyopiaImage}
                  alt="Myopia (Nearsightedness)"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    Myopia is a condition that makes distant objects appear
                    blurry, while close items remain clear. When a child has
                    myopia, you will often find them squinting to see the
                    whiteboard or sitting unusually close to screens. Causes of
                    myopia often include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Genetics (if you have myopia, your child has a higher
                      risk)
                    </li>
                    <li>Too much near work without breaks</li>
                    <li>Limited outdoor time during development</li>
                    <li>Extended screen use</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="font-medium text-primary">
                  To manage myopia, spend at least 2 hours outdoors daily and
                  take regular breaks from near work. Modern management
                  practices include:
                </p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li>Special contact lenses are worn at night</li>
                  <li>Low-dose atropine eye drops</li>
                  <li>More outdoor time (2 hours daily helps significantly)</li>
                  <li>Regular breaks during reading or screen time</li>
                </ul>
                <p className="font-medium">
                  <a
                    href="https://www.360eyecare.ca/what-is-myopia-and-how-to-correct-it/"
                    className="text-primary hover:underline"
                  >
                    Learn more about childhood myopia management in our detailed
                    guide.
                  </a>
                </p>
              </div>
            </div>

            {/* 2. Hyperopia */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                2. Hyperopia (Farsightedness)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={SpectacleImage}
                  alt="Hyperopia (Farsightedness)"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    Children with hyperopia see distant objects more clearly
                    than close objects. Unlike adults, children&apos;s flexible
                    eye lenses can often compensate for mild hyperopia, but at a
                    cost. This constant compensation creates:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Headaches after reading</li>
                    <li>Eye strain and fatigue</li>
                    <li>Difficulty maintaining focus on schoolwork</li>
                    <li>Avoidance of close work</li>
                  </ul>
                  <p className="mt-3">
                    Hyperopia directly impacts learning. A child struggling to
                    focus on words may seem inattentive when they&apos;re
                    actually working harder than their peers just to see
                    clearly.
                  </p>
                  <p>
                    for more information on how faresightness affetcs childern,{" "}
                    <a
                      href="https://www.360eyecare.ca/farsightedness-treatment-toronto-guide/"
                      className="text-primary hover:underline"
                    >
                      read our blog
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Amblyopia */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                3. Amblyopia (Lazy Eye)
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={PediatricEyeCareImage}
                  alt="Amblyopia (Lazy Eye)"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    Amblyopia occurs when the brain favours one eye over the
                    other. Gradually, it suppresses vision in the other eye.
                    Amblyopia is the leading cause of vision loss in children.
                    Common signs include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Head tilting</li>
                    <li>Poor depth perception (difficulty catching balls)</li>
                    <li>Squinting or closing one eye</li>
                    <li>Eyes that appear to wander independently</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="font-medium text-primary">
                  Treatment works best before the age of seven when visual
                  pathways are still developing. Treatment options include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <ul className="list-disc pl-5 space-y-1 ml-4">
                    <li>Prescription glasses</li>
                    <li>Eye patching</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 ml-4">
                    <li>Vision therapy exercises</li>
                    <li>Atropine eye drops</li>
                  </ul>
                </div>
                <p className="mt-3 text-sm text-gray-600 italic">
                  Note: Amblyopia becomes much harder to treat after age 10,
                  emphasizing the importance of early checkups.
                </p>
                <p className="font-medium">
                  <a
                    href="https://www.360eyecare.ca/lazy-eye-treatment-for-adults-options/"
                    className="text-primary hover:underline"
                  >
                    Read our blog to learn more about how Amblyopia is treated
                    in detail.
                  </a>
                </p>
              </div>
            </div>

            {/* 4. Strabismus */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                4. Strabismus (Crossed Eyes)
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={MedicalTeamImage}
                  alt="Strabismus (Crossed Eyes)"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    Strabismus occurs when the eyes don&apos;t align properly.
                    One eye may turn inward, outward, upward, or downward while
                    the other focuses straight ahead. Left untreated, strabismus
                    can lead to permanent vision loss as the brain learns to
                    ignore input from the misaligned eye. Seek help immediately
                    if:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>You notice misalignment after 4 months of age</li>
                    <li>The turning is consistent (not occasional)</li>
                    <li>Your child complains of double vision</li>
                    <li>You see eye turning after illness or injury</li>
                  </ul>
                </div>
              </div>
              <div>
                <p>Treatment options include:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Prescription glasses</li>
                  <li>Vision therapy</li>
                  <li>Eye muscle surgery</li>
                  <li>Specialized exercises</li>
                </ul>
                <p className="mt-4">
                  Left untreated, strabismus can lead to permanent vision loss
                  as the brain learns to ignore input from the misaligned eye.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 mt-2 text-lg">
                  Other Common Concerns
                </h4>

                <div className="flex-1">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Eye Allergies:</strong> Red, itchy, watery eyes
                      may mean that your child has allergies. Seasonal pollen,
                      pet dander, or dust mites are common triggers.
                    </li>
                    <li>
                      <strong>Digital Eye Strain:</strong> Overuse of digital
                      devices results in symptoms like headaches, dry eyes, and
                      blurry vision.
                    </li>
                    <li>
                      <strong>Conjunctivitis (Pink Eye):</strong> This common
                      infection needs prompt treatment to prevent spreading and
                      potential complications.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Pediatric optometrists in Toronto specialise in addressing
                    all these conditions with child-friendly approaches. Early
                    detection makes treatment simpler and more effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },

      // ── Section 4 ──────────────────────────────────────────────────────────
      {
        id: "screen-time-outdoors",
        heading: "Lifestyle Habits That Support Healthy Vision",
        contentTop: (
          <>
            <p>
              Children&apos;s eyes weren&apos;t designed for hours of screen
              time. Digital devices require intense near focus, which strains
              developing visual systems. Symptoms associated with digital eye
              strain include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Headaches</li>
              <li>Dry, irritated eyes</li>
              <li>Blurry vision</li>
              <li>Neck and shoulder pain</li>
              <li>Difficulty shifting focus to distant objects</li>
            </ul>
            <p className="mt-3">Try these practical strategies:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                Follow the 20-20-20 rule: Every 20 minutes, look at something 20
                feet away for 20 seconds
              </li>
              <li>
                Position screens slightly below eye level and arm&apos;s length
                away
              </li>
              <li>Increase text size to reduce squinting</li>
              <li>
                Use screen filters or blue light glasses for longer sessions
              </li>
              <li>Set device-free zones and times at home</li>
              <li>Use parental controls to enforce breaks</li>
            </ul>
            <p className="mt-3">
              The Canadian Paediatric Society recommends no screen time for
              children under 2, and just 1 hour daily for ages 2&ndash;5.
            </p>
          </>
        ),
        contentBottom: (
          <>
            <h4 className="font-bold text-primary mb-2">
              Importance of Outdoor Play in Reducing Myopia Risk
            </h4>
            <p>
              Research shows that children who spend more time outdoors have
              significantly lower myopia rates. The reason is that:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                Natural light triggers dopamine release that regulates eye
                growth
              </li>
              <li>Distance viewing relaxes focusing muscles</li>
              <li>
                Varied visual environments create healthy visual challenges
              </li>
              <li>Less time indoors means less near-focused activity</li>
            </ul>
            <p className="mt-3">
              Aim for 2 hours of outdoor time daily, even in winter. A Toronto
              winter walk still provides the light intensity needed for eye
              health benefits. However, when outdoors, don&apos;t forget
              UV-protective sunglasses. Children&apos;s clear lenses allow more
              UV light to reach their retinas than adult eyes.
            </p>
          </>
        ),
      },

      // ── Section 6 ──────────────────────────────────────────────────────────
      {
        id: "eye-protection",
        heading: "Protecting Children's Eyes from Injury & Strain",
        contentTop: (
          <div className="space-y-12">
            <p>Most eye injuries are preventable with simple precautions.</p>
            {/* 1. Sports Eye Protection */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                Sports Eye Protection
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Image
                  src={BeachImage}
                  alt="Sports eye protection"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    A ball traveling 60 mph carries enough force to permanently
                    damage vision. Each year, thousands of children suffer
                    preventable sports eye injuries. Protection approaches
                    include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      <strong>High-risk (hockey, baseball):</strong> Full face
                      shields or polycarbonate goggles.
                    </li>
                    <li>
                      <strong>Racquet sports:</strong> Protective eyewear with
                      secure straps.
                    </li>
                    <li>
                      <strong>Swimming:</strong> Fitted goggles to prevent
                      chemical irritation.
                    </li>
                    <li>
                      <strong>Winter sports:</strong> Wrapped eyewear that
                      blocks wind and glare.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Note: Regular glasses can shatter on impact; always use gear
                    meeting ASTM F803 standards.
                  </p>
                </div>
              </div>
              <p className="mt-4">
                Look for eyewear meeting ASTM F803 standards ( these are
                specifically tested for sports safety). Pediatric optometrists
                in Toronto can fit custom protective eyewear that doesn’t
                compromise peripheral vision.
              </p>
              <p>
                Eye injuries happen in an instant but can affect vision for
                life. No game is worth that risk.
              </p>
            </div>

            {/* 2. Sunglasses and UV Protection */}
            <div>
              <h4 className="font-bold text-primary mb-2 text-lg">
                Sunglasses and UV Protection for Kids
              </h4>
              <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                <Image
                  src={PediatricEyeCareImage}
                  alt="UV Protection"
                  className="md:w-[45%] w-[100%] h-64 object-cover rounded-md"
                />
                <div className="flex-1">
                  <p>
                    Children&apos;s eyes let in more harmful UV rays than adult
                    eyes. By age 18, kids have received up to 80% of their
                    lifetime UV exposure. When choosing sunglasses:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Verify 99–100% UVA/UVB protection (UV400 label).</li>
                    <li>Select impact-resistant polycarbonate lenses.</li>
                    <li>Choose wrapped styles that block side light.</li>
                    <li>Find comfortable frames that children like to wear.</li>
                    <li>
                      Consider polarized lenses to reduce glare, especially near
                      water
                    </li>
                  </ul>
                  <p className="mt-2">
                    Even on cloudy days, UV rays penetrate the cover. Make
                    sunglasses a year-round habit.
                  </p>
                </div>
              </div>
              <p>
                Hats with brims provide additional protection, especially during
                peak sun hours (10am-4pm).
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="mt-12">
            {/* 3. Ergonomics */}
            <h4 className="font-bold text-primary mb-2 text-lg">
              Ergonomics for Reading and Screen Use
            </h4>
            <div className="flex-1">
              <p>
                Poor posture during visual tasks strains the back and stresses
                the entire visual system.{" "}
              </p>
              <p>Help your child with these eye-friendly adjustments:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <strong className="text-primary">Proper lighting:</strong>{" "}
                  Even illumination without glare; task lighting for reading.
                </li>
                <li>
                  <strong className="text-primary">Screen positioning:</strong>{" "}
                  Slightly below eye level, arm&apos;s length away.
                </li>
                <li>
                  <strong className="text-primary">Reading posture:</strong>{" "}
                  Book at a 15-degree angle below eye level.
                </li>
                <li>
                  <strong className="text-primary">Seating:</strong> Feet flat,
                  back supported, 90-degree elbows.
                </li>
              </ul>
              <p className="mt-2">For homework and reading:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <p>Create dedicated spaces with proper lighting</p>
                </li>
                <li>
                  <p>Use book stands to maintain ideal angles</p>
                </li>
                <li>
                  <p>Ensure chairs allow feet to touch the ground</p>
                </li>
                <li>
                  <p>Keep water nearby to prevent dry eyes</p>
                </li>
                <li>
                  <p>Set timers for regular movement breaks</p>
                </li>
              </ul>
              <p className="mt-2">
                Young bodies adapt to poor positions easily but may develop
                problems later. Teaching proper visual ergonomics now prevents
                headaches, neck pain, and vision issues later. Prevention is
                always easier than treatment. These simple protective measures
                preserve the gift of healthy vision for your child’s future.
              </p>
            </div>
          </div>
        ),
      },

      // ── Section 7 ──────────────────────────────────────────────────────────
      {
        id: "emergency-care",
        heading: "When to Seek Immediate Care",
        contentTop: (
          <>
            <p>
              Some eye problems can&apos;t wait for a scheduled appointment. Any
              rapid vision loss requires immediate attention &ndash; don&apos;t
              wait to see if it improves. Seek emergency care if your child
              experiences:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Sudden blurry vision</li>
              <li>Vision loss in part of their visual field</li>
              <li>New floating spots or flashes of light</li>
              <li>Double vision that appears suddenly</li>
              <li>Severe sensitivity to light</li>
            </ul>
            <p className="mt-3">
              These symptoms could indicate serious conditions like retinal
              detachment or inflammation that threaten permanent vision loss.
            </p>
            <p>
              Children&apos;s curiosity often leads to accidents. Chemical
              splashes, foreign objects, and blunt trauma need urgent
              professional assessment.
            </p>
            <p>Get immediate help for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 mb-4">
              <li>
                Any penetrating injury (never try to remove embedded objects)
              </li>
              <li>
                Chemical splashes (rinse continuously with clean water while
                seeking care)
              </li>
              <li>Blunt trauma to the eye area</li>
              <li>
                Foreign bodies that don&apos;t rinse out easily with tears
              </li>
              <li>Burns affecting the eyelids or eye surface</li>
            </ul>
          </>
        ),
        contentBottom: (
          <>
            <p>
              Never rub an injured eye. Secure a loose shield (like a paper cup)
              over severe injuries to prevent pressure while heading to
              emergency care.
            </p>
            <p className="mt-3">
              Most eye emergencies have excellent outcomes when treated
              promptly. The single biggest factor affecting prognosis is how
              quickly you seek care.
            </p>
            <p>
              {" "}
              Keep emergency contact information readily accessible by posting
              it on your refrigerator and saving it in your phone. When vision
              is at stake, every minute counts.
            </p>
          </>
        ),
      },

      // ── Conclusion ─────────────────────────────────────────────────────────
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Your child&apos;s vision is precious and fragile. Don&apos;t wait
              for symptoms to appear.{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book a pediatric eye exam with our pediatric optometrists in
                Toronto today.
              </a>
              <br />
              Clear vision is the greatest gift you can give your child.
            </p>
          </>
        ),
        contentBottom: null,
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How often should my child's eyes be checked?",
        answer:
          "Babies need their first exam between 6 and 12 months, followed by check-ups at age 3 and before starting school. School-aged children should have annual exams, even without symptoms. More frequent visits may be needed if vision problems exist.",
      },
      {
        id: 2,
        question: "Can too much screen time damage eyesight?",
        answer:
          "Excessive screen time can accelerate myopia progression and cause digital eye strain symptoms like headaches and dry eyes. While it doesn't permanently damage eyes, it creates habits that can affect vision development. Follow the 20-20-20 rule for safer screen use.",
      },
      {
        id: 3,
        question: "Are eye problems hereditary?",
        answer:
          "Many vision conditions have genetic links. Children of myopic parents have 3–5 times higher risk of developing nearsightedness. Family history of strabismus, amblyopia, and color vision deficiencies also increases risk. Share your family's complete eye health history with your pediatric optometrist.",
      },
      {
        id: 4,
        question: "Can my child outgrow vision problems?",
        answer:
          "Some focusing issues and mild alignment problems might improve as children develop. However, conditions like significant refractive errors, amblyopia, and strabismus typically require intervention. Waiting to 'outgrow' these issues often leads to permanent vision loss that could have been prevented.",
      },
    ],
  },

  // page - 8
  "eye-care-tips-toronto-healthy-vision": {
    title: "Top Eye Care Tips for Healthy Vision",
    subtitle:
      "Top Eye Care Tips for Healthy Vision: A Complete Guide to Protecting Your Eyes",
    featureImage: OptometryImage,
    keyTakeaways: [
      "Position your screen at arm’s length and slightly below eye level. Follow the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds).",
      "Wear UV400 sunglasses every time you’re outside, even in winter. UV rays cause cataracts and macular degeneration over time.",
      "Eye exercises reduce fatigue and make long screen days more comfortable, though they don’t cure vision conditions.",
      "Use preservative-free artificial tears and a humidifier to keep eyes hydrated. Blink deliberately when using screens.",
      "Dark leafy greens, fatty fish, and colorful vegetables provide essential vitamins and antioxidants for long-term eye health.",
    ],
    content: (
      <>
        <p>
          Our eyes take constant beating from stress, pollution, and prolonged
          screen time. These occurrences threaten our vision. Yet we ignore them
          until we notice the first blur. Let’s face the facts: you’ve only got
          a pair of eyes. Therefore, it makes sense to protect and take good
          care of them.
        </p>
        <p className="mt-4">
          To give your eyes the care they deserve, this guide offers practical
          tips on how to protect your eyes and maintain sharp vision for years
          to come.
        </p>
      </>
    ),
    sections: [
      // section 0
      {
        id: "daily-eye-care-tips",
        heading: "What Are the Best Daily Eye Care Tips?",
        image: {
          src: understandDryEyeImage,
          alt: "Daily eye care habits",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Our eyes work hard all day, every day, from the day we are born.
              To continue enjoying their service, we must care for them, just
              like we do for our cars. Eye care doesn’t have to be expensive.
              Simple everyday habits can make a big difference.
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Blink More Than You Think You Need To
              </h4>
              <p>
                We blink less when we stare at screens; a whole lot less.
                Normally, we are supposed to blink 15 times every minute. This
                number drops down to five or six when we stare at screens.
                Blinking lubricates our eyes, and when we do this less, our eyes
                dry out.
              </p>
              <p className="mt-4">
                To improve your blink rate, look away from your screen at
                something 20 feet away every 20 minutes for 20 seconds, and
                blink a few times consciously. This is called the 20:20:20 rule.
                Set a reminder for this exercise if you have to. It sounds
                silly, but it works.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Water Isn’t Just for Your Body
              </h4>
              <p>
                If you’re not drinking enough water, your eyes can’t produce
                enough tears to keep them lubricated. Drink at least eight
                glasses of water daily, or more if you live in a dry environment
                or spend time in air-conditioned spaces.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Lighting is Important
              </h4>
              <p>
              Neither dim lighting nor excessive glare is good for your eyes. Your workspace should have even, comfortable lighting. Avoid harsh overhead lights that cast shadows on your screen, and position yourself away from windows that create distracting glare.
              </p>
              <p className="mt-4">Place your monitor so windows are to the side, not directly behind or in front of you. Use a desk lamp for additional task lighting if needed.</p>
              <p className="mt-4">At night, avoid working in complete darkness with a bright screen. Keep some ambient light in the room to reduce eye strain.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Stop Rubbing Your Eyes
              </h4>
              <p>
               I know they itch. I know it feels good in the moment. However, rubbing transfers bacteria from your hands straight to your eyes. It can scratch your cornea and make irritation worse, not better. If your eyes itch, try a cold compress instead, or rinse them with cool water. If the itching persists, consult a doctor about appropriate eye drops.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Build a Routine
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  <strong>Morning:</strong> Splash your face with cool water and
                  wash hands before handling contacts.
                </li>
                <li>
                  <strong>Throughout the day:</strong> Follow the 20-20-20 rule
                  and drink water.
                </li>
                <li>
                  <strong>Evening:</strong> Remove all eye makeup before bed to
                  prevent infections and irritation.
                </li>
              </ul>
              <p className="mt-4">If your eyes feel tired, place a warm compress over them for a few minutes. This helps your eyelid oil glands function properly and soothes eye strain.</p>
            </div>
          </div>
        ),
      },
      // section 1
      {
        id: "foods-for-eye-health",
        heading: "What Foods Improve Eye Health Naturally?",
        image: {
          src: EyeEmergencyImage,
          alt: "Healthy nutrition for eyes",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              You can’t eat your way to perfect vision. No superfood will fix nearsightedness. No amount of carrots will let you throw away your glasses. But nutrition is still very important. Your eyes are complex organs with high metabolic demands. They need specific nutrients to function properly, fight oxidative stress, and resist age-related decline. Feed them right, and you’re stacking the odds in your favor. Here are some nutritional recommendations to help keep your eyes healthy:
            </p>
            <div>
              <h4 className="font-bold text-primary mb-1">1. Vitamin A</h4>
              <p>
               Your retina can’t function without vitamin A. It’s essential for producing rhodopsin, a protein that lets your eyes detect light in low-light conditions. Night blindness develops without enough vitamin A. In severe cases, the cornea can deteriorate.
              </p>
              <p className="mt-4">Most people in developed countries get enough vitamin A to avoid deficiency. But optimal intake for long-term eye health requires more than just avoiding deficiency.</p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4 mt-4">
            <div>
              <ul>
                <li>Good sources : sweet potatoes, carrots, butternut squash, spinach, kale, and red peppers.</li>
              </ul>
              <p className="mt-2">Your body converts beta-carotene from these foods into vitamin A. Eating them with a bit of fat helps absorption (beta-carotene is fat-soluble).</p>
              <p className="mt-2">Animal sources provide pre-formed vitamin A: liver, egg yolks, and dairy products.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Lutein and Zeaxanthin
              </h4>
              <p>
               These two carotenoids concentrate in your macula (the part of your retina responsible for central, detailed vision). They filter harmful blue light and neutralise free radicals before they can damage delicate eye tissue.
              </p>
              <p className="mt-2">Studies consistently show that higher intake of lutein and zeaxanthin correlates with lower risk of cataracts and age-related macular degeneration.</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li><strong>Where to find them:</strong> Dark leafy greens lead the pack—kale, spinach, collard greens, and Swiss chard are loaded with both.</li>
                <li><strong>Other sources:</strong> Egg yolks, corn, peas, and orange peppers.</li>
                <li><strong>Kale is particularly potent:</strong> one cup of cooked kale delivers more lutein and zeaxanthin than most people consume in a week.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Omega-3 Fatty Acids
              </h4>
              <p>
                Your retina contains high concentrations of DHA, an omega-3 fatty acid essential for eye health. DHA maintains retinal cell membrane integrity and supports tear production. Low omega-3 intake is associated with dry eye syndrome and increased macular degeneration risk.
              </p>
              <p>Omega-3s also combat inflammation throughout the body, including in eye tissue.</p>
              <ul className='list-disc ml-5 space-y-1 mt-2'><li>Best sources: Fatty fish (salmon, mackerel, sardines, and trout) top the list.</li></ul>
              <p className="mt-2">Wild salmon (particularly from the Pacific Northwest) and Atlantic mackerel are excellent sustainable choices, available fresh or canned.</p>
              <ul><li><strong>Plant-based options:</strong> Flaxseeds, chia seeds, hemp hearts, and walnuts contain ALA. Your body converts ALA to DHA and EPA, but the conversion rate is low—typically under 10%.</li>
              <li><strong>For non-fish eaters:</strong> Algae-based omega-3 supplements provide DHA directly without fish, making them suitable for vegetarians and vegans.</li></ul>
              <p className=" mt-2">For more information on how nutrition improves your eyes, <a className="text-primary hover:underline" href="https://www.360eyecare.ca/healthy-eyes-at-every-age-a-guide-for-the-beaches-yorkville-and-rosedale-residents/">read our blog on nutrition and eye health.</a></p>
            </div>
          </div>
        ),
      },
      // section 2
      {
        id: "eye-exercises",
        heading: "Can Eye Exercises Improve Vision?",
        image: {
          src: EyeEmergencyImage,
          alt: "Eye exercise demonstration",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
             Eye exercises won’t fix your nearsightedness. They won’t cure astigmatism. If you need glasses, no amount of eye yoga will change that. But that doesn’t mean they’re useless.
            </p>
            <p className="mt-2">Eye exercises do have a place; you just need to know what they can and can’t do.</p>
            <div>
              <h4 className="font-bold text-primary mb-1">
                What Eye Exercises Do
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Reducing eye strain from screen time</li>
                <li>Improving your ability to shift focus</li>
                <li>Relieving tension headaches caused by eye fatigue</li>
                <li>Improving coordination between your eyes</li>
              </ul>
              <p className="mt-2">
                They make your eyes feel better, more comfortable, and less
                exhausted at the end of a long day.
              </p>
            </div>
          </div>
        ),
        contentBottom: (
          <div className="space-y-6 mt-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. The Big Myth: Fixing Refractive Errors
              </h4>
              <p>
                Nearsightedness, farsightedness, and astigmatism are structural issues.
                No exercise can change your eye’s physical structure. Some programs
                online claim otherwise, selling courses that promise you’ll eliminate
                your need for glasses within weeks. The science doesn’t support
                these claims.
              </p>
              <p className="mt-2">
                Multiple studies have tested this, and the results are consistent:
                eye exercises don’t correct refractive errors. If someone tells you
                otherwise, they’re either misinformed or trying to sell you
                something.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Where Exercise Helps
              </h4>
              <p>
                Digital eye strain is real. Stare at a screen for hours, and your
                eyes pay the price. They get dry, and they hurt. Simple exercises can
                ease this discomfort. They give your eye muscles a break and help
                them recover.
              </p>
              <h5 className="font-bold text-primary mt-4 mb-2">Effective Eye Exercise Techniques:</h5>
              <div className="space-y-4">
                <div>
                  <ul><li className="list-disc ml-5 space-y-1"><strong className="font-semibold text-primary">The 20-20-20 Rule : </strong><span>Every 20 minutes, look at something 20 feet away for 20 seconds. It forces your eyes to refocus and relax.</span></li></ul>
                </div>
                <div>
                  <ul><li className="list-disc ml-5 space-y-1"><strong className="font-semibold text-primary">Palming : </strong><span>Rub your hands together until they’re warm, then cup them gently over your closed eyes for 30 seconds. Do not apply pressure. It’s deeply soothing.</span></li></ul>
                </div>
                <div>
                  <ul><li className="list-disc ml-5 space-y-1"><strong className="font-semibold text-primary">Figure-Eight Tracing : </strong><span>Imagine a giant figure-eight about ten feet in front of you. Trace it slowly with your eyes for 30 seconds, then reverse direction. It helps with flexibility.</span></li></ul>
                </div>
                <div>
                  <ul><li className="list-disc ml-5 space-y-1"><strong className="font-semibold text-primary">Near-and-Far Focusing : </strong><span>Focus on your thumb 10 inches from your face for 15 seconds, then shift to something 20 feet away for 15 seconds. Repeat 10 times to build flexibility.</span></li></ul>
                </div>
              </div>
              <p className="mt-4">
                These exercises won’t improve your vision, but they will make your
                eyes feel less tired.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Convergence Insufficiency Is Different
              </h4>
              <p>
                Some people struggle to use their eyes together properly. Their eyes don’t coordinate well when focusing on close objects. This is called convergence insufficiency. For this specific condition, exercises actually work. Pencil push-ups and other convergence exercises can retrain your eyes to work as a team.
              </p>
              <p className="mt-2">
              But this isn’t about improving general vision. It’s physical therapy for a specific coordination problem. If you suspect you have convergence insufficiency, an eye doctor can diagnose it and guide you through the appropriate exercises.
              </p>
            </div>
          </div>
        ),
      },
      // section 3
      
      {
        id: "protection-sunglasses",
        heading: "How Do Sunglasses and Safety Eyewear Protect My Vision?",
        image: {
          src: GlaucomaImage,
          alt: "Sunglasses for eye protection",
        },
        contentTop: (
          <div className="space-y-4">
            <p>
              Your eyes don’t come with a warning light. They won’t tell you when UV damage is happening. They won’t alert you before flying debris causes permanent harm. By the time you notice something’s wrong, it’s often too late. That’s why it’s important to protect your eyes every single time you’re exposed to risk and not sometimes. Here’s how sunglasses and other safety wear protect your vision.
            </p>
          </div>
        ),
        contentBottom: (
          <div className="space-y-4 mt-4">
            <h4 className="font-medium text-primary">1. UV Rays Are Bad</h4> <p>You know UV rays damage your skin. The same goes for your eyes. Ultraviolet radiation comes from the sun. It’s invisible and accumulates silently over time, causing serious problems. Short-term exposure can give you photokeratitis, essentially a sunburn on your eyeball. It hurts, and your vision gets blurry. It usually heals within a day or two, but it’s miserable while it lasts.</p>
            <p>Long-term exposure is scarier. Cataracts develop when the lens inside your eye clouds over. UV radiation speeds this process up. Macular degeneration, which destroys central vision, is also linked to UV exposure. Then there’s pterygium, a growth on the white of your eye that can eventually block your vision. None of this is reversible. The damage builds over decades. By the time symptoms appear, you can’t undo what’s been done.</p>
          <h4 className="font-medium text-primary">2. Not All Sunglasses Are Equal</h4>
          <p>Dark lenses don’t mean protection. In fact, dark lenses without UV protection are worse than wearing nothing. Your pupils dilate in the darkness, letting in more UV rays.</p>
          <p>Look for sunglasses labeled UV400. This rating blocks 99-100% of UVA and UVB rays; that’s the standard you need. Some glasses claim to “block UV rays” without specifying how much. Skip those. You want the UV400 label or a guarantee of 100% UV protection.</p>
          <h4 className="font-medium text-primary">3. The Difference between Polarized and UV400</h4>
          <p>People confuse these all the time. UV400 protects against ultraviolet radiation. That’s the health benefit; the thing that prevents long-term damage.</p>
          <p>Polarized lenses reduce glare. They filter out reflected light bouncing off water, snow, car hoods, and pavement. This makes your vision clearer and more comfortable in bright conditions.</p>
          <p>Here’s the key: polarized lenses don’t necessarily block UV rays, and UV400 lenses aren’t always polarized. You can have one without the other. Ideally, you want both.</p>
          <p>If you’re driving, fishing, skiing, or spending time near water, polarized lenses make a huge difference. But UV400 protection is non-negotiable, no matter what you’re doing outside.</p>
          </div>
        ), 
      },
      // section 4
      {
        id: "prevent-eye-strain",
        heading: "What Are the Best Ways to Prevent Eye Strain?",
        contentTop: (
          <div className="space-y-4">
            <p>
              Your eyes aren’t designed for what you’re putting them through,
              such as hours of staring at screens, bad lighting, forgetting to
              blink, ignoring discomfort until it becomes pain, etc. Then you
              wonder why your head throbs at the end of the day.
            </p>
            <p>
              Eye strain happens because you’re working against your biology
              without giving your eyes what they need. Fix that, and everything
              changes. So, here’s how:
            </p>
          </div>
        ),
        contentBottom: (
          <div className="space-y-12 mt-8">
            {/* 1. Workstation Setup */}
            <div>
              <h4 className="font-bold text-primary mb-3">
                1. A Proper workstation setup
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Image
                  src={ScreenHeadachesFeature}
                  alt="Ergonomic workstation"
                  className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100"
                />
                
                <ul className="list-disc ml-5 space-y-3">
                  <li>
                    <p className="mb-4">
                      Most people set up their desk based on what fits or aesthetic
                      reasons. If the screen is too high, you’ll strain your neck and
                      dry out your eyes because you’re staring upward with them wide
                      open. If the screen is too low, you’ll hunch forward,
                      compressing your spine and forcing your eyes to work harder at
                      an awkward angle.
                    </p>
                  </li>
                  <li>
                    <strong>Position your monitor at arm’s length.</strong> If
                    you can touch the screen with your fingertips when your arm
                    is fully extended, you’re in the right zone.
                  </li>
                  <li>
                    <strong>
                      The top of your screen should sit at or slightly below eye
                      level.
                    </strong>{" "}
                    When you look straight ahead naturally, you should be
                    viewing the upper third of the screen.
                  </li>
                  <li>
                    <strong>Tilt the screen back 10 to 20 degrees</strong> to
                    match your natural downward viewing angle. If you use a
                    laptop, get a separate keyboard and prop the laptop up on a
                    stand.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Proper Lighting */}
            <div>
              <h4 className="font-bold text-primary mb-3">2. Proper Lighting</h4>
              <p className="mb-6">
                Overhead fluorescents create glare on your screen and cast harsh
                shadows. Your eyes constantly adjust between bright spots and
                dark areas, which exhausts them.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p>
                    Ambient lighting works better (soft, indirect light that
                    fills the room without creating hotspots). Position your
                    desk perpendicular to windows.
                  </p>
                  <p>
                    Position your desk perpendicular to windows, not facing them or with your back to them. Windows behind you create glare on your screen, while windows in front force your eyes to constantly adjust between bright outdoor light and your dimmer screen.
                  </p>
                  <p>If you can’t reposition your desk, use blinds or curtains to control natural light. Add a desk lamp for task lighting when needed. Position it to the side so it illuminates your work without shining in your eyes or reflecting off your screen. At night, don’t work in a dark room with only your bright screen for light. The contrast is too extreme. Keep some ambient lighting on.</p>
                </div>
                <Image
                  src={EyeEmergencyImage}
                  alt="Proper ambient lighting"
                  className="w-full h-72 object-cover rounded-xl shadow-lg border border-gray-100 order-first md:order-last"
                />
              </div>
            </div>

            {/* 3. Reading Habits */}
            <div>
              <h4 className="font-bold text-primary mb-3">3. Reading Habits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Image
                  src={UnderstandImage1}
                  alt="Proper reading habits"
                  className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100"
                />
                <div className="space-y-4">
                  <p className="mb-4">
                    Books and phones require closer focus than computer screens. 
                    Hold reading material about 16 inches from your eyes. Closer 
                    than that, and you’re making your eye muscles work overtime.
                  </p>
                  <p>
                    Reading light should come from behind you and shine onto the
                    page. You don’t want it reflecting off the page into your
                    eyes.
                  </p>
                  <p>
                    For digital reading, <strong>increase the font size</strong>.
                    Stop squinting and adjust brightness to match your
                    environment—not maximum brightness in a dark room or a dim
                    screen in bright light.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      // section 5
      {
        id: "tips-conclusion",
        heading: "Conclusion",
        contentTop: (
          <div>
            <p>
              Your eyes can’t heal themselves from neglect. But small
              changes—better habits, proper protection, and smart nutrition—make
              a real difference over time. Don’t wait until problems develop.
            </p>
            <p>
              <a
                className="text-primary hover:underline font-bold"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book an eye exam today{" "}
              </a>
              to catch issues early when they’re still treatable. Your vision is
              worth protecting.
            </p>
          </div>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question: "How often should I get an eye exam?",
        answer:
          "Every one to two years for adults, even if your vision seems fine. Some conditions like glaucoma develop silently without symptoms. Early detection is crucial for preventing permanent damage and preserving your sight long-term.",
      },
      {
        id: 2,
        question: "Can I wear sunglasses indoors to reduce screen glare?",
        answer:
          "No. Sunglasses indoors make your pupils dilate, forcing your eyes to work harder in dim conditions. Instead, adjust screen brightness, improve lighting, and use anti-glare screen filters or computer glasses designed for indoor use.",
      },
      {
        id: 3,
        question: "Do blue light glasses really help with eye strain?",
        answer:
          "The evidence is mixed. Blue light isn’t the main cause of eye strain; it’s prolonged focus and reduced blinking. Proper breaks, good ergonomics, and regular blinking often work better than blue light glasses for most people.",
      },
      {
        id: 4,
        question: "Are expensive sunglasses better for eye protection?",
        answer:
          "Not necessarily. Price doesn’t guarantee UV protection. A $20 pair with UV400 rating protects better than $200 designer sunglasses without it. Always check for UV400 or 100% UV protection labels, regardless of cost.",
      },
    ],
  },

  // page - 9
  "eye-protection-101-toronto-tips": {
    title: "Eye Protection 101",
    subtitle:
      "Eye Protection 101: Tips to Keep Your Vision Safe at Work, Home, and Outdoors",
    featureImage: BeachImage,
    keyTakeaways: [
      "Follow the 20-20-20 rule, position your screen correctly, and control lighting to prevent digital eye strain before it becomes chronic.",
      "Wear sunglasses with 100% UV protection year-round, not just in summer. Pair them with a wide-brimmed hat for maximum coverage.",
      "Whether you're at work, playing sports, or doing yard work at home, wearing the right protective eyewear stops most accidents before they happen.",
      "Don't rub your eyes. Flush chemicals immediately for 15 minutes. Protect puncture wounds with a loose shield and get to a doctor. Quick action saves vision.",
      "Get checked every one to two years, depending on your age and risk factors. Many serious eye diseases have no early symptoms. Exams find them when treatment still works.",
    ],
    content: (
      <>
        <p>
          Your eyes face threats every day at work, at home, and even outside.
          Flying debris, harsh UV rays, chemical splashes, and digital strain
          are vision-impairing injuries you can encounter while going about your
          day. But most eye injuries are preventable, only if you know what
          you&apos;re up against.
        </p>
        <p>
          This blog gives you practical tips to help you protect your eyes.
          These eye protection tips will help you see the risks before they
          cause damage.
        </p>
      </>
    ),
    sections: [
      // ── Section 0 ──────────────────────────────────────────────────────────
      {
        id: "digital-screens",
        heading: "How Can I Protect My Eyes from Digital Screens?",
        contentTop: (
          <>
            <p>
              There are so many recommended ways of protecting your eyes from
              digital screens, including the 20-20-20 rule, how to position your
              screen right, proper lighting, and blue light filtering glasses or
              screen protectors. We explore these in detail:
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Position Your Screen Correctly
              </h4>
              <p>
                Start with distance. Your monitor should sit about 25 inches
                from your face. Not closer. Tilt it back 10 to 20 degrees so
                you&apos;re looking slightly downward. This reduces how wide
                your eyes open, which helps them stay moist.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Control Your Lighting
              </h4>
              <p>
                Harsh overhead lights create glare. So does sunlight hitting
                your screen directly. For these reasons, position your desk
                perpendicular to windows. Use curtains or blinds during bright
                hours. If you work at night, don&apos;t let your screen be the
                only light source in the room. That contrast forces your eyes to
                work harder.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Adjust Screen Brightness
              </h4>
              <p>
                Brightness should match your environment. Too dim and you
                squint. Too bright and you strain. Most devices let you adjust
                this in settings. Some even shift automatically based on the
                time of day.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Remember to Blink
              </h4>
              <p>
                Blink more. Sounds simple, but when you stare at a screen, your
                blink rate drops by half. That dries out your eyes. Make it a
                habit to blink fully and often. Artificial tears can help if
                your eyes still feel gritty.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Filter Blue Light
              </h4>
              <p>
                Blue light gets a lot of attention. It disrupts sleep and may
                contribute to eye fatigue over time. Blue light glasses filter
                some of it out. So do screen protectors and software like Night
                Shift or f.lux. They help especially in the evening.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Take Regular Breaks
              </h4>
              <p>
                Take breaks. The 20-20-20 rule works because it forces your eye
                muscles to relax. Set a timer if you have to. Stand up. Stretch.
                Look out a window. Just do something. Your eyes will thank you.
              </p>
            </div>
          </div>
        ),
      },
 
      // ── Section 1 ──────────────────────────────────────────────────────────
      {
        id: "sun-protection",
        heading: "What Is the Best Way to Protect My Eyes from the Sun?",
        contentTop: (
          <>
            <p>
              The best way to protect your eyes from the sun is to wear
              sunglasses that block 99 to 100 percent of both UVA and UVB rays.
              When shopping for sunglasses, look for wraparound styles that
              shield from all angles. Pair them with a wide-brimmed hat for
              extra coverage, and avoid direct sun exposure during peak hours
              between 10 a.m. and 4 p.m. UV damage is cumulative. Every hour
              you spend outside without protection adds up. Over time, it
              increases your risk of cataracts, macular degeneration, and even
              eye cancer.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Choose Sunglasses with Full UV Protection
              </h4>
              <p>
                Dark lenses don&apos;t mean UV protection. Check the label. It
                should say 100% UV protection or UV400, meaning it blocks rays
                up to 400 nanometers, covering both UVA and UVB. Polarized
                lenses reduce glare, which is great for driving or being near
                water, but polarization alone doesn&apos;t block UV. You need
                both.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Go for Wraparound or Large Frames
              </h4>
              <p>
                UV rays don&apos;t just come from straight ahead. They bounce
                off water, sand, concrete, and even snow. Wraparound styles
                block light from the sides, and oversized frames cover more area
                around your eyes. The more coverage, the better.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">3. Add a Hat</h4>
              <p>
                A wide-brimmed hat blocks about 50% of UV radiation before it
                even reaches your face. Pair it with sunglasses and you&apos;ve
                got solid defense. Baseball caps don&apos;t do the trick; the
                brim needs to go all the way around.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Limit Exposure During Peak Hours
              </h4>
              <p>
                The sun is strongest between 10 a.m. and 4 p.m. That&apos;s
                when UV levels peak. If you can, stay in the shade during this
                window. If you can&apos;t, double down on protection.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Don&apos;t Skip Protection on Cloudy Days
              </h4>
              <p>
                Clouds don&apos;t block UV rays. Up to 80% can pass through.
                The same goes for winter. Snow reflects up to 80% of UV light,
                sometimes more than sand. You need eye protection year-round.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Protect Kids&apos; Eyes Too
              </h4>
              <p>
                Children&apos;s eyes are more vulnerable to UV damage. Their
                lenses let in more light. Start them early with proper
                sunglasses and hats. The habits stick, and their eyes stay
                healthier for life.
              </p>
            </div>
            <p>
              For more information on how to protect your eyes in the sun, {" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/sun-protection"
              >
                read our blogSun &amp; Seasonal Eye Protection
              </a>
              .
            </p>
          </div>
        ),
      },
 
      // ── Section 2 ──────────────────────────────────────────────────────────
      {
        id: "workplace-safety",
        heading: "How Can I Keep My Eyes Safe at Work?",
        contentTop: (
          <>
            <p>
              Keep your eyes safe at work by wearing appropriate safety eyewear
              for your specific hazards &ndash; safety glasses for impact,
              goggles for chemicals or dust, face shields for severe risks.
              Ensure proper ventilation to reduce irritants, maintain good
              lighting to prevent strain, and follow all workplace safety
              protocols. Get regular eye exams and report any injuries
              immediately, no matter how minor they seem.
            </p>
            <p className="mt-3">
              Workplace eye injuries send over 20,000 people to the emergency
              room every year. Most could have been prevented with the right
              protection.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Identify Your Workplace Hazards
              </h4>
              <p>
                Not all jobs pose the same risks. Construction sites have flying
                debris. Labs have chemical splashes. Offices have screen glare
                and poor lighting. Figure out what threatens your eyes in your
                environment. That tells you what protection you need.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Wear the Right Safety Eyewear
              </h4>
              <p>
                Safety glasses aren&apos;t one-size-fits-all. ANSI-rated safety
                glasses handle impact from flying particles. Goggles seal around
                your eyes to block dust, fumes, and liquids. Face shields add a
                layer when the risk is severe, but they&apos;re not enough on
                their own &ndash; wear safety glasses underneath. If you need
                prescription lenses, get safety eyewear with your prescription
                built in. Regular glasses don&apos;t meet safety standards.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Make Sure Eyewear Fits Properly
              </h4>
              <p>
                Ill-fitting eyewear is almost as bad as no eyewear. Gaps let
                hazards in. Too tight and you won&apos;t wear them. Adjust the
                nose pads and temples. If they fog up constantly, try anti-fog
                coatings or better ventilation. Comfort matters because
                you&apos;re more likely to keep them on.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Know What to Do If an Injury Happens
              </h4>
              <p>
                Speed matters with eye injuries. For chemicals, flush your eyes
                with water for at least 15 minutes and get medical help. For
                debris, don&apos;t rub. Blinking might clear it, but if not,
                see a doctor. Even minor injuries can turn serious if ignored.
              </p>
            </div>
          </div>
        ),
      },
 
      // ── Section 3 ──────────────────────────────────────────────────────────
      {
        id: "sports-outdoors",
        heading:
          "How Do I Protect My Eyes During Sports and Outdoor Activities?",
        contentTop: (
          <>
            <p>
              Protect your eyes during sports and outdoor activities by wearing
              sport-specific protective eyewear made from polycarbonate lenses,
              which are impact-resistant and won&apos;t shatter. Choose goggles
              or glasses designed for your activity. Ensure they fit securely,
              meet safety standards like ASTM F803, and provide UV protection
              for outdoor use.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Use Sport-Specific Protective Eyewear
              </h4>
              <p>
                Regular sunglasses won&apos;t protect you from impact. You need
                eyewear designed for sports. Polycarbonate lenses are the gold
                standard &ndash; they&apos;re 10 times more impact-resistant
                than plastic, and they don&apos;t shatter. Look for frames that
                wrap around or have a strap to keep them secure during movement.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Check for Safety Certifications
              </h4>
              <p>
                Make sure your eyewear meets ASTM F803 standards for sports.
                This certification means it&apos;s been tested for impact
                resistance. For helmets with face shields or visors, check that
                they meet HECC or NOCSAE standards. Don&apos;t trust eyewear
                without proper ratings.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Get the Right Fit
              </h4>
              <p>
                Loose eyewear shifts during play and leaves gaps. Too tight and
                it&apos;s distracting. Many sport goggles come with adjustable
                straps and cushioned frames. Try them on with your other gear.
                Everything should work together without pressure points or gaps.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Add Prescription Lenses If Needed
              </h4>
              <p>
                Don&apos;t play blind because you can&apos;t wear contacts. Many
                protective goggles come with prescription inserts or can be made
                with your prescription directly in the lens. You shouldn&apos;t
                have to choose between seeing clearly and staying safe.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                5. Protect Against UV When Outdoors
              </h4>
              <p>
                Outdoor sports hit you with a double threat: impact risk and UV
                exposure. Choose protective eyewear that also blocks 100% of
                UVA and UVB rays. Water, snow, and sand reflect UV light in your
                eyes, doubling the exposure.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                6. Don&apos;t Forget About Water Activities
              </h4>
              <p>
                Swimming pools have chlorine. Lakes and oceans have bacteria and
                debris. Goggles keep your eyes safe from irritation and
                infection. If you&apos;re surfing, kayaking, or doing anything
                where water sprays, UV-blocking goggles or sunglasses with a
                retention strap prevent squinting and long-term damage.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                7. Replace Damaged Gear Immediately
              </h4>
              <p>
                A scratched or cracked lens compromises protection. Inspect your
                eyewear before each use. If it&apos;s damaged, replace it. Your
                vision isn&apos;t worth the gamble.
              </p>
            </div>
            <p>
              
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/eye-protection-for-athletes/"
              >
                Read our Sports &amp; Performance Eye Protection to learn more.
              </a>
              
            </p>
          </div>
        ),
      },
 
      // ── Section 4 ──────────────────────────────────────────────────────────
      {
        id: "home-safety",
        heading: "What Are the Best Eye Safety Tips for Home?",
        contentTop: (
          <>
            <p>
              The best eye safety tips for home include wearing safety glasses
              during DIY projects, yard work, and cleaning with chemicals. Keep
              hazardous materials out of reach of children, ensure proper
              lighting throughout your home, and install safety features like
              rounded furniture corners and secure rugs to prevent falls. Store
              tools and sharp objects safely, and never mix cleaning products,
              which can create toxic fumes.
            </p>
            <p className="mt-3">
              Most people don&apos;t think about eye safety at home. But
              kitchens, garages, and yards cause thousands of preventable eye
              injuries every year.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Wear Protection During DIY Projects
              </h4>
              <p>
                Hammering, drilling, and sawing send particles flying. Wood
                chips, metal shards, and dust don&apos;t care if you&apos;re a
                professional or just hanging a picture. Safety glasses should be
                as common as your toolbox. Keep a pair in the garage and another
                near your workbench.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Use Caution with Chemicals and Cleaners
              </h4>
              <p>
                Bleach, drain cleaner, and oven spray all splash. Wear safety
                goggles when handling strong chemicals, not just glasses. Goggles
                seal around your eyes. Always point spray nozzles away from your
                face. If something does get in your eye, flush with water
                immediately for at least 15 minutes and call poison control or
                see a doctor.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Keep Hazardous Items Away from Kids
              </h4>
              <p>
                Children are curious. Cleaning supplies, batteries, and sharp
                tools all look interesting. Store them high or locked away. Teach
                older kids how to handle scissors and other sharp objects safely.
                Supervise when they&apos;re learning.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                4. Know When to Seek Help
              </h4>
              <p>
                Not every eye issue needs an ER visit, but some do. Get help
                fast if you are exposed to chemicals, sustained puncture wounds,
                sudden vision loss, or anything stuck in your eye. For irritation
                from dust or mild chemicals, flush with water. If it
                doesn&apos;t improve quickly, see a doctor. Eyes don&apos;t heal
                like skin does. Don&apos;t wait.
              </p>
            </div>
          </div>
        ),
      },
 
      // ── Section 5 ──────────────────────────────────────────────────────────
      {
        id: "eye-injury-first-aid",
        heading: "What Should I Do If I Injure My Eye?",
        contentTop: (
          <>
            <p>
              If you injure your eye, don&apos;t rub it. For chemical exposure,
              flush immediately with clean water for at least 15 minutes and seek
              emergency care. For cuts or puncture wounds, protect the eye with a
              shield without applying pressure and get medical help right away.
              For small particles, blink or rinse gently. If that doesn&apos;t
              work, see a doctor. Any injury causing pain, vision changes, or
              bleeding requires immediate professional attention.
            </p>
            <p className="mt-3">
              Eye injuries escalate fast. What seems minor can turn into
              permanent vision loss if handled wrong.
            </p>
          </>
        ),
        contentBottom: (
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-primary mb-1">
                1. Don&apos;t Rub Your Eye
              </h4>
              <p>
                It&apos;s instinct, but rubbing makes everything worse. It
                pushes particles deeper, scratches your cornea, or spreads
                chemicals. Keep your hands away, no matter how much it hurts or
                itches.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                2. Handle Chemical Exposure Immediately
              </h4>
              <p>
                Time is everything with chemicals. Flush your eye with clean
                water or saline for at least 15 minutes. Use a sink, shower,
                eyewash station &ndash; whatever&apos;s closest. Tilt your head
                so the water runs from the inner corner outward, away from the
                uninjured eye. Remove contact lenses if you can do it quickly.
                Then get to an emergency room. Bring the chemical container or
                write down what it was.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-1">
                3. Protect Cuts and Puncture Wounds
              </h4>
              <p>
                If something penetrates your eye or you have a cut, don&apos;t
                try to remove it. Don&apos;t rinse. Don&apos;t apply pressure.
                Cover the eye loosely with a protective shield. A paper cup
                taped in place works if you don&apos;t have anything else. This
                prevents further damage while you get to the hospital. Keep your
                head still and avoid sudden movements.
              </p>
            </div>
          </div>
        ),
      },
 
      // ── Section 6 ──────────────────────────────────────────────────────────
      {
        id: "eye-exam-frequency",
        heading:
          "How Often Should I Get My Eyes Checked to Keep Them Safe?",
        contentTop: (
          <>
            <p>
              Adults with no vision problems should get comprehensive eye exams
              every two years before age 40, then annually after 40 when
              age-related conditions become more common. If you have diabetes,
              high blood pressure, a family history of eye disease, or wear
              corrective lenses, get checked yearly regardless of age. Children
              need exams at six months, three years, before kindergarten, and
              then every one to two years.
            </p>
            <p className="mt-3">
              Eye exams catch problems you don&apos;t feel yet.
            </p>
          </>
        ),
        contentBottom: null,
      },
 
      // ── Section 7 Conclusion ─────────────────────────────────────────────────────────
      {
        id: "conclusion",
        heading: "Conclusion",
        contentTop: (
          <>
            <p>
              Your vision isn&apos;t something to take for granted. Simple
              habits like wearing the right protection, taking screen breaks, and
              getting regular exams make all the difference. For more tips on
              protecting your eyes from daily digital strain, check out our blog
              on{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/digital-eye-strain-tips/"
              >
                Digital &amp; Everyday Vision Protection
              </a>
              .
            </p>
            <p className="mt-3">
              Ready to prioritize your eye health?{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.360eyecare.ca/book-eye-exam"
              >
                Book an eye exam today
              </a>{" "}
              and catch problems before they start.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        id: 1,
        question:
          "Can I wear regular glasses instead of safety glasses at work?",
        answer:
          "No. Regular glasses don't meet impact resistance standards and leave gaps around your eyes. Only ANSI-rated safety eyewear provides proper protection against workplace hazards like flying debris and chemical splashes.",
      },
      {
        id: 2,
        question: "Do I need sunglasses on cloudy days?",
        answer:
          "Yes. Up to 80% of UV rays penetrate clouds and still damage your eyes. Snow and water reflect even more UV light. Wear sunglasses with 100% UV protection year-round, regardless of weather.",
      },
      {
        id: 3,
        question: "How do I know if my child needs an eye exam?",
        answer:
          "Watch for squinting, sitting too close to screens, frequent headaches, or avoiding reading. Even without symptoms, children need exams at six months, age three, and before kindergarten to catch problems early.",
      },
      {
        id: 4,
        question:
          "What's the difference between safety glasses and goggles?",
        answer:
          "Safety glasses protect against impact from the front. Goggles seal completely around your eyes, blocking chemicals, dust, and liquids from all angles. Choose based on your specific hazard. Goggles offer more coverage.",
      },
    ],
  },
};
