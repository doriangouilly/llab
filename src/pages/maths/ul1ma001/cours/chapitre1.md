---
layout: ../../../../layouts/CoursLayout.astro
title: "Géométrie du plan et de l'espace"
ue: "UL1MA001"
color: "m1"
chapter: 1
totalChapters: 9
prevChapter: ""
nextChapter: "/maths/ul1ma001/cours/chapitre2"
---

# Chapitre 1 : Géométrie du plan et de l'espace

Ce chapitre introduit les outils fondamentaux pour travailler dans le plan et l'espace : vecteurs, produit scalaire, produit vectoriel, et équations de droites et de plans. Ces outils reviennent dans **tous les chapitres suivants**.

---

## 1.1 : R2 et R3

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

$\mathbb{R}^2$ est l'ensemble des couples de réels, $\mathbb{R}^3$ l'ensemble des triplets.

$$\mathbb{R}^2 = \{(x,y) \mid x \in \mathbb{R},\; y \in \mathbb{R}\} \qquad \mathbb{R}^3 = \{(x,y,z) \mid x,y,z \in \mathbb{R}\}$$

</div>

---

## 1.2 : Points, vecteurs et opérations

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

$\vec{AB}$ est le vecteur associé aux points $A$ et $B$. Il est caractérisé par sa **direction**, son **sens** et sa **longueur** $\|\vec{AB}\|$. Deux vecteurs non nuls sont **colinéaires** s'ils ont la même direction : il existe $\lambda \in \mathbb{R}^*$ tel que $\vec{u} = \lambda \vec{v}$.

</div>

### Relation de Chasles

<div class="bloc bloc-thm">
<span class="bloc-label">Indispensable</span>

Pour tous points $A$, $B$, $C$ :

$$\vec{AB} + \vec{BC} = \vec{AC}$$

On en déduit : $\vec{BA} = -\vec{AB}$.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;">
<defs>
<marker id="a1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#5b9cf6"/></marker>
<marker id="a2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#4ecb8d"/></marker>
<marker id="a3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#f6845b"/></marker>
</defs>
<line x1="50" y1="175" x2="238" y2="55" stroke="#5b9cf6" stroke-width="2.5" marker-end="url(#a1)"/>
<line x1="245" y1="55" x2="460" y2="160" stroke="#4ecb8d" stroke-width="2.5" marker-end="url(#a2)"/>
<line x1="50" y1="175" x2="460" y2="160" stroke="#f6845b" stroke-width="2.5" stroke-dasharray="8,5" marker-end="url(#a3)"/>
<circle cx="50" cy="175" r="5" fill="#a8b4c8"/>
<circle cx="245" cy="55" r="5" fill="#a8b4c8"/>
<circle cx="465" cy="160" r="5" fill="#a8b4c8"/>
<text x="30" y="200" fill="#d0d8e8" font-size="18" font-weight="700">A</text>
<text x="240" y="40" fill="#d0d8e8" font-size="18" font-weight="700">B</text>
<text x="470" y="180" fill="#d0d8e8" font-size="18" font-weight="700">C</text>
<text x="110" y="95" fill="#5b9cf6" font-size="16" font-weight="600">AB</text>
<text x="350" y="85" fill="#4ecb8d" font-size="16" font-weight="600">BC</text>
<text x="210" y="200" fill="#f6845b" font-size="16" font-weight="600">AC = AB + BC</text>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Relation de Chasles : le vecteur $\vec{AC}$ (pointillé orange) est la somme de $\vec{AB}$ (bleu) et $\vec{BC}$ (vert).</p>
</div>

### Composantes

<div class="bloc bloc-prop">
<span class="bloc-label">Propriété</span>

Si $M = (x,y)$ et $M' = (x',y')$, alors :

$$\vec{MM'} = \begin{pmatrix} x' - x \\ y' - y \end{pmatrix}$$

Retenir : **extrémité moins origine**.

La **norme** vaut $\|\vec{u}\| = \sqrt{x^2 + y^2}$ en 2D et $\sqrt{x^2 + y^2 + z^2}$ en 3D.

</div>

La somme et la multiplication par un scalaire se font composante par composante :

$$\begin{pmatrix} x_1 \\ y_1 \end{pmatrix} + \begin{pmatrix} x_2 \\ y_2 \end{pmatrix} = \begin{pmatrix} x_1 + x_2 \\ y_1 + y_2 \end{pmatrix} \qquad \lambda \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \lambda x \\ \lambda y \end{pmatrix}$$

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$A = (1, 3)$, $B = (4, -1)$ :

$$\vec{AB} = \begin{pmatrix} 4 - 1 \\ -1 - 3 \end{pmatrix} = \begin{pmatrix} 3 \\ -4 \end{pmatrix} \qquad \|\vec{AB}\| = \sqrt{9+16} = 5$$

</div>

---

## 1.3 : Produit scalaire

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Le produit scalaire de deux vecteurs non nuls $\vec{u}$ et $\vec{v}$ est le **nombre réel** :

$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \cdot \|\vec{v}\| \cdot \cos(\theta)$$

où $\theta \in [0,\pi]$ est l'angle entre les deux vecteurs. Si l'un est nul, le produit scalaire vaut $0$.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
<defs>
<marker id="arrow-u" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#5b9cf6"/></marker>
<marker id="arrow-v" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#f472b6"/></marker>
</defs>
<path d="M 110 170 A 60 60 0 0 0 100 115" fill="none" stroke="#e8c840" stroke-width="2"/>
<text x="120" y="145" fill="#e8c840" font-size="18" font-style="italic">θ</text>
<line x1="200" y1="50" x2="200" y2="170" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,5"/>
<polyline points="185,170 185,155 200,155" fill="none" stroke="#64748b" stroke-width="1.5"/>
<line x1="50" y1="170" x2="350" y2="170" stroke="#5b9cf6" stroke-width="2.5" marker-end="url(#arrow-u)"/>
<text x="345" y="195" fill="#5b9cf6" font-size="18" font-weight="600">u</text>
<line x1="50" y1="170" x2="200" y2="50" stroke="#f472b6" stroke-width="2.5" marker-end="url(#arrow-v)"/>
<text x="180" y="42" fill="#f472b6" font-size="18" font-weight="600">v</text>
<text x="30" y="190" fill="#a8b4c8" font-size="16">O</text>
<text x="193" y="195" fill="#a8b4c8" font-size="16">H</text>
<circle cx="200" cy="170" r="4" fill="#64748b"/>
<circle cx="50" cy="170" r="4" fill="#a8b4c8"/>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Le produit scalaire est lié à la projection : $\vec{u} \cdot \vec{v} = \|\vec{u}\| \times OH$ (longueur algébrique).</p>
</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Formule en base orthonormée : peut tomber au partiel</span>

Si $\vec{u} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ et $\vec{v} = \begin{pmatrix} x' \\ y' \\ z' \end{pmatrix}$ :

$$\vec{u} \cdot \vec{v} = xx' + yy' + zz'$$

$$\|\vec{u}\| = \sqrt{x^2 + y^2 + z^2}$$

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés</span>

- $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$
- **Orthogonaux** $\iff$ $\vec{u} \cdot \vec{v} = 0$
- Symétrie : $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$
- Homogénéité : $(\lambda\vec{u}) \cdot \vec{v} = \lambda(\vec{u} \cdot \vec{v})$
- Distributivité : $(\vec{u} + \vec{v}) \cdot \vec{w} = \vec{u} \cdot \vec{w} + \vec{v} \cdot \vec{w}$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : vérifier l'orthogonalité</span>

$\vec{u} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $\vec{v} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$. On calcule :
$\vec{u} \cdot \vec{v} = (1)(-1) + (1)(1) = 0$. Donc $\vec{u} \perp \vec{v}$.

</div>

### Projection orthogonale

<div class="bloc bloc-thm">
<span class="bloc-label">Formule de projection</span>

La projection orthogonale de $\vec{u}$ sur la direction $\vec{d} \neq \vec{0}$ est :

$$\text{proj}_{\vec{d}}(\vec{u}) = \frac{\vec{u} \cdot \vec{d}}{\|\vec{d}\|^2}\;\vec{d}$$

Si $\vec{d}$ est unitaire ($\|\vec{d}\| = 1$), cela se simplifie en $(\vec{u} \cdot \vec{d})\,\vec{d}$.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:460px;display:block;margin:0 auto;">
<defs>
<marker id="p1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#5b9cf6"/></marker>
<marker id="p3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7" fill="#4ecb8d"/></marker>
</defs>
<line x1="20" y1="150" x2="430" y2="150" stroke="#3a5068" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="50" y1="150" x2="310" y2="150" stroke="#4ecb8d" stroke-width="3" marker-end="url(#p3)"/>
<line x1="50" y1="150" x2="310" y2="35" stroke="#5b9cf6" stroke-width="2.5" marker-end="url(#p1)"/>
<line x1="310" y1="35" x2="310" y2="150" stroke="#f06070" stroke-width="1.5" stroke-dasharray="4,3"/>
<rect x="302" y="138" width="10" height="10" fill="none" stroke="#f06070" stroke-width="1.5"/>
<circle cx="50" cy="150" r="5" fill="#a8b4c8"/>
<text x="320" y="30" fill="#5b9cf6" font-size="18" font-weight="700">u</text>
<text x="155" y="178" fill="#4ecb8d" font-size="16" font-weight="600">proj(u)</text>
<text x="435" y="148" fill="#3a5068" font-size="14">d</text>
<text x="25" y="172" fill="#a8b4c8" font-size="15">O</text>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Le vecteur vert est la projection orthogonale de $\vec{u}$ (bleu) sur la droite de direction $\vec{d}$. L'angle droit (rouge) confirme l'orthogonalité.</p>
</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : projection</span>

Projetons $\vec{u} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ sur $\vec{d} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (l'axe des abscisses) :

$$\text{proj}_{\vec{d}}(\vec{u}) = \frac{3 \cdot 1 + 4 \cdot 0}{1^2 + 0^2} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$$

</div>

---

## 1.4 : Bases et familles libres

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

$\{\vec{u}_1, \ldots, \vec{u}_k\}$ est **liée** s'il existe $\lambda_1, \ldots, \lambda_k$ non tous nuls tels que $\lambda_1\vec{u}_1 + \cdots + \lambda_k\vec{u}_k = \vec{0}$. Sinon, elle est **libre**.

</div>

| Nombre de vecteurs | Liée si et seulement si... |
|---|---|
| 1 | le vecteur est nul |
| 2 | colinéaires |
| 3 | coplanaires |

<div class="bloc bloc-prop">
<span class="bloc-label">Base</span>

Base du plan = 2 vecteurs non colinéaires (dim 2). Base de l'espace = 3 vecteurs non coplanaires (dim 3). **Orthonormée** = norme 1 et orthogonaux deux à deux.

La **base canonique** du plan : $\left(\begin{pmatrix}1\\0\end{pmatrix}, \begin{pmatrix}0\\1\end{pmatrix}\right)$. Celle de l'espace : $\left(\begin{pmatrix}1\\0\\0\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}, \begin{pmatrix}0\\0\\1\end{pmatrix}\right)$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type TD1</span>

La famille $\left\{\begin{pmatrix}0\\-3\\0\end{pmatrix}, \begin{pmatrix}0\\1\\3\end{pmatrix}, \begin{pmatrix}2\\1\\3\end{pmatrix}\right\}$ est-elle libre ?

On cherche $\lambda_1, \lambda_2, \lambda_3$ tels que $\lambda_1 \vec{u}_1 + \lambda_2 \vec{u}_2 + \lambda_3 \vec{u}_3 = \vec{0}$.

Composante 1 : $2\lambda_3 = 0 \Rightarrow \lambda_3 = 0$

Composante 3 : $3\lambda_2 + 3\lambda_3 = 0 \Rightarrow \lambda_2 = 0$

Composante 2 : $-3\lambda_1 + \lambda_2 + \lambda_3 = 0 \Rightarrow \lambda_1 = 0$

Conclusion : la seule solution est $\lambda_1 = \lambda_2 = \lambda_3 = 0$, donc la famille est **libre**. Comme elle contient 3 vecteurs de $\mathbb{R}^3$, c'est une **base**.

</div>

---

## 1.5 : Produit vectoriel

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : peut tomber au partiel</span>

Dans une base orthonormée directe de $\mathbb{R}^3$ :

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} \wedge \begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} yz' - zy' \\ zx' - xz' \\ xy' - yx' \end{pmatrix}$$

Le résultat est un **vecteur** orthogonal aux deux, de norme $\|\vec{u}\|\,\|\vec{v}\|\,\sin\theta$.

Nul $\iff$ colinéaires. $\|\vec{u} \wedge \vec{v}\|$ = aire du parallélogramme.

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Ne pas confondre</span>

| | Scalaire $\vec{u} \cdot \vec{v}$ | Vectoriel $\vec{u} \wedge \vec{v}$ |
|---|---|---|
| Résultat | nombre réel | **vecteur** |
| Nul si | orthogonaux | colinéaires |
| Existe en | plan + espace | **espace seulement** |

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Astuce pour retenir</span>

Chaque composante = petit déterminant des deux **autres** lignes, en cyclant :

- $(y,z) \to yz' - zy'$
- $(z,x) \to zx' - xz'$
- $(x,y) \to xy' - yx'$

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés algébriques</span>

- **Antisymétrie** : $\vec{u} \wedge \vec{v} = -\vec{v} \wedge \vec{u}$ (l'ordre compte !)
- **Homogénéité** : $(\lambda\vec{u}) \wedge \vec{v} = \lambda(\vec{u} \wedge \vec{v})$
- **Distributivité** : $(\vec{u} + \vec{v}) \wedge \vec{w} = \vec{u} \wedge \vec{w} + \vec{v} \wedge \vec{w}$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC1 2025)</span>

$\vec{a} = \begin{pmatrix} -1 \\ -1 \\ -1 \end{pmatrix}$, $\vec{b} = \begin{pmatrix} -2 \\ -5 \\ -1 \end{pmatrix}$

**Comp. 1** : $(-1)(-1) - (-1)(-5) = 1 - 5 = -4$

**Comp. 2** : $(-1)(-2) - (-1)(-1) = 2 - 1 = 1$

**Comp. 3** : $(-1)(-5) - (-1)(-2) = 5 - 2 = 3$

$$\vec{a} \wedge \vec{b} = \begin{pmatrix} -4 \\ 1 \\ 3 \end{pmatrix}$$

Vérif : $\vec{a} \cdot \vec{c} = 4 - 1 - 3 = 0$ ✓ et $\vec{b} \cdot \vec{c} = 8 - 5 - 3 = 0$ ✓

</div>

---

## 1.6 : Équations de droites et de plans

### Équations paramétriques

<div class="bloc bloc-def">
<span class="bloc-label">Droite et plan</span>

**Droite** passant par $A$ dirigée par $\vec{u}$ : $D = \{A + \lambda\vec{u} \mid \lambda \in \mathbb{R}\}$

**Plan** passant par $A$ dirigé par $\vec{u}, \vec{v}$ : $\mathcal{P} = \{A + \lambda\vec{u} + \mu\vec{v} \mid \lambda, \mu \in \mathbb{R}\}$

</div>

### Équation cartésienne d'une droite dans le plan

<div class="bloc bloc-thm">
<span class="bloc-label">Formule</span>

Droite passant par $A = (a,b)$ de vecteur directeur $\vec{v} = \begin{pmatrix} s \\ t \end{pmatrix}$ :

$$-t(x - a) + s(y - b) = 0$$

Le vecteur $\begin{pmatrix} -t \\ s \end{pmatrix}$ est **normal** à la droite. Réciproquement, si l'équation est $Ax + By + C = 0$, un vecteur directeur est $\begin{pmatrix} B \\ -A \end{pmatrix}$.

</div>

### Équation cartésienne d'un plan dans l'espace

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode : peut tomber au partiel</span>

**Étape 1** : calculer $\vec{w} = \vec{u} \wedge \vec{v}$ (vecteur normal)

**Étape 2** : l'équation est $\vec{AM} \cdot \vec{w} = 0$, soit :

$$\alpha(x-a) + \beta(y-b) + \gamma(z-c) = 0$$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple complet : CC1 2025</span>

$A = (1,6,5)$, $\vec{a} = \begin{pmatrix} -1 \\ -1 \\ -1 \end{pmatrix}$, $\vec{b} = \begin{pmatrix} -2 \\ -5 \\ -1 \end{pmatrix}$, $\vec{c} = \vec{a} \wedge \vec{b} = \begin{pmatrix} -4 \\ 1 \\ 3 \end{pmatrix}$

$$-4(x-1) + 1(y-6) + 3(z-5) = 0$$

$$\boxed{-4x + y + 3z = 17}$$

Vérif avec $A$ : $-4(1) + 6 + 3(5) = 17$ ✓

</div>

### Récapitulatif

<div class="bloc bloc-prop">
<span class="bloc-label">Paramétrique vs Cartésienne</span>

| | Paramétrique | Cartésienne |
|---|---|---|
| Sert à | trouver des points | tester l'appartenance |
| Droite (plan) | 1 param $\lambda$ | 1 éq |
| Droite (espace) | 1 param $\lambda$ | 2 éq |
| Plan (espace) | 2 params $\lambda, \mu$ | 1 éq |

</div>

---

## 1.7 : Cercle

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : peut tomber au partiel</span>

Cercle de centre $(a,b)$, rayon $r$ :

$$(x-a)^2 + (y-b)^2 = r^2$$

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Reconnaître un cercle</span>

Face à $x^2 + \alpha x + y^2 + \beta y + \gamma = 0$, **compléter les carrés** :

$$\left(x + \frac{\alpha}{2}\right)^2 + \left(y + \frac{\beta}{2}\right)^2 = \frac{\alpha^2 + \beta^2}{4} - \gamma$$

Si le membre de droite est $> 0$, c'est un cercle de centre $\left(-\frac{\alpha}{2}, -\frac{\beta}{2}\right)$ et rayon $\sqrt{\frac{\alpha^2+\beta^2}{4}-\gamma}$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$x^2 - 2x + y^2 - 4y - 4 = 0$

$(x-1)^2 - 1 + (y-2)^2 - 4 - 4 = 0 \implies (x-1)^2 + (y-2)^2 = 9$

Centre $(1,2)$, rayon $3$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : CC1 2025</span>

Cercle de centre $B = (3, -4)$ et de rayon $5$ :

$$(x-3)^2 + (y+4)^2 = 25$$

On développe : $x^2 - 6x + 9 + y^2 + 8y + 16 = 25$, soit $x^2 + y^2 - 6x + 8y = 0$.

Remarque : l'origine $(0,0)$ est sur ce cercle car $0 + 0 - 0 + 0 = 0$ ✓.

</div>

---

## 1.8 : Trigonométrie

### Le cercle trigonométrique

<div class="svg-container">
<svg viewBox="0 0 760 760" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:800px;display:block;margin:24px auto;background:rgba(255,255,255,0.02);border-radius:16px;padding:20px;">
  <defs>
    <style>
      text{font-family:Inter,system-ui,-apple-system,sans-serif}
      .axis-x{stroke:#22d3ee;stroke-width:2.5}
      .axis-y{stroke:#f472b6;stroke-width:2.5}
      .circle{stroke:#475569;stroke-width:2;fill:none}
      .radius-main{stroke:#94a3b8;stroke-width:1.5;opacity:.5}
      .radius-b{stroke:#818cf8;stroke-width:1.5;opacity:.6}
      .radius-c{stroke:#34d399;stroke-width:1.5;opacity:.6}
      .radius-d{stroke:#a78bfa;stroke-width:1.5;opacity:.6}
      .proj-x{stroke:#64748b;stroke-width:1.2;stroke-dasharray:5 4;opacity:0.7}
      .proj-y{stroke:#64748b;stroke-width:1.2;stroke-dasharray:5 4;opacity:0.7}
      .tick-x{stroke:#22d3ee;stroke-width:2}
      .tick-y{stroke:#f472b6;stroke-width:2}
      .tick-soft-x{stroke:#22d3ee;stroke-width:1.5;opacity:.7}
      .tick-soft-y{stroke:#f472b6;stroke-width:1.5;opacity:.7}
      .pt-main{fill:#f8fafc}
      .pt-b{fill:#818cf8}
      .pt-c{fill:#34d399}
      .pt-d{fill:#a78bfa}
      .axis-label-x{fill:#22d3ee;font-size:18px;font-weight:900}
      .axis-label-y{fill:#f472b6;font-size:18px;font-weight:900}
      .val-x{fill:#22d3ee;font-size:15px;font-weight:800;paint-order:stroke;stroke:#0f172a;stroke-width:4px}
      .val-y{fill:#f472b6;font-size:15px;font-weight:800;paint-order:stroke;stroke:#0f172a;stroke-width:4px}
      .val-main-x{fill:#22d3ee;font-size:15px;font-weight:800;paint-order:stroke;stroke:#0f172a;stroke-width:4px}
      .val-main-y{fill:#f472b6;font-size:15px;font-weight:800;paint-order:stroke;stroke:#0f172a;stroke-width:4px}
      .angle-main{fill:#f8fafc;font-size:17px;font-weight:900}
      .angle-b{fill:#818cf8;font-size:17px;font-weight:850}
      .angle-c{fill:#34d399;font-size:17px;font-weight:850}
      .angle-d{fill:#a78bfa;font-size:17px;font-weight:850}
      .theta{fill:#e8c840;font-size:18px;font-weight:900}
      .origin{fill:#a8b4c8;font-size:14px}
    </style>
  </defs>
  <rect x="0" y="0" width="760" height="760" rx="18" fill="none"/>
  <line x1="70" y1="380" x2="690" y2="380" class="axis-x"/>
  <line x1="380" y1="70" x2="380" y2="690" class="axis-y"/>
  <circle cx="380" cy="380" r="240" class="circle"/>
  <line x1="620" y1="374" x2="620" y2="386" class="tick-x"/>
  <text x="614" y="415" class="val-main-x">1</text>
  <line x1="140" y1="374" x2="140" y2="386" class="tick-x"/>
  <text x="124" y="415" class="val-main-x">−1</text>
  <line x1="374" y1="140" x2="386" y2="140" class="tick-y"/>
  <text x="400" y="145" class="val-main-y">1</text>
  <line x1="374" y1="620" x2="386" y2="620" class="tick-y"/>
  <text x="400" y="625" class="val-main-y">−1</text>
  <line x1="500" y1="376" x2="500" y2="384" class="tick-soft-x"/>
  <line x1="550" y1="376" x2="550" y2="384" class="tick-soft-x"/>
  <line x1="260" y1="376" x2="260" y2="384" class="tick-soft-x"/>
  <line x1="210.29" y1="376" x2="210.29" y2="384" class="tick-soft-x"/>
  <line x1="376" y1="260" x2="384" y2="260" class="tick-soft-y"/>
  <line x1="376" y1="210.29" x2="384" y2="210.29" class="tick-soft-y"/>
  <line x1="376" y1="500" x2="384" y2="500" class="tick-soft-y"/>
  <line x1="376" y1="549.71" x2="384" y2="549.71" class="tick-soft-y"/>
  <text x="646" y="410" class="axis-label-x">x = cos(θ)</text>
  <text x="400" y="58" class="axis-label-y">y = sin(θ)</text>
  <line x1="587.85" y1="260" x2="587.85" y2="380" class="proj-x"/>
  <line x1="587.85" y1="260" x2="380" y2="260" class="proj-y"/>
  <line x1="549.71" y1="210.29" x2="549.71" y2="380" class="proj-x"/>
  <line x1="549.71" y1="210.29" x2="380" y2="210.29" class="proj-y"/>
  <line x1="500" y1="172.15" x2="500" y2="380" class="proj-x"/>
  <line x1="500" y1="172.15" x2="380" y2="172.15" class="proj-y"/>
  <line x1="260" y1="172.15" x2="260" y2="380" class="proj-x"/>
  <line x1="260" y1="172.15" x2="380" y2="172.15" class="proj-y"/>
  <line x1="210.29" y1="210.29" x2="210.29" y2="380" class="proj-x"/>
  <line x1="210.29" y1="210.29" x2="380" y2="210.29" class="proj-y"/>
  <line x1="172.15" y1="260" x2="172.15" y2="380" class="proj-x"/>
  <line x1="172.15" y1="260" x2="380" y2="260" class="proj-y"/>
  <line x1="172.15" y1="500" x2="172.15" y2="380" class="proj-x"/>
  <line x1="172.15" y1="500" x2="380" y2="500" class="proj-y"/>
  <line x1="210.29" y1="549.71" x2="210.29" y2="380" class="proj-x"/>
  <line x1="210.29" y1="549.71" x2="380" y2="549.71" class="proj-y"/>
  <line x1="260" y1="587.85" x2="260" y2="380" class="proj-x"/>
  <line x1="260" y1="587.85" x2="380" y2="587.85" class="proj-y"/>
  <line x1="500" y1="587.85" x2="500" y2="380" class="proj-x"/>
  <line x1="500" y1="587.85" x2="380" y2="587.85" class="proj-y"/>
  <line x1="549.71" y1="549.71" x2="549.71" y2="380" class="proj-x"/>
  <line x1="549.71" y1="549.71" x2="380" y2="549.71" class="proj-y"/>
  <line x1="587.85" y1="500" x2="587.85" y2="380" class="proj-x"/>
  <line x1="587.85" y1="500" x2="380" y2="500" class="proj-y"/>
  <line x1="380" y1="380" x2="620" y2="380" class="radius-main"/>
  <line x1="380" y1="380" x2="587.85" y2="260" class="radius-b"/>
  <line x1="380" y1="380" x2="549.71" y2="210.29" class="radius-c"/>
  <line x1="380" y1="380" x2="500" y2="172.15" class="radius-d"/>
  <line x1="380" y1="380" x2="380" y2="140" class="radius-main"/>
  <line x1="380" y1="380" x2="260" y2="172.15" class="radius-d"/>
  <line x1="380" y1="380" x2="210.29" y2="210.29" class="radius-c"/>
  <line x1="380" y1="380" x2="172.15" y2="260" class="radius-b"/>
  <line x1="380" y1="380" x2="140" y2="380" class="radius-main"/>
  <line x1="380" y1="380" x2="172.15" y2="500" class="radius-b"/>
  <line x1="380" y1="380" x2="210.29" y2="549.71" class="radius-c"/>
  <line x1="380" y1="380" x2="260" y2="587.85" class="radius-d"/>
  <line x1="380" y1="380" x2="380" y2="620" class="radius-main"/>
  <line x1="380" y1="380" x2="500" y2="587.85" class="radius-d"/>
  <line x1="380" y1="380" x2="549.71" y2="549.71" class="radius-c"/>
  <line x1="380" y1="380" x2="587.85" y2="500" class="radius-b"/>
  <circle cx="620" cy="380" r="6.5" class="pt-main"/>
  <circle cx="587.85" cy="260" r="6.5" class="pt-b"/>
  <circle cx="549.71" cy="210.29" r="6.5" class="pt-c"/>
  <circle cx="500" cy="172.15" r="6.5" class="pt-d"/>
  <circle cx="380" cy="140" r="6.5" class="pt-main"/>
  <circle cx="260" cy="172.15" r="6.5" class="pt-d"/>
  <circle cx="210.29" cy="210.29" r="6.5" class="pt-c"/>
  <circle cx="172.15" cy="260" r="6.5" class="pt-b"/>
  <circle cx="140" cy="380" r="6.5" class="pt-main"/>
  <circle cx="172.15" cy="500" r="6.5" class="pt-b"/>
  <circle cx="210.29" cy="549.71" r="6.5" class="pt-c"/>
  <circle cx="260" cy="587.85" r="6.5" class="pt-d"/>
  <circle cx="380" cy="620" r="6.5" class="pt-main"/>
  <circle cx="500" cy="587.85" r="6.5" class="pt-d"/>
  <circle cx="549.71" cy="549.71" r="6.5" class="pt-c"/>
  <circle cx="587.85" cy="500" r="6.5" class="pt-b"/>
  <text x="632" y="375" class="angle-main">0</text>
  <text x="605" y="245" class="angle-b">π/6</text>
  <text x="565" y="195" class="angle-c">π/4</text>
  <text x="515" y="155" class="angle-d">π/3</text>
  <text x="395" y="115" class="angle-main">π/2</text>
  <text x="245" y="155" class="angle-d" text-anchor="end">2π/3</text>
  <text x="195" y="195" class="angle-c" text-anchor="end">3π/4</text>
  <text x="155" y="245" class="angle-b" text-anchor="end">5π/6</text>
  <text x="120" y="375" class="angle-main" text-anchor="end">π</text>
  <text x="155" y="525" class="angle-b" text-anchor="end">7π/6</text>
  <text x="195" y="575" class="angle-c" text-anchor="end">5π/4</text>
  <text x="245" y="615" class="angle-d" text-anchor="end">4π/3</text>
  <text x="395" y="655" class="angle-main">3π/2</text>
  <text x="515" y="615" class="angle-d">5π/3</text>
  <text x="565" y="575" class="angle-c">7π/4</text>
  <text x="605" y="525" class="angle-b">11π/6</text>
  <text x="500" y="405" class="val-x" text-anchor="middle">1/2</text>
  <text x="549.71" y="425" class="val-x" text-anchor="middle">√2/2</text>
  <text x="587.85" y="405" class="val-x" text-anchor="middle">√3/2</text>
  <text x="260" y="405" class="val-x" text-anchor="middle">−1/2</text>
  <text x="210.29" y="425" class="val-x" text-anchor="middle">−√2/2</text>
  <text x="172.15" y="405" class="val-x" text-anchor="middle">−√3/2</text>
  <text x="370" y="265" class="val-y" text-anchor="end">1/2</text>
  <text x="390" y="215" class="val-y" text-anchor="start">√2/2</text>
  <text x="370" y="177" class="val-y" text-anchor="end">√3/2</text>
  <text x="370" y="505" class="val-y" text-anchor="end">−1/2</text>
  <text x="390" y="555" class="val-y" text-anchor="start">−√2/2</text>
  <text x="370" y="593" class="val-y" text-anchor="end">−√3/2</text>
  <path d="M 428 380 A 48 48 0 0 0 404 338" fill="none" stroke="#e8c840" stroke-width="2.2"/>
  <text x="435" y="352" class="theta">θ</text>
  <circle cx="380" cy="380" r="4" fill="#a8b4c8"/>
  <text x="388" y="396" class="origin">O</text>
</svg>
</div>

### Valeurs remarquables

<div class="bloc bloc-hors">
<span class="bloc-label">Rappel : à connaître par coeur</span>

| $\theta$ | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\pi$ |
|---|---|---|---|---|---|---|
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ |
| $\sin\theta$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ |

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Astuce</span>

Pour $\sin$ sur $[0, \pi/2]$ : la suite $\frac{\sqrt{0}}{2}, \frac{\sqrt{1}}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, \frac{\sqrt{4}}{2}$, soit $0, \frac{1}{2}, \frac{\sqrt{2}}{2}, \frac{\sqrt{3}}{2}, 1$. Pour $\cos$ : même suite dans l'**ordre inverse**.

</div>

### Formules

<div class="bloc bloc-thm">
<span class="bloc-label">Identité fondamentale</span>

$$\cos^2\theta + \sin^2\theta = 1$$

</div>

<div class="bloc bloc-hors">
<span class="bloc-label">Formules d'addition</span>

$$\cos(a+b) = \cos a \cos b - \sin a \sin b$$

$$\sin(a+b) = \sin a \cos b + \cos a \sin b$$

</div>

<div class="bloc bloc-hors">
<span class="bloc-label">Duplication</span>

$$\cos(2a) = 2\cos^2 a - 1 = 1 - 2\sin^2 a$$

$$\sin(2a) = 2\sin a \cos a$$

</div>

<div class="bloc bloc-hors">
<span class="bloc-label">Linéarisation (utile pour les intégrales)</span>

<details>
<summary>Développer</summary>
<div class="detail-content">

$$\cos^2 a = \frac{1 + \cos(2a)}{2}$$

$$\sin^2 a = \frac{1 - \cos(2a)}{2}$$

$$\cos a \cos b = \frac{1}{2}\bigl[\cos(a-b) + \cos(a+b)\bigr]$$

$$\sin a \cos b = \frac{1}{2}\bigl[\sin(a+b) + \sin(a-b)\bigr]$$

</div>
</details>

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Symétries</span>

- $\cos(-x) = \cos(x)$ (paire), $\sin(-x) = -\sin(x)$ (impaire)
- $\cos(x + \pi) = -\cos(x)$, $\sin(x + \pi) = -\sin(x)$
- $\cos(\pi/2 - x) = \sin(x)$, $\sin(\pi/2 - x) = \cos(x)$

</div>

---

## 1.9 : Transformations du plan

<div class="bloc bloc-def">
<span class="bloc-label">Transformation linéaire</span>

$T$ est linéaire si $T(\lambda\vec{u} + \vec{v}) = \lambda T(\vec{u}) + T(\vec{v})$.

</div>

| Transformation | Linéaire ? |
|---|---|
| Translation par $\vec{u}$ | Non (affine) |
| Homothétie de rapport $a$ | Oui |
| Rotation d'angle $\theta$ | Oui |
| Symétrie / Projection | Oui |

<div class="bloc bloc-hors">
<span class="bloc-label">Pour aller plus loin</span>

La rotation s'exprime avec les complexes (chap. 2) : multiplier par $e^{i\theta}$ = tourner. Les matrices de rotation : chap. 9.

</div>

---

## Résumé du chapitre

<div class="bloc bloc-thm">
<span class="bloc-label">L'essentiel</span>

**Produit scalaire** : $\vec{u} \cdot \vec{v} = xx' + yy' + zz'$. Nombre réel. Nul = orthogonal.

**Produit vectoriel** : $\vec{u} \wedge \vec{v}$ = vecteur orthogonal. Nul = colinéaires.

**Équation d'un plan** : $\vec{AM} \cdot (\vec{u} \wedge \vec{v}) = 0$.

**Cercle** : $(x-a)^2 + (y-b)^2 = r^2$.

**Trigo** : valeurs et formules d'addition à connaître.

</div>
