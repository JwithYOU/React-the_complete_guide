import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem (props) {
  let title = props.title;

  const clickHandler = () => {
    console.log("Clicked!");
  }

  return (
    <Card className='expense-item'>
    <ExpenseDate
      date = {props.date}
    />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  )
}

export default ExpenseItem;