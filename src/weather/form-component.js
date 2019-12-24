import React, {Component} from 'react'
import {
    Form,
    FormGroup,
    Input,
    Button,
    FormText,
    UncontrolledAlert,
    Row,
    Col
} from 'reactstrap'

export default class Formcomponent extends Component {
    error_no_input_data = () => {
        return (
            <UncontrolledAlert color="danger">
                Please Enter City and Country
            </UncontrolledAlert>
        )
    }
    error_no_data = () => {
        return (
            <UncontrolledAlert color="danger">
                location not found
            </UncontrolledAlert>
        )
    }
    render() {
        return (
            <div>
                {this.props.error_no_input_data ? this.error_no_input_data() : null}
                {this.props.error_no_data ? this.error_no_data() : null}
                
                
                
                <h1 style={{color:"white"}} className="mt-4 mb-4">Weather Check</h1>
                <Form onSubmit={this.props.loadWeather} >
                    <Row form>
                        <Col md={5}>
                            <Input
                                style={{
                                backgroundColor: "transparent",
                                color: "white",
                                borderBottom: "2px solid whitesmoke",
                                borderRadius: "0"
                            }}
                                type="text"
                                name="country"
                                placeholder="Country"
                                className="mb-4"
                                />
                        </Col>
                        <Col md={5}>
                            <Input
                             style={{
                                backgroundColor: "transparent",
                                color: "white",
                                borderBottom: "2px solid whitesmoke",
                                borderRadius: "0"
                            }}
                             type="text" 
                             name="city" 
                             placeholder="City"
                             className="mb-4"
                             />
                        </Col>
                    <Col md={2}>
                    <Button className="mb-4" color="primary">Search Weather</Button>
                    </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}