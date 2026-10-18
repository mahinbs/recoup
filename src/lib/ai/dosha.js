/** Dosha quiz data and scoring. Each option adds one point to one dosha (v, p or k). */
export const DOSHA_QUESTIONS = [
  { q: 'How would you describe your body frame?', o: [['Slim, light, hard to put on weight', 'v'], ['Medium, muscular, well proportioned', 'p'], ['Broad, solid, gains weight easily', 'k']] },
  { q: 'How is your appetite and digestion?', o: [['Irregular. Sometimes hungry, sometimes not, with gas or bloating', 'v'], ['Strong. I get irritable or acidic if I skip a meal', 'p'], ['Steady but slow. I feel heavy after meals', 'k']] },
  { q: 'How do you usually sleep?', o: [['Light and easily disturbed, mind races at night', 'v'], ['Moderate. Sound, but I wake up warm', 'p'], ['Deep and long. Hard to get out of bed', 'k']] },
  { q: 'Which describes your temperament under pressure?', o: [['Anxious or worried, thoughts jump around', 'v'], ['Impatient or sharp, I want things done my way', 'p'], ['Calm and steady, slow to react', 'k']] },
  { q: 'Which weather suits you best?', o: [['Warm and humid. Cold and dry weather bothers me', 'v'], ['Cool and breezy. I dislike heat', 'p'], ['Warm and dry. Cold, damp weather bothers me', 'k']] },
  { q: 'How is your skin most of the time?', o: [['Dry, rough or thin', 'v'], ['Warm, sensitive, prone to redness or pimples', 'p'], ['Soft, smooth, oily', 'k']] },
  { q: 'How is your energy through the day?', o: [['Comes in bursts, then I crash', 'v'], ['Strong and focused, especially when I have a goal', 'p'], ['Slow to start, but steady with good stamina', 'k']] },
  { q: 'How do you walk and talk?', o: [['Quick, light steps. I talk fast and a lot', 'v'], ['Purposeful steps. I speak clearly and directly', 'p'], ['Slow, graceful steps. I speak slowly and softly', 'k']] },
  { q: 'How do you handle change and routine?', o: [['I love change and get bored with routine', 'v'], ['I like planning and being in charge of change', 'p'], ['I prefer routine and dislike sudden change', 'k']] },
  { q: 'What is your body temperature like?', o: [['Cold hands and feet, I feel chilly easily', 'v'], ['I run warm and sweat easily', 'p'], ['Neither very hot nor cold, but I feel clammy in the cold', 'k']] },
  { q: 'How is your memory and learning style?', o: [['Learn quickly but forget quickly', 'v'], ['Sharp, good at analysing and remembering', 'p'], ['Slow to learn but never forget', 'k']] },
  { q: 'When you are stressed or out of balance, what happens first?', o: [['Worry, poor sleep, dryness or constipation', 'v'], ['Anger, acidity, skin flare-ups', 'p'], ['Low mood, sluggishness, weight gain, congestion', 'k']] },
];

export const DOSHA_INFO = {
  v: {
    name: 'Vata',
    tagline: 'Air and space: quick, creative, changeable',
    notes: [
      'Keep regular meal and sleep times. Vata settles with routine.',
      'Choose warm, cooked, slightly oily meals such as khichdi, soups and stews. Go easy on cold, raw and dry foods.',
      'Do a gentle oil massage (abhyanga) with warm sesame oil before a bath when you can.',
      'Prefer calm movement such as walking, yoga and stretching over very intense workouts.',
      'Wind down early, switch off screens an hour before bed, and keep your body warm in cold weather.',
    ],
  },
  p: {
    name: 'Pitta',
    tagline: 'Fire and water: sharp, driven, intense',
    notes: [
      'Do not skip meals. Eat on time and avoid very spicy, sour, fried and fermented food.',
      'Favour cooling foods such as cucumber, coconut water, buttermilk, greens and sweet fruits.',
      'Exercise in the cooler parts of the day and avoid pushing too hard in the heat.',
      'Make time for play and rest. Pitta people often overwork.',
      'Try calming breathing such as slow nostril breathing when you feel irritable.',
    ],
  },
  k: {
    name: 'Kapha',
    tagline: 'Earth and water: steady, calm, grounded',
    notes: [
      'Keep the body moving every day. Brisk walks, cycling or a brisk yoga flow suit Kapha.',
      'Favour light, warm and lightly spiced meals. Reduce heavy, sugary, oily and cold foods and dairy desserts.',
      'Do not oversleep. Waking early gives you more energy through the day.',
      'Keep dinner light and early, and avoid snacking late at night.',
      'Try something new regularly. Variety keeps Kapha from feeling stuck.',
    ],
  },
};

/** answers: array of 'v' | 'p' | 'k' (one per question, or undefined). */
export function scoreDosha(answers) {
  const c = { v: 0, p: 0, k: 0 };
  answers.forEach((a) => {
    if (c[a] !== undefined) c[a] += 1;
  });
  const total = c.v + c.p + c.k || 1;
  const pct = { v: Math.round((c.v / total) * 100), p: Math.round((c.p / total) * 100), k: Math.round((c.k / total) * 100) };
  const order = ['v', 'p', 'k'].sort((a, b) => c[b] - c[a]);
  const [first, second, third] = order;
  let dominant = [first];
  if (c[first] - c[third] <= 1) dominant = [first, second, third];
  else if (c[first] - c[second] <= 1) dominant = [first, second];
  return { counts: c, pct, dominant, label: dominant.map((d) => DOSHA_INFO[d].name).join(' + ') };
}
