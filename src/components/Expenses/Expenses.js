import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Content found.</p>
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filteredChangeHandler} />
        {expensesContent}
    </Card>
  );
}

export default Expenses;