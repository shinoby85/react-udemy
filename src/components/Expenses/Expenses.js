import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState("2021");
    const filteredExpenses = props.expenses.filter(item => item.date.getFullYear() === Number(filterYear))

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filterYear} updateFilterYear={setFilterYear}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;