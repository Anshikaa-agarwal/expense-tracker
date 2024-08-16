import React, { useState } from 'react';
import TransactionItem from './TransactionItem';
import './card.css';
import Form from './Form';

export default function TransactionCard() {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const description = e.target['add-desc'].value;
        const type = e.target['type'].value;
        const amount = parseFloat(e.target['amount'].value);

        if (description && type && !isNaN(amount)) {
            const newTransaction = {
                description: description,
                sign: type === 'Income' ? '+' : '-',
                amount: type === 'Income' ? amount : -amount,
            };

            setTransactions([...transactions, newTransaction]);

            // Update balance
            setBalance(balance + newTransaction.amount);

            // Clear the form fields
            e.target.reset();
        }
    };

    const handleDelete = (index) => {
        const transactionToDelete = transactions[index];
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(updatedTransactions);

        // Update balance
        setBalance(balance - transactionToDelete.amount);
    };

    return (
        <div className='container'>
            <div className="balance">Balance: Rs. {balance}</div>

            <div className='card'>
                {transactions.map((transaction, index) => (
                    <TransactionItem
                        key={index}
                        sno={index + 1}
                        description={transaction.description}
                        sign={transaction.sign}
                        amount={Math.abs(transaction.amount)}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>

            <Form handleOnSubmit={handleOnSubmit} />
        </div>
    );
}
