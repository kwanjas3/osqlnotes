# Lesson 10 Create Manage Tables

## Naming Rules

- Begin with a letter
- Be 1–30 characters long
- Contain only A–Z, a–z, 0–9, \_, \$, and #
- Cannot duplicate the name of another object owned by the same user
- Cannot be an Oracle server–reserved word

## Creating tables

```sql
create table [schema.table]
  (column datatye [default expr] [, ...] );

  create table dept
  (
    deptno number(2),
    dname varchar2(14),
    loc varchar2(13),
    createdate date
  );

  describe dept;

  rollback
```

with default expr

```sql
CREATE TABLE	HIRE_DATES
	(	ID	NUMBER(8),
		HIRE_DATE	DATE	DEFAULT SYSDATE);
```

|   Datatype    |                                                                                                                    Description                                                                                                                    |
| :-----------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   VARCHAR2    |                                                                                              (size) Maximum size needs to be specified (up to 4000)                                                                                               |
|     CHAR      |                                                                                                         Fixed Length size to maximum 2000                                                                                                         |
| NUMBER (p, s) | P is precision or total number of decimal digit and S is scale or number of digits to the right of the decimal point EX: NUMBER (5, 2) means 5 all together and 2 decimal places. The value 1000 will be rejected by the server as that is 6 wide |
|     DATE      |                                                                                 Date and Time value to the nearest second Range: Jan 1, 4712 BC and Dec 31, 9999                                                                                  |
|     LONG      |                                                                                                      data type is variable length up to 2GB                                                                                                       |
|     CLOB      |                                                                                                             character data up to 4GB                                                                                                              |
|   RAW(size)   |                                                                             Raw binary data of length size (A maximum size must be specified: maximum size is 2,000.)                                                                             |
|   LONG RAW    |                                                                                                  Raw binary data of variable length (up to 2 GB)                                                                                                  |
|     BLOB      |                                                                                                             Binary data (up to 4 GB)                                                                                                              |
|     BFILE     |                                                                                                Binary data stored in an external file (up to 4 GB)                                                                                                |
|     ROWID     |                                                                                   A base-64 number system representing the unique address of a row in its table                                                                                   |

## Datetime data types

- TIMESTAMP - By default this is in microsecond - EX: 12-MAR-17 08:45.23.123456  6 decimals for microseconds

- TIMESTAMP (0) - removes part seconds

- TIMESTAMP (9) - can go to nanoseconds

* INTERVAL to MONTH 15-4 is how it is store 15 years 4 months - Instead of 5773 days

- INTERVAL TO SECOND 3 12:42:21 3 days 12 hours etc… - Use in biochemistry and other fields to mark time passed

## Overview of constraints

### NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK constraints

| Constraints |                                                                             Description                                                                              |
| :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  NOT NULL   |                                                                    - SPECIFY DATA CANNOT BE null                                                                     |
|   UNIQUE    |                                                       - PREVENTS DUPLICATION OF DATA IN THE OTHER ROWS (OHIP)                                                        |
| PRIMARY KEY |                                           Unique identifier for each row in a table Aside: It is both NOT NULL and UNIQUE                                            |
| FOREIGN KEY | Establishes and enforces a referential integrity between the column and a column of the referenced table such that values in one table match values in another table |
|    CHECK    |                                                                      Specifies a TRUE condition                                                                      |

## Guidelines

1. You can name a constraint
2. The oracle server generates a name by using the SYS_Cn format - name your constraint

3. Create a constraint at either of the following times:

- Creation of table
- After creation you need to use ALTER statement

4. Define a constraint at the column or table level

- inline - done as the column is defined
- outline - done at the end of column definitions but still in the create table statement

5. vie a constraint in the data dictionary

:::warning Note
One constraint can only be done at the table level.

e.g
composite,
concatentate
:::

## Defining Constraints

```sql
create table [schema.]table
  (column datatype [default expr] [column_constraint], ... [table constraint])

--column level constraint
create table employees(
employeeid NUMBER(6)
  constraint emp_emp_id_pk PRIMARY KEY,
firstname varchar2(20),
...
)
--table level
create table employees(
employeeid NUMBER(6)
jobid varchar2(10) NOT NULL,
...
jobid varchar2(20) NOT NULL,
CONSTRAINT emp_emp_id_pk
  Primary Key (employeeid)
)


```

:::tip Note

#### Column level

- The comma goes after the constraint on the column level,
- The column name is not specificed because it is on column definition
- Naming convention - table_column_type --- department_dept_id_pk

#### Table level

- After the last comma
- Column needs to be specified
- Can only apply 1 PK constraint at the column level. For concatenated keys, done at table level
  :::

```sql
create table student-course(
  student_id number(9),
  course_id char(6),
  grade char(2),
  constraint STUD_CRSE_STUD_ID_CRSE_ID_pk
  PRIMARY Key(student_id, course_id)
)
```

## Unique

1. can describe a composite unique key made of more than one column
2. can contain null - null satisfies the unique because null does not equal to anything
3. on a composite unique you cannot have duplicates in the non-null part

### Unique constraint

```sql
create table employees(
  employees_id number(6),
  last_name varchar2(25),
  email varchar2(25),
  salary NUMBER(8,2)
  commission_pct number(2,2)
  hire_date DATE NOT NULL,

constraint emp_email_uk unique(email)
)


```

## Foreign Key

- Used to establish referential integrity
- Designate a column or group of columns as a foreign key
- establish a relationship with primary key or unique key in the same table or different table

::: warning Note:
Foreign keys must match an existing value in the parent table or it must be NULL

:::

```sql
--table level
create table employees(
  employeeid NUMBER(6),
  lastname varchar2(25) not null,
  email varchar(25),
  salary number(8,2),
  commission_pct number(2,2),
  hiredate date not null default sysdate,

constraint emp_dept_fk foreign key (department_id)
  references departments(department_id)
constraint emp_email_uk unique(email)
)

-- column level
create table employees(
  departmentid number(4) contraint emp_deptid_fk
    references departments(departmentid)
  ...
)

```

:::warning Note:
Foreign key not stated in above example and the use of the work reference handles that concept that this is a foreign key constraint.

You still need to name it and specify what it references

On table level you need to say Foreign Key
:::

## Foreign Key

- Foreign key: defines the column in the child table at the table-constraint level
- References identifies the table and column in the parent table

- The parent record cannot be changed or deleted if there exists a FK in the child table that references it. This is done to maintain data integrity.

:::warning Note:

- on delete cascade: delets the dependant rows in the child table when a row in the parent table is deleted

- on delete set null : converts dependent foreign key values to null

:::

## Check Constraint

Define a condition that each row must satisfy before the insert can be added to the table

```sql
create table employees(
  salary number(2)
    constraint employees_salary_min check (salary > 0)
)
```

```sql
CREATE TABLE employees
( employee_id NUMBER(6)
CONSTRAINT emp_employee_id PRIMARY KEY
, first_name VARCHAR2(20)
, last_name VARCHAR2(25)
CONSTRAINT emp_last_name_nn NOT NULL
, email VARCHAR2(25)
CONSTRAINT emp_email_nn NOT NULL
CONSTRAINT emp_email_uk UNIQUE
, phone_number VARCHAR2(20)
, hire_date DATE
CONSTRAINT emp_hire_date_nn NOT NULL
, job_id VARCHAR2(10)
CONSTRAINT emp_job_nn NOT NULL
, salary NUMBER(8,2)
CONSTRAINT emp_salary_ck CHECK (salary>0)
, commission_pct NUMBER(2,2)
, manager_id NUMBER(6)
CONSTRAINT emp_manager_fk REFERENCES employees (employee_id)
, department_id NUMBER(4)
CONSTRAINT emp_dept_fk REFERENCES departments (department_id)
);

```

## Violating Constraints on delete

You cannot delete a row that contains a primary key that is used as a foreign key in another table

## Create Table via subquery

```sql
create table table
  (
    column,
  )
AS subquery
```

```sql
create table dept80
as
  select employeeid, lastname, salary*12 ANNSAL, hiredate
  from employees
  where departmentid = 80
```

:::warning Note:
Alias must be used for salary\*12 as the original table does not have that column name
:::

## Alter Table

- add a new column
- modify existing column def
- define a default value
- drop a column
- rename a column
- change table to read-only

## Dropping a Table

- Moves table to recycle bin
- Removes the table and all its data entirely
  - if purge specified it releases space for other objects to use
- invalidates dependent objects and removes object privileges on the table
  - vies using the table remain but are invalid

## TIC Table Instance Chart

### Table: TableName – assume this is a bridging table

| Column Names | Primary Key |     Foreign Key     |    Not Null    |     Unique     | Validation (Check)                                  |
| :----------: | :---------: | :-----------------: | :------------: | :------------: | --------------------------------------------------- |
|    Col 1     |     PK      | Parent 1 (PK1-col1) | Do not need NN | Do not need UK |                                                     |
|    Col 2     |     PK      |  Parent 2 (etc..)   |
| Col 3 Email  |             |                     |    NN or y     |     Uk orY     |
|    Col 4     |             |                     |                |                | Optional check A Condition EX: Between 300 and 2000 |
| Sample data  |             |                     |                |                |
| Sample data  |             |                     |                |                |
| Sample data  |             |                     |                |                |
