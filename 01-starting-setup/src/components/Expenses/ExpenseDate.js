import './ExpenseDate.css';

function ExpenseDate(props) {
  let year = props.date.toLocaleString('en-US', {month: 'long'});
  let month = props.date.toLocaleString('en-US', {day: '2-digit'});
  let day = props.date.getFullYear();
 return (
  <div className='expense-date'>
    <div className='expense-date__year'>{year}</div>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__day'>{day}</div>
  </div>
 )
};

export default ExpenseDate; 