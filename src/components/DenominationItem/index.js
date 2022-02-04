// Write your code here

import './index.css'

const DenominationItem = props => {
  const {amounts, withdraw} = props
  const {value, id} = amounts
  const draw = () => {
    withdraw(value)
  }
  return (
    <li>
      <button type="button" onClick={draw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
