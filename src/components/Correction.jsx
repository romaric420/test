import { useMemo, useState } from 'react';
import { exercises, TOTAL_POINTS } from '../data/exercises';

export default function Correction({ userName, answers, onRestart }) {
  const [filter, setFilter] = useState('all');

  const stats = useMemo(() => {
    let earned = 0;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    const byLevel = {};

    exercises.forEach((exo) => {
      const userAnswer = answers[exo.id];
      const lvl = exo.level;
      if (!byLevel[lvl]) byLevel[lvl] = { correct: 0, total: 0, points: 0, maxPoints: 0 };
      byLevel[lvl].total += 1;
      byLevel[lvl].maxPoints += exo.points;

      if (userAnswer === undefined) {
        unanswered += 1;
      } else if (userAnswer === exo.answer) {
        correct += 1;
        earned += exo.points;
        byLevel[lvl].correct += 1;
        byLevel[lvl].points += exo.points;
      } else {
        wrong += 1;
      }
    });

    const percent = Math.round((earned / TOTAL_POINTS) * 100);
    const noteSur20 = ((earned / TOTAL_POINTS) * 20).toFixed(2);

    let appreciation, appreciationColor, appreciationDesc;
    if (percent >= 90) {
      appreciation = 'Excellent';
      appreciationColor = 'text-accent';
      appreciationDesc = "Maîtrise exceptionnelle de Python et de l'algorithmique. Profil expert.";
    } else if (percent >= 75) {
      appreciation = 'Très bien';
      appreciationColor = 'text-accent';
      appreciationDesc = 'Solide compréhension des concepts avancés. Profil senior.';
    } else if (percent >= 60) {
      appreciation = 'Bien';
      appreciationColor = 'text-ok';
      appreciationDesc = 'Bonnes bases avec une logique de programmation cohérente. Profil intermédiaire.';
    } else if (percent >= 40) {
      appreciation = 'Moyen';
      appreciationColor = 'text-warn';
      appreciationDesc = 'Connaissances de base acquises, des progrès à faire sur les concepts avancés.';
    } else if (percent >= 20) {
      appreciation = 'Insuffisant';
      appreciationColor = 'text-warn';
      appreciationDesc = "Bases fragiles, un accompagnement pédagogique serait bénéfique.";
    } else {
      appreciation = 'Débutant';
      appreciationColor = 'text-err';
      appreciationDesc = 'Profil débutant complet. Une formation initiale est nécessaire.';
    }

    return { earned, correct, wrong, unanswered, percent, noteSur20, appreciation, appreciationColor, appreciationDesc, byLevel };
  }, [answers]);

  const filteredExercises = useMemo(() => {
    if (filter === 'all') return exercises;
    if (filter === 'correct') return exercises.filter(e => answers[e.id] === e.answer);
    if (filter === 'wrong') return exercises.filter(e => answers[e.id] !== undefined && answers[e.id] !== e.answer);
    if (filter === 'unanswered') return exercises.filter(e => answers[e.id] === undefined);
    return exercises;
  }, [filter, answers]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen relative z-10 pb-16">
      {/* Header */}
      <header className="border-b border-line bg-bg/80 backdrop-blur-md sticky top-0 z-20 print:static">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-xs font-mono uppercase tracking-wider text-muted">
              Résultats · {userName}
            </span>
          </div>
          <div className="flex gap-2 print:hidden">
            <button onClick={handlePrint} className="btn-ghost text-sm">
              Imprimer / PDF
            </button>
            <button onClick={onRestart} className="btn-ghost text-sm">
              Nouveau test
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* En-tête résultats */}
        <div className="mb-12 animate-slide-up">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-4">
            Bilan de l'évaluation
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-2">
            {userName}
          </h1>
          <p className={`font-display text-3xl italic ${stats.appreciationColor}`}>
            {stats.appreciation}
          </p>
        </div>

        {/* Score principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* Note principale */}
          <div className="card p-8 lg:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
                Note finale
              </p>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-display text-8xl md:text-9xl font-light leading-none">
                  {stats.noteSur20}
                </span>
                <span className="font-display text-3xl text-muted">/ 20</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-2xl text-accent">{stats.percent}%</span>
                <span className="text-muted">·</span>
                <span className="text-muted">{stats.earned} / {TOTAL_POINTS} points</span>
              </div>

              {/* Barre de progression */}
              <div className="h-2 bg-surface2 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accentDark transition-all duration-1000"
                  style={{ width: `${stats.percent}%` }}
                />
              </div>

              <p className="text-ink/70 leading-relaxed max-w-xl">
                {stats.appreciationDesc}
              </p>
            </div>
          </div>

          {/* Stats compteurs */}
          <div className="space-y-3">
            <StatCard
              label="Réponses correctes"
              value={stats.correct}
              total={exercises.length}
              color="ok"
              icon="✓"
            />
            <StatCard
              label="Réponses incorrectes"
              value={stats.wrong}
              total={exercises.length}
              color="err"
              icon="✗"
            />
            <StatCard
              label="Non répondues"
              value={stats.unanswered}
              total={exercises.length}
              color="warn"
              icon="—"
            />
          </div>
        </div>

        {/* Détail par niveau */}
        <div className="card p-8 mb-12">
          <h2 className="font-display text-2xl font-light mb-6">Détail par niveau</h2>
          <div className="space-y-5">
            {Object.entries(stats.byLevel).map(([lvl, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={lvl}>
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium">{lvl}</span>
                      <span className="text-sm text-muted">
                        {data.correct} / {data.total} réponses · {data.points} / {data.maxPoints} pts
                      </span>
                    </div>
                    <span className="font-mono text-accent">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-1000"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-2 mb-6 print:hidden">
          <span className="text-xs font-mono uppercase tracking-wider text-muted mr-2">
            Filtrer :
          </span>
          <FilterBtn active={filter === 'all'} onClick={() => setFilter('all')}>
            Tout ({exercises.length})
          </FilterBtn>
          <FilterBtn active={filter === 'correct'} onClick={() => setFilter('correct')}>
            ✓ Correctes ({stats.correct})
          </FilterBtn>
          <FilterBtn active={filter === 'wrong'} onClick={() => setFilter('wrong')}>
            ✗ Incorrectes ({stats.wrong})
          </FilterBtn>
          {stats.unanswered > 0 && (
            <FilterBtn active={filter === 'unanswered'} onClick={() => setFilter('unanswered')}>
              — Non répondues ({stats.unanswered})
            </FilterBtn>
          )}
        </div>

        {/* Liste corrections */}
        <div className="space-y-4">
          {filteredExercises.map((exo) => (
            <ExerciseReview key={exo.id} exo={exo} userAnswer={answers[exo.id]} />
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12 text-muted">
            Aucun exercice dans cette catégorie.
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, total, color, icon }) {
  const colorMap = {
    ok: 'text-ok border-ok/30 bg-ok/5',
    err: 'text-err border-err/30 bg-err/5',
    warn: 'text-warn border-warn/30 bg-warn/5',
  };
  return (
    <div className={`card p-5 border ${colorMap[color]}`}>
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-mono uppercase tracking-wider text-muted">{label}</span>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-light">{value}</span>
        <span className="text-muted text-sm">/ {total}</span>
      </div>
    </div>
  );
}

function FilterBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${active
          ? 'bg-accent text-bg'
          : 'bg-surface border border-line text-ink/70 hover:bg-surface2 hover:text-ink'}
      `}
    >
      {children}
    </button>
  );
}

function ExerciseReview({ exo, userAnswer }) {
  const isCorrect = userAnswer === exo.answer;
  const isUnanswered = userAnswer === undefined;

  let statusColor, statusBg, statusLabel;
  if (isUnanswered) {
    statusColor = 'text-warn';
    statusBg = 'bg-warn/10 border-warn/30';
    statusLabel = 'Non répondu';
  } else if (isCorrect) {
    statusColor = 'text-ok';
    statusBg = 'bg-ok/10 border-ok/30';
    statusLabel = 'Correct';
  } else {
    statusColor = 'text-err';
    statusBg = 'bg-err/10 border-err/30';
    statusLabel = 'Incorrect';
  }

  return (
    <div className={`card p-6 border ${statusBg} print:break-inside-avoid`}>
      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-display text-3xl font-light text-muted">
            {String(exo.id).padStart(2, '0')}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-surface2 border border-line text-xs font-mono text-muted">
            {exo.level}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-surface2 border border-line text-xs font-mono text-muted">
            {exo.category}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted">
            {isCorrect ? `+${exo.points}` : `0`} / {exo.points} pts
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${statusColor} ${statusBg} border`}>
            {statusLabel}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl font-light mb-3">{exo.question}</h3>

      {exo.code && (
        <pre className="code-block text-sm mb-4">
          <code>{exo.code}</code>
        </pre>
      )}

      <div className="space-y-2 mb-4">
        {exo.options.map((opt, idx) => {
          const isUserChoice = userAnswer === idx;
          const isRightAnswer = idx === exo.answer;
          let cls = 'border-line bg-surface2 text-muted';
          let badge = null;

          if (isRightAnswer) {
            cls = 'border-ok bg-ok/10 text-ok';
            badge = <span className="text-ok font-mono text-xs">✓ Bonne réponse</span>;
          } else if (isUserChoice) {
            cls = 'border-err bg-err/10 text-err';
            badge = <span className="text-err font-mono text-xs">✗ Votre réponse</span>;
          }

          return (
            <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border ${cls}`}>
              <span className="font-mono text-sm font-semibold w-6">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="font-mono text-sm flex-1 break-all">{opt}</span>
              {badge}
            </div>
          );
        })}
      </div>

      <div className="bg-surface2 border border-line rounded-lg p-4">
        <div className="text-xs font-mono uppercase tracking-wider text-muted mb-2">
          Explication
        </div>
        <p className="text-sm text-ink/80 leading-relaxed">{exo.explanation}</p>
      </div>
    </div>
  );
}
