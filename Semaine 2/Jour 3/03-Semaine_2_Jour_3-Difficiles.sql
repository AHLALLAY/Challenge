/*
- Augmenter de 10% les salaires dans `"IT"`.
- Supprimer les noms commençant par `"A"`.
- Insérer, modifier, puis supprimer un employé en série.
*/

-- 01
UPDATE employé SET salaire = salaire * 1.1 WHERE département = 'IT';

-- 02
DELETE FROM employé WHERE nom LIKE A%;

-- 03
INSERT INTO employé (nom, département, salaire) VALUES ('Ali', 'RH', 6000);
UPDATE employé SET nom = 'Ahmed' WHERE id = LAST_INSERTED_ID();
DELETE FROM employé WHERE id = LAST_INSERTED_ID();