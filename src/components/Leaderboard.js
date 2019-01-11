import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardCard from './LeaderboardCard'

export const totalCreated = (user) => {
  return user.questions.length;
}

export const totalAnswered = (user) => {
  return Object.keys(user.answers).length;
}

class LeaderBoard extends Component {
  render() {
    const { sortedUid } = this.props;

    return(
      <div className='container'>
        <div className='header text-center p-2'> <h5>Leaderboard</h5>
        </div>
        <div className='card-columns text-center ' >
          <ul className= 'list-unstyled'>
            {sortedUid.map((id)=> (
              <li key={id}>
                <LeaderboardCard id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {

  return {
    sortedUid: Object.keys(users).sort((a,b) => 
      (totalAnswered(users[b]) + totalCreated(users[b])) - 
        (totalAnswered(users[a]) + totalCreated(users[a]))
    )
  }
}
export default connect(mapStateToProps)(LeaderBoard);