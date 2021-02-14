import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import NavBar from "./NavBar";

class LeaderBoard extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                {this.props.leaderResults.map((user,index) => (
                    <div key={index}>
                        <Card.Header>
                            LeaderShip Board
                        </Card.Header>
                        <br/>
                        <Card.Title>
                            {user.userName}
                        </Card.Title>
                        <span style={{
                            width: "30%",
                            height: "40%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}><Card.Img src={user.userAvatar}/> </span>
                        <Card.Text>
                            Answered Questions by the User: {user.questionsAnsweredByUser}
                        </Card.Text>
                        <Card.Text>
                            Questions asked by the User: {user.questionsAskedByUser}
                        </Card.Text>
                        <br/>
                        <Card.Title>
                            Final Score is: {user.finalResult}
                        </Card.Title>
                        <br/>
                        <br/>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}) {
    let usersValue = Object.values(users)
    let leaderResults = usersValue.map((user) => ({
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatarURL,
        questionsAskedByUser: user.questions.length,
        questionsAnsweredByUser: Object.keys(user.answers).length,
        finalResult: user.questions.length + Object.keys(user.answers).length
    })).sort((a,b)=>b.finalResult-a.finalResult)
    return {
        leaderResults,
    }
}

export default connect(mapStateToProps)(LeaderBoard)