import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const Expenses = ({ expenses }) => {
  return (
    <StyledExpenses>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
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

const StyledExpenses = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
