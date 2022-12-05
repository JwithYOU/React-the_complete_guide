import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList onFilteredExpense={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expense;

// import React, {useState} from 'react';
// import './Expense.css';
// import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';

// function Expense(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   function filterChangeHandler(selectedYear) {
//     console.log("Expense.js")
//     setFilteredYear("2019");
//   }

//   const filteredExpenses = props.expenses.filter(e => {
//     return e.date.getFullYear().toString() === filteredYear
//   });

//  return (
//   <div>
//   <Card className='expenses'>
//   <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
//         {filteredExpenses.map((e) => (
//           <ExpenseItem
//             key={e.id}
//             title={e.title}
//             amount={e.amount}
//             date={e.date}
//           />
//         ))}
//     </Card>
//     </div>
//  )
// }

// export default Expense;
