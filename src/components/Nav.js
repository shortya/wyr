import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Nav extends Component {

  handleLogout = ()=> {
    const { history, dispatch } = this.props;
    dispatch(setAuthedUser(''));
    history.push('/');
  };

  render(){
    const { authedUserName, avatarURL } = this.props;

    return (
      
      <div className="container" > 
        <div className="row justify-content-start">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <button className="navbar-btn btn" disabled >{authedUserName + '   '}<img className='img-thumbnail' width='50' height='50' src={avatarURL} alt='logged in user avatarURL' /></button>
                <NavLink to='/'  activeClassName='active' className="nav-item nav-link active">
                  Home  |<span className="sr-only">(current)</span>
                </NavLink>
                <NavLink to='/add' className="nav-item nav-link">
                  Add Question  |
                </NavLink>
                <NavLink to='/leaderboard' activeClassName='active' className="nav-item nav-link">
                  Leaderboard  |
                </NavLink>
                <NavLink to='/' activeClassName='active' className="nav-item nav-link" onClick={this.handleLogout}>
                  Log out   |
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }){
  return {
    authedUserName: users[authedUser].name,
    avatarURL: users[authedUser].avatarURL
  }
}

export default withRouter(connect(mapStateToProps)(Nav));
