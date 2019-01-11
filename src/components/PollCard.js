import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../util/helper'
import { updateQuestionAnswer } from '../actions/shared'
import { withRouter } from 'react-router-dom'


class PollCard extends Component {

    state = {
        answer: 'optionOne'
      }

    handleChange = (e) => {
        const answer = e.target.value

        this.setState(() => ({
            answer: answer
        }));
    };
    
    handleClick = () => {
        const { history, id } = this.props;
        history.push(`/question/${id}`);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { answer } = this.state;
        const { dispatch, id, authedUser} = this.props;

        dispatch(updateQuestionAnswer({
            authedUser,
            qid: id,
            answer: answer
        }));
    };

    render() {

        const { answer } = this.state;
        const { show, question } = this.props;
        const { name, avatar, optionOne, optionTwo, choiceOne, choiceTwo,
            votesOne, votesTwo, hasAnswered,} = question;

        return (
            <div className="card border-primary mb-3 w-75" >
                <img className='img-thumbnail ' width='100' height='100' src={avatar} alt="Poll Creator Avatar"/>
                {show === 'yes' ?
                    <div className="card-body">
                        <h5 className="card-title">{name} asks: would you rather...</h5>
                        <p className="card-text">...{optionOne.text} or...?</p>
                        <button className="btn btn-primary" onClick={this.handleClick}>View Poll</button>
                    </div> : hasAnswered ?
                    <div className="card-body">
                        <h5 className="card-title">{name} asked...would you rather...?</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{optionOne.text}</h5>
                                                <p className="card-text">{votesOne} people voted for this - {Math.round((votesOne/(votesOne + votesTwo)*100))}% of the total</p>
                                                {choiceOne ? <button className="btn btn-outline-warning " disabled >Your Choice!</button>: null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{optionTwo.text}</h5>
                                                <p className="card-text">{votesTwo} people voted for this - {Math.round((votesTwo/(votesOne + votesTwo)*100))}% of the total</p>
                                                {choiceTwo ? <button className="btn btn-outline-warning " disabled >Your Choice!</button>: null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                    <div className="card-body">
                        <h5 className="card-title">{name} asks...would you rather...?</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="answer"  value="optionOne" checked = {answer === 'optionOne'}  onChange = {this.handleChange}/>
                                <label className="form-check-label" >
                                {optionOne.text}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="answer"  value="optionTwo" checked = {answer === 'optionTwo'}   onChange = {this.handleChange}/>
                                <label className="form-check-label" >
                                {optionTwo.text}
                                </label>
                            </div>
                            <button className="btn btn-primary" type='submit' >Submit</button>
                        </form>
                    </div> 
                }
            </div>
        );
        }

    }
    function mapStateToProps ({ authedUser, users, questions}, { id, show }) {
        const question = questions[id];
        const author = question? users[question['author']]:'';
        return {
          question: question
            ? formatQuestion(question, author, authedUser)
            : null,
          authedUser
        }
      }

    export default withRouter(connect(mapStateToProps)(PollCard))
