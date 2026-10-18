import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { ToolLayout, ResultActions, fieldClass } from '../../components/ai/ToolParts';
import { Button } from '../../components/ui/Button';
import { PARQ, PACE, LEVELS, scoreFitness } from '../../lib/ai/fitness';

export default function FitnessReadiness() {
  const [step, setStep] = useState(0); // 0 intro, 1 parq, 2 tests, 3 result
  const [parq, setParq] = useState(Array(PARQ.length).fill(null));
  const [t, setT] = useState({ age: '', chair: '', push: '', balance: '', pace: '' });
  const [err, setErr] = useState('');
  const [result, setResult] = useState(null);

  const set = (k) => (e) => setT((s) => ({ ...s, [k]: e.target.value }));
  const anyYes = parq.some((a) => a === true);

  const toTests = () => {
    if (parq.some((a) => a === null)) return setErr('Please answer every question.');
    setErr('');
    setStep(2);
  };
  const finish = (e) => {
    e.preventDefault();
    const age = Number(t.age);
    const nums = ['chair', 'push', 'balance'].map((k) => t[k]);
    if (!(age >= 18 && age <= 90)) return setErr('Age should be between 18 and 90.');
    if (nums.some((n) => n === '' || Number(n) < 0 || Number(n) > 200)) return setErr('Please enter a number for each test (use 0 if you could not do it).');
    if (t.pace === '') return setErr('Please choose your walking pace.');
    setErr('');
    setResult(scoreFitness({ age, chair: Number(t.chair), push: Number(t.push), balance: Number(t.balance), pace: Number(t.pace), parq: parq.map(Boolean) }));
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const restart = () => {
    setStep(0);
    setParq(Array(PARQ.length).fill(null));
    setT({ age: '', chair: '', push: '', balance: '', pace: '' });
    setResult(null);
    setErr('');
  };

  const answers = useMemo(() => ({ parq: parq.map(Boolean), age: Number(t.age), chair: Number(t.chair), push: Number(t.push), balance: Number(t.balance), pace: Number(t.pace) }), [parq, t]);

  return (
    <ToolLayout
      title="Fitness readiness check"
      intro="A few safety questions and four simple self-tests to see where you are today and how to begin."
    >
      {step === 0 && (
        <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
          <p className="mb-4 text-gray-600">
            Step 1 is a short health screening. Step 2 is four easy tests you can do at home with a chair and a timer. Stop any test if you feel pain, dizziness or breathlessness.
          </p>
          <Button onClick={() => setStep(1)} className="px-8" data-testid="quiz-start">Start the check</Button>
        </div>
      )}

      {step === 1 && (
        <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="fit-parq">
          <h2 className="mb-1 text-xl font-bold text-primary-dark">Step 1: Health screening</h2>
          <p className="mb-5 text-sm text-gray-500">Answer honestly. This is a common screening used before starting exercise.</p>
          <div className="space-y-5">
            {PARQ.map((q, i) => (
              <fieldset key={q}>
                <legend className="mb-2 text-slate-800">{i + 1}. {q}</legend>
                <div className="flex gap-3">
                  {[['Yes', true], ['No', false]].map(([label, val]) => (
                    <label key={label} className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium focus-within:ring-2 focus-within:ring-primary/40 ${parq[i] === val ? 'border-primary bg-primary text-white' : 'border-slate-200 text-slate-600 hover:border-primary/40'}`}>
                      <input type="radio" className="sr-only" name={`parq${i}`} checked={parq[i] === val} onChange={() => setParq((a) => { const c = [...a]; c[i] = val; return c; })} data-testid={`parq-${i}-${label.toLowerCase()}`} />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          {anyYes && (
            <p className="mt-5 flex items-start gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800" role="status">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>You answered yes to at least one question. Please speak to your doctor before starting or increasing exercise. You can still continue to see general information.</span>
            </p>
          )}
          {err && <p className="mt-4 text-sm text-red-600" role="alert">{err}</p>}
          <div className="mt-6 flex justify-between">
            <Button variant="ghost" onClick={() => setStep(0)}>Back</Button>
            <Button onClick={toTests} className="px-8" data-testid="quiz-next">Continue</Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={finish} noValidate className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="fit-tests">
          <h2 className="mb-1 text-xl font-bold text-primary-dark">Step 2: Quick self-tests</h2>
          <p className="mb-5 text-sm text-gray-500">Do each test safely, near a wall or sturdy support. Enter 0 if you could not do it.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="f-age" className="mb-1 block text-sm font-semibold text-slate-700">Your age</label>
              <input id="f-age" type="number" inputMode="numeric" className={fieldClass} value={t.age} onChange={set('age')} />
            </div>
            <div>
              <label htmlFor="f-chair" className="mb-1 block text-sm font-semibold text-slate-700">30-second chair stand (count)</label>
              <input id="f-chair" type="number" inputMode="numeric" min="0" className={fieldClass} value={t.chair} onChange={set('chair')} aria-describedby="f-chair-h" />
              <p id="f-chair-h" className="mt-1 text-xs text-gray-400">Sit on a sturdy chair, arms crossed. Stand up fully and sit down as many times as you can in 30 seconds.</p>
            </div>
            <div>
              <label htmlFor="f-push" className="mb-1 block text-sm font-semibold text-slate-700">Push-ups (count)</label>
              <input id="f-push" type="number" inputMode="numeric" min="0" className={fieldClass} value={t.push} onChange={set('push')} aria-describedby="f-push-h" />
              <p id="f-push-h" className="mt-1 text-xs text-gray-400">Full push-ups with good form, without stopping. Count wall or knee push-ups as half.</p>
            </div>
            <div>
              <label htmlFor="f-bal" className="mb-1 block text-sm font-semibold text-slate-700">Single-leg balance (seconds)</label>
              <input id="f-bal" type="number" inputMode="numeric" min="0" className={fieldClass} value={t.balance} onChange={set('balance')} aria-describedby="f-bal-h" />
              <p id="f-bal-h" className="mt-1 text-xs text-gray-400">Stand on one leg with eyes open, hands on hips. Stop at 60 seconds. Use the better leg.</p>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="f-pace" className="mb-1 block text-sm font-semibold text-slate-700">Comfortable walking pace</label>
              <select id="f-pace" className={fieldClass} value={t.pace} onChange={set('pace')}>
                <option value="">Choose</option>
                {PACE.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
          </div>
          {err && <p className="mt-4 text-sm text-red-600" role="alert">{err}</p>}
          <div className="mt-6 flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
            <Button type="submit" className="px-8" data-testid="fit-submit">See my result</Button>
          </div>
        </form>
      )}

      {step === 3 && result && (
        <div data-testid="quiz-result">
          {result.seeDoctor && (
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900" role="alert" data-testid="fit-see-doctor">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>Because of your screening answers, please speak to a doctor before you start or increase exercise. The level below is general information only.</p>
            </div>
          )}
          <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Your readiness level</p>
            <h2 className="mb-1 mt-1 text-4xl font-bold text-primary-dark">{result.level}</h2>
            <p className="mb-4 text-gray-500">Score {result.score} out of {result.max} (age group {result.band})</p>
            <p className="text-gray-600">{LEVELS[result.level]}</p>
            <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-gray-600">
              <li>Chair stand: {answers.chair} ({result.parts.chair} of 3 points)</li>
              <li>Push-ups: {answers.push} ({result.parts.push} of 3 points)</li>
              <li>Single-leg balance: {answers.balance} seconds ({result.parts.balance} of 3 points)</li>
              <li>Walking pace: {result.parts.pace} of 3 points</li>
            </ul>
          </div>
          <div className="mt-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-primary-dark">Next steps</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Start where you are, and increase time or effort by about 10 percent a week.</li>
              <li>Warm up for five minutes and cool down with gentle stretching.</li>
              <li>Stop and seek advice if you feel chest pain, dizziness or unusual breathlessness.</li>
              <li>
                A one-to-one <Link to="/book" className="font-semibold text-primary underline">assessment with our team</Link> can turn this into a safe plan that fits your health history.
              </li>
            </ul>
          </div>
          <ResultActions
            quiz="fitness_readiness"
            answers={answers}
            result={{ level: result.level, score: result.score, max: result.max, band: result.band, seeDoctor: result.seeDoctor }}
            onRestart={restart}
          />
        </div>
      )}
    </ToolLayout>
  );
}
