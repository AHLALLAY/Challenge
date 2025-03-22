# Sommaire

## Semaine 1 : Fondations
- **[Jour 1 : Bases de programmation - Variables et types de données](#jour1-semaine1)**
  - Variables et types de données en JavaScript
  - Exercices : Déclaration de variables, manipulation de types, tableaux et objets

- **[Jour 2 : OOP - Introduction aux classes et objets](#jour2-semaine1)**
  - Concepts de base de la programmation orientée objet (POO)
  - Exercices : Création de classes, instanciation d’objets, méthodes et propriétés

- **[Jour 3 : SQL - Requêtes SELECT de base](#jour3-semaine1)**
  - Syntaxe de base des requêtes SQL
  - Exercices : Sélection de données, filtres, tris et conditions

- **[Jour 4 : JavaScript - Fonctions](#jour4-semaine1)**
  - Définition et utilisation des fonctions en JavaScript
  - Exercices : Fonctions simples, récursivité, manipulation de tableaux

- **[Jour 5 : UML - Diagrammes de use case (introduction)](#jour5-semaine1)**
  - Introduction aux diagrammes de cas d’utilisation
  - Exercices : Représentation des acteurs, use cases et relations

---

## Semaine 2 : Consolidation
- **[Jour 1 : Bases de programmation - Structures de contrôle](#jour1-semaine2)**
  - Structures conditionnelles et boucles
  - Exercices : if-else, switch, boucles for et while

- **[Jour 2 : OOP - Méthodes et constructeurs](#jour2-semaine2)**
  - Méthodes, constructeurs et encapsulation
  - Exercices : Création de méthodes, utilisation de constructeurs

- **[Jour 3 : SQL - INSERT, UPDATE, DELETE](#jour3-semaine2)**
  - Modification de données en SQL
  - Exercices : Insertion, mise à jour et suppression de données

- **[Jour 4 : JavaScript - Tableaux et boucles](#jour4-semaine2)**
  - Manipulation de tableaux et boucles
  - Exercices : Parcourir et modifier des tableaux

- **[Jour 5 : UML - Diagrammes de classes (bases)](#jour5-semaine2)**
  - Introduction aux diagrammes de classes UML
  - Exercices : Représentation des classes, attributs et méthodes

---

## Semaine 3 : Concepts intermédiaires
- **[Jour 1 : Bases de programmation - Fonctions avancées](#jour1-semaine3)**
  - Fonctions fléchées et fonctions d’ordre supérieur
  - Exercices : Utilisation de map, filter, reduce

- **[Jour 2 : OOP - Héritage](#jour2-semaine3)**
  - Héritage en POO avec `extends`
  - Exercices : Création de classes héritées, surcharge de méthodes

- **[Jour 3 : SQL - Jointures](#jour3-semaine3)**
  - Combinaison de tables avec JOIN
  - Exercices : INNER JOIN, LEFT JOIN, RIGHT JOIN

- **[Jour 4 : JavaScript - Objets et prototypes](#jour4-semaine3)**
  - Héritage via prototypes
  - Exercices : Utilisation de `Object.create()`, manipulation de prototypes

- **[Jour 5 : UML - Relations dans les diagrammes de classes](#jour5-semaine3)**
  - Représentation des relations (association, agrégation, composition)
  - Exercices : Modélisation des relations entre classes

---

## Semaine 4 : Approfondissement
- **[Jour 1 : Bases de programmation - Gestion des erreurs](#jour1-semaine4)**
  - Utilisation de `try-catch` pour gérer les exceptions
  - Exercices : Gestion des erreurs, `throw`, `finally`

- **[Jour 2 : OOP - Polymorphisme](#jour2-semaine4)**
  - Redéfinition des méthodes dans les classes enfants
  - Exercices : Polymorphisme, classes abstraites

- **[Jour 3 : SQL - Sous-requêtes et agrégations](#jour3-semaine4)**
  - Utilisation de sous-requêtes et fonctions d’agrégation
  - Exercices : COUNT, SUM, AVG, GROUP BY

- **[Jour 4 : JavaScript - Manipulation du DOM](#jour4-semaine4)**
  - Interaction avec le DOM pour modifier les éléments HTML
  - Exercices : Sélection, modification et gestion des événements

- **[Jour 5 : UML - Diagrammes de use case (avancés)](#jour5-semaine4)**
  - Relations `include` et `extend` dans les diagrammes de use case
  - Exercices : Modélisation de cas d’utilisation complexes

---

## Semaine 5 : Intégration
- **[Jour 1 : Bases de programmation - Programmation asynchrone](#jour1-semaine5)**
  - Gestion des opérations asynchrones avec callbacks et promesses
  - Exercices : `setTimeout`, `Promise`, `async/await`

- **[Jour 2 : OOP - Encapsulation et abstraction](#jour2-semaine5)**
  - Masquage des détails internes et simplification de l’interface
  - Exercices : Getters, setters, classes abstraites

- **[Jour 3 : SQL - Conception de bases de données](#jour3-semaine5)**
  - Normalisation et conception de bases de données
  - Exercices : Clés primaires, clés étrangères, diagrammes ER

- **[Jour 4 : JavaScript - Gestion des événements](#jour4-semaine5)**
  - Gestion des interactions utilisateur (clics, formulaires)
  - Exercices : Écouteurs d’événements, validation de formulaires

- **[Jour 5 : UML - Diagrammes de classes (avancés)](#jour5-semaine5)**
  - Modélisation de l’héritage, interfaces et classes abstraites
  - Exercices : Diagrammes de classes complexes

---

## Semaine 6 : Révision et pratique
- **[Jour 1 : Révision - Bases de programmation](#jour1-semaine6)**
  - Révision des concepts de base : variables, structures, fonctions, tableaux, boucles
  - Exercices : Manipulation de données, algorithmes simples

- **[Jour 2 : Révision - OOP](#jour2-semaine6)**
  - Révision des concepts POO : classes, héritage, polymorphisme, abstraction
  - Exercices : Création de classes, gestion des objets

- **[Jour 3 : Révision - SQL](#jour3-semaine6)**
  - Révision des requêtes SQL : SELECT, JOIN, agrégations
  - Exercices : Requêtes complexes, optimisation

- **[Jour 4 : Révision - JavaScript](#jour4-semaine6)**
  - Révision des concepts JavaScript : fonctions, DOM, événements, asynchrone
  - Exercices : Manipulation du DOM, gestion des événements

- **[Jour 5 : Révision - UML](#jour5-semaine6)**
  - Révision des diagrammes UML : use case, classes, relations
  - Exercices : Modélisation de systèmes complexes

---

# Semaine 1 : Fondations
## Jour 1 : Bases de programmation - Variables et types de données {#jour1-semaine1}
**Description rapide**
- L’objectif du jour est de comprendre les variables et les types de données en JavaScript. Une variable est un conteneur pour stocker des données, déclaré avec `let` (modifiable), `const` (constante) ou `var` (ancienne syntaxe). Les types de données principaux sont : `string` (texte), `number` (nombre), `boolean` (vrai/faux), `array` (tableau), et `object` (objet).

**Documentation**
- [MDN - Variables](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#Variables)
- [W3Schools - Types de données](https://www.w3schools.com/js/js_datatypes.asp)

**Exercices**
**Faciles**
- Déclarez une variable `nom` avec votre nom et affichez-la dans la console avec `console.log(nom)`.
- Créez une constante `age` avec votre âge et affichez-la.
- Déclarez une variable `estEtudiant` avec `true` si vous êtes étudiant, sinon `false`, et affichez-la.

**Moyens**
- Créez deux variables numériques `a` et `b`, additionnez-les et affichez le résultat.
- Concaténez deux chaînes de caractères (votre prénom et nom) dans une variable `nomComplet` et affichez-la.
- Convertissez la chaîne `"10"` en nombre avec `parseInt()` ou `Number()`, ajoutez-la à un autre nombre, et affichez le résultat.
- Créez un tableau `fruits` avec trois fruits de votre choix et affichez-le.

**Difficiles**
- Créez un objet `personne` avec les propriétés `nom`, `age` et `ville`, puis affichez chaque propriété avec `console.log()`.
- Déclarez une variable `let compteur = 5`, modifiez sa valeur à `10`, et affichez-la avant et après la modification.
- Essayez de modifier une constante (ex. `const x = 5`) et observez l’erreur dans la console.

---

## Jour 2 : OOP - Introduction aux classes et objets {#jour2-semaine1}
**Description rapide**
- L’objectif est de comprendre les bases de la programmation orientée objet (POO) en JavaScript avec les classes et les objets. Une classe est un modèle pour créer des objets, définie avec `class NomClasse {}`. On instancie un objet avec `new NomClasse()`.

**Documentation**
- [MDN - Classes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes)
- [W3Schools - Classes](https://www.w3schools.com/js/js_classes.asp)

**Exercices**
**Faciles**
- Définissez une classe vide appelée `Voiture` avec `class Voiture {}`.
- Créez un objet `maVoiture` à partir de cette classe avec `new Voiture()` et affichez-le.
- Ajoutez une propriété `marque` à la classe `Voiture`, instanciez un objet avec `marque = "Toyota"`, et affichez la marque.

**Moyens**
- Créez une classe `Animal` avec une propriété `nom`, et instanciez deux animaux (ex. `"Lion"`, `"Chat"`) en affichant leurs noms.
- Ajoutez une méthode `parler()` à `Animal` qui affiche `"L'animal fait un son"`, et appelez-la pour un objet.
- Créez une classe `Rectangle` avec les propriétés `longueur` et `largeur`, et instanciez un rectangle (ex. `5` et `3`).
- Ajoutez une méthode `aire()` à `Rectangle` qui retourne `longueur * largeur`, et affichez l’aire d’un rectangle.

**Difficiles**
- Créez une classe `Personne` avec un constructeur `constructor(nom, age)` qui initialise ces propriétés, et instanciez une personne.
- Instanciez deux objets `Personne` (ex. `"Alice"`, `25` et `"Bob"`, `30`), et affichez leurs propriétés.
- Ajoutez une méthode `saluer()` à `Personne` qui affiche `"Bonjour, je m'appelle [nom]"`, et testez-la.

---

## Jour 3 : SQL - Requêtes SELECT de base {#jour3-semaine1}
**Description rapide**
- L’objectif est d’apprendre à écrire des requêtes `SELECT` simples pour récupérer des données dans une base SQL. La syntaxe de base est `SELECT colonne FROM table WHERE condition`. On utilise cela pour interroger des tables comme `employes`.

**Documentation**
- [W3Schools - SELECT](https://www.w3schools.com/sql/sql_select.asp)
- [SQLZoo - SELECT](https://sqlzoo.net/wiki/SELECT)

**Exercices** (sur une table `employes` avec `id`, `nom`, `salaire`, `departement`)
**Faciles**
- Écrivez une requête pour sélectionner tous les employés.
- Sélectionnez uniquement les noms des employés.
- Sélectionnez les employés du département `"IT"`.

**Moyens**
- Sélectionnez les employés avec un salaire supérieur à `3000`.
- Sélectionnez les noms et salaires des employés du département `"RH"`.
- Sélectionnez les employés dont le nom commence par `"A"`.
- Sélectionnez les employés avec un salaire entre `2000` et `4000`.

**Difficiles**
- Sélectionnez les employés triés par salaire décroissant.
- Sélectionnez le nom et le département des employés avec un salaire > `2500` et du département `"IT"`.
- Sélectionnez les employés dont le nom contient `"e"` et le département est `"Finance"`.

---

## Jour 4 : JavaScript - Fonctions {#jour4-semaine1}
**Description rapide**
- L’objectif est de maîtriser les fonctions en JavaScript, qui sont des blocs de code réutilisables. Une fonction peut prendre des paramètres et retourner une valeur avec `return`. Syntaxe : `function nom(param) { code }`.

**Documentation**
- [MDN - Fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions)
- [W3Schools - Fonctions](https://www.w3schools.com/js/js_functions.asp)

**Exercices**
**Faciles**
- Créez une fonction `bonjour()` qui affiche `"Bonjour !"` avec `console.log()`.
- Créez une fonction `addition(a, b)` qui retourne la somme de deux nombres, et testez-la.
- Appelez `addition(3, 5)` et affichez le résultat dans la console.

**Moyens**
- Créez une fonction `estPair(nombre)` qui retourne `true` si le nombre est pair (`nombre % 2 === 0`), et testez-la.
- Créez une fonction `factorielle(n)` qui calcule la factorielle d’un nombre (ex. `5! = 5*4*3*2*1`) avec une boucle.
- Créez une fonction `maximum(a, b)` qui retourne le plus grand des deux nombres avec `if`.
- Créez une fonction `bienvenue(nom)` qui affiche `"Bienvenue, [nom] !"`, et testez-la avec votre nom.

**Difficiles**
- Créez une fonction `sommeTableau(tableau)` qui prend un tableau de nombres et retourne leur somme avec une boucle.
- Créez une fonction `inverserChaine(chaine)` qui retourne la chaîne inversée (ex. `"abc" → "cba"`) avec une boucle ou `split()`.
- Créez une fonction `estPalindrome(chaine)` qui vérifie si une chaîne est un palindrome (ex. `"radar"`) et retourne `true` ou `false`.

---

## Jour 5 : UML - Diagrammes de use case (introduction) {#jour5-semaine1}
**Description rapide**
- L’objectif est d’apprendre les bases des diagrammes de use case en UML, qui montrent les interactions entre acteurs (utilisateurs) et un système. Les acteurs sont des stickmans, les use cases des ellipses reliées par des lignes.

**Documentation**
- [Lucidchart - Use Case](https://www.lucidchart.com/pages/fr/tutoriel-diagramme-de-cas-d-utilisation-uml)
- [Visual Paradigm - Use Case](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/)

**Exercices**
**Faciles**
- Dessinez un acteur nommé `"Client"` (stickman avec le label en dessous).
- Dessinez un use case `"Se connecter"` (ellipse avec le texte dedans).
- Reliez l’acteur `"Client"` au use case `"Se connecter"` avec une ligne droite.

**Moyens**
- Ajoutez un use case `"Consulter le solde"` et reliez-le à `"Client"`.
- Ajoutez un acteur `"Administrateur"` et un use case `"Gérer les utilisateurs"`, puis reliez-les.
- Dessinez un use case `"Effectuer un paiement"` pour `"Client"`.
- Reliez `"Administrateur"` à un use case `"Générer un rapport"`.

**Difficiles**
- Dessinez un diagramme avec deux acteurs `"Étudiant"` et `"Professeur"`, chacun avec deux use cases (ex. `"Suivre un cours"`, `"Noter les étudiants"`).
- Ajoutez une relation `<<include>>` entre `"Se connecter"` et `"Consulter le solde"` (flèche en pointillés).
- Créez un diagramme pour une bibliothèque avec les acteurs `"Bibliothécaire"` (ex. `"Ajouter un livre"`) et `"Utilisateur"` (ex. `"Emprunter un livre"`).

---

# Semaine 2 : Consolidation
## Jour 1 : Bases de programmation - Structures de contrôle {#jour1-semaine2}
**Description rapide**
- Introduction aux structures de contrôle (`if`, `else`, `switch`) pour gérer le flux d’un programme selon des conditions.

**Documentation**
- [MDN - Structures de contrôle](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [W3Schools - If Else](https://www.w3schools.com/js/js_if_else.asp)

**Exercices**
**Faciles**
- Écrire un `if` affichant `"Positif"` si une variable `nombre > 0`.
- Ajouter un `else` affichant `"Négatif ou nul"` si `nombre ≤ 0`.
- Vérifier avec `if-else` si `age ≥ 18` et afficher `"Majeur"` ou `"Mineur"`.

**Moyens**
- Créer une fonction `estAdulte(age)` retournant `true` si `age ≥ 18`, sinon `false`.
- Écrire un `switch` affichant le jour (ex. `1 → "Lundi"`) selon une variable `jour` (1 à 7).
- Utiliser `if-else` imbriqués pour vérifier si un nombre est pair, impair ou nul.
- Créer `maxTrois(a, b, c)` retournant le plus grand des trois nombres avec `if`.

**Difficiles**
- Demander un nombre à l’utilisateur et afficher s’il est pair ou impair.
- Créer `calculatrice(a, b, operation)` pour `+`, `-`, `*`, `/` avec `switch`.
- Vérifier si une année est bissextile (divisible par 4 mais pas 100, ou par 400).

---

## Jour 2 : OOP - Méthodes et constructeurs {#jour2-semaine2}
**Description rapide**
- Ajout de méthodes (fonctions dans une classe) et utilisation de `constructor()` pour initialiser des objets.

**Documentation**
- [MDN - Constructeurs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/constructor)
- [W3Schools - Méthodes](https://www.w3schools.com/js/js_object_methods.asp)

**Exercices**
**Faciles**
- Ajouter un constructeur à `Voiture` initialisant `marque`.
- Créer une méthode `demarrer()` affichant `"La voiture démarre"`.
- Instancier une voiture avec `new Voiture("Toyota")` et appeler `demarrer()`.

**Moyens**
- Créer `CompteBancaire` avec un constructeur initialisant `solde` à `0`, et `deposer(montant)`.
- Ajouter `retirer(montant)` qui vérifie si le solde est suffisant.
- Créer `Etudiant` avec `nom` et `notes` (tableau), et `moyenne()` pour calculer la moyenne.
- Instancier un étudiant avec `[15, 18, 12]` et afficher sa moyenne.

**Difficiles**
- Créer `Rectangle` avec `longueur` et `largeur`, et méthodes `aire()` et `perimetre()`.
- Ajouter `estCarre()` retournant `true` si `longueur === largeur`.
- Créer `Personne` avec `nom` et `age`, et `anniversaire()` incrémentant l’âge.

---

## Jour 3 : SQL - INSERT, UPDATE, DELETE {#jour3-semaine2}
**Description rapide**
- Modification de données avec `INSERT` (ajouter), `UPDATE` (modifier), `DELETE` (supprimer).

**Documentation**
- [W3Schools - INSERT](https://www.w3schools.com/sql/sql_insert.asp)
- [W3Schools - UPDATE](https://www.w3schools.com/sql/sql_update.asp)

**Exercices** (table `employes` : `id`, `nom`, `salaire`, `departement`)
**Faciles**
- Insérer l’employé `'Alice'` qui travaille dans le département `'IT'` pour un salaire de `8000`.
- Mettre à jour le salaire de l’employé avec l’ID `1` et le rendre `8500`.
- Supprimer l’employé `id 2`.

**Moyens**
- Insérer deux employés en une requête.
- Modifier `"RH"` en `"Ressources Humaines"` pour tous.
- Supprimer les employés avec salaire < `2000`.
- Insérer un employé sans ID (auto-incrémenté).

**Difficiles**
- Augmenter de 10% les salaires dans `"IT"`.
- Supprimer les noms commençant par `"A"`.
- Insérer, modifier, puis supprimer un employé en série.

---

## Jour 4 : JavaScript - Tableaux et boucles {#jour4-semaine2}
**Description rapide**
- Manipulation de tableaux et boucles (`for`, `while`) pour parcourir et modifier des données.

**Documentation**
- [MDN - Tableaux](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3Schools - Boucles](https://www.w3schools.com/js/js_loop_for.asp)

**Exercices**
**Faciles**
- Créer `nombres = [1, 2, 3, 4, 5]` et l’afficher.
- Afficher l’élément à l’index `2` (`3`).
- Afficher chaque élément avec une boucle `for`.

**Moyens**
- Créer `sommeTableau(tableau)` retournant la somme avec `for`.
- Afficher `1` à `10` avec `while`.
- Créer `pairs` avec les nombres pairs de `1` à `20`.
- Inverser un tableau avec une boucle.

**Difficiles**
- Créer `trouverMax(tableau)` pour le plus grand nombre.
- Fusionner et trier deux tableaux en ordre croissant.
- Créer `supprimerDoublons(tableau)` sans doublons.

---

## Jour 5 : UML - Diagrammes de classes (bases) {#jour5-semaine2}
**Description rapide**
- Introduction aux diagrammes de classes UML (nom, attributs, méthodes).

**Documentation**
- [Lucidchart - Diagrammes de classes](https://www.lucidchart.com/pages/fr/tutoriel-diagramme-de-classes-uml)

**Exercices**
**Faciles**
- Dessiner `Voiture` avec `marque` et `couleur`.
- Ajouter `demarrer()`.
- Dessiner `Personne` avec `nom` et `age`.

**Moyens**
- Ajouter des types (ex. `nom: string`).
- Créer `CompteBancaire` avec `solde: float`, `deposer()`, `retirer()`.
- Créer `Etudiant` avec `nom`, `notes: array`, `calculerMoyenne()`.
- Dessiner `Rectangle` avec `longueur`, `largeur`, `aire()`, `perimetre()`.

**Difficiles**
- Ajouter des visibilités (`+` public, `-` privé).
- Dessiner `Employe` avec attributs privés et méthodes publiques.
- Lier `Personne` et `Voiture` avec une association `"possède"`.

---

# Semaine 3 : Concepts intermédiaires
## Jour 1 : Bases de programmation - Fonctions avancées {#jour1-semaine3}
**Description rapide**
- Exploration des fonctions fléchées et fonctions d’ordre supérieur.

**Documentation**
- [MDN - Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**Exercices**
**Faciles**
- Écrire `double(n)` fléchée retournant `n * 2`.
- Doubler `[1, 2, 3]` avec `map()`.
- Créer `bonjour()` fléchée affichant `"Bonjour"`.

**Moyens**
- Créer `appliquer(f, tableau)` appliquant `f` à chaque élément.
- Filtrer les nombres pairs avec `filter()`.
- Écrire `reduire(tableau, f, initial)` pour une réduction.
- Créer `estPositif(n)` fléchée retournant `true` si `n > 0`.

**Difficiles**
- Créer `composer(f, g)` retournant `f(g(x))`.
- Calculer une somme avec `reduce()`.
- Créer `trierPar(f, tableau)` triant selon `f`.

---

## Jour 2 : OOP - Héritage {#jour2-semaine3}
**Description rapide**
- Utilisation de l’héritage avec `extends` pour réutiliser des propriétés et méthodes.

**Documentation**
- [MDN - Héritage](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/extends)

**Exercices**
**Faciles**
- Créer `Animal` avec `manger()`, et `Chien` qui hérite.
- Instancier `Chien` et appeler `manger()`.
- Ajouter `aboyer()` à `Chien`.

**Moyens**
- Créer `Vehicule` avec `vitesse`, et `Voiture` ajoutant `marque`.
- Surcharger `manger()` dans `Chien`.
- Créer `Employe` avec `nom`, et `Manager` ajoutant `equipe`.
- Instancier `Manager` et afficher ses attributs.

**Difficiles**
- Créer `Animal → Mammifere → Chien` et appeler des méthodes.
- Ajouter un constructeur à `Animal` appelé par `Chien` avec `super()`.
- Surcharger `description()` dans `Voiture` héritant de `Vehicule`.

---

## Jour 3 : SQL - Jointures {#jour3-semaine3}
**Description rapide**
- Combinaison de tables avec `INNER JOIN`, `LEFT JOIN`, etc.

**Documentation**
- [W3Schools - JOIN](https://www.w3schools.com/sql/sql_join.asp)

**Exercices** (tables `employes` et `departements`)
**Faciles**
- Joindre `employes` et `departements` sur `departement_id`.
- Sélectionner noms et départements des employés.
- Utiliser `LEFT JOIN` pour inclure tous les employés.

**Moyens**
- Sélectionner les employés de `"IT"`.
- Compter les employés par département.
- Trouver les départements sans employés avec `RIGHT JOIN`.
- Joindre `employes`, `departements`, `projets`.

**Difficiles**
- Trouver le salaire max par département.
- Calculer la moyenne des salaires par département avec `JOIN` et `GROUP BY`.
- Créer une vue avec une jointure.

---

## Jour 4 : JavaScript - Objets et prototypes {#jour4-semaine3}
**Description rapide**
- Héritage via prototypes avec `Object.create()`.

**Documentation**
- [MDN - Prototypes](https://developer.mozilla.org/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

**Exercices**
**Faciles**
- Créer `animal` avec `type`.
- Créer `chien` héritant de `animal` avec `Object.create()`.
- Ajouter `aboyer()` à `chien`.

**Moyens**
- Créer un prototype `Vehicule` avec `demarrer()`, et `voiture` qui hérite.
- Ajouter `marque` à `voiture`.
- Changer le prototype d’un objet avec `Object.setPrototypeOf()`.
- Créer `Animal → Mammifere → Chien`.

**Difficiles**
- Surcharger `description()` dans `Chien` héritant de `Animal`.
- Vérifier le prototype avec `Object.getPrototypeOf()`.
- Créer un constructeur `Personne` avec des méthodes via prototype.

---

## Jour 5 : UML - Relations dans les diagrammes de classes {#jour5-semaine3}
**Description rapide**
- Représentation des relations (association, agrégation, composition).

**Documentation**
- [Lucidchart - Relations](https://www.lucidchart.com/pages/fr/tutoriel-diagramme-de-classes-uml)

**Exercices**
**Faciles**
- Dessiner une association entre `Personne` et `Voiture`.
- Ajouter une multiplicité (ex. `1..*`).
- Représenter une agrégation entre `Equipe` et `Joueur`.

**Moyens**
- Dessiner une composition entre `Maison` et `Piece`.
- Ajouter des rôles (ex. `"propriétaire"`) à l’association.
- Dessiner une dépendance entre deux classes.
- Représenter l’héritage entre `Animal` et `Chien`.

**Difficiles**
- Créer un diagramme avec association, agrégation, composition.
- Ajouter des flèches de navigation aux associations.
- Modéliser un système de bibliothèque avec plusieurs relations.

---

# Semaine 4 : Approfondissement
## Jour 1 : Bases de programmation - Gestion des erreurs {#jour1-semaine4}
**Description rapide**
- Utilisation de `try-catch` pour gérer les exceptions.

**Documentation**
- [MDN - Try Catch](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch)

**Exercices**
**Faciles**
- Écrire un `try-catch` pour une fonction inexistante.
- Lancer une erreur avec `throw new Error("Erreur")`.
- Ajouter `finally` pour un message final.

**Moyens**
- Créer `diviser(a, b)` lançant une erreur si `b === 0`.
- Capturer cette erreur avec `try-catch`.
- Gérer une erreur pour un fichier fictif inexistant.
- Capturer une erreur spécifique (ex. `TypeError`).

**Difficiles**
- Valider un email et lancer une erreur si invalide.
- Gérer des erreurs pour une API fictive.
- Enchaîner plusieurs `try-catch` pour différentes tâches.

---

## Jour 2 : OOP - Polymorphisme {#jour2-semaine4}
**Description rapide**
- Redéfinition des méthodes dans les classes enfants pour un comportement spécifique.

**Documentation**
- [MDN - Polymorphisme](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes#Polymorphisme)

**Exercices**
**Faciles**
- Créer `Animal` avec `son()`, et `Chien` avec `"Wouf"`.
- Instancier `Chien` et appeler `son()`.
- Ajouter `Chat` avec `son() = "Miaou"`.

**Moyens**
- Créer un tableau d’animaux et appeler `son()` pour chacun.
- Ajouter `deplacer()` dans `Animal`, redéfini dans `Oiseau` par `"vole"`.
- Créer `Forme` avec `aire()`, redéfini dans `Cercle` et `Rectangle`.
- Calculer les aires de plusieurs formes.

**Difficiles**
- Créer `faireSon(animal)` appelant `son()` sur tout animal.
- Simuler une classe abstraite en JS pour des formes.
- Créer un système de paiement avec méthodes polymorphiques.

---

## Jour 3 : SQL - Sous-requêtes et agrégations {#jour3-semaine4}
**Description rapide**
- Utilisation de sous-requêtes et fonctions comme `COUNT`, `SUM`, `AVG`.

**Documentation**
- [W3Schools - Sous-requêtes](https://www.w3schools.com/sql/sql_subqueries.asp)

**Exercices** (table `employes` : `id`, `nom`, `salaire`, `departement`)
**Faciles**
- Compter le nombre des employés.
- Sommer les salariés des employés.
- Moyenne des salaires des employés.

**Moyens**
- Sélectionner les salaires > moyenne avec une sous-requête.
- Trouver le département avec le plus d’employés.
- Calculer le salaire total par département.
- Trouver les employés sans manager.

**Difficiles**
- Trouver le 2e salaire le plus élevé.
- Supprimer les doublons avec une sous-requête.
- Filtrer les groupes avec `GROUP BY` et `HAVING`.

---

## Jour 4 : JavaScript - Manipulation du DOM {#jour4-semaine4}
**Description rapide**
- Interaction avec le DOM pour modifier les éléments HTML.

**Documentation**
- [MDN - DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction)

**Exercices**
**Faciles**
- Sélectionner un élément par ID avec `getElementById()`.
- Modifier un texte avec `innerText`.
- Ajouter une classe avec `classList.add()`.

**Moyens**
- Créer une `div` et l’ajouter au `body`.
- Supprimer un élément du DOM.
- Changer la couleur d’un bouton au clic.
- Afficher une liste à partir d’un tableau.

**Difficiles**
- Créer un compteur incrémenté au clic.
- Valider un formulaire avant soumission.
- Créer une galerie d’images cliquable.

---

## Jour 5 : UML - Diagrammes de use case (avancés) {#jour5-semaine4}
**Description rapide**
- Relations `include` et `extend` dans les diagrammes de use case.

**Documentation**
- [Lucidchart - Include Extend](https://www.lucidchart.com/pages/fr/tutoriel-diagramme-de-cas-d-utilisation-uml)

**Exercices**
**Faciles**
- Dessiner `"Se connecter"` incluant `"Vérifier identifiants"`.
- Ajouter `"Payer"` étendant `"Acheter"`.
- Représenter `include` entre `"Rechercher"` et `"Afficher résultats"`.

**Moyens**
- Créer un diagramme de réservation avec plusieurs `include`.
- Ajouter des conditions à `extend`.
- Combiner `include` et `extend` dans un use case.
- Modéliser une bibliothèque avec use cases imbriqués.

**Difficiles**
- Créer un diagramme pour un site e-commerce.
- Ajouter des acteurs secondaires.
- Représenter des use cases généralisés avec `<<generalization>>`.

---

# Semaine 5 : Intégration
## Jour 1 : Bases de programmation - Programmation asynchrone {#jour1-semaine5}
**Description rapide**
- Gestion des opérations asynchrones avec callbacks et promesses.

**Documentation**
- [MDN - Asynchrone](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)

**Exercices**
**Faciles**
- Utiliser `setTimeout` pour afficher un message après `2s`.
- Créer une promesse résolue après `1s`.
- Afficher un message avec `.then()`.

**Moyens**
- Simuler une requête API avec une promesse.
- Gérer un rejet avec `.catch()`.
- Chaîner plusieurs promesses.
- Utiliser `Promise.all()` pour attendre plusieurs promesses.

**Difficiles**
- Retenter une promesse jusqu’à succès.
- Créer une file de promesses séquentielles.
- Simplifier avec `async/await`.

---

## Jour 2 : OOP - Encapsulation et abstraction {#jour2-semaine5}
**Description rapide**
- Masquer les détails internes (encapsulation) et simplifier l’interface (abstraction).

**Documentation**
- [MDN - Encapsulation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes#Encapsulation)

**Exercices**
**Faciles**
- Créer `Compte` avec `#solde` privé.
- Ajouter `getSolde()` et `setSolde()`.
- Créer une classe abstraite `Forme` avec `aire()`.

**Moyens**
- Implémenter `aire()` dans `Cercle` et `Rectangle`.
- Valider `setSolde()` pour éviter les négatifs.
- Créer `Utilisateur` avec attributs privés et getters/setters.
- Simuler l’encapsulation avec des closures.

**Difficiles**
- Exporter un module avec méthodes publiques/privées.
- Simuler une interface pour classes polymorphiques.
- Gérer un stock avec encapsulation stricte.

---

## Jour 3 : SQL - Conception de bases de données {#jour3-semaine5}
**Description rapide**
- Normalisation et conception pour éviter la redondance.

**Documentation**
- [W3Schools - Normalisation](https://www.w3schools.com/sql/sql_constraints.asp)

**Exercices**
**Faciles**
- Identifier la clé primaire de `utilisateurs`.
- Créer `commandes` avec une clé étrangère vers `utilisateurs`.
- Dessiner un diagramme ER simple.

**Moyens**
- Normaliser une table en `1NF`.
- Appliquer la `2NF` sur une table.
- Concevoir une base pour un blog (`utilisateurs`, `articles`, `commentaires`).
- Ajouter des contraintes (`NOT NULL`, `UNIQUE`).

**Difficiles**
- Normaliser jusqu’à `3NF`.
- Créer des index pour optimiser.
- Concevoir une base pour un système de réservation.

---

## Jour 4 : JavaScript - Gestion des événements {#jour4-semaine5}
**Description rapide**
- Gestion des interactions utilisateur (clics, formulaires).

**Documentation**
- [MDN - Événements](https://developer.mozilla.org/fr/docs/Web/API/Event)

**Exercices**
**Faciles**
- Ajouter un écouteur `click` à un bouton pour une alerte.
- Changer la couleur d’un texte au survol.
- Empêcher la soumission d’un formulaire avec `preventDefault()`.

**Moyens**
- Créer un compteur au clic.
- Valider un mot de passe en temps réel.
- Ajouter des écouteurs à plusieurs éléments via une boucle.
- Créer un menu déroulant cliquable.

**Difficiles**
- Créer une galerie d’images navigable.
- Implémenter le glisser-déposer.
- Gérer les touches pour un jeu simple.

---

## Jour 5 : UML - Diagrammes de classes (avancés) {#jour5-semaine5}
**Description rapide**
- Modélisation de l’héritage, interfaces, et classes abstraites.

**Documentation**
- [Lucidchart - Héritage](https://www.lucidchart.com/pages/fr/tutoriel-diagramme-de-classes-uml)

**Exercices**
**Faciles**
- Dessiner `Forme` abstraite avec `aire()`.
- Ajouter `Cercle` et `Rectangle` implémentant `aire()`.
- Représenter l’héritage avec une flèche vide.

**Moyens**
- Créer une interface `Dessinable` avec `dessiner()`.
- Faire implémenter `Dessinable` par `Forme`.
- Dessiner une classe héritant de plusieurs interfaces.
- Modéliser une hiérarchie de véhicules.

**Difficiles**
- Créer un diagramme pour une école avec héritage.
- Ajouter des méthodes statiques et attributs de classe.
- Représenter un Singleton.

---

# Semaine 6 : Révision et pratique
## Jour 1 : Révision - Bases de programmation {#jour1-semaine6}
**Description rapide**
- Révision : variables, structures, fonctions, tableaux, boucles.

**Exercices**
**Faciles**
- Déclarer et afficher des variables de différents types.
- Écrire une fonction multipliant deux nombres.
- Afficher `1` à `10` avec une boucle.

**Moyens**
- Sommer un tableau de nombres.
- Vérifier si un mot est un palindrome.
- Déterminer pair/impair avec `if-else`.
- Renverser un tableau.

**Difficiles**
- Implémenter un tri à bulles.
- Générer une suite de Fibonacci.
- Trouver les éléments communs à deux tableaux.

---

## Jour 2 : Révision - OOP {#jour2-semaine6}
**Description rapide**
- Révision : classes, héritage, polymorphisme, abstraction.

**Exercices**
**Faciles**
- Créer `Livre` avec `titre` et `auteur`.
- Ajouter un constructeur et `description()`.
- Instancier et afficher plusieurs livres.

**Moyens**
- Créer `Bibliotheque` avec un tableau de livres.
- Ajouter des méthodes pour gérer les livres.
- Créer `Roman` héritant de `Livre` avec `genre`.
- Utiliser le polymorphisme pour les descriptions.

**Difficiles**
- Créer `Utilisateur` pouvant emprunter des livres.
- Limiter à 3 livres par utilisateur.
- Gérer une bibliothèque complète.

---

## Jour 3 : Révision - SQL {#jour3-semaine6}
**Description rapide**
- Révision : requêtes, jointures, agrégations.

**Exercices**
**Faciles**
- Sélectionner tous les utilisateurs.
- Insérer un utilisateur.
- Mettre à jour un email.

**Moyens**
- Joindre `utilisateurs` et `commandes`.
- Compter les commandes totales.
- Trouver les utilisateurs sans commandes (`LEFT JOIN`).
- Sélectionner les utilisateurs avec > 5 commandes (sous-requête).

**Difficiles**
- Créer une vue pour les stats des commandes.
- Trouver le client avec le plus de commandes.
- Ajouter un trigger (si applicable).

---

## Jour 4 : Révision - JavaScript {#jour4-semaine6}
**Description rapide**
- Révision : fonctions, DOM, événements, asynchrone.

**Exercices**
**Faciles**
- Additionner deux nombres avec une fonction.
- Ajouter/supprimer des éléments d’un tableau.
- Modifier un texte HTML au clic.

**Moyens**
- Créer une promesse résolue après `2s`.
- Récupérer des données d’une API avec `fetch`.
- Valider un formulaire avec un écouteur.
- Créer un carrousel d’images.

**Difficiles**
- Implémenter une pagination pour une liste.
- Créer une todo list avec stockage local.
- Développer un jeu (ex. morpion).

---

## Jour 5 : Révision - UML {#jour5-semaine6}
**Description rapide**
- Révision : use cases, classes, relations.

**Exercices**
**Faciles**
- Dessiner un use case pour une connexion.
- Créer `Produit` avec attributs et méthodes.
- Représenter une association `Client-Commande`.

**Moyens**
- Ajouter `include` et `extend` dans un use case.
- Modéliser l’héritage `Employe-Manager`.
- Dessiner un diagramme pour une réservation.
- Ajouter une interface dans un diagramme.

**Difficiles**
- Créer un diagramme pour une gestion de projets.
- Modéliser un système avec plusieurs relations.
- Concevoir une architecture web avec UML.