import React, {Component} from 'react';
import { Navbar,NavLink, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        {/*<Nav.Link href="#newQuestion">New Question</Nav.Link>*/}
                        <NavLink to='/add' as={Link}>
                            New Question
                        </NavLink>
                        <Nav.Link href="#leaderboard">LeaderBoard</Nav.Link>
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
