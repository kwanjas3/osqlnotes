# Lesson 1 Select

These are the commands that will be used in this course

# Row Specific DML Data manipulation language

1. Select
2. Insert
3. Update
4. Delete
5. Merge

## Table Specific DDL Data definition language

1. Create
2. Alter
3. Drop
4. Rename
5. Truncate
6. Comment

## Permissions DCL Data control language

1. Grant
2. Revoke

## Transaction Control

1. commit
2. rollback
3. savepoint

## Retrieving Data from a Table

PROJECTION -- Retrieving specific columns of data such as ALL student names and phone numbers

select _ from table_name;
select _ from departments;

SELECTION – Returns only rows ta meet the specific restriction such as all male students from a table of students

select column_names from table_name
select department_id department_name from departments;

:::tip

- SQL Statements are not case sensitive
- can be on one or more lines
- keywords cannot be split amongst multiple lines
- clauses by standard on seperate lines
- use indents for readability
- terminate statements with ;

:::

You can use Arithmetic Operators on columns

```SQL
SELECT last_name, salary, salary+300
FROM employees
```

You can fix column names with alias

```SQL
SELECT last_name, salary, salary+300 as "Salary Bonus"
FROM employees
```

You can concat columns using ||

```SQL
SELECT last_name || ' is a ' || job_id as "Employees"
FROM employees
```

You can get unique values using DISTINCT

```SQL
SELECT	DISTINCT department_id
FROM	employees;
```

## Display Table Structure

use the keyword describe

```SQL
DESCRIBE table_name
```
