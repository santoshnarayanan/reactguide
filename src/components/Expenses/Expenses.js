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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear}
        onChangeFilter={filteredChangeHandler} />
      {filteredExpenses.length === 0 ?
        (<p>No expense found</p>) :
        (filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        )))}
    </Card>
  );
}

export default Expenses;