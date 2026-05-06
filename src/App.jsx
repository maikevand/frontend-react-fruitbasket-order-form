import './App.css'
import React from "react";
import AmountCounter from "./components/AmountCounter.jsx";

function App() {
    const [strawberries, setStrawberries] = React.useState(0);
    const [bananas, setBananas] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);

    function resetAll() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <ul className="fruits-list">
                    <AmountCounter
                        emoji="🍓"
                        name="Aardbeien"
                        amount={strawberries}
                        setAmount={setStrawberries}
                    />
                    <AmountCounter
                        emoji="🍌"
                        name="Bananen"
                        amount={bananas}
                        setAmount={setBananas}
                    />
                    <AmountCounter
                        emoji="🍏"
                        name="Appels"
                        amount={apples}
                        setAmount={setApples}
                    />
                    <AmountCounter
                        emoji="🥝"
                        name="Kiwi's"
                        amount={kiwis}
                        setAmount={setKiwis}
                    />
                </ul>
                <button type="button" onClick={resetAll}>Reset</button>
            </section>
        </>
    )
}

export default App
