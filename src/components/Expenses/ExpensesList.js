import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
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

  return <>{expensesContent}</>;
};

export default ExpensesList;

// .expenses-list {
//   list-style: none;
//   padding: 0;
// }

// .expenses-list__fallback {
//   color: white;
//   text-align: center;
// }
