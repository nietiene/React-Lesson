import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.text} 
            <span style={{ color: tx.amount >= 0 ? 'green' : 'red' }}>
              ${tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
