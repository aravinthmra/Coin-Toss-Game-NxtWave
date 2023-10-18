import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    const result = Math.floor(Math.random() * 2)

    if (result === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImage: headsUrl,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImage: tailsUrl,
      }))
    }
  }

  render() {
    const {heads, tails, tossImage} = this.state
    return (
      <div className="bg-container1">
        <div className="card-container1">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img
            className="toss-result-image1"
            src={tossImage}
            alt="toss result"
          />
          <button
            type="button"
            className="toss-button1"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="toss-results-container1">
            <p>{`Total: ${heads + tails}`}</p>
            <p>{`Heads: ${heads}`}</p>
            <p>{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
