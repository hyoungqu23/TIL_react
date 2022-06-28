import React from 'react';
import styled from 'styled-components';

import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <StyledNoItemWarning>No Expense.</StyledNoItemWarning>;
  }

  return (
    <StyledList>
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </StyledList>
  );
};

export default ExpensesList;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
// }

const StyledNoItemWarning = styled.h2`
  color: white;
  text-align: center;
`;
