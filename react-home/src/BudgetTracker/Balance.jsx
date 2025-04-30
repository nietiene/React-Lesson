import React from 'react';

function Balance({ transactions }) {
  const amounts = transactions.map(tx => tx.amount);
  const total = amounts.reduce((acc, num) => acc + num, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0).toFixed(2);
  const expense = (
    amounts.filter(a => a < 0).reduce((a, b) => a + b, 0) * -1
  ).toFixed(2);

  return (
    <div>
      <h3>Your Balance: ${total}</h3>
      <div>
        <p>Income: +${income}</p>
        <p>Expense: -${expense}</p>
      </div>
    </div>
  );
}

export default Balance;
