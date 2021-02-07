import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import authedUser from "../reducers/authedUser";
import {handleSaveQuestionAnswer} from "../actions/shared";
import ProgressBar from 'react-bootstrap/ProgressBar';

class ViewPollQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            userAnswer: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        if (this.state.userAnswer !== '') {
            this.props.handleSaveQuestionAnswer(this.props.authedUser, this.props.match.params.question_id, this.state.userAnswer);
        }
        console.log(this.state.userAnswer)
    }

    render() {
        console.log('the props on the viewpollquestion page are ', this.props)
        const userAvatar = this.props.userAvatar;
        const questionText = this.props.questionText;
        // console.log('the auth user is', this.props.authedUser);
        const question_id = this.props.match.params.question_id;
        const questionAuthorName = this.props.users[question_id.author];
        // console.log('this.props.params', question_id);
        // console.log('the logged in user is', this.props.loggedInUser);


        // determine if the question has been answered by the logged in user
        const hasQuesBeenAnswered = Object.keys(this.props.loggedInUser.answers).includes(question_id)
        const questionIdObj = Object.values(this.props.questions[question_id])
        // const usersObj = Object.values(this.props.users[])
        console.log('questionIdObj', questionIdObj)
        const questionUsersName = this.props.users[(questionIdObj[1])[1]]
        // console.log('usersObj', usersObj)
        const authorID = this.props.questions[question_id].author;
        // console.log('authorID is', authorID);
        const authorName = this.props.users[authorID].name;
        const authorAvatarURL = this.props.users[authorID].avatarURL;

        const votesOptionOne = questionIdObj[3].votes.length;
        const votesOptionTwo = questionIdObj[4].votes.length;
        const votesTotal = votesOptionOne + votesOptionTwo;
        const votesOptionOnePercentage = (votesOptionOne / votesTotal) * 100;
        const votesOptionTwoPercentage = (votesOptionTwo / votesTotal) * 100;

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    {!hasQuesBeenAnswered ?
                        <Card style={{marginBlockStart: '2rem', marginInlineStart: '29rem', width: '25rem'}}>
                            <Card.Text>
                                <b>{authorName}</b> asks
                            </Card.Text>
                            <Card.Img variant="top" src={authorAvatarURL}/>
                            <Card.Body>
                                <Card.Title>Would You Rather</Card.Title>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="optionOne"
                                        checked={this.state.userAnswer === 'optionOne'}
                                        onChange={this.onValueChange}
                                    />
                                    <label><Card.Text>
                                        {questionIdObj[3].text}
                                    </Card.Text></label>
                                </div>
                                <div className="radio">
                                    <input
                                        type="radio"
                                        value="optionTwo"
                                        checked={this.state.userAnswer === 'optionTwo'}
                                        onChange={this.onValueChange}
                                    />
                                    <label><Card.Text>
                                        {questionIdObj[4].text}
                                    </Card.Text></label>
                                </div>
                                <button
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </Card.Body>
                        </Card> :
                    <Card style={{marginBlockStart: '2rem', marginInlineStart: '29rem', width: '25rem'}}>
                        <Card.Text>
                            <b>Asked By {authorName}</b>
                        </Card.Text>
                        <Card.Img src={authorAvatarURL}/>
                        <br/>
                        <Card.Title style={{textAlign:'center'}}><h1>Results</h1></Card.Title>
                        <Card>
                            <Card.Text>
                            Would You Rather <b>{questionIdObj[3].text}</b>
                            </Card.Text>
                            <ProgressBar now={votesOptionOnePercentage} label={`${votesOptionOnePercentage}%`}></ProgressBar>
                            <span>{votesOptionOne} out of {votesTotal}</span>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Text>
                            Would You Rather <b>{questionIdObj[4].text}</b>
                            </Card.Text>
                            <ProgressBar now={votesOptionTwoPercentage} label={`${votesOptionTwoPercentage}%`}></ProgressBar>
                            <span>{votesOptionTwo} out of {votesTotal}</span>
                        </Card>
                    </Card>}

                </form>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, props) {
    const loggedInUser = authedUser ? users[authedUser] : null;
    return {
        loggedInUser,
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps, {handleSaveQuestionAnswer})(ViewPollQuestion)