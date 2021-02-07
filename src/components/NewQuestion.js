import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

class NewQuestion extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Title  style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        Create New Question
                    </Card.Title>
                    <br/>
                    <Card.Text  style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        Complete the question:
                    </Card.Text>
                    <Card.Header  style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <b><em> Would you rather .. </em></b>
                    </Card.Header>
                    <br/>
                    <Form>
                        <Form.Label  style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>Option One Text</Form.Label>
                        <Form.Control type="text" placeholder="Enter option one text" />
                        <br/>
                        <span style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><b>----OR----</b></span>
                        <br/>
                        <Form.Label  style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>Option Two Text</Form.Label>
                        <Form.Control   type="text" placeholder="Enter option two text" />
                    </Form>
                </Card>
            </div>
        )
    }

}

export default NewQuestion