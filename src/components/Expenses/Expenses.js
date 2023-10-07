import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import Card from "../UI/Card";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2021");

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} updateFilterYear={setFilterYear}/>
                {(props.expenses.filter(item => item.date.getFullYear() === Number(filterYear)).map(item => (
                    <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date}/>
                )))}
            </Card>
        </div>
    )
}

export default Expenses;