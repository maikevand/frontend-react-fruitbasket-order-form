import "./AmountCounter.css";
import React from "react";

function AmountCounter ({emoji, name}) {
    const [amount, setAmount] = React.useState (0);
    return (
        <li>{emoji} {name}
            <button type="button" disabled={amount === 0} onClick={() => setAmount(amount - 1)}> - </button>
            {amount}
            <button type="button" onClick={() => setAmount(amount + 1)}> + </button>
        </li>
    )
}

export default AmountCounter;