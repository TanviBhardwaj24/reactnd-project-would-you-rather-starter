import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import {handleSaveQuestionAnswer} from "../actions/shared";
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavBar from "./NavBar";
import { Redirect } from 'react-router';

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
    }

    render() {
        const question_id = this.props.match.params.question_id;
        if(question_id === undefined){
            return <Redirect to="/questions/incorrect_id" />;
        }

        // determine if the question has been answered by the logged in user
        const hasQuesBeenAnswered = Object.keys(this.props.loggedInUser.answers).includes(question_id)
        const questionIdObj = Object.values(this.props.questions[question_id])
        const authorID = this.props.questions[question_id].author;
        const authorName = this.props.users[authorID].name;
        const authorAvatarURL = this.props.users[authorID].avatarURL;

        const votesOptionOne = questionIdObj[3].votes.length;
        const votesOptionTwo = questionIdObj[4].votes.length;
        const votesTotal = votesOptionOne + votesOptionTwo;
        const votesOptionOnePercentage = (votesOptionOne / votesTotal) * 100;
        const votesOptionTwoPercentage = (votesOptionTwo / votesTotal) * 100;

        return (
            <div>
                <NavBar></NavBar>
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
                        <div>
                            <Card style={{marginBlockStart: '2rem', marginInlineStart: '29rem', width: '25rem'}}>
                                <Card.Text>
                                    <b>Asked By {authorName}</b>
                                </Card.Text>
                                <Card.Img src={authorAvatarURL}/>
                                <br/>
                                <Card.Title style={{textAlign: 'center'}}><h1>Results</h1></Card.Title>
                                <Card>
                                    <Card.Text>
                                        Would You Rather <b>{questionIdObj[3].text}</b>
                                    </Card.Text>
                                    <ProgressBar now={votesOptionOnePercentage}
                                                 label={`${votesOptionOnePercentage}%`}></ProgressBar>
                                    <span>{votesOptionOne} out of {votesTotal}</span>
                                </Card>
                                <br/>
                                <Card>
                                    <Card.Text>
                                        Would You Rather <b>{questionIdObj[4].text}</b>
                                    </Card.Text>
                                    <ProgressBar now={votesOptionTwoPercentage}
                                                 label={`${votesOptionTwoPercentage}%`}></ProgressBar>
                                    <span>{votesOptionTwo} out of {votesTotal}</span>
                                </Card>
                            </Card>
                            <span>The user chose this option :
                             <b>{this.props.users[this.props.authedUser].answers[questionIdObj[0]]}</b>   </span>
                        </div>}
                </form>

            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}) {
    const loggedInUser = authedUser ? users[authedUser] : null;
    return {
        loggedInUser,
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps, {handleSaveQuestionAnswer})(ViewPollQuestion)