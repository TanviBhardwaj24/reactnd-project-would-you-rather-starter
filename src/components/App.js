import '../App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import Login from "./login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import HomePage from "./HomePage";
import ViewPollQuestion from "./ViewPollQuestion";
import PageDoesNotExist from "./PageDoesNotExist";
import NewQuestion from "./NewQuestion";


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
                            <Route exact path="/" component={HomePage} />
                            {/*<Route path='/questions/wrong_id' component={PageDoesNotExist} />*/}
                            <Route path="/questions/:question_id" component={ViewPollQuestion} />
                            <Route path = "/newQuestion" component={NewQuestion}></Route>
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



