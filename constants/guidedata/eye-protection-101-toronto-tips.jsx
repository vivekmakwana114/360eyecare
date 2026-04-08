import Image from "next/image";
import {
  BeachImage,
} from "../Images";


export const guideData = {
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
};