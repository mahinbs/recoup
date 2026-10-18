import React, { useMemo, useRef, useState } from 'react';
import { ToolLayout, ResultActions } from '../../components/ai/ToolParts';
import { Button } from '../../components/ui/Button';
import { DOSHA_QUESTIONS, DOSHA_INFO, scoreDosha } from '../../lib/ai/dosha';

const BAR = { v: 'bg-sky-500', p: 'bg-orange-500', k: 'bg-emerald-500' };

export default function DoshaQuiz() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const headingRef = useRef(null);
  const total = DOSHA_QUESTIONS.length;

  const result = useMemo(() => (done ? scoreDosha(answers) : null), [done, answers]);
  const answerMap = useMemo(() => Object.fromEntries(answers.map((a, i) => [`q${i + 1}`, a])), [answers]);

  const restart = () => {
    setStarted(false);
    setStep(0);
    setAnswers([]);
    setDone(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const next = () => {
    if (step + 1 >= total) setDone(true);
    else setStep(step + 1);
    setTimeout(() => headingRef.current?.focus(), 0);
  };

  return (
    <ToolLayout
      title="Dosha quiz"
      intro="A short self-assessment based on the Ayurvedic idea of three body types: Vata, Pitta and Kapha. It takes about three minutes."
    >
      {!started && !done && (
        <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
          <p className="mb-2 text-gray-600">
            Answer {total} questions with the option that describes you most of the time, not only today. There are no right or wrong answers.
          </p>
          <p className="mb-5 text-sm text-gray-500">
            This is a traditional-knowledge self-assessment for general wellbeing. It is not medical advice and does not diagnose any condition.
          </p>
          <Button onClick={() => setStarted(true)} className="px-8" data-testid="quiz-start">Start the quiz</Button>
        </div>
      )}

      {started && !done && (
        <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="quiz-question">
          <div className="mb-5">
            <div className="mb-1 flex justify-between text-sm text-gray-500">
              <span>Question {step + 1} of {total}</span>
              <span>{Math.round((step / total) * 100)}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step} aria-label="Quiz progress">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(step / total) * 100}%` }} />
            </div>
          </div>
          <fieldset>
            <legend ref={headingRef} tabIndex={-1} className="mb-4 text-xl font-semibold text-primary-dark outline-none">
              {DOSHA_QUESTIONS[step].q}
            </legend>
            <div className="space-y-3">
              {DOSHA_QUESTIONS[step].o.map(([label, key]) => {
                const selected = answers[step] === key;
                return (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors focus-within:ring-2 focus-within:ring-primary/40 ${selected ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/40'}`}
                  >
                    <input
                      type="radio"
                      name={`q${step}`}
                      className="mt-1 h-4 w-4 accent-[#862CD6]"
                      checked={selected}
                      onChange={() => setAnswers((a) => { const c = [...a]; c[step] = key; return c; })}
                      data-testid={`quiz-option-${key}`}
                    />
                    <span className="text-slate-700">{label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="mt-6 flex justify-between gap-3">
            <Button type="button" variant="ghost" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
            <Button type="button" disabled={!answers[step]} onClick={next} className="px-8" data-testid="quiz-next">
              {step + 1 === total ? 'See my result' : 'Next'}
            </Button>
          </div>
        </div>
      )}

      {done && result && (
        <div data-testid="quiz-result">
          <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Your result</p>
            <h2 ref={headingRef} tabIndex={-1} className="mb-1 mt-1 text-3xl font-bold text-primary-dark outline-none">
              {result.dominant.length === 3 ? 'Balanced mix of all three doshas' : result.dominant.length === 2 ? `Dual type: ${result.label}` : `Mostly ${result.label}`}
            </h2>
            {result.dominant.length === 1 && <p className="mb-4 text-gray-600">{DOSHA_INFO[result.dominant[0]].tagline}</p>}
            <div className="mb-2 mt-5 space-y-3">
              {['v', 'p', 'k'].map((d) => (
                <div key={d}>
                  <div className="mb-1 flex justify-between text-sm font-medium text-slate-700">
                    <span>{DOSHA_INFO[d].name}</span>
                    <span>{result.pct[d]}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${BAR[d]}`} style={{ width: `${result.pct[d]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">Traditional-knowledge self-assessment. Not medical advice.</p>
          </div>

          {result.dominant.map((d) => (
            <div key={d} className="mt-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-primary-dark">Gentle lifestyle notes for {DOSHA_INFO[d].name}</h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-600">
                {DOSHA_INFO[d].notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          ))}

          <ResultActions
            quiz="dosha"
            answers={answerMap}
            result={{ dominant: result.dominant.map((d) => DOSHA_INFO[d].name), label: result.label, pct: result.pct }}
            onRestart={restart}
          />
        </div>
      )}
    </ToolLayout>
  );
}
