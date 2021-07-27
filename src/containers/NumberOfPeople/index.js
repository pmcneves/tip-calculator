import Input from "../../components/Input"
import Title from "../../components/Title"
import personImage from '../../assets/icon-person.svg'


const NumberOfPeople = ({billValue, numberOfPeople, setNumberOfPeople}) => {

    const numberOfPeopleHandler = e => {
        setNumberOfPeople(parseInt(e.target.value))
    }

    const hasErrorMessage = billValue && numberOfPeople===0

    return (
        <section>
            <div className="number-of-people-title">
                <Title>Number of People</Title>
                {hasErrorMessage ? <h4 className="zero">Can't be zero</h4> : ''}
            </div>
            <Input
                classes={'outline-orange'}
                placeholder={'0'}
                image={personImage}
                fn={numberOfPeopleHandler}
                hasErrorMessage={hasErrorMessage}
                value={numberOfPeople}
            />
        </section>
    )
}

export default NumberOfPeople
