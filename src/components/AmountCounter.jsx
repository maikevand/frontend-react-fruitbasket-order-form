import "./AmountCounter.css";

function AmountCounter ({emoji, name, amount, setAmount}) {
    return (
        <li>{emoji} {name}
            <button type="button" disabled={amount === 0} onClick={() => setAmount(amount - 1)}> - </button>
            {amount}
            <button type="button" onClick={() => setAmount(amount + 1)}> + </button>
        </li>
    )
}

export default AmountCounter;