import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        value={text}
        placeholder="What for?"
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="number"
        value={amount}
        placeholder="Amount (+income, -expense)"
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
