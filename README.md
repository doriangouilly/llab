# LLab

LLab est une plateforme de révision développée pour les étudiants en première année de licence (L1). (ou plus bas) 

Le but est de proposer une alternative numérique aux polycopiés classiques : des fiches de cours synthétiques, des méthodes de résolution type partiel, et des graphiques interactifs pour visualiser les concepts.

**Note sur la licence :** Le projet est pour l'instant open-source afin de faciliter le lancement et de voir où le vent mène

---

## Avertissement pédagogique

Ce site est codé et maintenu par un étudiant sur son temps libre. C'est un outil de révision complémentaire qui ne remplace en aucun cas le reste. (et n'a pas pour vocation de l'être)

---

## Stack Technique

Le projet est conçu pour être rapide et léger (génération de site statique).

- **Framework principal :** Astro
- **Interactivité :** React
- **Visualisation mathématique :** Mafs
- **Rendu des équations :** KaTeX (via remark-math / rehype-katex)
- **Rédaction du contenu :** MDX

---

## Installation en local

Pour faire tourner le projet sur votre machine (pour tester, modifier le code ou ajouter du contenu) :

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/doriangouilly/llab.git](https://github.com/doriangouilly/llab.git)
   cd llab