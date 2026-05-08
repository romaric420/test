# 🐍 Python Skills Assessment

Application React professionnelle pour évaluer le niveau Python d'un candidat à travers **40 exercices progressifs** (du niveau débutant au niveau expert). Correction automatique avec note sur 20 et bilan détaillé.

## ✨ Fonctionnalités

- **40 exercices QCM** progressifs répartis sur 4 niveaux (Débutant, Intermédiaire, Avancé, Expert)
- Saisie du **nom du candidat** avant de commencer
- **Onglet Test** : navigation libre entre les questions, sauvegarde automatique des réponses, indicateur de progression
- **Onglet Correction** : correction automatique, **note sur 20**, % de réussite, statistiques par niveau, explications pour chaque question
- **Filtres** : voir uniquement les bonnes / mauvaises réponses
- **Export imprimable** (bouton Imprimer / PDF)
- Design **professionnel et moderne** (dark theme + accent vert lime)

## 🚀 Installation et lancement

Prérequis : **Node.js 18+** et **npm**

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en mode développement
npm run dev

# 3. Ouvrir le navigateur
# → http://localhost:5173
```

## 📦 Build de production

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

Pour prévisualiser le build :
```bash
npm run preview
```

## 🌐 Déploiement

Le dossier `dist/` (après `npm run build`) contient un site statique. Tu peux le déployer sur :

- **Vercel** : `vercel deploy` (drag & drop du dossier `dist`)
- **Netlify** : drag & drop du dossier `dist` sur netlify.com
- **GitHub Pages** : push le contenu de `dist` sur la branche `gh-pages`
- **N'importe quel hébergeur statique** (OVH, Infomaniak, etc.) : upload du contenu de `dist`

## 📁 Structure du projet

```
python-test/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                 # Point d'entrée
    ├── App.jsx                  # Orchestration des phases
    ├── index.css                # Tailwind + styles globaux
    ├── components/
    │   ├── Welcome.jsx          # Écran d'accueil + saisie nom
    │   ├── Test.jsx             # Test avec navigation
    │   └── Correction.jsx       # Résultats + note + détails
    └── data/
        └── exercises.js         # Les 40 exercices
```

## 📝 Personnaliser les exercices

Tous les exercices sont dans `src/data/exercises.js`. Chaque exercice a la structure suivante :

```js
{
  id: 1,
  level: "Débutant",          // Débutant | Intermédiaire | Avancé | Expert
  category: "Variables",
  points: 1,                  // Pondération du score
  question: "Que va afficher ce code ?",
  code: `x = 5\nprint(x)`,    // (optionnel)
  options: ["A", "B", "C", "D"],
  answer: 0,                  // Index de la bonne réponse (0-3)
  explanation: "..."          // Affichée à la correction
}
```

## 🎯 Système de notation

| Note / 20  | Appréciation     | Profil                       |
|------------|------------------|------------------------------|
| 18 - 20    | Excellent        | Expert                       |
| 15 - 17.9  | Très bien        | Senior                       |
| 12 - 14.9  | Bien             | Intermédiaire                |
| 8 - 11.9   | Moyen            | Bases acquises               |
| 4 - 7.9    | Insuffisant      | Bases fragiles               |
| 0 - 3.9    | Débutant         | Formation initiale requise   |

Total : **100 points** (1 pt par exo niveau 1, 2 pts niveau 2, 3 pts niveau 3, 4 pts niveau 4)

---

**Tech stack** : React 18 · Vite · Tailwind CSS
"# test" 
