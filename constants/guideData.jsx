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

  // page - 7
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

  // page - 8
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
