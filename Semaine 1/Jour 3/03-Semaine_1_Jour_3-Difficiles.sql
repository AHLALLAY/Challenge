/*
- Sélectionnez les employés triés par salaire décroissant :.
- Sélectionnez le nom et le département des employés avec un salaire > 2500 et du département "IT".
- Sélectionnez les employés dont le nom contient "e" et le département est "Finance".
*/

-- 01
select * from employés order by salaire desc;

-- 02
select nom, département from employés where salaire > 2500 and département = "IT";

-- 03
select * from employés where nom like %e% and département = "Finance";