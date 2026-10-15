export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  image: string;
  caption: string;
  handwrittenNote?: string;
}

export interface InsideJokeItem {
  setup: string;
  punchline: string;
}

export interface BirthdayConfig {
  name: string;
  nickname: string;
  senderName: string;

  memories: MemoryItem[];
  photos: string[];
  insideJokes: InsideJokeItem[];

  letterText?: {
    salutation?: string;
    body: string[];
    closing?: string;
  };
  customWishes?: string[];
}

export const birthdayConfig: BirthdayConfig = {
  name: "Eleanor",
  nickname: "Ellie",
  senderName: "Yours Truly",

  memories: [
    {
      id: "mem-1",
      title: "The Very Bad Aim Incident 🎯💀",
      date: "A Very Angry Afternoon",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "You got mad like an Angry Bird, threw a pillow at my face with full passion, and missed by 3 feet.",
      handwrittenNote: "Very bad aim 🎯💀. The wall suffered a terrible blow.",
    },
    {
      id: "mem-2",
      title: "The Certified Cry Baby Moment 😭🍼",
      date: "Movie Night",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "Swore you wouldn't cry, then flooded the sofa because a cartoon dog found a home.",
      handwrittenNote: "Cried for 40 minutes straight like a professional Cry Baby 🥺😭🍼",
    },
  ],

  photos: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  ],

  insideJokes: [
    {
      setup: "When hunger strikes:",
      punchline: "Quick fuse — Angry Bird mode activated in 0.5 seconds 😡🐦💥",
    },
    {
      setup: "Her combat accuracy when fighting me:",
      punchline: "Very bad aim 🎯💀 (threatens murder, hits the curtain instead).",
    },
    {
      setup: "Her emotional spectrum:",
      punchline: "Strong, mature, and fiercely capable... but still a cry baby 🥺😭🍼",
    },
    {
      setup: "Actual identity:",
      punchline: "Dikhne me pari, gusse me poori Chudail / Bhoot 👻👑😂",
    },
  ],

  letterText: {
    salutation: "My Dearest Eleanor (a.k.a. Sweet Chudail 👻❤️),",
    body: [
      "I know you have a quick fuse like an Angry Bird, I know you have the world's worst aim whenever you try to throw things at me, and I know that despite being strong and mature, you are still a cry baby who sheds tears over literally anything.",
      "You might look like an angel, but we both know that when you're hungry or irritated, you turn into our personal little Chudail / Bhoot.",
      "The truth is: I adore your fiery temper just as much as I adore your ridiculously soft heart and emotional tears.",
      "Never change, my favorite menace. Never stop crying over silly things, and keep practicing your aim.",
    ],
    closing: "Happy Birthday to my favorite Bhootni. ❤️",
  },

  customWishes: [
    "Fewer reasons to cry like a cry baby 😭🍼 (unless you're laughing so hard you choke).",
    "Fewer reasons to activate your Angry Bird quick fuse 😡🐦.",
    "Better aim next time you throw something at me 🎯💀.",
    "And endless moments where my favorite Chudail feels completely loved and treated like royalty 👑❤️.",
  ],
};
