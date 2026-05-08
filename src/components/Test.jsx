import { useState, useMemo } from 'react';
import { exercises } from '../data/exercises';

export default function Test({ userName, answers, setAnswers, onFinish }) {
  const [current, setCurrent] = useState(0);
  const exo = exercises[current];

  const progress = useMemo(() => {
    const answered = Object.keys(answers).length;
    return { answered, total: exercises.length, percent: (answered / exercises.length) * 100 };
  }, [answers]);

  const selectAnswer = (optionIndex) => {
    setAnswers({ ...answers, [exo.id]: optionIndex });
  };

  const goNext = () => {
    if (current < exercises.length - 1) setCurrent(current + 1);
  };
  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const goTo = (index) => setCurrent(index);

  const allAnswered = progress.answered === exercises.length;

  return (
    <div className="min-h-screen relative z-10">
      {/* Header sticky */}
      <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft"></div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted">Candidat</div>
                <div className="font-medium">{userName}</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-xs font-mono uppercase tracking-wider text-muted">Progression</div>
                <div className="font-mono text-sm">
                  <span className="text-accent">{progress.answered}</span>
                  <span className="text-muted"> / {progress.total}</span>
                </div>
              </div>
              <button
                onClick={onFinish}
                disabled={!allAnswered}
                className="btn-primary"
              >
                {allAnswered ? 'Terminer le test' : `Encore ${progress.total - progress.answered}`}
              </button>
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-3 h-1 bg-surface2 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progress.percent}%` }}
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">

        {/* Zone exercice */}
        <div className="animate-fade-in" key={exo.id}>
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-wider">
              {exo.level}
            </span>
            <span className="px-3 py-1 rounded-full bg-surface2 border border-line text-muted text-xs font-mono">
              {exo.category}
            </span>
            <span className="text-xs font-mono text-muted">
              {exo.points} {exo.points > 1 ? 'points' : 'point'}
            </span>
          </div>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display text-6xl font-light text-muted">
              {String(exo.id).padStart(2, '0')}
            </span>
            <span className="text-muted">/</span>
            <span className="font-mono text-sm text-muted">{exercises.length}</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-8">
            {exo.question}
          </h2>

          {exo.code && (
            <div className="mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface2 border border-line rounded-t-lg border-b-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-err/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-warn/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-ok/60"></div>
                </div>
                <span className="text-xs font-mono text-muted ml-2">main.py</span>
              </div>
              <pre className="code-block rounded-t-none border-t-0 text-base leading-relaxed">
                <code>{exo.code}</code>
              </pre>
            </div>
          )}

          {/* Options */}
          <div className="space-y-3 mb-10">
            {exo.options.map((opt, idx) => {
              const isSelected = answers[exo.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(idx)}
                  className={`
                    w-full text-left p-5 rounded-xl border transition-all duration-200
                    flex items-start gap-4 group
                    ${isSelected
                      ? 'bg-accent/10 border-accent text-ink'
                      : 'bg-surface border-line hover:border-line/80 hover:bg-surface2'}
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center font-mono text-sm font-semibold flex-shrink-0
                    transition-colors
                    ${isSelected
                      ? 'bg-accent text-bg'
                      : 'bg-surface2 text-muted group-hover:text-ink'}
                  `}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="font-mono text-base flex-1 pt-1 break-all">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between border-t border-line pt-6">
            <button
              onClick={goPrev}
              disabled={current === 0}
              className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Précédent
            </button>

            <span className="font-mono text-sm text-muted">
              {current + 1} / {exercises.length}
            </span>

            <button
              onClick={goNext}
              disabled={current === exercises.length - 1}
              className="btn-ghost disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Suivant →
            </button>
          </div>
        </div>

        {/* Sidebar avec grille de questions */}
        <aside className="lg:sticky lg:top-32 self-start">
          <div className="card p-5">
            <div className="text-xs font-mono uppercase tracking-wider text-muted mb-4">
              Navigation
            </div>
            <div className="grid grid-cols-8 lg:grid-cols-5 gap-2">
              {exercises.map((e, idx) => {
                const isAnswered = answers[e.id] !== undefined;
                const isCurrent = idx === current;
                return (
                  <button
                    key={e.id}
                    onClick={() => goTo(idx)}
                    className={`
                      aspect-square rounded-md text-xs font-mono font-semibold
                      transition-all duration-150
                      ${isCurrent
                        ? 'bg-accent text-bg ring-2 ring-accent ring-offset-2 ring-offset-surface scale-110'
                        : isAnswered
                          ? 'bg-accent/20 text-accent border border-accent/30'
                          : 'bg-surface2 text-muted border border-line hover:bg-line'}
                    `}
                  >
                    {e.id}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-5 border-t border-line space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-accent"></div>
                <span className="text-muted">Question actuelle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-accent/20 border border-accent/30"></div>
                <span className="text-muted">Répondu</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-surface2 border border-line"></div>
                <span className="text-muted">Non répondu</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
