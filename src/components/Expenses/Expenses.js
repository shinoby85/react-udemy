import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2021");

    return (
        <div className='expenses'>
            <div className="expenses-filter">
                <ExpensesFilter selected={filterYear} updateFilterYear={setFilterYear} />
            </div>
            <div className="expenses-items">
                {(props.expenses.filter(item => item.date.getFullYear() === Number(filterYear)).map(item => (
                    <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date}/>
                )))}
            </div>
        </div>
    )
}

export default Expenses;