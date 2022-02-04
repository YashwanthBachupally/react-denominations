// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

const denominationsList = [
  {id: 1, value: 50},
  {id: 2, value: 100},
  {id: 3, value: 200},
  {id: 4, value: 500},
]

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdraw = (id, val) => {
    const intval = parseInt(val)
    this.setState(prev => ({balance: prev.balance - intval}))
  }

  render() {
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="card-cont">
          <div className="profile-cont">
            <p className="logo">s</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-cont">
            <p className="your">Your Balance</p>
            <div className="amount-cont">
              <p className="amont">{balance}</p>
              <p className="in-rs">In Rupees</p>
            </div>
          </div>
          <p className="wihdrw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-withdraw">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                amounts={each}
                withdraw={this.onWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
