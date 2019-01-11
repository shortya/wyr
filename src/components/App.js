import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav';
import Poll from './Poll';
import LogIn from './LogIn';
import AddPoll from './AddPoll';
import Leaderboard from './Leaderboard';
import Dashboard from './Dashboard';

class App extends Component {

  componentDidMount() {
    const authedUser = '';
    this.props.dispatch(handleInitialData(authedUser))
  }

  render() {
    const { loggedIn, loading } = this.props;

    return (
      <Router>
        <div className='container'>
          {loading === true
            ? null
            : loggedIn === false
              ? <Route path='/' component={LogIn} />
              : <div>
                  <Nav />
                  <div>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/question/:question_id' component={Poll} />
                    <Route path='/add' component={AddPoll} />
                    <Route path='/leaderboard' component={Leaderboard} />
                  </div>
                </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  const loggedIn = authedUser !== null && authedUser !== '';
  return {
    loading: authedUser === null,
    loggedIn,
    authedUser: authedUser === null? '' : authedUser
  }
}

export default connect(mapStateToProps)(App);
