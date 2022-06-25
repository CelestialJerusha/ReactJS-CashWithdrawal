import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
    state = {count:2000}

    decreaseCashFunction = (value)=>{
        this.setState((preValue)=>({count:preValue.count-value}))
    }
    
    render(){
        const {count} = this.state
        const {denominationsList} = this.props
        
        return(
            <div className='main-container'>
                <div className='name'>
                <h3 className='profile'>S</h3>
                <h2>Sarah Williams</h2>
                </div>
                <div className='balance-details'>
                <p className='balance'>Your Balance</p>
                <div className='balance-amnt'>
                <h1>{count}</h1>
                <p>In Rupees</p>
                </div>
                </div>
                <h2>Withdraw</h2>
                <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className='buttons'>
                {
                   denominationsList.map((eachVal)=><DenominationItem eachObj={eachVal} decreaseCashFunction={this.decreaseCashFunction}/>)
                }
            </ul>

            </div>
        )
    }
}

export default CashWithdrawal