---
layout: ../../../../layouts/CoursLayout.astro
title: "Logique, ensembles et raisonnements"
ue: "UL1MA001"
color: "m1"
chapter: 3
totalChapters: 9
prevChapter: "/maths/ul1ma001/cours/chapitre2"
nextChapter: "/maths/ul1ma001/cours/chapitre4"
---

# Chapitre 3 : Logique, ensembles et raisonnements

Ce chapitre pose les fondements du raisonnement mathématique : la logique, les ensembles, les applications, et les grandes méthodes de démonstration (contraposition, absurde, récurrence). C'est le socle sur lequel reposent tous les autres chapitres.

---

## 3.1 : Propositions et valeurs de vérité

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Un **énoncé** est une affirmation dont tous les termes sont définis, de sorte qu'on peut lui attribuer une **valeur de vérité** : soit **Vrai** (V), soit **Faux** (F). Il n'y a pas d'autre possibilité.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemples</span>

- "Le carré de tout nombre réel est positif" : **V**
- "Tout nombre réel est le carré d'un nombre réel" : **F** (contre-exemple : $-1$)
- "La fonction $f : x \mapsto x^2$ est continue sur $\mathbb{R}$" : **V**

</div>

---

## 3.2 : Connecteurs logiques

### Conjonction (ET)

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

"$E_1$ **et** $E_2$" (noté $E_1 \wedge E_2$) est vrai uniquement quand les **deux** énoncés sont vrais.

| $E_1$ | $E_2$ | $E_1 \wedge E_2$ |
|---|---|---|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

</div>

### Disjonction (OU)

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

"$E_1$ **ou** $E_2$" (noté $E_1 \vee E_2$) est vrai quand **au moins un** des deux est vrai.

| $E_1$ | $E_2$ | $E_1 \vee E_2$ |
|---|---|---|
| V | V | **V** |
| V | F | **V** |
| F | V | **V** |
| F | F | F |

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Attention</span>

Le "ou" mathématique est **inclusif** : "$E_1$ ou $E_2$" est vrai même si les deux sont vrais en même temps. Ce n'est pas le "ou" exclusif du langage courant ("fromage ou dessert").

</div>

### Implication

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

"$E_1$ **implique** $E_2$" (noté $E_1 \Rightarrow E_2$) est faux **uniquement** quand $E_1$ est vrai et $E_2$ est faux.

| $E_1$ | $E_2$ | $E_1 \Rightarrow E_2$ |
|---|---|---|
| V | V | **V** |
| V | F | **F** |
| F | V | **V** |
| F | F | **V** |

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Point crucial</span>

Si $E_1$ est **faux**, l'implication $E_1 \Rightarrow E_2$ est **toujours vraie**, quelle que soit la valeur de $E_2$. C'est le principe "le faux implique n'importe quoi". Il faut absolument accepter cette définition.

</div>

<div class="bloc bloc-rem">
<span class="bloc-label">Vocabulaire</span>

- Dans $E_1 \Rightarrow E_2$ : $E_1$ est l'**hypothèse**, $E_2$ est la **conclusion**
- L'implication $E_2 \Rightarrow E_1$ est la **réciproque** de $E_1 \Rightarrow E_2$
- L'**équivalence** $E_1 \Leftrightarrow E_2$ signifie "$(E_1 \Rightarrow E_2)$ et $(E_2 \Rightarrow E_1)$"

</div>

### Négation

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

"**non** $E$" (noté $\neg E$) inverse la valeur de vérité.

| $E$ | $\neg E$ |
|---|---|
| V | F |
| F | V |

**Double négation** : $\neg(\neg E) = E$ (toujours).

**Tiers exclu** : $E \vee (\neg E)$ est toujours vrai.

</div>

---

## 3.3 : Négation des connecteurs

<div class="bloc bloc-thm">
<span class="bloc-label">Lois de De Morgan</span>

$$\neg(E_1 \wedge E_2) \iff (\neg E_1) \vee (\neg E_2)$$

$$\neg(E_1 \vee E_2) \iff (\neg E_1) \wedge (\neg E_2)$$

En mots : la négation du "et" donne un "ou" (et inversement).

</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Négation de l'implication</span>

$$\neg(E_1 \Rightarrow E_2) \iff E_1 \wedge (\neg E_2)$$

La négation de "$E_1$ implique $E_2$" est "$E_1$ est vrai **et** $E_2$ est faux".

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Erreur classique</span>

La négation de $E_1 \Rightarrow E_2$ n'est **PAS** $\neg E_1 \Rightarrow \neg E_2$. C'est une erreur très fréquente.

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Tautologie utile</span>

$$(E_1 \Rightarrow E_2) \iff (\neg E_1 \vee E_2)$$

L'implication se réécrit avec "ou" et "non".

</div>

---

## 3.4 : Contraposition

<div class="bloc bloc-thm">
<span class="bloc-label">Contraposée : indispensable</span>

$$(E_1 \Rightarrow E_2) \iff (\neg E_2 \Rightarrow \neg E_1)$$

L'implication est **toujours équivalente** à sa contraposée. Prouver l'une revient à prouver l'autre.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC1 2025)</span>

Montrer que pour $n \in \mathbb{N}$ : "$n^2$ est pair $\Rightarrow$ $n$ est pair".

**Par contraposition** : on montre "$n$ est impair $\Rightarrow$ $n^2$ est impair".

Si $n$ est impair, alors $n = 2k+1$ pour un certain $k \in \mathbb{N}$.

$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$

Donc $n^2$ est impair. ✓

</div>

---

## 3.5 : Quantificateurs

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

- $\forall x \in A,\; E(x)$ : "**pour tout** $x$ dans $A$, $E(x)$ est vrai"
- $\exists x \in A,\; E(x)$ : "**il existe** (au moins un) $x$ dans $A$ tel que $E(x)$ est vrai"

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">L'ordre des quantificateurs compte</span>

$\forall x \in [0,+\infty[,\; \exists y \in \mathbb{R},\; x = y^2$ : "tout réel positif a une racine carrée" (VRAI)

$\exists y \in \mathbb{R},\; \forall x \in [0,+\infty[,\; x = y^2$ : "il existe un réel dont le carré vaut tous les réels positifs" (FAUX)

On ne peut **pas** intervertir $\forall$ et $\exists$ quand ils sont de nature différente.

</div>

### Négation des quantificateurs

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : indispensable</span>

$$\neg(\forall x \in A,\; E(x)) = \exists x \in A,\; \neg E(x)$$

$$\neg(\exists x \in A,\; E(x)) = \forall x \in A,\; \neg E(x)$$

On **inverse** le quantificateur, puis on **nie** l'énoncé qui suit.

Pour des quantificateurs emboîtés, on applique la règle de gauche à droite, mécaniquement.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : négation de la continuité</span>

La continuité de $f$ en $x_0$ s'écrit :

$$\forall \varepsilon > 0,\; \exists \eta > 0,\; \forall x \in I,\; |x - x_0| \leq \eta \Rightarrow |f(x) - f(x_0)| \leq \varepsilon$$

Sa négation (la non-continuité) :

$$\exists \varepsilon > 0,\; \forall \eta > 0,\; \exists x \in I,\; |x - x_0| \leq \eta \;\wedge\; |f(x) - f(x_0)| > \varepsilon$$

On a inversé chaque quantificateur et nié l'implication finale ($\neg(A \Rightarrow B) = A \wedge \neg B$).

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type TD3</span>

Écrire la négation de $\forall x \in \mathbb{R},\; \exists \varepsilon > 0,\; \forall \delta > 0,\; \exists y \in \mathbb{R},\; |y-x| \leq \delta \;\wedge\; |f(y)-f(x)| > \varepsilon$.

$$\exists x \in \mathbb{R},\; \forall \varepsilon > 0,\; \exists \delta > 0,\; \forall y \in \mathbb{R},\; |y-x| > \delta \;\vee\; |f(y)-f(x)| \leq \varepsilon$$

</div>

---

## 3.6 : Ensembles

### Notions de base

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Un **ensemble** est une collection d'objets appelés **éléments**. On note $x \in A$ ("$x$ appartient à $A$") et $x \notin A$ ("$x$ n'appartient pas à $A$").

L'**ensemble vide** $\emptyset$ ne contient aucun élément. Un **singleton** $\{a\}$ contient un seul élément.

Deux ensembles sont **égaux** s'ils ont les mêmes éléments : $A = B \iff (\forall x,\; x \in A \Leftrightarrow x \in B)$.

</div>

<div class="bloc bloc-def">
<span class="bloc-label">Inclusion</span>

$A \subset B$ ("$A$ inclus dans $B$") signifie $\forall x \in A,\; x \in B$.

On dit que $A$ est une **partie** (ou un sous-ensemble) de $B$.

</div>

### Opérations sur les ensembles

<div class="bloc bloc-def">
<span class="bloc-label">Intersection, réunion, différence</span>

- **Intersection** : $A \cap B = \{x \mid x \in A \;\wedge\; x \in B\}$
- **Réunion** : $A \cup B = \{x \mid x \in A \;\vee\; x \in B\}$
- **Différence** : $A \setminus B = \{x \mid x \in A \;\wedge\; x \notin B\}$

Si $A \cap B = \emptyset$, on dit que $A$ et $B$ sont **disjoints**.

Si $A \subset B$, le **complémentaire** de $A$ dans $B$ est $\complement_B A = B \setminus A$.

</div>

<div class="svg-container" style="margin:35px 0;">
<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:750px;display:block;margin:0 auto;background:#080c16;border-radius:12px;border:1px solid rgba(255,255,255,0.05);">
<defs>
<style>.label-ab{font-family:'Times New Roman',Times,serif;font-size:22px;font-weight:bold;font-style:italic;fill:#94a3b8}.label-op{font-family:'Times New Roman',Times,serif;font-size:18px;font-weight:bold;text-anchor:middle}</style>
<pattern id="hatch-inter" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#5b9cf6" stroke-width="1.5"/></pattern>
<pattern id="hatch-union" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#4ecb8d" stroke-width="1.5"/></pattern>
<pattern id="hatch-diff" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#c084fc" stroke-width="1.5"/></pattern>
<clipPath id="clip-inter"><circle cx="110" cy="120" r="65"/></clipPath>
<mask id="mask-diff"><rect width="100%" height="100%" fill="white"/><circle cx="590" cy="120" r="65" fill="black"/></mask>
</defs>
<circle cx="110" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="180" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="180" cy="120" r="65" fill="rgba(91,156,246,0.15)" clip-path="url(#clip-inter)"/>
<circle cx="180" cy="120" r="65" fill="url(#hatch-inter)" clip-path="url(#clip-inter)"/>
<text x="65" y="45" class="label-ab">A</text>
<text x="210" y="45" class="label-ab">B</text>
<text x="145" y="215" fill="#5b9cf6" class="label-op">A ∩ B</text>
<circle cx="315" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="385" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="315" cy="120" r="65" fill="rgba(78,203,141,0.15)"/>
<circle cx="385" cy="120" r="65" fill="rgba(78,203,141,0.15)"/>
<circle cx="315" cy="120" r="65" fill="url(#hatch-union)"/>
<circle cx="385" cy="120" r="65" fill="url(#hatch-union)"/>
<text x="270" y="45" class="label-ab">A</text>
<text x="415" y="45" class="label-ab">B</text>
<text x="350" y="215" fill="#4ecb8d" class="label-op">A ∪ B</text>
<circle cx="520" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="590" cy="120" r="65" fill="none" stroke="#475569" stroke-width="2"/>
<circle cx="520" cy="120" r="65" fill="rgba(192,132,252,0.15)" mask="url(#mask-diff)"/>
<circle cx="520" cy="120" r="65" fill="url(#hatch-diff)" mask="url(#mask-diff)"/>
<text x="475" y="45" class="label-ab">A</text>
<text x="620" y="45" class="label-ab">B</text>
<text x="555" y="215" fill="#c084fc" class="label-op">A \ B</text>
</svg>
</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés</span>

- $A \cap B = B \cap A$, $A \cup B = B \cup A$ (commutativité)
- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ (distributivité)
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- $\complement(A \cap B) = \complement A \cup \complement B$ et $\complement(A \cup B) = \complement A \cap \complement B$ (De Morgan ensembliste)
- $\emptyset \subset A$ et $A \subset A$ pour tout $A$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC1 2025)</span>

$E = \{0, 1, 2\}$, $F = \{0, 1\}$, $G = \{1, 2\}$.

$F \subset E$ ? Oui, car $0 \in E$ et $1 \in E$. ✓

$G \subset F$ ? Non, car $2 \in G$ mais $2 \notin F$. ✗

$F \cap G = \{1\}$, $F \cup G = \{0, 1, 2\} = E$.

</div>

### Produit cartésien

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Le **produit cartésien** de $A$ et $B$ est $A \times B = \{(a, b) \mid a \in A,\; b \in B\}$.

C'est l'ensemble de tous les **couples** possibles. L'ordre compte : en général $(a,b) \neq (b,a)$.

Exemples : $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$, $\mathbb{R}^3 = \mathbb{R} \times \mathbb{R} \times \mathbb{R}$.

</div>

### Ensembles de nombres

<div class="bloc bloc-hors">
<span class="bloc-label">Rappel</span>

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

- $\mathbb{N}$ : entiers naturels ($0, 1, 2, \ldots$)
- $\mathbb{Z}$ : entiers relatifs ($\ldots, -2, -1, 0, 1, 2, \ldots$)
- $\mathbb{Q}$ : rationnels ($p/q$ avec $p \in \mathbb{Z}$, $q \in \mathbb{Z}^*$)
- $\mathbb{R}$ : réels (toute la droite numérique)
- $\mathbb{C}$ : complexes ($x + iy$)

</div>

---

## 3.7 : Applications

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Une **application** $f : A \to B$ est un objet qui associe à **tout** élément $a \in A$ un **unique** élément $f(a) \in B$.

On note : $f : A \to B,\; a \mapsto f(a)$.

$A$ est le **domaine**, $f(A) = \{f(a) \mid a \in A\}$ est l'**image** de $f$.

</div>

### Composition

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Si $f : A \to B$ et $g : B \to C$, la **composée** $g \circ f : A \to C$ est définie par :

$$(g \circ f)(a) = g(f(a))$$

La composition est **associative** : $h \circ (g \circ f) = (h \circ g) \circ f$, mais **pas commutative** en général.

</div>

### Injection, surjection, bijection

<div class="bloc bloc-def">
<span class="bloc-label">Définitions : peuvent tomber au partiel</span>

Soit $f : A \to B$ :

**Injective** : $\forall (a_1, a_2) \in A^2,\; a_1 \neq a_2 \Rightarrow f(a_1) \neq f(a_2)$

(deux éléments distincts ont des images distinctes)

**Surjective** : $\forall b \in B,\; \exists a \in A,\; b = f(a)$

(tout élément de $B$ est atteint)

**Bijective** : injective **et** surjective

(chaque élément de $B$ est atteint par exactement un élément de $A$)

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC1 2025)</span>

$f : \mathbb{N} \to 2\mathbb{N},\; n \mapsto 2n$ (où $2\mathbb{N}$ est l'ensemble des entiers pairs).

**Injective ?** Si $2n_1 = 2n_2$, alors $n_1 = n_2$. Oui. ✓

**Surjective ?** Tout entier pair $2k$ est l'image de $k$. Oui. ✓

**Conclusion** : $f$ est **bijective**.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$f : \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$.

**Injective ?** Non : $f(-1) = f(1) = 1$ mais $-1 \neq 1$.

**Surjective ?** Non : $-1$ n'a pas d'antécédent (car $x^2 \geq 0$ pour tout $x$).

</div>

### Application réciproque

<div class="bloc bloc-thm">
<span class="bloc-label">Formule</span>

Si $f : A \to B$ est **bijective**, alors il existe une unique application $f^{-1} : B \to A$ telle que :

$$f^{-1} \circ f = \text{id}_A \qquad f \circ f^{-1} = \text{id}_B$$

$f^{-1}$ est l'**application réciproque** de $f$. Elle vérifie $f^{-1}(b) = a \iff f(a) = b$.

</div>

---

## 3.8 : Méthodes de démonstration

### Démonstration directe

On suppose $E_1$ vrai et on montre que $E_2$ est vrai par une suite de déductions.

### Raisonnement par contraposition

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode</span>

Pour montrer $E_1 \Rightarrow E_2$, on montre $\neg E_2 \Rightarrow \neg E_1$ (la contraposée).

Utile quand l'implication directe est difficile mais la contraposée est plus naturelle.

</div>

### Raisonnement par l'absurde

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode</span>

Pour montrer qu'un énoncé $E$ est vrai :

**1.** Supposer $\neg E$ (la négation)

**2.** En déduire une **contradiction**

**3.** Conclure que $E$ est vrai

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple classique : irrationalité de racine de 2</span>

Montrons que $\sqrt{2} \notin \mathbb{Q}$.

**Supposons** par l'absurde que $\sqrt{2} = \frac{p}{q}$ avec $p, q \in \mathbb{N}^*$, fraction irréductible.

Alors $p^2 = 2q^2$, donc $p^2$ est pair, donc $p$ est pair (par contraposition vue plus haut).

On écrit $p = 2p'$, d'où $4(p')^2 = 2q^2$, soit $q^2 = 2(p')^2$.

Donc $q^2$ est pair, donc $q$ est pair.

Mais alors $p$ et $q$ sont tous les deux pairs : **contradiction** avec la fraction irréductible.

**Conclusion** : $\sqrt{2} \notin \mathbb{Q}$.

</div>

### Raisonnement par récurrence

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode : peut tomber au partiel</span>

Pour montrer $\forall n \in \mathbb{N},\; E(n)$ :

**Initialisation** : montrer que $E(0)$ est vrai.

**Hérédité** : montrer que pour tout $n \in \mathbb{N}$, $E(n) \Rightarrow E(n+1)$.

Alors $E(n)$ est vrai pour tout $n \in \mathbb{N}$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple classique : somme des entiers</span>

Montrons par récurrence que $\forall n \in \mathbb{N}$ :

$$\sum_{k=0}^{n} k = \frac{n(n+1)}{2}$$

**Initialisation** ($n = 0$) : $\sum_{k=0}^{0} k = 0$ et $\frac{0 \cdot 1}{2} = 0$. ✓

**Hérédité** : supposons $E(n)$ vraie. Alors :

$$\sum_{k=0}^{n+1} k = \left(\sum_{k=0}^{n} k\right) + (n+1) = \frac{n(n+1)}{2} + (n+1) = (n+1)\left(\frac{n}{2} + 1\right) = \frac{(n+1)(n+2)}{2}$$

C'est bien $E(n+1)$. ✓

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : somme des carrés (type TD3)</span>

Montrons que $\forall n \in \mathbb{N}$ :

$$\sum_{k=0}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

**Initialisation** : $0 = 0$. ✓

**Hérédité** : $\sum_{k=0}^{n+1} k^2 = \frac{n(n+1)(2n+1)}{6} + (n+1)^2 = (n+1)\left[\frac{n(2n+1)}{6} + (n+1)\right]$

$= (n+1) \cdot \frac{n(2n+1) + 6(n+1)}{6} = (n+1) \cdot \frac{2n^2 + 7n + 6}{6} = \frac{(n+1)(n+2)(2n+3)}{6}$

C'est $E(n+1)$. ✓

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Erreurs à éviter</span>

- Ne pas oublier l'**initialisation** : sans elle, la récurrence ne prouve rien
- Ne pas vérifier $E(1)$, $E(2)$, $E(3)$... en plus de $E(0)$ : c'est inutile
- Bien utiliser l'**hypothèse de récurrence** dans l'hérédité (sinon ce n'est pas une récurrence)
- On peut initialiser à $n_0 \neq 0$ : la récurrence prouve alors $E(n)$ pour tout $n \geq n_0$

</div>

---

## 3.9 : Logique et calcul booléen

<div class="bloc bloc-hors">
<span class="bloc-label">Complément : résumé des tautologies</span>

| Tautologie | Nom |
|---|---|
| $\neg(\neg E) \iff E$ | Double négation |
| $E \vee (\neg E)$ est toujours V | Tiers exclu |
| $\neg(E_1 \wedge E_2) \iff \neg E_1 \vee \neg E_2$ | De Morgan |
| $\neg(E_1 \vee E_2) \iff \neg E_1 \wedge \neg E_2$ | De Morgan |
| $\neg(E_1 \Rightarrow E_2) \iff E_1 \wedge \neg E_2$ | Négation de l'implication |
| $(E_1 \Rightarrow E_2) \iff (\neg E_1 \vee E_2)$ | Réécriture de l'implication |
| $(E_1 \Rightarrow E_2) \iff (\neg E_2 \Rightarrow \neg E_1)$ | Contraposition |

</div>

---

## Résumé du chapitre

<div class="bloc bloc-thm">
<span class="bloc-label">L'essentiel</span>

**Connecteurs** : $\wedge$ (et), $\vee$ (ou), $\Rightarrow$ (implique), $\neg$ (non). L'implication est fausse uniquement si l'hypothèse est vraie et la conclusion fausse.

**De Morgan** : $\neg(A \wedge B) = \neg A \vee \neg B$, $\neg(A \vee B) = \neg A \wedge \neg B$.

**Contraposée** : $(E_1 \Rightarrow E_2) \iff (\neg E_2 \Rightarrow \neg E_1)$.

**Quantificateurs** : $\forall$ et $\exists$. Négation : inverser le quantificateur, nier l'énoncé. L'ordre des quantificateurs compte.

**Ensembles** : $\cap$ (inter), $\cup$ (union), $\setminus$ (différence), $\subset$ (inclusion).

**Applications** : injection (distincts $\to$ distincts), surjection (tout $B$ atteint), bijection (les deux). L'application réciproque existe si et seulement si $f$ est bijective.

**Démonstrations** : directe, par contraposition, par l'absurde, par récurrence (initialisation + hérédité).

</div>
