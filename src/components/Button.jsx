import "./Button.css"
import React from "react";

function Button({action, text}) {
    return (
        <button type="button" onClick={action}>
            {text}
        </button>
    );
}

export default Button;