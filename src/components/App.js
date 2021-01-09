import '../App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Login from "./login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import authedUser from "../reducers/authedUser";
import HomePage from "./HomePage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {authedUser} = this.props;
        // console.log('my props are', this.props)
        console.log('gello')
        console.log(this.props.authedUser)
        return (
            <Router>
                <div>
                    {this.props.authedUser === undefined ? (
                            <Route exact path="/">
                                <Login/>
                            </Route>) :
                        (<Route path="/home">
                            <HomePage/>
                        </Route>)}
                </div>
            </Router>
        );
    }
}


// function mapStateToProps({authedUser}) {
//     return {
//         authedUser
//     };
// }

export default connect()(App)

