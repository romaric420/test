import { useState } from 'react';
import { exercises, TOTAL_POINTS } from '../data/exercises';

export default function Welcome({ onStart }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (name.trim().length < 2) {
      setError('Veuillez entrer un nom valide (2 caractères minimum)');
      return;
    }
    onStart(name.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleStart();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
      <div className="w-full max-w-3xl animate-slide-up">

        {/* Header décoratif */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft"></div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
            Évaluation technique · Python
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="font-display font-light text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-2">
          Python
          <br />
          <span className="italic text-accent">Skills</span>
          <span className="text-muted">.</span>
        </h1>

        <p className="font-display text-2xl md:text-3xl text-ink/60 mb-12 italic">
          assessment
        </p>

        {/* Sous-titre */}
        <p className="text-lg text-ink/70 mb-12 max-w-xl leading-relaxed">
          Une évaluation de 40 exercices conçue pour mesurer la logique de
          programmation, le raisonnement algorithmique et la maîtrise
          progressive du langage Python.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line mb-12 border border-line rounded-2xl overflow-hidden">
          <Stat label="Exercices" value="40" />
          <Stat label="Points totaux" value={TOTAL_POINTS} />
          <Stat label="Niveaux" value="4" />
          <Stat label="Durée estimée" value="~45 min" />
        </div>

        {/* Niveaux */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-muted mb-4">
            Progression
          </p>
          <div className="space-y-3">
            <LevelRow num="01" range="1 → 10" label="Débutant" desc="Variables, types, conditions, opérateurs" />
            <LevelRow num="02" range="11 → 20" label="Intermédiaire" desc="Boucles, fonctions, logique, récursivité" />
            <LevelRow num="03" range="21 → 30" label="Avancé" desc="Listes, dictionnaires, manipulation de données" />
            <LevelRow num="04" range="31 → 40" label="Expert" desc="Algorithmes, complexité, structures avancées" />
          </div>
        </div>

        {/* Saisie nom */}
        <div className="card p-8">
          <label className="block text-sm font-medium text-ink/80 mb-3">
            Votre nom complet
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(''); }}
            onKeyDown={handleKeyDown}
            placeholder="Ex : Romaric Vegas"
            className="input-field w-full text-lg mb-2"
            autoFocus
          />
          {error && (
            <p className="text-err text-sm mt-2 mb-2">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-6">
            <p className="text-sm text-muted">
              Vos réponses seront automatiquement corrigées à la fin.
            </p>
            <button
              onClick={handleStart}
              className="btn-primary group flex items-center gap-2"
            >
              Commencer l'évaluation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs font-mono text-muted mt-12 text-center">
          {exercises.length} questions · QCM · Correction automatique
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-surface p-6">
      <div className="font-display text-3xl md:text-4xl font-light mb-1">{value}</div>
      <div className="text-xs font-mono uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

function LevelRow({ num, range, label, desc }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-line/50 last:border-b-0">
      <span className="font-mono text-xs text-muted w-8">{num}</span>
      <span className="font-mono text-xs text-accent w-20">{range}</span>
      <span className="font-medium text-ink w-32">{label}</span>
      <span className="text-sm text-muted hidden md:block">{desc}</span>
    </div>
  );
}
