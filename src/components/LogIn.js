import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LogIn extends Component {

    state = {
        authedUser: ''
      }

    handleSubmit = (e) => {
        e.preventDefault();

        const { authedUser } = this.state;
        const { dispatch } = this.props;


        if(authedUser !== '') {
            dispatch(setAuthedUser(authedUser))
        }
    };

    handleChange = (e) => {
        this.setState({
          authedUser: e.currentTarget.value 
        })
    };

    render() {
        const { users } = this.props;

        return (
            <div className='container'>
                <div className="card border-primary mb-3 w-50 text-center m-2 p-2" >
                    <img className='img-thumbnail mx-auto' width='180' height='180' src="https://eagleagent.s3.amazonaws.com/uploads/1492046372-3-2803/uploads_2F1491971684529-ytntirf4mgn-9caeb18dd7e2738bda878cc14f9671c4_2Fpondering_baby.jpg" alt="pondering baby"/>
                    <div className="card-body">
                        <h5 className="card-title">Would You Rather...?</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Select User</label>
                                <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
                                    {Object.keys(users).map((id) => (
                                    <option key={id} value={id} >{users[id].name} </option>
                                    ))}
                                </select>
                            </div>
                            <p className="card-text"> Please sign in to continue</p>
                            <button type='submit' className="btn btn-primary">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        );
        }
    }

    function mapStateToProps ({ users }) {
        return {
        users
        }
    }

export default connect(mapStateToProps)(LogIn);
