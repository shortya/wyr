import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollCard from './PollCard'
import NotFound from './NotFound'

class Poll extends Component {

  render() {

    const { id, questionExists } = this.props;

    return (
      questionExists
          ? <div>
              <ul>
                <li className= 'list-unstyled' >
                  <PollCard id={id} />
                </li>
              </ul>
            </div>
          : <NotFound />
    )
  }
}

function mapStateToProps ({ questions }, props) {
  const { question_id } = props.match.params;

  return {
    id: question_id,
    questionExists: Object.keys(questions).includes(question_id),
  }
}

export default connect(mapStateToProps)(Poll)
