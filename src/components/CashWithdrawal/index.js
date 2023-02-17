import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

const cashList = [
  {id: 1, rupees: 50},
  {id: 2, rupees: 100},
  {id: 3, rupees: 200},
  {id: 4, rupees: 500},
]

class CashWithdrawal extends Component {
  state = {balance: '2000'}

  withDrawMoney = rupees => {
    const {balance} = this.state
    if (balance - rupees >= 0) {
      this.setState({balance: parseInt(balance) - rupees})
    }
  }

  render() {
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="nameContainer">
            <div className="logo">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-section">
            <p className="balance-heading">Your Balance</p>
            <p className="balance">{balance}</p>
          </div>
          <div className="Rupees-section">
            <p className="Rupees">In Rupees</p>
          </div>
          <div className="withdraw-section">
            <p className="withdraw-heading">Withdraw</p>
            <p className="Sum-In-Rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <ul className="rupees-container">
              {cashList.map(eachItem => (
                <DenominationItem
                  rupees={eachItem.rupees}
                  key={eachItem.id}
                  withDrawMoney={this.withDrawMoney}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
