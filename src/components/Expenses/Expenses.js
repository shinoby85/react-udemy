import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className='expenses'>
            {(props.expenses.map(item => (
                <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} />
            )))}
        </div>
    )
}

export default Expenses;