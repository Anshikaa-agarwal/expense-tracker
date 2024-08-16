import React from 'react';
import './form.css'
export default function Form(props) {
  return (
    <form className="addTransaction" onSubmit={props.handleOnSubmit}>
      <div>
      <label htmlFor="add-desc">Description: </label>
      <input type="text" id='add-desc' name="add-desc" /> <br/>
      </div>

      <div>
      <label htmlFor="type">Type: </label>
      
      <input type="radio" value="Income" name="type" id='income' />
      <label htmlFor="income">Income</label>

      <input type="radio" value="Expense" name="type" id='expense' />
      <label htmlFor="expense">Expense</label> <br />
      </div>

      <div>
      <label htmlFor="amount">Amount: </label>
      <input type='number' id='amount' name="amount" /> <br />
      </div>

      <button type='submit' className='submit'>Add</button>
    </form>
  );
}
