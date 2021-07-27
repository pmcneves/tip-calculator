import Input from '../../components/Input'
import Title from '../../components/Title'
import dollarImage from '../../assets/icon-dollar.svg'

const Bill = ({setBillValue, billValue}) => {

    const billValueHandler = e => {
        setBillValue(e.target.value)
    }

    return (
        <section>
            <Title>Bill</Title>
            <Input 
                fn={billValueHandler}
                placeholder={'0.00'}
                value={billValue}
                image={dollarImage}
            />
        </section>
    )
}

export default Bill
