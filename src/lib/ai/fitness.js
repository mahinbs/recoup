/** Fitness readiness data and scoring (PAR-Q style screening + simple self-tests). */
export const PARQ = [
  'Has a doctor ever said that you have a heart condition and should only do physical activity recommended by a doctor?',
  'Do you feel pain in your chest when you do physical activity?',
  'In the past month, have you had chest pain when you were not doing physical activity?',
  'Do you lose your balance because of dizziness, or do you ever lose consciousness?',
  'Do you have a bone or joint problem that could get worse with more physical activity?',
  'Are you currently taking medicine for blood pressure or a heart condition?',
  'Do you know of any other reason why you should not do physical activity (for example pregnancy, recent surgery or a serious illness)?',
];

export const BANDS = [
  { max: 29, label: '18 to 29', chair: [12, 17, 22], push: [5, 15, 30], bal: [5, 15, 30] },
  { max: 39, label: '30 to 39', chair: [11, 16, 21], push: [4, 12, 25], bal: [5, 15, 30] },
  { max: 49, label: '40 to 49', chair: [10, 15, 20], push: [3, 10, 20], bal: [5, 15, 30] },
  { max: 59, label: '50 to 59', chair: [9, 14, 18], push: [2, 8, 15], bal: [4, 12, 25] },
  { max: 69, label: '60 to 69', chair: [8, 12, 16], push: [1, 5, 10], bal: [3, 8, 20] },
  { max: 120, label: '70 and above', chair: [6, 10, 14], push: [1, 3, 6], bal: [2, 5, 12] },
];

export const PACE = [
  { value: 0, label: 'Slow. I get tired or short of breath quickly' },
  { value: 1, label: 'Easy. I can walk 20 to 30 minutes comfortably' },
  { value: 2, label: 'Brisk. I can walk fast for 30 minutes or more' },
  { value: 3, label: 'Very brisk or jogging for 30 minutes or more' },
];

export const LEVELS = {
  Starter: 'Starting out is a great place to be. Begin with short, easy walks and gentle mobility work, and build slowly with guidance.',
  Building: 'You have a base to build on. Add regular walking and two simple strength sessions a week, and increase effort bit by bit.',
  Ready: 'You are ready for a regular, balanced routine. Combine brisk cardio, strength training and mobility work through the week.',
  Advanced: 'Your fitness is strong. You can handle structured training. A tailored plan can help you progress safely and avoid overuse injuries.',
};

export function bandFor(age) {
  return BANDS.find((b) => age <= b.max) || BANDS[BANDS.length - 1];
}

const pts = (value, thresholds) => thresholds.filter((t) => value >= t).length;

export function scoreFitness({ age, chair, push, balance, pace, parq }) {
  const band = bandFor(age);
  const parts = {
    chair: pts(chair, band.chair),
    push: pts(push, band.push),
    balance: pts(balance, band.bal),
    pace: Number(pace),
  };
  const score = parts.chair + parts.push + parts.balance + parts.pace;
  const level = score <= 3 ? 'Starter' : score <= 6 ? 'Building' : score <= 9 ? 'Ready' : 'Advanced';
  const flags = parq.filter(Boolean).length;
  return { score, max: 12, level, parts, band: band.label, parqFlags: flags, seeDoctor: flags > 0 };
}
