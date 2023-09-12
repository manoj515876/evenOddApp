import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  onIncrease = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(preState => ({
      number: preState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    let result
    if (number % 2 === 0) {
      result = 'Even'
    } else {
      result = 'Odd'
    }

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {number}</h1>
          <p className="counter">Count is {result}</p>
          <button className="btn" type="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
