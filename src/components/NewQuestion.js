import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import {handleSaveQuestionAnswer, handleSaveNewQuestion} from "../actions/shared";

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuestionOptionOne: '',
            newQuestionOptionTwo: '',
        }
        // console.log('my props are ', this.props.authedUser)
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onOptionOneValueChange = this.onOptionOneValueChange.bind(this);
        this.onOptionTwoValueChange = this.onOptionTwoValueChange.bind(this);
    }

    onOptionOneValueChange(event) {
        this.setState({
            newQuestionOptionOne: event.target.value
        });
    }

    onOptionTwoValueChange(event) {
        this.setState({
            newQuestionOptionTwo: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.handleSaveNewQuestion(this.props.authedUser, this.state.newQuestionOptionOne, this.state.newQuestionOptionTwo);

    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Title style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        Create New Question
                    </Card.Title>
                    <br/>
                    <Card.Text style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        Complete the question:
                    </Card.Text>
                    <Card.Header style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <b><em> Would you rather .. </em></b>
                    </Card.Header>
                    <br/>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Label style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>Option One Text</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter option one text"
                            value ={this.state.newQuestionOptionOne}
                            onChange={this.onOptionOneValueChange}/>
                        <br/>
                        <span style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><b>----OR----</b></span>
                        <br/>
                        <Form.Label style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>Option Two Text</Form.Label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter option two text"
                            value ={this.state.newQuestionOptionTwo}
                            onChange={this.onOptionTwoValueChange}/>
                        <button
                            type='submit'
                            style={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            Submit
                        </button>
                    </Form>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps, {handleSaveNewQuestion})(NewQuestion)