# Task Manager

## Description

Task Manager est une application web moderne de gestion de tâches construite avec Next.js et Tailwind CSS. Elle offre une interface utilisateur intuitive pour gérer les tâches quotidiennes, avec des fonctionnalités de filtrage, de tri et de mise à jour en temps réel.

## Fonctionnalités principales

- Affichage des tâches avec leurs détails (titre, projet, horaire, participants)
- Filtrage par statut (All, Open, Closed, Archived)
- Marquage des tâches comme complétées
- Ajout de nouvelles tâches via un modal
- Navigation entre différentes sections (Today's Task, Messages, Last Activity)
- Ordonnancement des tâches par glisser-déposer
- Design responsive et animations fluides

## Structure du projet

## Composants principaux

### TaskHeader

En-tête de la section des tâches, affichant le titre, la date et le bouton pour ajouter une nouvelle tâche.

### TaskFilters

Filtres pour les tâches (All, Open, Closed, Archived) avec des compteurs mis à jour dynamiquement.

### TaskList

Liste des tâches avec fonctionnalité de glisser-déposer pour le réordonnancement.

### TaskCard

Carte individuelle pour chaque tâche, affichant les détails et permettant de marquer comme complétée.

## Context

### TaskContext

Gère l'état global des tâches, fournissant des fonctions pour ajouter, mettre à jour et réordonner les tâches.

## Styles

Les styles sont gérés principalement via Tailwind CSS, avec quelques styles personnalisés dans \`globals.css\` pour des ajustements spécifiques.

## Installation et démarrage

1. Clonez le repository
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`
4. Ouvrez `http://localhost:3000` dans votre navigateur

## Développement futur

- Implémentation de la persistance des données (backend API ou stockage local)
- Ajout de fonctionnalités pour les sections Messages et Last Activity
- Amélioration de la gestion des participants (ajout/suppression)
- Implémentation de tests unitaires et d'intégration

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request pour des améliorations ou des corrections de bugs.

## Licence

Ce projet est sous licence MIT. Voir le fichier \`LICENSE\` pour plus de détails.