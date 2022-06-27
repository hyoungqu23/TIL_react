import React, { useState } from 'react';
import styled from 'styled-components';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const handleAddButtonClick = () => {
    setIsAddButtonClicked(true);
  };

  const handleCancelButtonClick = (isClicked) => {
    setIsAddButtonClicked(isClicked);
  };

  const handleExpenseDataSave = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  let expenseFormContent = (
    <button onClick={handleAddButtonClick}>Add New Expense</button>
  );

  isAddButtonClicked &&
    (expenseFormContent = (
      <ExpenseForm
        onSaveExpenseData={handleExpenseDataSave}
        isCancelButtonClicked={handleCancelButtonClick}
      />
    ));

  return (
    <StyledNewExpense className="new-expense">
      {expenseFormContent}
    </StyledNewExpense>
  );
};

export default NewExpense;

const StyledNewExpense = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #510674;
    border-color: #510674;
  }

  & button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }

  & button.alternative:hover,
  & button.alternative:active {
    background-color: #ddb3f8;
  }
`;
