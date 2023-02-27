// Write your code here
import {Component} from 'react'
import './index.css'

export default class Timer extends Component {
  state = {start: false, seconds: 1500, minutesh1: 25}

  starttime = () => {
    const {start} = this.state
    if (!start) {
      this.setState({
        start: true,
      })
      this.some = setInterval(() => {
        this.setState(prev => ({seconds: prev.seconds - 1}))
      }, 1000)
    }
  }

  stoptime = () => {
    const {start} = this.state
    if (start) {
      clearInterval(this.some)
      this.setState({
        start: false,
      })
    }
  }

  decrese = () => {
    const {start} = this.state
    if (!start) {
      this.setState(prev => ({
        seconds: prev.seconds - 60,
        minutesh1: prev.minutesh1 - 1,
      }))
    }
  }

  increse = () => {
    const {start} = this.state
    if (!start) {
      this.setState(prev => ({
        seconds: prev.seconds + 60,
        minutesh1: prev.minutesh1 + 1,
      }))
    }
  }

  reset = () => {
    clearInterval(this.some)
    this.setState({
      seconds: 1500,
      minutesh1: 25,
      start: false,
    })
  }

  render() {
    const {start, seconds, minutesh1} = this.state
    const minutes = Math.floor(seconds / 60)
    const second = seconds % 60

    return (
      <>
        <h1>Digital Timer</h1>
        <div className="body">
          <div className="timetime">
            <div className="bla">
              <h1>
                {minutes}:{second}0
              </h1>
              {start ? <p>Running</p> : <p>Paused</p>}
              {/* <p>{!start ? 'Paused' : 'Running'}</p> */}
            </div>
          </div>
          <div>
            <div className="classs">
              {start ? (
                <>
                  <button type="button" onClick={this.stoptime}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                  </button>
                  <p>Paused</p>
                </>
              ) : (
                <>
                  <button type="button" onClick={this.starttime}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png "
                      alt="play icon"
                    />
                    Start
                  </button>
                </>
              )}
              <button type="button" onClick={this.reset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  alt="reset icon"
                />
              </button>
              <p>Reset</p>
            </div>
            <p className="para">Set timer limit</p>
            <div className="settime">
              <button type="button" onClick={this.decrese}>
                -
              </button>
              <p>{minutesh1}</p>
              <button type="button" onClick={this.increse}>
                +
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
