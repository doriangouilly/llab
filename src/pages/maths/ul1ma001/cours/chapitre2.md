---
layout: ../../../../layouts/CoursLayout.astro
title: "Complexes et polynômes"
ue: "UL1MA001"
color: "m1"
chapter: 2
totalChapters: 9
prevChapter: "/maths/ul1ma001/cours/chapitre1"
nextChapter: "/maths/ul1ma001/cours/chapitre3"
---

# Chapitre 2 : Complexes et polynômes

Ce chapitre construit l'ensemble $\mathbb{C}$ des nombres complexes, puis étudie les polynômes et leurs racines. Les complexes sont un outil puissant qui simplifie énormément la trigonométrie, les équations du second degré, et la factorisation de polynômes.

---

## 2.1 : Le plan complexe

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

On construit $\mathbb{C}$ en ajoutant à $\mathbb{R}$ un nombre $i$ vérifiant $i^2 = -1$.

Tout nombre complexe $z$ s'écrit de manière unique $z = x + iy$ avec $x, y \in \mathbb{R}$. C'est la **forme cartésienne** de $z$.

- $x = \Re(z)$ est la **partie réelle**
- $y = \Im(z)$ est la **partie imaginaire**

On identifie $\mathbb{C}$ avec $\mathbb{R}^2$ : le complexe $x + iy$ correspond au point $(x, y)$ du plan.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;display:block;margin:0 auto;">
<defs><style>text{font-family:Inter,system-ui,sans-serif}</style></defs>
<line x1="40" y1="280" x2="460" y2="280" stroke="#2a3650" stroke-width="1.5"/>
<line x1="80" y1="340" x2="80" y2="40" stroke="#2a3650" stroke-width="1.5"/>
<text x="450" y="300" fill="#687890" font-size="15" font-weight="600">Re</text>
<text x="90" y="52" fill="#687890" font-size="15" font-weight="600">Im</text>
<text x="62" y="298" fill="#546078" font-size="13">O</text>
<line x1="340" y1="275" x2="340" y2="285" stroke="#3a4a60" stroke-width="1.5"/>
<text x="332" y="310" fill="#7a8a9e" font-size="13">x</text>
<line x1="75" y1="110" x2="85" y2="110" stroke="#3a4a60" stroke-width="1.5"/>
<text x="48" y="115" fill="#7a8a9e" font-size="13">y</text>
<circle cx="340" cy="110" r="7" fill="#5b9cf6"/>
<line x1="80" y1="280" x2="340" y2="110" stroke="#5b9cf6" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="340" y1="110" x2="340" y2="280" stroke="#c084fc" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="340" y1="110" x2="80" y2="110" stroke="#4ecb8d" stroke-width="1.2" stroke-dasharray="4,3"/>
<text x="350" y="105" fill="#5b9cf6" font-size="16" font-weight="700">z = x + iy</text>
<text x="345" y="200" fill="#c084fc" font-size="13">y = Im(z)</text>
<text x="170" y="104" fill="#4ecb8d" font-size="13">x = Re(z)</text>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Le plan complexe : $z = x + iy$ est repéré par ses projections sur l'axe réel (vert) et l'axe imaginaire (violet).</p>
</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Opérations</span>

Pour $z_1 = x_1 + iy_1$ et $z_2 = x_2 + iy_2$ :

$$z_1 + z_2 = (x_1 + x_2) + i(y_1 + y_2)$$

$$z_1 \cdot z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + y_1 x_2)$$

En pratique, on développe comme un produit classique et on remplace $i^2$ par $-1$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$(3 + 5i)(4 + 9i) = 12 + 27i + 20i + 45i^2 = 12 + 47i - 45 = -33 + 47i$

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Attention</span>

Dans $\mathbb{C}$, on **ne peut pas** :
- comparer deux complexes ($z_1 \leq z_2$ n'a aucun sens)
- écrire $\sqrt{z}$ ou $\ln(z)$ (pas défini dans le cours)

</div>

---

## 2.2 : Conjugué et inverse

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Le **conjugué** de $z = x + iy$ est $\bar{z} = x - iy$.

Géométriquement, c'est le **symétrique** de $z$ par rapport à l'axe réel.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
<defs><style>text{font-family:Inter,system-ui,sans-serif}</style></defs>
<line x1="40" y1="180" x2="400" y2="180" stroke="#2a3650" stroke-width="1.5"/>
<line x1="80" y1="340" x2="80" y2="20" stroke="#2a3650" stroke-width="1.5"/>
<text x="390" y="200" fill="#687890" font-size="14" font-weight="600">Re</text>
<text x="90" y="32" fill="#687890" font-size="14" font-weight="600">Im</text>
<circle cx="300" cy="80" r="7" fill="#5b9cf6"/>
<text x="312" y="76" fill="#5b9cf6" font-size="15" font-weight="700">z = a + ib</text>
<circle cx="300" cy="280" r="7" fill="#f472b6"/>
<text x="312" y="296" fill="#f472b6" font-size="15" font-weight="700">z̄ = a − ib</text>
<line x1="300" y1="80" x2="300" y2="280" stroke="#e8c840" stroke-width="1.5" stroke-dasharray="5,4"/>
<line x1="300" y1="80" x2="80" y2="80" stroke="#546078" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>
<line x1="300" y1="280" x2="80" y2="280" stroke="#546078" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>
<line x1="300" y1="80" x2="300" y2="180" stroke="#546078" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>
<text x="48" y="85" fill="#4ecb8d" font-size="14" font-weight="600">b</text>
<text x="40" y="285" fill="#f472b6" font-size="14" font-weight="600">−b</text>
<text x="292" y="200" fill="#7a8a9e" font-size="14">a</text>
<text x="200" y="175" fill="#e8c840" font-size="12">symétrie / axe réel</text>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Le conjugué $\bar{z}$ est le symétrique de $z$ par rapport à l'axe réel. On inverse le signe de la partie imaginaire.</p>
</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés du conjugué</span>

- $z \in \mathbb{R} \iff \bar{z} = z$
- $z \in i\mathbb{R}$ (imaginaire pur) $\iff \bar{z} = -z$
- $\overline{z_1 + z_2} = \bar{z_1} + \bar{z_2}$
- $\overline{z_1 \cdot z_2} = \bar{z_1} \cdot \bar{z_2}$
- $\Re(z) = \frac{z + \bar{z}}{2}$, $\Im(z) = \frac{z - \bar{z}}{2i}$

</div>

<div class="bloc bloc-def">
<span class="bloc-label">Inverse</span>

Pour $z = x + iy \neq 0$, l'inverse est :

$$z^{-1} = \frac{\bar{z}}{|z|^2} = \frac{x - iy}{x^2 + y^2}$$

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode : diviser deux complexes</span>

Pour calculer $\frac{z_1}{z_2}$, multiplier numérateur et dénominateur par $\bar{z_2}$ :

$$\frac{z_1}{z_2} = \frac{z_1 \cdot \bar{z_2}}{z_2 \cdot \bar{z_2}} = \frac{z_1 \cdot \bar{z_2}}{|z_2|^2}$$

Le dénominateur devient un réel, ce qui permet de séparer parties réelle et imaginaire.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$$\frac{1+2i}{1-i} = \frac{(1+2i)(1+i)}{(1-i)(1+i)} = \frac{1+i+2i+2i^2}{1 - i^2} = \frac{1 + 3i - 2}{1+1} = \frac{-1+3i}{2}$$

Donc $\frac{1+2i}{1-i} = -\frac{1}{2} + \frac{3}{2}i$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : inverse de i</span>

$i^{-1} = \frac{\bar{i}}{|i|^2} = \frac{-i}{1} = -i$.

Vérification : $i \cdot (-i) = -i^2 = -(-1) = 1$ ✓

</div>

---

## 2.3 : Module

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Le **module** de $z = x + iy$ est le réel positif :

$$|z| = \sqrt{x^2 + y^2}$$

C'est la **distance** du point $z$ à l'origine. On a aussi $|z|^2 = z \cdot \bar{z}$.

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés du module</span>

- $|z| = 0 \iff z = 0$
- $|\Re(z)| \leq |z|$ et $|\Im(z)| \leq |z|$
- **Produit** : $|z_1 \cdot z_2| = |z_1| \cdot |z_2|$
- **Inégalité triangulaire** : $|z_1 + z_2| \leq |z_1| + |z_2|$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$z = 3 - 4i$. Module : $|z| = \sqrt{9 + 16} = \sqrt{25} = 5$.

Conjugué : $\bar{z} = 3 + 4i$. Vérification : $z \cdot \bar{z} = (3-4i)(3+4i) = 9 + 16 = 25 = |z|^2$ ✓

</div>

---

## 2.4 : Forme trigonométrique

C'est la section la plus importante du chapitre. Elle connecte les complexes à la géométrie du cercle.

<div class="bloc bloc-def">
<span class="bloc-label">Notation exponentielle</span>

Pour tout $\theta \in \mathbb{R}$, on pose :

$$e^{i\theta} = \cos\theta + i\sin\theta$$

Les nombres $e^{i\theta}$ sont exactement les complexes de **module 1** (ils vivent sur le cercle trigonométrique).

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 540 500" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;background:rgba(255,255,255,0.01);border-radius:12px;padding:10px;">
<defs><style>text{font-family:Inter,system-ui,sans-serif}</style></defs>
<line x1="40" y1="250" x2="500" y2="250" stroke="#2a3650" stroke-width="1.5"/>
<line x1="270" y1="30" x2="270" y2="470" stroke="#2a3650" stroke-width="1.5"/>
<text x="490" y="270" fill="#687890" font-size="15" font-weight="600">Re</text>
<text x="280" y="42" fill="#687890" font-size="15" font-weight="600">Im</text>
<circle cx="270" cy="250" r="180" fill="none" stroke="#3a5080" stroke-width="2"/>
<line x1="450" y1="245" x2="450" y2="255" stroke="#3a4a60" stroke-width="1.5"/>
<text x="444" y="278" fill="#7a8a9e" font-size="14">1</text>
<line x1="90" y1="245" x2="90" y2="255" stroke="#3a4a60" stroke-width="1.5"/>
<text x="78" y="278" fill="#7a8a9e" font-size="14">-1</text>
<line x1="265" y1="70" x2="275" y2="70" stroke="#3a4a60" stroke-width="1.5"/>
<text x="280" y="76" fill="#7a8a9e" font-size="14">i</text>
<line x1="265" y1="430" x2="275" y2="430" stroke="#3a4a60" stroke-width="1.5"/>
<text x="278" y="436" fill="#7a8a9e" font-size="14">-i</text>
<circle cx="270" cy="250" r="3" fill="#a8b4c8"/>
<text x="254" y="270" fill="#a8b4c8" font-size="13">O</text>
<line x1="270" y1="250" x2="420" y2="120" stroke="#5b9cf6" stroke-width="2.5"/>
<circle cx="420" cy="120" r="8" fill="#5b9cf6"/>
<text x="432" y="110" fill="#5b9cf6" font-size="16" font-weight="700">z = ρ·e^(iθ)</text>
<line x1="420" y1="120" x2="420" y2="250" stroke="#c084fc" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="420" y1="120" x2="270" y2="120" stroke="#4ecb8d" stroke-width="1.2" stroke-dasharray="4,3"/>
<text x="426" y="195" fill="#c084fc" font-size="13">ρ sin θ</text>
<text x="310" y="115" fill="#4ecb8d" font-size="13">ρ cos θ</text>
<text x="318" y="178" fill="#5b9cf6" font-size="15" font-weight="600">ρ = |z|</text>
<path d="M 310,250 A 40,40 0 0,0 298,222" fill="none" stroke="#e8c840" stroke-width="2.5"/>
<text x="318" y="232" fill="#e8c840" font-size="16" font-weight="700">θ</text>
<line x1="270" y1="250" x2="416" y2="168" stroke="#f6845b" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
<circle cx="416" cy="168" r="5" fill="#f6845b"/>
<text x="424" y="163" fill="#f6845b" font-size="12" font-weight="600">e^(iθ)</text>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Forme trigonométrique : $z = \rho e^{i\theta}$ avec $\rho = |z|$ (longueur) et $\theta = \arg(z)$ (angle). Le point orange $e^{i\theta}$ est sur le cercle unité.</p>
</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Forme trigonométrique : peut tomber au partiel</span>

Tout complexe $z \neq 0$ s'écrit de manière unique :

$$z = \rho e^{i\theta} \qquad \text{avec } \rho = |z| > 0,\; \theta = \arg(z)$$

On a alors $\Re(z) = \rho\cos\theta$ et $\Im(z) = \rho\sin\theta$.

L'argument $\theta$ est défini **modulo $2\pi$** : si $\theta$ est un argument, alors $\theta + 2k\pi$ ($k \in \mathbb{Z}$) aussi.

</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Formules d'Euler</span>

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2} \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

</div>

### Produit en forme trigonométrique

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : indispensable</span>

$$(\rho_1 e^{i\theta_1})(\rho_2 e^{i\theta_2}) = \rho_1\rho_2\, e^{i(\theta_1 + \theta_2)}$$

On **multiplie** les modules et on **additionne** les arguments.

</div>

<div class="bloc bloc-rem">
<span class="bloc-label">Interprétation géométrique</span>

Multiplier par $re^{i\theta}$ revient à faire une homothétie de rapport $r$ suivie d'une rotation d'angle $\theta$. En particulier, multiplier par $e^{i\theta}$ (module 1) = **rotation pure** d'angle $\theta$.

</div>

### Formule de Moivre

<div class="bloc bloc-thm">
<span class="bloc-label">Formule de Moivre</span>

Pour tout $\theta \in \mathbb{R}$ et $n \in \mathbb{Z}$ :

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

Car $(e^{i\theta})^n = e^{in\theta}$.

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Application : retrouver la trigo</span>

Plus besoin d'apprendre les formules de trigo par coeur ! On écrit :

$$\cos(a+b) = \Re(e^{i(a+b)}) = \Re(e^{ia} \cdot e^{ib})$$

$$= \Re\bigl[(\cos a + i\sin a)(\cos b + i\sin b)\bigr]$$

$$= \cos a\cos b - \sin a\sin b$$

La partie imaginaire donne $\sin(a+b)$.

</div>

### Passage cartésien / trigonométrique

| De cartésien vers trigo | De trigo vers cartésien |
|---|---|
| Si $z = x + iy \neq 0$, alors $\rho = \sqrt{x^2 + y^2}$ | $x = \rho \cos\theta$ |
| Puis $\cos\theta = \frac{x}{\rho}$ et $\sin\theta = \frac{y}{\rho}$ | $y = \rho \sin\theta$ |
| $\theta$ : reconnaître le bon argument selon le quadrant |  |

<div class="bloc bloc-warn">
<span class="bloc-label">Attention</span>

La forme trigonométrique $z=\rho e^{i\theta}$ s'écrit pour $z\neq 0$, avec $\rho>0$.
Pour $z=0$, on a bien $|z|=0$, mais l'argument n'est pas défini.

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode pour trouver l'argument</span>

**1.** Calculer le module $\rho = |z|$

**2.** Diviser par le module : $\frac{z}{\rho} = \cos\theta + i\sin\theta$

**3.** Reconnaître les valeurs remarquables de $\cos\theta$ et $\sin\theta$ (voir le cercle trigo du chapitre 1)

Ne pas essayer d'utiliser une formule avec $\arctan$ : faire un **dessin** est toujours plus sûr.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

Soit $z = 1 + i\sqrt{3}$. On cherche sa forme trigonométrique.

**Module** : $|z| = \sqrt{1 + 3} = 2$

**Argument** : $\frac{z}{|z|} = \frac{1}{2} + i\frac{\sqrt{3}}{2}$. On reconnaît $\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}$.

Donc $z = 2e^{i\pi/3}$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : forme trigo de -2i</span>

$z = -2i$. Module : $|z| = 2$.

$\frac{z}{|z|} = -i = \cos\left(-\frac{\pi}{2}\right) + i\sin\left(-\frac{\pi}{2}\right)$.

Donc $z = 2e^{-i\pi/2}$.

</div>

---

## 2.5 : Exponentielle complexe

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Pour $z = x + iy$ avec $x, y \in \mathbb{R}$ :

$$e^z = e^x \cdot e^{iy} = e^x(\cos y + i\sin y)$$

Le module de $e^z$ est $e^x$ et son argument est $y$. En particulier, $e^z \neq 0$ pour tout $z$.

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriété</span>

$$e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}$$

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

$e^{1 + i\pi} = e^1 \cdot e^{i\pi} = e \cdot (-1) = -e$

$e^{2 - i\pi/2} = e^2 \cdot e^{-i\pi/2} = e^2(\cos(-\pi/2) + i\sin(-\pi/2)) = -ie^2$

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Résoudre e^z = c</span>

Pour $c \neq 0$, on écrit $c = |c|e^{i\theta}$. L'équation $e^{x+iy} = c$ donne :

$$e^x = |c| \implies x = \ln|c| \qquad y \equiv \theta \pmod{2\pi}$$

L'équation a une **infinité** de solutions (une pour chaque valeur de $y$ modulo $2\pi$).

</div>

---

## 2.6 : Racines n-ièmes de l'unité

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Les **racines n-ièmes de l'unité** sont les solutions de $z^n = 1$. Il y en a exactement $n$ :

$$\omega_k = e^{i\frac{2k\pi}{n}} \qquad k = 0, 1, \ldots, n-1$$

Elles forment un **polygone régulier** à $n$ côtés inscrit dans le cercle trigonométrique.

</div>

<div class="svg-container" style="margin:32px 0;">
<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;background:rgba(255,255,255,0.01);border-radius:12px;">
<defs><style>text{font-family:Inter,system-ui,sans-serif}</style></defs>
<line x1="30" y1="210" x2="390" y2="210" stroke="#1e2638" stroke-width="1"/>
<line x1="210" y1="30" x2="210" y2="390" stroke="#1e2638" stroke-width="1"/>
<circle cx="210" cy="210" r="150" fill="none" stroke="#2a3a58" stroke-width="1.5"/>
<text x="210" y="404" fill="#546078" font-size="12" text-anchor="middle">Racines 6-ièmes de l'unité</text>
<circle cx="360" cy="210" r="7" fill="#f6845b"/>
<text x="370" y="206" fill="#f6845b" font-size="13" font-weight="700">ω₀ = 1</text>
<circle cx="285" cy="80" r="7" fill="#5b9cf6"/>
<text x="294" y="74" fill="#5b9cf6" font-size="12" font-weight="600">ω₁</text>
<circle cx="135" cy="80" r="7" fill="#4ecb8d"/>
<text x="108" y="74" fill="#4ecb8d" font-size="12" font-weight="600">ω₂</text>
<circle cx="60" cy="210" r="7" fill="#f472b6"/>
<text x="24" y="206" fill="#f472b6" font-size="13" font-weight="700">ω₃ = −1</text>
<circle cx="135" cy="340" r="7" fill="#c084fc"/>
<text x="108" y="358" fill="#c084fc" font-size="12" font-weight="600">ω₄</text>
<circle cx="285" cy="340" r="7" fill="#e8c840"/>
<text x="294" y="358" fill="#e8c840" font-size="12" font-weight="600">ω₅</text>
<polygon points="360,210 285,80 135,80 60,210 135,340 285,340" fill="none" stroke="#4a6090" stroke-width="1.2" stroke-dasharray="5,4"/>
<circle cx="210" cy="210" r="3" fill="#a8b4c8"/>
</svg>
<p style="text-align:center; color:#7a8a9e; font-size:0.88rem; margin-top:10px;">Les 6 racines 6-ièmes de l'unité forment un hexagone régulier inscrit dans le cercle unité.</p>
</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Propriétés</span>

- La somme de toutes les racines n-ièmes vaut $0$ : $\sum_{k=0}^{n-1} \omega_k = 0$
- Leur produit vaut $(-1)^{n-1}$
- Si $\omega = e^{i2\pi/n}$, alors les racines sont $1, \omega, \omega^2, \ldots, \omega^{n-1}$

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode : résoudre z^n = c</span>

Pour résoudre $z^n = c$ avec $c \neq 0$ :

**1.** Écrire $c = \rho e^{i\alpha}$ (forme trigonométrique)

**2.** On cherche $z = r e^{i\theta}$. L'équation donne $r^n = \rho$ et $n\theta \equiv \alpha \pmod{2\pi}$

**3.** Donc $r = \rho^{1/n}$ (racine n-ième réelle) et $\theta = \frac{\alpha + 2k\pi}{n}$, $k = 0, 1, \ldots, n-1$

Il y a exactement **n solutions**.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : résoudre z³ = 8</span>

$8 = 8 e^{i \cdot 0}$, donc $r = 8^{1/3} = 2$ et $\theta = \frac{0 + 2k\pi}{3}$.

Les 3 solutions sont : $z_0 = 2$, $z_1 = 2e^{i2\pi/3}$, $z_2 = 2e^{i4\pi/3}$.

En cartésien : $z_1 = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3}$ et $z_2 = -1 - i\sqrt{3}$.

</div>

---

## 2.7 : Racines carrées complexes

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode polaire (rapide)</span>

Les racines carrées de $re^{it}$ sont :

$$\pm\sqrt{r}\, e^{it/2}$$

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode cartésienne : peut tomber au partiel</span>

Pour trouver les racines carrées de $a + ib$, on cherche $x, y \in \mathbb{R}$ tels que $(x + iy)^2 = a + ib$.

On obtient le système :

$$x^2 - y^2 = a \qquad \text{(parties réelles)}$$

$$x^2 + y^2 = \sqrt{a^2 + b^2} \qquad \text{(modules)}$$

$$2xy = b \qquad \text{(parties imaginaires, pour le signe)}$$

Des deux premières :

$$x^2 = \frac{a + \sqrt{a^2 + b^2}}{2} \qquad y^2 = \frac{-a + \sqrt{a^2 + b^2}}{2}$$

La 3e équation fixe le signe conjoint de $x$ et $y$ : si $b > 0$, même signe ; si $b < 0$, signes opposés.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC3 2022)</span>

Racines carrées de $1 + i$.

$a = 1$, $b = 1$. Module : $\sqrt{1 + 1} = \sqrt{2}$.

$x^2 = \frac{1 + \sqrt{2}}{2}$, $y^2 = \frac{-1 + \sqrt{2}}{2}$

$2xy = 1 > 0$ donc $x$ et $y$ de même signe.

$$z = \pm\left(\sqrt{\frac{1+\sqrt{2}}{2}} + i\sqrt{\frac{\sqrt{2}-1}{2}}\right)$$

Vérification via la forme polaire : $1 + i = \sqrt{2}\,e^{i\pi/4}$, donc les racines sont $\sqrt[4]{2}\,e^{i\pi/8}$ et $-\sqrt[4]{2}\,e^{i\pi/8}$.

</div>

---

## 2.8 : Suites et sommes géométriques

<div class="bloc bloc-thm">
<span class="bloc-label">Somme géométrique</span>

Pour $z \in \mathbb{C} \setminus \{1\}$ :

$$1 + z + z^2 + \cdots + z^n = \frac{1 - z^{n+1}}{1 - z}$$

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Convergence</span>

La suite $(z^n)$ tend vers $0$ si et seulement si $|z| < 1$.

Dans ce cas, la "somme infinie" converge : $\sum_{k=0}^{+\infty} z^k = \frac{1}{1-z}$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple</span>

Calculons $S = 1 + e^{i\pi/3} + e^{i2\pi/3} + e^{i\pi} + e^{i4\pi/3} + e^{i5\pi/3}$.

C'est la somme des racines 6-ièmes de l'unité, donc par la formule avec $z = e^{i\pi/3}$ :

$$S = \frac{1 - (e^{i\pi/3})^6}{1 - e^{i\pi/3}} = \frac{1 - e^{i2\pi}}{1 - e^{i\pi/3}} = \frac{1 - 1}{1 - e^{i\pi/3}} = 0$$

</div>

---

## 2.9 : Trinômes dans C

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : peut tomber au partiel</span>

L'équation $az^2 + bz + c = 0$ avec $a, b, c \in \mathbb{C}$, $a \neq 0$ a pour discriminant $\Delta = b^2 - 4ac$.

Soient $\pm\delta$ les deux racines carrées de $\Delta$. Les solutions sont :

$$z = \frac{-b \pm \delta}{2a}$$

</div>

<div class="bloc bloc-warn">
<span class="bloc-label">Attention</span>

Dans $\mathbb{C}$, on ne parle **jamais** de signe du discriminant. On ne note **pas** $\sqrt{\Delta}$ (pas de racine carrée dans $\mathbb{C}$). On note $\delta$ tel que $\delta^2 = \Delta$.

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : type partiel (CC3 2025)</span>

Soit $Q = X^2 + X + 2$. Discriminant : $\Delta = 1 - 8 = -7$.

$\delta^2 = -7$, donc $\delta = i\sqrt{7}$.

$$z = \frac{-1 \pm i\sqrt{7}}{2}$$

</div>

---

## 2.10 : Polynômes

### Notation et degré

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

Un **polynôme** à coefficients dans $\mathbb{K}$ ($= \mathbb{R}$ ou $\mathbb{C}$) est une expression de la forme :

$$P = a_n X^n + a_{n-1} X^{n-1} + \cdots + a_1 X + a_0 = \sum_{k=0}^{n} a_k X^k$$

Le **degré** de $P$ est le plus grand $n$ tel que $a_n \neq 0$. Par convention, $\deg(0) = -\infty$.

$P$ est **unitaire** si $a_n = 1$.

</div>

<div class="bloc bloc-prop">
<span class="bloc-label">Degré et opérations</span>

- $\deg(P + Q) \leq \max(\deg P, \deg Q)$
- $\deg(PQ) = \deg P + \deg Q$
- $\deg(\lambda P) = \deg P$ si $\lambda \neq 0$

</div>

### Racines et factorisation

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

$\alpha \in \mathbb{C}$ est une **racine** de $P$ si $P(\alpha) = 0$.

</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Factorisation par une racine</span>

Si $\alpha$ est racine de $P$, alors il existe un polynôme $Q$ tel que :

$$P = (X - \alpha) Q$$

avec $\deg Q = \deg P - 1$.

</div>

<div class="bloc bloc-meth">
<span class="bloc-label">Méthode pour factoriser</span>

**1.** Tester des valeurs simples ($0$, $1$, $-1$, $2$...) pour trouver une racine $\alpha$

**2.** Diviser $P$ par $(X - \alpha)$ pour obtenir $Q$ (par identification des coefficients ou division euclidienne)

**3.** Recommencer avec $Q$ si possible

</div>

### Théorème de d'Alembert-Gauss

<div class="bloc bloc-thm">
<span class="bloc-label">Théorème fondamental</span>

Tout polynôme de degré $\geq 1$ à coefficients complexes admet **au moins une racine** dans $\mathbb{C}$.

**Conséquence** : tout polynôme de degré $n \geq 1$ se factorise complètement dans $\mathbb{C}$ :

$$P = a_n(X - \alpha_1)(X - \alpha_2)\cdots(X - \alpha_n)$$

Il y a exactement $n$ racines (comptées avec multiplicité).

</div>

### Relations coefficients-racines

<div class="bloc bloc-thm">
<span class="bloc-label">Formule : peut tomber au partiel</span>

Pour $P = aX^2 + bX + c$ de racines $\alpha$ et $\beta$ :

$$\alpha + \beta = -\frac{b}{a} \qquad \alpha\beta = \frac{c}{a}$$

Pour $P = X^n + a_{n-1}X^{n-1} + \cdots + a_0$ de racines $\alpha_1, \ldots, \alpha_n$ :

$$\sum_{j=1}^n \alpha_j = -a_{n-1} \qquad (-1)^n \prod_{j=1}^n \alpha_j = a_0$$

</div>

### Multiplicité

<div class="bloc bloc-def">
<span class="bloc-label">Définition</span>

$\alpha$ est racine de **multiplicité** $m$ de $P$ si $P(X) = (X-\alpha)^m Q(X)$ avec $Q(\alpha) \neq 0$.

</div>

<div class="bloc bloc-thm">
<span class="bloc-label">Caractérisation par les dérivées</span>

$\alpha$ est racine de multiplicité $m$ si et seulement si :

$$P(\alpha) = P'(\alpha) = \cdots = P^{(m-1)}(\alpha) = 0 \quad \text{et} \quad P^{(m)}(\alpha) \neq 0$$

</div>

---

## 2.11 : Exemples complets type partiel

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : CC3 2025, exercice 1</span>

Soit $P = X^4 - 2X^3 + X^2 + 2X - 2$.

**1. Tester des racines.** $P(1) = 1 - 2 + 1 + 2 - 2 = 0$ ✓ et $P(-1) = 1 + 2 + 1 - 2 - 2 = 0$ ✓

**2. Factoriser.** Puisque $1$ et $-1$ sont racines, $(X-1)(X+1) = X^2 - 1$ divise $P$.

On cherche $Q$ tel que $P = (X^2 - 1)Q$ avec $Q = X^2 + bX + c$.

$(X^2 - 1)(X^2 + bX + c) = X^4 + bX^3 + cX^2 - X^2 - bX - c$

$= X^4 + bX^3 + (c-1)X^2 - bX - c$

Identification avec $P$ :

$b = -2$, $c - 1 = 1 \Rightarrow c = 2$, $-b = 2$ ✓, $-c = -2$ ✓

Donc $Q = X^2 - 2X + 2$.

**3. Racines de Q.** $\Delta = 4 - 8 = -4$, $\delta = 2i$.

$$z = \frac{2 \pm 2i}{2} = 1 \pm i$$

**4. Factorisation complète** :

$$P = (X-1)(X+1)(X - 1 - i)(X - 1 + i)$$

**5. Relations coefficients-racines.** Somme : $1 + (-1) + (1+i) + (1-i) = 2$ ✓ (opposé du coeff de $X^3$). Produit : $1 \cdot (-1) \cdot (1+i)(1-i) = -1 \cdot 2 = -2$ ✓ (terme constant).

</div>

<div class="bloc bloc-ex">
<span class="bloc-label">Exemple : CC3 2024</span>

$P(X) = X^3 - X^2 - 4$. On vérifie $P(2) = 8 - 4 - 4 = 0$.

Donc $P = (X-2)(X^2 + aX + b)$.

$(X-2)(X^2 + aX + b) = X^3 + aX^2 + bX - 2X^2 - 2aX - 2b$

$= X^3 + (a-2)X^2 + (b-2a)X - 2b$

Identification : $a - 2 = -1 \Rightarrow a = 1$, $-2b = -4 \Rightarrow b = 2$, $b - 2a = 0$ ✓

Donc $Q = X^2 + X + 2$, discriminant $\Delta = 1 - 8 = -7$, racines $\frac{-1 \pm i\sqrt{7}}{2}$.

</div>

---

## Résumé du chapitre

<div class="bloc bloc-thm">
<span class="bloc-label">L'essentiel</span>

**Forme cartésienne** : $z = x + iy$. Conjugué : $\bar{z} = x - iy$. Module : $|z| = \sqrt{x^2+y^2}$.

**Forme trigonométrique** : $z = \rho e^{i\theta}$. On multiplie les modules, on additionne les arguments.

**Euler** : $\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}{2}$, $\sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$.

**Moivre** : $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$.

**Racines n-ièmes de l'unité** : $\omega_k = e^{i\frac{2k\pi}{n}}$, $k = 0, \ldots, n-1$.

**Somme géométrique** : $1 + z + \cdots + z^n = \frac{1-z^{n+1}}{1-z}$.

**Trinôme** : $\Delta = b^2 - 4ac$, trouver $\delta$ tel que $\delta^2 = \Delta$, solutions $\frac{-b \pm \delta}{2a}$.

**d'Alembert-Gauss** : tout polynôme de degré $n$ a exactement $n$ racines dans $\mathbb{C}$.

**Coefficients-racines** : $\alpha + \beta = -b/a$, $\alpha\beta = c/a$.

</div>
