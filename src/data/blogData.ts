export interface BlogImage {
  src: string;
  alt: string;
}

export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  images: BlogImage[];
  videoSrc: string;
  videoPoster: string;
  contentSections: BlogContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jama-masjid",
    title:
      "Street Food of Jama Masjid: Where Delhi Gets Bold, Smoky, and Unforgettable",
    excerpt:
      "If Chandni Chowk is the heart of Delhi's street food, then the area around Jama Masjid is its wild, untamed soul. This is where the city drops all pretenses and serves food the way it's meant to be.",
    coverImage: "/blog/jama-masjid/close-up-of-food.jpg",
    images: [
      { src: "/blog/jama-masjid/shop-front.webp", alt: "Jama Masjid shop front" },
      {
        src: "/blog/jama-masjid/close-up-of-food.jpg",
        alt: "Close up of Jama Masjid street food",
      },
    ],
    videoSrc: "/blog/jama-masjid/video.mp4",
    videoPoster: "/blog/jama-masjid/poster.jpg",
    contentSections: [
      {
        paragraphs: [
          "If Chandni Chowk is the heart of Delhi's street food, then the area around Jama Masjid is its wild, untamed soul. This is where the city drops all pretenses and serves food the way it's meant to be — rich, indulgent, and unapologetically messy.",
          "The moment you step into these lanes, the air wraps around you like a warm hug… except this hug smells like charcoal grills, sizzling meat, and spices that hit you straight in the chest.",
        ],
      },
      {
        heading: "A Meat Lover's Playground",
        paragraphs: [
          "Jama Masjid is not subtle. It doesn't do \"light meals\" or \"just a snack.\" This is a place where food demands your full attention.",
          "At legendary spots like Karim's, recipes have been perfected over generations. Their kebabs are juicy, smoky, and so soft they barely hold together — in the best way possible.",
          "Walk a little further and you'll find icons like Al Jawahar, serving dishes that feel like they came straight out of a royal kitchen.",
        ],
      },
      {
        heading: "What You Absolutely Cannot Miss",
        paragraphs: [
          "Seekh Kebabs & Chicken Tikka — Grilled over open flames, these are the stars of the show. Crisp outside, juicy inside, and loaded with spice — every bite feels like a celebration.",
          "Nihari — Slow-cooked overnight, rich and deeply flavorful. Best eaten in the morning if you want the real experience.",
          "Korma & Butter Chicken — Thick gravies, bold spices, and that unmistakable Mughlai richness that refuses to be ignored.",
          "Khameeri Roti — Soft, slightly tangy bread that perfectly balances the heavy gravies.",
          "Shahi Tukda — When the spice gets overwhelming, this royal dessert steps in — sweet, creamy, and dripping with indulgence.",
        ],
      },
      {
        heading: "The Vibe: Raw, Real, and Addictive",
        paragraphs: [
          "There's something beautifully chaotic about eating here. You're surrounded by narrow lanes packed with people, smoke rising from grills, vendors calling out orders, and plates being served faster than you can decide what to eat next.",
          "It's loud. It's crowded. It's alive. And somehow, that makes the food taste even better.",
        ],
      },
      {
        heading: "When to Go (Timing is Everything)",
        paragraphs: [
          "Evening to late night: The area truly comes alive.",
          "Ramadan season: A completely different level of magic — the streets turn into a massive food festival.",
        ],
      },
      {
        heading: "Final Bite",
        paragraphs: [
          "Street food near Jama Masjid isn't just about eating — it's about surrendering to the experience. It's intense, overwhelming, and deeply satisfying.",
          "This is Delhi at its most honest. No filters, no compromises — just bold flavors, rich history, and food that doesn't ask for permission to impress you.",
          "And once you've had it… every other street food experience starts feeling just a little less exciting.",
        ],
      },
    ],
  },
  {
    slug: "karol-bagh",
    title: "Street Food of Karol Bagh: Delhi's Perfect Balance of Chaos and Comfort",
    excerpt:
      "Not every great food story in Delhi needs the madness of Old Delhi. Sometimes, you want incredible street food without fighting through shoulder-to-shoulder crowds — and that's exactly where Karol Bagh steps in.",
    coverImage: "/blog/karol-bagh/market-wideshot.webp",
    images: [
      {
        src: "/blog/karol-bagh/market-wideshot.webp",
        alt: "Karol Bagh market wideshot",
      },
      {
        src: "/blog/karol-bagh/close-up-of-food.webp",
        alt: "Close up of Karol Bagh street food",
      },
      { src: "/blog/karol-bagh/shop-front.webp", alt: "Karol Bagh shop front" },
    ],
    videoSrc: "/blog/karol-bagh/video.mp4",
    videoPoster: "/blog/karol-bagh/poster.jpg",
    contentSections: [
      {
        paragraphs: [
          "Not every great food story in Delhi needs the madness of Old Delhi. Sometimes, you want incredible street food without fighting through shoulder-to-shoulder crowds — and that's exactly where Karol Bagh steps in.",
          "Karol Bagh is like that friend who knows how to keep things exciting but still lets you breathe. It's vibrant, busy, full of life — and most importantly, packed with food that hits all the right notes.",
        ],
      },
      {
        heading: "The Vibe: Street Food Meets Shopping Spree",
        paragraphs: [
          "Karol Bagh isn't just about eating — it's an experience layered with shopping, bargaining, and the constant hum of Delhi life. Between clothing stores and bustling lanes, you'll find food stalls that have quietly built a loyal following over the years.",
          "It's less chaotic than Chandni Chowk, but don't let that fool you — the flavors here are just as bold.",
        ],
      },
      {
        heading: "What to Eat (And Why You'll Keep Coming Back)",
        paragraphs: [
          "Chole Bhature — No Karol Bagh food walk is complete without this classic. Head to Roshan Di Kulfi, where the chole is perfectly spiced and the bhature come out hot, fluffy, and impossible to resist.",
          "Chaat — From crispy aloo tikki to dahi bhalla dripping in yogurt and chutneys — Karol Bagh knows its chaat game. It's tangy, spicy, sweet, and chaotic in the best way.",
          "Rolls & Quick Bites — Kathi rolls, stuffed wraps, and street sandwiches are everywhere. Perfect when you're too busy shopping but still want something satisfying.",
          "Indo-Chinese Street Food — Think spicy noodles, fried rice, and momos tossed in fiery sauces. It's not authentic — but it's exactly what Delhi loves.",
          "Kulfi & Falooda — End your food trail at Roshan Di Kulfi again (yes, it's that good). Their kulfi falooda is creamy, rich, and the perfect way to cool down after all that spice.",
        ],
      },
      {
        heading: "The Crowd: A Little Bit of Everyone",
        paragraphs: [
          "Karol Bagh attracts families out for shopping, students on a budget, and locals who know exactly where to eat.",
          "It's a mix of comfort and curiosity — people who are here not just to explore, but to enjoy.",
        ],
      },
      {
        heading: "When to Visit",
        paragraphs: [
          "Evenings: The market lights up and the food scene comes alive.",
          "Weekdays: Slightly less crowded, more relaxed experience.",
          "Weekends: Expect energy, noise, and a full Delhi vibe.",
        ],
      },
      {
        heading: "Why Karol Bagh Stands Out",
        paragraphs: [
          "What makes Karol Bagh special is balance. It doesn't overwhelm you like Old Delhi, and it doesn't feel overly polished like South Delhi markets. It sits perfectly in between — giving you authentic street food with just enough breathing space to enjoy it.",
        ],
      },
      {
        heading: "Final Bite",
        paragraphs: [
          "Street food in Karol Bagh is not about extremes — it's about comfort, familiarity, and flavors that feel just right. It's where you go when you want great food without the chaos, but still want a taste of Delhi's street soul.",
          "And the best part? You'll leave not just full — but already planning your next visit.",
        ],
      },
    ],
  },
  {
    slug: "parathe-wali-gali",
    title: "A Walk Through Paranthe Wali Gali: Where Delhi Fries Its Soul in Ghee",
    excerpt:
      "Tucked inside the chaotic charm of Chandni Chowk lies a narrow lane that has been feeding generations with unapologetic indulgence — Paranthe Wali Gali. You don't just visit this place; you experience it.",
    coverImage: "/blog/parathe-wali-gali/close-up-of-food.webp",
    images: [
      {
        src: "/blog/parathe-wali-gali/main-shop-front.webp",
        alt: "Main shop front at Paranthe Wali Gali",
      },
      {
        src: "/blog/parathe-wali-gali/close-up-of-food.webp",
        alt: "Close up of parathas",
      },
      {
        src: "/blog/parathe-wali-gali/location-sign-lamp.webp",
        alt: "Paranthe Wali Gali location sign",
      },
      {
        src: "/blog/parathe-wali-gali/shop-front.webp",
        alt: "Shop front at Paranthe Wali Gali",
      },
    ],
    videoSrc: "/blog/parathe-wali-gali/video.mp4",
    videoPoster: "/blog/parathe-wali-gali/poster.jpg",
    contentSections: [
      {
        paragraphs: [
          "Tucked inside the chaotic charm of Chandni Chowk lies a narrow lane that has been feeding generations with unapologetic indulgence — Paranthe Wali Gali. You don't just visit this place; you experience it.",
          "The moment you step in, the air thickens with the aroma of sizzling desi ghee, the clatter of iron tawas, and the echo of decades-old culinary traditions.",
        ],
      },
      {
        heading: "A Legacy on a Plate",
        paragraphs: [
          "Dating back to the late 19th century, this lane has been home to iconic eateries like Pandit Gaya Prasad Shiv Charan Paranthe Wala, where recipes have been passed down like family heirlooms.",
          "These aren't your everyday parathas — they're deep-fried, golden, slightly crisp on the outside, and indulgently soft within.",
        ],
      },
      {
        heading: "The Paratha Line-Up: From Classic to Curious",
        paragraphs: [
          "Here's where things get interesting. Of course, you'll find the usual suspects: Aloo (potato), Paneer (cottage cheese), and Gobhi (cauliflower).",
          "But Paranthe Wali Gali doesn't stop at ordinary. It dares to experiment: Banana paratha, Rabri paratha, Mixed dry fruit paratha.",
          "Yes, you read that right. Sweet meets savory in ways that shouldn't work — but somehow do.",
        ],
      },
      {
        heading: "The Full Experience",
        paragraphs: [
          "Every plate arrives like a mini feast. Your paratha is served with spicy aloo sabzi, Kaddu (pumpkin) curry, tangy tamarind chutney, and pickles that punch you awake.",
          "There's no concept of \"light eating\" here. This is food that demands commitment.",
        ],
      },
      {
        heading: "The Vibe: Chaos, Culture, and Charm",
        paragraphs: [
          "The lane is narrow, the seating is tight, and the service is fast-paced. But that's exactly what makes it magical. You'll find tourists, locals, and food lovers all squeezed together, united by one thing — the love for good food.",
        ],
      },
      {
        heading: "When to Go (and How to Survive)",
        paragraphs: [
          "Best time: Morning to early afternoon.",
          "Avoid: Peak evening rush unless you enjoy crowds.",
          "Pro tip: Go hungry. Very hungry.",
        ],
      },
      {
        heading: "Final Bite",
        paragraphs: [
          "Paranthe Wali Gali isn't just about food — it's about history, nostalgia, and the kind of flavors that stay with you long after the meal is over. It's messy, it's heavy, and it's absolutely unforgettable.",
          "If Delhi had a taste, it would probably be dripping in ghee… right here.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
