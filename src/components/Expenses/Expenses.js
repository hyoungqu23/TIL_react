import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import styled from 'styled-components';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const handleFilterChange = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === +selectedYear;
  });

  let expensesContent = <div>No Expense</div>;

  filteredExpenses.length > 0 &&
    (expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    }));

  return (
    <StyledExpenses className="expenses">
      <ExpenseFilter
        onChangeFilter={handleFilterChange}
        selectedYear={selectedYear}
      />
      {expensesContent}
    </StyledExpenses>
  );
};

export default Expenses;

const StyledExpenses = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;
