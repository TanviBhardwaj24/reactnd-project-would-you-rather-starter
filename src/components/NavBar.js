import React, {Component} from 'react';
import { Navbar,NavLink, Nav } from 'react-bootstrap';
import {connect} from "react-redux";
import {setAuthedUser} from "../actions/authedUser";
import { Link } from 'react-router-dom';

class NavBar extends Component {
    logout(event){
        event.preventDefault();
        this.props.setAuthedUser(null);
    }
    render() {
        const {authedUser, users} = this.props;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Would You Rather</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to = '/' as={Link}>
                            Home
                        </NavLink>
                        <NavLink to='/add' as={Link}>
                            New Question
                        </NavLink>
                        <NavLink to = '/leaderboard' as={Link}>
                            LeaderBoard
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {authedUser && (
                        <>
                            <Navbar.Text>
                                Signed in as:<a href='#login'>{users[authedUser].name}</a>
                            </Navbar.Text>
                            <button id='logoutButton' onClick={(event) => this.logout(event)}>
                                Logout
                            </button>
                        </>
                    )}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser, users
    };
}
export default connect(mapStateToProps, {setAuthedUser})(NavBar);
