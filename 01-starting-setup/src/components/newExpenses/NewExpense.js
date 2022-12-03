import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
      props.onAddExpense(enteredExpenseData)
  };

  const [isEditing, setIsEditing] = useState(false); 

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const cancelHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;