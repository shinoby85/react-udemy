import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
    return (
        <div className='new-expense'>
            <ExpenseForm onAddNewExpense={onAddExpense}/>
        </div>
    );
};

export default NewExpense;