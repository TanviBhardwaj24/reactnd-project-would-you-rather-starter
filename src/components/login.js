import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthedUser} from "../actions/authedUser";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import authedUser from "../reducers/authedUser";

class Login extends Component {

    onSubmit() {
        console.log('the value of authedUser', this.state.authedUser)
        setAuthedUser(this.state.authedUser)
    }

    handleUserInput(event) {
        console.log(event.target.value)
        const userId = event.target.value
        this.setState({authedUser: userId})
    }

    render() {
        const titleStyle = {
            fontFamily: "Montserrat",
        };
        console.log('the props are', this.props)
        return (
            <div className="jumbotron vertical-center">
                <Container>
                    <Row>
                        <Col md={{span: 4, offset: 4}}>
                            <h1 style={titleStyle}>WOULD YOU RATHER</h1>
                            <h2 style={titleStyle}>Please sign in to play</h2>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group>
                                    <Form.Label style={titleStyle}>Please Select the desired User</Form.Label>
                                    <br/>
                                    <br/>
                                    <Form.Control as="select" onChange={(event) => this.handleUserInput(event)}>
                                        {this.props.users.map(({name, id}) => <option value={id}>{name}</option>)}
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                            <br/>
                            <div>
                                <button type="submit" className="btn btn-primary btn-block ">Submit</button>
                            </div>
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