import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {Redirect,Link} from 'react-router-dom';
import {formatQuestion} from "../utils/api"
import ViewPollQuestion from "./ViewPollQuestion";
import ViewPollResult from "./ViewPollResult";

class UserQuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            viewPoll: false
        })
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            viewPoll: !state.viewPoll
        }));
    }

    render() {
        console.log('the props on my user card page are ', this.props)
        const questionID = this.props.questionID;
        const questionStatus = this.props.questionStatus;
        const questionText = this.props.questionText;
        const userAvatar = this.props.userAvatar;
        const authorName = this.props.authorName;

        if (questionStatus === 'unanswered' && this.state.viewPoll === true) {
            //redirect to the page which allows the user to vote for the question
            <ViewPollQuestion/>
            // return <Redirect push to={`/questions/${questionID}`} />;

        } else if (questionStatus === 'answered' && this.state.viewPoll === true) {
            //redirect to the page which allows the user to view who voted for the question
            <ViewPollResult/>
            // return <Redirect push to={`/questions/${questionID}`} />;
        }

        return (
            <div>
                <Card style={{marginBlockStart: '2rem', marginInlineStart: '29rem', width: '25rem'}}>
                    <Card.Text>
                        <b>{authorName}</b> asks
                    </Card.Text>
                    <Card.Img variant="top" src={userAvatar}/>
                    <Card.Body>
                        <Card.Title>Would You Rather</Card.Title>
                        <Card.Text>
                            ... {questionText} ...
                        </Card.Text>
                        <Link to={`/questions/${questionID}`}>
                            <Button onClick={this.handleClick}>View Poll</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, {id}) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(UserQuestionCard)