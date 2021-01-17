import React, {Component} from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import UserQuestionCard from "./UserQuestionCard";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


class HomePage extends Component {
    render() {
        console.log('props on the homepage are', this.props)
        return (
            <div>
                <NavBar/>
                <br/>
                <Nav variant="tabs" defaultActiveKey="/home">
                    {/*<Nav.Item>*/}
                    {/*    {this.props.unansweredQuestionsByUser?<Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>*/}
                    {/*        :<Nav.Link eventKey="answered">Answered Questions</Nav.Link>}*/}
                    {/*</Nav.Item>*/}
                    <Nav.Item>
                        <Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    {this.props.questionsOptionOneText.map((obj) => (
                        <UserQuestionCard
                            questionText={obj.optionOne.text}
                            userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}) {
    const questionsId = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const questionsOptionOneText = Object.values(questions);
    const usersAvatar = users;
    const answeredQuestionsByUser = Object.keys(users[authedUser].answers);
    const unansweredQuestionsByUser = Object.values(questions).filter((question) => !answeredQuestionsByUser.includes(question.id));
    return {
        questionsId,
        questionsOptionOneText,
        answeredQuestionsByUser,
        usersAvatar,
        unansweredQuestionsByUser
    }
}

export default connect(mapStateToProps)(HomePage)