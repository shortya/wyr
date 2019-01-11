import React, { Component } from 'react'
import { connect } from 'react-redux'
import { totalAnswered, totalCreated } from './Leaderboard'


class LeaderboardCard extends Component {

    render() {

        const { user } = this.props;

        return (
            <div className="card border-primary mb-3 w-80" >
                <img className='img-thumbnail ' width='100' height='100' src={user.avatarURL} alt="Poll Creator Avatar"/>
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Total Score:{totalAnswered(user)+ totalCreated(user)}</p>
                <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{totalAnswered(user)}</h5>
                            <p className="card-text">Answered</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{totalCreated(user)}</h5>
                            <p className="card-text">Created</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }, { id }){
    return {
    user: users[id]
    }
}

export default connect(mapStateToProps)(LeaderboardCard);
