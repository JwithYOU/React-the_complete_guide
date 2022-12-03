# React - The Complete Guide

## 2022.12.01.(목)

### Chapter - Section4: 49~62

<br/>
1. 리액트는 기본적으로 발생하는 모든 이벤트를 on으로 시작하는 props로 노출한다
<br/><br/>
2. 리액트 내에서 자바스크립트 함수를 사용하고 싶다면 ()괄호를 쓰지 말아야한다.
<br/>
이벤트핸들러로 함수를 실행 시키려고 해도 렌더링 되면서 JSX코드가 먼저 분석되기 전에 함수가 실행된다.
<br/><br/>
3. form 태그 안에 있는 type=”submit” 버튼을 누르면 서버에 재요청하게 된다. 재요청으로 인한 렌더링되는 것을 방지하기 위해서 preventDefault 메소드를 사용하면 된다. 이 메서드는 자바스크립트 안에 내장 되어있다.
<br/><br/>
4. 자식컴포넌트의 데이터를 부모컴포넌트에게 전달하기 위해서는 부모 컴포넌트에서 props로 함수를 전달해서 사용하면 된다.
<br/>

```js
// NewExpense.js

function NewExpense() {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      // 확인을 위해서 Math.random() 사용
      id: Math.random().toString(),
    };
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
```

```js
// ExpenseForm.js

function ExpenseForm(props) {
  function submitHandler(event) {
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  }

  return <form onSubmit={submitHandler}></form>;
}
```

NewExpense.js에서 선언된 saveExpenseDataHandler()를 props를 통해서 ExpenseForm.js에 전달한다.

---

</br>

## 2022.12.02.(금)

### Chapter - Section4: 63~

<br/>
1. 
App.js에 있는 expenses를 Expense.js에 props로 전달해서 하드코딩으로 렌더링 하던 것을 map함수를 사용해서 렌더링함 
useState를 사용해서 Add Expense 버튼이 눌렸을 때 입력된 데이터가 expenses에 업데이트 될 수 있도록 적용

```js
const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});
```

이렇게 해서 년도를 변경하면 해당하는 년도에 expense만 리스트에 나타난다.
<br/>
아래 코드를 추가해줌으로서 expense가 존재하지 않으면 "No expense found." 라는 텍스트를 출력한다.

```js
// Expense.js

let expenseContent = <p>No expense found.</p>;

if (filteredExpenses.length > 0) {
  expenseContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

<br/>
버튼 클릭으로 ExpenseForm 사라지고 나타나게 할 수 있도록 적용
그리고 cancel버튼 눌렀을 때 isEditing의 상태가 변경 될 수 있도록
props로 cancelHandler함수를 전달

```js
// Expense.js

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
      {isEditing && <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
```
