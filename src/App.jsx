
import './App.css'
import React from "react";
import AmountCounter from "./components/AmountCounter.jsx";

function App() {
  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section>
<ul>
    <AmountCounter emoji="🍓" name="Aardbeien" />
    <AmountCounter emoji="🍌" name="Bananen" />
    <AmountCounter emoji="🍏" name="Appels" />
    <AmountCounter emoji="🥝" name="Kiwi's" />
</ul>
            {/*reset button die alle counters op 0 zet*/}
        </section>
    </>
  )
}

export default App
