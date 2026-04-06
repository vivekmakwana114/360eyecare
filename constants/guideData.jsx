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

  // pending to implement
  // page - 4
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

  // page - 5
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
