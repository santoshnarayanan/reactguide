import './Expenses.css';
import './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
        <ExpensesChart expenses ={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;