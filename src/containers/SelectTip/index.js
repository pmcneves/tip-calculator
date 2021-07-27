import Button from "../../components/Button"
import Title from "../../components/Title"
import Input from '../../components/Input'
import { useState } from "react"

const SelectTip = ({setTip, tip, setInputValue, setBtnValue, inputValue}) => {


    const settingBtnTipHandler = tipValue => {
        setInputValue(0)
        setBtnValue(tipValue)
        setTip(tipValue)
    }

    const settingInputTipHandler = tipValue => {
        let value;
            if(tipValue === '') {
                value = 0
            } else {
                const parsedTipValue = parseInt(tipValue);
                value = parsedTipValue
            }
        
        setBtnValue(0)
        setInputValue(value)
        setTip(value)
    }

    const btnArr = [5, 10, 15, 25, 50, 'Custom']

    return (
        <section>
            <Title>Select Tip %</Title>
            <div className="btns-container">
                {btnArr.map(btn => (
                    btn !== 'Custom' ? 
                        <Button 
                            key={btn} 
                            text={btn} 
                            classes={`tip-percentage-btn ${tip === btn && 'active'}`} 
                            fn={settingBtnTipHandler} 
                            isPercentage={true}
                        />
                        : 
                        <Input 
                            value={inputValue} 
                            key={btn} 
                            placeholder={btn} 
                            classes={'custom-input'} 
                            fn={e=>settingInputTipHandler(e.target.value)}> 
                                {btn} 
                        </Input>
                ))}
            </div>
        </section>
    )
}

export default SelectTip
