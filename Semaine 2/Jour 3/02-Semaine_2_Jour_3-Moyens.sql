/*
- Insérer deux employés en une requête.
- Modifier `"RH"` en `"Ressources Humaines"` pour tous.
- Supprimer les employés avec salaire < `2000`.
- Insérer un employé sans ID (auto-incrémenté).
*/

-- 01
INSERT INTO employé(nom, département, salaire) VALUE ('Ahmed', 'IT', 3000),('Ali', 'RH', '6000');

-- 02
UPDATE employé SET département = "Ressources Humaines" WHERE département = "RH";

-- 03
DELETE FROM employé WHERE salaire < 2000;

-- 04
INSERT INTO employé(nom, département, salaire) VALUE ('Ahmed', 'IT', 3000);