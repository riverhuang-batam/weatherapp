import React, {Component} from 'react';



export default class Weather extends Component{
    render(){
        return(
            <div>
                {this.props.city}, {this.props.country}
                <i className={`wi ${this.props.icon} display-1`}/> 
                <div>{this.props.temp_celsius}&deg;</div>
                <div>{this.props.temp_min}&deg;, {this.props.temp_max}&deg;</div>
                <div>{this.props.description}</div>
            </div>
        )
    }
}
