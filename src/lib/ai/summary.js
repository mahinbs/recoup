/** Human-readable one-liner for a stored quiz result (used by the admin screen). */
export const QUIZ_NAMES = { dosha: 'Dosha quiz', metabolic_age: 'Metabolic age estimator', fitness_readiness: 'Fitness readiness check' };

export function summarizeResult(quiz, r) {
  if (!r || typeof r !== 'object') return '';
  try {
    if (quiz === 'dosha') {
      const p = r.pct || {};
      return `${r.label || 'Dosha'} (Vata ${p.v ?? 0}%, Pitta ${p.p ?? 0}%, Kapha ${p.k ?? 0}%)`;
    }
    if (quiz === 'metabolic_age') {
      return `Estimated metabolic age ${r.metabolicAge} (actual ${r.age}); BMI ${r.bmi}, BMR ${r.bmr} kcal, waist-to-height ${r.whtr}`;
    }
    if (quiz === 'fitness_readiness') {
      return `${r.level} (${r.score}/${r.max})${r.seeDoctor ? '; screening flagged: advise doctor first' : ''}`;
    }
  } catch {
    /* fall through */
  }
  return JSON.stringify(r).slice(0, 200);
}
