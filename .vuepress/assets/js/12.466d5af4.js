(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{205:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lesson-5-joining-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-5-joining-tables"}},[t._v("#")]),t._v(" Lesson 5 Joining tables")]),t._v(" "),a("p",[t._v("Sometimes you need data from more than one table - possibly because the data has been normalized")]),t._v(" "),a("ol",[a("li",[t._v("joining multiple tables")]),t._v(" "),a("li",[t._v("joining tables to itself")]),t._v(" "),a("li",[t._v("joining tables that do not normally meet a join condition (outer joins)")])]),t._v(" "),a("p",[t._v("PROBLEM: I want to know how all the programs at Seneca are doing. One of the things I want to look at is the\n(a) program name and\n(b) the number of students enrolled in the program.")]),t._v(" "),a("h2",{attrs:{id:"example-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-data"}},[t._v("#")]),t._v(" Example Data")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("ProgramCode")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ProgramDescription")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ACC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Accounting")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("BUS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Business")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CPA")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Computer Programming")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("MKT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Marketing")])])])]),t._v(" "),a("p",[t._v("Student Data")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("SID")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("NAME & OTHER DATA")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("PROGCODE")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1111")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("first")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACC")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2222")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACC")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3333")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("third")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("BUS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4444")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fourth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ACC")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5555")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("fifth")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("MKT")])])])]),t._v(" "),a("p",[t._v("Find the common field and join on that")]),t._v(" "),a("p",[t._v("equijoin (inner join)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("  pname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\namount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sales per customer"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid\n")])])]),a("p",[t._v("creating joins with USING clause")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" locations l "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locationid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" locationid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1400")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" L"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("department_name\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" locations L "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" departments D "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tORA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25154")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("column")]),t._v(" part "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" clause cannot have qualifier\n")])])]),a("p",[t._v("Find the employeeid, name, departmentid, locationid")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("seleect e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Creating joins with the ON clause")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmenid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("notice, there is no where clause, and it seperates the ideas of join and where")])]),t._v(" "),a("h2",{attrs:{id:"three-way-joins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#three-way-joins"}},[t._v("#")]),t._v(" Three way joins")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" eid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" departmentname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" locations l\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationsid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationsid\n")])])]),a("p",[t._v("equijoin version")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" eid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" departmentname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" departments d\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentsid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentsid\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid\n")])])]),a("p",[t._v("Find the lastname of lorentz's manager")]),t._v(" "),a("p",[t._v("Lorentz and the manager are all employees. there is no need for a manager table")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(": Employees\nEMPLOYEE_ID LAST_NAME                 MANAGER_ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------- ------------------------- ----------")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" King\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v(" Kochhar                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v(" De Haan                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v(" Hunold                           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("104")]),t._v(" Ernst                            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("107")]),t._v(" Lorentz                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v(" Mourgos                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("141")]),t._v(" Rajs                             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("142")]),t._v(" Davies                           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("143")]),t._v(" Matos                            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("144")]),t._v(" Vargas                           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v(" Zlotkey                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("174")]),t._v(" Abel                             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),t._v(" Taylor                           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("178")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Grant")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" Whalen                           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v(" Hartstein                        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v(" Fay                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v(" Higgins                          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v(" Gietz                            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v("\n")])])]),a("p",[t._v("we can use a self join to solve this")]),t._v(" "),a("p",[t._v("look at the manager's id and compare it to employees id.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname mgr\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" employees m\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employee_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lorentz'")]),t._v("\n")])])]),a("h2",{attrs:{id:"self-joined-can-have-conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-joined-can-have-conditions"}},[t._v("#")]),t._v(" Self joined can have conditions")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\nd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("managerid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--- Alternatively where instead of and")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locationid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("managerid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v("\n")])])]),a("h3",{attrs:{id:"self-join-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-join-example"}},[t._v("#")]),t._v(" self join example")]),t._v(" "),a("p",[t._v("using equijoin")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Worker\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" employees w\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("managerid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employeeid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nMANAGER                   WORKER\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------------- -------------------------")]),t._v("\nDe Haan                   Hunold\nHartstein                 Fay\nHiggins                   Gietz\nHunold                    Ernst\nHunold                    Lorentz\nKing                      De Haan\nKing                      Kochhar\nKing                      Hartstein\nKing                      Zlotkey\nKing                      Mourgos\nKochhar                   Higgins\nKochhar                   Whalen\n\n")])])]),a("h3",{attrs:{id:"using-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-on"}},[t._v("#")]),t._v(" using on")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" worker\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" employees w\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("managerid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("employeeid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname\n\n\n")])])]),a("h2",{attrs:{id:"inner-joins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inner-joins"}},[t._v("#")]),t._v(" Inner joins")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" employeeid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" departmentname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inner")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" employees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" departments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid\n\nEMPLOYEE_ID LAST_NAME                 DEPARTMENT_NAME\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("----------- ------------------------- ----------------")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" Whalen                    Administration\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v(" Hartstein                 Marketing\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v(" Fay                       Marketing\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("124")]),t._v(" Mourgos                   Shipping\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("141")]),t._v(" Rajs                      Shipping\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("142")]),t._v(" Davies                    Shipping\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("143")]),t._v(" Matos                     Shipping\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("144")]),t._v(" Vargas                    Shipping\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v(" Hunold                    IT\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("104")]),t._v(" Ernst                     IT\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("107")]),t._v(" Lorentz                   IT\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),t._v(" Zlotkey                   Sales\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("174")]),t._v(" Abel                      Sales\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),t._v(" Taylor                    Sales\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" King                      Executive\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v(" Kochhar                   Executive\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v(" De Haan                   Executive\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v(" Higgins                   Accounting\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v(" Gietz                     Accounting\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--Note this looks very like this example which is the implicitly defined join")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"showing-the-total-amount-of-a-sales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showing-the-total-amount-of-a-sales"}},[t._v("#")]),t._v(" Showing the total amount of a sales")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" pname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" TotalSales\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" customers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" Orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" Customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" pname\n\n\n")])])]),a("h3",{attrs:{id:"list-all-customers-and-what-orders-they-have-placed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-all-customers-and-what-orders-they-have-placed"}},[t._v("#")]),t._v(" List all customers and what orders they have placed.")]),t._v(" "),a("p",[t._v("The join is based on finding a value in the joining columns. If no order has been placed then no data will show, but you want all customers")]),t._v(" "),a("ul",[a("li",[t._v("INNER JOINS\nThe INNER JOIN will select all rows from both tables  as long as there is a match between the columns we are matching on.\nIf a customer has not placed an order or has not placed an order in the time we might specify, then this customer will not be listed as there is no common field.")])]),t._v(" "),a("h2",{attrs:{id:"displaying-all-customers-and-their-sales-including-customers-without-sales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#displaying-all-customers-and-their-sales-including-customers-without-sales"}},[t._v("#")]),t._v(" Displaying all customers and their sales including customers without sales")]),t._v(" "),a("h3",{attrs:{id:"we-can-use-an-outer-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#we-can-use-an-outer-join"}},[t._v("#")]),t._v(" We can use an outer join")]),t._v(" "),a("p",[t._v("There are 3 types of outer joins,\nleft, right, full")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Joins of 2 tables that return only matching rows => inner join")])]),t._v(" "),a("li",[a("p",[t._v("Joins between 2 tables that return")])])]),t._v(" "),a("ul",[a("li",[t._v("result of inner join")]),t._v(" "),a("li",[t._v("any unmatched rows from the left or right tables are called outer join")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Join between 2 tables that return the result of")])]),t._v(" "),a("ul",[a("li",[t._v("an inner join")]),t._v(" "),a("li",[t._v("all results from both left and right of non-matching rows is called full outer join")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("---if you do not state outer join, the default is inner join")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \tpname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" SalesPerCustomer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" \tCustomers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" Orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" \t\tCustomers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" PNAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--- solves the customers who do not purchase anything")]),t._v("\n\n\n")])])]),a("h3",{attrs:{id:"more-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[t._v("#")]),t._v(" more examples")]),t._v(" "),a("p",[t._v("what does this sql statement return?")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" employees e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("full")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("outer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" departments d\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("departmentid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nLAST_NAME                 DEPARTMENT_ID DEPARTMENT_NAM\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------------- ------------- --------------")]),t._v("\nKing                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" Executive\nKochhar                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" Executive\nDe Haan                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v(" Executive\nHunold                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IT\nErnst                                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IT\nLorentz                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" IT\nMourgos                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" Shipping\nRajs                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" Shipping\nDavies                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" Shipping\nMatos                                "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" Shipping\nVargas                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" Shipping\nZlotkey                              "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" Sales\nAbel                                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" Sales\nTaylor                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" Sales\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Grant")]),t._v("\nWhalen                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" Administration\nHartstein                            "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" Marketing\nFay                                  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" Marketing\nHiggins                             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("110")]),t._v(" Accounting\nGietz                               "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("110")]),t._v(" Accounting\n                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("190")]),t._v(" Contracting\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--notice grant does not have department")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--notice contracting does not have lastname")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);