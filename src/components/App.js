import '../App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Login from "./login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import authedUser from "../reducers/authedUser";
import HomePage from "./HomePage";

class App extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }
    render() {
        const {authedUser} = this.props;
        console.log('gello')
        console.log(this.props.authedUser)
        return (
            <Router>
                <div>
                    {this.props.authedUser === null ? (
                            <Route>
                                <Login/>
                            </Route>) :
                        (<Route path="/">
                            <HomePage/>
                        </Route>)}
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



