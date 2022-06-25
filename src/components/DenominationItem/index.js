import './index.css'

const DenominationItem = (props)=> {
    const {eachObj,decreaseCashFunction} = props
    const {value} = eachObj
    const onClickingButton = ()=>{
        decreaseCashFunction(value)
    } 
        return(
            <div>
                <button type='button' className='btn' onClick={onClickingButton}>{value}</button>
            </div>
        )
    }

export default DenominationItem