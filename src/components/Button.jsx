function Button({action, text, className}) {
    return (
        <button
            type="button"
            className={className}
            onClick={action}>
            {text}
        </button>
    );
}

export default Button;