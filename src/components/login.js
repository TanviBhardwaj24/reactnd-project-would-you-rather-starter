import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import authedUser from "../reducers/authedUser";
import NavBar from "./NavBar";


class Login extends Component {
    state = {
        authedUser: null,
    };
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('the value of authedUser', this.state.authedUser);
        setAuthedUser(this.state.authedUser);
    }

    handleUserInput(event) {
        console.log(event.target.value)
        const userId = event.target.value
        this.setState({authedUser: userId})
    }

    render() {
        const disabled = false
        if (this.state === '') {
            this.disabled = true;
        }
        const titleStyle = {
            fontFamily: "Montserrat",
        };
        return (
            <div className="jumbotron vertical-center">
                <NavBar/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col md={{span: 4, offset: 4}}>
                            <h2 style={titleStyle}>WOULD YOU RATHER</h2>
                            <br/>
                            <h4 style={titleStyle}>Please sign in to play</h4>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group>
                                    <Form.Label style={titleStyle}>
                                        Please Select the desired User
                                    </Form.Label>
                                    <br/>
                                    <Form.Control
                                        as='select'
                                        onChange={(event) => this.handleUserInput(event)}
                                    >
                                        <option selected disabled>User Name</option>
                                        {this.props.users.map(({name, id}) => (
                                            <option value={id}>{name}</option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <div>
                                    <button type='submit' disabled={disabled} className='btn btn-primary btn-block '>
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)