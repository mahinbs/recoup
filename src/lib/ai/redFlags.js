/**
 * Local red-flag detection. Runs in the browser BEFORE any search so that urgent
 * descriptions are never ranked against programs. Deliberately generous: a false alarm
 * only shows a cautious message, a miss would be worse.
 */
const RULES = [
  {
    key: 'suicide',
    re: /(suicid|kill(ing|ed)? (my|him|her)self|take my own life|taking my own life|end(ing)? (my|it all)|end(ing)? my life|suicidal|want to die|wanna die|don'?t want to (live|be alive)|better off dead|self[- ]?harm|hurt myself|no reason to live)/i,
  },
  {
    key: 'chest',
    re: /(chest (pain|tight|pressure|heav|discomfort)|tight chest|chest tightness|pain in (my )?chest|tightness in (my )?chest|pressure in (my )?chest|heart attack|crushing pain|pain (spreading|radiating) (to|down) (my )?(left )?(arm|jaw))/i,
  },
  {
    key: 'breathing',
    re: /(trouble breathing|difficulty breathing|hard to breathe|can'?t breathe|cannot breathe|short(ness)? of breath|gasping|struggling to breathe|breathless at rest)/i,
  },
  {
    key: 'stroke',
    re: /(stroke|face (is )?droop|drooping face|facial droop|sudden(ly)? (weak|numb)|sudden weakness|weakness on (one|my (left|right)) side|one side of (my )?(body|face)|slurred speech|slurring|can'?t speak properly|sudden (loss of|blurred|double) vision|sudden severe headache|worst headache)/i,
  },
  {
    key: 'bleeding',
    re: /(severe bleeding|heavy bleeding|(bleeding|blood) (heavily|a lot|won'?t stop|will not stop|badly|not stopping)|bleeding that (won'?t|will not|doesn'?t|does not) stop|can'?t stop (the )?bleeding|coughing (up )?blood|vomiting blood|blood in (my )?vomit|passing (a lot of )?blood)/i,
  },
  {
    key: 'faint',
    re: /(lost consciousness|loss of consciousness|unconscious|passed out|blacked out|fainted|not responding|unresponsive|collapsed|seizure|convulsion|fitting)/i,
  },
  {
    key: 'allergy',
    re: /(anaphyla|severe allergic|allergic reaction|throat (is )?(closing|swelling|swollen)|swelling of (the )?(face|lips|tongue|throat)|tongue (is )?swelling|lips swelling)/i,
  },
];

/** Returns the key of the first red flag found, or null. */
export function detectRedFlag(text) {
  const t = String(text || '');
  for (const r of RULES) if (r.re.test(t)) return r.key;
  return null;
}

export function urgentMessage(key) {
  if (key === 'suicide') {
    return 'I am really sorry you are feeling this way. You deserve support right now. Please call the Tele-MANAS helpline on 14416 (free, 24 hours) or your local emergency number, or reach out to someone you trust and stay with them. If you are in immediate danger, go to the nearest emergency room.';
  }
  return 'What you describe may need urgent medical attention. Please call your local emergency number (112 in India) or go to the nearest emergency room now. Please do not wait for an appointment or use this chat for this. Once you are safe and treated, our team will be glad to help with recovery.';
}
