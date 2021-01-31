import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

class ViewPollQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ''
        }
    }

    render() {
        console.log('the props on the viewpollquestion page are ', this.props)
        const userAvatar = this.props.userAvatar;
        const authorName = this.props.authorName;
        const questionText = this.props.questionText;
        console.log('the auth user is', this.props.authedUser);
        const question_id = this.props.match.params.question_id;
        console.log('this.props.params', question_id);
        console.log('the logged in user is', this.props.loggedInUser);
        console.log('authorName is', authorName);

        // determine if the question has been answered by the logged in user
        const hasQuesBeenAnswered = Object.keys(this.props.loggedInUser.answers).includes(question_id)
        const questionIdObj = Object.values(this.props.questions[question_id])
        console.log('questionIdObj', questionIdObj)

        return (
            <div>
                <form>
                    {!hasQuesBeenAnswered ?
                        <Card style={{marginBlockStart: '2rem', marginInlineStart: '29rem', width: '25rem'}}>
                            <Card.Text>
                                <b>{this.props.authorName}</b> asks
                            </Card.Text>
                            <Card.Img variant="top" src={this.props.userAvatar}/>
                            <Card.Body>
                                <Card.Title>Would You Rather</Card.Title>
                                <Card.Text>
                                    {questionIdObj[3].text}
                                </Card.Text>
                                <Card.Text>
                                    {questionIdObj[4].text}
                                </Card.Text>
                            </Card.Body>
                        </Card> : 'show the results if question has been answered'}

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

export default connect(mapStateToProps)(ViewPollQuestion)