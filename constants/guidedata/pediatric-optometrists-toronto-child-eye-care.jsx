import Image from "next/image";



export const guideData = {
  title: "Pediatric Eye Care 101",
  subtitle:
    "How Do I Take Care of My Child's Eyes? A Complete Guide for Parents",
  featureImage: "/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric-optometrist-toronto copy.png",
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
        src: "/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-childrenÔÇÖs-vision-development-toronto.png",
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
                  src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric eye-clinic-toronto.png" width={500} height={300}
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
                  src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric eye-clinic-toronto.png" width={500} height={300}
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
        src: "/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-regular-eye-exams-for-children-in-toronto.png",
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric-optometrist-toronto copy.png" width={500} height={300}
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-childrenÔÇÖs-vision-development-toronto.png" width={500} height={300}
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric eye-clinic-toronto.png" width={500} height={300}
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric-optometrist-toronto.png" width={500} height={300}
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-lifestyle-habits-for-healthy-vision.png" width={500} height={300}
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
                src="/guide/Blog 7 - How Do I Take Care of My ChildÔÇÖs Eyes/360eyecare-pediatric eye-clinic-toronto.png" width={500} height={300}
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
};
