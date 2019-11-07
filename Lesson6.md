# Lesson 6 Using Sub-queries

Food for thought.

Give me a list of all employees that earn more than Haas

## Defining the proper question

### Who has a salary greater than Abel?

This question require us to know what Abel's salary is

Therefore, in order to answer which persons have a greater salary than Abel, we need to know what Abel's salary is.

The syntax

```sql

select
from
where expression = (subquery)

```

:::tip

remember that multiple row operators use key words like IN, ANY, ALL, EXISTS

Subqueries are generally executed first and its output then fed to the main or outer query

:::

```sql
select lastname from employees
where salary >
(
  select salary from employees where lastname = 'Abel'
)
```

## Guidelines

Generally we:

- enclose subqueries in parantheses.
- place subqueries on the right side of the comparison condition
- order by clause in the subquery is not needed unless you are doing Top-N analysis
- Use single-row operators with single-row subqueries, use multi-row operators with multi-row subqueries.

```sql
---while you can do this, dont
SELECT * from employees
WHERE (select salary from employees where last_name = 'Abel') < salary
```

## Examples

Display the employees id whose job id is the same as employee 141

```sql

select lastname, jobid from employees
where jobid = (
  select jobid from employees where employeeid = 141
)
```

When you are writing queries, write the inner most to see if what it returns is what you need.

```sql
select lastname, jobid, salary from employees
where jobid = (
  select jobid from employees where employeeid = 141
)
and salary = (select salary from employees where employeesid = 143)

```

## more examples

Display the lastname jobid salary of all employees whose salary is = to the min salary of all employees

```sql
select lastname, jobid, salary from employees
where  salary =
(select min(salary) from employees)
```

## multi-row subqueries

Display all the departments with min salary greater than department 50's min salary

```sql

selet departmentid, min(salary)
from employees
group by departmentid

having min(salary) >
(select min(salary)
from employees
where departmentid = 50)
```

Find the job with th lowest average salary. Display the job id and that average salary

```sql

select jobid, avg(salary) from employees
group by jobid
having avg(salary) =
(
select min(avg(salary))
from employees
group by jobid
)

--- alternatively

select jobid, avg(salary) from employees group by jobid
where avg(salary) in (select min(avg(salary))
from employees
group by jobid)
```

When you group by there is an implication that there will be multiple rows returned. Therefore, you cannot use where expr = (multi values)

## multi row subqueries cont.

To use a subquery that returns more than one row you need to use a multi row operator

```sql
select departmentid, employeeid, lastname, salary from employees
where salary in (

  select min(salary) from employees
  group by departmentid
)
```

## using ANY operator

```sql
select employeeid, lastname, jobid, salary
from employees
where salary any(

  select salary from employees where jobid = 'it_prog'
)
and jobid != 'it_prog'
```

## using ALL operator

the all operator comapres a value to all values returned by subquery

```sql
select employeeid, lastname, jobid, salary
from employees

where salary < all(
  select salary from employee
  where jobid = 'it_prog'
)
any jobid not 'it_prog'

-- checks to see if salary is under the lowest salary returned by subquery
```

:::warning
NOT IN

If one of the condition is a NULL value. The entire query returns no rows.
The problem is the NOT IN. The NOT IN is equivalent to !ALL

All conditions that compare a NULL value returns a NULL
:::

### IN works with NULLS

```sql
select lastname from employees emp
where emp.employeeid in
(select mgr.managerid from employees mgr)
```

:::tip In is equiv to ANY
We could have added a where clause in the subquery - where managerid is NOT NULL
:::

```sql
select lastname from employees emp
where emp.employeeid in


(select mgr.managerid from employees mgr
where managerid is not null
)
```

## Example with Prompt

Prompt the user for employee last name. The query will return lastname and hiredate of any employee in the same department as the name supplied. Do not include the employee supplied

```sql
select lastname, departmentid from employees
where departmentid =
(select departmentid from employees
where lastname = upper('&&Name'))
and upper(lastname) != upper('&Name');

UNDEFINE NAME;

```

## Multiple Column sub query

A multi column subquery returns more than 1 column to the outer query and can be listed in the outer query's from, where or having clause.

For example, the below query shows the employee or employees in each department whose current salary is lowest in the department.

```sql
select lastname, departmentid, salary
from employees
where
(departmentid, salary) in (
  select departmentid, min(salary)
  from employees
  group by departmentid
)


The sub query returns the following:
DEPARTMENT_ID MIN(SALARY)
------------- -----------
           10        4400
           20        6000
           50        2500
           60        4200
           80        8600
           90       17000
          110        8300
                     7000


The full query returns
LAST_NAME                 DEPARTMENT_ID     SALARY
------------------------- ------------- ----------
Whalen                               10       4400
Fay                                  20       6000
Vargas                               50       2500
Lorentz                              60       4200
Taylor                               80       8600
Kochhar                              90      17000
De Haan                              90      17000
Gietz                               110       8300

```
