import './App.css'
import React from "react";
import AmountCounter from "./components/AmountCounter.jsx";

function App() {
    const [strawberries, setStrawberries] = React.useState(0);
    const [bananas, setBananas] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);
    const [firstNameValue, setFirstNameValue] = React.useState("");
    const [lastNameValue, setLastNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState(0);
    const [zipCodeValue, setZipCodeValue] = React.useState("");
    const [deliveryFrequencyValue, setDeliveryFrequencyValue] = React.useState("every-week");
    const [deliveryMomentValue, setDeliveryMomentValue] = React.useState("day");
    const [remarksValue, setRemarksValue] = React.useState("");
    const [termsAndConditionsValue, setTermsAndConditionsValue] = React.useState(false);

    function resetAll() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmitButtonClick() {
        console.log({
            strawberries,
            bananas,
            apples,
            kiwis,
            firstNameValue,
            lastNameValue,
            ageValue,
            zipCodeValue,
            deliveryFrequencyValue,
            deliveryMomentValue,
            remarksValue,
            termsAndConditionsValue,
        });
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
            <form>
                <label htmlFor="first-name">
                    Voornaam
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        value={firstNameValue}
                        onChange={(e) => setFirstNameValue(e.target.value)}
                    />
                </label>
                <label htmlFor="last-name">
                    Achternaam
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={lastNameValue}
                        onChange={(e) => setLastNameValue(e.target.value)}
                    />
                </label>
                <label htmlFor="age">
                    Leeftijd
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={ageValue}
                        placeholder="0"
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                </label>
                <label htmlFor="zip-code">
                    Postcode
                    <input
                        type="text"
                        id="zip-code"
                        name="zip-code"
                        value={zipCodeValue}
                        onChange={(e) => setZipCodeValue(e.target.value)}
                    />
                </label>
                <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                <select name="delivery-frequency"
                        id="delivery-frequency"
                        value={deliveryFrequencyValue}
                        onChange={(e) => setDeliveryFrequencyValue(e.target.value)}
                >
                    <option value="every-week">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="every-month">Iedere maand</option>
                </select>
                <fieldset>
                    <input
                        type="radio"
                        id="day-delivery"
                        name="deliveryMoment"
                        value="day"
                        checked={deliveryMomentValue === "day"}
                        onChange={(e) => setDeliveryMomentValue(e.target.value)}
                    />
                    <label htmlFor="day-delivery">Overdag</label>
                    <input
                        type="radio"
                        id="evening-delivery"
                        name="deliveryMoment"
                        value="evening"
                        checked={deliveryMomentValue === "evening"}
                        onChange={(e) => setDeliveryMomentValue(e.target.value)}
                    />
                    <label htmlFor="evening-delivery">'s Avonds</label>
                </fieldset>
                <label htmlFor="remarks">Opmerking</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    rows="4"
                    cols="50"
                    value={remarksValue}
                    onChange={(e) => setRemarksValue(e.target.value)}>
                </textarea>
                <label htmlFor="form-terms-and-conditions">
                    <input
                        type="checkbox"
                        id="form-terms-and-conditions"
                        name="terms-and-conditions"
                        checked={termsAndConditionsValue}
                        onChange={(e) => setTermsAndConditionsValue(e.target.checked)}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="button" onClick={handleSubmitButtonClick}>
                    Verzenden
                </button>
            </form>
        </>
    )
}

export default App
