import React, {Component} from 'react';
import {connect} from "react-redux";

class ViewPollQuestion extends Component{
    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser, users}) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(ViewPollQuestion)