const Button = ({classes, fn, isPercentage, text, isBtnDisabled}) => (
    <div>
        <button disabled={isBtnDisabled} className={`btn ${classes}`} onClick={()=>fn(text)}>
            {isPercentage ? `${text}%` : text}
        </button>
    </div>
)

export default Button
