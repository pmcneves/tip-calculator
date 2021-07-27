import { useEffect, useState } from 'react'
import Bill from '../../containers/Bill'
import Header from '../../components/Header'
import SelectTip from '../../containers/SelectTip/'
import NumberOfPeople from '../../containers/NumberOfPeople/'
import Summary from '../../containers/Summary'

const Tips = () => {

    //fields
    const [billValue, setBillValue] = useState(0)
    const [tip, setTip] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0)
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)

    //select tips fields- btn and input
    const [inputValue, setInputValue] = useState(0)
    const [btnValue, setBtnValue] = useState(0)


    useEffect(() => {
        if(billValue && numberOfPeople && tip){
            const tipCalc = (billValue / numberOfPeople) * (tip/100)
            setTipAmount(tipCalc)
            const totalCalc = (billValue / numberOfPeople) + tipCalc
            setTotalAmountPerPerson(totalCalc)
            setIsBtnDisabled(false)
        }
    },[billValue, numberOfPeople, tip])

    const resetBtnHandler = () => {
        setBillValue(0)
        setTip(0)
        setNumberOfPeople(0)
        setTipAmount(0)
        setTotalAmountPerPerson(0)
        setInputValue(0)
        setBtnValue(0)
        setIsBtnDisabled(true)
    }



    return (
        <div>
            <Header/>            
            <div className="tips-section">
                <div className="left-card">
                    <Bill 
                        setBillValue={setBillValue} 
                        billValue={billValue}
                    />
                    <SelectTip 
                        setTip={setTip} 
                        tip={tip}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setBtnValue={setBtnValue}
                    />
                    <NumberOfPeople 
                        billValue={billValue}
                        numberOfPeople={numberOfPeople}
                        setNumberOfPeople={setNumberOfPeople}
                    />
                </div>
                <div  className="right-card">
                    <Summary 
                        tipAmount={tipAmount}
                        totalAmountPerPerson={totalAmountPerPerson}
                        isBtnDisabled={isBtnDisabled}
                        resetBtnHandler={resetBtnHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Tips
