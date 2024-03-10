import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
    const [isOpenForm, setIsOpenForm] = useState(false);
    return (
        <div className='new-expense'>
            {!isOpenForm && <button type='button' onClick={() => setIsOpenForm(true)}>Add New Expense</button>}
            {isOpenForm && <ExpenseForm setIsOpenForm={(value)=>setIsOpenForm(value)} onAddNewExpense={onAddExpense}/>}
        </div>
    );
};

export default NewExpense;