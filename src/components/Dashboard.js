import React, { Component } from 'react';
import PollCard from './PollCard';
import { connect } from 'react-redux'

class Dashboard extends Component {

    state = {
        answered: false,
      }
    
    handleAnswerClick = (e) => {
      this.setState(prevState => ({
          answered: !prevState.answered
        }));
    };

    render() {
        const { answered } = this.state;
        const { user } = this.props;

        return (
        <div className='container'>
            <div className='header text-center p-2'> <h5>Dashboard</h5>
                <div className='text-center p-2'>
                    <button type="button" className="btn btn-primary btn-sm mr-2" onClick={this.handleAnswerClick} >{ answered === true ? 'Show Unanswered Polls' : 'Show Answered Polls' }</button>
                </div>
            </div>
	        <ul className='dashboard-list'>
            {answered === false
              ? this.props.questionIds.filter((id) => 
                !(Object.keys(user.answers).includes(id))).map((id) => (
                  <li className= 'list-unstyled' key={id}>
                    <PollCard id={id} show={'yes'} />
                  </li>
                )) 
              : this.props.questionIds.filter((id) => (
                Object.keys(user.answers).includes(id))).map((id) => (
                  <li className= 'list-unstyled' key={id} >
                    <PollCard id={id} show={'yes'}/>
                  </li>
                ))
            }
	        </ul>
	      </div>
	    )
	  }
	}
	
	function mapStateToProps ({ questions, users, authedUser }) {
	  return {
	    questionIds: Object.keys(questions)
        .sort((a,b) => 
          questions[b].timestamp - questions[a].timestamp),
          user: users[authedUser]
	  }
	}
	
  export default connect(mapStateToProps)(Dashboard)
