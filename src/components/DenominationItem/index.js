import './index.css'

const DenominationItem = props => {
  const {rupees, withDrawMoney} = props

  const withDraw = () => {
    withDrawMoney(rupees)
  }

  return (
    <li className="list-items">
      <button
        type="button"
        value={rupees}
        className="button"
        onClick={withDraw}
      >
        {rupees}
      </button>
    </li>
  )
}

export default DenominationItem
