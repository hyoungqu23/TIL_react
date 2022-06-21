import React from 'react';
import styled from 'styled-components';

const ExpenseForm = () => {
  return (
    <StyledExpenseForm>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input name="amount" type="number" min="0" step="1" />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input name="date" type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </StyledExpenseForm>
  );
};

export default ExpenseForm;

const StyledExpenseForm = styled.form`
  .new-expense__controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .new-expense__control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  .new-expense__control input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }

  .new-expense__actions {
    text-align: right;
  }
`;
