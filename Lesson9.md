# Lesson 9 DML Manipulating Data

There are 3 things you can do:

1. add
2. change
3. delete

they correspond to

1. insert
2. update
3. delete

- Control transactions – COMMIT SAVEPOINT ROLLBACK

## What is DML? Data Manipulation Language

The sql that manipulates data.

EXAMPLE:
Student comes in to pay for tuition

1. Decrease the amount owing to Seneca
2. Increase the total amount collected for the day
3. Store copy of activity (transaction) in a journal
4. Add it to the end of day check list
5. Print a receipt

:::warning Note
NOTE:
Steps 1, 2, 3 and 4 must be completed before a transaction is complete.
If any one of them fails, then all actions must be undone.
:::

```sql
INSERT INTO table [(column [, column...])]
VALUES (value [, value...]);
```

- Add new rows to a table by using the INSERT statement:

- With this syntax, only one row is inserted at a time.

```sql
INSERT INTO departments
(department_id, department_name, manager_id, location_id)
VALUES (70, 'Public Relations', 100, 1700);

```

- Enclose character and date values within single quotation marks.

## Insert with null values

Implicit method: Omit the column from the column list.

```sql
INSERT INTO departments (department_id, department_name) 
VALUES (30, 'Purchasing');
```

The specific columns were stated in the INSERT
That means it knows where it goes. Could do it in different order

Explicit method: Specify the NULL keyword in the VALUES clause.

```sql
INSERT INTO departments
VALUES (100, 'Finance', NULL, NULL);
```

There are 4 columns in the table
None of the columns were mentioned
so there needs to be 4 columns in the VALUES clause
with data that matches the columns info

## Insert by copying from another table

```sql
insert into salesrep (id,name,salary, commission_pct)
select employeeid,lastname,salary,commission_pct
from employees
where jobid like '%REP%'
```

:::warning Note

- No VAUES clause
- Number of columns must match
- Data type must match

:::

## Update modify/change data

General Syntax

```sql
Update table
  set column = value [, column = value, ...]
  where condition;

UPDATE 	employees
SET 		department_id = 50
WHERE 	employee_id = 113;

```

:::danger THIS IS DANGEROUS

```sql
UPDATE employees
SET department_id = 110;
-- will set everything to 110 because where clause is missing, aka rollback time
```

:::

```sql
UPDATE 	employees
SET 		job_id = 'IT_PROG',  	-- one change
commission_pct = NULL 	-- two changes
WHERE 	employee_id = 114;
```

Update employee 113 with same data from another employee
A) JOB ID SAME AS EMPLOYEE 205
B) SALARY SAME AS 205

```sql
UPDATE 	employees
SET 		job_id = (SELECT job_id
FROM employees
WHERE employee_id = 205),
salary = (SELECT salary
FROM employees
WHERE employee_id = 205)
WHERE 	employee_id = 113;
```

```sql
--easier way to copy
update employees
set (jobid, salary) = (select jobid, salary from employees where employeeid = 205)

employeeid = 113
```

What does this do?

## Updating rows based on another table

```sql
update employees
set departmentid = (select departmentid from employees where employeeid = 100)

where jobid = ( select jobid from employees where employeeid = 200)

--Changes all employees that have a job_id the same as employee 200 to have the same department ID as employee 100

```

## Delete

### allows us to remove specific row or rows

```sql
delete from departments
where departmentname = 'Finanace';
delete from employees
where employeeid = 115;
delete from departments
where departmentid in  (10,20);
```

:::danger no where = rollback

```sql
--deletes the data from the table
delete from employees;
```

:::

## Rows based on another table

```sql
delete from employees
where departmentid = (
  select departmentid from departments where departmentname like '%Public%'
)
```

## Truncate statement

```sql
truncate employees
```

### WHY USED?

- More efficient than DELETE
- Delete checks all delete triggers
- Truncate is a DDL statement and does not create a copy to allow for ROLLBACK
- If the table is the parent you need to drop constraint of the FK to be able to do this

## Database Transactions: Start and End

- Begin when the first DML SQL statement is executed. - a statement that makes changes to the database - INSERT, UPDATE, DELETE

- End with one of the following events:

- A COMMIT or ROLLBACK statement is issued.
- A DDL or DCL statement that executes with an automatic commit
  or
- The user exits SQL Developer or SQL\*Plus.
- The system crashes.

* COMMIT Ends last transaction making the pending data changes before the commit to be permanent

* SAVEPOINT name
  SAVEPOINT name marks a savepoint within the current transaction
* ROLLBACK
  ROLLBACK ends the current transaction by discarding all pending data changes back to the last commit or the start of activity
* ROLLBACK TO
  SAVEPOINT name ROLLBACK TO SAVEPOINT rolls back the current transaction to the specified savepoint, thereby discarding any changes and/or savepoints that were created after the savepoint to which you are rolling back. If you omit the TO SAVEPOINT clause, the ROLLBACK statement rolls back the entire transaction. Because savepoints are logical, there is no way to list the savepoints that you have created

## Example

```sql
UPDATE...
SAVEPOINT update_done; 	 receive a message SAVEPOINT update_done succeeded
INSERT...
ROLLBACK TO update_done;  receive a message ROLLBACK succeeded

```

## State of Data

### 1. Before a COMMIT or ROLLBACK

- While making data changes (DML)

- The previous state of the data can be recovered

- The current state can be reviewed with the SELECT - make changes then use a select to see the results

- Other users cannot see the effect of the DML changes - Each user sees the state the data was in at the last commit

- Affected rows are locked
- Other users cannot change the affected rows

### 2. After a COMMIT

- Data changes are saved in the database.

- The previous state of the data is overwritten.

- All users can view the results.

- Locks on the affected rows are released;
  Those rows are available for other users to manipulate.

- All savepoints are erased.

```sql

--Make some changes
DELETE FROM employees
WHERE employee_id = 99999;

INSERT INTO departments
VALUES (290, 'Corporate Tax', NULL, 1700);
--Commit the changes –

COMMIT;

-- 1 Remove departments 290 and 300 in the DEPARTMENTS table
-- 2 Update a row in the EMPLOYEES table.
-- 3 Save the data change.

DELETE FROM departments
WHERE department_id IN (290, 300);

UPDATE employees
SET department_id = 80
WHERE employee_id = 206;

COMMIT;


```

### Discard all pending changes by using the ROLLBACK statement:

- Data changes are undone.

- Previous state of the data is restored.

- Locks on the affected rows are released.

```sql
DELETE FROM employees;

ROLLBACK;
 
```
