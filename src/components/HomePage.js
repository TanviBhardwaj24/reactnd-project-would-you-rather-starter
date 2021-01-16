import React, {Component} from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
import UserQuestionCard from "./UserQuestionCard";

class HomePage extends Component {
    render() {
        console.log('props on the homepage are', this.props)
        return (
            <div>
                <NavBar/>
                <br/>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Unanswered Questions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Answered Questions</a>
                    </li>
                </ul>
                <div>
                    {/*{this.props.usersAvatar.map((obj)=>(*/}
                    {/*    <UserQuestionCard userAvatar = {obj.avatarURL}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {this.props.questionsOptionOneText.map((obj)=>(
                        <UserQuestionCard
                            questionText = {obj.optionOne.text}
                            userAvatar = {this.props.questionsOptionOneText[obj.author.avatarURL]}/>
                    ))}
                    {/*<UserQuestionCard questionText = {}/>*/}
                    {/*<ul>*/}
                    {/*    {this.props.questionsId.map((id) => (*/}
                    {/*        <li key={id}>*/}
                    {/*            <div>The question is: {id}</div>*/}
                    {/*            /!*<div><UserQuestionCard/></div>*!/*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}) {
    return {
        questionsId: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        questionsOptionOneText: Object.values(questions),
        usersAvatar: Object.values(users)
    }
}

export default connect(mapStateToProps)(HomePage)