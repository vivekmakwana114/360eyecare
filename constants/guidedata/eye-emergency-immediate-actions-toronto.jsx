import Image from "next/image";



export const guideData = {
  title: "Eye Emergency 101",
  subtitle: "What Should I Do If I Have an Eye Emergency in Toronto?",
  featureImage: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-prevent-eye-emergencies.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-eye-emergency-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-optometrist-vs-emergency-room-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-emergency-eye-care-in-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-eye-floaters-toronto.png",
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
      //   src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-eye-injuries-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-common-eye-conditions-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-pediatric-optometrist-toronto.png",
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
        src: "/guide/Blog 3 - Eye Emergency in Toronto/360eyecare-common-eye-emergencies-in-toronto.png",
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
};
