// 40 exercices Python progressifs - du plus simple au plus complexe
// Chaque exercice est un QCM pour permettre la correction automatique
// Niveaux : 1-10 Bases, 11-20 Logique, 21-30 Structures, 31-40 Algorithmique

export const exercises = [
  // ============ NIVEAU 1 : LES BASES (1-10) ============
  {
    id: 1,
    level: "Débutant",
    category: "Variables & Affichage",
    points: 1,
    question: "Que va afficher ce code ?",
    code: `x = 5
y = 3
print(x + y)`,
    options: ["8", "53", "x + y", "Erreur"],
    answer: 0,
    explanation: "x vaut 5 et y vaut 3. L'opérateur + additionne les nombres : 5 + 3 = 8."
  },
  {
    id: 2,
    level: "Débutant",
    category: "Types de données",
    points: 1,
    question: "Quel est le résultat de cette opération ?",
    code: `print("Hello" + " " + "World")`,
    options: ["HelloWorld", "Hello World", "Hello + World", "Erreur"],
    answer: 1,
    explanation: "L'opérateur + concatène les chaînes de caractères. On obtient 'Hello' + ' ' + 'World' = 'Hello World'."
  },
  {
    id: 3,
    level: "Débutant",
    category: "Opérateurs",
    points: 1,
    question: "Que vaut la variable resultat ?",
    code: `resultat = 10 % 3
print(resultat)`,
    options: ["3", "1", "0", "3.33"],
    answer: 1,
    explanation: "L'opérateur % donne le reste de la division entière. 10 = 3*3 + 1, donc le reste est 1."
  },
  {
    id: 4,
    level: "Débutant",
    category: "Conditions",
    points: 1,
    question: "Que va afficher ce code ?",
    code: `age = 18
if age >= 18:
    print("Majeur")
else:
    print("Mineur")`,
    options: ["Majeur", "Mineur", "18", "Rien"],
    answer: 0,
    explanation: "age vaut 18, donc la condition age >= 18 est vraie. On affiche 'Majeur'."
  },
  {
    id: 5,
    level: "Débutant",
    category: "Variables",
    points: 1,
    question: "Quelle est la valeur finale de x ?",
    code: `x = 10
x = x + 5
x = x * 2
print(x)`,
    options: ["10", "15", "30", "20"],
    answer: 2,
    explanation: "x = 10, puis x = 10 + 5 = 15, puis x = 15 * 2 = 30."
  },
  {
    id: 6,
    level: "Débutant",
    category: "Types",
    points: 1,
    question: "Quel est le type de la variable v ?",
    code: `v = 3.14
print(type(v))`,
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
    answer: 1,
    explanation: "3.14 est un nombre à virgule (décimal), donc son type est 'float'."
  },
  {
    id: 7,
    level: "Débutant",
    category: "Conversion",
    points: 1,
    question: "Que va afficher ce code ?",
    code: `n = "5"
m = 3
print(int(n) + m)`,
    options: ["53", "8", "Erreur", "5 + 3"],
    answer: 1,
    explanation: "int(n) convertit la chaîne '5' en entier 5. Puis 5 + 3 = 8."
  },
  {
    id: 8,
    level: "Débutant",
    category: "Conditions",
    points: 1,
    question: "Que va afficher ce code ?",
    code: `x = 7
if x > 10:
    print("A")
elif x > 5:
    print("B")
else:
    print("C")`,
    options: ["A", "B", "C", "AB"],
    answer: 1,
    explanation: "x vaut 7. La première condition (x > 10) est fausse. La seconde (x > 5) est vraie, donc on affiche 'B'."
  },
  {
    id: 9,
    level: "Débutant",
    category: "Booléens",
    points: 1,
    question: "Que vaut cette expression ?",
    code: `print(True and False)`,
    options: ["True", "False", "1", "Erreur"],
    answer: 1,
    explanation: "L'opérateur 'and' retourne True uniquement si les DEUX opérandes sont True. Ici un est False, donc le résultat est False."
  },
  {
    id: 10,
    level: "Débutant",
    category: "Strings",
    points: 1,
    question: "Que va afficher ce code ?",
    code: `mot = "Python"
print(len(mot))`,
    options: ["5", "6", "7", "Python"],
    answer: 1,
    explanation: "La fonction len() retourne le nombre de caractères. 'Python' contient 6 lettres."
  },

  // ============ NIVEAU 2 : LOGIQUE ET BOUCLES (11-20) ============
  {
    id: 11,
    level: "Intermédiaire",
    category: "Boucles for",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `total = 0
for i in range(5):
    total += i
print(total)`,
    options: ["5", "10", "15", "0+1+2+3+4"],
    answer: 1,
    explanation: "range(5) génère 0, 1, 2, 3, 4. La somme est 0+1+2+3+4 = 10."
  },
  {
    id: 12,
    level: "Intermédiaire",
    category: "Boucles while",
    points: 2,
    question: "Combien de fois 'Hello' sera affiché ?",
    code: `i = 0
while i < 3:
    print("Hello")
    i += 1`,
    options: ["2", "3", "4", "Boucle infinie"],
    answer: 1,
    explanation: "i commence à 0. La boucle s'exécute pour i=0, i=1, i=2 (3 fois), puis s'arrête car i=3 n'est plus < 3."
  },
  {
    id: 13,
    level: "Intermédiaire",
    category: "Range",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `for i in range(2, 8, 2):
    print(i, end=" ")`,
    options: ["2 4 6", "2 4 6 8", "2 3 4 5 6 7", "0 2 4 6"],
    answer: 0,
    explanation: "range(2, 8, 2) commence à 2, va jusqu'à 8 (exclu), avec un pas de 2 : 2, 4, 6."
  },
  {
    id: 14,
    level: "Intermédiaire",
    category: "Logique",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `x = 5
y = 10
if x > 0 and y > 0:
    print("A")
if x > 0 or y < 0:
    print("B")
if not (x > y):
    print("C")`,
    options: ["A", "A B", "A B C", "B C"],
    answer: 2,
    explanation: "Toutes les conditions sont vraies : (x>0 et y>0) ✓, (x>0 ou y<0) ✓, (non (x>y)) ✓. Tous affichés."
  },
  {
    id: 15,
    level: "Intermédiaire",
    category: "Boucles imbriquées",
    points: 2,
    question: "Combien d'étoiles vont être affichées ?",
    code: `for i in range(3):
    for j in range(4):
        print("*", end="")`,
    options: ["7", "12", "9", "16"],
    answer: 1,
    explanation: "Boucle externe : 3 fois. Boucle interne : 4 fois. Total : 3 × 4 = 12 étoiles."
  },
  {
    id: 16,
    level: "Intermédiaire",
    category: "Break",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `for i in range(10):
    if i == 4:
        break
    print(i, end=" ")`,
    options: ["0 1 2 3", "0 1 2 3 4", "1 2 3 4", "0 1 2 3 4 5 6 7 8 9"],
    answer: 0,
    explanation: "La boucle s'arrête (break) quand i atteint 4. Donc on affiche seulement 0, 1, 2, 3."
  },
  {
    id: 17,
    level: "Intermédiaire",
    category: "Continue",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `for i in range(5):
    if i % 2 == 0:
        continue
    print(i, end=" ")`,
    options: ["0 2 4", "1 3", "0 1 2 3 4", "2 4"],
    answer: 1,
    explanation: "continue saute l'itération. Quand i est pair (0, 2, 4), on saute. On affiche les impairs : 1 et 3."
  },
  {
    id: 18,
    level: "Intermédiaire",
    category: "Fonctions",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `def carre(n):
    return n * n

print(carre(4) + carre(3))`,
    options: ["7", "25", "12", "49"],
    answer: 1,
    explanation: "carre(4) = 16, carre(3) = 9. Donc 16 + 9 = 25."
  },
  {
    id: 19,
    level: "Intermédiaire",
    category: "Fonctions",
    points: 2,
    question: "Que retourne cette fonction avec f(3) ?",
    code: `def f(n):
    if n <= 1:
        return 1
    return n + f(n - 1)`,
    options: ["3", "6", "9", "Récursion infinie"],
    answer: 1,
    explanation: "f(3) = 3 + f(2) = 3 + (2 + f(1)) = 3 + 2 + 1 = 6. C'est la somme de 1 à n."
  },
  {
    id: 20,
    level: "Intermédiaire",
    category: "Algorithmique",
    points: 2,
    question: "Que va afficher ce code ?",
    code: `def mystere(n):
    if n == 0:
        return 0
    return 1 + mystere(n // 2)

print(mystere(8))`,
    options: ["3", "4", "8", "1"],
    answer: 1,
    explanation: "mystere(8)=1+mystere(4)=1+1+mystere(2)=1+1+1+mystere(1)=1+1+1+1+mystere(0)=4. Cette fonction compte les divisions par 2."
  },

  // ============ NIVEAU 3 : STRUCTURES DE DONNÉES (21-30) ============
  {
    id: 21,
    level: "Avancé",
    category: "Listes",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `liste = [1, 2, 3, 4, 5]
print(liste[1:4])`,
    options: ["[1, 2, 3]", "[2, 3, 4]", "[2, 3, 4, 5]", "[1, 2, 3, 4]"],
    answer: 1,
    explanation: "Le slicing [1:4] prend les éléments d'index 1 à 3 (4 exclu) : 2, 3, 4."
  },
  {
    id: 22,
    level: "Avancé",
    category: "Listes",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `liste = [3, 1, 4, 1, 5, 9, 2, 6]
liste.sort()
print(liste[2])`,
    options: ["4", "2", "1", "3"],
    answer: 1,
    explanation: "Après sort() : [1, 1, 2, 3, 4, 5, 6, 9]. L'index 2 correspond au 3ème élément : 2."
  },
  {
    id: 23,
    level: "Avancé",
    category: "Dictionnaires",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `d = {"a": 1, "b": 2, "c": 3}
d["a"] = d["b"] + d["c"]
print(d["a"])`,
    options: ["1", "5", "6", "Erreur"],
    answer: 1,
    explanation: "d['b']=2 et d['c']=3, donc d['a']=2+3=5."
  },
  {
    id: 24,
    level: "Avancé",
    category: "Listes",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `liste = [1, 2, 3]
liste.append([4, 5])
print(len(liste))`,
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: "append() ajoute la liste [4, 5] comme UN seul élément. La liste devient [1, 2, 3, [4, 5]] de longueur 4."
  },
  {
    id: 25,
    level: "Avancé",
    category: "List comprehension",
    points: 3,
    question: "Que contient la liste resultat ?",
    code: `resultat = [x*2 for x in range(5) if x % 2 == 0]
print(resultat)`,
    options: ["[0, 2, 4]", "[0, 4, 8]", "[2, 4]", "[0, 2, 4, 6, 8]"],
    answer: 1,
    explanation: "Pour x dans 0,1,2,3,4, on garde les pairs (0, 2, 4) et on les multiplie par 2 : 0, 4, 8."
  },
  {
    id: 26,
    level: "Avancé",
    category: "Strings",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `s = "bonjour le monde"
mots = s.split(" ")
print(len(mots))`,
    options: ["2", "3", "16", "1"],
    answer: 1,
    explanation: "split(' ') sépare la chaîne aux espaces. On obtient ['bonjour', 'le', 'monde'], soit 3 mots."
  },
  {
    id: 27,
    level: "Avancé",
    category: "Tuples",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `t = (1, 2, 3)
a, b, c = t
print(a + c)`,
    options: ["3", "4", "6", "Erreur"],
    answer: 1,
    explanation: "Le déballage assigne a=1, b=2, c=3. Donc a + c = 1 + 3 = 4."
  },
  {
    id: 28,
    level: "Avancé",
    category: "Sets",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `s = {1, 2, 3, 2, 1, 4}
print(len(s))`,
    options: ["4", "5", "6", "3"],
    answer: 0,
    explanation: "Un set ne contient pas de doublons. {1, 2, 3, 2, 1, 4} devient {1, 2, 3, 4}, soit 4 éléments."
  },
  {
    id: 29,
    level: "Avancé",
    category: "Dictionnaires",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `notes = {"Alice": 15, "Bob": 12, "Charlie": 18}
total = 0
for nom in notes:
    total += notes[nom]
print(total)`,
    options: ["3", "45", "Alice Bob Charlie", "Erreur"],
    answer: 1,
    explanation: "On itère sur les CLÉS, mais on additionne les VALEURS : 15 + 12 + 18 = 45."
  },
  {
    id: 30,
    level: "Avancé",
    category: "Manipulation",
    points: 3,
    question: "Que va afficher ce code ?",
    code: `liste = [5, 2, 8, 1, 9, 3]
maxi = liste[0]
for x in liste:
    if x > maxi:
        maxi = x
print(maxi)`,
    options: ["5", "9", "8", "1"],
    answer: 1,
    explanation: "Algorithme de recherche du maximum. On parcourt la liste et on garde la plus grande valeur : 9."
  },

  // ============ NIVEAU 4 : ALGORITHMIQUE (31-40) ============
  {
    id: 31,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne mystere([3, 1, 4, 1, 5, 9, 2, 6]) ?",
    code: `def mystere(liste):
    n = len(liste)
    for i in range(n):
        for j in range(0, n - i - 1):
            if liste[j] > liste[j + 1]:
                liste[j], liste[j + 1] = liste[j + 1], liste[j]
    return liste`,
    options: [
      "[9, 6, 5, 4, 3, 2, 1, 1]",
      "[1, 1, 2, 3, 4, 5, 6, 9]",
      "[3, 1, 4, 1, 5, 9, 2, 6]",
      "[1, 2, 3, 4, 5, 6, 9]"
    ],
    answer: 1,
    explanation: "C'est un tri à bulles (bubble sort). Il trie la liste dans l'ordre croissant : [1, 1, 2, 3, 4, 5, 6, 9]."
  },
  {
    id: 32,
    level: "Expert",
    category: "Récursivité",
    points: 4,
    question: "Que retourne fact(5) ?",
    code: `def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)`,
    options: ["5", "15", "120", "25"],
    answer: 2,
    explanation: "C'est la factorielle : fact(5) = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    id: 33,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne f([1, 2, 3, 4, 5], 3) ?",
    code: `def f(liste, cible):
    gauche, droite = 0, len(liste) - 1
    while gauche <= droite:
        milieu = (gauche + droite) // 2
        if liste[milieu] == cible:
            return milieu
        elif liste[milieu] < cible:
            gauche = milieu + 1
        else:
            droite = milieu - 1
    return -1`,
    options: ["-1", "2", "3", "1"],
    answer: 1,
    explanation: "C'est une recherche dichotomique (binary search). Elle cherche 3 dans la liste triée et retourne son INDEX : 2."
  },
  {
    id: 34,
    level: "Expert",
    category: "Récursivité",
    points: 4,
    question: "Que retourne fib(6) ?",
    code: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)`,
    options: ["5", "8", "13", "21"],
    answer: 1,
    explanation: "Suite de Fibonacci : 0, 1, 1, 2, 3, 5, 8... fib(6) = 8."
  },
  {
    id: 35,
    level: "Expert",
    category: "Complexité",
    points: 4,
    question: "Quelle est la complexité temporelle de cet algorithme ?",
    code: `def f(n):
    total = 0
    for i in range(n):
        for j in range(n):
            total += 1
    return total`,
    options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
    answer: 2,
    explanation: "Deux boucles imbriquées qui dépendent toutes deux de n. La complexité est O(n × n) = O(n²)."
  },
  {
    id: 36,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne mystere('racecar') ?",
    code: `def mystere(s):
    return s == s[::-1]`,
    options: ["True", "False", "racecar", "racrecaR"],
    answer: 0,
    explanation: "s[::-1] inverse la chaîne. 'racecar' inversé donne 'racecar' (palindrome). Donc True."
  },
  {
    id: 37,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne f([1, 2, 3, 4, 5]) ?",
    code: `def f(liste):
    resultat = []
    for x in liste:
        if x not in resultat:
            resultat.append(x * x)
    return sum(resultat)`,
    options: ["15", "55", "25", "30"],
    answer: 1,
    explanation: "Aucun doublon dans la liste. On calcule les carrés [1, 4, 9, 16, 25]. Somme = 1+4+9+16+25 = 55."
  },
  {
    id: 38,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne mystere([1, 2, 3, 4, 5, 6]) ?",
    code: `def mystere(liste):
    g, d = 0, len(liste) - 1
    while g < d:
        liste[g], liste[d] = liste[d], liste[g]
        g += 1
        d -= 1
    return liste`,
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[6, 5, 4, 3, 2, 1]",
      "[1, 3, 5, 2, 4, 6]",
      "[6, 2, 3, 4, 5, 1]"
    ],
    answer: 1,
    explanation: "Algorithme d'inversion sur place avec deux pointeurs. Le résultat est la liste inversée."
  },
  {
    id: 39,
    level: "Expert",
    category: "Algorithmes",
    points: 4,
    question: "Que retourne compte('mississippi') ?",
    code: `def compte(s):
    d = {}
    for c in s:
        if c in d:
            d[c] += 1
        else:
            d[c] = 1
    return max(d.values())`,
    options: ["1", "2", "4", "11"],
    answer: 2,
    explanation: "On compte chaque lettre : m=1, i=4, s=4, p=2. Le max est 4 (i et s apparaissent 4 fois)."
  },
  {
    id: 40,
    level: "Expert",
    category: "Algorithmique avancée",
    points: 4,
    question: "Que retourne f(4) ?",
    code: `def f(n):
    if n <= 0:
        return [[]]
    sub = f(n - 1)
    resultat = []
    for s in sub:
        resultat.append(s)
        resultat.append(s + [n])
    return resultat

print(len(f(4)))`,
    options: ["4", "8", "16", "24"],
    answer: 2,
    explanation: "Cette fonction génère tous les sous-ensembles de {1,2,3,4}. Le nombre de sous-ensembles d'un ensemble de n éléments est 2^n = 2^4 = 16."
  },
];

export const TOTAL_POINTS = exercises.reduce((sum, e) => sum + e.points, 0);
