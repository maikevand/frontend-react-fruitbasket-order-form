import './App.css'
import React from "react";
import AmountCounter from "./components/AmountCounter.jsx";
import Button from "./components/Button.jsx";
import FormInput from "./components/FormInput.jsx";

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
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
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
                        <Button
                            action={resetAll}
                            className="reset-button"
                            text="Reset"
                        />
                    </ul>
                </section>
                <form>
                    <FormInput
                        fieldname="first-name"
                        text="Voornaam"
                        type="text"
                        value={firstNameValue}
                        setValue={setFirstNameValue}
                    />
                    <FormInput
                        fieldname="last-name"
                        text="Achternaam"
                        type="text"
                        value={lastNameValue}
                        setValue={setLastNameValue}
                    />
                    <FormInput
                        fieldname="age"
                        text="Leeftijd"
                        type="number"
                        value={ageValue}
                        setValue={setAgeValue}
                    />
                    <FormInput
                        fieldname="zip-code"
                        text="Postcode"
                        type="text"
                        value={zipCodeValue}
                        setValue={setZipCodeValue}
                    />
                    <fieldset>
                        <div className="form-field">
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
                        </div>
                        <input
                            type="radio"
                            id="day-delivery"
                            name="deliveryMoment"
                            value="day"
                            checked={deliveryMomentValue === "day"}
                            onChange={(e) => setDeliveryMomentValue(e.target.value)}
                        />
                        <label htmlFor="day-delivery"> Overdag</label>
                        <input
                            type="radio"
                            id="evening-delivery"
                            name="deliveryMoment"
                            value="evening"
                            checked={deliveryMomentValue === "evening"}
                            onChange={(e) => setDeliveryMomentValue(e.target.value)}
                        />
                        <label htmlFor="evening-delivery"> 's Avonds</label>
                    </fieldset>
                    <label htmlFor="remarks">Opmerking</label>
                    <textarea
                        id="remarks"
                        name="remarks"
                        rows="4"
                        cols="30"
                        value={remarksValue}
                        onChange={(e) => setRemarksValue(e.target.value)}>
                </textarea>
                    <label htmlFor="form-terms-and-conditions">
                        <input className="checkbox"
                               type="checkbox"
                               id="form-terms-and-conditions"
                               name="terms-and-conditions"
                               checked={termsAndConditionsValue}
                               onChange={(e) => setTermsAndConditionsValue(e.target.checked)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Button
                        action={handleSubmitButtonClick}
                        className="send-button"
                        text="Verzenden"
                    />
                </form>
            </main>
        </>
    )
}

export default App
