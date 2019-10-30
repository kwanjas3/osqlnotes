# Lesson 4 Group Functions pt.1

Group functions:

- operate on sets of rows
- returns one result per group

```sql
select avg(salary)
from employees

returns '1 number from set of rows'
```

:::tip reminder
single row functions worked on single rows and returned 1 result per row
:::

## list of group functions

- AVG(n) - average value o fn, ignoring null values 0
- COUNT(n) - number of rows where expr evaluates to something other than null
  && count all selected rows using \* includes duplicates and nulls unless you use district

- MAX(n) - max value of expr, ignoring null
- MIN(n) - min value of expr, ignoring null
- SUM(n) - Sums value of n
- STDDEV([DISTINCT|ALL]x)
  Standard deviation of n, ignoring null

- VARIANCE ([DISTINCT|ALL]x)
  Variance of n, ignoring null values

## Group function syntax

```sql

SELECT     AVG (SALARY),
                MAX (SALARY),
                MIN (SALARY),
                SUM (SALARY)
FROM    EMPLOYEES;



AVG(SALARY) MAX(SALARY) MIN(SALARY) SUM(SALARY)
       8775       24000        2500      175500

```

For Sales rep only

```sql
SELECT     AVG (SALARY),
                MAX (SALARY),
                MIN (SALARY),
                SUM (SALARY)
FROM    EMPLOYEES
where jobid like '%REP%'
```

## Guidelines

- Distinct - makes the function only consider non-duplicated values
- ALL - makes the function consider all values (default)

- The Data types with syntax expr argument may be char, varchar2, number, date

- All group functions ignore null values. To substitude null use NVL(column, n)

## Using MIN, MAX functions

:::tip
you can use MIN and MAX for numeric, character and dates
:::

```sql
select
min(hiredate) as "most senior",
max(hiredate) as "newest employee",
from employees
```

## Using Count function

```sql
select count(*) from employee

returns 'count of rows in table'
```

Inside an expression

```sql
select count(commission_pct) from employees
where departmentid=80
```

:::warning Note
Count the number of rows that satisfies the select statement

adding an expressino returns non-null values

adding distinct returns the number of rows that are distinct from all the rows that are not null
:::

## Distinct examples

```sql

select count(distinct departmentid)
from employees

count(distinct departmentid)
```

## Group functions and null

```sql
select avg(commissionpct)
from employees

"returns .2125 since it ignores nulls"

select avg(nvl(commissionpct, 0))
from employees

'nulls are considered value of 0'

'returns .0425'
```

## Groups of Data

All group functions have treated that table as one large group, but sometimes the information needs to be divided into smaller groups

```sql
select departmentid, avg(salary)
from employees

'returns
ERROR at line 1:
ORA-00937: not a single-group group function
'
```

The use of departmentid results in a row of outputs for each row in the employee table

AVG wants to output a single resuilt for the entire table

therefore we can use the keyword

GROUP BY

## GROUP BY

```sql
select departmentid,
avg(salary)
from employees
group by departmentid


DEPARTMENT_ID AVG(SALARY)
------------- -----------
                     7000
           90  19333.3333
           20        9500
          110       10150
           50        3500
           80  10033.3333
           60        6400
           10        4400

```

Group by does not need to be in the select statement

```sql
select avg(salary)
from employees
group by departmentid

AVG(SALARY)
-----------
       7000
 19333.3333
       9500
      10150
       3500
 10033.3333
       6400
       4400

```

incorporate it with order by

```sql
select departmentid, average(salary),
from employees
group by departmentid
order by departmentid desc
```

## grouping by more than 1 column

display the total salary paid to each job title within each department

```sql
select departmentid, jobid, sum(salary)
from employees
group by departmentid, jobid

DEPARTMENT_ID JOB_ID     SUM(SALARY)
------------- ---------- -----------
          110 AC_ACCOUNT        8300
           90 AD_VP            34000
           50 ST_CLERK         11700
           80 SA_REP           19600
           50 ST_MAN            5800
           80 SA_MAN           10500
          110 AC_MGR           12000
           90 AD_PRES          24000
           60 IT_PROG          19200
           20 MK_MAN           13000
              SA_REP            7000
           10 AD_ASST           4400
           20 MK_REP            6000


```

Restricting which groups to show

Find the max salary by department if max salary is greater than 10000

```sql

select departmentid, max(salary)
from employees
where max(salary) > 10000
group by departmentid

```

## Nesting Group Functions

```sql
select max(avg(salary))
from employees
group by departmentid

MAX(AVG(SALARY))
----------------
      19333.3333

```

examples

Write a query to determine how many job_ids there are

```sql
select distinct job_id
from employees
```

write a query to find out how many people have the same job

```sql
select count(firstname)
from employees
where count(job_id) > 1
group by job_id
```

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```
