# Lesson 2 Where

Where is allows us to conditionalize our query,sort rows and apply ampersand substitution

## Limiting Rows using selection

column type matters, int/varchar2/number

```SQL
select employee_id, last_name, job_id, department_id from employees
where
department_id = 90;


SELECT 	last_name, job_id, department_id
FROM	employees
WHERE	last_name = ‘Whalen’;
```

single quotes ‘Whalen’ – exact case

## Dates

Character Strings and date values are enclosed by single quotes

Character values are case-sensitive, date values are format-sensitive

Default is DD-MON-RR

## Where Clause Specs

WHERE clause

Compares

1. values in a column,
2. Literal
3. Arithmetic expressions
4. Functions (more later)

NEEDS

1. Column name
2. Comparison condition
3. Column Name, constant or list of values

| Operator            |            Meaning             |
| ------------------- | :----------------------------: |
| =                   |            Equal to            |
| >                   |          greater than          |
| >=                  |     greater than Equal to      |
| <                   |           less than            |
| <=                  |       less than Equal to       |
| <> or != or ^=      |            nEqualto            |
| between ... and ... | between two values (inclusive) |
| in(set)             |     match list of pattern      |
| like                |    match character pattern     |
| is null             |           null value           |

```SQL Examples
Select last_name, salary
from employees
where salary <= 3000;

Select last_name, salary
from employees
where salary between 2500 AND 3000;

Select last_name, salary
from employees
where last_name between 'King' AND 'Smith';

Select last_name, salary, manager_id
from employees
where manager_id IN (100,101,102)
```

## Using Like

% denotes zero or many
\_ denotes one character

```SQL Examples
select first_name from employees
where first_name LIKE 'S%'

select last_name from employees
where last_name like '_o%'
```

:::tip
you can use the ESCAPE identifier to search for the actual % and \_ symbols
:::

```SQL Examples
select lastname,jobid from employees
where jobid LIKE '%SA\_%'
ESCAPE '\'
```

1. look for anything or nothing in front of SA
2. followed by underscore
3. followed by anything or nothing

## Using Null

test for null by using is NULL

```SQL Examples
select lastname,jobid from employees
where jobid is NULL
```

:::danger
You cannot use the equal = symbol to a non-existent value.
You must use the word IS
:::

## Defining conditions using logical operators

| Operator |               Meaning                |
| :------: | :----------------------------------: |
|   AND    |    Returns true if both are true     |
|    OR    |   Returns true if either are true    |
|   NOT    | Returns true if conditions are false |

```SQL
SELECT employee_id, last_name, job_id, salary, from employees
where salary >= 10000
and job_id like '%MAN%';
```

this will return all employees where salary is greater than 10000 and their jobid contains MAN

```SQL
SELECT employee_id, last_name, job_id, salary, from employees
where salary >= 10000
and job_id NOT IN ('IT%', '%CLERK');
```

returns employees with >=10000 salary and job_id not within IT* or *CLERK

## Precedence

| Operator |              Meaning              |
| :------: | :-------------------------------: |
|    1     |            Artithmetic            |
|    2     |           Concatenation           |
|    3     |       Comparison conditions       |
|    4     | IS \[NOT\] null, like, \[NOT\] IN |
|    5     |          \[NOT\] BETWEEN          |
|    6     |           not equal to            |
|    7     |       not logical condition       |
|    8     |            and logical            |
|    9     |            OR logical             |

```SQL
SELECT lastname, jobid, salary, from employees
where jobid = 'sa_rep'
or job_id = 'ad_pres'
and salary > 15000;
```

and takes precedence over or. evaluation job_id = 'ad_pres'
and salary > 15000; then it does the or making this statement confusing

To do it correctly, add parentheses

```SQL
SELECT lastname, jobid, salary, from employees
where (jobid = 'sa_rep'
or job_id = 'ad_pres')
and salary > 15000;
```

## Sorting

```SQL
select * from employees
order by departmentid
```

:::tip
order by is the last statement
:::

```SQL
select * from employees
order by departmentid desc
```

descending order

```SQL
select employeeid, lastname, salary*12 annsal from employees
order by annsal
```

alias

:::tip
default is asc order,
you can sort a column that is not being displayed
:::

```sql
select employee_name
from employees
order by department_id
```

:::tip
you can sort a column numberically:
this will sort by departmentid
:::

```sql
select lastname, jobid, departmentid, hiredate
from employees
order by 3
```

:::tip
you can sort by column, then sort the sorted columns on a different column
:::

```sql
select lastname, jobid, departmentid, salary
from employees
order by departmentid, salary desc
```

this sorts the rows by asc lowest to highest based on department id. then sorts within these rows in desc order highest to lowest the salary values

## Substitution variables

allows us to use the same query with different values via GUI

```sql
select employee_id, lastname, salary, departmentid
from employees
where employee_id = &employee_num
```

a GUI popup alls you to enter employee_id via employee_num variable.
This allows user to specify a value at run time and that value is not stored

```sql
select employee_id, lastname, salary, departmentid
from employees
where job_id = '&job_title'
```

```sql
select employee_id, lastname, salary, departmentid, &columnname
from employees
where &condition
order by &order_column
```

## Maintaining substitution values

:::tip
you can ask the user once and use the same input multiple times
:::

```sql
select employee_id, lastname, salary, departmentid, &&columnname
from employees
where &condition
order by &columnname
```

:::warning
Prompted first time
Value is stored
To remove the value from future use
UNDEFINE column_name

:::

## Using Define

```sql
define employee_num = 200
select employeeid, lastname, salary, departmentid
from employees
where employee_id = &employee_num

undefine employee_num

```

## Using verify

allows you to toggle display of the substitution variable before and after sql developer replaces the variable with values

```sql
Set VERIFY ON
select employeeid, lastname, salary
from employees
where employeeid = &employee_num
```

Sequence of events

1. SQL code has no value specified
2. It prompts you for the value
3. It displays the substitution
