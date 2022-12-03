import React, {useState} from 'react'; 
import './Expense.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense=> {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No expense found.</p>;

  if(filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }



 return (
  <div>
  <Card className='expenses'>
  <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
        {expenseContent}
    </Card>
    </div>
 )
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