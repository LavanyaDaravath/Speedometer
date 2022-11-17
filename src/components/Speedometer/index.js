import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  clickAccelerate = () => {
    console.log(`click accelerate`)
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  clickBrake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bgContainer">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-img"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button btn"
            onClick={this.clickAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button btn1"
            onClick={this.clickBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
