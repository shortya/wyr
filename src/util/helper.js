export function formatQuestion (question, author, authedUser) {

    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = author

    return {
      name,
      id,
      timestamp,
      avatar: avatarURL,
      votesOne: optionOne.votes.length,
      votesTwo: optionTwo.votes.length,
      optionOne,
      optionTwo,
      hasAnswered: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser),
      choiceOne: optionOne.votes.includes(authedUser),
      choiceTwo: optionTwo.votes.includes(authedUser)
    }
  }