import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {formatQuestion} from "../utils/api"

class UserQuestionCard extends Component {
    render() {
        console.log('the props on my user card page are ', this.props)
        const questionText = this.props.questionText;
        const userAvatar = this.props.userAvatar
        // handleClick()
        return (
            <div>
                <Card style={{ marginBlockStart:'2rem',marginInlineStart:'25rem',width: '25rem' }}>
                    <Card.Img variant="top" src={userAvatar} />
                    <Card.Body>
                        <Card.Title>Would You Rather</Card.Title>
                        <Card.Text>
                           ... {questionText} ...
                        </Card.Text>
                        {/*<Button onClick={this.handleClick}>View Poll</Button>*/}
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