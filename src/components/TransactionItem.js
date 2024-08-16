import React from 'react';
import './item.css';

export default function TransactionItem({ sno, description, sign, amount, onDelete }) {
  const myStyle = {
    backgroundColor: sign === '+' ? '#28a745' : '#dc3545',
    color: '#ffffff',
  };

  return (
    <div className='item'>
      <div className="sno iteminside">{sno}</div>
      <div className="description iteminside">{description}</div>
      <div className="sign iteminside" style={myStyle}>{sign}</div>
      <div className="amount iteminside">Rs. {amount}</div>
      <button className="delete-btn iteminside" onClick={onDelete}>Delete</button>
    </div>
  );
}
