import Image from "next/image";
import {
  EyeEmergencyImage,
  OptometryImage,
  GlaucomaImage,
  UnderstandImage1,
  ScreenHeadachesFeature,
  understandDryEyeImage,
} from "../Images";
 

export const guideData = {
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
};
