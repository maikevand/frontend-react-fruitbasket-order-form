import "./AmountCounter.css";

function AmountCounter({emoji, name, amount, setAmount}) {
    return (
        <li className="article-button">
            <span className="article-name">
            {emoji} {name}
            </span>
            <button type="button" disabled={amount === 0} onClick={() => setAmount(amount - 1)}> -</button>
            <span className="article-amount">{amount}</span>
            <button type="button" onClick={() => setAmount(amount + 1)}> +</button>
        </li>
    )
}

export default AmountCounter;