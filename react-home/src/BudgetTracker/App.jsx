import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
