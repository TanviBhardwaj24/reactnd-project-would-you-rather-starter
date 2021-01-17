import React, {Component, useState} from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import UserQuestionCard from "./UserQuestionCard";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state =({
            key: "unanswered"
        })
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(key){
        this.setState({
            key: key
        })
        alert(`selected ${key}`)
    }
    render() {
        console.log('props on the homepage are', this.props)
        console.log('this.state.key',this.state.key)
        return (
            <div>
                <NavBar/>
                <br/>
                <Nav variant="tabs" defaultActiveKey="unanswered" onSelect={this.handleSelect}>
                    {/*{this.state === "unanswered" ? this.props.unansweredQuestionsByUser : this.props.answeredQuestionsByUser}*/}
                    <Nav.Item>
                        <Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="answered">Answered Questions</Nav.Link>
                    </Nav.Item>
                </Nav>
                {this.state.key === "unanswered" ? this.props.unansweredQuestionsByUser.map((obj)=>(
                    <UserQuestionCard
                        questionText={obj.optionOne.text}
                        userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>
                )):this.props.answeredQuestionsByUser.map((obj)=>(
                    <UserQuestionCard
                        questionText={obj.optionOne.text}
                        userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>
                ))}
                {/*<div>*/}
                {/*    {this.props.questionsOptionOneText.map((obj) => (*/}
                {/*        <UserQuestionCard*/}
                {/*            questionText={obj.optionOne.text}*/}
                {/*            userAvatar={this.props.usersAvatar[obj.author].avatarURL}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
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