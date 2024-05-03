import {useState} from "react";
import {log} from "../log.js";

export default function ConfigureCounter({onSet}) {
    log('<ConfigureCounter /> rendered', 1);

    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    }

    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber}/>
            <button onClick={() => {
                onSet(enteredNumber);
                setEnteredNumber(0);
            }}>Set
            </button>
        </section>
    );
}