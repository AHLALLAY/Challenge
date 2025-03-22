/*
- Sélectionnez les employés avec un salaire supérieur à 3000.
- Sélectionnez les noms et salaires des employés du département "RH".
- Sélectionnez les employés dont le nom commence par "A".
- Sélectionnez les employés avec un salaire entre 2000 et 4000.
*/

-- 01
select * from employés where salaire > 3000;

-- 02
select noms, salaires from employés where département = "RH";

-- 03
select * from employés where nome like A%;

-- 04
select * from employés where salaire between 2000 and 4000;