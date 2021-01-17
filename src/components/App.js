import '../App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Login from "./login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import authedUser from "../reducers/authedUser";
import HomePage from "./HomePage";
import ViewPollQuestion from "./ViewPollQuestion";
import UserQuestionCard from "./UserQuestionCard";


class App extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        const {authedUser} = this.props;
        // console.log(this.props.authedUser)
        console.log('the props are ', this.props)
        return (
            <Router>
                <div>
                    {this.props.authedUser === null ? (
                            <Route>
                                <Login/>
                            </Route>) :
                        <Switch>
                            <Route path="/" component={HomePage} />
                            {/*<Route path="/questions/:question_id" component={UserQuestionCardCard} />*/}
                        </Switch>}
                </div>
            </Router>
        );
    }

}


function mapStateToProps({authedUser}) {
    return {
        authedUser
    };
}

export default connect(mapStateToProps, {handleInitialData})(App)



