import "./FormInput.css"

function FormInput ({fieldname, text, type, value, setValue}) {
    return (
        <label className="form-input" htmlFor={fieldname}>
            {text}
            <input
            type={type}
            id={fieldname}
            name={fieldname}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
}

export default FormInput;