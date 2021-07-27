const Input = ({fn, placeholder, image, classes, hasErrorMessage, value}) => {
    return (
        <div className="input-container">
            <input 
                type="text"
                className={`input ${classes} ${hasErrorMessage && 'error-border'}`}
                placeholder={placeholder}
                onChange={fn}
                value={value === 0 ? '' : value}    
            />
            {image && <img src={image} className="icon" alt="icon"/>}
            
           
        </div>
    )
}

export default Input
