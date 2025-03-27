/*
- Insérer l’employé `'Alice'` qui travaille dans le département `'IT'` pour un salaire de `8000`.
- Mettre à jour le salaire de l’employé avec l’ID `1` et le rendre `8500`.
- Supprimer l’employé `id 2`.
*/

-- 01
INSERT INTO employés (nom, département, salaire) VALUE ('Alice', 'IT', 8000);

-- 02
UPDATE employés SET salaire = 8500 WHERE ID = 1;

-- 03
DELETE FROM employés WHERE ID = 2;