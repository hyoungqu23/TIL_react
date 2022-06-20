import styled from 'styled-components';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  return (
    <StyledExpenseDate>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </StyledExpenseDate>
  );
};

export default ExpenseDate;

const StyledExpenseDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  & > div {
    margin: 0.1rem;
  }

  .expense-date__month {
    font-size: 1rem;
    font-weight: bold;
  }

  .expense-date__year {
    font-size: 0.75rem;
  }

  .expense-date__day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
