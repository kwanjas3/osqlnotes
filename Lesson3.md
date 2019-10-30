# Lesson 3 Single Row Functions

- Perform calculations on data
- Modify individual data items
- Manipulate output for groups of rows
- Format dates and numbers for display
- Convert column data types

* SQL functions sometimes take arguments and always return a value

There are also Multi - row functions

### Single-Row Functions

These functions operate on single rows only and return one result for every row acted on.
There are different types of Single-Row functions as follows:

- Character
- Number
- Date
- Conversion
- General

### Multi-row functions

Functions can manipulate groups of rows to give one result per group of rows.
These functions are also called group functions.

## Single Row Functions

- Manipulate data items
- accept args and returns one value
- act on each row that is return
- return one result per row
- modify the data type
- can be nested
- accept arguments that can be a column or expression

```js
functionName[(args, ...)]
```

## Character Functions

### Case manipulation

- LOWER()
- UPPER()
- INITCAP

### Character manipulation

- SUBSTR – needs string or column and starting position and length
- CONCAT – like || -- needs 2 arguments
- LENGTH – returns number of characters in the expression

SELECT LENGTH (CONCAT (first_name, last_name)) from employees

- INSTR – returns the numeric position of a named string
  -- you can give it a starting position before counting
- LPAD – pads the character value right justified
- RPAD – pads the character value shown by the amount not filled by the filed

select RPAD ( first_name, 9 , '\*' ) from employees

- TRIM
- REPLACE

```sql
select 'the jobid for ' || UPPER(lastname) || ' is ' || LOWER(jobid) as "Employee Details"
from employees

output:
'The jobid for KING is ad_pres'
```

|               Function                |     Result      |
| :-----------------------------------: | :-------------: |
|       concat('hello', 'world')        |   helloworld    |
|       substr('helloworld', 1,5)       |      hello      |
|         length('helloworld')          |       10        |
|       INSTR('helloworld', 'W')        |        6        |
|        LPAD(salary, 10, '\*')         | \*\*\*\*\*24000 |
|        RPAD(salary, 10, '\*')         | 24000\*\*\*\*\* |
| REPLACE('HELLOWORLD', 'HELLO', 'BYE') |    BYEWORLD     |
|      TRIM('H' from 'HELLOWORLD')      |    ELLOWORLD    |

## Examples

```sql
select employeeid , concat(firstname, lastname) NAME, jobid, length(lastname),
instr(lastname, 'a') "'contains 'a'?"
from employees
where substr(jobid, 4) = 'rep'
```

1. first names and last names joined together,
2. the length of the employee last name, and
3. the numeric position of the letter a in the string, employee last name

For all employees

    Who have the string REP contained in the job ID

    Starting at the fourth position of the job ID.

Modify the SQL statement in the slide to display the data for those employees whose last names end with the letter n

```sql
WHERE  	SUBSTR(last_name, -1, 1) = 'n';
```

:::tip
The -1 means start at 1 less than the end and process 1 value (which is now the end)
-- And is that value equal to n

:::

## Number functions

- ROUND(value, dec)
- TRUNC(value, dec)
- MOD (value, divisor)

DUAL can be used as dummy table // mysql you can just omit from dual

```sql
select round(25.923, 2)
from dual
```

:::tip
if 0 or no value, it will be rounded to 0 decimal places
:::

## Dates

- oracle db stores dates in a internal numeric format, century, year, month, day,hour,minuntes,seconds.
- the default format is DD-MON-RR
- enables you to store 21st cent. dates in the 20th century by specifying only the last two digits of the year
  \*enables you to store the 20th-century dates in the 21st century the same way

::tip
RR goes back to pre-2000 times to avoid a problem
::
sysdate is function that returns date and time

```sql
select sysdate from dual
```

## Arithmetic with Dates

Since dates are stored as numbers, you can perform calculations and use operators on them.

### examples

Find how many weeks an employee has worked in the company and only in department 90

```sql
select lastname, (sysdate - hiredate) / 7 "Weeks employed"
from employee
where department_id = 90
```

we can trunc((sysdate - hiredate) / 7, 2 ) so that we can get to 2 decimal place

:::tip
Date functions will return oracle date types with the exception of MONTHS_BETWEEN which returns number.

- months_between(date1, date2) finds the number of months between date 1 and 2, the result can be negative or positive
  :::

### date functions

- add_months(date, n)
- next_date(date, 'char') finds the date of the next specified day of the week
- last_day(date) finds the last day of the month
- round (date[,'fmt']) returns the date rounded to the unit that is specified by the format model, if fmt is omitted, date is founded to the nearest day
- trunc(date[, 'fmt'])

## Using date functions

```sql
months_between('01-sep-95', '11-jan-84') returns 19.677

add_months('11-jan-94', 6) returns '11-jul-94'
next_day('01-sep-95', 'FRIDAY') returns '08-sep-95'
last_day('01-feb-95') returns '28-feb-95'
```

### example

Display the empid, hiredate, number of months employeed, six-months from now is the employee review date,
first friday after hire_date and last day of the hire month for all employees employees employeed fewer than 70months

```sql
select empid, hiredate,
months_between(sysdate, hiredate) "months employeed",
add_months(hiredate, 6) "review date",
next_day(hiredate,'friday') "friday",
last_day(hiredate),
from employees
where months_between(sysdate, hiredate) < 70
```

assume sysdate = '25-jul-03'

```sql
round(sysdate, 'MONTH') returns '01-aug-03'
round(sysdate, 'YEAR') returns '01-jan-04'
trunc(sysdate, 'month') returns '01-jul-03'
trunc(sysdate, 'YEAR') returns '01-jan-03'
```

compare the hire dates for all employees who started in 1997. Display the employee number, hiredate, startmonth using the round and trunc functions

```sql
select
empid,
hiredate,
round(hiredate,'month') as "start month rounded",
trunc(hiredate,'month') as "start month trunc"
from employees
where hiredate like '%97'
```

## Using to_char with dates fmt format model

- TO_CHAR(date, 'format_model')

The format model:

- must be enclosed by single quotes
- case sensitive
- has fm element to remove padded blanks or suppress leading zeroes
- is seperated from the date value by a comma

```sql example
select lastname, salary, to_char(hiredate, 'YYYY-Month-DD')
from employees
where salary > 10000

select lastname, salary, to_char(hiredate, 'MM/YY')
from employees
where lastname like 'H%'
```

## Format Model

| Element |                  Result                   |
| :-----: | :---------------------------------------: |
|  YYYY   |           Full year in numbers            |
|  YEAR   |           Year spelt in english           |
|   MM    |         two digit value for month         |
|  MONTH  |          full name of the month           |
|   MON   |          3 letter abbre of month          |
|   DY    | three letter abbre of the day of the week |
|   DAY   |         Full name of day of week          |
|   DD    |         numeric day of the month          |

MANY MORE, GOOGLE THEM

## Elements of Date format model

Time elements format the time portion of the date:

- HH24:MI:SS AM => 15:45:32 PM

Add character strings by enclosing them in double quotes

- DD "of" Month => 12 of OCTOBER

Number suffixes spell out numbers

- Ddspth => Fourteenth

## Business use dates fyi

```sql
select lastname,
to_char(hiredate, 'fmDD Month YYYY') as "HIREDATE"
from employee
where hiredate like '%97%'
```

### using to_char to add more control

```sql
select lastname.
to_char(hiredate, 'fmDdspth "of" Month YYYY fmHH:MI')
from employees

returns
KING | seventeenth of June 2019 12:00
```

## Using TO_CHAR with number

TO_CHAR(number, 'format_model')

These are some of the format elements you can use to_char to display number values as characters:

| Element |               Result                |
| :-----: | :---------------------------------: |
|    9    |         represents a number         |
|    0    |    forces a zero to be displayed    |
|   \$    |       places floating dollar        |
|    L    | uses floating local currency symbol |
|    .    |        places decimal point         |
|    ,    |     places thousands indicator      |

```sql example
select lastname, to_char(salary, '$99,999.00') as "SALARY",
from employees

returns

King | $24,000.00
```

## Convert character string to number or date

TO_NUMBER(char[, 'format_model'])

```sql
select to_number('1234')-2
from dual
```

TO_DATE(char[, 'format_model'])

```sql
select lastname, to_char(hiredate, 'DD-Mon-YYYY')
from employees
where hiredate < to_date('01-JAN-90', 'DD-Mon-YY') // YY assumes 2090

select lastname, to_char(hiredate, 'DD-Mon-YYYY')
from employees
where hiredate < to_date('01-JAN-90', 'DD-Mon-RR') // RR assumes 1990
```

### examples

Find employees hired on May 24, 1999

```sql
select lastname, hiredate
from employees
where hiredate = to_date('May-24-99', 'Mon-dd,RR')

select lastname, hiredate
from employees
where hiredate = to_date('May 24, 1999', 'fxMonth DD, YYYY')

// the spaces are importance in the second select statement
```

## Nesting Functions

- single row func can be nested to any level
- nested functions evaluated from innermost to outermost

### example

Display the lastname of employess from department 60

their new email name is made up of the first 4 characters of lastname with \_US added all to appear in uppercase

make title of column 2 nice looking

eg. Higgins becomes HIGG_US

```sql
select lastname
concat UPPER((substr(lastname,4), '_US'))
 as"Email"
 from employees
 where departmentid = 90
```

## General Functions - Handling Nulls

- NVL(expr1, expr2)
- NVL2(expr1, expr2, expr3)
- NULLIF(expr1, expr2)
- COALESCE(expr1, expr2, ... )

Most commonly used is NVL

```sql
SELECT	last_name, salary, salary* nvl(commission_pct,0)
FROM		employees;

returns 0 'if the value is null'

NVL (hire_date, '01-JAN-2015')
NVL (city, 'Unavailable' )
```

## Case

Facilitate conditional inquires following
column-when-then else end statement

```sql
select lastname, jobid, salary
  case
    jobid when 'it_prog' then salary 1.10*salary
     when 'st_clerk' then salary 1.15*salary
     when 'sa_rep' then salary 1.20*salary
  else salary end "Revised Salary"

from employees

```
