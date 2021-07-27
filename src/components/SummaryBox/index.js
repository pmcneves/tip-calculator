const SummaryBox = ({summaryTitle, dollarSummary}) => {
    return (
        <div className="summary-dollars">
            <div>
                <div className="summary-title">
                    {summaryTitle}
                </div>
                <div className="summary-subtitle">
                    / person
                </div>
            </div>
            <div className="summary-totals">
                {dollarSummary}
            </div>
        </div>
    )
}

export default SummaryBox
