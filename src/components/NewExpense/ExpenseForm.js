import React, { useState } from 'react';
import styled from 'styled-components';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [enteredData, setEnteredData] = useState({
  // 	enteredTitle: '',
  // 	enteredAmount: '',
  // 	enteredDate: ''
  // });

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredDate((prevState) => {
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // })
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredDate((prevState) => {prevState
    //   ...prevState,
    //   enteredAmount: event.target.value,
    // })
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredDate((prevState) => {
    //   ...prevState,
    //   enteredDate: event.target.value,
    // })
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // 객체화
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    // 초기화 -> 양방향 바인딩 활용
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <StyledExpenseForm onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            onChange={handleTitleChange}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0"
            step="1"
            onChange={handleAmountChange}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
            value={enteredDate}
          />
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
