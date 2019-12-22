import React, {Component} from 'react'
import {Form, FormGroup, Input, Button, FormText, UncontrolledAlert} from 'reactstrap'

export default class Formcomponent extends Component{
    error(){
        return(
            <UncontrolledAlert color="danger">
                Please Enter City and Country
                </UncontrolledAlert>
        )
    }
    render(){
        return(
            <div>
                <div>{this.props.error ? this.error():null} </div>
                <Form onSubmit={this.props.loadWeather} >
                    <Input type="text" name="country" placeholder="Country"/>
                    <Input type="text" name="city" placeholder="City"/>
                    <Button>Search</Button>
                </Form>
            </div>
        )
    }
}