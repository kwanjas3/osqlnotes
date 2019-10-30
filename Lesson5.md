# Lesson 5 Joining tables

Sometimes you need data from more than one table - possibly because the data has been normalized

1. joining multiple tables
2. joining tables to itself
3. joining tables that do not normally meet a join condition (outer joins)

PROBLEM: I want to know how all the programs at Seneca are doing. One of the things I want to look at is the
(a) program name and
(b) the number of students enrolled in the program.

## Example Data

| ProgramCode |  ProgramDescription  |
| :---------: | :------------------: |
|     ACC     |      Accounting      |
|     BUS     |       Business       |
|     CPA     | Computer Programming |
|     MKT     |      Marketing       |

Student Data

| SID  | NAME & OTHER DATA | PROGCODE |
| :--: | :---------------: | :------: |
| 1111 |       first       |   ACC    |
| 2222 |      second       |   ACC    |
| 3333 |       third       |   BUS    |
| 4444 |      fourth       |   ACC    |
| 5555 |       fifth       |   MKT    |

Find the common field and join on that

equijoin (inner join)

```sql
select  pname,
amount as "sales per customer"
from customers, orders
where customer.pid = orders.pid
```

creating joins with USING clause

```sql
select l.city, d.departmentname
from locations l join departments d using (locationid)
where locationid = 1400

SELECT L.city, D.department_name
		FROM locations L JOIN departments D USING (location_id)
		WHERE D.location_id = 1400;
			ORA-25154: column part of USING clause cannot have qualifier
```

Find the employeeid, name, departmentid, locationid

```sql
seleect e.employeeid, e.lastname,
d.locationid, d.departmentid
from employees join departments using (departmentid)
```

Creating joins with the ON clause

```sql
select
e.eid, e.lastname, e.departmenid,
d.departmentid, d.locationid
from employees e join departments d
on (e.departmentid = d.departmentid)
```

:::tip
notice, there is no where clause, and it seperates the ideas of join and where
:::

## Three way joins

```sql
select eid, city, departmentname,
from employees e
join departments d
  on d.departmentid = e.departmentid
join locations l
  on d.locationsid = l.locationsid
```

equijoin version

```sql
select eid, city, departmentname
from employees e, departments d
where d.departmentsid = e.departmentsid
and d.locationid = l.locationid
```

Find the lastname of lorentz's manager

Lorentz and the manager are all employees. there is no need for a manager table

```sql
TABLE: Employees
EMPLOYEE_ID LAST_NAME                 MANAGER_ID
----------- ------------------------- ----------
        100 King
        101 Kochhar                          100
        102 De Haan                          100
        103 Hunold                           102
        104 Ernst                            103
        107 Lorentz                          103
        124 Mourgos                          100
        141 Rajs                             124
        142 Davies                           124
        143 Matos                            124
        144 Vargas                           124
        149 Zlotkey                          100
        174 Abel                             149
        176 Taylor                           149
        178 Grant                            149
        200 Whalen                           101
        201 Hartstein                        100
        202 Fay                              201
        205 Higgins                          101
        206 Gietz                            205
```

we can use a self join to solve this

look at the manager's id and compare it to employees id.

```sql
select e.lastname emp. m.lastname mgr
from employees e join employees m
on (e.manager_id = m.employee_id)
where e.lastname like 'Lorentz'
```
