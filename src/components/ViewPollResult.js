import React, {Component} from 'react';
import {connect} from "react-redux";

class ViewPollResult extends Component{
    render(){
        return(
            <div>
                ViewPollResult
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

export default connect(mapStateToProps)(ViewPollResult)