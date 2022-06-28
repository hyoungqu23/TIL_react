import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import styled from 'styled-components';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const handleFilterChange = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear,
  );

  return (
    <StyledExpenses className="expenses">
      <ExpenseFilter
        onChangeFilter={handleFilterChange}
        selectedYear={selectedYear}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
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
