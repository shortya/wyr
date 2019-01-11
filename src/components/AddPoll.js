import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateQuestion } from '../actions/questions'

class AddPoll extends Component{

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser} = this.props;

    if (this.optionOneText.value === '' || this.optionTwoText.value === '') {
      alert('You need to fill this in dude');
      return;
    } else if (this.optionOneText.value === this.optionTwoText.value) {
      alert('whaaat?  You need two DIFFERENT choices dude');
      return;
    }

    dispatch(updateQuestion({
      author: authedUser,
      optionOneText: this.optionOneText.value,
      optionTwoText: this.optionTwoText.value,
    }));
    e.currentTarget.reset();
    this.props.history.push('/');
  };

  render(){
    return(
        <div className="card border-primary mb-3" >
            <div className="card-header">Create New Question</div>
            <div className="card-body text-primary">
                <h5 className="card-title">Complete the question:</h5>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input ref={input => this.optionOneText = input} type="text" className="form-control" id="option-one" aria-describedby="emailHelp" placeholder="Enter option one text here"/>
                    </div>
                    OR
                    <div className="form-group">
                        <input ref={input => this.optionTwoText = input} type="text" className="form-control" id="option-two" placeholder="Enter option one text here"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(AddPoll))
