import React, { useState } from 'react';
import { ToolLayout, ResultActions, fieldClass } from '../../components/ai/ToolParts';
import { Button } from '../../components/ui/Button';
import { ACTIVITY_LEVELS, SMOKING, SEX, computeMetabolic, metabolicTips, validateMetabolic } from '../../lib/ai/metabolic';

const EMPTY = { age: '', sex: '', height: '', weight: '', waist: '', activity: '', sleep: '', smoking: '', rhr: '' };

function Num({ id, label, unit, value, onChange, error, optional, step }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-slate-700">
        {label} {unit && <span className="font-normal text-gray-400">({unit})</span>}
        {optional && <span className="font-normal text-gray-400"> optional</span>}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        step={step || 'any'}
        className={`${fieldClass} ${error ? 'border-red-400' : ''}`}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function Pick({ id, label, value, onChange, options, error }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-slate-700">{label}</label>
      <select id={id} className={`${fieldClass} ${error ? 'border-red-400' : ''}`} value={value} onChange={onChange} aria-invalid={Boolean(error)}>
        <option value="">Choose</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default function MetabolicAge() {
  const [v, setV] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [out, setOut] = useState(null);
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const er = validateMetabolic(v);
    setErrs(er);
    if (Object.keys(er).length) return;
    setOut({ r: computeMetabolic(v), tips: null, inputs: { ...v } });
    setTimeout(() => document.getElementById('meta-result')?.focus(), 50);
  };
  const restart = () => {
    setOut(null);
    setV(EMPTY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const r = out?.r;
  const diffText = r
    ? r.difference === 0
      ? 'about the same as your actual age'
      : r.difference < 0
        ? `about ${Math.abs(r.difference)} year${Math.abs(r.difference) > 1 ? 's' : ''} younger than your actual age`
        : `about ${r.difference} year${r.difference > 1 ? 's' : ''} above your actual age`
    : '';

  return (
    <ToolLayout
      title="Metabolic age estimator"
      intro="A simple estimate of how your body measurements and daily habits compare with your calendar age. It takes about two minutes."
    >
      {!out && (
        <form onSubmit={submit} noValidate className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm" data-testid="meta-form">
          <div className="grid gap-4 md:grid-cols-2">
            <Num id="m-age" label="Age" unit="years" value={v.age} onChange={set('age')} error={errs.age} step="1" />
            <Pick id="m-sex" label="Sex" value={v.sex} onChange={set('sex')} options={SEX} error={errs.sex} />
            <Num id="m-height" label="Height" unit="cm" value={v.height} onChange={set('height')} error={errs.height} />
            <Num id="m-weight" label="Weight" unit="kg" value={v.weight} onChange={set('weight')} error={errs.weight} />
            <Num id="m-waist" label="Waist, at the navel" unit="cm" value={v.waist} onChange={set('waist')} error={errs.waist} />
            <Pick id="m-activity" label="Weekly activity" value={v.activity} onChange={set('activity')} options={ACTIVITY_LEVELS} error={errs.activity} />
            <Num id="m-sleep" label="Usual sleep" unit="hours a night" value={v.sleep} onChange={set('sleep')} error={errs.sleep} />
            <Pick id="m-smoking" label="Smoking" value={v.smoking} onChange={set('smoking')} options={SMOKING} error={errs.smoking} />
            <Num id="m-rhr" label="Resting heart rate" unit="beats per minute" optional value={v.rhr} onChange={set('rhr')} error={errs.rhr} step="1" />
          </div>
          {Object.keys(errs).length > 0 && <p className="mt-4 text-sm text-red-600" role="alert">Please check the highlighted fields.</p>}
          <Button type="submit" className="mt-6 px-8" data-testid="meta-submit">Estimate my metabolic age</Button>
        </form>
      )}

      {out && (
        <div data-testid="quiz-result">
          <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Your estimate</p>
            <h2 id="meta-result" tabIndex={-1} className="mt-1 text-4xl font-bold text-primary-dark outline-none">
              About {r.metabolicAge} years
            </h2>
            <p className="mb-5 mt-1 text-gray-600">An estimate that is {diffText}. Your actual age is {r.age}.</p>
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs text-gray-500">BMI</dt><dd className="text-xl font-bold text-primary-dark">{r.bmi}</dd></div>
              <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs text-gray-500">Resting energy use (BMR)</dt><dd className="text-xl font-bold text-primary-dark">{r.bmr} kcal/day</dd></div>
              <div className="rounded-xl bg-slate-50 p-4"><dt className="text-xs text-gray-500">Waist-to-height ratio</dt><dd className="text-xl font-bold text-primary-dark">{r.whtr}</dd></div>
            </dl>
          </div>

          <div className="mt-5 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-primary-dark">Practical next steps</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              {metabolicTips(out.inputs, r).map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>

          <ResultActions quiz="metabolic_age" answers={out.inputs} result={r} onRestart={restart} />
        </div>
      )}

      <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-sm text-gray-600" data-testid="meta-howto">
        <h2 className="mb-2 text-base font-bold text-primary-dark">How this is estimated</h2>
        <p className="mb-2">
          We start from your actual age and nudge it up or down based on a few things linked with metabolic health: BMI, waist-to-height ratio,
          how active you are, how long you sleep, whether you smoke, and your resting heart rate if you share it. The BMR is the standard
          Mifflin-St Jeor equation.
        </p>
        <p>
          The result is always kept within a modest range around your real age. It is a rough, educational estimate and not a measurement or a
          medical test. Many things it cannot see, such as muscle mass and blood tests, matter more. Please speak to a doctor for any health concern.
        </p>
      </div>
    </ToolLayout>
  );
}
