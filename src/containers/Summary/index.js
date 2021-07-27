import SummaryBox from "../../components/SummaryBox"
import Button from '../../components/Button'

const Summary = ({tipAmount, totalAmountPerPerson, isBtnDisabled, resetBtnHandler}) => {

    return (
        <section className="summary-container">
            <div>
                <SummaryBox
                    summaryTitle={'Tip Amount'}
                    dollarSummary={tipAmount ? tipAmount.toFixed(2) : '$0.00'}/>
                <SummaryBox
                    summaryTitle={'Total'}
                    dollarSummary={totalAmountPerPerson ? totalAmountPerPerson.toFixed(2) : '$0.00'}/>
            </div>
            <div>
                <Button 
                    classes={'reset-btn'} 
                    text={'RESET'} 
                    isPercentage={false}
                    isBtnDisabled={isBtnDisabled}
                    fn={resetBtnHandler}
                />
            </div>
        </section>
    )
}

export default Summary
