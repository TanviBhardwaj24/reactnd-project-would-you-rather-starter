import React, {Component} from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import UserQuestionCard from "./UserQuestionCard";
import { Nav} from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state =({
            keyval: "unanswered"
        })
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(keyval){
        this.setState({
            keyval: keyval
        })
    }
    render() {
        console.log('props on the homepage are', this.props)
        console.log('this.state.keyval',this.state.keyval)
        return (
            <div>
                <NavBar/>
                <br/>
                <Nav variant="tabs" defaultActiveKey="unanswered" onSelect={this.handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.state.keyval === "unanswered" ? this.props.unansweredQuestionsByUser.map((obj)=>(
                    <UserQuestionCard
                        questionID = {obj.id}
                        questionStatus = 'unanswered'
                        authorName = {this.props.usersAvatar[obj.author].name}
                        questionText={obj.optionOne.text}
                        userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>
                )):this.props.answeredQuestionsByUser.map((obj)=>(
                    <UserQuestionCard
                        questionID = {obj.id}
                        questionStatus = 'answered'
                        authorName = {this.props.usersAvatar[obj.author].name}
                        questionText={obj.optionOne.text}
                        userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}) {
    const questionsId = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const questionsOptionOneText = Object.values(questions);
    const usersAvatar = users;
    const answeredQuestionIdsByUser = Object.keys(users[authedUser].answers);
    const answeredQuestionsByUser = Object.keys(users[authedUser].answers).map(
        (questionID) => questions[questionID]
    ).sort((a, b) => b.timestamp - a.timestamp);
    const unansweredQuestionsByUser = Object.values(questions).filter((question) => !answeredQuestionIdsByUser.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
    return {
        questionsId,
        questionsOptionOneText,
        answeredQuestionsByUser,
        usersAvatar,
        unansweredQuestionsByUser
    }
}

export default connect(mapStateToProps)(HomePage)