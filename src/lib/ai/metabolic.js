/**
 * Metabolic age estimator (transparent heuristic, NOT a clinical measurement).
 *
 *   BMI   = weight / (height in m)^2
 *   BMR   = Mifflin-St Jeor: 10*kg + 6.25*cm - 5*age + 5 (male) | -161 (female) | -78 (average, "other")
 *   WHtR  = waist / height
 *
 *   estimated metabolic age = age + adjustments, where
 *     BMI        : 0 up to 23, then +0.8 year per BMI point above 23 (max +8); under 18.5: +1
 *     WHtR       : (WHtR - 0.5) * 40 years, limited to -2 .. +6
 *     activity   : none +3, 1-2 days +1, 3-4 days -1, 5+ days -3
 *     sleep      : 7-9 h 0, 6-7 h +1, under 6 h +2, over 9 h +0.5 (over 10 h +1)
 *     smoking    : never 0, former +1, current +4
 *     resting HR : optional. under 60 -2, 60-69 -1, 70-79 0, 80-89 +1.5, 90+ +3
 *   The result is clamped to between (age - 10) and (age + 15), never below 18, and rounded.
 */
export const ACTIVITY_LEVELS = [
  { value: 'none', label: 'Little or no exercise', adj: 3 },
  { value: 'light', label: 'Light activity, 1 to 2 days a week', adj: 1 },
  { value: 'moderate', label: 'Moderate activity, 3 to 4 days a week', adj: -1 },
  { value: 'high', label: 'Regular activity, 5 or more days a week', adj: -3 },
];
export const SMOKING = [
  { value: 'never', label: 'Never smoked', adj: 0 },
  { value: 'former', label: 'Used to smoke', adj: 1 },
  { value: 'current', label: 'Smoke currently', adj: 4 },
];
export const SEX = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Prefer not to say' },
];

export const LIMITS = {
  age: [18, 90],
  height: [120, 220],
  weight: [30, 250],
  waist: [40, 180],
  sleep: [3, 12],
  rhr: [35, 130],
};

/** Returns { field: message } for invalid inputs. */
export function validateMetabolic(v) {
  const errs = {};
  const chk = (key, label, unit, optional = false) => {
    const raw = v[key];
    if ((raw === '' || raw === undefined || raw === null) && optional) return;
    const n = Number(raw);
    const [lo, hi] = LIMITS[key];
    if (raw === '' || raw === undefined || Number.isNaN(n) || n < lo || n > hi) errs[key] = `${label} should be between ${lo} and ${hi} ${unit}.`;
  };
  chk('age', 'Age', 'years');
  chk('height', 'Height', 'cm');
  chk('weight', 'Weight', 'kg');
  chk('waist', 'Waist', 'cm');
  chk('sleep', 'Sleep', 'hours');
  chk('rhr', 'Resting heart rate', 'beats per minute', true);
  if (!v.sex) errs.sex = 'Please choose an option.';
  if (!v.activity) errs.activity = 'Please choose an option.';
  if (!v.smoking) errs.smoking = 'Please choose an option.';
  return errs;
}

export function computeMetabolic(v) {
  const age = Number(v.age);
  const h = Number(v.height);
  const w = Number(v.weight);
  const waist = Number(v.waist);
  const sleep = Number(v.sleep);
  const bmi = w / Math.pow(h / 100, 2);
  const sexConst = v.sex === 'male' ? 5 : v.sex === 'female' ? -161 : -78;
  const bmr = 10 * w + 6.25 * h - 5 * age + sexConst;
  const whtr = waist / h;

  let adj = 0;
  if (bmi > 23) adj += Math.min(8, (bmi - 23) * 0.8);
  else if (bmi < 18.5) adj += 1;
  adj += Math.max(-2, Math.min(6, (whtr - 0.5) * 40));
  adj += ACTIVITY_LEVELS.find((a) => a.value === v.activity)?.adj ?? 0;
  adj += sleep >= 7 && sleep <= 9 ? 0 : sleep >= 6 && sleep < 7 ? 1 : sleep < 6 ? 2 : sleep <= 10 ? 0.5 : 1;
  adj += SMOKING.find((a) => a.value === v.smoking)?.adj ?? 0;
  if (v.rhr !== '' && v.rhr !== undefined && v.rhr !== null) {
    const r = Number(v.rhr);
    adj += r < 60 ? -2 : r < 70 ? -1 : r < 80 ? 0 : r < 90 ? 1.5 : 3;
  }
  const raw = age + adj;
  const metabolicAge = Math.round(Math.max(18, Math.min(age + 15, Math.max(age - 10, raw))));
  return {
    age,
    bmi: Math.round(bmi * 10) / 10,
    bmr: Math.round(bmr),
    whtr: Math.round(whtr * 100) / 100,
    metabolicAge,
    difference: metabolicAge - age,
  };
}

export function metabolicTips(v, r) {
  const tips = [];
  if (v.activity === 'none' || v.activity === 'light') tips.push('Build up gradually to about 150 minutes of brisk walking or similar activity each week, and add two short strength sessions.');
  else tips.push('Keep your regular activity going and add two strength sessions a week to protect muscle, which keeps metabolism healthy.');
  if (Number(v.sleep) < 7 || Number(v.sleep) > 9) tips.push('Aim for a steady 7 to 8 hours of sleep with fixed sleep and wake times.');
  else tips.push('Your sleep looks healthy. Keep regular timings and a dark, quiet room.');
  if (r.whtr >= 0.5 || r.bmi >= 23) tips.push('Focus on whole foods, enough protein and fibre, and fewer sugary drinks and refined snacks. Small steady changes work better than crash diets.');
  else tips.push('Keep eating a varied diet with enough protein and fibre, and drink water through the day.');
  if (v.smoking === 'current') tips.push('Cutting down and then quitting tobacco is one of the biggest things you can do for your health. Ask our team or your doctor for support.');
  else tips.push('Check your blood pressure, blood sugar and cholesterol once a year, and talk to a doctor about anything that worries you.');
  return tips;
}
