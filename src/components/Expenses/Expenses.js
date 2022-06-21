import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import styled from 'styled-components';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const handleFilterChange = (filteredYear) => {
    console.log('Expenses.js ', filteredYear);
    setSelectedYear(filteredYear);
  };

  return (
    <StyledExpenses className="expenses">
      <ExpenseFilter
        onChangeFilter={handleFilterChange}
        selectedYear={selectedYear}
      />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
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
