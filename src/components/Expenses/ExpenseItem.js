import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
function ExpenseItem({id, title, date, amount}) {
    return (
        <div className='expense-item' id={id}>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    {amount}
                </div>
            </div>
        </div>
    )
}
export default ExpenseItem;