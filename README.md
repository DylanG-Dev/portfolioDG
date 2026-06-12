Portfolio Dylan Gamet Portfolio personnel réalisé dans le cadre de mon BTS SIO option SLAM (ORT Lyon), présentant mon parcours, mes compétences et mes réalisations professionnelles et académiques.

Application web single-page développée en React + TypeScript, comprenant :

Accueil : présentation avec animation de texte (effet machine à écrire)

À propos : parcours, stages (Infocosme, GTD au Centre Spatial Guyanais) et formation

Compétences : carrousels interactifs des technologies et outils maitrisés

Projets : tableau de synthèse des réalisations professionnelles (épreuve E5)

Veille technologique : suivi de l'actualité autour de l'intelligence artificielle

CV : consultable directement depuis la barre de navigation

Framework: React 18, TypeScript

Build : Vite

UI : React-Bootstrap, Bootstrap 5, react-multi-carousel

Icônes : Font Awesome

Installation et lancement

Cloner le repository
git clone https://github.com/DylanG-Dev/[nom-du-repo].git

Se déplacer dans le répertoire du projet
cd [nom-du-repo]

Installer les dépendances
npm install

Lancer le serveur de développement
npm run dev
Le site est ensuite accessible sur http://localhost:5173.

Build de production
npm run build 

Il faut d'abord configurer le fichier vite.ts avec l'url souhaitée

Note : le projet est configuré avec une base /P2026/GAMET/ dans vite.config.ts pour le déploiement en sous-répertoire. Pour un déploiement à la racine, adapter l'option base.

Structure du projet src/ ├── components/ │ ├── NavBar.tsx # Navigation, détection du scroll, modal CV │ ├── Banner.tsx # Bannière d'accueil avec effet machine à écrire │ ├── About.tsx # Présentation et parcours │ ├── Skills.tsx # Carrousels compétences et outils │ ├── Projects.tsx # Tableau de synthèse E5 │ ├── VeilleTechno.tsx # Veille technologique │ └── Footer.tsx # Contact ├── assets/ # Images, polices ├── App.tsx # Composition des sections └── main.tsx # Point d'entrée React

Améliorations prévues