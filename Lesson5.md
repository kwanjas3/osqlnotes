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

## Self joined can have conditions

```sql
select e.employeeid, e.lastname, e.departmentid,

d.departmentid, d.locationid

from employees e join departments d
on (e.departmentid = d.departmentid)
and e.managerid = 149


--- Alternatively where instead of and

select e.employeeid, elastname, e.departmentname,
d.departmentid, d.locationid
from employees e join departments d
on(e.departmentid = d.departmentid)
where e.managerid = 149
```

### self join example

using equijoin

```sql
select m.lastname as manager, w.lastname as Worker
from employees m, employees w
where w.managerid = m.employeeid
order by 1

MANAGER                   WORKER
------------------------- -------------------------
De Haan                   Hunold
Hartstein                 Fay
Higgins                   Gietz
Hunold                    Ernst
Hunold                    Lorentz
King                      De Haan
King                      Kochhar
King                      Hartstein
King                      Zlotkey
King                      Mourgos
Kochhar                   Higgins
Kochhar                   Whalen

```

### using on

```sql
select m.lastname as manager, w.lastname as worker
from employees m, employees w
on e.managerid = m.employeeid
order by m.lastname


```

## Inner joins

```sql
select employeeid, lastname, departmentname
from employees inner join departments
on employees.departmentid = departments.departmentid

EMPLOYEE_ID LAST_NAME                 DEPARTMENT_NAME
----------- ------------------------- ----------------
        200 Whalen                    Administration
        201 Hartstein                 Marketing
        202 Fay                       Marketing
        124 Mourgos                   Shipping
        141 Rajs                      Shipping
        142 Davies                    Shipping
        143 Matos                     Shipping
        144 Vargas                    Shipping
        103 Hunold                    IT
        104 Ernst                     IT
        107 Lorentz                   IT
        149 Zlotkey                   Sales
        174 Abel                      Sales
        176 Taylor                    Sales
        100 King                      Executive
        101 Kochhar                   Executive
        102 De Haan                   Executive
        205 Higgins                   Accounting
        206 Gietz                     Accounting

--Note this looks very like this example which is the implicitly defined join

```

### Showing the total amount of a sales

```sql
select pname, sum(amount) as TotalSales
from customers join Orders
on Customer.pid = orders.pid
group by pname


```

### List all customers and what orders they have placed.

The join is based on finding a value in the joining columns. If no order has been placed then no data will show, but you want all customers

- INNER JOINS
  The INNER JOIN will select all rows from both tables  as long as there is a match between the columns we are matching on.
  If a customer has not placed an order or has not placed an order in the time we might specify, then this customer will not be listed as there is no common field.

## Displaying all customers and their sales including customers without sales

### We can use an outer join

There are 3 types of outer joins,
left, right, full

1. Joins of 2 tables that return only matching rows => inner join

2. Joins between 2 tables that return

- result of inner join
- any unmatched rows from the left or right tables are called outer join

3. Join between 2 tables that return the result of

- an inner join
- all results from both left and right of non-matching rows is called full outer join

```sql
---if you do not state outer join, the default is inner join
SELECT 	pname,
		SUM(Amount) AS SalesPerCustomer
FROM 	Customers LEFT JOIN Orders
ON 		Customers.pid = orders.pid
GROUP BY PNAME

--- solves the customers who do not purchase anything


```

### more examples

what does this sql statement return?

```sql
select e.lastname, d.departmentid, d.departmentname
from employees e full outer join departments d
on (e.departmentid = d.departmentid)


LAST_NAME                 DEPARTMENT_ID DEPARTMENT_NAM
------------------------- ------------- --------------
King                                 90 Executive
Kochhar                              90 Executive
De Haan                              90 Executive
Hunold                               60 IT
Ernst                                60 IT
Lorentz                              60 IT
Mourgos                              50 Shipping
Rajs                                 50 Shipping
Davies                               50 Shipping
Matos                                50 Shipping
Vargas                               50 Shipping
Zlotkey                              80 Sales
Abel                                 80 Sales
Taylor                               80 Sales
Grant
Whalen                               10 Administration
Hartstein                            20 Marketing
Fay                                  20 Marketing
Higgins                             110 Accounting
Gietz                               110 Accounting
                                    190 Contracting
--notice grant does not have department
--notice contracting does not have lastname
```
